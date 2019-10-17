import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import productRoutes from './routes/products';
import userRoutes from './routes/users';
import 'dotenv/config';
import './utils/db';


const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist', {
    maxAge: '1w'
}));

app.use('/api', productRoutes);
app.use('/api', userRoutes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});
