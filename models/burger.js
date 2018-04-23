var orm = require('../config/orm.js');

var burgers = {
	viewBurgers: function(cb) {
		orm.selectAll('burgers',function(res) {
			cb(res);
		});
	}
}

module.exports = burgers;
