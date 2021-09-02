import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	videoUrl: string;
}

const Wrapper = styled.div`
	padding: 10px;
	text-align: center;

	div {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
	}
	iframe {
		position: absolute;
		top: 45px;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

const Video: FC<Props> = ({ videoUrl }) => {
	let setInnerObject = {
		__html: videoUrl,
	};
	return (
		<Wrapper>
			<h1 style={{ marginBottom: '10px' }}>Gagnleg myndbönd</h1>
			<div dangerouslySetInnerHTML={setInnerObject} />
		</Wrapper>
	);
};

export default Video;
