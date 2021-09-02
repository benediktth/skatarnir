export interface ILeikur {
	_links: IMetaLinks;
	acf: IWordPressContent;
}
export interface ILeikjaData {

}

export interface IMetaLinks {
	"wp:term": ITaxonomy[];
}
export interface ITaxonomyType {
	name: string;
	slug: string;
	taxonomy: string;
}

export interface ITaxonomy {
	name: string;
	slug: boolean;
	types: string[];
	allTypes: ITaxonomyType[];
}

export interface IWordPressContent {

}