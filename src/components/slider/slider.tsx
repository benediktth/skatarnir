import React, { FC } from 'react';
import Slide from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Data from '../../ExampleData';
import * as StyledSlider from './slider.styles';
import { sliderSettings } from './sliderSettings';

interface Props {}

const Slider: FC<Props> = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					draggable: true,
					slidesToShow: 3,
					arrows: true,
				},
			},
			{
				breakpoint: 850,
				settings: {
					draggable: true,
					slidesToShow: 2,
					arrows: true,
				},
			},
			{
				breakpoint: 630,
				settings: {
					draggable: true,
					slidesToShow: 1,
					arrows: true,
				},
			},
			{
				breakpoint: 420,
				settings: {
					draggable: true,
					slidesToShow: 1,
					arrows: true,
				},
			},
		],
	};
	console.log(sliderSettings);
	return (
		<StyledSlider.Wrapper>
			<StyledSlider.Title>Viðburðir</StyledSlider.Title>
			<Slide {...settings}>
				{Data.test.map((item, index) => {
					return (
						<StyledSlider.SliderItem key={index}>
							<StyledSlider.ContentWrapper>
								<StyledSlider.PictureWrapper>
									<StyledSlider.Picture src="https://www.skatamal.is/wp-content/uploads/2019/10/Crean-9-324x160.jpg" />
								</StyledSlider.PictureWrapper>
								<StyledSlider.TextWrapper>
									<StyledSlider.EventTitle>{item.title}</StyledSlider.EventTitle>
									{item.description.length > 0 && (
										<StyledSlider.DescriptionWrapper>
											{item.description.slice(0, 100) + '...'}
										</StyledSlider.DescriptionWrapper>
									)}
								</StyledSlider.TextWrapper>
							</StyledSlider.ContentWrapper>
						</StyledSlider.SliderItem>
					);
				})}
			</Slide>
		</StyledSlider.Wrapper>
	);
};

export default Slider;
