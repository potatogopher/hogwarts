'use strict';

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = _mysql2.default.createConnection({
  host: 'localhost',
  database: 'test',
  user: 'test',
  password: 'test',
  insecureAuth: true
});

connection.connect(function (err) {
  console.log(err);
});