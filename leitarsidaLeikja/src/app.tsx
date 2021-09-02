import Axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import { postFix } from './constants';
import FaernimerkjaContent from './faernimerkjaContent';
import { StyledLoader } from './Loader';

interface Props {}

const url = process.env.NODE_ENV === 'development' ? 'https://skatarnir.is' : '';

const App: FC<Props> = () => {
	const ref = useRef();
	const [data, setData] = useState(null);
	const [pictureUrl, setPictureUrl] = useState('');
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
				setData(res.data);
				console.log(res.data);
				Axios(url + '/wp-json/wp/v2/media/' + res.data.featured_media).then((res) => {
					setPictureUrl(res.data.media_details.sizes.medium.source_url);
				}).catch(err => {
					console.log('fann ekki myndina', err);
					setPictureUrl('https://skatarnir.is/wp-content/uploads/Logo_3_Orange@4x-uai-1440x296.png');
				});
			});
		}
	}, []);

	return (
		<StyledApp.Wrapper ref={ref}>
			{data && pictureUrl && <FaernimerkjaContent data={data} pictureUrl={pictureUrl} />}
			{(data !== null && pictureUrl !== '') || <StyledLoader />}
		</StyledApp.Wrapper>
	);
};

export default App;
