import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';

import uploadConfig from '@config/upload';
import handleErrors from '@shared/errors/handleErrors';
import routes from './routes';
import rateLimiter from './middlewares/rateLimiter';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
const { PORT } = process.env;

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);
app.use(errors());
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}!`);
});
