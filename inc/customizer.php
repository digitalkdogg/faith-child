<?php
/**
 * Faith Theme Customizer.
 *
 * @package Faith
 */
/**
 * Sets up the WordPress core custom header and custom background features.
 *
 * @since Faith 1.0
 *
 * @see faith_header_style()
 */

//add_action( 'after_setup_theme', 'faith_custom_header_and_background' );


/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function faith_customize_custom_register( $wp_customize ) {

	// Custom help section
	class Faith_Custom_Customize_Control extends WP_Customize_Control {
		public $type = 'text_help';
		public function render_content() {
			$faith_ep_activated = '';
			if ( get_option( 'faith_ep_license_status' ) == 'valid' ) {
				$faith_ep_activated = 'bnt-customizer-ep-active';
			}
		}
	}



    $theme_header_style = array(
        'default' => esc_html__('Default', 'faith'),
        'centered' => esc_html__('Centered', 'faith')
    );

	$color_scheme = faith_get_color_scheme();
	
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';

		$wp_customize->add_section( 
			'api_support', 
			array(
				'title' => esc_html__( 'API Settings', 'faith' ),
				'priority' => 19,
			) 
		);
		
		$wp_customize->add_setting( 
			'faith_support2', 
			array(
				'type' => 'theme_mod',
				'default' => '',
				'sanitize_callback' => 'esc_attr',
			)
		);
		$wp_customize->add_control(
			new Faith_Custom_Customize_Control(
			$wp_customize,
			'faith_support2', 
				array(
					'section' => 'api_support',
					'type' => 'text_help',
				)
			)
		);


		 // Add setting
		 $wp_customize->add_setting( 'stripe_test_key_text_block', array(
			'default'           => __( 'Default text', '' ),
			'sanitize_callback' => 'sanitize_text'
	   ) );
	   // Add control
	   $wp_customize->add_control( new WP_Customize_Control(
		   $wp_customize,
		   'stripe_test_key_text',
			   array(
				   'label'    => __( 'Stripe Test Key', 'theme_name' ),
				   'section'  => 'api_support',
				   'settings' => 'stripe_test_key_text_block',
				   'type'     => 'text'
			   )
		   )
	   );




	return $wp_customize;

}

 // Sanitize text
 function sanitize_text( $text ) {
	return sanitize_text_field( $text );
}
add_action( 'customize_register', 'faith_customize_custom_register' );