export const decodeHTMLEntites = str => {
	var element = document.createElement('div');
	if (str && typeof str === 'string') {
		element.innerHTML = str;
		str = element.textContent;
		element.textContent = '';
	}
	return str;
}