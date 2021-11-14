import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import React, { FC, useState } from 'react';
import Slide from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { monthNumberMapper, decodeHTMLEntites } from '../common/helpers';
import { settings } from './settings';
import * as StyledSlider from './slider.styles';
import * as Constants from '../common/constants';

// TODO: order frettum by date
//interface Props { }

const defaultLogo =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-content/uploads/Untitled-design-33.png'
		: '/wp-content/uploads/Untitled-design-33.png';

// Category 148 is frettir
let url =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-json/wp/v2/posts?_embed&categories=148'
		: '/wp-json/wp/v2/posts?_embed&categories=148';



const NewsSlider: FC<{ hide: boolean, orangeBackground: boolean, showTitle: boolean }> = ({ hide, orangeBackground, showTitle }) => {

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
	if (!data) return <StyledSlider.Loading>Sæki fréttir....</StyledSlider.Loading>;

	function PrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<StyledSlider.ArrowWrapperLeft>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className={className}
					style={{ ...style, color: Constants.SKATABLAR }}
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
					style={{ ...style, color: Constants.SKATABLAR }}
					onClick={onClick}
				/>
			</StyledSlider.ArrowWrapperRight>
		);
	}
	settings.nextArrow = <NextArrow />;
	settings.prevArrow = <PrevArrow />;
	function Wrapper(props) {
		if (orangeBackground) {
			return (<StyledSlider.OrangeSuperWrapper>{props.children}</StyledSlider.OrangeSuperWrapper>)
		} else {
			return (<StyledSlider.SuperWrapper>{props.children}</StyledSlider.SuperWrapper>)
		}
	}

	let title;
	if (showTitle) {
		title = <StyledSlider.Title>
			<a href="/frettir">FRÉTTIR</a>
		</StyledSlider.Title>
	}

	return (
		<Wrapper>
			<StyledSlider.Wrapper>
				{title}
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
							if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0] && item._embedded['wp:featuredmedia'][0].media_details && item._embedded['wp:featuredmedia'][0].media_details.sizes) {
								let imageSizes = item._embedded['wp:featuredmedia'][0].media_details.sizes;
								// Try to get first the large if that does not exist we try the next one and the next one
								if (imageSizes.large) {
									imgUrl = imageSizes.large.source_url;
								} else if (imageSizes.medium_large) {
									imgUrl = imageSizes.medium_large.source_url;
								} else if (imageSizes.medium) {
									imgUrl = imageSizes.medium.source_url;
								} else if (imageSizes.full) {
									imgUrl = imageSizes.full.source_url;
								}
							}
							// use default image if we don't find the image
							if (imgUrl === '') {
								imgUrl = defaultLogo;
							}

							let itemTitle = '';
							if (item.title && item.title.rendered) {
								itemTitle = decodeHTMLEntites(item.title.rendered);
								itemTitle = itemTitle.toUpperCase();
							}

							// Get the date of the post
							let itemDate = '';
							if (item.date) {
								let date = new Date(item.date);
								itemDate = date.getDate() + '. ' + monthNumberMapper(date.getMonth()) + ' ' + date.getFullYear();
							}

							// Typescript refuses to let me use regular icons so we have to ignore it
							//@ts-ignore
							let date = <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span>{itemDate}</li>;

							return (
								<StyledSlider.SliderItem key={index}>
									<StyledSlider.ContentWrapper>
										<StyledSlider.ClickableContainer href={itemUrl}>
											<StyledSlider.PictureWrapper>
												<StyledSlider.Picture src={imgUrl} />
											</StyledSlider.PictureWrapper>
											<StyledSlider.TextWrapper>
												<StyledSlider.EventTitle>{itemTitle}</StyledSlider.EventTitle>
												<StyledSlider.ItemList className="fa-ul">
													{date}
												</StyledSlider.ItemList>
											</StyledSlider.TextWrapper>
										</StyledSlider.ClickableContainer>
									</StyledSlider.ContentWrapper>
								</StyledSlider.SliderItem>
							)
						})
					}
				</Slide>
			</StyledSlider.Wrapper>
		</Wrapper>
	);
};

export default NewsSlider;
