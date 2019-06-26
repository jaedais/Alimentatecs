const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const productService = require('./service/productService');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.get('/api/products', function (req, res) {
    console.log('get /products');
    res.json(productService.list());
});

app.get('/api/product/:id', function (req, res) {
    console.log('get /product/' + req.params.id);
    res.json(productService.getProduct(req.params.id));
});

app.listen(3001, function () {
    console.log('listening on port 3001 #team catalog');
});