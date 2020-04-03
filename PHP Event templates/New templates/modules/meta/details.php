<?php
/**
 * Single Event Meta (Details) Template
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe-events/modules/meta/details.php
 *
 * @package TribeEventsCalendar
 * @version 4.6.19
 */



$time_format = get_option( 'time_format', Tribe__Date_Utils::TIMEFORMAT );
$time_range_separator = tribe_get_option( 'timeRangeSeparator', ' - ' );

$start_datetime = tribe_get_start_date();
$start_date = tribe_get_start_date( null, false );
$start_time = tribe_get_start_date( null, false, $time_format );
$start_ts = tribe_get_start_date( null, false, Tribe__Date_Utils::DBDATEFORMAT );

$end_datetime = tribe_get_end_date();
$end_date = tribe_get_display_end_date( null, false );
$end_time = tribe_get_end_date( null, false, $time_format );
$end_ts = tribe_get_end_date( null, false, Tribe__Date_Utils::DBDATEFORMAT );

$time_formatted = null;
if ( $start_time == $end_time ) {
	$time_formatted = esc_html( $start_time );
} else {
	$time_formatted = esc_html( $start_time . $time_range_separator . $end_time );
}

$event_id = Tribe__Main::post_id_helper();

/**
 * Returns a formatted time for a single event
 *
 * @var string Formatted time string
 * @var int Event post id
 */
$time_formatted = apply_filters( 'tribe_events_single_event_time_formatted', $time_formatted, $event_id );

/**
 * Returns the title of the "Time" section of event details
 *
 * @var string Time title
 * @var int Event post id
 */
$time_title = apply_filters( 'tribe_events_single_event_time_title', __( 'Time:', 'the-events-calendar' ), $event_id );

$cost    = tribe_get_formatted_cost();
$website = tribe_get_event_website_link();
?>
<style>
	#events-meta {
		width: 100%;
	}
	#keyInfo {
		background-color: #3C50FF;
		color: #ffaf3c;
		padding: 4px 10px;
	}
