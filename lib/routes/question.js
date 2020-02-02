"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var router = (0, _express.Router)();
router.get('/',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var data, questions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = global.database.questions;
            _context.next = 3;
            return data.findAll();

          case 3:
            questions = _context.sent;
            return _context.abrupt("return", res.send(questions));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/:id',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var data, question;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = global.database.questions;
            _context2.next = 3;
            return data.findOne({
              where: {
                id: req.params.id
              }
            });

          case 3:
            question = _context2.sent;
            return _context2.abrupt("return", res.send(question));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method');
// });
// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });
// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method');
// });

var _default = router;
exports["default"] = _default;