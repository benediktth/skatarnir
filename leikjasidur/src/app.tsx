import Axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import { postFix } from './constants';
import LeikjasidaContent from './leikjasidaContent';
import { StyledLoader } from './Loader';
// import content from './content.json';

interface Props {}

// const url = process.env.NODE_ENV === 'development' ? 'https://testing.skatarnir.is' : '';

const App: FC<Props> = () => {
	const ref = useRef();
	const [data, setData] = useState(null);
	const [taxonomiesArray, setTaxonomiesArray] = useState(null);
	let postId: string = '';

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
		if (postId === '') {
			const parentRefId = findParentWithId(ref.current);
			postId = parentRefId.split('-')[1];
			Axios(postFix + postId).then((res) => {
				console.log(res.data);
				res.data.acf.title = res.data.title.rendered;
				setData(res.data);

				const requests = res.data._links['wp:term'].map(taxonomy => {
					return Axios.get(taxonomy.href);
				});
				Axios.all(requests).then(Axios.spread((...responses) => {
					const response1: any = responses[0];
					const response2: any = responses[1];
					const response3: any = responses[2];
					let tegundLeikja = response1.data.map(tegund => {
						return tegund.name;
					})
					let stadsetningar = response2.data.map(stadsetning => {
						return stadsetning.name;
					})
					let aldursbil = response3.data.map(aldursbil => {
						return aldursbil.slug;
					})
					setTaxonomiesArray({
						tegundLeikja,
						stadsetningar,
						aldursbil
					})
				}))
			});
		}
	}, []);

	return (
		<StyledApp.Wrapper ref={ref}>
			{taxonomiesArray && <LeikjasidaContent data={data} taxonomies={taxonomiesArray} />}
			{taxonomiesArray !== null || <StyledLoader />}
		</StyledApp.Wrapper>
	);
};

export default App;
