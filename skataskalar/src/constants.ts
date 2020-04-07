export const postFix =
	process.env.NODE_ENV === 'development'
		? 'http://skatarnir.is/wp-json/wp/v2/skalar?_embed&per_page=30'
		: '/wp-json/wp/v2/skalar?_embed&per_page=30';
