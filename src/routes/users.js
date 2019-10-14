/* eslint-disable no-underscore-dangle */
import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';

const router = express.Router();

router.get('/users', async (req, res) => {
    res.json(await User.find({}));
});

router.post('/users', async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        req.body.passwords = [{hash: hash}];
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
});

router.delete('/users', async (req, res) => {
    await User.deleteMany({});
    res.json({
        message: 'Users purged'
    });
});

router.get('/users/by-email', async (req, res) => {
    res.json(await User.findOne({email: req.query.email}));
});

router.get('/users/:user', async (req, res) => {
    res.json(await User.findOne({_id: req.params.user}));
});

router.delete('/users/:user', async (req, res) => {
    await User.findByIdAndRemove(req.params.user);
    res.json({
        message: 'User deleted'
    });
});

export default router;
