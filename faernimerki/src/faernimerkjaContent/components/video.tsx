import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	videoUrl: string;
}

const Wrapper = styled.div`
	padding: 10px;
	text-align: center;
`;

const Video: FC<Props> = ({ videoUrl }) => {
	let setInnerObject = {
		__html: videoUrl
	}
	return (
		<Wrapper>
			<h1 style={{ marginBottom: '10px' }}>Myndband tengt færnimerkinu</h1>
			<div dangerouslySetInnerHTML={setInnerObject} />
		</Wrapper>
	);
};

export default Video;
