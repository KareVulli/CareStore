/* eslint-disable no-underscore-dangle */
import express from 'express';
import Product from '../models/product';
import validation from '../middleware/validation';
import authorization from '../middleware/authorization';
import productSchemas from '../schemas/products';

const router = express.Router();

router.get('/products', async (req, res) => {
    const filters = {};
    if (req.query.categories) {
        filters.category = {$in: req.query.categories.split(',')};
    } else {
        res.json([]);
        return;
    }
    const products = await Product.find(filters).sort({
        [req.query.sort || 'name']: req.query.direction === 'desc' ? -1 : 1
    }).lean();

    res.json(products);
});

router.post('/products', authorization(true), validation(productSchemas.product), async (req, res) => {
    try {
        const doc = new Product(req.body);
        await doc.save();
        res.status(201).json({
            message: 'Product created'
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

router.delete('/products', authorization(true), async (req, res) => {
    await Product.deleteMany({});
    res.json({
        message: 'Products purged'
    });
});

router.get('/product/:productId', validation(productSchemas.productId), async (req, res) => {
    res.json(await Product.findOne({_id: req.params.productId}));
});

router.delete('/product/:productId', authorization(true), validation(productSchemas.productId), async (req, res) => {
    await Product.findByIdAndRemove(req.params.productId);
    res.json({
        message: 'Product deleted'
    });
});

export default router;
