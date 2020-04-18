import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const ageGroupColor = {
	drekaskatar: '#FEE75F',
	falkaskatar: '#EB6363',
	drottskatar: '#1BB89B',
	rekkaskatar: '#65CDF0',
	roverskatar: '#FFAF3C',
	fullordnir: '#CF88FF',
};
interface Props {
	ageGroups: any;
}

const Wrapper = styled.div`
	padding: 10px;
`;

type ageGroupsProps = {
	ageGroup: string;
};

const AgeGroup = styled.div<ageGroupsProps>`
	padding: 10px;
	${({ ageGroup }) =>
		css`
			background-color: ${ageGroupColor[ageGroup]};
			border: 1px solid ${ageGroupColor[ageGroup]};
			border-radius: 25px;
		`}

	p {
		margin-top: 0px;
	}
`;

const AgeGroupWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 10px;
`;

const AgeGroups: FC<Props> = ({ ageGroups }) => {
	const ageGroupMapper = (ageGroup: string) => {
		const mapperItems = {
			drekaskatar: 'Drekaskátar',
			falkaskatar: 'Fálkaskátar',
			drottskatar: 'Dróttskátar',
			rekkaskatar: 'Rekkaskátar',
			roverskatar: 'Róverskátar',
			fullordnir: 'Fullorðnir',
		};
		return mapperItems[ageGroup];
	};
	return (
		<Wrapper>
			<h2 style={{ marginTop: 'o', textAlign: 'center' }}>Aldursbils</h2>
			<AgeGroupWrapper>
				{ageGroups.map((ageGroup) => {
					return (
						<AgeGroup key={ageGroup} ageGroup={ageGroup}>
							<p>{ageGroupMapper(ageGroup)}</p>
						</AgeGroup>
					);
				})}
			</AgeGroupWrapper>
		</Wrapper>
	);
};

export default AgeGroups;
