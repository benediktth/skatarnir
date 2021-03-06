import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	description: any;
}

const Wrapper = styled.div`
	padding: 10px;
`;

const Description: FC<Props> = ({ description }) => {
	return (
		<Wrapper>
			<h2 style={{ marginTop: '0', marginBottom: '10px' }}>Um færnimerkið</h2>
			<span>{description}</span>
		</Wrapper>
	);
};

export default Description;
