import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

// Category 147 is tilkynningar
let url =
	process.env.NODE_ENV === 'development'
		? 'https://testing.skatarnir.is/wp-json/wp/v2/posts?_embed&categories=147'
		: '/wp-json/wp/v2/posts?_embed&categories=147';



const AnnouncementSlider: FC<{ hide: boolean }> = ({ hide }) => {
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
	if (!data) return <StyledSlider.Loading>Sæki tilkynningar....</StyledSlider.Loading>;

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
	return (
		<StyledSlider.SuperWrapper>
			<StyledSlider.Wrapper>
				<StyledSlider.Title>
					<a href="/tilkynningar">TILKYNNINGAR</a>
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
							/*
							They did not want this, should be removed in the future.
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
							*/

						
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
		</StyledSlider.SuperWrapper>
	);
};

export default AnnouncementSlider;
