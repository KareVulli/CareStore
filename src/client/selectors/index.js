import {FETCH_PRODUCTS, FETCH_PRODUCT} from '../actions/products';
import {FETCH_REGISTER, FETCH_LOGIN} from '../actions/account';

function isRequestLoading(requestName, state) {
    const request = state.requests[requestName];
    if (request && request.loading) {
        return true;
    }
    return false;
}

function getRequestError(requestName, state) {
    const request = state.requests[requestName];
    if (request && request.error) {
        return request.error;
    }
    return false;
}

export const getToken = (state) => state.account.token;
export const getUser = (state) => state.account.user;
export const getRegisterError = (state) => getRequestError(FETCH_REGISTER, state);
export const getLoginError = (state) => getRequestError(FETCH_LOGIN, state);
export const isRegisterLoading = (state) => isRequestLoading(FETCH_REGISTER, state);
export const isEmailUnique = (state) => state.account.emailUnique || false;
export const isLoggedIn = (state) => !!state.account.token;

export const getCart = (state) => state.cart.cart;

export const getProduct = (state) => state.products.product;
export const getProducts = (state) => state.products.products;
export const getSortBy = (state) => state.products.sortBy;
export const getSelectedCategories = (state) => state.products.selectedCategories;
export const areProductsLoading = (state) => isRequestLoading(FETCH_PRODUCTS, state);
export const isProductLoading = (state) => isRequestLoading(FETCH_PRODUCT, state);
