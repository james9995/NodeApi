import 'dotenv/config';
import express from 'express';
import { setupDatabase } from './setupDatabase';
import routes from './routes';

global.database = setupDatabase();

const app = express();

app.use('/question', routes.question);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);