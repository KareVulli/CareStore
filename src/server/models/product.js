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
 *         name:
 *           type: string
 *         category:
 *           type: string
 *         price:
 *           type: number
 *           format: float
 *         image:
 *           type: string
 *         description:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         __v:
 *           type: integer
 *   examples:
 *     Product:
 *       _id: 5da9419676e6b80fbcafa336
 *       name: 2019 Lenovo 11.6
 *       category: computers
 *       price: 240
 *       image: https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg
 *       description: 11.6" 1366 x 768 HD resolution.
 *       createdAt: 2019-10-18T04:37:42.964Z
 *       updatedAt: 2019-10-18T04:37:42.964Z
 *       __v: 0
 *     ArrayOfProducts:
 *     - _id: 5da9419676e6b80fbcafa336
 *       name: 2019 Lenovo 11.6
 *       category: computers
 *       price: 240
 *       image: https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg
 *       description: 11.6" 1366 x 768 HD resolution.
 *       createdAt: 2019-10-18T04:37:42.964Z
 *       updatedAt: 2019-10-18T04:37:42.964Z
 *       __v: 0
 *     - _id: 5da9419676e6b80fbcafa336
 *       name: 2019 Lenovo 11.6
 *       category: computers
 *       price: 240
 *       image: https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg
 *       description: 11.6" 1366 x 768 HD resolution.
 *       createdAt: 2019-10-18T04:37:42.964Z
 *       updatedAt: 2019-10-18T04:37:42.964Z
 *       __v: 0
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
