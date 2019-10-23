/* eslint-disable newline-per-chained-call */
import {body} from 'express-validator';


export default {
    user: [
        body('firstname', 'Eesnimi on kohustuslik').isString().isLength({min: 1}),
        body('lastname', 'Perekonnanimi on kohustuslik').isString().isLength({min: 1}),
        body('email', 'Email on kohustuslik')
            .isString()
            .isEmail().withMessage('Vigane email')
            .normalizeEmail(),
        body('password', 'Parool on kohustuslik')
            .isString()
            .isLength({min: 6}).withMessage('Parool peab olema vähemalt 6 tähemärki pikk')
            .matches(/\d/).withMessage('Parool peab sisaldama vähemalt ühte numbrit')
            .not()
            .isIn(['password1', '123', 'parool1']).withMessage('Liiga lihtne parool')
    ],
    login: [
        body('email').isString().trim(),
        body('password').isString()
    ]
};
