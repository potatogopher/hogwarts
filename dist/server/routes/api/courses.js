'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _courses = require('../../controllers/courses');

var _courses2 = _interopRequireDefault(_courses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _courses2.default.index);
router.get('/:id', _courses2.default.show);
router.get('/', _courses2.default.create);
router.get('/:id', _courses2.default.edit);
router.get('/:id', _courses2.default.delete);

exports.default = router;