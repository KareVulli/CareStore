/* eslint-disable prefer-destructuring */

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_END = 'REQUEST_END';

export function requestStart(label) {
    return {type: REQUEST_START, label: label};
}

export function requestEnd(label) {
    return {type: REQUEST_END, label: label};
}

export function requestError(label, error) {
    return {type: REQUEST_ERROR, label: label, error: error};
}
