'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _log = require('log');

var _log2 = _interopRequireDefault(_log);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var log = new _log2.default('info');
var PORT = 8080;

app.use(_routes2.default);

app.listen(process.env.PORT || PORT, function () {
  log.info('Server started on port :' + (process.env.PORT || PORT));
});