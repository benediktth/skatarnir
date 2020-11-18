import React, { FC } from 'react';
import AgeGroups from './components/ageGroups';
import Demands from './components/demands';
import Description from './components/description';
import Documents from './components/documents';
import ExternalSites from './components/externalSites';
// import InternalSites from './components/internalSites';
import PictureOfFaernimerki from './components/pictureOfFaernimerki';
import Video from './components/video';
import * as StyledFaernimerkjaContent from './faernimerkjaContent.styles';

interface Props {
	data: any;
	pictureUrl: any;
}

const FaernimerkjaContent: FC<Props> = ({ data, pictureUrl }) => {
	// const externalWebsitesArray = [];
	// const filesArray = [];
	// const internalWebsiteArray = [];
	// let i = 1;
	// while (data.acf.hasOwnProperty('vefsida' + i)) {
	// 	if (data.acf['vefsida' + i]) {
	// 		externalWebsitesArray.push(data.acf['vefsida' + i]);
	// 	}
	// 	i++;
	// }
	// i = 1;
	// while (data.acf.hasOwnProperty('SkatarnirSida' + i)) {
	// 	if (data.acf['SkatarnirSida' + i]) {
	// 		internalWebsiteArray.push(data.acf['SkatarnirSida' + i]);
	// 	}
	// 	i++;
	// }
	// i = 1;
	// while (data.acf.hasOwnProperty('skra' + i)) {
	// 	if (data.acf['skra' + i]) {
	// 		filesArray.push(data.acf['skra' + i]);
	// 	}
	// 	i++;
	// }
	let documents = data.acf.skrar ?
		<StyledFaernimerkjaContent.DocumentsWrapper>
			<Documents documents={data.acf.skrar} />
		</StyledFaernimerkjaContent.DocumentsWrapper>
		: '';
	let externalSites = data.acf.vefsidur ?
		<StyledFaernimerkjaContent.ExternalSitesWrapper>
			<ExternalSites externalWebsites={data.acf.vefsidur} />
			{/* <InternalSites internalWebsites={internalWebsiteArray} /> */}
		</StyledFaernimerkjaContent.ExternalSitesWrapper>
		: '';
	let video = data.acf.myndband ?
		<Video videoUrl={data.acf.myndband} />
		: '';


	return (
		<StyledFaernimerkjaContent.Wrapper>
			<StyledFaernimerkjaContent.H1>{data.title.rendered.toUpperCase()}</StyledFaernimerkjaContent.H1>
			<StyledFaernimerkjaContent.FirstRowWrapper>
				<StyledFaernimerkjaContent.PictureWrapper>
					<PictureOfFaernimerki image={pictureUrl} />
					<AgeGroups ageGroups={data.faernimerki_category} />
				</StyledFaernimerkjaContent.PictureWrapper>
				<StyledFaernimerkjaContent.ContentWrapper>
					<Description description={data.acf.lysing} />
					<Demands demands={data.acf.krofur} bulletin={data.acf.krofur_punktar} />
				</StyledFaernimerkjaContent.ContentWrapper>
			</StyledFaernimerkjaContent.FirstRowWrapper>
			{/* <StyledFaernimerkjaContent.AgeGroupsWrapper>
				<AgeGroups ageGroups={data.faernimerki_category} />
			</StyledFaernimerkjaContent.AgeGroupsWrapper> */}
			<StyledFaernimerkjaContent.SecondRowWrapper>
				{documents}
				{externalSites}
			</StyledFaernimerkjaContent.SecondRowWrapper>
			{video}
		</StyledFaernimerkjaContent.Wrapper>
	);
};

export default FaernimerkjaContent;
