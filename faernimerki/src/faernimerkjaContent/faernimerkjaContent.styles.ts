import styled from 'styled-components';

export const Wrapper = styled.div``;

export const H1 = styled.h1`
	padding: 10px;
`;

export const FirstRowWrapper = styled.div`
	display: flex;
`;

export const SecondRowWrapper = styled.div`
	display: flex;
	@media only screen and (max-width: 1028px) {
		flex-wrap: wrap;
	}
`;

export const PictureWrapper = styled.div`
	width: 33%;
	@media only screen and (max-width: 1028px) {
		display: none;
	}
`;

export const ContentWrapper = styled.div`
	width: 67%;
	@media only screen and (max-width: 1028px) {
		width: 100%;
	}
`;

export const AgeGroupsWrapper = styled.div`
	width: 50%;
	margin: auto;
	margin-bottom: 20px;
	@media only screen and (max-width: 1028px) {
		width: 100%;
	}
`;

export const DocumentsWrapper = styled.div`
	width: 50%;
	@media only screen and (max-width: 1028px) {
		width: 100%;
	}
`;

export const ExternalSitesWrapper = styled.div`
	width: 50%;
	@media only screen and (max-width: 1028px) {
		width: 100%;
	}
`;
