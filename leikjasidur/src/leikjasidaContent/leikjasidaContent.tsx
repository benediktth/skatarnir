import React, { FC } from 'react';
import * as StyledLeikjasidaContent from './leikjasidaContent.styles';

interface Props {
	data: any;
}

const LeikjasidaContent: FC<Props> = ({ data }) => {
	console.log(data);
	return (
		<StyledLeikjasidaContent.Wrapper>
		</StyledLeikjasidaContent.Wrapper>
	);
};

export default LeikjasidaContent;
