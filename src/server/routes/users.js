/* eslint-disable no-underscore-dangle */
import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';

const router = express.Router();

router.get('/users', async (req, res) => {
    res.json(await User.find({}, {oldPasswords: 0, password: 0}));
});

router.post('/users', async (req, res) => {
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
});

router.delete('/users', async (req, res) => {
    await User.deleteMany({});
    res.json({
        message: 'Users purged'
    });
});

router.get('/users/by-email', async (req, res) => {
    const user = await User.findOne({email: req.query.email});
    if (!user) {
        res.json({found: false, message: 'No user with given email exists'});
    } else {
        res.json({found: true, message: 'User with given email already exists'});
    }
});

router.post('/users/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email}).lean();
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        delete user.password;
        delete user.oldPasswords;
        res.json({message: 'Logged in successfully', user: user});
    } else {
        res.status(400).json({message: 'Invalid email or password'});
    }
});

router.get('/users/:user', async (req, res) => {
    res.json(await User.findOne({_id: req.params.user}, {oldPasswords: 0, password: 0}));
});

router.delete('/users/:user', async (req, res) => {
    await User.findByIdAndRemove(req.params.user);
    res.json({
        message: 'User deleted'
    });
});

export default router;
