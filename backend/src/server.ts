import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';
import './database';
import handleErrors from './errors/handleErrors';

const app = express();
app.use(cors());
const PORT = 3333;
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}!`);
});
