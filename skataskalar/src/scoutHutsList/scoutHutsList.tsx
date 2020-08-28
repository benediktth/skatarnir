import React, { FC, useState, ChangeEvent } from 'react';
import * as StyledScoutHutsList from './scoutHutsList.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import SliderFilter from './components/Slider/index';
import { decodeHTMLEntites } from '../helpers';
//import Searchbox from './components/searchBox';

interface Props {
	data: any;
}

const sliderMinValue = 1;
const constSliderMaxValue = 40;

const ScoutHutsList: FC<Props> = ({ data }) => {

	const [scoutHutData, setScoutHutData] = useState(data);
	const [searchString, setSearchString] = useState("");
	const [filterNumbers, setFilterNumbers] = useState([sliderMinValue, constSliderMaxValue]);

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

	/**
	 * Handle number change when slider is used
	 * @param values Array with top and bottom value
	 */
	const handleSliderChange = (values) => {
		setFilterNumbers(values);
		filterDataByBedCount(values[0], values[1]);
	}

	/**
	 * When slider is used we filter the list by the values on the slider
	 * Note: If there is no value for bed count (isl: svefnplass) the scout hut does not make it through filtering
	 * Note: If the value for bed count is not a number the scout hut will not make it through filtering
	 * @param lower Lower number on the slider
	 * @param higher Higher number on the slider
	 */
	const filterDataByBedCount = (lower, higher) => {
		// If the values are on the end of the slider we don't have to filter the list
		if (lower <= sliderMinValue && higher === constSliderMaxValue) {
			return;
		}
		// Filter the data by checking if bedcount is between lower and higher
		setScoutHutData(data.filter(item => {
			if (item.acf && item.acf.svefnplass) {
				let bedCount = parseInt(item.acf.svefnplass);
				return bedCount >= lower && bedCount <= higher;
			}
			return false;
		}))
	}

	// Sort the scout huts by the name of the scout hut
	scoutHutData.sort((a, b) => (a.title.rendered > b.title.rendered) ? 1 : ((b.title.rendered > a.title.rendered) ? -1 : 0));

	// Check if there are any scout huts in the list
	let noScoutHuts = scoutHutData.length < 1;


	// Error message if filtering filters out all the huts
	let filterIsOnButNoHuts = <StyledScoutHutsList.Title>Því miður eru engir skálar sem uppfyla þín skilyrði</StyledScoutHutsList.Title>;

	// If there are just no scout huts
	let noHuts = <StyledScoutHutsList.Title>
		Engir skálar fundust vinsamlega reynið síðar eða hafið samband við <a href="mailto:skatar@skatar.is?cc=brynjar@skatar.is&subject=Villa á skálasíðu">skatar@skatar.is</a>
	</StyledScoutHutsList.Title>;
	let errorMessage;
	if (data.length < 1) {
		// If data has no huts we return that error message
		errorMessage = noHuts;
	} else if (scoutHutData.length < 1) {
		// If there where huts but they are all filtered out
		errorMessage = filterIsOnButNoHuts;
	}



	return (
		<StyledScoutHutsList.SuperWrapper>
			<StyledScoutHutsList.Wrapper>
				<StyledScoutHutsList.Title>
					Skálar
				</StyledScoutHutsList.Title>
				<StyledScoutHutsList.FilterWrapper>
					<StyledScoutHutsList.FilterLabel>
						Leita eftir nafni eða skátafélagi:
						<StyledScoutHutsList.FilterInput value={searchString} onChange={handleSearchStringChange} placeholder="Leita...">
						</StyledScoutHutsList.FilterInput>
					</StyledScoutHutsList.FilterLabel>
					<StyledScoutHutsList.FilterSliderSuperWrapper>
						<StyledScoutHutsList.FilterSliderText>
							Fjöldi rúma:
						</StyledScoutHutsList.FilterSliderText>
						<StyledScoutHutsList.FilterSliderWrapper>
							<SliderFilter val={filterNumbers} onChange={handleSliderChange}></SliderFilter>
						</StyledScoutHutsList.FilterSliderWrapper>
					</StyledScoutHutsList.FilterSliderSuperWrapper>
				</StyledScoutHutsList.FilterWrapper>
				<StyledScoutHutsList.BreakLine/>
				<StyledScoutHutsList.ListWrapper>
					{noScoutHuts ?
						errorMessage
						: ''
					}
					{scoutHutData && !noScoutHuts &&
						scoutHutData.map((item, index) => {
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
							//TODO: Show default image when we can't access image
							/*// use default image if we don't find the image
							if (imgUrl === '') {
								imgUrl = defaultLogo;
							}
							*/

							// Get the owner of the hut
							let itemScoutGroup = '';
							if (item.acf && item.acf.skatafelag) {
								itemScoutGroup = item.acf.skatafelag;
							}

							// Get the name of the hut
							let itemTitle = '';
							if (item.title && item.title.rendered) {
								itemTitle = decodeHTMLEntites(item.title.rendered);
								itemTitle = itemTitle.toUpperCase();
							}

							// Get number of bed in the hut
							let itemBedCount = '';
							if (item.acf && item.acf.svefnplass) {
								itemBedCount = item.acf.svefnplass;
							}

							// Get the location of the hugs
							let itemLocation = '';
							if (item.acf && item.acf.stadsetning) {
								itemLocation = item.acf.stadsetning;
							}

							// Create the list for the information to show
							let scoutGroupElement = <li><span className="fa-li"><FontAwesomeIcon icon={faHome} /></span>{itemScoutGroup}</li>;
							let bedCountElement = <li><span className="fa-li"><FontAwesomeIcon icon={faBed} /></span>{itemBedCount}</li>;
							let locationElement = <li><span className="fa-li"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>{itemLocation}</li>;
							return (
								<StyledScoutHutsList.ScoutHutItem key={index}>
									<StyledScoutHutsList.ClickableContainer href={itemUrl}>
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
