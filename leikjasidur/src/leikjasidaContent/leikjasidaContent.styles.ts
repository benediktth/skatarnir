import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	word-break: break-word;
	overflow-wrap: break-word;
	display: flex;
	overflow: hidden;
	flex-flow: row wrap;
	justify-content: flex;
	flex-direction: row;
	@media screen and (max-width: 1150px) {
		flex-direction: column;
	}
`;

export const H1 = styled.h1`
	padding: 10px;
`;

export const FirstRowWrapper = styled.div`
	width: auto;
	display: flex;
	order: 1;
	flex: 2;
`;

export const SecondRowWrapper = styled.div`
	width: auto;
	display: flex;
	height: 100%;
	@media only screen and (max-width: 1028px) {
		flex-wrap: wrap;
	}
	order: 2;
	flex: 1;
`;
