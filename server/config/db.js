var mysql = require('mysql');
var exports = module.exports = {};

//dev
// exports.connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'offr',
//   port     : '8889'
// });

//prod
exports.connection = mysql.createConnection({
  host     : 'us-cdbr-azure-west-a.cloudapp.net',
  user     : 'b021ca334a9e9f',
  password : '678fc788',
  database : 'as_e15018e97a303b2',
  port     : '3306'
});

console.log('connected');
exports.connection.connect();
