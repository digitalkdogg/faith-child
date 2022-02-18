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
	 $wp_customize->add_setting( 'body_class_name_block', array(
		'default'           => __( '', '' ),
		'sanitize_callback' => 'sanitize_text'
	 ) );
	 // Add control
	 $wp_customize->add_control( new WP_Customize_Control(
		 $wp_customize,
		 'body_class_name',
			 array(
				 'label'    => __( 'body Class Name', 'theme_name' ),
				 'section'  => 'api_support',
				 'settings' => 'body_class_name_block',
				 'type'     => 'text'
			 )
		 )
	 );

		// Add setting
		$wp_customize->add_setting( 'base_path', array(
			'default'           => __( 'Default text', '' ),
			'sanitize_callback' => 'sanitize_text'
	   ) );
	   // Add control
	   $wp_customize->add_control( new WP_Customize_Control(
		   $wp_customize,
		   'base_path',
			   array(
				   'label'    => __( 'Base Path', 'theme_name' ),
				   'section'  => 'api_support',
				   'settings' => 'base_path',
				   'type'     => 'text'
			   )
		   )
	   );


		 $wp_customize->add_setting( 'use_test_data', array(
			'default'           => 1,
			'sanitize_callback' => 'sanitize_checkbox',
		) );


		  $wp_customize->add_control( new WP_Customize_Control(
		   $wp_customize,
		   'use_test_data',
			   array(
				   'label'    => __( 'Use Test Data', 'theme_name' ),
				   'section'  => 'api_support',
				   'settings' => 'use_test_data',
				   'description' => esc_html( 'Check this if you are on a local or just want test data to be used', 'faith' ),
				   'type'     => 'checkbox'
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

	   	 // Add setting
		 $wp_customize->add_setting( 'stripe_test_secret_text_block', array(
			'default'           => __( 'Default text', '' ),
			'sanitize_callback' => 'sanitize_text'
	   ) );
	   // Add control
	   $wp_customize->add_control( new WP_Customize_Control(
		   $wp_customize,
		   'stripe_test_secret_text',
			   array(
				   'label'    => __( 'Stripe secret Key', 'theme_name' ),
				   'section'  => 'api_support',
				   'settings' => 'stripe_test_secret_text_block',
				   'type'     => 'text'
			   )
		   )
	   );

	   	 // Add setting
		 $wp_customize->add_setting( 'stripe_live_key_text_block', array(
			'default'           => __( 'Default text', '' ),
			'sanitize_callback' => 'sanitize_text'
	   ) );
	   // Add control
	   $wp_customize->add_control( new WP_Customize_Control(
		   $wp_customize,
		   'stripe_live_key_text',
			   array(
				   'label'    => __( 'Stripe Live Key', 'theme_name' ),
				   'section'  => 'api_support',
				   'settings' => 'stripe_live_key_text_block',
				   'type'     => 'text'
			   )
		   )
	   );

	   	 // Add setting
		 $wp_customize->add_setting( 'stripe_live_secret_text_block', array(
			'default'           => __( 'Default text', '' ),
			'sanitize_callback' => 'sanitize_text'
	   ) );
	   // Add control
	   $wp_customize->add_control( new WP_Customize_Control(
		   $wp_customize,
		   'stripe_live_secret_text',
			   array(
				   'label'    => __( 'Stripe Live Secret', 'theme_name' ),
				   'section'  => 'api_support',
				   'settings' => 'stripe_live_secret_text_block',
				   'type'     => 'text'
			   )
		   )
	   );

		 $wp_customize->add_setting( 'show_donation_btn', array(
			'default'           => 1,
			'sanitize_callback' => 'sanitize_checkbox',
		) );


			$wp_customize->add_control( new WP_Customize_Control(
			 $wp_customize,
			 'show_donation_btn',
				 array(
					 'label'    => __( 'Show Donation Button', 'theme_name' ),
					 'section'  => 'faith_other_options',
					 'settings' => 'show_donation_btn',
					 'description' => esc_html( 'Determines if you see the donation button in the header', 'faith' ),
					 'type'     => 'checkbox'
				 )
			 )
		 );


	     	 // Add setting
		 $wp_customize->add_setting( 'center_slider_1500_offset', array(
			'default'           => __( '0px', '' ),
			'sanitize_callback' => 'sanitize_text'
	   ) );
	   // Add control
	   $wp_customize->add_control( new WP_Customize_Control(
		   $wp_customize,
		   'center_slider_1500',
			   array(
				   'label'    => __( 'Center Slider 1500px Offset', 'theme_name' ),
				   'section'  => 'faith_other_options',
				   'description' => 'Set the calculation without px to center the slider wrapper (#rev_slider_1_1_wrapper) when used at a screenwidth of 1500px or greater',
				   'settings' => 'center_slider_1500_offset',
				   'type'     => 'text'
			   )
		   )
	   );




	return $wp_customize;

}

if ( ! function_exists( 'sanitize_checkbox' ) ) :
/**
 * Sanitize the checkbox.
 *
 * @param  mixed 	$input.
 * @return boolean	(true|false).
 */
function sanitize_checkbox( $input ) {
	if ( 1 == $input ) {
		return true;
	} else {
		return false;
	}
}
endif;

if (! function_exists( 'sanitize_text' )  ) :
 // Sanitize text
 function sanitize_text( $text ) {
	return sanitize_text_field( $text );
}
endif;

add_action( 'customize_register', 'faith_customize_custom_register' );
