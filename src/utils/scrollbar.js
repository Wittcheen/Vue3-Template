import { IS_BROWSER } from './index';
import { isNull } from './inspect';
import { addClass, setStyle, getBCR } from './dom';

let scrollbarWidth = null;
function getScrollbarWidth() {
	if (IS_BROWSER && isNull(scrollbarWidth)) {
		// Creates a temporary 'div' to measure width
		const div = document.createElement("div");
		addClass(div, "measure-scrollbar");
		document.body.appendChild(div);
		scrollbarWidth = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);
	}
	return scrollbarWidth || 0;
};

function checkScrollbar() {
	const { left, right } = getBCR(document.body);
	return left + right < window.innerWidth;
};

export const setScrollbar = () => {
	if (checkScrollbar()) {
		setStyle(document.body, "marginRight", `${getScrollbarWidth()}px`);
	}
};

export const resetScrollbar = () => {
	setStyle(document.body, "marginRight", "");
};
