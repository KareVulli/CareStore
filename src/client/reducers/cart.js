/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
    cart: [],
    activeCartId: null
};

function updateProduct(state, action) {
    return produce(state, (draft) => {
        const index = draft.cart.findIndex((item) => item.productId === action.product._id);
        if (index !== -1) {
            if (action.quantity === 0) {
                draft.cart.splice(index, 1);
            } else {
                draft.cart[index].quantity = action.quantity;
            }
        } else if (action.quantity > 0) {
            draft.cart.push({
                productId: action.product._id,
                quantity: action.quantity,
                product: action.product
            });
        }
    });
}

/* function removeProduct(state, action) {
    return produce(state, (draft) => {
        const index = draft.products.findIndex((product) => product._id === action.productId);
        if (index !== -1) {
            draft.products.splice(index, 1);
        }
    });
} */

function onActiveCart(state, action) {
    return produce(state, (draft) => {
        draft.activeCartId = action._id;
        draft.products = action.items;
    });
}

export default createReducer(initialState, {
    UPDATE_PRODUCT: updateProduct,
    ON_ACTIVE_CART: onActiveCart
});
