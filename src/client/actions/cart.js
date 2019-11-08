/* eslint-disable prefer-destructuring */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(product) {
    return {type: ADD_PRODUCT, product};
}

export function removeProduct(productId) {
    return {type: REMOVE_PRODUCT, productId};
}
