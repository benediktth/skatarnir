import { faCalendar, faChevronLeft, faChevronRight, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { FC, useState } from 'react';
import Slide from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { monthNumberMapper } from './helpers';
import { settings } from './settings';
import * as StyledSlider from './slider.styles';

// TODO: order frettum by date
interface Props {}

const defaultLogo =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-content/uploads/Untitled-design-33.png'
		: '/wp-content/uploads/Untitled-design-33.png';

let url =
	process.env.NODE_ENV === 'development'
		? 'http://testing.skatarnir.is/wp-json/wp/v2/posts?_embed'
		: '/wp-json/wp/v2/posts?_embed';

const Slider: FC<Props> = () => {
	// const redirectToEvent = (url, event) => {
	// 	if (event.ctrlKey) {
	// 		window.open(url);
	// 	} else {
	// 		window.location.href = url;
	// 	}
	// };
	const [data, setData] = useState(null);
	console.log(url);
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
	console.log(data);
	return (
		<StyledSlider.Wrapper>
			<StyledSlider.Title>
				<a href="/frettir">Fréttir</a>
			</StyledSlider.Title>
			<Slide {...settings}>
				{data &&
					data.map((item, index) => {
						// Get the url to the post
						let itemUrl = '';
						if (item.link) {
							itemUrl = item.link;
						}
						// Get the url to the image
						let imgUrl = '';
						if (
							item._embedded['wp:featuredmedia'][0] &&
							item._embedded['wp:featuredmedia'][0].media_details &&
							item._embedded['wp:featuredmedia'][0].media_details.sizes &&
							item._embedded['wp:featuredmedia'][0].media_details.sizes.large
						) {
							imgUrl = item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
						} else {
							// use default image if we don't find the image
							imgUrl = defaultLogo;
						}

						let itemTitle = '';
						if (item.title && item.title.rendered) {
							itemTitle = item.title.rendered;
						}

						// Get the date of the post
						let itemDate = '';
						if (item.date) {
							let date = new Date(item.date);
							itemDate =
								date.getDate() + '. ' + monthNumberMapper(date.getMonth()) + ' ' + date.getFullYear();
						}
						// Get the item excerpt
						let itemExcerpt = '';
						if (item.excerpt && item.excerpt.rendered) {
							itemExcerpt = item.excerpt.rendered;
							// Remove some HTLM tags that come with the post
							itemExcerpt = itemExcerpt.replace('<p>', '');
							itemExcerpt = itemExcerpt.replace('</p>', '');
							itemExcerpt = itemExcerpt.replace('</ p>', '');
							// Take only the first 115 letters
							itemExcerpt = itemExcerpt.substring(0, 115);
							itemExcerpt = itemExcerpt + ' ...';
						}
						return (
							<StyledSlider.SliderItem key={index}>
								<StyledSlider.ContentWrapper>
									<StyledSlider.ClickableContainer href={itemUrl}>
										<StyledSlider.PictureWrapper>
											<StyledSlider.Picture src={imgUrl} />
										</StyledSlider.PictureWrapper>
										<StyledSlider.TextWrapper>
											<StyledSlider.EventTitle>{itemTitle}</StyledSlider.EventTitle>
											<StyledSlider.Date>
												<FontAwesomeIcon icon={faCalendar} />
												<p>
													<StyledSlider.BreakpointWrapper>
														{itemDate}
													</StyledSlider.BreakpointWrapper>
												</p>
											</StyledSlider.Date>
											<StyledSlider.DescriptionWrapper>
												<FontAwesomeIcon icon={faMapMarker} />
												<p>{itemExcerpt}</p>
											</StyledSlider.DescriptionWrapper>
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

export default Slider;
