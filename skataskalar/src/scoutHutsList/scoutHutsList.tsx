import React, { FC, useState, ChangeEvent } from 'react';
import * as StyledScoutHutsList from './scoutHutsList.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import SliderFilter from './components/Slider/index';
//import Searchbox from './components/searchBox';

interface Props {
	data: any;
}

const sliderMinValue = 1;
const constSliderMaxValue = 50;

const ScoutHutsList: FC<Props> = ({ data }) => {

	const [scoutHutData, setScoutHutData] = useState(data);
	const [searchString, setSearchString] = useState("");
	const [filterNumbers, setFilterNumbers] = useState([sliderMinValue, constSliderMaxValue]);
	//const [higherFilter, setHigherFilter] = useState(50);

	const handleSearchStringChange = (e: ChangeEvent<HTMLInputElement>) => {
		// Change the input value
		setSearchString(e.currentTarget.value);
		// Filter the data
		filterDataByNameOrScoutGroup(e.currentTarget.value);
	}

	/**
	 * Filter the date by either name or scout group
	 * @param filterString String to filter by
	 */
	const filterDataByNameOrScoutGroup = (filterString) => {
		setScoutHutData(data.filter(item => {
			// Search by name
			let searchByName = false;
			if (item.title && item.title.rendered) {
				searchByName = item.title.rendered.toUpperCase().includes(filterString.toUpperCase());
			}

			// Search by scout group
			let searchByScoutGroup = false;
			if (item.acf && item.acf.skatafelag) {
				searchByScoutGroup = item.acf.skatafelag.toUpperCase().includes(filterString.toUpperCase())
			}

			// Show those that have string in either name or scout group
			return searchByName || searchByScoutGroup;
		}));
	}

	const handleSliderChange = (values) => {
		console.log(values);	
		setFilterNumbers(values);
		filterDataByBedCount(values[0] ,values[1]);
	}

	const filterDataByBedCount = (lower, higher) => {
		if(lower === sliderMinValue && higher === constSliderMaxValue) {
			return;
		}
		setScoutHutData(data.filter(item => {
			if (item.acf && item.acf.svefnplass) {
				let bedCount = parseInt(item.acf.svefnplass);
				console.log(lower, higher);
				console.log(bedCount, bedCount >= lower);
				return bedCount >= lower && bedCount <= higher;
			}
			return false;
		}))
	}
	
	
	console.log(scoutHutData);
	//console.log(scoutHutData[0].acf);
	scoutHutData.sort((a, b) => (a.title.rendered > b.title.rendered) ? 1 : ((b.title.rendered > a.title.rendered) ? -1 : 0));

	let noScoutHuts = scoutHutData.length < 1;

	//TODO: add slider to this when it is finished
	let filterIsOn = searchString.length > 0;

	let filterInOnButNoHuts = <StyledScoutHutsList.Title>Því miður eru engir skálar sem uppfyla þín skilyrði</StyledScoutHutsList.Title>;
	let noFilterAndNoHuts = <StyledScoutHutsList.Title>
		Engir skálar fundust vinsamlega reynið síðar eða hafið samband við <a href="mailto:skatar@skatar.is?cc=brynjar@skatar.is&subject=Villa á skálasíðu">skatar@skatar.is</a>
	</StyledScoutHutsList.Title>;
	let errorMessage;
	if (noScoutHuts) {
		if (filterIsOn) {
			errorMessage = filterInOnButNoHuts;
		}
		else {
			errorMessage = noFilterAndNoHuts;
		}

	}

	
	return (
		<StyledScoutHutsList.SuperWrapper>
			<StyledScoutHutsList.Wrapper>
				<StyledScoutHutsList.Title>
					Skálar
				</StyledScoutHutsList.Title>
				<StyledScoutHutsList.filterWrapper>
					<label>
						Leita eftir nafni eða skátafélagi:
						<StyledScoutHutsList.filterInput value={searchString} onChange={handleSearchStringChange} placeholder="Leita...">

						</StyledScoutHutsList.filterInput>
					</label>
					<SliderFilter val={filterNumbers} onChange={handleSliderChange}></SliderFilter>
				</StyledScoutHutsList.filterWrapper>
				<StyledScoutHutsList.ListWrapper>
					{noScoutHuts ?
						errorMessage
						: ''
						
					}
					{scoutHutData && !noScoutHuts &&
						scoutHutData.map((item, index) => {
							//TODO: show something when there are no huts that pass filtering

							// Get the url to the post
							let itemUrl = '';
							if (item.link) {
								itemUrl = item.link;
							}
							//TODO: Check size of screen and don't show to large image
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
								} else if (item._embedded['wp:featuredmedia'][0].source_url) {
									imgUrl = item._embedded['wp:featuredmedia'][0].source_url;
								}
							}
							console.log(itemUrl);
							//console.log(item._embedded['wp:featuredmedia'][0].media_details.source_url, imgUrl);
							//console.log(imgUrl);
							//TODO: Show default image when we can't access image
							/*// use default image if we don't find the image
							if (imgUrl === '') {
								imgUrl = defaultLogo;
							}
							*/

							let itemScoutGroup = '';
							if (item.acf && item.acf.skatafelag) {
								itemScoutGroup = item.acf.skatafelag;
							}

							let itemTitle = '';
							if (item.title && item.title.rendered) {
								//itemTitle = decodeHTMLEntites(item.title.rendered);
								itemTitle = item.title.rendered.toUpperCase();
							}


							let itemBedCount = '';
							if (item.acf && item.acf.svefnplass) {
								itemBedCount = item.acf.svefnplass;
							}

							let itemLocation = '';
							if (item.acf && item.acf.stadsetning) {
								itemLocation = item.acf.stadsetning;
							}
							/*
														// Get the date of the post
														let itemDate = '';
														if (item.date) {
															let date = new Date(item.date);
															itemDate = date.getDate() + '. ' + monthNumberMapper(date.getMonth()) + ' ' + date.getFullYear();
														}
														*/
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

							let scoutGroupElement = <li><span className="fa-li"><FontAwesomeIcon icon={faHome} /></span>{itemScoutGroup}</li>;
							let bedCountElement = <li><span className="fa-li"><FontAwesomeIcon icon={faBed} /></span>{itemBedCount}</li>;
							let locationElement = <li><span className="fa-li"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>{itemLocation}</li>;
							return (

								<StyledScoutHutsList.ScoutHutItem key={index}>

									<StyledScoutHutsList.ClickableContainer href={'/#'}> {/*TODO: connect link to the item url href={itemUrl}>*/}
										<StyledScoutHutsList.PictureWrapper>
											<StyledScoutHutsList.Picture src={imgUrl} />
										</StyledScoutHutsList.PictureWrapper>
										<StyledScoutHutsList.TextWrapper>
											<StyledScoutHutsList.ScoutHutTitle>{itemTitle}</StyledScoutHutsList.ScoutHutTitle>
											<StyledScoutHutsList.ItemList className="fa-ul">
												{scoutGroupElement}
												{bedCountElement}
												{locationElement}
											</StyledScoutHutsList.ItemList>
										</StyledScoutHutsList.TextWrapper>
									</StyledScoutHutsList.ClickableContainer>
								</StyledScoutHutsList.ScoutHutItem>

							)
						})
					}
				</StyledScoutHutsList.ListWrapper>
			</StyledScoutHutsList.Wrapper>
		</StyledScoutHutsList.SuperWrapper>
	);

};

export default ScoutHutsList;
