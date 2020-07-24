import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	data: any
}

const Wrapper = styled.div`
	width: 100%;
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

	h2  {
		color: #3c50ff;
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
			<h2>SAGA:</h2>
			<Content>{data.saga}</Content>
			<h2>ÞÚ ÞARFT:</h2>
			<Content>{data.tutarft}</Content>
			 <h2>LEIÐBEININGAR:</h2>
			<Content>{data.leidbeiningar}</Content>
			<h2>ÚTFÆRSLUR:</h2>
			<Content>{data.utfaerslur}</Content>
			<h2>MYNDBAND:</h2>
			<div dangerouslySetInnerHTML={video} />
		</Wrapper>
	);
};

export default ContentSection;
