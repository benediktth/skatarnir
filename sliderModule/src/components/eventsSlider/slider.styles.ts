import styled from 'styled-components';

export const SuperWrapper = styled.div`
	width: 100%;
`;

export const Wrapper = styled.div`
	max-width: 1800px;
	width: 100%;
	margin: auto;
	padding-bottom: 2rem;

	@media (max-width: 1900px) {
		width: 80%;
	}
	@media (max-width: 1200px) {
		width: 60%;
	}
	@media (max-width: 768px) {
		width: 80%;
	}
	div {
		outline: none;
	}
`;

export const AgeGroupWrapper = styled(Wrapper)`
	padding-bottom: 0rem;
`;

export const Title = styled.h1`
	margin: 0 auto;
	text-align: center;
	font-family: Gotham-Bold;
	font-size: -webkit-xxx-large;
	padding: 3rem 2rem;
	a {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		padding: 2rem 0;
	}
`;

export const AgeGroupTitle = styled.h4`
	margin: 0 auto;
	text-align: center;
	font-family: Gotham-Bold;
	padding-bottom: 2rem;
	@media (max-width: 768px) {
		padding: 2rem 0;
	}
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
	margin: 1rem 0;
	font-family: Gotham-Book;
	position: relative;
	p {
		padding-left: 2.5rem;
		font-size: 18px;
	}
	svg {
		position: absolute;
	}
`;

export const PictureWrapper = styled.div``;

export const ClickableContainer = styled.a`
	color: inherit;
	text-decoration: none;
`;

export const ContentWrapper = styled.div`
	margin: 0 auto;
	width: 25rem;
	background-color: #f2f6f9;
	/* cursor: pointer; */
	min-height: 28rem;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	}
	@media (max-width: 1200px) {
		width: 18rem;
		min-height: 28rem;
	}
	@media (max-width: 956px) {
		width: 20rem;
	}
	@media (max-width: 475px) {
		width: 14rem;
		min-height: 28rem;
	}
`;

export const ArrowWrapperLeft = styled.div`
	svg {
		font-size: 18rem;
		height: 7rem;
		left: -80px;
		z-index: 3;
		@media (max-width: 767px) {
			left: -105px;
			height: 3rem;
			z-index: 0;
		}
	}
`;

export const ArrowWrapperLeftAgeGroup = styled(ArrowWrapperLeft)`
	svg {
		left: -140px;
	}
`;

export const ArrowWrapperRight = styled.div`
	svg {
		font-size: 18rem;
		height: 7rem;
		right: -80px;
		z-index: 3;
		@media (max-width: 767px) {
			right: -105px;
			height: 3rem;
			z-index: 0;
		}
	}
`;
export const ArrowWrapperRightAgeGroup = styled(ArrowWrapperRight)`
	svg {
		right: -140px;
	}
`;


export const Icons = styled.div``;

export const EventTitle = styled.h3`
	font-family: Gotham-Bold;
	word-wrap: break-word;
	@media (max-width: 768px) {
		font-size: 18px !important;
	}
`;

export const DescriptionWrapper = styled.div`
	font-family: Gotham-Book;
	margin: 1rem 0;
	position: relative;
	p {
		padding-left: 2.5rem;
		font-size: 18px;
	}
	svg {
		padding-left: 0.4rem;
		position: absolute;
	}
`;

export const TextWrapper = styled.div`
	padding: 1rem;
	svg {
		color: gray;
		margin-right: 1rem;
	}

	@media (max-width: 575px) {
		padding: 0.5rem;
	}
`;

export const Picture = styled.img`
	width: 100%;
`;

export const Loading = styled.h2`
	text-align: center;
	padding-top: 2rem;
`;

export const BreakpointWrapper = styled.span`
	display: inline-block;
`;

export const ItemList = styled.ul`
	list-style: none !important;
	li {
		margin: 1rem 0;
		font-family: Gotham-Book;
		font-size: 18px;
	}
`;
