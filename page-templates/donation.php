<?php
/**
 * Template Name: Donation Page
 *
 * @package Faith
 */

get_header(); ?>

	<?php get_template_part( 'template-parts/header-image', '' ); ?>

	<div id="site-main" class="page-has-frame<?php if ( isset($ilovewp_has_image) && $ilovewp_has_image === TRUE) { echo ' page-has-image'; } ?>">

		<div class="wrapper wrapper-main wrapper-full clearfix walker">
		
			<div class="wrapper-frame clearfix">
			
				<main id="site-content" class="site-main" role="main">
				
					<?php while ( have_posts() ) : the_post(); ?>
					
					<div class="site-content-wrapper clearfix">
	
						<?php get_template_part( 'template-parts/content', 'page' ); ?>
						
						
						
					</div><!-- .site-content-wrapper .clearfix -->
					
					<?php endwhile; // End of the loop. ?>
				
				</main><!-- #site-content -->
			
			</div><!-- .wrapper-frame -->
		
		</div><!-- .wrapper .wrapper-main -->

	</div><!-- #site-main -->
	<link rel = "stylesheet" href ="<?php echo get_stylesheet_directory_uri();?>/assets/millwood-give.css" />
	<script src = "<?php echo get_stylesheet_directory_uri();?>/assets/millwood-give_10242021.js"></script>

<?php get_footer(); ?>
