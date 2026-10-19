const products = [
  {id:"a1",brand:"anapa",brandName:"Анапская косметика",name:"Морской баланс",type:"Сыворотка для лица",description:"Лёгкий ежедневный уход",price:1290,image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",category:"face",tag:"БЕСТСЕЛЛЕР"},
  {id:"a2",brand:"anapa",brandName:"Анапская косметика",name:"Тёплый песок",type:"Крем для лица",description:"Комфорт и мягкость кожи",price:1590,image:"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=85",category:"face",tag:"УХОД"},
  {id:"a3",brand:"anapa",brandName:"Анапская косметика",name:"Солнечный ритуал",type:"Масло для тела",description:"Шёлковая текстура на каждый день",price:990,image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=85",category:"body",tag:"ЮЖНАЯ КОЛЛЕКЦИЯ"},
  {id:"a4",brand:"anapa",brandName:"Анапская косметика",name:"После моря",type:"Увлажняющий крем",description:"Мягкий завершающий этап ухода",price:1190,image:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85",category:"face",tag:"УВЛАЖНЕНИЕ"},
  {id:"b1",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Бутилированная морская вода",type:"Бутилированная морская вода",description:"",price:999,image:"",category:"face",tag:"МОРСКАЯ ВОДА"},
  {id:"b3",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Спрей для волос",type:"Спрей для волос",description:"",price:999,image:"",category:"body",tag:"УХОД ЗА ВОЛОСАМИ"},
  {id:"b2",brand:"blacksea",brandName:"Магия Чёрного моря",name:"Спрей для носа и горла",type:"Спрей для носа и горла",description:"",price:999,image:"",category:"face",tag:"ДОПОЛНИТЕЛЬНАЯ НАСАДКА"},
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

function load(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function save(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
function money(n){return new Intl.NumberFormat("ru-RU").format(n)+" ₽"}
function escapeHTML(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
function productCard(p){return `<article class="product-card"><div class="product-image ${p.image?"":"product-image-placeholder"}">${p.image?`<img src="${p.image}" alt="${p.name} — ${p.type}" loading="lazy">`:""}<span class="product-tag">${p.tag}</span><button class="favorite ${state.favorites.includes(p.id)?"is-favorite":""}" data-favorite="${p.id}" aria-label="${state.favorites.includes(p.id)?"Убрать из избранного":"В избранное"}" aria-pressed="${state.favorites.includes(p.id)}">${state.favorites.includes(p.id)?"♥":"♡"}</button></div><div class="product-info"><span class="product-brand">${p.brandName}</span><h3 class="product-name">${p.name}</h3><div class="product-buy"><span class="product-price">${money(p.price)}</span><div class="product-actions"><button class="add-button" data-description="${p.id}" aria-haspopup="dialog">Описание</button><button class="add-button" data-add="${p.id}">В корзину&nbsp; +</button></div></div></div></article>`}
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
  root.innerHTML=`<div class="account-dashboard"><div class="account-welcome"><span class="account-symbol">≈</span><div><p class="overline">ВАШЕ ПРОСТРАНСТВО</p><h2>Здравствуйте<em>, ${escapeHTML(profile.display_name.trim()||authSession.user.email.split("@")[0])}.</em></h2><p>${escapeHTML(authSession.user.email)}</p></div><button class="account-logout" type="button" data-account-logout>Выйти ↗</button></div><div class="account-columns"><form id="profileForm" class="account-panel account-form"><p class="overline">ЛИЧНЫЕ ДАННЫЕ</p><h3>Ваш профиль</h3><label>Имя<input name="display_name" type="text" maxlength="80" value="${escapeHTML(profile.display_name)}" placeholder="Как к вам обращаться"></label><label>Телефон<input name="phone" type="tel" maxlength="40" autocomplete="tel" value="${escapeHTML(profile.phone)}" placeholder="+7 …"></label><button class="button button-dark account-submit" type="submit" ${accountBusy?"disabled":""}>${accountBusy?"Сохраняем…":"Сохранить данные"} <span>↗</span></button>${accountMessage?'<p class="account-message '+escapeHTML(accountMessageType)+'">'+escapeHTML(accountMessage)+'</p>':""}</form><div class="account-panel favorites-panel"><p class="overline">ВАШИ НАХОДКИ</p><h3>Избранное <span class="account-count">${favoriteProducts.length}</span></h3>${favoriteProducts.length?'<div class="account-favorite-list">'+favoriteProducts.map(p=>'<div class="account-favorite"><span>'+escapeHTML(p.name)+'</span><strong>'+money(p.price)+'</strong></div>').join("")+'</div>':'<p class="account-intro">Здесь появятся средства, которые вы отметите сердечком в каталоге.</p>'}<button class="account-mode-toggle" type="button" data-go="anapa">Перейти к покупкам ↗</button></div></div><p class="account-privacy">Избранное синхронизируется с вашим аккаунтом, когда вы вошли в систему.</p></div>`;
}
async function loadProfileAndFavorites(user){
  if(!supabaseClient||!user)return;
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
if(supabaseClient){
  supabaseClient.auth.getSession().then(({data})=>{authSession=data.session||null;if(authSession)loadProfileAndFavorites(authSession.user);if(state.page==="account")renderAccount()});
  supabaseClient.auth.onAuthStateChange((_event,session)=>{authSession=session||null;if(authSession){Promise.resolve().then(()=>loadProfileAndFavorites(authSession.user))}else{profile={display_name:"",phone:""};if(state.page==="account")renderAccount()}});
}

$$("[data-category-filter]").forEach(el=>el.addEventListener("click",()=>{state.category[el.dataset.categoryFilter]=el.dataset.category;renderCatalog(el.dataset.categoryFilter)}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProductDescription();const card=e.target.closest(".brand-card[data-go]");if(card&&(e.key==="Enter"||e.key===" ")){e.preventDefault();go(card.dataset.go)}});
document.addEventListener("click",async e=>{
  const nav=e.target.closest("[data-go]");if(nav){e.preventDefault();go(nav.dataset.go);return}
  const mode=e.target.closest("[data-account-mode]");if(mode){accountMode=mode.dataset.accountMode;accountMessage="";renderAccount();return}
  const logout=e.target.closest("[data-account-logout]");if(logout&&supabaseClient){const {error}=await supabaseClient.auth.signOut();if(error)toast("Не удалось выйти: "+error.message);else{authSession=null;profile={display_name:"",phone:""};renderAccount();toast("Вы вышли из аккаунта")}return}
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
  if(e.target.id==="profileForm"){
    e.preventDefault();if(!supabaseClient||!authSession||accountBusy)return;
    const data=new FormData(e.target);profile={display_name:String(data.get("display_name")||"").trim(),phone:String(data.get("phone")||"").trim()};accountBusy=true;renderAccount();
    const {error}=await supabaseClient.from("profiles").upsert({id:authSession.user.id,display_name:profile.display_name,phone:profile.phone},{onConflict:"id"});
    accountBusy=false;if(error){accountMessage="Не удалось сохранить данные. Попробуйте ещё раз.";accountMessageType="error"}else{accountMessage="Данные профиля сохранены.";accountMessageType="success"}renderAccount();return;
  }
});
function authErrorMessage(error){const message=String(error?.message||"");if(/invalid login credentials/i.test(message))return "Неверная почта или пароль.";if(/already registered|user already registered/i.test(message))return "Этот адрес уже зарегистрирован. Попробуйте войти.";if(/password should be at least/i.test(message))return "Пароль должен содержать не менее 8 символов.";if(/email not confirmed/i.test(message))return "Сначала подтвердите электронную почту по ссылке в письме.";if(/rate limit/i.test(message))return "Слишком много попыток. Подождите немного и повторите.";return message||"Не удалось выполнить действие. Попробуйте ещё раз."}

$("#checkoutButton").addEventListener("click",()=>toast("Оформление заказа пока не подключено"));
renderCatalog("anapa");renderCatalog("blacksea");renderCart();
const initial=location.hash.replace("#","");if(["anapa","blacksea","cart","contacts","account"].includes(initial))go(initial);else go("home");
