export const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	draggable: false,
	nextArrow: null,
	prevArrow: null,
	responsive: [
		{
			breakpoint: 1900,
			settings: {
				draggable: true,
				slidesToShow: 2,
				arrows: true,
			},
		},
		{
			breakpoint: 1023,
			settings: {
				draggable: true,
				slidesToShow: 2,
				arrows: true,
			},
		},
		{
			breakpoint: 956,
			settings: {
				draggable: true,
				slidesToShow: 1,
				arrows: true,
			},
		},
	],
};
