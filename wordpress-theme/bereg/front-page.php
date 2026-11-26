<?php
if (!defined('ABSPATH')) { exit; }
get_header();
?>
<header class="topbar">
  <a class="wordmark" href="<?php echo esc_url(home_url('/')); ?>" aria-label="БЕРЕГ — главная"><span class="mark">≈</span><span>БЕРЕГ<small>КОСМЕТИКА БЕРЕГА МОРЯ</small></span></a>
  <div class="top-actions">
    <span class="top-note">С любовью с юга России</span>
    <a class="account-shortcut" href="<?php echo esc_url(bereg_wc_page_url('myaccount')); ?>">Личный кабинет <span>↗</span></a>
  </div>
</header>

<main id="mainContent">
  <section class="hero page-section active" id="home">
    <div class="hero-photo" role="img" aria-label="Чёрное море и южное побережье"></div>
    <div class="hero-shade"></div>
    <div class="hero-content">
      <span class="eyebrow"><i></i> РАЗНЫЙ УХОД · ОДНО МОРЕ</span>
      <h1>Юг, который<br><em>остаётся с тобой.</em></h1>
      <p>Редкие моменты заботы о себе, вдохновлённые характером южного побережья. Две коллекции — одно море.</p>
      <div class="hero-foot"><span>44°53′ с. ш.</span><span class="foot-line"></span><span>АНАПА · ЧЁРНОЕ МОРЕ</span></div>
    </div>
  </section>

  <section class="brands section-wrap" id="brands">
    <div class="section-heading"><div><p class="overline">Выбери своё побережье</p><h2>Разный уход.<br><em>Одно море.</em></h2></div><span class="heading-aside">КОЛЛЕКЦИИ / 2026</span></div>
    <div class="brand-grid">
      <a class="brand-tile" href="<?php echo esc_url(home_url('/product-category/anapa/')); ?>">
        <article class="brand-card anapa-card"><img src="<?php echo esc_url(home_url('/images/анапская косметика главная.png')); ?>" alt="Анапская косметика"><div class="brand-overlay"></div><div class="brand-card-top"><span>01 / СОЛНЦЕ</span><span>АНАПА, РОССИЯ</span></div></article>
        <div class="brand-card-bottom"><p>Тепло песка и сила солнца</p><h3>Анапская<br><em>косметика</em></h3><span class="brand-description-button">Перейти в каталог ↗</span></div>
      </a>
      <a class="brand-tile" href="<?php echo esc_url(home_url('/product-category/black-sea/')); ?>">
        <article class="brand-card blacksea-card"><img src="<?php echo esc_url(home_url('/images/магия черного моря главная.png')); ?>" alt="Магия Чёрного моря"><div class="brand-overlay"></div><div class="brand-card-top"><span>02 / МОРЕ</span><span>ЧЁРНОМОРСКОЕ ПОБЕРЕЖЬЕ</span></div></article>
        <div class="brand-card-bottom"><p>Глубина, свежесть, свобода</p><h3>Магия<br><em>Чёрного моря</em></h3><span class="brand-description-button">Перейти в каталог ↗</span></div>
      </a>
    </div>
  </section>

  <section class="intro section-wrap">
    <div class="section-label"><span>01</span><span>НАША ИСТОРИЯ</span></div>
    <div class="intro-copy"><p class="overline">Море ближе, чем кажется</p><h2>Почувствуй<br>свой <em>юг.</em></h2></div>
    <p class="intro-text">Мы собираем бренды, рождённые на юге России. У каждого — свой характер, свой взгляд на уход и одна общая стихия: Чёрное море.</p>
  </section>

  <?php if (class_exists('WooCommerce')) : ?>
    <section class="catalog section-wrap" id="featured-products">
      <div class="catalog-heading"><p class="overline">Выбор магазина</p><h2>Средства для <em>твоего берега.</em></h2><p>Избранные средства двух коллекций.</p></div>
      <?php echo do_shortcode('[products limit="8" columns="4" visibility="visible" orderby="popularity" order="DESC"]'); ?>
      <p class="catalog-more"><a class="button button-dark" href="<?php echo esc_url(bereg_wc_page_url('shop')); ?>">Все товары <span>↗</span></a></p>
    </section>
  <?php else : ?>
    <section class="catalog section-wrap"><h2>Каталог скоро откроется</h2><p>Для работы магазина требуется активировать WooCommerce.</p></section>
  <?php endif; ?>

  <section class="contacts-page section-wrap" id="contacts">
    <div class="catalog-top"><span class="overline">МЫ НА СВЯЗИ</span><span>АНАПА · РОССИЯ</span></div>
    <div class="contacts-layout">
      <div><p class="overline">Есть вопрос?</p><h2>Давайте<br><em>поговорим.</em></h2><p class="contacts-lead">Поможем с выбором ухода, расскажем о брендах и подскажем по заказу.</p></div>
      <div class="contact-card"><span class="contact-symbol">≈</span><p class="overline">СВЯЗЬ С МАГАЗИНОМ</p><h3>Будем на связи</h3><p>Напишите нам по электронной почте или найдите магазин в мессенджере MAX.</p><a class="contact-link" href="mailto:sea_cosmetics@mail.ru"><span>Электронная почта</span><strong>sea_cosmetics@mail.ru ↗</strong></a><div class="contact-link"><span>MAX · сообщения</span><strong>8 995 321-00-17</strong></div><a class="button button-dark" href="https://max.ru/" target="_blank" rel="noopener noreferrer">Открыть MAX <span>↗</span></a></div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <a class="footer-brand" href="<?php echo esc_url(home_url('/')); ?>">БЕРЕГ <span>≈</span></a>
  <p>Разный уход. Одно море.</p>
  <span>© <?php echo esc_html(wp_date('Y')); ?> · КОСМЕТИКА ЮГА РОССИИ</span>
  <div class="footer-legal-links">
    <a href="<?php echo esc_url(home_url('/delivery/')); ?>">Доставка и оплата</a>
    <a href="<?php echo esc_url(home_url('/consumer-corner/')); ?>">Уголок потребителя</a>
    <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Политика конфиденциальности</a>
  </div>
  <a class="manager-access-link" href="<?php echo esc_url(admin_url()); ?>">для управляющего</a>
</footer>
<nav class="bottom-nav" aria-label="Основная навигация">
  <a class="nav-item active" href="<?php echo esc_url(home_url('/')); ?>"><span class="nav-icon">⌂</span><span>Главная</span></a>
  <a class="nav-item" href="<?php echo esc_url(home_url('/product-category/anapa/')); ?>"><span class="nav-icon">☼</span><span>Анапская косметика</span></a>
  <a class="nav-item" href="<?php echo esc_url(home_url('/product-category/black-sea/')); ?>"><span class="nav-icon">≈</span><span>Магия Чёрного моря</span></a>
  <a class="nav-item" href="<?php echo esc_url(bereg_wc_cart_url()); ?>"><span class="nav-icon">♧</span><span>Корзина</span></a>
  <a class="nav-item" href="<?php echo esc_url(bereg_wc_page_url('myaccount')); ?>"><span class="nav-icon">◯</span><span>Кабинет</span></a>
</nav>
<?php get_footer(); ?>
