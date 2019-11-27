/* eslint-disable no-param-reassign */
import produce from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
    products: [],
    product: {},
    selectedCategories: ['phones'],
    sortBy: 'name|asc'
};

function toggleCategory(state, action) {
    const selection = [...state.selectedCategories];
    const index = selection.indexOf(action.category);
    if (index > -1) {
        selection.splice(index, 1);
    } else {
        selection.push(action.category);
    }
    return produce(state, (draft) => {
        draft.selectedCategories = selection;
    });
}

function setProduct(state, action) {
    return produce(state, (draft) => {
        draft.product = action.product;
    });
}

function setProducts(state, action) {
    return produce(state, (draft) => {
        draft.products = action.products;
    });
}

function setSortBy(state, action) {
    return produce(state, (draft) => {
        draft.sortBy = action.sortBy;
    });
}

export default createReducer(initialState, {
    TOGGLE_CATEGORY: toggleCategory,
    SET_PRODUCT: setProduct,
    SET_PRODUCTS: setProducts,
    SET_SORT_BY: setSortBy
});
