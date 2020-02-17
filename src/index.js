const express = require('express');
const setupDatabase = require('./setupDatabase');
const routes = require('./routes');
const bodyParser = require('body-parser');
const freePort = require("find-free-port")

global.database = setupDatabase();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/Question', routes.question);
app.use('/Candidate', routes.candidate);
app.use('/TestParameters', routes.testParameters);

freePort(3000, 3800, function(err, portNumber){
  app.listen(portNumber, () =>
    console.log(`Example app listening on port ${portNumber}!`),
  );
});

