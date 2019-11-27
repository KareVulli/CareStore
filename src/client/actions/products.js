/* eslint-disable prefer-destructuring */
import {error} from 'react-toastify-redux';
import requestAction from '../utils/requestAction';

export const SET_PRODUCT = 'SET_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const SET_SORT_BY = 'SET_SORT_BY';

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function onProducts(products) {
    return {type: SET_PRODUCTS, products};
}

export function toggleCategory(category) {
    return {type: TOGGLE_CATEGORY, category};
}

export function setSortBy(sortBy) {
    return {type: SET_SORT_BY, sortBy};
}

export function loadProducts() {
    return (dispatch, getState) => {
        const state = getState().products;
        const sort = state.sortBy.split('|');
        let url = `/api/products?sort=${sort[0]}&direction=${sort[1]}`;
        const selectedCategories = state.selectedCategories;
        if (selectedCategories.length) {
            url += `&categories=${selectedCategories.join(',')}`;
        }
        dispatch(requestAction({
            url: url,
            onSuccess: onProducts,
            onFailure: () => {},
            label: FETCH_PRODUCTS
        }));
    };
}

// Single product request

export function onProduct(product) {
    return {type: SET_PRODUCT, product};
}

export function onProductFailed() {
    return (dispatch) => {
        dispatch(error('Valitud toodet ei leitud'));
    };
}

export function loadProduct(id) {
    return (dispatch) => {
        dispatch(requestAction({
            url: `/api/product/${id}`,
            onSuccess: onProduct,
            onFailure: onProductFailed,
            label: FETCH_PRODUCT
        }));
    };
}
