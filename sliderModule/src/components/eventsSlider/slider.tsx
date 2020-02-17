import { faCalendar, faChevronLeft, faChevronRight, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { FC, useState } from 'react';
import Slide from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ageGroupColorMapper, monthMapper, widthMapper } from '../common/helpers';
import { settings } from './settings';
import * as StyledSlider from './slider.styles';

//interface Props { }

const defaultLogo =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-content/uploads/Untitled-design-33.png'
		: '/wp-content/uploads/Untitled-design-33.png';

const url =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-json/tribe/events/v1/events?per_page=50'
		: '/wp-json/tribe/events/v1/events?per_page=50';

const EventsSlider: FC<{ hide: boolean, categories: string[], aldursbilasida: boolean }> = ({ hide, categories, aldursbilasida }) => {
	// const redirectToEvent = (url, event) => {
	// 	if (event.ctrlKey) {
	// 		window.open(url);
	// 	} else {
	// 		window.location.href = url;
	// 	}
	// };
	if (hide) {
		return (null);
	}

	const [data, setData] = useState(null);
	if (!data) {
		axios(url).then(res => {
			setData(res.data);
		});
	}
	if (!data) return <StyledSlider.Loading>Sæki viðburði....</StyledSlider.Loading>;

	// If the categories is not empty filter out all the events that don't have a category in the list
	if (data.events && categories !== undefined && categories.length !== 0) {
		data.events = data.events.filter(function (value /*index, arr*/) {
			// Go through the categories in the event
			for (let i = 0; i < value.categories.length; i++) {
				// If a category is in the list then we keep in the events we show
				if (categories.includes(value.categories[i].slug)) {
					return true;
				}
			}
			// Since the categories of the events where not in the list we remove it
			return false;
		});
	}

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
	};

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
	};

	function PrevArrowMini(props) {
		const { className, style, onClick } = props;
		return (
			<StyledSlider.ArrowWrapperLeftMini>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className={className}
					style={{ ...style, color: '#3C50FF' }}
					onClick={onClick}
				/>
			</StyledSlider.ArrowWrapperLeftMini>
		);
	};

	function NextArrowMini(props) {
		const { className, style, onClick } = props;
		return (
			<StyledSlider.ArrowWrapperRightMini>
				<FontAwesomeIcon
					icon={faChevronRight}
					className={className}
					style={{ ...style, color: '#3C50FF' }}
					onClick={onClick}
				/>
			</StyledSlider.ArrowWrapperRightMini>
		);
	};

	settings.nextArrow = <NextArrow />;
	settings.prevArrow = <PrevArrow />;

	// If there are less than 3 event we get an duplication error, this fixes that
	if(data.events && data.events.length < 3) {
		settings.infinite = false;
	}
	// In aldursbilas pages we don't have as much space as on the front page so we have to do small changes
	if(aldursbilasida) {
		settings.nextArrow = <NextArrowMini />;
		settings.prevArrow = <PrevArrowMini />;
		settings.slidesToShow = 2;
		settings.responsive =  [
			{
				breakpoint: 1600,
				settings: {
					draggable: true,
					slidesToShow: 1,
					arrows: true,
				}
			}
		];
		
	}
	return (
		<StyledSlider.Wrapper>
			<StyledSlider.Title>
				<a href="/vidburdir">VIÐBURÐIR</a>
			</StyledSlider.Title>
			<Slide {...settings}>
				{data.events &&
					data.events.map((item, index) => {

						// Get the image or use default image if it is not found
						let imgUrl = '';
						if (item.image && item.image.sizes) {
							// Try to get first the large if that does not exist we try the next one and the next one
							if (item.image.sizes.large) {
								imgUrl = item.image.sizes.large.url;
							} else if (item.image.sizes.medium_large) {
								imgUrl = item.image.sizes.medium_large.url;
							} else if (item.image.sizes.medium) {
								imgUrl = item.image.sizes.medium.url;
							}
						}
						if (imgUrl === '') {
							imgUrl = defaultLogo;
						}

						// Get the title and put it into upper case
						let itemTitle = '';
						if (item.title) {
							itemTitle = item.title.toUpperCase();
						}

						let itemDate = '';
						if (item.start_date_details && item.end_date_details) {
							// Get the date
							const startMonth = monthMapper(item.start_date_details.month);
							const endMonth = monthMapper(item.end_date_details.month);
							// Show 
							itemDate = `${item.start_date_details.day}. ${startMonth}`;
							// If the start day is not equal to the end date or the start month is not equal to the end month we add the end date
							if (item.start_date_details.day !== item.end_date_details.day ||
								item.start_date_details.month !== item.end_date_details.month) {
								itemDate = itemDate + ' - ' + `${item.end_date_details.day}. ${endMonth}`;
							}
						}
						let date = <li><span className="fa-li"><FontAwesomeIcon icon={faCalendar} /></span>{itemDate}</li>;

						let itemVenue = '';
						if (item.venue) {
							itemVenue = item.venue.venue ? item.venue.venue : 'Staðsetning tilkynnt síðar';
						}
						let venue = <li><span className="fa-li"><FontAwesomeIcon icon={faMapMarker} /></span>{itemVenue}</li>;

						return (
							<StyledSlider.SliderItem key={index}>
								<StyledSlider.ContentWrapper>
									<StyledSlider.ClickableContainer href={item.url}>
										<StyledSlider.PictureWrapper>
											<StyledSlider.Picture src={imgUrl} />
											<StyledSlider.AgeGroupOverlayContainer>
												{item.categories.map((ageGroup, ind) => {
													const color = ageGroupColorMapper(ageGroup.slug);
													const width = widthMapper(item.categories.length, ind);
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
											<StyledSlider.EventTitle>{itemTitle}</StyledSlider.EventTitle>
											<StyledSlider.ItemList className="fa-ul">
												{date}
												{venue}
											</StyledSlider.ItemList>
										</StyledSlider.TextWrapper>
									</StyledSlider.ClickableContainer>
								</StyledSlider.ContentWrapper>
							</StyledSlider.SliderItem>
						);
					})}
			</Slide>
		</StyledSlider.Wrapper>
	);
};

export default EventsSlider;
