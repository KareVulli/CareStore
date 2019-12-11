/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-destructuring */
import {info, error, success} from 'react-toastify-redux';
import {push} from 'connected-react-router';
import requestAction from '../utils/requestAction';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SHOW_PAYMENT_MODAL = 'SHOW_PAYMENT_MODAL';
export const HIDE_PAYMENT_MODAL = 'HIDE_PAYMENT_MODAL';

export const FETCH_ACTIVE_CART = 'FETCH_ACTIVE_CART';
export const FETCH_CHECKOUT = 'FETCH_CHECKOUT';
export const FETCH_PAST_PAYMENTS = 'FETCH_PAST_PAYMENTS';


export const ON_ACTIVE_CART = 'ON_ACTIVE_CART';
export const ON_CHECKOUT = 'ON_CHECKOUT';
export const ON_PAST_PAYMENTS = 'ON_PAST_PAYMENTS';

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
    return {type: ON_ACTIVE_CART, response};
}

export function fetchActiveCart() {
    return (dispatch, getState) => {
        dispatch(requestAction({
            url: `/api/users/${getState().account.user._id}/carts/active`,
            onSuccess: onActiveCart,
            label: FETCH_ACTIVE_CART
        }));
    };
}

function onCheckout(response) {
    return (dispatch) => {
        console.log(response);
        dispatch(push('/profile'));
        dispatch(success('Makse edukalt sooritatud'));
        dispatch(fetchActiveCart());
    };
}

function onCheckoutFailed(response) {
    return (dispatch) => {
        dispatch(error(response.message));
    };
}

export function checkout(token) {
    return (dispatch, getState) => {
        const state = getState();
        const activeCartId = state.cart.activeCartId;
        const user = state.account.user;
        dispatch(requestAction({
            url: `/api/users/${user._id}/carts/${activeCartId}/checkout`,
            method: 'POST',
            data: {
                token: token
            },
            onSuccess: onCheckout,
            onFailure: onCheckoutFailed,
            label: FETCH_CHECKOUT
        }));
    };
}

export function showPaymentModal() {
    return {type: SHOW_PAYMENT_MODAL};
}

export function hidePaymentModal() {
    return {type: HIDE_PAYMENT_MODAL};
}

function onPastPayments(response) {
    return {type: ON_PAST_PAYMENTS, response};
}

export function fetchPastPayments() {
    return (dispatch, getState) => {
        dispatch(requestAction({
            url: `/api/users/${getState().account.user._id}/carts`,
            data: {
                products: true,
                'hide-active': true
            },
            onSuccess: onPastPayments,
            label: FETCH_PAST_PAYMENTS
        }));
    };
}
