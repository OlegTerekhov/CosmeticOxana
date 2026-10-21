(() => {
  "use strict";
  const SUPABASE_URL = "https://oxcjilamfwablsaxgkye.supabase.co";
  const SUPABASE_KEY = "sb_publishable_g6nbfIzkhoGpubwS0vwQEg_RW41kAsu";
  const client = window.supabase?.createClient ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;
  const root = document.querySelector("#managerRoot");
  let session = null;
  let orders = [];
  let busy = false;
  const statuses = {new:"Новый",processing:"В обработке",shipped:"Отправлен",completed:"Завершён",cancelled:"Отменён"};
  const money = value => new Intl.NumberFormat("ru-RU").format(Number(value)||0) + " ₽";
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function message(text, type="") { const el=root.querySelector(".manager-message"); if(el){el.textContent=text;el.className="manager-message "+type;} }
  function renderLogin(note="",type="") {
    root.innerHTML = `<section class="manager-card"><div class="manager-lock" aria-hidden="true">⌑</div><p class="overline">ЗАЩИЩЁННЫЙ ВХОД</p><h2>Вход управляющего</h2><p>Используйте отдельный аккаунт управляющего. Обычный покупатель не получит доступ к заказам.</p><form class="manager-form" id="managerLogin"><label>Электронная почта<input name="email" type="email" autocomplete="username" required placeholder="Почта управляющего"></label><label>Пароль<input name="password" type="password" autocomplete="current-password" required></label><button type="submit" ${busy?"disabled":""}>${busy?"Входим…":"Войти в панель"}</button></form><p class="manager-message ${type}" role="status">${esc(note)}</p><p class="manager-order-note">Это отдельная страница управления. Если вы вошли под аккаунтом покупателя, доступ к панели не будет предоставлен.</p></section>`;
  }
  function renderOrder(order) {
    const items = Array.isArray(order.items) ? order.items.map(item => `<div class="manager-order-item"><span>${esc(item.name)} × ${Number(item.qty)||0}</span><strong>${money(item.line_total)}</strong></div>`).join("") : "";
    const date = order.created_at ? new Date(order.created_at).toLocaleString("ru-RU",{dateStyle:"medium",timeStyle:"short"}) : "Дата не указана";
    const delivery = ({courier:"Курьерская доставка",post:"Почта / отправка",pickup:"Самовывоз"})[order.delivery_method] || order.delivery_method || "Не указан";
    return `<article class="manager-order"><div class="manager-order-head"><strong>Заказ №${esc(order.order_number || order.id)}</strong><time>${esc(date)}</time></div><div class="manager-order-customer"><strong>${esc(order.customer_name)}</strong><a href="tel:${esc(String(order.customer_phone||"").replace(/[^+0-9]/g,""))}">${esc(order.customer_phone)}</a></div><div class="manager-order-items">${items}</div><div class="manager-order-row"><span>${esc(delivery)}</span><strong class="manager-order-total">${money(order.total)}</strong></div>${order.delivery_address?`<p class="manager-order-note"><b>Адрес:</b> ${esc(order.delivery_address)}</p>`:""}${order.customer_comment?`<p class="manager-order-note"><b>Комментарий:</b> ${esc(order.customer_comment)}</p>`:""}<div class="manager-order-bottom"><label>Статус<select data-status-for="${esc(order.id)}">${Object.entries(statuses).map(([v,l])=>`<option value="${v}" ${order.status===v?"selected":""}>${l}</option>`).join("")}</select></label><button type="button" data-save-status="${esc(order.id)}">Сохранить статус</button></div></article>`;
  }
  function renderDashboard() {
    const fresh = orders.filter(o=>o.status==="new").length;
    const total = orders.reduce((sum,o)=>sum+(Number(o.total)||0),0);
    root.innerHTML = `<section class="manager-card"><div class="manager-toolbar"><div><p class="overline">УПРАВЛЕНИЕ МАГАЗИНОМ</p><h2>Все заказы</h2><p class="manager-order-note">${esc(session?.user?.email||"")}</p></div><div class="manager-actions"><button type="button" id="refreshOrders">Обновить ↻</button><button type="button" id="managerLogout">Выйти</button></div></div><div class="manager-stats"><div class="manager-stat"><span>Всего загружено</span><strong>${orders.length}</strong></div><div class="manager-stat"><span>Ожидают обработки</span><strong>${fresh}</strong></div><div class="manager-stat"><span>Сумма загруженных заказов</span><strong>${money(total)}</strong></div></div><p class="manager-order-note">Показаны последние ${orders.length} заказов (максимум 100). Сумма рассчитана по загруженным заказам.</p>${orders.length?orders.map(renderOrder).join(""):'<p class="manager-empty">Заказов пока нет. Новые заказы появятся здесь после оформления покупателем.</p>'}</section>`;
  }
  async function loadOrders() {
    if(!session)return;
    root.innerHTML='<section class="manager-card"><p>Загружаем заказы…</p></section>';
    const {data,error}=await client.from("store_orders").select("*").order("created_at",{ascending:false}).limit(100);
    if(error){renderDashboard();root.insertAdjacentHTML("afterbegin",'<p class="manager-message error">Не удалось загрузить заказы. Проверьте подключение и права доступа.</p>');return}
    orders=data||[];renderDashboard();
  }
  async function checkRole(user) {
    const {data,error}=await client.from("store_admins").select("user_id").eq("user_id",user.id).maybeSingle();
    if(error){session=null;renderLogin("Не удалось проверить права доступа. Попробуйте обновить страницу.","error");return}
    if(!data){await client.auth.signOut();session=null;renderLogin("У этого аккаунта нет прав управляющего. Вход в панель запрещён.","error");return}
    await loadOrders();
  }
  if(!client){renderLogin("Не удалось подключить сервис авторизации.","error");return}
  client.auth.getSession().then(async ({data,error})=>{
    if(error){renderLogin("Не удалось проверить сессию.","error");return}
    session=data.session||null;
    if(session)await checkRole(session.user);else renderLogin();
  });
  client.auth.onAuthStateChange((_event,nextSession)=>{
    session=nextSession||null;
    if(!session)renderLogin();
    else Promise.resolve().then(()=>checkRole(session.user));
  });
  root.addEventListener("submit",async event=>{
    if(event.target.id!=="managerLogin")return;
    event.preventDefault();if(busy)return;busy=true;renderLogin("Проверяем данные…");
    const data=new FormData(event.target);
    const {data:result,error}=await client.auth.signInWithPassword({email:String(data.get("email")||"").trim(),password:String(data.get("password")||"")});
    busy=false;
    if(error){renderLogin("Не удалось войти. Проверьте почту и пароль.","error");return}
    session=result.session;await checkRole(result.user);
  });
  root.addEventListener("click",async event=>{
    if(event.target.closest("#refreshOrders")){await loadOrders();return}
    if(event.target.closest("#managerLogout")){await client.auth.signOut();session=null;orders=[];renderLogin("Вы вышли из кабинета.","success");return}
    const button=event.target.closest("[data-save-status]");if(!button)return;
    const id=button.dataset.saveStatus;const select=root.querySelector(`[data-status-for="${CSS.escape(id)}"]`);if(!select)return;
    button.disabled=true;
    const {error}=await client.from("store_orders").update({status:select.value,updated_at:new Date().toISOString()}).eq("id",id);
    button.disabled=false;
    if(error){window.alert("Не удалось сохранить статус. Проверьте права доступа и повторите попытку.");return}
    orders=orders.map(o=>o.id===id?{...o,status:select.value}:o);renderDashboard();
  });
})();