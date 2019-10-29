export const sliderSettings = {
	dots: false,
	arrows: false,
	infinite: false,
	speed: 800,
	slidesToShow: 4,
	slidesToScroll: 1,
	adaptiveHeight: true,
	draggable: false,
	autoplay: false,
	responsive: [
		{
			breakpoint: 1023,
			settings: {
				draggable: true,
				slidesToShow: 3,
			},
		},

		{
			breakpoint: 767,
			settings: {
				draggable: true,
				slidesToShow: 1,
			},
		},
	],
};
