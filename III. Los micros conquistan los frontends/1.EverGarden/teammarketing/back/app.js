const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();

const suggestionsService = require('./service/suggestionsService');

app.use(cors(config.application.cors.server));
app.use(bodyParser.json());

app.listen(4002, function () {
    console.log('listening on port 4002 #team marketing');
});

app.get('/suggestions/:id', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    console.log('get /suggestions'+ req.params.id);
    res.send(suggestionsService.getSuggestions(req.params.id));
});


