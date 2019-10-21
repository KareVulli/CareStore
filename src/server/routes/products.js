/* eslint-disable no-underscore-dangle */
import express from 'express';
import Product from '../models/product';

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - products
 *     description: Returns all users based on filters
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: categories
 *         in: query
 *         description: What category products to include separated by comma
 *         explode: false
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *       - name: sort
 *         in: query
 *         description: Field name that is used to order the products
 *         schema:
 *           type: string
 *           enum: [name, price]
 *       - name: direction
 *         in: query
 *         description: What direction to order the products in
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *     responses:
 *       200:
 *         description: An array of products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArrayOfProducts'
 *             example:
 *               $ref: '#/components/examples/ArrayOfProducts'
 *
 */
router.get('/products', async (req, res) => {
    if (!req.query.categories) {
        res.json([]);
        return;
    }
    const products = await Product.find({
        category: {$in: req.query.categories.split(',')}
    }).sort({
        [req.query.sort || 'name']: req.query.direction === 'desc' ? -1 : 1
    }).lean();
    for (let i = 0; i < products.length; i += 1) {
        const product = products[i];
        product.id = product._id;
        delete product._id;
    }
    res.json(products);
});

/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - products
 *     description: Add a new product or products
 *     produces:
 *       - application/json
 *     requestBody:
 *       descriptions: A JSON object containing Product or array of Products
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *             - $ref: '#/components/schemas/Product'
 *             - $ref: '#/components/schemas/ArrayOfProducts'
 *           examples:
 *             product:
 *               $ref: '#/components/examples/NewProduct'
 *             products:
 *               $ref: '#/components/examples/NewArrayOfProducts'
 *
 *     responses:
 *       200:
 *         description: Added product successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Product created
 */
router.post('/products', async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const promises = [];
            req.body.forEach((product) => {
                const doc = new Product(product);
                promises.push(doc.save());
            });
            await Promise.all(promises);
            res.status(201).json({
                message: 'Products created'
            });
        } else {
            const doc = new Product(req.body);
            await doc.save();
            res.status(201).json({
                message: 'Product created'
            });
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

/**
 * @swagger
 * /products:
 *   delete:
 *     tags:
 *       - products
 *     description: Delete all products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: All products deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Products purged
 */
router.delete('/products', async (req, res) => {
    await Product.deleteMany({});
    res.json({
        message: 'Products purged'
    });
});

/**
 * @swagger
 * /product/{productId}:
 *   get:
 *     tags:
 *       - products
 *     description: Gets a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productId
 *         in: path
 *         description: The ID of the product to get
 *         schema:
 *           type: string
 *         required: true
 *         example:
 *           5da9419676e6b80fbcafa336
 *     responses:
 *       200:
 *         description: A product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *             example:
 *               $ref: '#/components/examples/Product'
 *
 */
router.get('/product/:product', async (req, res) => {
    res.json(await Product.findOne({_id: req.params.product}));
});

router.delete('/product/:product', async (req, res) => {
    await Product.findByIdAndRemove(req.params.product);
    res.json({
        message: 'Product deleted'
    });
});

export default router;
