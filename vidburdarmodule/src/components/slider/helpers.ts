export const ageGroupColorMapper = ageGroup => {
	switch (ageGroup) {
		case 'rekkaskatar':
			return '#65CDF0';
		case 'drottskatar':
			return '#1BB89B';
		case 'falkaskatar':
			return '#EB6363';
		case 'drekaskatar':
			return '#FEE75F';
		case 'roverskatar':
			return '#FFAF3C';
		case 'fullordnir':
			return '#CF88FF';
		default:
			return '#000000';
	}
};

export const widthMapper = length => {
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
		default:
			return '0%';
	}
};

export const monthMapper = monthNumber => {
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
