import { faCalendar, faChevronLeft, faChevronRight, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { FC, useState } from 'react';
import Slide from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ageGroupColorMapper, monthMapper, widthMapper } from './helpers';
import { settings } from './settings';
import * as StyledSlider from './slider.styles';

interface Props {}

const defaultLogo =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-content/uploads/Untitled-design-33.png'
		: '/wp-content/uploads/Untitled-design-33.png';

const url =
	process.env.NODE_ENV === 'development'
		? 'http://testing.skatarnir.is/wp-json/tribe/events/v1/events'
		: '/wp-json/tribe/events/v1/events';

const Slider: FC<Props> = () => {
	// const redirectToEvent = (url, event) => {
	// 	if (event.ctrlKey) {
	// 		window.open(url);
	// 	} else {
	// 		window.location.href = url;
	// 	}
	// };
	const [data, setData] = useState(null);
	if (!data) {
		axios(url).then(res => {
			setData(res.data);
		});
	}
	if (!data) return <StyledSlider.Loading>Sæki....</StyledSlider.Loading>;

	function PrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<StyledSlider.ArrowWrapperLeft>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className={className}
					style={{ ...style, color: '#3C50FF' }}
					onClick={onClick}
				/>
			</StyledSlider.ArrowWrapperLeft>
		);
	}

	function NextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<StyledSlider.ArrowWrapperRight>
				<FontAwesomeIcon
					icon={faChevronRight}
					className={className}
					style={{ ...style, color: '#3C50FF' }}
					onClick={onClick}
				/>
			</StyledSlider.ArrowWrapperRight>
		);
	}
	settings.nextArrow = <NextArrow />;
	settings.prevArrow = <PrevArrow />;
	return (
		<StyledSlider.Wrapper>
			<StyledSlider.Title>
				<a href="/vidburdir">Viðburðir</a>
			</StyledSlider.Title>
			<Slide {...settings}>
				{data.events.map((item, index) => {
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
					if (item.image && item.image.sizes && item.image.sizes.large) {
						imgUrl = item.image.sizes.large.url;
					} else {
						imgUrl = defaultLogo;
					}
					console.log(showOneDate);
					return (
						<StyledSlider.SliderItem key={index}>
							<StyledSlider.ClickableContainer href={item.url}>
								<StyledSlider.ContentWrapper>
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
											<FontAwesomeIcon icon={faCalendar} />
											<p>
												<StyledSlider.BreakpointWrapper>
													{`${item.start_date_details.day}. ${startMonth}${
														showOneDate ? '' : ' -'
													}`}
													&nbsp;
												</StyledSlider.BreakpointWrapper>
												<StyledSlider.BreakpointWrapper>
													{!showOneDate && `${item.end_date_details.day}. ${endMonth}`}
												</StyledSlider.BreakpointWrapper>
											</p>
										</StyledSlider.Date>
										{item.venue && (
											<StyledSlider.DescriptionWrapper>
												<FontAwesomeIcon icon={faMapMarker} />
												<p>
													{item.venue.venue ? item.venue.venue : 'Staðsetning tilkynnt síðar'}
												</p>
											</StyledSlider.DescriptionWrapper>
										)}
									</StyledSlider.TextWrapper>
								</StyledSlider.ContentWrapper>
							</StyledSlider.ClickableContainer>
						</StyledSlider.SliderItem>
					);
				})}
			</Slide>
		</StyledSlider.Wrapper>
	);
};

export default Slider;
