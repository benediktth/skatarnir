import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface Props {
	data: any;
}

const Wrapper = styled.div`
	padding: 10px;
	background-color: gray;
	width: 100%;
`;
const ageGroupColor = {
	drekaskatar: '#FEE75F',
	falkaskatar: '#EB6363',
	drottskatar: '#1BB89B',
	rekkaskatar: '#65CDF0',
	roverskatar: '#FFAF3C',
	fullordnir: '#CF88FF',
};

type ageGroupsProps = {
	ageGroup: string;
}

const AgeGroupWrapper = styled.div`
	display: flex;
	width: 100%;
`;

const AgeGroup = styled.div<ageGroupsProps>`
	padding: 15px;
	width: 10px;
	margin-right: 10px;
	${({ ageGroup }) =>
		css`
			background-color: ${ageGroupColor[ageGroup]};
			border: 1px solid ${ageGroupColor[ageGroup]};
			border-radius: 25px;
		`}
	@media only screen and (max-width: 1028px) {
		margin-top: 10px;
	}
`;

const Section = styled.div`
	margin-bottom: 10px;
	&:last-child {
		text-align: center;
		margin-top: 20px;
		border: 1px solid #FFAF3C ;
		border-radius: 15px;
		background-color: #FFAF3C;
		padding: 20px;
	}
`;


const SidebarSection: FC<Props> = ({ data }) => {
	console.log(data);
	return (
		<Wrapper>
			<Section>
				<h2 style={{ marginBottom: '10px' }}>Aldursbil:</h2>
				<AgeGroupWrapper>
					{data.aldursbil.map(ageGroup => {
						return(
							<AgeGroup key={ageGroup} ageGroup={ageGroup} />
						)
					})}
				</AgeGroupWrapper>
			</Section>
			<Section>
				<h2 style={{ marginBottom: '10px', color: '#3c50ff' }}>Fjöldi:</h2>
				<p>{data.fjoldi}</p>
			</Section>
			<Section>
				<h2 style={{ marginBottom: '10px', color: '#EB6363'}}>Tímalengd:</h2>
				<p>{data.timalengd}</p>
			</Section>
			<Section>
				<h2 style={{ marginBottom: '10px', color: '#1BB89B' }}>Staðsetning:</h2>
				<p>{data.stadsetning}</p>
			</Section>
			<Section>
				<h2 style={{ marginBottom: '10px', color: '#FFAF3C' }}>Tegund leiks:</h2>
				{data.tegundLeiks.map(leikur => {
					return(
						<h2>{leikur}</h2>
					);
				})}
			</Section>
			<Section>
				<h2 style={{ marginBottom: '10px', color: '#CF88FF' }}>Höfundar:</h2>
			</Section>
			<Section>
				<a href={data.adviceLink}><h1>Góð ráð um leikjastjórnun</h1></a>
			</Section>
		</Wrapper>
	);
};

export default SidebarSection;
