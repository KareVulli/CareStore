import {param, body} from 'express-validator';

const cartId = [
    param('cartId').isMongoId()
];

const cartItem = [
    body('productId').isMongoId(),
    body('quantity').isInt()
];

export default {cartId, cartItem};
