/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import stripe from 'stripe';
import BaseController from './base';
import Cart from '../models/cart';

class CartsController extends BaseController {
    constructor() {
        super(Cart);
    }

    async get(req, res) {
        if (!res.locals.user.admin && res.locals.user.userId !== req.params.userId) {
            return res.status(401).json({message: 'Insufficient permissions'});
        }
        return res.json(await Cart.findOne({_id: req.params.cartId, userId: req.params.userId}));
    }

    async getAll(req, res) {
        if (!res.locals.user.admin && res.locals.user.userId !== req.params.userId) {
            return res.status(401).json({message: 'Insufficient permissions'});
        }
        const query = {userId: req.params.userId};
        if (req.query['hide-active']) {
            console.log('hide-active');
            query.active = false;
        }
        if (req.query.products) {
            return res.json(await Cart.find(query).sort({createdAt: -1}).populate('items.product'));
        }
        return res.json(await Cart.find(query).sort({createdAt: -1}));
    }

    async getActive(req, res) {
        if (!res.locals.user.admin && res.locals.user.userId !== req.params.userId) {
            return res.status(401).json({message: 'Insufficient permissions'});
        }
        try {
            const cart = await Cart.findOne({userId: req.params.userId, active: true}).populate('items.product');
            if (!cart) {
                const doc = new Cart({
                    userId: req.params.userId
                });
                await doc.save();
                return res.status(201).json(doc);
            }
            return res.status(200).json(cart);
        } catch (err) {
            return res.status(400).json({
                message: err.message
            });
        }
    }

    async create(req, res) {
        if (!res.locals.user.admin && res.locals.user.userId !== req.params.userId) {
            return res.status(401).json({message: 'Insufficient permissions'});
        }
        try {
            const doc = new Cart({
                userId: req.params.userId
            });
            await doc.save();
            return res.status(201).json({
                message: 'Cart created'
            });
        } catch (err) {
            return res.status(400).json({
                message: err.message
            });
        }
    }

    async delete(req, res) {
        if (!res.locals.user.admin && res.locals.user.userId !== req.params.userId) {
            return res.status(401).json({message: 'Insufficient permissions'});
        }
        await this.Model.findOneAndRemove({_id: req.params.cartId, userId: req.params.userId});
        return res.json({
            message: 'Cart deleted'
        });
    }

    async addProduct(req, res) {
        if (!res.locals.user.admin && res.locals.user.userId !== req.params.userId) {
            return res.status(401).json({message: 'Insufficient permissions'});
        }
        try {
            const cart = await Cart.findById(req.params.cartId);
            if (cart) {
                let index;
                let item = null;
                for (index = 0; index < cart.items.length; index += 1) {
                    const row = cart.items[index];
                    if (row.productId.equals(req.body.productId)) {
                        item = row;
                        break;
                    }
                }

                if (item) {
                    console.log('item exists');
                    if (req.body.quantity <= 0) {
                        cart.items.splice(index, 1);
                    } else {
                        item.quantity = req.body.quantity;
                    }
                } else if (req.body.quantity > 0) {
                    console.log('add item');
                    cart.items.push({
                        productId: req.body.productId,
                        quantity: req.body.quantity
                    });
                }
                await cart.save();
            }
            return res.status(200).json({
                message: 'Cart updated'
            });
        } catch (err) {
            return res.status(400).json({
                message: err.message
            });
        }
    }

    async checkout(req, res) {
        if (!res.locals.user.admin && res.locals.user.userId !== req.params.userId) {
            return res.status(401).json({message: 'Insufficient permissions'});
        }
        try {
            const cart = await Cart.findOne({_id: req.params.cartId, userId: req.params.userId}).populate('items.product');
            if (cart) {
                const total = cart.getTotalSum();
                if (total <= 0) {
                    throw new Error('Ostukorv on tühi');
                }
                const result = await stripe(process.env.STRIPE_SECRET).charges.create({
                    amount: total * 100,
                    currency: 'eur',
                    source: req.body.token,
                    description: `CareStore makse #${req.params.cartId}`,
                    metadata: {
                        userId: req.params.userId,
                        cartId: req.params.cartId
                    }
                });
                console.log(result);
                cart.total = total;
                cart.active = false;
                cart.save();
                return res.status(200).json({
                    message: 'Payment successful',
                    total: total
                });
            }
            return res.status(404).json({
                message: 'Cart not found'
            });
        } catch (err) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
}

export default new CartsController();
