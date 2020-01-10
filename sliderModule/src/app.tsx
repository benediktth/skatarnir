import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import NewsSlider from './components/newsSlider';
import EventsSlider from './components/eventsSlider';
import AnnouncementSlider from './components/announcementSlider';

interface Props {}

const App: FC<Props> = () => {
	return (
		<StyledApp.Wrapper>
			<EventsSlider />
			<NewsSlider />
			<AnnouncementSlider />
		</StyledApp.Wrapper>
	);
};

export default App;
