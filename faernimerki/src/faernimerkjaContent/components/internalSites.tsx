import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	internalWebsites: any;
}

const Wrapper = styled.div`
	padding: 10px;
	@media only screen and (max-width: 1028px) {
		h2 {
			text-align: center;
		}
	}
`;

const InternalSites: FC<Props> = () => {
	return (
		<Wrapper>
			<h2>Síður á Skátamál.is tengdar færnimerkinu</h2>
		</Wrapper>
	);
};

export default InternalSites;
