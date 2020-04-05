<?php
/**
 * Month View Content Template
 * The content template for the month view of events. This template is also used for
 * the response that is returned on month view ajax requests.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/month/content.php
 *
 * @package TribeEventsCalendar
 * @version 4.6.19
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
} ?>

<div id="tribe-events-content" class="tribe-events-month">

	<!-- Notices -->
	<?php tribe_the_notices() ?>

	<!-- Month Header -->
	<?php do_action( 'tribe_events_before_header' ) ?>
	<div id="tribe-events-header" <?php tribe_events_the_header_attributes() ?>>

		<!-- Header Navigation -->
		<?php tribe_get_template_part( 'month/nav' ); ?>

	</div>
	<!-- #tribe-events-header -->
	<?php do_action( 'tribe_events_after_header' ) ?>
	
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
	
	<!-- Month Grid -->
	<?php tribe_get_template_part( 'month/loop', 'grid' ) ?>

	<!-- Month Footer -->
	<?php do_action( 'tribe_events_before_footer' ) ?>
	<div id="tribe-events-footer">

		<!-- Footer Navigation -->
		<?php do_action( 'tribe_events_before_footer_nav' ); ?>
		<?php tribe_get_template_part( 'month/nav' ); ?>
		<?php do_action( 'tribe_events_after_footer_nav' ); ?>

	</div>
	<!-- #tribe-events-footer -->
	<?php do_action( 'tribe_events_after_footer' ) ?>

	<?php tribe_get_template_part( 'month/mobile' ); ?>
	<?php tribe_get_template_part( 'month/tooltip' ); ?>

</div><!-- #tribe-events-content -->
