import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	demands: string;
	bulletin: any[];
}

const Wrapper = styled.div`
	padding: 10px;
	ul {
		list-style: inherit;
		margin-left: 21px;
	}
`;

const Demands: FC<Props> = ({ demands, bulletin }) => {
	return (
		<Wrapper>
			<h2 style={{ marginTop: '0px', marginBottom: '10px' }}>Kröfur</h2>
			<span>{demands}</span>
			<ul>{bulletin.map((text, index) => (<li key={index}>{text.krofu_punktur}</li>))}</ul>
		</Wrapper>
	);
};

export default Demands;
