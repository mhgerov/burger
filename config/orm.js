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
	insertOne: function(table, columns,values) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		var query = connection.query(queryString, [table,columns,values], function(err, result) {
			console.log(query.sql);
			if (err) throw err;
			console.log('Insertion successful');
		});
	},
	updateOne: function (table,attr,val,idAttr,idVal) {
		var queryString = 'UPDATE ?? SET ?? = ? WHERE ??=?';
		var query = connection.query(queryString, [table,attr,val,idAttr,idVal], function(err, result) {
			console.log(query.sql);
			if (err) throw err;
			console.log('Update successful');
		});
	}
}

module.exports = orm;
