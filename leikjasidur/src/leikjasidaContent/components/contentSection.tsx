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

const Content = styled.p`
	margin: 0;
`;
/**
 * Show html elements like <a></a> and also make sure new line work
 * @param text 
 */
function showHTMLElements(text) {
	// Replace all the new lines to new lines
	text = text.replaceAll('\r\n', '<br/>');
	text = text.replaceAll('\n', '<br/>');

	// Make sure we can see the html elements
	let stringWithElements = {
		__html: text
	}
	return <Content dangerouslySetInnerHTML={stringWithElements}></Content>;
}

const ContentSection: FC<Props> = ({ data }) => {
	console.log('data', data);
	let video = {
		__html: data.myndband
	}
	return (
		<Wrapper>
			{data.saga ? <h2>SAGA:</h2> : null}
			{data.saga ? showHTMLElements(data.saga) : null}
			<h2>ÞÚ ÞARFT:</h2>
			{showHTMLElements(data.tuTarft)}
			 <h2>LEIÐBEININGAR:</h2>
			{showHTMLElements(data.leidbeiningar)}
			{data.utfaerslur ? <h2>ÚTFÆRSLUR:</h2> : null}
			{data.utfaerslur ? showHTMLElements(data.utfaerslur) : null}
			{data.myndband ? <h2>MYNDBAND:</h2> : null}
			{data.myndband ? <div dangerouslySetInnerHTML={video} /> : null}
		</Wrapper>
	);
};

export default ContentSection;
