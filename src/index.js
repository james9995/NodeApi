const express = require('express');
const setupDatabase = require('./setupDatabase');
const routes = require('./routes');
const bodyParser = require('body-parser');
const portNumber = process.env.PORT||8080;

global.database = setupDatabase();
const app = express();

app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/Question', routes.question);
app.use('/Candidate', routes.candidate);
app.use('/TestParameters', routes.testParameters);

app.listen(portNumber, () =>
    console.log(`Node API listening on port ${portNumber}!`),
);