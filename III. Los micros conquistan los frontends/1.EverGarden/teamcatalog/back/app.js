const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();

const productService = require('./service/productService');

app.use(cors(config.application.cors.server));
app.use(bodyParser.json());

app.listen(4001, function () {
    console.log('listening on port 4001 #team catalog');
});

app.get('/products', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    console.log('get /products');
    res.send(productService.list());
});

app.get('/product/:id', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    console.log('get /product/' + req.params.id);
    res.send(productService.getProduct(req.params.id));
});

