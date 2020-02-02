import 'dotenv/config';
import express from 'express';
import { setupDatabase } from './setupDatabase';
import routes from './routes';

global.database = setupDatabase();

const app = express();

app.use('/Question', routes.question);
app.use('/Candidate', routes.candidate);
app.use('/TestParameters', routes.testParameters);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);