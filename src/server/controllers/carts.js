/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcrypt';
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
            const cart = await Cart.findOne({userId: req.params.userId, active: true});
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

    async isNewEmail(req, res) {
        const user = await User.findOne({email: req.query.email});
        if (!user) {
            res.json({found: false, message: 'No user with given email exists'});
        } else {
            res.json({found: true, message: 'User with given email already exists'});
        }
    }
}

export default new CartsController();
