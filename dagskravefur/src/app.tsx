import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import FilterOptions from './components/filterOptions';

interface Props {}

const App: FC<Props> = () => {
	return (
		<StyledApp.Wrapper>
			<FilterOptions />
		</StyledApp.Wrapper>
	);
};

export default App;
