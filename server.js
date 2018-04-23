var express = require('express');
var bodyParser = require('body-parser');

var orm = require('./config/orm.js');

orm.insertOne('burgers',['burger_name','devoured'],['Royale with Cheese',false])
//orm.selectAll('burgers');
