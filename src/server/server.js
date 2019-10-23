import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import productRoutes from './routes/products';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import 'dotenv/config';
import './utils/db';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CareStore',
            version: '1.0.0'
        },
        servers: [{
            url: '/api'
        }]
    },
    apis: ['./src/server/docs/*.yaml', './src/server/routes/*.js', './src/server/models/*.js']
};

const swaggerDocument = swaggerJSDoc(options);

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
app.use('/api', authRoutes);

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api/docs.json', (req, res) => {
    res.json(swaggerDocument);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});
