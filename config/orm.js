var connection = require('./connection.js');

console.log('Executing orm.js');

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, columns,values,cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		var query = connection.query(queryString, [table,columns,values], function(err, result) {
			if (err) throw err;
			cb();
		});
	},
	updateOne: function (table,attr,val,idAttr,idVal,cb) {
		var queryString = 'UPDATE ?? SET ?? = ? WHERE ??=?';
		var query = connection.query(queryString, [table,attr,val,idAttr,idVal], function(err, result) {
			if (err) throw err;
			cb();
		});
	}
}

module.exports = orm;
