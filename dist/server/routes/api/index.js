'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _courses = require('./courses');

var _courses2 = _interopRequireDefault(_courses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/courses', _courses2.default);

exports.default = router;