import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1200px;
	width: 90%;
	margin: auto;
	@media (max-width: 768px) {
		width: 80%;
	}
`;

export const Title = styled.h1`
	margin: 0 auto;
	text-align: center;
	font-weight: 700;
	font-size: -webkit-xxx-large;
	padding: 2rem;
`;

export const SliderItem = styled.div`
	margin: 0 0 2rem 0;
`;

export const AgeGroupOverlayContainer = styled.div`
	height: 10px;
	display: flex;
`;

export const AgeGroupOverlayItem = styled.div`
	background-color: red;
`;

export const Date = styled.div`
	color: gray;
`;

export const PictureWrapper = styled.div``;

export const ContentWrapper = styled.div`
	margin: 0 auto;
	width: 15rem;
	background-color: #f2f6f9;
	cursor: pointer;
`;
export const Icons = styled.div``;

export const EventTitle = styled.h2`
	font-size: x-large;
`;

export const DescriptionWrapper = styled.div`
	margin: 1rem 0;
`;

export const TextWrapper = styled.div`
	padding: 1rem;
`;

export const Picture = styled.img`
	width: 100%;
`;
