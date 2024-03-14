import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation, postCreateValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostControllers.js';

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

// роут на получение записей
app.get('/posts', PostController.getAll);
// запрос на получение одной записи
app.get('/posts/:id', PostController.getOne);
//запрос на создание записи
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
//запрос на удаление записи
app.delete('/posts/:id', checkAuth, PostController.remove);
//запрос на обновление записи
app.patch('/posts/:id', checkAuth, PostController.update);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('server OK');
});
