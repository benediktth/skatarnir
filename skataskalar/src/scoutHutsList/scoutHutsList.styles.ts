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
	margin: 0 0 2rem 0;
	clear: both;
	height: 400px;
`;

export const ClickableContainer = styled.a`
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
	
`;

export const filterWrapper = styled.div`
    margin: auto;
    margin-bottom: 3rem;
    width: 70%;
`;

export const filterInput = styled.input`
	margin-left: 1rem;
	width: 50%;
	padding: 12px 20px;
	margin: 8px 0 8px 20px;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
`;