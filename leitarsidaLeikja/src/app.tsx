import Axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import { postFix } from './constants';
// import FaernimerkjaContent from './faernimerkjaContent';
import { ITaxonomy } from './interface/ILeikjaData';
// import { StyledLoader } from './Loader';

interface Props {}

// const url = process.env.NODE_ENV === 'development' ? 'https://skatarnir.is' : '';
// const baseurl = 'https://skatarnir.is/wp-json/wp/v2/';

const App: FC<Props> = () => {
	const ref = useRef();
	const [leikjaData, setLeikjaData]: [ITaxonomy[], (x: ITaxonomy[]) => any] = useState(null);

	const findParentWithId = (node: any) => {
		if (node === null) {
			return null;
		}
		if (node.nodeName !== 'ARTICLE') {
			return findParentWithId(node.parentNode);
		}
		return node.id;
	};

	useEffect(() => {
		Axios(postFix + '/taxonomies').then((res) => {
			var leikirTaxonomies = [];
			for (const [key] of Object.entries(res.data)) {
				if (res.data[key].types.includes("leikir"))
					leikirTaxonomies.push(res.data[key]);
			}
			var requests = [];
			leikirTaxonomies.forEach((x: ITaxonomy) => {
				requests.push(Axios.get(postFix + `/${x.slug}`));
			});
			Axios.all(requests).then(Axios.spread((...responses) => {
				responses.forEach(x => {
					var taxon = leikirTaxonomies.find(y => y.slug === x.data[0].taxonomy);
					leikirTaxonomies.find(z => z.slug === taxon.slug).allTypes = x.data;
				});
				setLeikjaData(leikirTaxonomies);
			})).catch(errors => {
				console.log(errors);
			})
		});
	}, []);
	console.log(leikjaData);

	return (
		<StyledApp.Wrapper ref={ref}>
			
		</StyledApp.Wrapper>
	);
};

export default App;
