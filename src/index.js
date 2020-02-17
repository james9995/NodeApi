const express = require('express');
const setupDatabase = require('./setupDatabase');
const routes = require('./routes');
const bodyParser = require('body-parser');
const portNumber = 3579; // We can use a static port, because we have control of the environment we're running on

global.database = setupDatabase();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/Question', routes.question);
app.use('/Candidate', routes.candidate);
app.use('/TestParameters', routes.testParameters);

app.listen(portNumber, () =>
    console.log(`Node API listening on port ${portNumber}!`),
);