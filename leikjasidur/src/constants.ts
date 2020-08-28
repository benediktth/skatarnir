export const postFix =
	process.env.NODE_ENV === 'development'
		? 'https://skatarnir.is/wp-json/wp/v2/leikir/'
		: '/wp-json/wp/v2/leikir/';

export const taxonomiesPostFix =
	process.env.NODE_ENV === 'development'
		? 'https://skatarnir.is/wp-json/wp/v2/leikir/'
		: '/wp-json/wp/v2/';

export const stadsetning_leiks = {
	name: 'stadsetning_leiks',
	properties: [{
		id: 466,
		slug: 'utileikur',
		name: 'Útileikur'
	}, {
		id: 467,
		name: 'Innileikur',
		slug: 'innileikur'
	}]
}
export const tegund_leiks = {
	name: 'tegund_leiks',
	properties: [{
		id: 465,
		name: 'Kynningarleikur',
		slug: 'kynningarleikur'
	}]
}
export const leikir_category = {
	name: 'stadsetning_leiks',
	properties: [{
		id: 468,
		name: 'Drekarskátar',
		slug: 'drekaskatar'
	}, {
		id: 469,
		name: 'Fálkaskátar',
		slug: 'falkaskatar'
	},{
		id: 470,
		name: 'Dróttskátar',
		slug: 'drottskatar'
	},{
		id: 471,
		slug: 'rekkaskatar',
		name: 'Rekkaskátar'
	}, {
		id: 472,
		name: 'Róverskátar',
		slug: 'roverskatar'
	}]

}