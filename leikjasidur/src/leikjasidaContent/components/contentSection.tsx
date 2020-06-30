import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	data: any
}

const Wrapper = styled.div`
	padding: 10px;
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

const Content = styled.p`

`;

const ContentSection: FC<Props> = ({ data }) => {
	console.log(data)
	let video = {
		__html: data.myndband
	}
	return (
		<Wrapper>
			<h2>Saga</h2>
			<Content>{data.saga}</Content>
			<h2>Þú þarft</h2>
			<Content>{data.tuTarft}</Content>
			<h2>Leiðbeiningar</h2>
			<Content>{data.leidbeiningar}</Content>
			<h2>Útfærslur</h2>
			<Content>{data.utfaerslur}</Content>
			<h2>Myndband</h2>
			<div dangerouslySetInnerHTML={video} />
		</Wrapper>
	);
};

export default ContentSection;
