import {param} from 'express-validator';

const cartId = [
    param('cartId').isMongoId()
];

const cartItem = [
    param('productId').isMongoId(),
    param('quantity').isInt()
];

export default {cartId, cartItem};
