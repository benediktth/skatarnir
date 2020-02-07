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
			<EventsSlider hide={false}/>
			<NewsSlider hide={false} background='orange' showTitle={true}/>
			<AnnouncementSlider hide={false}/>
		</StyledApp.Wrapper>
	);
};

export default App;
