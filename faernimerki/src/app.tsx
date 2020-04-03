import React, { FC, useEffect, useRef } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';

interface Props {}

const App: FC<Props> = () => {
	const ref = useRef();
	let postId;

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
		const parentRefId = findParentWithId(ref.current);
		postId = parentRefId.split('-')[1];
		console.log(parentRefId);
		console.log(postId);
	});
	return <StyledApp.Wrapper ref={ref}>Test</StyledApp.Wrapper>;
};

export default App;
