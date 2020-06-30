import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	overflow: hidden;
`;

export const H1 = styled.h1`
	padding: 10px;
`;

export const FirstRowWrapper = styled.div`
	width: 66%;
	display: flex;
`;

export const SecondRowWrapper = styled.div`
	width: 33%;
	display: flex;
	height: 100%;
	@media only screen and (max-width: 1028px) {
		flex-wrap: wrap;
	}
`;
