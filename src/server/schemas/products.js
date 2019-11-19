import {body, param} from 'express-validator';

const product = [
    body('name').isString().isLength({min: 1}).trim(),
    body('category').isString().isLength({min: 1}).trim(),
    body('price').isFloat({gt: 0}),
    body('image').isURL().trim(),
    body('description').isString().isLength({min: 1}).trim()
];

const productId = [
    param('productId').isMongoId()
];

export default {productId, product};
