var express = require('express');
var bodyParser = require('body-parser');

var burgers = require('./models/burger.js');

//orm.insertOne('burgers',['burger_name','devoured'],['Royale with Cheese',false])
//orm.selectAll('burgers');
//orm.updateOne('burgers','devoured',true,'id',1);
//burgers.viewBurgers(function(res) {console.log(res)});
