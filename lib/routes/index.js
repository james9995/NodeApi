"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _question = _interopRequireDefault(require("./question"));

var _candidate = _interopRequireDefault(require("./candidate"));

var _testParameters = _interopRequireDefault(require("./testParameters"));

var _default = {
  question: _question["default"],
  candidate: _candidate["default"],
  testParameters: _testParameters["default"]
};
exports["default"] = _default;