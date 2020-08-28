import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	externalWebsites: any;
}

const Wrapper = styled.div`
	padding: 10px;
	@media only screen and (max-width: 1028px) {
		h2 {
			text-align: center;
		}
	}
`;

const ContentWrapper = styled.a`
	display: flex;
	max-width: 100%;
	padding: 15px 0;
	border: 3px solid #ccc;
	border-radius: 16px;
	margin-bottom: 10px;
	padding: 18px;
`;

// const ImageWrapper = styled.div`
// 	max-width: 40%;
// 	img {
// 		width: 100%;
// 	}
// `;

const SubContentWrapper = styled.div`
	img {
		float: right;
		width: 200px;
	}
	@media only screen and (max-width: 1028px) {
		img {
			width: 100%;
			margin-bottom: 15px;
		}
	}
`;

const ExternalSites: FC<Props> = ({ externalWebsites }) => {
	return (
		<Wrapper>
			<h2 style={{ marginTop: '0', textAlign: 'right' }}>Gagnlegar vefsíður:</h2>
			{externalWebsites.map((website, index) => {
				return (
					<ContentWrapper key={index} href={website.link}>
						<SubContentWrapper>
							<img src={website.vefsida.url} />
							<h3 style={{ marginTop: '0' }}>{website.vefsida.title}</h3>
							{/* <a href={website.link}>{website.description}</a> */}
							<span>{website.vefsida.description}</span>
						</SubContentWrapper>
						{/* <ImageWrapper> */}
						{/* <img src={website.url} /> */}
						{/* </ImageWrapper> */}
					</ContentWrapper>
				);
			})}
		</Wrapper>
	);
};

export default ExternalSites;
