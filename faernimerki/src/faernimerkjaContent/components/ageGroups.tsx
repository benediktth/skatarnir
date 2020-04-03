import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	ageGroups: any;
}

const Wrapper = styled.div`
	padding: 10px;
`;

const AgeGroups: FC<Props> = ({ ageGroups }) => {
	return (
		<Wrapper>
			<h2 style={{ marginTop: 'o' }}>Aldursbils</h2>
			<ul>
				{ageGroups.map(ageGroup => {
					return <li key={ageGroup}>{ageGroup}</li>;
				})}
			</ul>
		</Wrapper>
	);
};

export default AgeGroups;
