import express from 'express';
import Product from '../models/product';

const router = express.Router();

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

router.get('/product/:product', async (req, res) => {
    res.json(await Product.findOne({_id: req.params.product}));
});

export default router;