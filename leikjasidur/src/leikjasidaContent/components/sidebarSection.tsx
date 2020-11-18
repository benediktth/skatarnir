import React, { FC } from 'react';
import styled, { css } from 'styled-components';
// import { stadsetning_leiks, leikir_category, tegund_leiks } from '../../constants';

interface Props {
	data: any;
	taxonomies: any;
}

const Wrapper = styled.div`
	padding: 10px;
	background-color: #d9d9d9;
	width: 100%;
	margin-top: 20px;
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
		margin-bottom: 10px;
		margin-top: 0px;
	}
	h2 {
		margin: auto 0;
		padding-top: 2px;
	}
	@media only screen and (max-width: 377px) {
		img {
			width: 25px;
			object-fit: contain;
		}
		h2 {
			font-size: 23px;
		}
		h4 {
			font-size: 18px;
		}	
	}
`;


const SidebarSection: FC<Props> = ({ data, taxonomies }) => {
	// const stadsetningar = data.stadsetning_leiks.map(id => {
	// 	const stadsetning = stadsetning_leiks.properties.find(x => x.id === id);
	// 	if (stadsetning !== null)
	// 		return stadsetning.name;
	// 	else
	// 		return null;
	// });
	// const aldursbil = data.leikir_category.map(id => {
	// 	const leikur = leikir_category.properties.find(x => x.id === id);
	// 	if (leikur !== null)
	// 		return leikur;
	// 	else
	// 		return null;
	// });
	// const tegundLeikja = data.tegund_leiks.map(id => {
	// 	const tegundLeiks = tegund_leiks.properties.find(x => x.id === id);
	// 	if (tegundLeiks !== null)
	// 		return tegundLeiks.name;
	// 	else
	// 		return null;
	// });
	return (
		<Wrapper>
			<Section>
				<h2 style={{ marginBottom: '10px', color: '#404041' }}>ALDURSBIL:</h2>
				<AgeGroupWrapper>
					{taxonomies.aldursbil && taxonomies.aldursbil.map(leikur => {
						return(
							<AgeGroup key={leikur} ageGroup={leikur} />
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
				<h4>{data.acf.fjoldiFra} - {data.acf.fjoldiTil} skátar</h4>
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Tími-icon.png" alt="test" />
					<h2 style={{  color: '#EB6363'}}>
						TÍMALENGD:
					</h2>
				</ImageAndTitle>
				<h4>{data.acf.timalengdFra} - {data.acf.timalengdTil} mínútur</h4>
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Stadsetning-icon.png" alt="test" />
					<h2 style={{  color: '#1BB89B' }}>
						STAÐSETNING:
					</h2>
				</ImageAndTitle>
				{taxonomies.stadsetningar && taxonomies.stadsetningar.map(stadsetning => {
					return (
						<h4 key={stadsetning}>{stadsetning}</h4>
					);
				})}
			</Section>
			<Section>
				<ImageAndTitle>
					<img src="https://testing.skatarnir.is/wp-content/uploads/Tegund-leiks-icon.png" alt="test" />
					<h2 style={{  color: '#FFAF3C' }}>
						TEGUND LEIKS:
					</h2>
				</ImageAndTitle>
				{taxonomies.tegundLeikja && taxonomies.tegundLeikja.map(tegund => {
					return(
						<h4 key={tegund}>{tegund}</h4>
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
				{data.acf.hofundar.map(hofundur => {
					return(
						<h4 key={hofundur.nafn}>{hofundur.nafn}</h4>
					);
				})}
			</Section>
			{data.acf.godRad ?
				<Section>
					<a target="_blank" href={data.acf.godRad}><h2 style={{ marginTop: "0" }}>GÓÐ RÁÐ UM LEIKJASTJÓRNUN</h2></a>
				</Section>
				: null
			}
		</Wrapper>
	);
};

export default SidebarSection;
