var orm = require('../config/orm.js');

var burgers = {
	viewBurgers: function(cb) {
		orm.selectAll('burgers',function(res) {
			cb(res);
		});
	},
	newBurger: function(name,cb) {
		orm.insertOne('burgers',['burger_name','devoured'],[name,false], function() {
			cb();
		});
	},
	eatBurger: function(id,cb) {
		orm.updateOne('burgers','devoured',true,'id',id,function() {cb()});
	},
}

module.exports = burgers;
