<?php
/**
 * Single Event Template
 * A single event. This displays the event title, description, meta, and
 * optionally, the Google map for the event.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/single-event.php
 *
 * @package TribeEventsCalendar
 * @version 4.6.19
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$events_label_singular = tribe_get_event_label_singular();
$events_label_plural   = tribe_get_event_label_plural();

$event_id = get_the_ID();

$map = tribe_get_embedded_map()

?>

<div id="tribe-events-content" class="tribe-events-single">
	<style>
		.contentWrapper {
			display: flex;
			margin-bottom: 2rem;
		}
		.meta-wrapper {
			width: 30%;
		}
		.tribe-events-single-section {
			width: 100%;
		}
		.pictureAndTextWrapper {
			width: 70%;
			padding: 2rem 2rem 0 0;
		}
		.pictureAndTextWrapper img {
			width: 60%;
		}
		.single-tribe_events .tribe-events-event-image {
			margin: 0;
			margin-bottom: 0;
			text-align: inherit;
		}
		.single-tribe_events .tribe-events-venue-map {
			float: left;
			margin: 20px 4% 0% 0;
			width: 100%;
		}
		#tribe-events .tribe-events-content p {
			font-weight: 600;
			margin-top: 1rem;
		}
		@media only screen and (max-width: 600px) {
			.contentWrapper {
				flex-direction: column;
			}
			.meta-wrapper {
				display: flext;
				margin-top: 2rem;
				width: 100%;
			}
			.pictureAndTextWrapper {
				width: 100%;
			}
		}
	</style>
	<!-- Notices -->
	<?php tribe_the_notices() ?>

	<?php the_title( '<h1 class="tribe-events-single-event-title asdasd">', '</h1>' ); ?>
<!--
	<div class="tribe-events-schedule tribe-clearfix">
		<?php echo tribe_events_event_schedule_details( $event_id, '<h2>', '</h2>' ); ?>
		<?php if ( tribe_get_cost() ) : ?>
			<span class="tribe-events-cost"><?php echo tribe_get_cost( null, true ) ?></span>
		<?php endif; ?>
	</div> -->
	<!-- #tribe-events-header -->

	<?php while ( have_posts() ) :  the_post(); ?>
		<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<!-- Event featured image, but exclude link -->
			<div class="contentWrapper">
				<div class="pictureAndTextWrapper">
					<!-- Image -->
					<?php echo tribe_event_featured_image( $event_id, 'full', false ); ?>
					<?php the_title( '<h1 class="tribe-events-single-event-title asdasd">', '</h1>' ); ?>
					<!-- Event content -->
					<?php do_action( 'tribe_events_single_event_before_the_content' ) ?>
					<div class="tribe-events-single-event-description tribe-events-content">
						<?php the_content(); ?>
					</div>
					<!-- <?php echo tribe_event_featured_image( $event_id, 'full', false ); ?> -->
					<?php if ( !empty( $map ) ) : ?>
						<div class="tribe-events-venue-map">
							<?php
							// Display the map.
							do_action( 'tribe_events_single_meta_map_section_start' );
							echo $map;
							do_action( 'tribe_events_single_meta_map_section_end' );
							?>
						</div>
					<?php endif; ?>
				</div>
				<!-- Event meta -->
				<div class="meta-wrapper">
					<?php do_action( 'tribe_events_single_event_before_the_meta' ) ?>
					<?php tribe_get_template_part( 'modules/meta' ); ?>
					<?php do_action( 'tribe_events_single_event_after_the_meta' ) ?>
				</div>
			</div>
			<!-- .tribe-events-single-event-description -->
		</div> <!-- #post-x -->
		<?php if ( get_post_type() == Tribe__Events__Main::POSTTYPE && tribe_get_option( 'showComments', false ) ) comments_template() ?>
	<?php endwhile; ?>

	<!-- Event footer -->
	<div id="tribe-events-footer">
		<!-- Navigation -->
		<nav class="tribe-events-nav-pagination" aria-label="<?php printf( esc_html__( '%s Navigation', 'the-events-calendar' ), $events_label_singular ); ?>">
			<ul class="tribe-events-sub-nav">
				<li class="tribe-events-nav-previous"><?php tribe_the_prev_event_link( '<span>&laquo;</span> %title%' ) ?></li>
				<li class="tribe-events-nav-next"><?php tribe_the_next_event_link( '%title% <span>&raquo;</span>' ) ?></li>
			</ul>
			<!-- .tribe-events-sub-nav -->
		</nav>
	</div>
	<!-- #tribe-events-footer -->

</div><!-- #tribe-events-content -->