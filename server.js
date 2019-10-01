import express from 'express';
import path from 'path';
import {getProducts, findProduct} from './src/productsList';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

app.use(express.static('dist'));

app.get('/api/products/:category?', (req, res) => {
    res.json(getProducts(req.params.category));
});

app.get('/api/product/:product(\\d+)', (req, res) => {
    res.json(findProduct(parseInt(req.params.product, 10)));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});
