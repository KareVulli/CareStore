/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcrypt';
import BaseController from './base';
import User from '../models/user';

class UsersController extends BaseController {
    constructor() {
        super(User);
    }

    async getAll(req, res) {
        res.json(await User.find({}, {oldPasswords: 0, password: 0}));
    }

    async get(req, res) {
        res.json(await User.findOne({_id: req.params.id}, {oldPasswords: 0, password: 0}));
    }

    async create(req, res) {
        try {
            const hash = bcrypt.hashSync(req.body.password, 10);
            req.body.password = hash;
            const doc = new User(req.body);
            await doc.save();
            res.status(201).json({
                message: 'User created'
            });
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
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

export default new UsersController();
