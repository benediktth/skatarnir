import Axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import { postFix } from './constants';
import FaernimerkjaContent from './faernimerkjaContent';
import { StyledLoader } from './Loader';

interface Props {}

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
			{data && <FaernimerkjaContent data={data} />}
			{data !== null || <StyledLoader />}
		</StyledApp.Wrapper>
	);
};

export default App;
