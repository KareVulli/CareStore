/* eslint-disable no-underscore-dangle */
import express from 'express';
import Product from '../models/product';
import validation from '../middleware/validation';
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

router.post('/products', validation(productSchemas.products), async (req, res) => {
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

router.delete('/products', async (req, res) => {
    await Product.deleteMany({});
    res.json({
        message: 'Products purged'
    });
});

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
