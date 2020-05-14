import styled from 'styled-components';

export const SuperWrapper = styled.div`
	width: 100%;
`;

export const Wrapper = styled.div`
	max-width: 1800px;
	width: 100%;
	margin: auto;

`;
export const ListWrapper = styled.div`
	width: 100%;
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

export const ScoutHutItem = styled.div`
	margin: 1rem 0 2rem 0;
	clear: both;
	min-height: 200px;
	display: table;
`;

export const ClickableContainer = styled.a`
	display: table-row;
	color: inherit;
	text-decoration: none;
	&:hover {
		color: #404041;
	}
`;



export const ScoutHutTitle = styled.h2`
	font-family: Gotham-Bold;
	margin-top: 0;
	margin-left: 1rem;
`;



export const TextWrapper = styled.div`
	float: left;
	margin-left: 1rem;
	@media screen and (min-width: 400px) {
		min-width: 380px;
	}
	
	
`;

export const ItemList = styled.ul`
	width: 70%;
	float: left;
	list-style: none !important;
	li {
		margin: 1rem 0;
		font-family: Gotham-Book;
		font-size: 18px;
	}
`;


export const H1 = styled.h1`
	padding: 10px;
`;

export const PictureWrapper = styled.div`
	width: 500px;
	float: left;
	@media screen and (max-width: 640px) {
		width: 90%;
		margin: auto;
		float: none;
	}
`;

export const Picture = styled.img`
	width: 100%;
	object-fit: cover;
	@media screen and (max-width: 460px) {
		width: 90%;
	}
	
`;

export const FilterWrapper = styled.div`
    margin: auto;
    margin-bottom: 3rem;
    width: 90%;
`;

export const FilterInput = styled.input`
	margin-left: 1rem;
	width: 40%;
	padding: 12px 20px;
	margin: 8px 0 8px 20px;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	@media screen and (max-width: 670px) {
		width: 90%;
	}
`;

export const FilterLabel = styled.label`
	
`;

export const FilterSliderSuperWrapper = styled.div`
`;

export const FilterSliderWrapper = styled.div`
	float: left;
	width: 74%;
	@media screen and (max-width: 670px) {
		width: 120%;
	}
`;


export const FilterSliderText = styled.div`
	float: left;
	margin-top: 0.7rem;
	margin-right: 2rem;
`;

export const BreakLine = styled.hr`
	width: 78%;
	margin-right: auto !important;
	margin-left :auto !important;
    margin-bottom: 4rem;
	color: #DCDCDC;
	`;