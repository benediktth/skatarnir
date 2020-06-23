import Axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import { postFix } from './constants';
import LeikjasidaContent from './leikjasidaContent';
import { StyledLoader } from './Loader';

interface Props {}

const url = process.env.NODE_ENV === 'development' ? 'https://testing.skatarnir.is' : '';

const App: FC<Props> = () => {
	const ref = useRef();
	const [data, setData] = useState(null);
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
			});
		}
	}, []);

	return (
		<StyledApp.Wrapper ref={ref}>
			{data && <LeikjasidaContent data={data} />}
			{data !== null || <StyledLoader />}
		</StyledApp.Wrapper>
	);
};

export default App;
