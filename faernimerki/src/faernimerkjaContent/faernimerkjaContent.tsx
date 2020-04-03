import React, { FC } from 'react';
import AgeGroups from './components/ageGroups';
import Description from './components/description';
import Documents from './components/documents';
import ExternalSites from './components/externalSites';
import InternalSites from './components/internalSites';
import PictureOfFaernimerki from './components/pictureOfFaernimerki';
import Video from './components/video';
import * as StyledFaernimerkjaContent from './faernimerkjaContent.styles';

interface Props {
	data: any;
}

const FaernimerkjaContent: FC<Props> = ({ data }) => {
	const externalWebsitesArray = [];
	const filesArray = [];
	const internalWebsiteArray = [];
	let i = 1;
	console.log(data.acf);
	while (data.acf.hasOwnProperty('vefsida' + i)) {
		if (data.acf['vefsida' + i]) {
			externalWebsitesArray.push(data.acf['vefsida' + i]);
		}
		i++;
	}
	i = 1;
	while (data.acf.hasOwnProperty('SkatarnirSida' + i)) {
		if (data.acf['SkatarnirSida' + i]) {
			internalWebsiteArray.push(data.acf['SkatarnirSida' + i]);
		}
		i++;
	}
	i = 1;
	while (data.acf.hasOwnProperty('skra' + i)) {
		if (data.acf['skra' + i]) {
			filesArray.push(data.acf['skra' + i]);
		}
		i++;
	}
	console.log(externalWebsitesArray);
	console.log(filesArray);
	console.log(internalWebsiteArray);
	return (
		<StyledFaernimerkjaContent.Wrapper>
			<StyledFaernimerkjaContent.H1>{data.title.rendered}</StyledFaernimerkjaContent.H1>
			<StyledFaernimerkjaContent.FirstRowWrapper>
				<StyledFaernimerkjaContent.PictureWrapper>
					<PictureOfFaernimerki image={data.featured_media} />
				</StyledFaernimerkjaContent.PictureWrapper>
				<StyledFaernimerkjaContent.ContentWrapper>
					<Description description={data.acf.lysing} />
				</StyledFaernimerkjaContent.ContentWrapper>
				<StyledFaernimerkjaContent.AgeGroupsWrapper>
					<AgeGroups ageGroups={data.acf.aldursbil} />
				</StyledFaernimerkjaContent.AgeGroupsWrapper>
			</StyledFaernimerkjaContent.FirstRowWrapper>
			<StyledFaernimerkjaContent.SecondRowWrapper>
				<StyledFaernimerkjaContent.DocumentsWrapper>
					<Documents documents={filesArray} />
				</StyledFaernimerkjaContent.DocumentsWrapper>
				<StyledFaernimerkjaContent.ExternalSitesWrapper>
					<ExternalSites externalWebsites={externalWebsitesArray} />
					<InternalSites internalWebsites={internalWebsiteArray} />
				</StyledFaernimerkjaContent.ExternalSitesWrapper>
			</StyledFaernimerkjaContent.SecondRowWrapper>
			<Video />
		</StyledFaernimerkjaContent.Wrapper>
	);
};

export default FaernimerkjaContent;
