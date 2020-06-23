import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	documents: any;
}

const Wrapper = styled.div`
	padding: 10px;
	@media only screen and (max-width: 1028px) {
		h2 {
			text-align: center;
		}
	}
`;

const ContentWrapper = styled.div`
	padding: 10px 0px;
	display: flex;
	a {
		margin: auto 0;
		padding-left: 15px;
	}
`;

const Documents: FC<Props> = ({ documents }) => {
	return (
		<Wrapper>
			<h2 style={{ marginTop: '0' }}>Stuðningsefni</h2>
			{documents.map((document, index) => {
				return (
					<ContentWrapper key={index}>
						<img src={document.icon}></img>
						<a href={document.link} target="_blank">
							{document.filename}
						</a>
					</ContentWrapper>
				);
			})}
		</Wrapper>
	);
};

export default Documents;
