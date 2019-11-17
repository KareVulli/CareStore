/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user';

class AuthController {
    async login(req, res) {
        const user = await User.findOne({email: req.body.email}).lean();
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            delete user.password;
            delete user.oldPasswords;
            const token = jwt.sign({userId: user._id, admin: user.admin}, process.env.JWT_SECRET, {expiresIn: '1h'});
            res.json({message: 'Logged in successfully', token: token, user: user});
        } else {
            res.status(400).json({message: 'Invalid email or password'});
        }
    }

    async verify(req, res) {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            res.status(401).json({message: 'No token provided'});
            return;
        }
        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            res.status(401).json({message: 'Invalid authorization header'});
            return;
        }
        try {
            jwt.verify(token, process.env.JWT_SECRET);
            res.status(200).json({message: 'Authenticated'});
        } catch (err) {
            res.status(401).json({message: err.message});
        }
    }
}

export default new AuthController();
