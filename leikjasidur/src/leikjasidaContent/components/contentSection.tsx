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
		margin-top: 10px;
	}
`;

const Content = styled.pre`
	margin: 0;
`;

const ContentSection: FC<Props> = ({ data }) => {
	console.log(data);
	let video = {
		__html: data.myndband
	}
	return (
		<Wrapper>
			{data.saga ? <h2>SAGA:</h2> : null}
			{data.saga ? <Content>{data.saga}</Content> : null}
			<h2>ÞÚ ÞARFT:</h2>
			<Content>{data.tuTarft}</Content>
			<h2>LEIÐBEININGAR:</h2>
			<Content>{data.leidbeiningar}</Content>
			{data.utfaerslur ? <h2>ÚTFÆRSLUR:</h2> : null}
			{data.utfaerslur ? <Content>{data.utfaerslur}</Content> : null}
			{data.myndband ? <h2>MYNDBAND:</h2> : null}
			{data.myndband ? <div dangerouslySetInnerHTML={video} /> : null}
		</Wrapper>
	);
};

export default ContentSection;
