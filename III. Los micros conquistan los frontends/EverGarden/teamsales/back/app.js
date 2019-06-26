const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();

const basketService = require('./service/basketService');

app.use(cors(config.application.cors.server));
app.use(bodyParser.json());

app.listen(4003, function () {
    console.log('listening on port 4003 #team sales');
});

app.get('/basket', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    console.log('get /basket');
    res.send(basketService.list());
});

app.post('/basket/add', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    console.log('post /basket/add');
    res.send(basketService.add(req.body));
});

app.delete('/basket/delete/:id', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    console.log('post /basket/delete/'+req.params.id);
    res.send(basketService.delete(req.params.id));
});


