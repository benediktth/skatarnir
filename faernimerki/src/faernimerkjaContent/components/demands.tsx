import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	demands: string;
	bulletin: string;
}

const Wrapper = styled.div`
	padding: 10px;
	ul {
		list-style: inherit;
		margin-left: 21px;
	}
`;

const Demands: FC<Props> = ({ demands, bulletin }) => {
	let bulletinList = bulletin.split('\r\n');
	console.log(bulletinList);
	return (
		<Wrapper>
			<h2 style={{ marginTop: '0px', marginBottom: '10px' }}>Kröfur</h2>
			<span>{demands}</span>
			<ul>
				{bulletinList.map((text, index) => (
					<li key={index}>{text}</li>
				))}
			</ul>
		</Wrapper>
	);
};

export default Demands;
