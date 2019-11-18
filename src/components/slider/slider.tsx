import axios from 'axios';
import Interweave from 'interweave';
import React, { FC, useState } from 'react';
import Slide from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Data from '../../ExampleData';
import { ageGroupColorMapper, monthMapper, widthMapper } from './helpers';
import { settings } from './settings';
import * as StyledSlider from './slider.styles';

interface Props {}

const defaultLogo = 'https://testing.skatarnir.is/wp-content/uploads/skatarnirLogo.png';

const url = '/wp-json/tribe/events/v1/events';
// const url = 'http://testing.skatarnir.is/wp-json/tribe/events/v1/events';
const Slider: FC<Props> = () => {
	const redirectToEvent = url => {
		window.location.href = url;
	};
	const [data, setData] = useState(null);
	axios(url).then(res => {
		setData(res.data);
	});
	if (!data) return <StyledSlider.Loading>Loading</StyledSlider.Loading>;

	return (
		<StyledSlider.Wrapper>
			<StyledSlider.Title>Viðburðir</StyledSlider.Title>
			<Slide {...settings}>
				{Data.events.map((item, index) => {
					const startMonth = monthMapper(item.start_date_details.month);
					const endMonth = monthMapper(item.end_date_details.month);
					let imgUrl = '';
					let showOneDate = false;
					if (
						item.start_date_details.day === item.end_date_details.day &&
						item.start_date_details.month === item.end_date_details.month
					) {
						showOneDate = true;
					}
					if (item.image) {
						// @ts-ignore
						imgUrl = item.image.sizes.thumbnail.url;
					} else {
						imgUrl = defaultLogo;
					}

					return (
						<StyledSlider.SliderItem key={index}>
							<StyledSlider.ContentWrapper onClick={() => redirectToEvent(item.url)}>
								<StyledSlider.PictureWrapper>
									<StyledSlider.Picture src={imgUrl} />
									<StyledSlider.AgeGroupOverlayContainer>
										{item.categories.map((ageGroup, ind) => {
											const color = ageGroupColorMapper(ageGroup.slug);
											const width = widthMapper(item.categories.length);
											return (
												<StyledSlider.AgeGroupOverlayItem
													style={{ backgroundColor: color, width: width }}
													key={ind}
												/>
											);
										})}
									</StyledSlider.AgeGroupOverlayContainer>
								</StyledSlider.PictureWrapper>
								<StyledSlider.TextWrapper>
									<StyledSlider.EventTitle>{item.title}</StyledSlider.EventTitle>
									<StyledSlider.Date>
										{`${item.start_date_details.day}. ${startMonth}`}
										{!showOneDate && ` - ${item.end_date_details.day}. ${endMonth}`}
									</StyledSlider.Date>
									{item.description.length > 0 && (
										<StyledSlider.DescriptionWrapper>
											<Interweave content={item.description.slice(0, 100)} />
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
