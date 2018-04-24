var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var router = require('./controllers/burgers_controller.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/',router);

app.listen(PORT, () => console.log('Listening on port '+PORT));

