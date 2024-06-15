// Determine if an element is an HTML element
export const isElement = el => !!(el && el.nodeType === Node.ELEMENT_NODE);

// Remove a node from DOM
export const removeNode = el => el && el.parentNode && el.parentNode.removeChild(el);

// Determine if an HTML element is visible
export const isVisible = el => {
	if (!isElement(el) || !el.parentNode) {
		return false;
	}
	if (getStyle(el, "display") === "none") {
		return false;
	}
	const bcr = getBCR(el);
	return !!(bcr && bcr.height > 0 && bcr.width > 0);
};

// Determine if an element is disabled
export const isDisabled = el => !isElement(el) || el.disabled || hasAttr(el, "disabled");

// Select a single element, returns `null` if not found
export const select = (selector, root) => (isElement(root) ? root : document).querySelector(selector) || null;

// Select all elements matching selector. Returns `[]` if none found
export const selectAll = (selector, root) => Array.from((isElement(root) ? root : document).querySelectorAll(selector));

// Test if an element has a class
export const hasClass = (el, className) => {
	if (className && isElement(el) && el.classList) {
		return el.classList.contains(className);
	}
	return false;
};

// Add a class to an element
export const addClass = (el, className) => {
	if (className && isElement(el) && el.classList) {
		el.classList.add(className);
	}
};

// Remove a class from an element
export const removeClass = (el, className) => {
	if (className && isElement(el) && el.classList) {
		el.classList.remove(className);
	}
};

// Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found
export const hasAttr = (el, attr) => (attr && isElement(el) ? el.hasAttribute(attr) : null);

// Get an attribute value from an element. Returns `null` if not found
export const getAttr = (el, attr) => (attr && isElement(el) ? el.getAttribute(attr) : null);

// Set an attribute on an element
export const setAttr = (el, attr, value) => {
	if (attr && isElement(el)) {
		el.setAttribute(attr, value);
	}
};

// Remove an attribute from an element
export const removeAttr = (el, attr) => {
	if (attr && isElement(el)) {
		el.removeAttribute(attr);
	}
};

// Get an style property value from an element. Returns `null` if not found
export const getStyle = (el, prop) => (prop && isElement(el) ? el.style[prop] || null : null);

// Set an style property on an element
export const setStyle = (el, prop, value) => {
	if (prop && isElement(el)) {
		el.style[prop] = value;
	}
};

// Remove an style property from an element
export const removeStyle = (el, prop) => {
	if (prop && isElement(el)) {
		el.style[prop] = "";
	}
};

// Return the Bounding Client Rect of an element. Returns `null` if not an element
export const getBCR = el => (isElement(el) ? el.getBoundingClientRect() : null);
