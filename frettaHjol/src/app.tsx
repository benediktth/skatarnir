import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import Slider from './components/slider';

interface Props {}

const App: FC<Props> = () => {
	return (
		<StyledApp.Wrapper>
			<Slider />
		</StyledApp.Wrapper>
	);
};

export default App;
