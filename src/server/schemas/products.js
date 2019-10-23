import {body} from 'express-validator';

/* const product = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().lowercase().required(),
    price: Joi.number().positive().precision(2).required(),
    image: Joi.string().uri({allowRelative: false}).required(),
    description: Joi.string().required()
}); */

const product = [
    body('name').isString().isLength({min: 1}).trim(),
    body('category').isString().isLength({min: 1}).trim(),
    body('price').isFloat({gt: 0}),
    body('image').isURL().trim(),
    body('description').isString().isLength({min: 1}).trim()
];

// TODO:
const products = [
    body().isArray(),
    body('*.name').isString().isLength({min: 1}).trim(),
    body('*.category').isString().isLength({min: 1}).trim(),
    body('*.price').isFloat({gt: 0}),
    body('*.image').isURL().trim(),
    body('*.description').isString().isLength({min: 1}).trim()
];

export default {products, product};
