<?php
/**
 * List View Content Template
 * The content template for the list view. This template is also used for
 * the response that is returned on list view ajax requests.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/list/content.php
 *
 * @package TribeEventsCalendar
 * @version 4.6.19
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
} ?>

<div id="tribe-events-content" class="tribe-events-list">


	<?php
	/**
	 * Fires before any content is printed inside the list view.
	 */
	do_action( 'tribe_events_list_before_the_content' );
	?>

	<!-- Notices -->
	<?php tribe_the_notices() ?>

	<!-- List Header -->
	<?php do_action( 'tribe_events_before_header' ); ?>
	<div id="tribe-events-header" <?php tribe_events_the_header_attributes() ?>>

		<!-- Header Navigation -->
		<?php do_action( 'tribe_events_before_header_nav' ); ?>
		<?php tribe_get_template_part( 'list/nav', 'header' ); ?>
		<?php do_action( 'tribe_events_after_header_nav' ); ?>

	</div>
	<!-- #tribe-events-header -->
	<?php do_action( 'tribe_events_after_header' ); ?>
	
	<style>
		.new-event-button {
			background-color: #ffaf3c;
			padding: 1rem;
			line-height: 4rem;
			border-radius: 10px;
			color: #3c50ff !important;
			text-transform: uppercase;
			font-weight: 700;
		}
		.new-event-button:hover {
			background-color: #3c50ff;
			color: #ffaf3c !important;
		}

		#tribe-events-content>a.tribe-events-ical.tribe-events-button {
			background-color: #ffaf3c;
			color: #3c50ff;
			font-size: 15px;
			border-radius: 10px;
		}

		#tribe-events-content>a.tribe-events-ical.tribe-events-button:hover {
			background-color: #3c50ff;
			color: #ffaf3c;
		}

		@media screen and (min-width: 769px) {
			#tribe-events-content>a.tribe-events-ical.tribe-events-button {
				padding: 1rem;
			}
		}
	</style>
	
	<a class="new-event-button" href="https://skatarnir.is/vidburdarskraning/" target="_blank">SKRÁ NÝJAN VIÐBURÐ</a>


	<!-- Events Loop -->
	<?php if ( have_posts() ) : ?>
		<?php do_action( 'tribe_events_before_loop' ); ?>
		<?php tribe_get_template_part( 'list/loop' ) ?>
		<?php do_action( 'tribe_events_after_loop' ); ?>
	<?php endif; ?>

	<!-- List Footer -->
	<?php do_action( 'tribe_events_before_footer' ); ?>
	<div id="tribe-events-footer">

		<!-- Footer Navigation -->
		<?php do_action( 'tribe_events_before_footer_nav' ); ?>
		<?php tribe_get_template_part( 'list/nav', 'footer' ); ?>
		<?php do_action( 'tribe_events_after_footer_nav' ); ?>

	</div>
	<!-- #tribe-events-footer -->
	<?php do_action( 'tribe_events_after_footer' ) ?>

</div><!-- #tribe-events-content -->
