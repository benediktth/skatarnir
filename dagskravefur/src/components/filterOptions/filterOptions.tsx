import React, { FC } from 'react';
import * as StyledFilterOptions from './filterOptions.styles';

interface Props {}

const FilterOptions: FC<Props> = () => {
	return (
		<StyledFilterOptions.Wrapper>
			<span>FilterOptions</span>
		</StyledFilterOptions.Wrapper>
	);
};

export default FilterOptions;
