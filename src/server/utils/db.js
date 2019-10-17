import mongoose from 'mongoose';
import {getAllProducts} from './mockProducts';
import Product from '../models/product';

function migrate() {
    const promises = [];
    getAllProducts().forEach((product) => {
        const doc = new Product(product);
        promises.push(doc.save());
    });
    Promise.all(promises).then(() => {
        console.log('Mock products added to databse.');
    }).catch((err) => {
        console.log('Failed to add mock products to database', err.message);
    });
}

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('db connected!');
    const count = await Product.countDocuments();
    console.log(`${count} products in database`);
    if (!count) {
        migrate();
    }
});
