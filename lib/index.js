"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _setupDatabase = require("./setupDatabase");

var _routes = _interopRequireDefault(require("./routes"));

global.database = (0, _setupDatabase.setupDatabase)();
var app = (0, _express["default"])();
app.use('/Question', _routes["default"].question);
app.use('/Candidate', _routes["default"].candidate);
app.use('/TestParameters', _routes["default"].testParameters);
app.listen(process.env.PORT, function () {
  return console.log("Example app listening on port ".concat(process.env.PORT, "!"));
});