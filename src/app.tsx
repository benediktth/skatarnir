import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
// import EventSlider from './components/eventSlider';
import Slider from './components/slider';

// const navigation = {
// 	brand: { name: 'NavScroller', to: '/' },
// 	links: [
// 		{ name: 'Item 1', to: '/' },
// 		{ name: 'Item 2', to: '/' },
// 		{ name: 'Item 3', to: '/' },
// 		{ name: 'Item 4', to: '/' },
// 		{ name: 'Item 5', to: '/' },
// 		{ name: 'Item 6', to: '/' },
// 		{ name: 'Item 7', to: '/' },
// 		{ name: 'Item 8', to: '/' },
// 	],
// };

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
