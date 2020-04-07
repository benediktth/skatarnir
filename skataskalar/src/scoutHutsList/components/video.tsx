import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
	padding: 10px;
	text-align: center;
`;

const Video: FC<Props> = () => {
	return (
		<Wrapper>
			<h1>Myndband tengt færnimerkinu</h1>
		</Wrapper>
	);
};

export default Video;
