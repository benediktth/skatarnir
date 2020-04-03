import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	externalWebsites: any;
}

const Wrapper = styled.div`
	padding: 10px;
`;

const ContentWrapper = styled.div`
	display: flex;
	max-width: 100%;
	padding: 15px 0;
`;

const ImageWrapper = styled.div`
	max-width: 30%;
	img {
		width: 100%;
	}
`;

const SubContentWrapper = styled.div``;

const ExternalSites: FC<Props> = ({ externalWebsites }) => {
	return (
		<Wrapper>
			<h1>Vefsíður tengdar færnimerkinu</h1>
			{externalWebsites.map((website, index) => {
				return (
					<ContentWrapper key={index}>
						<ImageWrapper>
							<img src={website.url} />
						</ImageWrapper>
						<SubContentWrapper>
							<h1>{website.title}</h1>
							<a href={website.link}>{website.description}</a>
						</SubContentWrapper>
					</ContentWrapper>
				);
			})}
		</Wrapper>
	);
};

export default ExternalSites;
