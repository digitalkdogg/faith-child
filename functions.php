<?php
/*This file is part of FaithChild, faith child theme.

All functions of this file will be loaded before of parent theme functions.
Learn more at https://codex.wordpress.org/Child_Themes.

Note: this function loads the parent stylesheet before, then child theme stylesheet
(leave it in place unless you know what you are doing.)
*/

if ( ! function_exists( 'suffice_child_enqueue_child_styles' ) ) {
	function FaithChild_enqueue_child_styles() {
		$all_settings = get_theme_mods();
	    // loading parent style
	    wp_register_style('parente2-style',get_template_directory_uri() . '/style.css');

	    wp_enqueue_style( 'parente2-style' );
	    // loading child style

		wp_enqueue_style( 'childe2-style', get_stylesheet_directory_uri() . '/style.css' );
		wp_enqueue_style( 'millwood-base', get_stylesheet_directory_uri() . '/assets/base.css' );
		wp_enqueue_style( 'millwood-style', get_stylesheet_directory_uri() . '/assets/millwood.css' );
		
		wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'before');
		wp_enqueue_script( 'customjs', get_stylesheet_directory_uri() . '/assets/millwood.js' );

		$php_vars = array();
		try {$php_vars['stylesheet_dir'] = get_stylesheet_directory_uri();} catch (exception $e) {}
		try {$php_vars['home_url'] = get_home_url();} catch (exception $e) {}
		try {$php_vars['site_url'] = get_option( 'siteurl' );} catch (exception $e) {}
		try {$php_vars['is_admin'] = is_admin();} catch (exception $e) {}
		try {$php_vars['menu'] = wp_get_nav_menu_items('MainMenu');} catch (exception $e) {}
		
		try {$php_vars['templates']['stripe'] = get_custom_template_file('template-parts/stripe.html');} catch (exception $e) {} 

		try {$php_vars['stripe_api_test_key'] = $all_settings['stripe_test_key_text_block'];} catch (exception $e) {}
		try {$php_vars['use_test_data'] = $all_settings['use_test_data'];} catch (exception $e) {}



		wp_add_inline_script('customjs', 'var php_vars = ' . wp_json_encode($php_vars));
	 }
}
add_action( 'wp_enqueue_scripts', 'FaithChild_enqueue_child_styles' );

add_action('init', 'get_custom_template_file');
function get_custom_template_file($fileName){
    $pluginDirectory = plugin_dir_path( __FILE__ );
    $filePath = $pluginDirectory . $fileName;
    $fileContents = file_get_contents($filePath);
    return $fileContents;
}

//if (get_included_files()[0]) {
include_once WP_CONTENT_DIR . '/themes/faith-child/inc/customizer.php';
//}