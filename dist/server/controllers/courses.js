'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Courses = function () {
  function Courses() {
    _classCallCheck(this, Courses);
  }

  _createClass(Courses, [{
    key: 'index',
    value: function index(req, res) {
      _db2.default.query('SELECT * FROM courses', function (err, results, fields) {
        if (err) {
          console.log(err);
          res.send(500);
        }
        res.json(results);
      });
    }
  }, {
    key: 'show',
    value: function show(req, res) {
      res.send(200);
    }
  }, {
    key: 'create',
    value: function create(req, res) {
      res.send(200);
    }
  }, {
    key: 'edit',
    value: function edit(req, res) {
      res.send(200);
    }
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      res.send(200);
    }
  }]);

  return Courses;
}();

exports.default = new Courses();