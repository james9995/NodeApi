import 'dotenv/config';
import express from 'express';
import { setupDatabase } from './setupDatabase';
import routes from './routes';
//import bodyParser from 'body-parser';

global.database = setupDatabase();

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/Question', routes.question);
app.use('/Candidate', routes.candidate);
app.use('/TestParameters', routes.testParameters);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);