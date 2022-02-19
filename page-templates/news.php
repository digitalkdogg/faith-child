<?php
/**
 * Template Name: News Page
 *
 * @package Faith
 */

get_header(); ?>

	<?php get_template_part( 'template-parts/header-image', '' ); ?>

	<div id="site-content-full-width" class="page-has-frame<?php if ( isset($ilovewp_has_image) && $ilovewp_has_image === TRUE) { echo ' page-has-image'; } ?>">


					<?php while ( have_posts() ) : the_post(); ?>

					<div class="site-content-wrapper clearfix">

						<div id = "modal">
							<div class = 'title-wrap'>
								<div class = "title"><h4></h4><span id = "x">X</span></div>
							</div>
							<div class = "body"></div>
						<div>


					</div><!-- .site-content-wrapper .clearfix -->

					<?php endwhile; // End of the loop. ?>


	</div><!-- #site-main -->

	<link rel = "stylesheet" href ="<?php echo get_stylesheet_directory_uri();?>/assets/new-s-page.css" />
	<script src = "<?php echo get_stylesheet_directory_uri();?>/assets/new--s--page.js"></script>

<?php get_footer(); ?>
