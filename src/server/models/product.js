import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     ArrayOfProducts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Product'
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 5da9419676e6b80fbcafa336
 *           readOnly: true
 *         name:
 *           type: string
 *           example: 2019 Lenovo 11.6
 *         category:
 *           type: string
 *           example: computers
 *         price:
 *           type: number
 *           format: float
 *           example: 240.50
 *         image:
 *           type: string
 *           example: https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg
 *         description:
 *           type: string
 *           example: 11.6" 1366 x 768 HD resolution.
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
 *   examples:
 *     NewProduct:
 *       summary: Add a single product
 *       value:
 *         name: 2019 Lenovo 11.6
 *         category: computers
 *         price: 240
 *         image: https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg
 *         description: 11.6" 1366 x 768 HD resolution.
 *     NewArrayOfProducts:
 *       summary: Add multiple products
 *       value:
 *       - name: 2019 Lenovo 11.6
 *         category: computers
 *         price: 240
 *         image: https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg
 *         description: 11.6" 1366 x 768 HD resolution.
 *       - name: 2019 Lenovo 11.6
 *         category: computers
 *         price: 240
 *         image: https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg
 *         description: 11.6" 1366 x 768 HD resolution.
 */
const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Product', Product);
