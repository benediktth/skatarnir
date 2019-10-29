import React, { FC } from 'react';
import Data from '../../ExampleData';
import * as StyledEventSlider from './eventSlider.styles';

interface Props {}

const EventSlider: FC<Props> = () => {
	console.log(Data.test);
	return (
		<StyledEventSlider.Wrapper>
			<StyledEventSlider.Icons>
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				</svg>
			</StyledEventSlider.Icons>
			<StyledEventSlider.Slider>
				{Data.test.map(item => {
					return (
						<StyledEventSlider.SliderItem>
							<StyledEventSlider.ContentWrapper>
								<StyledEventSlider.PictureWrapper>
									{/* <img
										src="https://www.kiplinger.com/kipimages/pages/18048.jpg"
										height="200"
										width="100"
									/> */}
								</StyledEventSlider.PictureWrapper>
								<StyledEventSlider.TextWrapper>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</StyledEventSlider.TextWrapper>
							</StyledEventSlider.ContentWrapper>
						</StyledEventSlider.SliderItem>
					);
				})}
			</StyledEventSlider.Slider>
			<StyledEventSlider.Icons>
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				</svg>
			</StyledEventSlider.Icons>
		</StyledEventSlider.Wrapper>
	);
};

export default EventSlider;
