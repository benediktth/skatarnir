import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	internalWebsites: any;
}

const Wrapper = styled.div`
	padding: 10px;
`;

const InternalSites: FC<Props> = () => {
	return (
		<Wrapper>
			<span>Síður á Skátamál.is tengdar færnimerkinu</span>
		</Wrapper>
	);
};

export default InternalSites;
