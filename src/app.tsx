import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
// import EventSlider from './components/eventSlider';
import Slider from './components/slider';

interface Props {}

const App: FC<Props> = () => {
	return (
		<StyledApp.Wrapper>
			{/* <EventSlider /> */}
			<Slider />
		</StyledApp.Wrapper>
	);
};

export default App;
