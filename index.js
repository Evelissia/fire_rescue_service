import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation, fireReportCreateValidation } from './validation.js';

import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as FireReportController from './controllers/FireReportControllers.js';

mongoose
  .connect(
    'mongodb+srv://evelissia:wwwwww@cluster0.xk5qrys.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
//роут на получение информации о пользователе
app.get('/auth/me', checkAuth, UserController.getMe);
app.post(
  '/fireReports',
  checkAuth,
  fireReportCreateValidation,
  FireReportController.createFireReport,
);

app.get('/fireReports', FireReportController.getAllFireReports);
app.get('/fireReports/:id', FireReportController.getOneFireReport);
app.delete('/fireReports/:id', checkAuth, FireReportController.remove);
app.patch('/fireReports/:id', checkAuth, FireReportController.update);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('server OK');
});
