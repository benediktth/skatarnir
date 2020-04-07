import Axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import 'reset-css';
import * as StyledApp from './app.styles';
import { postFix } from './constants';
import ScoutHutsList from './scoutHutsList';
import { StyledLoader } from './Loader';

interface Props { }

const App: FC<Props> = () => {
	const ref = useRef();
	const [data, setData] = useState(null);

	if(process.env.NODE_ENV === 'development') {
		useEffect(() => {
			Axios('/dev.json').then((res) => {  //Axios(postFix).then((res) => {
				setData(res.data);
			});
			
		}, []);
	} else {
		useEffect(() => {
			Axios(postFix).then((res) => {
				setData(res.data);
			});
			
		}, []);
	}

	

	return (
		<StyledApp.Wrapper ref={ref}>
			{data && <ScoutHutsList data={data} />}
			{data !== null || <StyledLoader />}
		</StyledApp.Wrapper>
	);
};

export default App;
