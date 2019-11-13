/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
    products: []
};

function addProduct(state, action) {
    return produce(state, (draft) => {
        const exists = draft.products.find((product) => product._id === action.product._id);
        if (exists) {
            exists.quantity += action.product.quantity;
        } else {
            draft.products.push(action.product);
        }
    });
}

function removeProduct(state, action) {
    return produce(state, (draft) => {
        const index = draft.products.findIndex((product) => product._id === action.productId);
        if (index !== -1) {
            draft.products.splice(index, 1);
        }
    });
}

export default createReducer(initialState, {
    ADD_PRODUCT: addProduct,
    REMOVE_PRODUCT: removeProduct
});
