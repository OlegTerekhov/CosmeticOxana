<?php
if (!defined('ABSPATH')) { exit; }
get_header();
?>
<header class="topbar">
  <a class="wordmark" href="<?php echo esc_url(home_url('/')); ?>"><span class="mark">≈</span><span>БЕРЕГ<small>КОСМЕТИКА БЕРЕГА МОРЯ</small></span></a>
  <div class="top-actions"><a class="account-shortcut" href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>">Личный кабинет ↗</a></div>
</header>
<main class="section-wrap bereg-woocommerce">
  <?php woocommerce_content(); ?>
</main>
<footer class="site-footer">
  <a class="footer-brand" href="<?php echo esc_url(home_url('/')); ?>">БЕРЕГ <span>≈</span></a><p>Разный уход. Одно море.</p>
  <div class="footer-legal-links"><a href="<?php echo esc_url(home_url('/delivery/')); ?>">Доставка и оплата</a><a href="<?php echo esc_url(home_url('/consumer-corner/')); ?>">Уголок потребителя</a><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Политика конфиденциальности</a></div>
</footer>
<?php get_footer(); ?>
