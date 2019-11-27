import {info} from 'react-toastify-redux';
import requestAction from '../utils/requestAction';

/* eslint-disable prefer-destructuring */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const FETCH_ACTIVE_CART = 'FETCH_ACTIVE_CART';


export const ON_ACTIVE_CART = 'ON_ACTIVE_CART';

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

function onActiveCart(response) {
    return {type: ON_ACTIVE_CART, found: response};
}

export function fetchActiveCart(userId) {
    return requestAction({
        url: `/api/users/${userId}/carts/active`,
        onSuccess: onActiveCart,
        label: FETCH_ACTIVE_CART
    });
}