</style>
<div class="tribe-events-meta-group tribe-events-meta-group-details" id="events-meta">

	<?php
		echo "
		<script type=\"text/javascript\">
		function getTimeRemaining(endtime){
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor( (t/1000) % 60 );
			var minutes = Math.floor( (t/1000/60) % 60 );
			var hours = Math.floor( (t/(1000*60*60)) % 24 );
			var days = Math.floor( t/(1000*60*60*24) );
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}

		</script>
		";
	?>
	<script>
		var startDate = "<?php echo $start_ts; ?>";
		var startTime = "<?php echo $start_time; ?>";
		var formattedDate = startDate + "T" + startTime;
		var dateOfEvent = new Date(formattedDate)
		function decreaseTime(){
			setInterval(function(){
				var timeLeft = getTimeRemaining(dateOfEvent);
				document.getElementById('seconds').innerText = timeLeft.seconds;
				document.getElementById('minutes').innerText = timeLeft.minutes;
				document.getElementById('hours').innerText = timeLeft.hours;
				document.getElementById('days').innerText = timeLeft.days;
			},1000);
		}
		decreaseTime()
	</script>
	<style>
		.counter-wrapper {
			display: flex;
			justify-content: space-around;
			margin-top: 30px;
		}
		.counter-item-wrapper {
			text-align: center;
			background-color: #3C50FF;
			width: 23%;
		}

		.counter-item-wrapper p {
			margin: 0;
			margin-top: -11px;
			padding: 0;
			font-size: 20px;
			color: white;
		}

		.counter-item-wrapper h2 {
			margin: 0;
			padding: 0;
			font-size: 29px !important;
		}
	</style>
	<div class="counter-wrapper">
		<div class="counter-item-wrapper">
			<h2 id="days"></h2>
			<p>Dagar</p>
		</div>
		<div class="counter-item-wrapper">
			<h2 id="hours"></h2>
			<p>Klst</p>
		</div>
		<div class="counter-item-wrapper">
			<h2 id="minutes"></h2>
			<p>Min</p>
		</div>
		<div class="counter-item-wrapper">
			<h2 id="seconds"></h2>
			<p>Sek</p>
		</div>
	</div>
	<script>
		var timeLeft = getTimeRemaining(dateOfEvent);
		document.getElementById('seconds').innerText = timeLeft.seconds;
		document.getElementById('minutes').innerText = timeLeft.minutes;
		document.getElementById('hours').innerText = timeLeft.hours;
		document.getElementById('days').innerText = timeLeft.days;
	</script>
	<h2 class="tribe-events-single-section-title" id="keyInfo">Lykilupplýsingar</h2>
	<dl>
		<?php
		do_action( 'tribe_events_single_meta_details_section_start' );

		// All day (multiday) events
		if ( tribe_event_is_all_day() && tribe_event_is_multiday() ) :
			?>

			<dt class="tribe-events-start-date-label">Byrjar: </dt>
			<dd>
				<abbr class="tribe-events-abbr tribe-events-start-date published dtstart" title="<?php esc_attr_e( $start_ts ) ?>"> <?php esc_html_e( $start_date ) ?> </abbr>
			</dd>

			<dt class="tribe-events-end-date-label">Endar: </dt>
			<dd>
				<abbr class="tribe-events-abbr tribe-events-end-date dtend" title="<?php esc_attr_e( $end_ts ) ?>"> <?php esc_html_e( $end_date ) ?> </abbr>
			</dd>

		<?php
		// All day (single day) events
		elseif ( tribe_event_is_all_day() ):
			?>

			<dt class="tribe-events-start-date-label">Dagsetning: </dt>
			<dd>
				<abbr class="tribe-events-abbr tribe-events-start-date published dtstart" title="<?php esc_attr_e( $start_ts ) ?>"> <?php esc_html_e( $start_date ) ?> </abbr>
			</dd>

		<?php
		// Multiday events
		elseif ( tribe_event_is_multiday() ) :
			?>

			<dt class="tribe-events-start-datetime-label">Byrjar: </dt>
			<dd>
				<abbr class="tribe-events-abbr tribe-events-start-datetime updated published dtstart" title="<?php esc_attr_e( $start_ts ) ?>"> <?php esc_html_e( $start_datetime ) ?> </abbr>
			</dd>

			<dt class="tribe-events-end-datetime-label">Endar: </dt>
			<dd>
				<abbr class="tribe-events-abbr tribe-events-end-datetime dtend" title="<?php esc_attr_e( $end_ts ) ?>"> <?php esc_html_e( $end_datetime ) ?> </abbr>
			</dd>

		<?php
		// Single day events
		else :
			?>

			<dt class="tribe-events-start-date-label">Dagsetning: </dt>
			<dd>
				<abbr class="tribe-events-abbr tribe-events-start-date published dtstart" title="<?php esc_attr_e( $start_ts ) ?>"> <?php esc_html_e( $start_date ) ?> </abbr>
			</dd>

			<dt class="tribe-events-start-time-label"> <?php echo esc_html( $time_title ); ?> </dt>
			<dd>
				<div class="tribe-events-abbr tribe-events-start-time published dtstart" title="<?php esc_attr_e( $end_ts ) ?>">
					<?php echo $time_formatted; ?>
				</div>
			</dd>

		<?php endif ?>

		<?php
		// Event Cost
		if ( ! empty( $cost ) ) : ?>

			<dt class="tribe-events-event-cost-label">Kostnaður: </dt>
			<dd class="tribe-events-event-cost"> <?php esc_html_e( $cost ); ?> </dd>
		<?php endif ?>

		<?php
		echo tribe_get_event_categories(
			get_the_id(), array(
				'before'       => '',
				'sep'          => ', ',
				'after'        => '',
				'label'        => 'Aldurshópar', // An appropriate plural/singular label will be provided
				'label_before' => '<dt class="tribe-events-event-categories-label">',
				'label_after'  => '</dt>',
				'wrap_before'  => '<dd class="tribe-events-event-categories">',
				'wrap_after'   => '</dd>',
			)
		);
		?>
		<?php
		// Event Website
		if ( ! empty( $website ) ) : ?>

			<dt class="tribe-events-event-url-label">Vefsíða:  </dt>
			<dd class="tribe-events-event-url"> <?php echo $website; ?> </dd>
		<?php endif ?>
	</dl>
</div>
