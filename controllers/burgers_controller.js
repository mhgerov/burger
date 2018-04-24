var express = require('express');
var burgers = require('../models/burger.js');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'../public/index.html'));
});

router.get('/api/view', function (req, res) {
	burgers.viewBurgers( (result) => {
		res.json(result);
	});
});

router.post('/api/new', function (req, res) {
	burgers.newBurger(req.body.name, () => {
		console.log('New burger added!');
		res.send(true);
	});
});

router.post('/api/eat', function (req, res) {
	burgers.eatBurger(req.body.id, () => {
		console.log('Burger devoured!');
		res.send(true);
	});
});

module.exports = router;
