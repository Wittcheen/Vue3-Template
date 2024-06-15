export const isNull = value => value === null;

export const isUndefined = value => value === undefined;

export const isUndefinedOrNull = value => isUndefined(value) || isNull(value);

export const isEmptyString = value => value === "";

export const isFunction = value => toType(value) === "function";

export const isBoolean = value => toType(value) === "boolean";

export const isString = value => toType(value) === "string";

export const isNumber = value => toType(value) === "number";

export const isArray = value => Array.isArray(value);


export const toType = value => typeof value;
