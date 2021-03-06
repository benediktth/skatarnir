import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const ageGroupColor = {
	Drekaskátar: '#FEE75F',
	Fálkaskátar: '#EB6363',
	Dróttskátar: '#1BB89B',
	Rekkaskátar: '#65CDF0',
	Róverskátar: '#FFAF3C',
	fullordnir: '#CF88FF',
};
interface Props {
	ageGroups: number[];
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
	@media only screen and (max-width: 1028px) {
		margin-top: 10px;
	}
`;

const AgeGroupWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 10px;
	@media only screen and (max-width: 1028px) {
		flex-wrap: wrap;
	}
`;

const AgeGroups: FC<Props> = ({ ageGroups }) => {
	const ageGroupMapper = (ageGroup: number) => {
		const mapperItems = {
			428: 'DREKASKÁTAR',
			429: 'FÁLKASKÁTAR',
			430: 'DRÓTTSKÁTAR',
			431: 'REKKASKÁTAR',
			432: 'RÓVERSKÁTAR'
		};
		return mapperItems[ageGroup];
	};
	return (
		<Wrapper>
			<AgeGroupWrapper>
				{ageGroups.map((ageGroup) => {
					return (
						<AgeGroup key={ageGroup} ageGroup={ageGroupMapper(ageGroup)}>
							<p>{ageGroupMapper(ageGroup)}</p>
						</AgeGroup>
					);
				})}
			</AgeGroupWrapper>
		</Wrapper>
	);
};

export default AgeGroups;
