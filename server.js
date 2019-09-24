import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on http://localhost: ${port}`);
});

app.use(express.static('dist'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});
