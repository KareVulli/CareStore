import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     ArrayOfCarts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Cart'
 *     Cart:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 5da9419676e6b80fbcafa336
 *           readOnly: true
 *         userId:
 *           type: string
 *           example: 5da9419676e6b80fbcafa336
 *         active:
 *           type: boolean
 *           readOnly: true
 *           example: true
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CartItem'
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
 *     CartItem:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *           example: 5da9419676e6b80fbcafa336
 *         quantity:
 *           type: integer
 *           example: 1
 */
const Cart = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    items: [{
        productId: {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    active: {
        type: Boolean,
        required: true,
        default: true
    }
}, {timestamps: true});

export default mongoose.model('Cart', Cart);
