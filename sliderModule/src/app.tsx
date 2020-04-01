import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import NewsSlider from './components/newsSlider';
import EventsSlider from './components/eventsSlider';
import AnnouncementSlider from './components/announcementSlider';
//@ts-ignore
import * as Constants from './components/common/constants';

interface Props { }

const App: FC<Props> = () => {
	return (
		<StyledApp.Wrapper>
			<EventsSlider hide={false} ageGroup={''} />
			<NewsSlider hide={false} orangeBackground={true} showTitle={true} />
			<AnnouncementSlider hide={false} />
		</StyledApp.Wrapper>
	);
};

export default App;
