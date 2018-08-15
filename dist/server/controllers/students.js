"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Students = function () {
  function Students() {
    _classCallCheck(this, Students);
  }

  _createClass(Students, [{
    key: "Index",
    value: function Index(req, res, next) {
      res.send(200);
    }
  }, {
    key: "Show",
    value: function Show(req, res, next) {
      res.send(200);
    }
  }, {
    key: "Create",
    value: function Create(req, res, next) {
      res.send(200);
    }
  }, {
    key: "Edit",
    value: function Edit(req, res, next) {
      res.send(200);
    }
  }, {
    key: "Delete",
    value: function Delete(req, res, next) {
      res.send(200);
    }
  }]);

  return Students;
}();

exports.default = Students;