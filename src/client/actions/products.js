/* eslint-disable prefer-destructuring */
import requestAction from '../utils/requestAction';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const SET_SORT_BY = 'SET_SORT_BY';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';


export function setProducts(products) {
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
            onSuccess: setProducts,
            onFailure: () => {},
            label: FETCH_PRODUCTS
        }));
    };
}
