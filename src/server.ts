import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();
const PORT = 3333;
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}!`);
});
