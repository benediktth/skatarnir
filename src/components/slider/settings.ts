export const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	draggable: false,
	responsive: [
		{
			breakpoint: 1023,
			settings: {
				draggable: true,
				slidesToShow: 3,
				arrows: true,
			},
		},
		{
			breakpoint: 850,
			settings: {
				draggable: true,
				slidesToShow: 2,
				arrows: true,
			},
		},
		{
			breakpoint: 630,
			settings: {
				draggable: true,
				slidesToShow: 1,
				arrows: true,
			},
		},
		{
			breakpoint: 420,
			settings: {
				draggable: true,
				slidesToShow: 1,
				arrows: true,
			},
		},
	],
};
