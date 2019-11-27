/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
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
        return res.json(await Cart.find({userId: req.params.userId}));
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
        await this.Model.findByIdAndRemove(req.params.userId);
        return res.json({
            message: 'User deleted'
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
}

export default new CartsController();
