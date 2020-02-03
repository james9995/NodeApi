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
router.get('/checkEmail/:emailAddress',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var data, count;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = global.database.Candidate;
            _context.next = 3;
            return data.count({
              where: {
                EmailAddress: req.params.emailAddress
              }
            });

          case 3:
            count = _context.sent;
            return _context.abrupt("return", res.send(count === 0));

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
router.get('/:emailAddress',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var data, candidate;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = global.database.Candidate;
            _context2.next = 3;
            return data.findOne({
              where: {
                EmailAddress: req.params.emailAddress
              }
            });

          case 3:
            candidate = _context2.sent;
            return _context2.abrupt("return", res.send(candidate));

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
}());
router.post('/',
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var data, candidate, response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = global.database.Candidate;
            candidate = req.body.json;
            _context3.next = 4;
            return data.create({
              values: {
                RecruitmentTestName: candidate.RecruitmentTestName,
                EmailAddress: candidate.EmailAddress,
                SessionID: candidate.SessionID,
                ApplicationDetail: candidate.ApplicationDetail,
                RegisteredTime: candidate.Date
              }
            });

          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", res.send(response));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
UserRouter.route('/create').post(function (req, res) {
  var user = new User(req.body);
  user.save().then(function (user) {
    res.json('User added successfully');
  })["catch"](function (err) {
    res.status(400).send("unable to save to database");
  });
});
var _default = router;
exports["default"] = _default;