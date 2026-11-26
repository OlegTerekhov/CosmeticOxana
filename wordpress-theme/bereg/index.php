<?php
if (!defined('ABSPATH')) { exit; }
get_header();
?>
<header class="topbar"><a class="wordmark" href="<?php echo esc_url(home_url('/')); ?>"><span class="mark">≈</span><span>БЕРЕГ<small>КОСМЕТИКА БЕРЕГА МОРЯ</small></span></a></header>
<main class="section-wrap bereg-content-page">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?><article <?php post_class(); ?>><h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1><div class="entry-content"><?php the_excerpt(); ?></div></article><?php endwhile; the_posts_pagination(); else : ?><h1>Страница не найдена</h1><?php endif; ?>
</main>
<?php get_footer(); ?>
