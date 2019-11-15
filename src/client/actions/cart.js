import {info} from 'react-toastify-redux';

/* eslint-disable prefer-destructuring */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(product) {
    return (dispatch) => {
        dispatch({type: ADD_PRODUCT, product});
        dispatch(info(`${product.name} lisatud ostukorvi`));
    };
}

export function removeProduct(productId) {
    return (dispatch) => {
        dispatch({type: REMOVE_PRODUCT, productId});
        dispatch(info('Toode ostukorvist eemaldatud'));
    };
}
