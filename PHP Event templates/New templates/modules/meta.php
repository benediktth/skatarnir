<?php
/**
 * Single Event Meta Template
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe-events/modules/meta.php
 *
 * @version 4.6.10
 *
 * @package TribeEventsCalendar
 */

do_action( 'tribe_events_single_meta_before' );

// Check for skeleton mode (no outer wrappers per section)
$not_skeleton = ! apply_filters( 'tribe_events_single_event_the_meta_skeleton', false, get_the_ID() );

// Do we want to group venue meta separately?
$set_venue_apart = apply_filters( 'tribe_events_single_event_the_meta_group_venue', false, get_the_ID() );
?>

<?php if ( $not_skeleton ) : ?>
	<style>
		#adjustContent{
			margin: 0;
			display: flex;
			flex-direction: column;
		}
		#adjustContent h2 {
			font-size: 20px;
		}
	</style>

	<div class="tribe-events-single-section tribe-events-event-meta primary tribe-clearfix set-height" id="adjustContent">
<?php endif; ?>

<?php
do_action( 'tribe_events_single_event_meta_primary_section_start' );

// Always include the main event details in this first section
tribe_get_template_part( 'modules/meta/details' );
?>

<style>
	#register-button {
		font-weight: 700;
		font-size: 20px;
	}
</style>
<!--
	We only show the registration button if engin_skraning is not used
	If there is no value in skraning then we show the default button which sends you to https://skatar.felog.is
	otherwise we show a button with the given registration url
-->
<?php if ( !get_field('engin_skraning') ) : ?>
	<?php if ( empty( get_field('skraning') ) ) : ?>
		<div class="tribe-events-meta-group " id="register">
			<a href="https://www.sportabler.com/shop/skatarnir" id="register-button" target="_blank">Skráning</a>
		</div>
	<?php endif; ?>
	<?php if ( !empty( get_field('skraning') ) ) : ?>
		<div class="tribe-events-meta-group " id="register">
			<?php
				echo '<a href="' . get_field('skraning') . ' " id="register-button" target="_blank">Skráning</a>';
			?>
		</div>
	<?php endif; ?>
<?php endif; ?>



<style>
	.tribe-events-event-meta .column, .tribe-events-event-meta .tribe-events-meta-group {
		display: flex;
		flex-direction: column;
		float: inherit;
		width: 100%;
	}
	.tribe-events-event-meta .column, .tribe-events-event-meta .tribe-events-meta-group h2 {
	    background-color: #3C50FF;
		color: #ffaf3c;
		padding: 4px 10px;
	}
</style>
<?php
// Include venue meta if appropriate.
if ( tribe_get_venue_id() ) {
	// If we have no map to embed and no need to keep the venue separate...
	if ( ! $set_venue_apart && ! tribe_embed_google_map() ) {
		tribe_get_template_part( 'modules/meta/venue' );
	} elseif ( ! $set_venue_apart && ! tribe_has_organizer() && tribe_embed_google_map() ) {
		// If we have no organizer, no need to separate the venue but we have a map to embed...
		tribe_get_template_part( 'modules/meta/venue' );
		// echo '<div class="tribe-events-meta-group tribe-events-meta-group-gmap">';
		// tribe_get_template_part( 'modules/meta/map' );
		// echo '</div>';
	} else {
		// If the venue meta has not already been displayed then it will be printed separately by default
		$set_venue_apart = true;
	}
}

// Include organizer meta if appropriate
if ( tribe_has_organizer() ) {
	tribe_get_template_part( 'modules/meta/organizer' );
}

do_action( 'tribe_events_single_event_meta_primary_section_end' );
?>
<style>.tribe-events-cal-links{
	padding: 0.5rem;
	text-align: center;
}
.tribe-events-cal-links a {
	margin-right: 5px;
	color: #3C50FF !important;
	background-color: #FFAF3C !important;
	font-size: 17px !important;
	font-weight: 700 !important;
}
</style>

<?php do_action( 'tribe_events_single_event_after_the_content' ) ?>

<style>
#register {
	float: inherit;
	width: 100%;
	text-align: center;
	margin: 1rem 0;
	padding: 10px 0px 25px 0px;
}
.tribe-events-event-meta dl {
	padding: 3px 20px;
}
#register-button {
	color: #3C50FF;
	background-color: #FFAF3C;
    width: 115px;
    height: 45px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    font-weight: bold;
	cursor:pointer;
}
</style>
<?php if ( $not_skeleton ) : ?>
	</div>
<?php endif; ?>


<?php if ( $set_venue_apart ) : ?>
	<?php if ( $not_skeleton ) : ?>
		<div class="tribe-events-single-section tribe-events-event-meta secondary tribe-clearfix">
	<?php endif; ?>
	<?php
	do_action( 'tribe_events_single_event_meta_secondary_section_start' );

	tribe_get_template_part( 'modules/meta/venue' );
	// tribe_get_template_part( 'modules/meta/map' );

	do_action( 'tribe_events_single_event_meta_secondary_section_end' );
	?>
	<?php
	if ( $not_skeleton ) : ?>
		</div>
	<?php endif; ?>
<?php
endif;
// google cal links
do_action( 'tribe_events_single_meta_after' );
