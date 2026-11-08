(() => {
  "use strict";
  const SUPABASE_URL = "https://oxcjilamfwablsaxgkye.supabase.co";
  const SUPABASE_KEY = "sb_publishable_g6nbfIzkhoGpubwS0vwQEg_RW41kAsu";
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
  const root = document.querySelector("#managerRoot");
  const money = value => new Intl.NumberFormat("ru-RU").format(Number(value) || 0) + " ₽";
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const brandNames = { anapa: "Анапская косметика", blacksea: "Магия Чёрного моря" };
  const statusNames = { new:"Новый", processing:"В обработке", shipped:"Отправлен", completed:"Завершён", cancelled:"Отменён" };
  let user = null;
  let tab = "orders";
  let orders = [];
  let products = [];
  let audit = [];
  let busy = false;
  let editorProduct = null;
  let loginMode = "login";
  let notice = "";
  let noticeType = "";
  let recoveryMode = new URLSearchParams(location.search).get("reset") === "1";

  function message(text, type="") { notice=text; noticeType=type; }
  function renderLogin() {
    if (recoveryMode) {
      root.innerHTML = `<section class="manager-card manager-login"><p class="overline">ВОССТАНОВЛЕНИЕ ДОСТУПА</p><h2>Новый пароль.</h2><form class="manager-form" id="recoveryForm"><label>Новый пароль<input name="password" type="password" minlength="8" autocomplete="new-password" required placeholder="Не менее 8 символов"></label><label>Повторите пароль<input name="confirm" type="password" minlength="8" autocomplete="new-password" required placeholder="Повторите новый пароль"></label><button class="manager-button" type="submit" ${busy?"disabled":""}>${busy?"Сохраняем…":"Сохранить новый пароль"}</button></form><p class="manager-message ${noticeType}">${esc(notice)}</p></section>`;
      return;
    }
    if (loginMode === "forgot") {
      root.innerHTML = `<section class="manager-card manager-login"><p class="overline">ВОССТАНОВЛЕНИЕ ДОСТУПА</p><h2>Вернём доступ.</h2><p class="manager-muted">Укажите почту аккаунта управляющего. Мы отправим ссылку для создания нового пароля.</p><form class="manager-form" id="forgotForm"><label>Электронная почта<input name="email" type="email" autocomplete="email" required placeholder="name@example.com"></label><button class="manager-button" type="submit" ${busy?"disabled":""}>${busy?"Отправляем…":"Отправить ссылку"}</button></form><button class="manager-link" type="button" data-back-login>Вернуться ко входу</button><p class="manager-message ${noticeType}">${esc(notice)}</p></section>`;
      return;
    }
    root.innerHTML = `<section class="manager-card manager-login"><p class="overline">ЗАЩИЩЁННЫЙ ВХОД</p><h2>Здравствуйте.</h2><p class="manager-muted">Войдите по персональной почте и паролю управляющего. Регистрация управляющих через эту страницу закрыта.</p><form class="manager-form" id="loginForm"><label>Электронная почта<input name="email" type="email" autocomplete="username" required placeholder="Электронная почта Оксаны"></label><label>Пароль<input name="password" type="password" autocomplete="current-password" required placeholder="Ваш пароль"></label><button class="manager-button" type="submit" ${busy?"disabled":""}>${busy?"Проверяем…":"Войти в кабинет"}</button></form><button class="manager-link" type="button" data-forgot>Забыли пароль?</button><p class="manager-message ${noticeType}" role="status">${esc(notice)}</p></section>`;
  }
  function renderDashboard() {
    const fresh = orders.filter(o=>o.status==="new").length;
    const turnover = orders.filter(o=>o.status!=="cancelled").reduce((sum,o)=>sum+(Number(o.total)||0),0);
    const active = products.filter(p=>p.is_active).length;
    root.innerHTML = `<section class="manager-card">
      <div class="manager-topline"><div><p class="overline">УПРАВЛЕНИЕ МАГАЗИНОМ</p><h2>Здравствуйте, Оксана.</h2><p class="manager-muted">${esc(user.email)} · персональный аккаунт управляющего</p></div><div class="manager-top-actions"><button type="button" id="refreshAll">Обновить данные ↻</button><button type="button" id="logout">Выйти</button></div></div>
      <div class="manager-stats"><div class="manager-stat"><span>Новые заказы</span><strong>${fresh}</strong></div><div class="manager-stat"><span>Заказов загружено</span><strong>${orders.length}</strong></div><div class="manager-stat"><span>Активных товаров</span><strong>${active}</strong></div></div>
      <div class="manager-tabs" role="tablist"><button class="manager-tab ${tab==="orders"?"active":""}" data-tab="orders">Заказы</button><button class="manager-tab ${tab==="products"?"active":""}" data-tab="products">Товары</button><button class="manager-tab ${tab==="activity"?"active":""}" data-tab="activity">Журнал действий</button></div>
      <div id="managerTabContent">${tab==="orders"?renderOrders():tab==="products"?renderProducts():renderActivity()}</div>
      <p class="manager-muted" style="margin-top:22px">Сумма загруженных заказов без отменённых: ${money(turnover)}. Доступ защищён Supabase Auth и правами управляющего.</p>
    </section>`;
  }
  function renderOrders() {
    if (!orders.length) return '<div class="manager-empty">Заказов пока нет. Новые заказы появятся здесь после оформления покупателем.</div>';
    return `<div class="manager-toolbar"><h3>Заказы магазина</h3><span class="manager-muted">Последние ${orders.length} заказов</span></div>` + orders.map(order => {
      const date = order.created_at ? new Date(order.created_at).toLocaleString("ru-RU",{dateStyle:"medium",timeStyle:"short"}) : "Дата не указана";
      const delivery = ({courier:"Курьерская доставка",post:"Почта / отправка",pickup:"Самовывоз",russian_post:"Почта России",cdek:"СДЭК"})[order.delivery_method] || order.delivery_method || "Не указан";
      const items = Array.isArray(order.items) ? order.items.map(item=>`<div class="manager-order-item"><span>${esc(item.name||item.title||item.id)} × ${Number(item.qty)||0}</span><strong>${money(item.line_total ?? ((Number(item.price)||0)*(Number(item.qty)||0)))}</strong></div>`).join("") : "";
      return `<article class="manager-order"><div class="manager-order-head"><strong>Заказ №${esc(order.order_number||order.id)}</strong><span class="manager-muted">${esc(date)}</span></div><div class="manager-order-customer"><strong>${esc(order.customer_name)}</strong><a href="tel:${esc(String(order.customer_phone||"").replace(/[^+0-9]/g,""))}">${esc(order.customer_phone)}</a></div><div class="manager-order-items">${items}</div><div class="manager-row"><span class="manager-muted">${esc(delivery)}</span><strong class="manager-order-total">${money(order.total)}</strong></div>${order.delivery_address?`<p class="manager-muted"><b>Адрес:</b> ${esc(order.delivery_address)}</p>`:""}${order.customer_comment?`<p class="manager-muted"><b>Комментарий:</b> ${esc(order.customer_comment)}</p>`:""}<div class="manager-order-bottom"><label>Статус заказа<select data-order-status="${esc(order.id)}">${Object.entries(statusNames).map(([v,l])=>`<option value="${v}" ${order.status===v?"selected":""}>${l}</option>`).join("")}</select></label><button type="button" data-save-order="${esc(order.id)}">Сохранить статус</button></div></article>`;
    }).join("");
  }
  function renderProducts() {
    const list = products.map(p => `<article class="manager-product">
      ${p.image?`<img src="${esc(p.image)}" alt="" loading="lazy">`:'<div class="manager-preview"></div>'}
      <div><span class="manager-muted">${esc(brandNames[p.brand]||p.brand)} · ${esc(({face:"Лицо",body:"Тело",hair:"Волосы"})[p.category]||p.category)}</span><h3>${esc(p.name)}</h3><div class="manager-row"><strong>${p.price==null?"Цена не указана":money(p.price)}</strong><span class="manager-badge ${p.is_active?"":"off"}">${p.is_active?"В каталоге":"Скрыт"}</span></div></div>
      <div class="manager-product-actions"><button type="button" data-edit-product="${esc(p.id)}">Изменить</button><button type="button" data-toggle-product="${esc(p.id)}">${p.is_active?"Скрыть":"Вернуть"}</button><button type="button" class="danger" data-delete-product="${esc(p.id)}">Удалить</button></div>
    </article>`).join("");
    return `<div class="manager-toolbar"><h3>Каталог · ${products.length}</h3><button type="button" class="manager-button" id="newProduct">Добавить товар +</button></div><input class="manager-search" id="productSearch" type="search" placeholder="Найти товар по названию…"><div id="productList">${list||'<p class="manager-empty">Товаров пока нет.</p>'}</div>${editorProduct!==null?renderEditor():""}`;
  }
  function renderEditor() {
    const p = editorProduct || {id:"",brand:"anapa",brand_name:brandNames.anapa,name:"",type:"",description:"",price:"",image:"",category:"face",tag:"",is_active:true};
    return `<section class="manager-editor"><p class="overline">${p.id?"РЕДАКТИРОВАНИЕ ТОВАРА":"НОВЫЙ ТОВАР"}</p><h3 class="manager-panel-title">${p.id?"Изменить карточку":"Добавить в каталог"}</h3><form id="productForm" class="manager-form">
      <input type="hidden" name="id" value="${esc(p.id)}"><input type="hidden" name="image" value="${esc(p.image||"")}">
      <div class="manager-editor-grid">
        <label>Бренд<select name="brand" required><option value="anapa" ${p.brand==="anapa"?"selected":""}>Анапская косметика</option><option value="blacksea" ${p.brand==="blacksea"?"selected":""}>Магия Чёрного моря</option></select></label>
        <label>Категория<select name="category" required><option value="face" ${p.category==="face"?"selected":""}>Уход за лицом</option><option value="body" ${p.category==="body"?"selected":""}>Уход за телом</option><option value="hair" ${p.category==="hair"?"selected":""}>Уход за волосами</option></select></label>
        <label class="wide">Название товара<input name="name" maxlength="200" required value="${esc(p.name)}"></label>
        <label>Тип товара<input name="type" maxlength="120" value="${esc(p.type||"")}"></label>
        <label>Цена, ₽<input name="price" type="number" min="0" step="0.01" value="${p.price==null?"":esc(p.price)}" placeholder="Например, 1299"></label>
        <label>Короткая метка<input name="tag" maxlength="60" value="${esc(p.tag||"")}" placeholder="УВЛАЖНЕНИЕ"></label>
        <label>Фотография товара<input name="image_file" type="file" accept="image/jpeg,image/png,image/webp"></label>
        <label class="wide">Описание<textarea name="description" rows="4" maxlength="4000">${esc(p.description||"")}</textarea></label>
        <label class="wide"><span><input name="is_active" type="checkbox" ${p.is_active?"checked":""}> Показывать товар в каталоге</span></label>
      </div>
      ${p.image?`<p class="manager-muted">Текущее изображение:</p><img class="manager-preview" src="${esc(p.image)}" alt="Текущее фото">`:""}
      <div class="manager-editor-actions"><button class="manager-button" type="submit" ${busy?"disabled":""}>${busy?"Сохраняем…":"Сохранить товар"}</button><button class="manager-button secondary" type="button" id="cancelEditor">Отмена</button></div>
      <p class="manager-message" id="editorMessage"></p>
    </form></section>`;
  }
  function renderActivity() {
    if (!audit.length) return '<div class="manager-empty">Журнал пока пуст. Изменения заказов и товаров будут записываться автоматически.</div>';
    const labels={created:"Товар добавлен",updated:"Товар изменён",deleted:"Товар удалён",status_changed:"Изменён статус заказа"};
    return `<div class="manager-toolbar"><h3>История действий</h3><span class="manager-muted">Последние ${audit.length} записей</span></div>`+audit.map(row=>{
      const data=row.after_data||row.before_data||{};
      const subject=row.entity_type==="order"?"Заказ №"+(data.order_number||row.entity_id):(data.name||"Товар");
      const details=row.action==="status_changed"?"Статус: "+(row.before_data?.status||"—")+" → "+(row.after_data?.status||"—"):row.action==="updated"?"Карточка товара обновлена":row.action==="deleted"?"Карточка удалена":"Создана карточка товара";
      return `<article class="manager-audit"><div class="manager-row"><strong>${esc(labels[row.action]||row.action)} · ${esc(subject)}</strong><span class="manager-muted">${esc(new Date(row.created_at).toLocaleString("ru-RU"))}</span></div><span class="manager-muted">${esc(details)} · Оксана</span></article>`;
    }).join("");
  }
  async function loadData() {
    const [orderResult,productResult,auditResult] = await Promise.all([
      supabase.from("store_orders").select("*").order("created_at",{ascending:false}).limit(100),
      supabase.from("store_products").select("*").order("brand").order("sort_order"),
      supabase.from("store_admin_audit_log").select("*").order("created_at",{ascending:false}).limit(100)
    ]);
    if(orderResult.error) throw new Error("Не удалось загрузить заказы: "+orderResult.error.message);
    if(productResult.error) throw new Error("Не удалось загрузить товары: "+productResult.error.message);
    if(auditResult.error) throw new Error("Не удалось загрузить журнал: "+auditResult.error.message);
    orders=orderResult.data||[]; products=productResult.data||[]; audit=auditResult.data||[];
    renderDashboard();
  }
  async function enter(session) {
    if(!session?.user){user=null;renderLogin();return}
    const {data,error}=await supabase.from("store_admins").select("user_id").eq("user_id",session.user.id).maybeSingle();
    if(error||!data){
      await supabase.auth.signOut();
      user=null;message(error?"Не удалось проверить права доступа. Попробуйте позже.":"У этого аккаунта нет прав управляющего.","error");renderLogin();return;
    }
    user=session.user;
    try{await loadData()}catch(e){message(e.message,"error");renderLogin()}
  }
  async function uploadImage(file,brand) {
    if(!file)return null;
    if(!["image/jpeg","image/png","image/webp"].includes(file.type))throw new Error("Можно загрузить только JPG, PNG или WEBP.");
    if(file.size>5*1024*1024)throw new Error("Размер фотографии не должен превышать 5 МБ.");
    const ext=({ "image/jpeg":"jpg","image/png":"png","image/webp":"webp" })[file.type];
    const path=brand+"/"+crypto.randomUUID()+"."+ext;
    const {error}=await supabase.storage.from("store-products").upload(path,file,{contentType:file.type,upsert:false});
    if(error)throw new Error("Не удалось загрузить фотографию: "+error.message);
    return supabase.storage.from("store-products").getPublicUrl(path).data.publicUrl;
  }
  root.addEventListener("submit",async event=>{
    event.preventDefault();
    if(event.target.id==="loginForm"){
      if(busy)return;busy=true;message("Проверяем доступ…");renderLogin();
      const data=new FormData(event.target);
      const {data:result,error}=await supabase.auth.signInWithPassword({email:String(data.get("email")||"").trim(),password:String(data.get("password")||"")});
      busy=false;
      if(error){message("Не удалось войти. Проверьте почту и пароль.","error");renderLogin();return}
      await enter(result.session);return;
    }
    if(event.target.id==="forgotForm"){
      if(busy)return;busy=true;const data=new FormData(event.target);const email=String(data.get("email")||"").trim();
      const {error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname+"?reset=1"});
      busy=false;message(error?"Не удалось отправить письмо. Проверьте адрес и настройки почты.":"Если адрес зарегистрирован, на него придёт письмо со ссылкой для смены пароля.","success");renderLogin();return;
    }
    if(event.target.id==="recoveryForm"){
      if(busy)return;const data=new FormData(event.target);const password=String(data.get("password")||"");const confirm=String(data.get("confirm")||"");
      if(password.length<8||password!==confirm){message("Пароли должны совпадать и содержать не менее 8 символов.","error");renderLogin();return}
      busy=true;const {error}=await supabase.auth.updateUser({password});busy=false;
      if(error){message("Не удалось обновить пароль. Запросите новую ссылку.","error");renderLogin();return}
      recoveryMode=false;history.replaceState(null,"",location.pathname);message("Пароль изменён. Теперь войдите в кабинет.","success");await supabase.auth.signOut();renderLogin();return;
    }
    if(event.target.id==="productForm"){
      if(busy)return;busy=true;
      const form=event.target;const data=new FormData(form);const id=String(data.get("id")||"")||crypto.randomUUID();
      const brand=String(data.get("brand")||"anapa");let image=String(data.get("image")||"");
      const file=form.elements.image_file.files[0];
      try{
        const uploaded=await uploadImage(file,brand);if(uploaded)image=uploaded;
        const existing=products.find(p=>p.id===id);
        const maxOrder=products.filter(p=>p.brand===brand).reduce((m,p)=>Math.max(m,Number(p.sort_order)||0),-1);
        const row={id,brand,brand_name:brandNames[brand],name:String(data.get("name")||"").trim(),type:String(data.get("type")||"").trim(),description:String(data.get("description")||"").trim(),price:String(data.get("price")||"").trim()===""?null:Number(data.get("price")),image,category:String(data.get("category")||"face"),tag:String(data.get("tag")||"").trim(),is_active:form.elements.is_active.checked,sort_order:existing?.sort_order??maxOrder+1,updated_at:new Date().toISOString(),updated_by:user.id};
        if(!row.name||row.price!==null&&(!Number.isFinite(row.price)||row.price<0))throw new Error("Проверьте название и цену товара.");
        const {error}=await supabase.from("store_products").upsert(row,{onConflict:"id"});
        if(error)throw new Error("Не удалось сохранить товар: "+error.message);
        editorProduct=null;message("Карточка товара сохранена.","success");await loadData();
      }catch(error){busy=false;renderDashboard();const el=document.querySelector("#editorMessage");if(el)el.textContent=error.message;return}
      busy=false;return;
    }
  });
  root.addEventListener("click",async event=>{
    if(event.target.closest("[data-forgot]")){loginMode="forgot";message("");renderLogin();return}
    if(event.target.closest("[data-back-login]")){loginMode="login";message("");renderLogin();return}
    if(event.target.closest("#logout")){await supabase.auth.signOut();user=null;orders=[];products=[];audit=[];tab="orders";message("Вы вышли из кабинета.","success");renderLogin();return}
    if(event.target.closest("#refreshAll")){try{await loadData();message("Данные обновлены.","success")}catch(e){message(e.message,"error");renderDashboard()}return}
    const tabButton=event.target.closest("[data-tab]");if(tabButton){tab=tabButton.dataset.tab;editorProduct=null;renderDashboard();return}
    if(event.target.closest("#newProduct")){editorProduct={};renderDashboard();document.querySelector("#productForm")?.scrollIntoView({behavior:"smooth",block:"start"});return}
    if(event.target.closest("#cancelEditor")){editorProduct=null;renderDashboard();return}
    const edit=event.target.closest("[data-edit-product]");if(edit){editorProduct=products.find(p=>p.id===edit.dataset.editProduct)||null;renderDashboard();document.querySelector("#productForm")?.scrollIntoView({behavior:"smooth",block:"start"});return}
    const toggle=event.target.closest("[data-toggle-product]");if(toggle){const p=products.find(x=>x.id===toggle.dataset.toggleProduct);if(!p)return;const {error}=await supabase.from("store_products").update({is_active:!p.is_active,updated_at:new Date().toISOString(),updated_by:user.id}).eq("id",p.id);if(error){message("Не удалось изменить видимость товара.","error")}else message(p.is_active?"Товар скрыт из каталога.":"Товар возвращён в каталог.","success");await loadData();return}
    const del=event.target.closest("[data-delete-product]");if(del){const p=products.find(x=>x.id===del.dataset.deleteProduct);if(!p||!confirm("Удалить товар «"+p.name+"» без возможности восстановления?"))return;const {error}=await supabase.from("store_products").delete().eq("id",p.id);if(error){message("Не удалось удалить товар: "+error.message,"error")}else message("Товар удалён. Запись сохранена в журнале.","success");await loadData();return}
    const saveOrder=event.target.closest("[data-save-order]");if(saveOrder){const id=saveOrder.dataset.saveOrder;const select=root.querySelector('[data-order-status="'+CSS.escape(id)+'"]');if(!select)return;saveOrder.disabled=true;const {error}=await supabase.from("store_orders").update({status:select.value,updated_at:new Date().toISOString()}).eq("id",id);saveOrder.disabled=false;if(error){message("Не удалось изменить статус заказа.","error")}else message("Статус заказа обновлён. Изменение записано в журнал.","success");await loadData();return}
  });
  root.addEventListener("input",event=>{
    if(event.target.id!=="productSearch")return;
    const term=event.target.value.trim().toLocaleLowerCase("ru");
    root.querySelectorAll("[data-edit-product]").forEach(button=>{
      const card=button.closest(".manager-product");const product=products.find(p=>p.id===button.dataset.editProduct);
      if(card)card.hidden=!!term&&!String(product?.name||"").toLocaleLowerCase("ru").includes(term);
    });
  });
  root.addEventListener("change",event=>{
    if(event.target.name!=="image_file")return;
    const file=event.target.files[0];if(!file)return;
    const messageEl=root.querySelector("#editorMessage");if(messageEl)messageEl.textContent="Выбрано изображение: "+file.name;
  });
  supabase.auth.onAuthStateChange((event,session)=>{
    if(event==="PASSWORD_RECOVERY"){recoveryMode=true;message("Создайте новый пароль для кабинета.","success");renderLogin()}
    if(event==="SIGNED_OUT"){user=null;orders=[];products=[];audit=[];renderLogin()}
  });
  supabase.auth.getSession().then(({data,error})=>{
    if(error){message("Не удалось восстановить сессию. Войдите снова.","error");renderLogin();return}
    if(data.session)enter(data.session);else renderLogin();
  });
})();