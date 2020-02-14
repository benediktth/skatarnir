import React, { FC } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import NewsSlider from './components/newsSlider';
import EventsSlider from './components/eventsSlider';
import AnnouncementSlider from './components/announcementSlider';
import * as Constants from './components/common/constants';

interface Props {}
//[Constants.DREKASKATAR, Constants.FALKASKATAR, Constants.DROTTSKATAR, Constants.REKKASKATAR, Constants.ROVERSKATAR, Constants.FULLORDNIR]
const App: FC<Props> = () => {
	return (
		<StyledApp.Wrapper>
			<EventsSlider hide={false} categories={[Constants.FALKASKATAR]}/>
			<NewsSlider hide={false} orangeBackground={true} showTitle={true}/>
			<AnnouncementSlider hide={false}/>
		</StyledApp.Wrapper>
	);
};

export default App;
