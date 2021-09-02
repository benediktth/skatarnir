export const postFix =
	process.env.NODE_ENV === 'development'
		? 'https://skatarnir.is/wp-json/wp/v2'
		: '/wp-json/wp/v2';
