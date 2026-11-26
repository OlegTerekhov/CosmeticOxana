<?php
if (!defined('ABSPATH')) { exit; }

function bereg_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
    register_nav_menus(array('primary' => __('Основное меню', 'bereg')));
}
add_action('after_setup_theme', 'bereg_theme_setup');

function bereg_wc_page_url($page) {
    if (function_exists('wc_get_page_permalink')) {
        $url = wc_get_page_permalink($page);
        if ($url) { return $url; }
    }
    return home_url('/');
}

function bereg_wc_cart_url() {
    if (function_exists('wc_get_cart_url')) { return wc_get_cart_url(); }
    return home_url('/');
}

function bereg_enqueue_assets() {
    $root = trailingslashit(home_url('/'));
    wp_enqueue_style('bereg-main', get_template_directory_uri() . '/assets/CSS/style.css', array(), '20261126-main-sync');
    wp_enqueue_style('bereg-light', get_template_directory_uri() . '/assets/CSS/light-background.css', array('bereg-main'), '20261126-green2');
    wp_enqueue_style('bereg-theme', get_stylesheet_uri(), array('bereg-light'), '20261126-green3');
    wp_enqueue_style('bereg-fonts', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'bereg_enqueue_assets');

function bereg_body_classes($classes) {
    $classes[] = 'bereg-site';
    return $classes;
}
add_filter('body_class', 'bereg_body_classes');

function bereg_product_loop_columns() { return 4; }
add_filter('loop_shop_columns', 'bereg_product_loop_columns');
function bereg_products_per_page() { return 16; }
add_filter('loop_shop_per_page', 'bereg_products_per_page', 20);

function bereg_register_product_categories() {
    if (!taxonomy_exists('product_cat')) { return; }
    $terms = array(
        array('name' => 'Анапская косметика', 'slug' => 'anapa'),
        array('name' => 'Магия Чёрного моря', 'slug' => 'black-sea'),
    );
    foreach ($terms as $term) {
        if (!term_exists($term['slug'], 'product_cat')) {
            wp_insert_term($term['name'], 'product_cat', array('slug' => $term['slug']));
        }
    }
}
add_action('init', 'bereg_register_product_categories', 30);
