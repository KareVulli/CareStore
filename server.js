const express = require('express')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, function () {
    console.log('Server started on http://localhost:' + this.address().port);
});

app.use(express.static('dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    })
})