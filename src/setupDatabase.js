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
    logging: false,
    define: {
      freezeTableName: true, // Important, or sequalize pluralises everything!
      timestamps: false // important, or sequelize adds unneccesary timestamps
    }
  });

  db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

  const Candidate = db.define('Candidate', {
    RecruitmentTestName: {
      type: sequelize.STRING(50),
      primaryKey: true
    },
    CandidateName: sequelize.STRING(50),
    EmailAddress: {
      type: sequelize.STRING(150),
      primaryKey: true
    },
    RegisteredTime: sequelize.DATE, 
    Password: sequelize.STRING(50),
    ApplicationDetail: sequelize.STRING(50),
    SessionID: sequelize.STRING(50),
    TestStartedTime: sequelize.DATE, 
    TestCompletedTime: sequelize.DATE,  
    CurrentQuestion: sequelize.INTEGER,
    FinalScore: sequelize.INTEGER,
    NumberAttempted: sequelize.INTEGER
  });

  const TestParameters = db.define('TestParameters', {
    RecruitmentTestName: {
      type: sequelize.STRING(50),
      primaryKey: true
    },
    RegistrationMessage: sequelize.TEXT(),
    NumberOfBioPages: sequelize.INTEGER,
    AutomaticallySendResults: sequelize.INTEGER, 
    PassPercentage: sequelize.DOUBLE,
    FailPercentage: sequelize.DOUBLE, 
    SuccessfulTestMessage: sequelize.TEXT(),
    UnsuccessfulTestMessage: sequelize.TEXT(),
    MarginalTestMessage: sequelize.TEXT(),
    NumberOfQuestions: sequelize.INTEGER,
    TestReminderMessage: sequelize.TEXT(),
    OutOfTimeText: sequelize.TEXT(),
    EndTestText: sequelize.TEXT(),
    FrontPageText: sequelize.TEXT(),
    ReviewText: sequelize.TEXT(),
    StartTestText: sequelize.TEXT(),
    TestMinutes: sequelize.INTEGER, 
    EmailFooter: sequelize.TEXT(),
  });

  const Question = db.define('Question', {
    RecruitmentTestName: {
      type: sequelize.STRING(50),
      primaryKey: true
    },
    QuestionNumber: {
      type: sequelize.INTEGER,
      primaryKey: true
    },
    Question: sequelize.STRING(4000),
    AnswerA: sequelize.STRING(1000),
    AnswerB: sequelize.STRING(1000),
    AnswerC: sequelize.STRING(1000),
    AnswerD: sequelize.STRING(1000),
    AnswerE: sequelize.STRING(1000),
    CorrectAnswer: sequelize.STRING(50),
  });


  // TestParameters.bulkCreate([
  //   { RecruitmentTestName: "Test_Test",
  //     RegistrationMessage: "This is the registration message",
  //     NumberOfBioPages: 0,
  //     AutomaticallySendResults: 1, 
  //     PassPercentage: 80,
  //     FailPercentage: sequelize.DOUBLE, 
  //     SuccessfulTestMessage: "You passed!!!",
  //     UnsuccessfulTestMessage: "You marginally passed!!!",
  //     MarginalTestMessage: "Hmmm, maybe you passed!",
  //     NumberOfQuestions: 5,
  //     TestReminderMessage: "Don't forget!!!",
  //     OutOfTimeText: "OUTATIME!!!",
  //     EndTestText: "DONED",
  //     FrontPageText: "Get ready!",
  //     ReviewText: "You wanna check dis?",
  //     StartTestText: "Good luck!",
  //     TestMinutes: 3, 
  //     EmailFooter: "Hey, that's a pretty good email!"
  //   }
  // ])

  // Question.bulkCreate([
  //   {
  //     RecruitmentTestName: 'Test_Test',
  //     QuestionNumber: 1,
  //     Question: "This is test question 1!  Answer?",
  //     AnswerA: "Answer A",
  //     AnswerB: "Answer B",
  //     AnswerC: "Answer C",
  //     AnswerD: "Answer D",
  //     AnswerE: "Answer E",
  //     CorrectAnswer: "A",
  //   },
  //   {
  //     RecruitmentTestName: 'Test_Test',
  //     QuestionNumber: 2,
  //     Question: "This is test question 2!  Answer?",
  //     AnswerA: "Answer A",
  //     AnswerB: "Answer B",
  //     AnswerC: "Answer C",
  //     AnswerD: "Answer D",
  //     AnswerE: "Answer E",
  //     CorrectAnswer: "B",
  //   },
  //   {
  //     RecruitmentTestName: 'Test_Test',
  //     QuestionNumber: 3,
  //     Question: "This is test question 3!  Answer?",
  //     AnswerA: "Answer A",
  //     AnswerB: "Answer B",
  //     AnswerC: "Answer C",
  //     AnswerD: "Answer D",
  //     AnswerE: "Answer E",
  //     CorrectAnswer: "C",
  //   },
  //   {
  //     RecruitmentTestName: 'Test_Test',
  //     QuestionNumber: 4,
  //     Question: "This is test question 4!  Answer?",
  //     AnswerA: "Answer A",
  //     AnswerB: "Answer B",
  //     AnswerC: "Answer C",
  //     AnswerD: "Answer D",
  //     AnswerE: "Answer E",
  //     CorrectAnswer: "D",
  //   },
  //   {
  //     RecruitmentTestName: 'Test_Test',
  //     QuestionNumber: 5,
  //     Question: "This is test question 5!  Answer?",
  //     AnswerA: "Answer A",
  //     AnswerB: "Answer B",
  //     AnswerC: "Answer C",
  //     AnswerD: "Answer D",
  //     AnswerE: "Answer E",
  //     CorrectAnswer: "E",
  //   },

  //   {
  //     RecruitmentTestName: 'Test_Test',
  //     QuestionNumber: 6,
  //     Question: "This is test question 6!  Answer?",
  //     AnswerA: "Answer A",
  //     AnswerB: "Answer B",
  //     AnswerC: "Answer C",
  //     AnswerD: "Answer D",
  //     AnswerE: "Answer E",
  //     CorrectAnswer: "A",
  //   },
  // ]);

  db.sync();

  return { Question, TestParameters, Candidate };
};