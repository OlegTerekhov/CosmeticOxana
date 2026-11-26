<?php
if (!defined('ABSPATH')) { exit; }
get_header();
?>
<header class="topbar"><a class="wordmark" href="<?php echo esc_url(home_url('/')); ?>"><span class="mark">≈</span><span>БЕРЕГ<small>КОСМЕТИКА БЕРЕГА МОРЯ</small></span></a><div class="top-actions"><a class="account-shortcut" href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>">Личный кабинет ↗</a></div></header>
<main class="section-wrap bereg-content-page">
  <?php while (have_posts()) : the_post(); ?><article <?php post_class(); ?>><h1><?php the_title(); ?></h1><div class="entry-content"><?php the_content(); ?></div></article><?php endwhile; ?>
</main>
<footer class="site-footer"><a class="footer-brand" href="<?php echo esc_url(home_url('/')); ?>">БЕРЕГ <span>≈</span></a><p>Разный уход. Одно море.</p></footer>
<?php get_footer(); ?>
