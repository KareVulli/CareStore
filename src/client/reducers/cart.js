/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
    products: [],
    activeCartId: null
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

function onActiveCart(state, action) {
    return produce(state, (draft) => {
        draft.activeCartId = action._id;
        draft.products = [];
        action.items.forEach((item) => {
            draft.products.push({
                ...item.product,
                quantity: item.quantity
            });
        });
    });
}

export default createReducer(initialState, {
    ADD_PRODUCT: addProduct,
    REMOVE_PRODUCT: removeProduct,
    ON_ACTIVE_CART: onActiveCart
});
