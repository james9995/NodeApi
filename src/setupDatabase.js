const sequelize = require('sequelize');

module.exports.setupDatabase = () => {
  const Op = sequelize.Op;
  const operatorsAliases = {
    $in: Op.in,
  };

  const db = new sequelize(
      'u981241758_DoxaApiTest', 
      'u981241758_DoxaApiTest', 
      'D0xa1234', {
    host: '153.92.6.85',
    dialect: 'mysql',
    port: 3306,
    operatorsAliases,
    logging: false
  });

  db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

  const questions = db.define('question', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: sequelize.TEXT(),
    answerA: sequelize.STRING,
    answerB: sequelize.STRING,
    answerC: sequelize.STRING,
    answerD: sequelize.STRING,
    answerE: sequelize.STRING,
    correctAnswer: sequelize.STRING(1),
  }, { timestamps: false });

  db.sync();

  return { questions };
};