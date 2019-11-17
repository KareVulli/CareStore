import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     ArrayOfUsers:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/User'
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 5da9419676e6b80fbcafa336
 *           readOnly: true
 *         firstname:
 *           type: string
 *           example: Foo
 *         lastname:
 *           type: string
 *           example: Bar
 *         email:
 *           type: string
 *           example: foo@bar.com
 *         password:
 *           type: string
 *           writeOnly: true
 *           example: P2$$w0rd
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2019-10-18T04:37:42.964Z
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2019-10-18T04:37:42.964Z
 *           readOnly: true
 *         __v:
 *           type: integer
 *           example: 0
 *           readOnly: true
 */
const User = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    oldPasswords: [{
        hash: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    admin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

export default mongoose.model('User', User);
