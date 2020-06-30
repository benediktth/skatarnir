import React, { FC } from 'react';
import * as StyledLeikjasidaContent from './leikjasidaContent.styles';
import SidebarSection from './components/sidebarSection';
import ContentSection from './components/contentSection';

interface Props {
	data: any;
}

const LeikjasidaContent: FC<Props> = ({ data }) => {
	console.log(data);
	return (
		<>
			<h2>Her uppi er titillinn</h2>
			<StyledLeikjasidaContent.Wrapper>
				<StyledLeikjasidaContent.FirstRowWrapper>
					<ContentSection data={data} />
				</StyledLeikjasidaContent.FirstRowWrapper>
				<StyledLeikjasidaContent.SecondRowWrapper>
					<SidebarSection data={data}/>
				</StyledLeikjasidaContent.SecondRowWrapper>
			</StyledLeikjasidaContent.Wrapper>
		</>
	);
};

export default LeikjasidaContent;
