import * as Constants from './constants';

export const ageGroupColor = {
	drekaskatar: '#FEE75F',
	falkaskatar: '#EB6363',
	drottskatar: '#1BB89B',
	rekkaskatar: '#65CDF0',
	roverskatar: '#FFAF3C',
	fullordnir: '#CF88FF',
	[Constants.NOAGEGROUP]: Constants.SKATABLAR,
};

// Vaeri lika haegt ad gera eins og ad ofan
export const ageGroupColorMapper = (ageGroup) => {
	switch (ageGroup) {
		case 'drekaskatar':
			return '#FEE75F';
		case 'falkaskatar':
			return '#EB6363';
		case 'drottskatar':
			return '#1BB89B';
		case 'rekkaskatar':
			return '#65CDF0';
		case 'roverskatar':
			return '#FFAF3C';
		case 'fullordnir':
			return '#CF88FF';
		case Constants.NOAGEGROUP:
			return Constants.SKATABLAR;
		default:
			return '#000000';
	}
};

export const ageGroupEventTitleMapper = (ageGroup) => {
	switch (ageGroup) {
		case Constants.DREKASKATAR:
			return 'DREKASKÁTUM';
		case Constants.FALKASKATAR:
			return 'FÁLKASKÁTUM';
		case Constants.DROTTSKATAR:
			return 'DRÓTTSKÁTUM';
		case Constants.REKKASKATAR:
			return 'REKKASKÁTUM';
		case Constants.ROVERSKATAR:
			return 'RÓVERSKÁTUM';
		case Constants.FULLORDNIR:
			return 'FULLORÐNUM';
		case Constants.NOAGEGROUP:
			return '';
		default:
			return '';
	}
};

export const widthMapper = (length, count) => {
	//Special case that we make the 3rd (0, 1, 2) width be 34% so we end up with 100%
	if (length === 3 && count === 2) {
		return '34%';
	}
	if (length === 6 && count === 5) {
		return '15%';
	}
	switch (length) {
		case 1:
			return '100%';
		case 2:
			return '50%';
		case 3:
			return '33%';
		case 4:
			return '25%';
		case 5:
			return '20%';
		case 6:
			return '17%';
		default:
			return '0%';
	}
};

export const monthMapper = (monthNumber) => {
	switch (monthNumber) {
		case '01':
			return 'janúar';
		case '02':
			return 'febrúar';
		case '03':
			return 'mars';
		case '04':
			return 'apríl';
		case '05':
			return 'maí';
		case '06':
			return 'júní';
		case '07':
			return 'júlí';
		case '08':
			return 'ágúst';
		case '09':
			return 'september';
		case '10':
			return 'október';
		case '11':
			return 'nóvember';
		case '12':
			return 'desember';
		default:
			return '';
	}
};

export const monthNumberMapper = (monthNumber) => {
	switch (monthNumber) {
		case 0:
			return 'janúar';
		case 1:
			return 'febrúar';
		case 2:
			return 'mars';
		case 3:
			return 'apríl';
		case 4:
			return 'maí';
		case 5:
			return 'júní';
		case 6:
			return 'júlí';
		case 7:
			return 'ágúst';
		case 8:
			return 'september';
		case 9:
			return 'október';
		case 10:
			return 'nóvember';
		case 11:
			return 'desember';
		default:
			return '';
	}
};

export const decodeHTMLEntites = (str) => {
	var element = document.createElement('div');
	if (str && typeof str === 'string') {
		element.innerHTML = str;
		str = element.textContent;
		element.textContent = '';
	}
	return str;
};
