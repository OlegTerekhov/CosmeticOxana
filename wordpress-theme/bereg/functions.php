<?php
if (!defined('ABSPATH')) { exit; }

function bereg_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('woocommerce');
    register_nav_menus(array('primary' => __('Основное меню', 'bereg')));
}
add_action('after_setup_theme', 'bereg_theme_setup');

function bereg_enqueue_assets() {
    $root = home_url('/');
    wp_enqueue_style('bereg-main', $root . 'CSS/style.css', array(), '20261102');
    wp_enqueue_style('bereg-light', $root . 'CSS/light-background.css', array('bereg-main'), '20261125');
    wp_enqueue_style('bereg-fonts', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap', array(), null);
    wp_enqueue_script('bereg-supabase', 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2', array(), null, true);
    wp_enqueue_script('bereg-app', $root . 'JS/app.js', array('bereg-supabase'), '20261121', true);
}
add_action('wp_enqueue_scripts', 'bereg_enqueue_assets');

function bereg_body_classes($classes) {
    $classes[] = 'bereg-site';
    return $classes;
}
add_filter('body_class', 'bereg_body_classes');
