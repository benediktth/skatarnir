import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	documents: any;
}

const Wrapper = styled.div`
	padding: 10px;
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
	console.log(documents);
	return (
		<Wrapper>
			<h1>Útgefið efni á rafrænu formi</h1>
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
