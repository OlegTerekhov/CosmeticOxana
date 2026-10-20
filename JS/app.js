const products = [
  {id:"a1",brand:"anapa",brandName:"Анапская косметика",name:"Увлажняющая сыворотка для лица с водорослями и молочными пептидами",type:"Сыворотка для лица",description:"Интенсивно увлажняет кожу, способствует поддержанию её упругости и эластичности, помогает сделать кожу более гладкой и мягкой. Подходит для ежедневного ухода, придаёт коже свежий и ухоженный вид.",price:999,image:"",category:"face",tag:"УВЛАЖНЕНИЕ"},
  {id:"a9",brand:"anapa",brandName:"Анапская косметика",name:"Крем для лица матирующий",type:"Матирующий крем для лица",description:"Матирующий крем для лица для ежедневного ухода за кожей, склонной к жирному блеску. Помогает сделать кожу визуально более ровной и ухоженной, уменьшает выраженность блеска и оставляет ощущение свежести. Подходит для тех, кто предпочитает лёгкий, аккуратный финиш без лишнего блеска.",price:999,image:"",category:"face",tag:"МАТИРОВАНИЕ"},
  {id:"a10",brand:"anapa",brandName:"Анапская косметика",name:"Сыворотка для проблемной кожи себорегулирующая с водорослями и цинком",type:"Себорегулирующая сыворотка для лица",description:"Сыворотка для ежедневного ухода за проблемной кожей, склонной к жирному блеску. Помогает поддерживать более сбалансированный вид кожи, уменьшать ощущение избыточной жирности и сохранять ощущение свежести. Водоросли и цинк указаны в названии средства; результат зависит от состава и индивидуальных особенностей кожи.",price:999,image:"",category:"face",tag:"СЕБОРЕГУЛЯЦИЯ"},
  {id:"a11",brand:"anapa",brandName:"Анапская косметика",name:"Глиняная маска для лица с экстрактом красного вина",type:"Глиняная маска для лица",description:"Маска для ухода за кожей лица с глиной и экстрактом красного вина. Помогает очищать кожу от повседневных загрязнений и излишков кожного сала, оставляя ощущение чистоты и свежести. Используйте согласно инструкции производителя; индивидуальная реакция кожи может различаться.",price:999,image:"",category:"face",tag:"ОЧИЩЕНИЕ"},
  {id:"a12",brand:"anapa",brandName:"Анапская косметика",name:"Мицеллярная вода для снятия макияжа с зеленым чаем",type:"Мицеллярная вода",description:"Средство для ежедневного очищения кожи и снятия макияжа. Помогает удалить косметику и повседневные загрязнения, оставляя кожу чистой и свежей. Зеленый чай указан в названии средства; особенности действия зависят от полного состава продукта. Избегайте попадания в глаза и используйте согласно инструкции производителя.",price:999,image:"",category:"face",tag:"СНЯТИЕ МАКИЯЖА"},
  {id:"a13",brand:"anapa",brandName:"Анапская косметика",name:"Гидрофильное масло для сухой и чувствительной кожи лица",type:"Гидрофильное масло для лица",description:"Мягкое средство для первого этапа очищения сухой и чувствительной кожи. Помогает растворять макияж, солнцезащитные средства и повседневные загрязнения, облегчая очищение кожи. После нанесения эмульгируйте водой и тщательно смойте согласно инструкции производителя. Индивидуальная переносимость зависит от полного состава средства.",price:999,image:"",category:"face",tag:"МЯГКОЕ ОЧИЩЕНИЕ"},
  {id:"b1",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Бутилированная морская вода",type:"Бутилированная морская вода",description:"Для приготовления домашних средств косметического ухода и промывания полости носа в домашних условиях.",price:999,image:"./images/Морская%20вода.jpg",category:"face",tag:"МОРСКАЯ ВОДА"},
  {id:"b3",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Спрей для волос",type:"Спрей для волос",description:"Для ухода за волосами и кожей головы.",price:999,image:"./images/Спрей%20для%20волос.jpg",category:"body",tag:"УХОД ЗА ВОЛОСАМИ"},
  {id:"b2",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Спрей для носа и горла",type:"Спрей для носа и горла",description:"Для промывания полости горла и носа. В комплекте дополнительная насадка для удобного применения.",price:999,image:"",category:"face",tag:"ДОПОЛНИТЕЛЬНАЯ НАСАДКА"},
  {id:"b4",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Молочко для тела с морской водой и пантенолом",type:"Молочко для тела",description:"Лёгкое увлажняющее молочко с эффектом морской свежести. Увлажняет и смягчает кожу, быстро впитывается без следов, помогает успокоить раздражение и кожу после загара. Способствует восстановлению кожи, делает её мягкой, бархатистой и упругой. Обладает детоксицирующим действием. Заявлено также для ускорения заживления ссадин и синяков.",price:999,image:"",category:"body",tag:"НОВИНКА"},
  {id:"b5",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Крем для рук увлажняющий с морской водой, алоэ и витамином Е",type:"Крем для рук",description:"Увлажняющий крем для рук с защитным и смягчающим действием, который быстро впитывается. Увлажняет и смягчает кожу, помогает уменьшить ощущение раздражения и защищает от воздействия внешней среды. Способствует восстановлению кожи после мытья, холода, ветра и бытовых нагрузок. Делает кожу бархатистой, упругой и более ровной. Заявленный эффект сглаживания морщинок зависит от особенностей кожи и состава средства.",price:999,image:"",category:"body",tag:"НОВИНКА"},
  {id:"b6",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Крем для ног питательный с морской водой, мочевиной и витамином F",type:"Крем для ног",description:"Питательный крем для стоп, предназначенный для ухода за огрубевшей и сухой кожей. Помогает размягчить огрубевший роговой слой, смягчает сухую кожу ног и уменьшает шероховатость. Способствует удержанию влаги, делает кожу более гладкой и поддерживает липидный барьер и защитную функцию кожи. Для удаления мозолей и натоптышей может потребоваться дополнительный специализированный уход.",price:999,image:"",category:"body",tag:"НОВИНКА"},
  {id:"b7",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Мист для лица увлажняющий с морской водой и алоэ вера",type:"Мист для лица",description:"Увлажняющий мист для лица, который освежает и помогает успокоить кожу в течение дня. Помогает поддерживать увлажнённость кожи, удерживать влагу в её верхних слоях и поддерживать водно-солевой баланс. Дарит ощущение свежести и помогает коже выглядеть отдохнувшей. Особенно приятен в жаркую погоду и в помещениях с кондиционером.",price:999,image:"",category:"face",tag:"НОВИНКА"},
  {id:"b8",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Мист для тела парфюмированный с морской водой и ароматом спелой вишни",type:"Мист для тела",description:"Освежающий парфюмированный мист с летним ароматом и увлажняющим действием. Освежает кожу, помогает поддерживать её увлажнённость и водно-солевой баланс, успокаивает и способствует удержанию влаги. Помогает уменьшить ощущение дискомфорта после загара и пилингов. Аромат спелой вишни дарит настроение летнего тепла и сладости.",price:999,image:"",category:"body",tag:"НОВИНКА"},
  {id:"b9",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Спрей для волос 3в1 с морской водой, эластином и коллагеном",type:"Спрей для волос 3в1",description:"Многофункциональный спрей для укладки, упругости и естественного блеска волос. Помогает ухаживать за волосами, уменьшает ощущение сухости, облегчает расчёсывание и придаёт объём. Подходит для создания эффекта beach waves, оставляет матовый блеск и не утяжеляет волосы. Варианты аромата: «Чайное дерево» — свежий, «Роза-Лаванда» — с настроением весеннего пробуждения.",price:999,image:"",category:"body",tag:"НОВИНКА"}
];

const SUPABASE_URL = "https://oxcjilamfwablsaxgkye.supabase.co";
const SUPABASE_KEY = "sb_publishable_g6nbfIzkhoGpubwS0vwQEg_RW41kAsu";
const supabaseClient = window.supabase?.createClient ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;
const savedCart = load("bereg-cart", []);
const savedFavorites = load("bereg-favorites", []);
const state = {cart:Array.isArray(savedCart) ? savedCart.filter(item => item && products.some(p => p.id === item.id) && Number.isInteger(item.qty) && item.qty > 0) : [],favorites:Array.isArray(savedFavorites) ? savedFavorites.filter(id => products.some(p => p.id === id)) : [],page:"home",category:{anapa:"all",blacksea:"all"}};
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
let authSession = null;
let accountMode = "login";
let accountBusy = false;
let accountMessage = "";
let accountMessageType = "info";
let profile = {display_name:"",phone:""};
let isStoreAdmin = false;
let sellerOrders = [];
let sellerOrdersLoading = false;
let pushEnabled = false;
let pushBusy = false;
let pushMessage = "";

function load(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function save(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
function money(n){return new Intl.NumberFormat("ru-RU").format(n)+" ₽"}
function escapeHTML(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
function productCard(p){return `<article class="product-card"><div class="product-image ${p.image?"":"product-image-placeholder"}">${p.image?`<img src="${p.image}" alt="${p.name} — ${p.type}" loading="lazy">`:""}<span class="product-tag">${p.tag}</span><button class="favorite ${state.favorites.includes(p.id)?"is-favorite":""}" data-favorite="${p.id}" aria-label="${state.favorites.includes(p.id)?"Убрать из избранного":"В избранное"}" aria-pressed="${state.favorites.includes(p.id)}">${state.favorites.includes(p.id)?"♥":"♡"}</button></div><div class="product-info"><span class="product-brand">${p.brandName}</span><h3 class="product-name">${p.name}</h3><div class="product-buy"><span class="product-price">${money(p.price)}</span><div class="product-actions">${p.description.trim()?`<button class="add-button" data-description="${p.id}" aria-haspopup="dialog">Описание</button>`:""}<button class="add-button" data-add="${p.id}">В корзину&nbsp; +</button></div></div></div></article>`}
function renderCatalog(brand){const target=$("#"+brand+"Products");if(!target)return;const category=state.category[brand]||"all";const list=products.filter(p=>p.brand===brand&&(category==="all"||p.category===category));target.innerHTML=list.length?list.map(productCard).join(''):'<div class="catalog-empty">В этой категории пока нет товаров.<br><span>Попробуйте выбрать другой тип ухода.</span></div>';$("#"+brand+"Count").textContent=list.length+" "+plural(list.length,"товар","товара","товаров")+" · коллекция бренда";$$("[data-category-filter=\""+brand+"\"]").forEach(button=>{const active=button.dataset.category===category;button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active))})}
function renderCart(){const totalCount=state.cart.reduce((n,item)=>n+item.qty,0);$("#navCartCount").textContent=totalCount;const desktopCount=$("#desktopCartCount");if(desktopCount)desktopCount.textContent=totalCount;$("#cartCountLabel").textContent=totalCount+" "+plural(totalCount,"товар","товара","товаров");const items=$("#cartItems");if(!state.cart.length){items.innerHTML='<div class="empty-cart"><strong>Пока здесь тихо.</strong><span>Ваша корзина ждёт маленькую частичку юга.</span><br><button class="add-button" data-go="anapa">Перейти к коллекции</button></div>';$("#cartSummary").hidden=true;return}$("#cartSummary").hidden=false;items.innerHTML=state.cart.map(item=>{const p=products.find(p=>p.id===item.id);if(!p)return "";return `<article class="cart-row"><img src="${p.image}" alt="" loading="lazy"><div><h3>${p.name}</h3><p>${p.brandName}</p></div><div class="quantity"><button data-qty="${p.id}" data-delta="-1" aria-label="Уменьшить количество">−</button><span>${item.qty}</span><button data-qty="${p.id}" data-delta="1" aria-label="Увеличить количество">+</button></div><strong class="row-price">${money(p.price*item.qty)}</strong><button class="remove-button" data-remove="${p.id}" aria-label="Удалить товар">×</button></article>`}).join("");$("#cartTotal").textContent=money(state.cart.reduce((sum,item)=>sum+(products.find(p=>p.id===item.id)?.price||0)*item.qty,0))}
function plural(n,a,b,c){const x=n%10,y=n%100;return y>=11&&y<=14?c:x===1?a:x>=2&&x<=4?b:c}
function toast(message){const el=$("#toast");if(!el)return;el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2600)}
function go(page){if(!["home","anapa","blacksea","cart","contacts","account"].includes(page))return;window.scrollTo(0,0);state.page=page;document.body.classList.toggle("subpage",page!=="home");$$(".screen").forEach(el=>el.classList.toggle("active",el.id===(page==="home"?"homeScreen":page)));$$(".page-section").forEach(el=>el.classList.toggle("active",el.id===page));$$("[data-go]").forEach(el=>el.classList.toggle("active",el.dataset.go===page));if(page==="cart")renderCart();if(page==="anapa"||page==="blacksea")renderCatalog(page);if(page==="account")renderAccount();history.replaceState(null,"","#"+page)}
function openProductDescription(id){const p=products.find(item=>item.id===id);if(!p)return;const modal=$("#descriptionModal");if(!modal)return;$("#descriptionModalTitle").textContent=p.name;$("#descriptionModalType").textContent=p.type||p.brandName;$("#descriptionModalText").textContent=p.description.trim()||"Описание этого товара скоро появится.";modal.hidden=false;document.body.classList.add("modal-open");$("#descriptionModalClose").focus()}
function closeProductDescription(){const modal=$("#descriptionModal");if(!modal||modal.hidden)return;modal.hidden=true;document.body.classList.remove("modal-open")}
function addToCart(id){const existing=state.cart.find(i=>i.id===id);if(existing)existing.qty++;else state.cart.push({id,qty:1});save("bereg-cart",state.cart);renderCart();const p=products.find(p=>p.id===id);toast((p?.name||"Товар")+" добавлен в корзину")}
function changeQty(id,delta){const item=state.cart.find(i=>i.id===id);if(!item)return;item.qty+=delta;if(item.qty<1)state.cart=state.cart.filter(i=>i.id!==id);save("bereg-cart",state.cart);renderCart()}
async function toggleFavorite(id){if(state.favorites.includes(id))state.favorites=state.favorites.filter(x=>x!==id);else state.favorites.push(id);save("bereg-favorites",state.favorites);renderCatalog("anapa");renderCatalog("blacksea");if(authSession&&supabaseClient){const result=state.favorites.includes(id)?await supabaseClient.from("user_favorites").upsert({user_id:authSession.user.id,product_id:id},{onConflict:"user_id,product_id"}):await supabaseClient.from("user_favorites").delete().eq("user_id",authSession.user.id).eq("product_id",id);if(result.error)toast("Избранное сохранено на этом устройстве; облачная синхронизация временно недоступна")}else toast(state.favorites.includes(id)?"Добавлено в избранное":"Удалено из избранного")}
function setAccountMessage(message,type="info"){accountMessage=message;accountMessageType=type;renderAccount()}
function renderAccount(){
  const root=$("#accountContent");if(!root)return;
  if(!supabaseClient){root.innerHTML='<div class="account-panel"><h2>Личный кабинет временно недоступен</h2><p>Не удалось подключить сервис входа. Обновите страницу позже.</p></div>';return}
  if(!authSession){
    root.innerHTML=`<div class="account-panel auth-panel"><div class="account-panel-top"><span class="account-symbol">≈</span><span class="overline">${accountMode==="login"?"С ВОЗВРАЩЕНИЕМ":"НОВАЯ ИСТОРИЯ"}</span></div><h2>${accountMode==="login"?"Рады видеть вас снова.":"Создадим ваш аккаунт."}</h2><p class="account-intro">${accountMode==="login"?"Войдите, чтобы сохранять избранное и управлять своими данными.":"Зарегистрируйтесь, чтобы сохранять любимые средства и данные профиля."}</p><form id="authForm" class="account-form"><label>${accountMode==="signup"?"Ваше имя (необязательно)":""}${accountMode==="signup"?'<input name="display_name" type="text" maxlength="80" autocomplete="name" placeholder="Как к вам обращаться">':""}</label><label>Электронная почта<input name="email" type="email" autocomplete="email" placeholder="you@example.com" required></label><label>Пароль<input name="password" type="password" minlength="8" autocomplete="${accountMode==="login"?"current-password":"new-password"}" placeholder="Не менее 8 символов" required></label><button class="button button-dark account-submit" type="submit" ${accountBusy?"disabled":""}>${accountBusy?"Подождите…":accountMode==="login"?"Войти в кабинет":"Создать аккаунт"} <span>↗</span></button><button class="account-mode-toggle" type="button" data-account-mode="${accountMode==="login"?"signup":"login"}">${accountMode==="login"?"Впервые у нас? Создать аккаунт":"Уже есть аккаунт? Войти"}</button></form>${accountMessage?'<p class="account-message '+escapeHTML(accountMessageType)+'">'+escapeHTML(accountMessage)+'</p>':""}<p class="account-privacy">Ваш пароль не хранится на сайте в открытом виде. За безопасную авторизацию отвечает Supabase.</p></div>`;
    return;
  }
  const favoriteProducts=state.favorites.map(id=>products.find(p=>p.id===id)).filter(Boolean);
  const sellerPanel = isStoreAdmin ? `<section class="account-panel seller-orders-panel"><div class="seller-panel-heading"><div><p class="overline">МАГАЗИН БЕРЕГ</p><h3>Заказы <span class="account-count">${sellerOrders.filter(o=>o.status==="new").length}</span></h3></div><div class="seller-order-tools"><button class="account-mode-toggle" type="button" data-refresh-orders>Обновить ↻</button><button class="add-button" type="button" data-enable-push ${pushBusy?"disabled":""}>${pushBusy?"Подключаем…":pushEnabled?"Уведомления включены":"Включить уведомления"}</button></div></div>${pushMessage?`<p class="account-message ${pushEnabled?"success":"info"}">${escapeHTML(pushMessage)}</p>`:""}${sellerOrdersLoading?`<p class="account-intro">Загружаем заказы…</p>`:sellerOrders.length?sellerOrders.map(renderSellerOrder).join(""):`<p class="account-intro">Пока нет заказов. Когда покупатель оформит заказ, он появится здесь.</p>`}</section>` : "";
  root.innerHTML=`<div class="account-dashboard"><div class="account-welcome"><span class="account-symbol">≈</span><div><p class="overline">ВАШЕ ПРОСТРАНСТВО</p><h2>Здравствуйте<em>, ${escapeHTML(profile.display_name.trim()||authSession.user.email.split("@")[0])}.</em></h2><p>${escapeHTML(authSession.user.email)}</p></div><button class="account-logout" type="button" data-account-logout>Выйти ↗</button></div><div class="account-columns"><form id="profileForm" class="account-panel account-form"><p class="overline">ЛИЧНЫЕ ДАННЫЕ</p><h3>Ваш профиль</h3><label>Имя<input name="display_name" type="text" maxlength="80" value="${escapeHTML(profile.display_name)}" placeholder="Как к вам обращаться"></label><label>Телефон<input name="phone" type="tel" maxlength="40" autocomplete="tel" value="${escapeHTML(profile.phone)}" placeholder="+7 …"></label><button class="button button-dark account-submit" type="submit" ${accountBusy?"disabled":""}>${accountBusy?"Сохраняем…":"Сохранить данные"} <span>↗</span></button>${accountMessage?'<p class="account-message '+escapeHTML(accountMessageType)+'">'+escapeHTML(accountMessage)+'</p>':""}</form><div class="account-panel favorites-panel"><p class="overline">ВАШИ НАХОДКИ</p><h3>Избранное <span class="account-count">${favoriteProducts.length}</span></h3>${favoriteProducts.length?'<div class="account-favorite-list">'+favoriteProducts.map(p=>'<div class="account-favorite"><span>'+escapeHTML(p.name)+'</span><strong>'+money(p.price)+'</strong></div>').join("")+'</div>':'<p class="account-intro">Здесь появятся средства, которые вы отметите сердечком в каталоге.</p>'}<button class="account-mode-toggle" type="button" data-go="anapa">Перейти к покупкам ↗</button></div></div>${sellerPanel}<p class="account-privacy">Избранное синхронизируется с вашим аккаунтом, когда вы вошли в систему.</p></div>`;
}
async function loadProfileAndFavorites(user){
  if(!supabaseClient||!user)return;
  const {data:adminRecord}=await supabaseClient.from("store_admins").select("user_id").eq("user_id",user.id).maybeSingle();
  isStoreAdmin=!!adminRecord;
  if(isStoreAdmin)loadStoreOrders();
  const {data:profileData,error:profileError}=await supabaseClient.from("profiles").select("display_name,phone").eq("id",user.id).maybeSingle();
  if(!profileError&&profileData)profile={display_name:profileData.display_name||"",phone:profileData.phone||""};
  const {data:favoritesData,error:favoritesError}=await supabaseClient.from("user_favorites").select("product_id").eq("user_id",user.id);
  if(!favoritesError){
    const cloudIds=(favoritesData||[]).map(row=>row.product_id).filter(id=>products.some(p=>p.id===id));
    const merged=[...new Set([...cloudIds,...state.favorites])];
    if(merged.length){const rows=merged.map(product_id=>({user_id:user.id,product_id}));const {error}=await supabaseClient.from("user_favorites").upsert(rows,{onConflict:"user_id,product_id"});if(!error)state.favorites=merged}
    else state.favorites=cloudIds;
    save("bereg-favorites",state.favorites);renderCatalog("anapa");renderCatalog("blacksea");
  }
  if(state.page==="account")renderAccount();
}
async function loadStoreOrders(){
  if(!supabaseClient||!authSession||!isStoreAdmin)return;
  try{const registration=await navigator.serviceWorker.ready;pushEnabled=!!(await registration.pushManager.getSubscription())}catch{}
  sellerOrdersLoading=true;
  if(state.page==="account")renderAccount();
  const {data,error}=await supabaseClient.from("store_orders").select("*").order("created_at",{ascending:false}).limit(100);
  sellerOrdersLoading=false;
  if(error){accountMessage="Не удалось загрузить заказы. Проверьте соединение.";accountMessageType="error";sellerOrders=[]}
  else sellerOrders=data||[];
  if(state.page==="account")renderAccount();
}
function urlBase64ToUint8Array(base64String){const padding="=".repeat((4-base64String.length%4)%4);const base64=(base64String+padding).replace(/-/g,"+").replace(/_/g,"/");const raw=atob(base64);return Uint8Array.from([...raw].map(char=>char.charCodeAt(0)))}
async function enableSellerNotifications(){
  if(!isStoreAdmin||!authSession){pushMessage="Войдите в кабинет продавца, чтобы подключить уведомления.";renderAccount();return}
  if(!("serviceWorker" in navigator)||!("PushManager" in window)||!("Notification" in window)){pushMessage="Этот браузер не поддерживает push-уведомления. Установите сайт как приложение и попробуйте Chrome или Safari.";pushEnabled=false;renderAccount();return}
  pushBusy=true;pushMessage="";renderAccount();
  try{
    const permission=Notification.permission==="granted"?"granted":await Notification.requestPermission();
    if(permission!=="granted")throw new Error("Разрешите уведомления для приложения в настройках браузера.");
    const {data,error}=await supabaseClient.functions.invoke("seller-push-setup",{body:{}});
    if(error||!data?.publicKey)throw new Error(data?.error||error?.message||"Не удалось настроить уведомления.");
    const registration=await navigator.serviceWorker.ready;
    let subscription=await registration.pushManager.getSubscription();
    if(!subscription)subscription=await registration.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(data.publicKey)});
    const {error:saveError}=await supabaseClient.from("store_push_subscriptions").upsert({user_id:authSession.user.id,endpoint:subscription.endpoint,subscription:subscription.toJSON(),updated_at:new Date().toISOString()},{onConflict:"user_id,endpoint"});
    if(saveError)throw new Error("Браузер подписан, но подписку не удалось сохранить. Попробуйте ещё раз.");
    pushEnabled=true;pushMessage="Готово! Новые заказы будут приходить push-уведомлением на это устройство.";
  }catch(error){pushEnabled=false;pushMessage=error.message||"Не удалось включить уведомления.";}
  finally{pushBusy=false;renderAccount()}
}
function renderSellerOrder(order){
  const delivery={courier:"Курьер",pickup:"Самовывоз",post:"Почта"}[order.delivery_method]||order.delivery_method;
  const statusLabels={new:"Новый",processing:"В обработке",shipped:"Отправлен",completed:"Завершён",cancelled:"Отменён"};
  const items=Array.isArray(order.items)?order.items.map(item=>`<div class="seller-order-item"><span>${escapeHTML(item.name)} × ${Number(item.qty)||0}</span><strong>${money(Number(item.line_total)||0)}</strong></div>`).join(""):"";
  const date=new Date(order.created_at).toLocaleString("ru-RU",{dateStyle:"medium",timeStyle:"short"});
  return `<article class="seller-order" data-order-id="${escapeHTML(order.id)}"><div class="seller-order-top"><strong>Заказ №${escapeHTML(order.order_number)}</strong><span>${escapeHTML(date)}</span></div><div class="seller-order-customer"><strong>${escapeHTML(order.customer_name)}</strong><a href="tel:${escapeHTML(order.customer_phone.replace(/[^+0-9]/g,""))}">${escapeHTML(order.customer_phone)}</a></div><div class="seller-order-items">${items}</div><div class="seller-order-meta"><span>${escapeHTML(delivery)}</span><strong>${money(Number(order.total)||0)}</strong></div>${order.delivery_address?`<p class="seller-order-note"><b>Адрес:</b> ${escapeHTML(order.delivery_address)}</p>`:""}${order.customer_comment?`<p class="seller-order-note"><b>Комментарий:</b> ${escapeHTML(order.customer_comment)}</p>`:""}<div class="seller-order-bottom"><label>Статус<select data-order-status="${escapeHTML(order.id)}">${Object.entries(statusLabels).map(([value,label])=>`<option value="${value}" ${order.status===value?"selected":""}>${label}</option>`).join("")}</select></label><button class="add-button" type="button" data-save-order-status="${escapeHTML(order.id)}">Сохранить</button></div></article>`;
}
if(supabaseClient){
  supabaseClient.auth.getSession().then(({data})=>{authSession=data.session||null;if(authSession)loadProfileAndFavorites(authSession.user);if(state.page==="account")renderAccount()});
  supabaseClient.auth.onAuthStateChange((_event,session)=>{authSession=session||null;if(authSession){Promise.resolve().then(()=>loadProfileAndFavorites(authSession.user))}else{profile={display_name:"",phone:""};if(state.page==="account")renderAccount()}});
}

$$("[data-category-filter]").forEach(el=>el.addEventListener("click",()=>{state.category[el.dataset.categoryFilter]=el.dataset.category;renderCatalog(el.dataset.categoryFilter)}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProductDescription();const card=e.target.closest(".brand-card[data-go]");if(card&&(e.key==="Enter"||e.key===" ")){e.preventDefault();go(card.dataset.go)}});
document.addEventListener("click",async e=>{
  const nav=e.target.closest("[data-go]");if(nav){e.preventDefault();go(nav.dataset.go);return}
  const mode=e.target.closest("[data-account-mode]");if(mode){accountMode=mode.dataset.accountMode;accountMessage="";renderAccount();return}
  const logout=e.target.closest("[data-account-logout]");if(logout&&supabaseClient){const {error}=await supabaseClient.auth.signOut();if(error)toast("Не удалось выйти: "+error.message);else{authSession=null;profile={display_name:"",phone:""};isStoreAdmin=false;sellerOrders=[];renderAccount();toast("Вы вышли из аккаунта")}return}
  if(e.target.closest("[data-refresh-orders]")){loadStoreOrders();return}
  if(e.target.closest("[data-enable-push]")){enableSellerNotifications();return}
  const saveOrder=e.target.closest("[data-save-order-status]");if(saveOrder&&supabaseClient&&isStoreAdmin){const id=saveOrder.dataset.saveOrderStatus;const select=$(`[data-order-status="${id}"]`);const status=select?.value;if(!status)return;saveOrder.disabled=true;const {error}=await supabaseClient.from("store_orders").update({status,updated_at:new Date().toISOString()}).eq("id",id);saveOrder.disabled=false;if(error){toast("Не удалось обновить статус заказа")}else{sellerOrders=sellerOrders.map(order=>order.id===id?{...order,status}:order);renderAccount();toast("Статус заказа обновлён")}return}
  if(e.target.id==="descriptionModal"){closeProductDescription();return}
  const description=e.target.closest("[data-description]");if(description){openProductDescription(description.dataset.description);return}
  const closeDescription=e.target.closest("[data-description-close]");if(closeDescription){closeProductDescription();return}
  const add=e.target.closest("[data-add]");if(add){addToCart(add.dataset.add);return}
  const fav=e.target.closest("[data-favorite]");if(fav){toggleFavorite(fav.dataset.favorite);return}
  const qty=e.target.closest("[data-qty]");if(qty){changeQty(qty.dataset.qty,Number(qty.dataset.delta));return}
  const remove=e.target.closest("[data-remove]");if(remove){state.cart=state.cart.filter(i=>i.id!==remove.dataset.remove);save("bereg-cart",state.cart);renderCart();toast("Товар удалён");return}
});
document.addEventListener("submit",async e=>{
  if(e.target.id==="authForm"){
    e.preventDefault();if(!supabaseClient||accountBusy)return;
    const form=e.target;const data=new FormData(form);const email=String(data.get("email")||"").trim();const password=String(data.get("password")||"");const name=String(data.get("display_name")||"").trim();accountBusy=true;renderAccount();
    try{
      if(accountMode==="signup"){
        const {data:result,error}=await supabaseClient.auth.signUp({email,password,options:{data:{display_name:name},emailRedirectTo:window.location.origin+window.location.pathname+"#account"}});
        if(error)throw error;
        if(result.session){authSession=result.session;profile={display_name:name,phone:""};accountMessage="Аккаунт создан.";accountMessageType="success";await loadProfileAndFavorites(result.user);renderAccount()}
        else{accountBusy=false;accountMessage="Почти готово! Если подтверждение почты включено, откройте письмо от Supabase, подтвердите адрес и затем войдите.";accountMessageType="success";renderAccount()}
      }else{
        const {data:result,error}=await supabaseClient.auth.signInWithPassword({email,password});if(error)throw error;authSession=result.session;await loadProfileAndFavorites(result.user);accountMessage="Вы успешно вошли.";accountMessageType="success";accountBusy=false;renderAccount();toast("Добро пожаловать в БЕРЕГ")
      }
    }catch(error){accountBusy=false;accountMessage=authErrorMessage(error);accountMessageType="error";renderAccount()}
    finally{accountBusy=false}
    return;
  }
  if(e.target.id==="checkoutForm"){
    e.preventDefault();if(accountBusy)return;
    if(!state.cart.length){closeCheckout();toast("Корзина пуста");return}
    const form=e.target;const data=new FormData(form);const deliveryMethod=String(data.get("delivery_method")||"");
    const payload={customerName:String(data.get("customer_name")||"").trim(),customerPhone:String(data.get("customer_phone")||"").trim(),deliveryMethod,deliveryAddress:String(data.get("delivery_address")||"").trim(),customerComment:String(data.get("customer_comment")||"").trim(),website:String(data.get("website")||""),items:state.cart.map(item=>({id:item.id,qty:item.qty}))};
    const submit=form.querySelector("button[type=submit]");submit.disabled=true;submit.textContent="Оформляем заказ…";
    try{
      const response=await fetch(SUPABASE_URL+"/functions/v1/create-store-order",{method:"POST",headers:{"apikey":SUPABASE_KEY,"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const result=await response.json().catch(()=>({}));if(!response.ok||!result.ok)throw new Error(result.error||"Не удалось оформить заказ.");
      state.cart=[];save("bereg-cart",state.cart);renderCart();form.reset();const success=$("#checkoutSuccess");success.innerHTML=`<span class="checkout-success-mark">✓</span><p class="overline">ЗАКАЗ СОХРАНЁН</p><h2>Спасибо за ваш выбор.</h2><p>Номер заказа <strong>№${escapeHTML(result.order.number)}</strong>.</p><p>Продавец свяжется с вами для подтверждения заказа и уточнения деталей.</p><button class="button button-dark" type="button" data-close-checkout>Продолжить покупки <span>↗</span></button>`;success.hidden=false;form.hidden=true;
    }catch(error){const message=$("#checkoutError");message.textContent=error.message||"Не удалось оформить заказ. Попробуйте ещё раз.";message.hidden=false}
    finally{submit.disabled=false;submit.innerHTML='Подтвердить заказ <span>↗</span>'}return;
  }
  if(e.target.id==="profileForm"){
    e.preventDefault();if(!supabaseClient||!authSession||accountBusy)return;
    const data=new FormData(e.target);profile={display_name:String(data.get("display_name")||"").trim(),phone:String(data.get("phone")||"").trim()};accountBusy=true;renderAccount();
    const {error}=await supabaseClient.from("profiles").upsert({id:authSession.user.id,display_name:profile.display_name,phone:profile.phone},{onConflict:"id"});
    accountBusy=false;if(error){accountMessage="Не удалось сохранить данные. Попробуйте ещё раз.";accountMessageType="error"}else{accountMessage="Данные профиля сохранены.";accountMessageType="success"}renderAccount();return;
  }
});
function authErrorMessage(error){const message=String(error?.message||"");if(/invalid login credentials/i.test(message))return "Неверная почта или пароль.";if(/already registered|user already registered/i.test(message))return "Этот адрес уже зарегистрирован. Попробуйте войти.";if(/password should be at least/i.test(message))return "Пароль должен содержать не менее 8 символов.";if(/email not confirmed/i.test(message))return "Сначала подтвердите электронную почту по ссылке в письме.";if(/rate limit/i.test(message))return "Слишком много попыток. Подождите немного и повторите.";return message||"Не удалось выполнить действие. Попробуйте ещё раз."}

function openCheckout(){if(!state.cart.length){toast("Сначала добавьте товары в корзину");return}$("#checkoutError").hidden=true;$("#checkoutSuccess").hidden=true;$("#checkoutForm").hidden=false;const pickup=$("#checkoutForm").elements.delivery_method.value==="pickup";$("#deliveryAddressField").hidden=pickup;$("#checkoutForm").elements.delivery_address.required=!pickup;$("#checkoutModal").hidden=false;document.body.classList.add("modal-open");$("#checkoutModal").querySelector("input[name=customer_name]").focus()}
function closeCheckout(){const modal=$("#checkoutModal");if(!modal)return;modal.hidden=true;document.body.classList.remove("modal-open")}
$("#checkoutButton").addEventListener("click",openCheckout);
document.addEventListener("click",e=>{if(e.target.closest("[data-close-checkout]"))closeCheckout();if(e.target.id==="checkoutModal")closeCheckout()});
$("#checkoutForm").addEventListener("change",e=>{if(e.target.name==="delivery_method"){const pickup=e.target.value==="pickup";$("#deliveryAddressField").hidden=pickup;$("#checkoutForm").elements.delivery_address.required=!pickup;}});
renderCatalog("anapa");renderCatalog("blacksea");renderCart();
const initial=location.hash.replace("#","");if(["anapa","blacksea","cart","contacts","account"].includes(initial))go(initial);else go("home");
