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
		wp_enqueue_style( 'millwood-base', get_stylesheet_directory_uri() . '/assets/base--min.css' );
		wp_enqueue_style( 'millwood-style', get_stylesheet_directory_uri() . '/assets/millwood--02192022.css' );

		wp_enqueue_style( 'foundationcss', get_stylesheet_directory_uri() . '/assets/foundation/css/foundation.min.css' );
    wp_enqueue_script( 'foundationjs', get_stylesheet_directory_uri() . '/assets/foundation/js/vendor/foundation.min.js' );

		wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'before');
    wp_enqueue_script('slicknav', 'https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js', 'before');
		wp_enqueue_script( 'customjs', get_stylesheet_directory_uri() . '/assets/millwood--01262022.js' );

		if ($all_settings['body_class_name_block'] == 'academy') : 	wp_enqueue_style( 'academycss', get_stylesheet_directory_uri() . '/assets/academy-2192022.css' ); endif;

		$php_vars = array();
		try {$php_vars['stylesheet_dir'] = get_stylesheet_directory_uri(); } catch (excetpion $e) {}
		try {$php_vars['home_url'] = get_home_url(); } catch (exception $e) {}
		try {$php_vars['site_url'] = get_option( 'siteurl' ); } catch (exception $e) {}
		try {$php_vars['is_admin'] = is_admin(); } catch(exception $e) {}
		try {$php_vars['menu'] = wp_get_nav_menu_items('MainMenu'); } catch(exception $e) {}
		try {$php_vars['rest_url'] = get_home_url() . '/index.php/wp-json/';} catch(exception $e) {}

		try { $php_vars['templates']['stripe'] = get_custom_template_file('template-parts/stripe.html'); } catch(exception $e) {}

		if (isset($all_settings['stripe_test_key_text_block'])) : $php_vars['stripe_api_test_key'] = $all_settings['stripe_test_key_text_block']; endif;
		if (isset($all_settings['use_test_data'])) : $php_vars['use_test_data'] = $all_settings['use_test_data']; endif;
		if (isset($all_settings['stripe_live_key_text_block'])) : $php_vars['stripe_api_live_key'] = $all_settings['stripe_live_key_text_block']; endif;
    if (isset($all_settings['center_slider_1500_offset'])) : $php_vars['center_slider_1500_offset'] = $all_settings['center_slider_1500_offset']; endif;


		wp_add_inline_script('customjs', 'var php_vars = ' . wp_json_encode($php_vars));

	 }
}
add_action( 'wp_enqueue_scripts', 'FaithChild_enqueue_child_styles' );

add_post_type_support( 'page', 'excerpt' );

function has_show_donate_btn() {
		$all_settings = get_theme_mods();
	 return $all_settings['show_donation_btn'];
}



function load_dashicons(){
    wp_enqueue_style('dashicons');
}
add_action('wp_enqueue_scripts', 'load_dashicons');

add_action('init', 'get_custom_template_file');
function get_custom_template_file($fileName){
    $pluginDirectory = plugin_dir_path( __FILE__ );
    $filePath = $pluginDirectory . $fileName;
    $fileContents = file_get_contents($filePath);
    return $fileContents;
}

/**
* Generates new stripe intent
* @param array $data Options for the function.
* @return $object, or null if none.  */

 function get_stripe_intent ( $params ){

 		$all_settings = get_theme_mods();


    require_once($all_settings['base_path'] . '/stripe-php/init.php');


    if ($all_settings['use_test_data']==false) {
      $stripe = new \Stripe\StripeClient(
        $all_settings['stripe_live_secret_text_block']
      );
    } else {
      $stripe = new \Stripe\StripeClient(
      	$all_settings['stripe_test_secret_text_block']
      //  'sk_test_4fUI416eCak3UympI9MADNCM00l7QOVnDg'
      );
    }

      $customer = $stripe->customers->create([
        'description' => $params['name'],
        'email' =>$params['email'],
        'address' => $params['address'],
      ]);

      $response = $stripe->paymentIntents->create([
        'amount' => $params['amount'],
        'currency' => 'usd',
        'receipt_email'=>$params['email'],
        'description'=>$params['name'],
        'customer'=>$customer->id,
        'payment_method_types' => ['card'],
      ]);

      $response['customer'] =$customer;

       return $response;

 }

    /**
 * Grab latest event posts
 * @param array $data Options for the function.
 * @return $object, or null if none.  */

   function get_latest_cc ( $params ){
     global $wpdb;
     $result = $wpdb->get_results('SELECT * FROM wp_campaigns where status = "Done" order by created_at desc');
     return $result;

   }

    /**
 * Grab latest event posts
 * @param array $data Options for the function.
 * @return $object, or null if none.  */

function get_guts_cc ( $params ){

  $url = 'http://conta.cc/322dqTv';

  $context = stream_context_create(array(
    'http' => array(
        'ignore_errors' => true
     )
));

$contents = file_get_contents($url, false, $context);

//return $contents;

if ($contents == false) {
 // $contents = file_get_contents('/Users/kbollma/Projects/www/wordpress/wp-content/themes/faith-child/template-parts/cc-guts.php');

 // $data = json_decode(file_get_contents('/Users/kbollma/Projects/www/wordpress/wp-content/themes/faith-child/template-parts/cc-guts.php'), true);
  var_dump(json_encode(wp_remote_post('https://www.example.com')));
}
//return $result;
//echo htmlentities($result, ENT_NOQUOTES);
//return $contents;
//  return json_encode($result);

}


	 // Register the rest route here.
  	 add_action( 'rest_api_init', function () {
            register_rest_route('stripe/v1', 'create_intent', array(
              'methods' => 'POST',
              'callback' => 'get_stripe_intent'
            ));


            register_rest_route('cc/v1', 'latest-cc',array(
              'methods' => 'GET',
              'callback' => 'get_latest_cc'
            ));

            register_rest_route('cc/v1', 'guts-cc',array(
              'methods' => 'GET',
              'callback' => 'get_guts_cc'
            ));


     } );

//if (get_included_files()[0]) {
include_once WP_CONTENT_DIR . '/themes/faith-child/inc/customizer.php';
//}
