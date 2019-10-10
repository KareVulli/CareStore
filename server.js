import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import productRoutes from './src/routes/products';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('db connected!');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use('/api', productRoutes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});
