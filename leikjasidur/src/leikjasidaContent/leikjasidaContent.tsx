import React, { FC } from 'react';
import * as StyledLeikjasidaContent from './leikjasidaContent.styles';
import SidebarSection from './components/sidebarSection';
import ContentSection from './components/contentSection';

interface Props {
	data: any;
	taxonomies: any;
}

const LeikjasidaContent: FC<Props> = ({ data, taxonomies }) => {
	return (
		<>
			<h2 style={{ fontSize: "50px", color: "#404041"}}>{data.acf.title.toUpperCase()}</h2>
			<StyledLeikjasidaContent.Wrapper>
				<StyledLeikjasidaContent.FirstRowWrapper>
					<ContentSection data={data.acf} />
				</StyledLeikjasidaContent.FirstRowWrapper>
				<StyledLeikjasidaContent.SecondRowWrapper>
					<SidebarSection data={data} taxonomies={taxonomies} />
				</StyledLeikjasidaContent.SecondRowWrapper>
			</StyledLeikjasidaContent.Wrapper>
		</>
	);
};

export default LeikjasidaContent;
