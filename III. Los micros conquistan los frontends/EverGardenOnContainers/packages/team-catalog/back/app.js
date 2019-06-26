const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const productService = require("./service/productService");

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/team_catalog", express.static("./build"));

app.get('/team_catalog/api/products', function (req, res) {
  console.log('get /products');
  res.send(productService.list());
});

app.get('/team_catalog/api/product/:id', function (req, res) {
  console.log('get /product/' + req.params.id);
  res.send(productService.getProduct(req.params.id));
});

app.listen(3002, function () {
  console.log('listening on port 3002 #team catalog');
});