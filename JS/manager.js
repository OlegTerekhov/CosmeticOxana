(() => {
  "use strict";
  const SUPABASE_URL = "https://oxcjilamfwablsaxgkye.supabase.co";
  const SUPABASE_KEY = "sb_publishable_g6nbfIzkhoGpubwS0vwQEg_RW41kAsu";
  const API = SUPABASE_URL + "/functions/v1/manager-access";
  const root = document.querySelector("#managerRoot");
  const TOKEN_KEY = "bereg_manager_token";
  let token = sessionStorage.getItem(TOKEN_KEY) || "";
  let orders = [];
  let busy = false;
  const statuses = {new:"Новый",processing:"В обработке",shipped:"Отправлен",completed:"Завершён",cancelled:"Отменён"};
  const money = value => new Intl.NumberFormat("ru-RU").format(Number(value)||0) + " ₽";
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  async function api(action, data = {}) {
    const headers = {"Content-Type":"application/json","apikey":SUPABASE_KEY};
    if (token) headers.Authorization = "Bearer " + token;
    const res = await fetch(API, {method:"POST",headers,body:JSON.stringify({action,...data})});
    const result = await res.json().catch(()=>({}));
    if (!res.ok) {
      if (res.status === 401 && action !== "login") {
        token = ""; sessionStorage.removeItem(TOKEN_KEY);
      }
      throw new Error(result.error || "Ошибка соединения. Попробуйте ещё раз.");
    }
    return result;
  }
  function renderLogin(note="",type="") {
    root.innerHTML = `<section class="manager-card"><div class="manager-lock" aria-hidden="true">⌑</div><p class="overline">ЗАЩИЩЁННЫЙ ВХОД</p><h2>Вход управляющего</h2><p>Введите секретный код, чтобы открыть заказы магазина.</p><form class="manager-form" id="managerLogin"><label>Код доступа<input name="code" type="password" autocomplete="current-password" required placeholder="Введите код управляющего"></label><button type="submit" ${busy?"disabled":""}>${busy?"Проверяем…":"Войти в кабинет"}</button></form><p class="manager-message ${type}" role="status">${esc(note)}</p><p class="manager-order-note">Доступ действует на этом устройстве до 12 часов. Не передавайте код покупателям.</p></section>`;
  }
  function renderOrder(order) {
    const items = Array.isArray(order.items) ? order.items.map(item => `<div class="manager-order-item"><span>${esc(item.name || item.title || item.id)} × ${Number(item.qty)||0}</span><strong>${money(item.line_total ?? ((Number(item.price)||0)*(Number(item.qty)||0)))}</strong></div>`).join("") : "";
    const date = order.created_at ? new Date(order.created_at).toLocaleString("ru-RU",{dateStyle:"medium",timeStyle:"short"}) : "Дата не указана";
    const delivery = ({courier:"Курьерская доставка",post:"Почта / отправка",pickup:"Самовывоз"})[order.delivery_method] || order.delivery_method || "Не указан";
    return `<article class="manager-order"><div class="manager-order-head"><strong>Заказ №${esc(order.order_number || order.id)}</strong><time>${esc(date)}</time></div><div class="manager-order-customer"><strong>${esc(order.customer_name)}</strong><a href="tel:${esc(String(order.customer_phone||"").replace(/[^+0-9]/g,""))}">${esc(order.customer_phone)}</a></div><div class="manager-order-items">${items}</div><div class="manager-order-row"><span>${esc(delivery)}</span><strong class="manager-order-total">${money(order.total)}</strong></div>${order.delivery_address?`<p class="manager-order-note"><b>Адрес:</b> ${esc(order.delivery_address)}</p>`:""}${order.customer_comment?`<p class="manager-order-note"><b>Комментарий:</b> ${esc(order.customer_comment)}</p>`:""}<div class="manager-order-bottom"><label>Статус<select data-status-for="${esc(order.id)}">${Object.entries(statuses).map(([v,l])=>`<option value="${v}" ${order.status===v?"selected":""}>${l}</option>`).join("")}</select></label><button type="button" data-save-status="${esc(order.id)}">Сохранить статус</button></div></article>`;
  }
  function renderDashboard() {
    const fresh = orders.filter(o=>o.status==="new").length;
    const total = orders.reduce((sum,o)=>sum+(Number(o.total)||0),0);
    root.innerHTML = `<section class="manager-card"><div class="manager-toolbar"><div><p class="overline">УПРАВЛЕНИЕ МАГАЗИНОМ</p><h2>Все заказы</h2><p class="manager-order-note">Вход по коду управляющего</p></div><div class="manager-actions"><button type="button" id="refreshOrders">Обновить ↻</button><button type="button" id="managerLogout">Выйти</button></div></div><div class="manager-stats"><div class="manager-stat"><span>Всего загружено</span><strong>${orders.length}</strong></div><div class="manager-stat"><span>Ожидают обработки</span><strong>${fresh}</strong></div><div class="manager-stat"><span>Сумма загруженных заказов</span><strong>${money(total)}</strong></div></div><p class="manager-order-note">Показаны последние ${orders.length} заказов (максимум 100). Сумма рассчитана по загруженным заказам.</p>${orders.length?orders.map(renderOrder).join(""):'<p class="manager-empty">Заказов пока нет. Новые заказы появятся здесь после оформления покупателем.</p>'}</section>`;
  }
  async function loadOrders() {
    root.innerHTML='<section class="manager-card"><p>Загружаем заказы…</p></section>';
    try { const result=await api("list"); orders=result.orders||[]; renderDashboard(); }
    catch(error) { token="";sessionStorage.removeItem(TOKEN_KEY);renderLogin(error.message,"error"); }
  }
  root.addEventListener("submit",async event=>{
    if(event.target.id!=="managerLogin")return;
    event.preventDefault();if(busy)return;busy=true;renderLogin("Проверяем код…");
    const form=new FormData(event.target);const code=String(form.get("code")||"");
    try {const result=await api("login",{code});token=result.token;sessionStorage.setItem(TOKEN_KEY,token);await loadOrders();}
    catch(error){renderLogin(error.message,"error");}
    finally{busy=false;}
  });
  root.addEventListener("click",async event=>{
    if(event.target.closest("#refreshOrders")){await loadOrders();return}
    if(event.target.closest("#managerLogout")){token="";orders=[];sessionStorage.removeItem(TOKEN_KEY);renderLogin("Вы вышли из кабинета.","success");return}
    const button=event.target.closest("[data-save-status]");if(!button)return;
    const id=button.dataset.saveStatus;const select=root.querySelector(`[data-status-for="${CSS.escape(id)}"]`);if(!select)return;
    button.disabled=true;
    try {await api("update",{id,status:select.value});orders=orders.map(o=>String(o.id)===String(id)?{...o,status:select.value}:o);renderDashboard();}
    catch(error){window.alert(error.message);}
    finally{button.disabled=false;}
  });
  if(token)loadOrders();else renderLogin();
})();