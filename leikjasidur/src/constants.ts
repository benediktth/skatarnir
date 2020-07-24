export const postFix =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-json/wp/v2/leikir/'
		: '/wp-json/wp/v2/leikir/';
