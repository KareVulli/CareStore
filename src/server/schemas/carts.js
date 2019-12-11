import {param, body, query} from 'express-validator';

const cartId = [
    param('cartId').isMongoId()
];

const cartItem = [
    body('productId').isMongoId(),
    body('quantity').isInt()
];

const cardToken = [
    body('token').isString().isLength({min: 1}).trim()
];

const getCarts = [
    query('hide-active').optional().isBoolean().toBoolean(true),
    query('products').optional().isBoolean().toBoolean(true)
];

export default {
    cartId, cartItem, cardToken, getCarts
};
