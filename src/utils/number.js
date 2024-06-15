// Converts a value (string, number, etc.) to an integer number
export const toInteger = (value, defaultValue = NaN) => {
	const integer = parseInt(value);
	return isNaN(integer) ? defaultValue : integer;
};

// Converts a value (string, number, etc.) to a float number
export const toFloat = (value, defaultValue = NaN) => {
	const float = parseFloat(value);
	return isNaN(float) ? defaultValue : float;
};
