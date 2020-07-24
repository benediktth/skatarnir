import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface Props {
	data: any;
}

const Wrapper = styled.div`
	padding: 10px;
	background-color: #d9d9d9;
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

const ImageAndTitle = styled.div`
	margin-bottom: 10px;
	display: flex;
	h2 {
		text-align: center;
		margin: auto 0;
		padding-top: 2px;
	}

	img {
		width: 36px;
		margin-right: 10px;
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

	h4 {
		padding-left: 18px;
	}

`;


const SidebarSection: FC<Props> = ({ data }) => {
	console.log(data);
	return (
		<Wrapper>
			<Section>
				<h2 style={{ marginBottom: '10px' }}>ALDURSBIL:</h2>
				<AgeGroupWrapper>
					{data.aldursbil && data.aldursbil.map(ageGroup => {
						return(
							<AgeGroup key={ageGroup} ageGroup={ageGroup} />
						)
					})}
				</AgeGroupWrapper>
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Fjöldi-icon.png" alt="test" />
					<h2 style={{  color: '#3c50ff' }}>
						FJÖLDI:
					</h2>
				</ImageAndTitle>
				<h4>{data.fjoldi}</h4>
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Tími-icon.png" alt="test" />
					<h2 style={{  color: '#EB6363'}}>
						TÍMALENGD:
					</h2>
				</ImageAndTitle>
				<h4>{data.timalengd}</h4>
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Stadsetning-icon.png" alt="test" />
					<h2 style={{  color: '#1BB89B' }}>
						STAÐSETNING:
					</h2>
				</ImageAndTitle>
				<h4>{data.stadsetning}</h4>
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Tegund-leiks-icon.png" alt="test" />
					<h2 style={{  color: '#FFAF3C' }}>
						TEGUND LEIKS:
					</h2>
				</ImageAndTitle>
				{data.tegundLeiks.map(leikur => {
					return(
						<h4 key={leikur.nafn}>{leikur.nafn}</h4>
					);
				})}
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Höfundur-icon.png" alt="test" />
					<h2 style={{  color: '#CF88FF' }}>
						HÖFUNDAR:
					</h2>
				</ImageAndTitle>
				{data.hofundar.map(hofundur => {
					return(
						<h4 key={hofundur.nafn}>{hofundur.nafn}</h4>
					);
				})}
			</Section>
			<Section>
				<a target="_blank" href={data.godRad}><h2 style={{ marginTop: "0" }}>GÓÐ RÁÐ UM LEIKJASTJÓRNUN</h2></a>
			</Section>
		</Wrapper>
	);
};

export default SidebarSection;
