"use strict";

var sequelize = require('sequelize');

module.exports.setupDatabase = function () {
  var Op = sequelize.Op;
  var operatorsAliases = {
    $in: Op["in"]
  };
  var db = new sequelize('u981241758_DoxaApiTest', 'u981241758_DoxaApiTest', 'D0xa1234', {
    host: '153.92.6.85',
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: operatorsAliases,
    logging: false
  });
  db.authenticate().then(function () {
    console.log('Connection has been established successfully.');
  })["catch"](function (err) {
    console.error('Unable to connect to the database:', err);
  });
  var questions = db.define('question', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question: sequelize.TEXT(),
    answerA: sequelize.STRING,
    answerB: sequelize.STRING,
    answerC: sequelize.STRING,
    answerD: sequelize.STRING,
    answerE: sequelize.STRING,
    correctAnswer: sequelize.STRING(1)
  }, {
    timestamps: false
  });
  db.sync();
  return {
    questions: questions
  };
};