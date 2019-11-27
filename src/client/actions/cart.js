/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-destructuring */
import {info, error} from 'react-toastify-redux';
import requestAction from '../utils/requestAction';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const FETCH_ACTIVE_CART = 'FETCH_ACTIVE_CART';

export const ON_ACTIVE_CART = 'ON_ACTIVE_CART';

function onUpdateProductFailed() {
    return error('Toote koguse muutmine ebaõnnestus');
}

export function updateProduct(product, quantity) {
    return (dispatch, getState) => {
        const state = getState();
        const activeCartId = state.cart.activeCartId;
        const user = state.account.user;
        dispatch({type: UPDATE_PRODUCT, product, quantity});
        if (user && activeCartId) {
            dispatch(requestAction({
                url: `/api/users/${user._id}/carts/${activeCartId}`,
                method: 'PUT',
                data: {
                    productId: product._id,
                    quantity: quantity
                },
                onFailure: onUpdateProductFailed,
                label: FETCH_ACTIVE_CART
            }));
        }
    };
}

export function addProduct(product) {
    return (dispatch, getState) => {
        const item = getState().cart.cart.find((row) => row.productId === product._id);
        const quantity = item ? item.quantity : 0;
        dispatch(updateProduct(product, quantity + 1));
        dispatch(info(`${product.name} lisatud ostukorvi`));
    };
}

export function removeProduct(product) {
    return (dispatch) => {
        dispatch(updateProduct(product, 0));
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
