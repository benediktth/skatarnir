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
	return (
		<StyledFaernimerkjaContent.Wrapper>
			<StyledFaernimerkjaContent.H1>{data.title.rendered}</StyledFaernimerkjaContent.H1>
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
				<StyledFaernimerkjaContent.DocumentsWrapper>
					<Documents documents={data.acf.skrar} />
				</StyledFaernimerkjaContent.DocumentsWrapper>
				<StyledFaernimerkjaContent.ExternalSitesWrapper>
					<ExternalSites externalWebsites={data.acf.vefsidur} />
					{/* <InternalSites internalWebsites={internalWebsiteArray} /> */}
				</StyledFaernimerkjaContent.ExternalSitesWrapper>
			</StyledFaernimerkjaContent.SecondRowWrapper>
			<Video videoUrl={data.acf.myndband} />
		</StyledFaernimerkjaContent.Wrapper>
	);
};

export default FaernimerkjaContent;
