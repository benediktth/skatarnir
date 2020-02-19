import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import NewsSlider from './components/newsSlider';
import EventsSlider from './components/eventsSlider';
import AnnouncementSlider from './components/announcementSlider';
//@ts-ignore
import * as Constants from './components/common/constants';

interface Props { }

//[Constants.DREKASKATAR, Constants.FALKASKATAR, Constants.DROTTSKATAR, Constants.REKKASKATAR, Constants.ROVERSKATAR, Constants.FULLORDNIR]
const App: FC<Props> = () => {
	return (
		<StyledApp.Wrapper>
			<EventsSlider hide={false} ageGroup={Constants.DREKASKATAR} />
			<NewsSlider hide={true} orangeBackground={true} showTitle={true} />
			<AnnouncementSlider hide={true} />
		</StyledApp.Wrapper>
	);
};

export default App;
