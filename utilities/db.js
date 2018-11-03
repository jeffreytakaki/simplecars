var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '192.168.64.2',
    user     : 'jeffreytakaki',
    password : 'Tardy820!!',
    database : 'simpleapp'
});


// connection.connect();

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;
