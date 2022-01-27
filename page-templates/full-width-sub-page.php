<?php
/**
 * Template Name: Full Width Sub Page 
 *
 * @package Faith
 */

get_header(); ?>

	<?php get_template_part( 'template-parts/header-image', '' ); ?>

	<div id="site-main" class="page-has-frame full-width-sub-page<?php if ( isset($ilovewp_has_image) && $ilovewp_has_image === TRUE) { echo ' page-has-image'; } ?>">
			
				<main id="site-content-full-width" class="site-main" role="main">
				
					<?php while ( have_posts() ) : the_post(); ?>
					
					<div class="site-content-wrapper">
	
						<?php get_template_part( 'template-parts/content', 'page' ); ?>
						
						<?php
							// If comments are open or we have at least one comment, load up the comment template
							if ( comments_open() || '0' != get_comments_number() ) {
								comments_template();
							}
						?>
						
					</div><!-- .site-content-wrapper -->
					
					<?php endwhile; // End of the loop. ?>
				
				</main><!-- #site-content -->

	</div><!-- #site-main -->

<?php get_footer(); ?>