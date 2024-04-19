import express from 'express';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
import {
  registerValidation,
  loginValidation,
  fireReportCreateValidation,
  fileResourceCreateValidation,
} from './validation.js';

import { handleValidationErrors, checkAuth } from './utils/index.js';
import {
  UserController,
  FireReportController,
  FireResourcesController,
} from './controllers/index.js';

mongoose
  .connect(
    'mongodb+srv://evelissia:wwwwww@cluster0.xk5qrys.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

// хранилище для картинок
const storage = multer.diskStorage({
  destination: (_, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.options('*', cors());
// collection users
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

//collection reports
app.post(
  '/fireReports',
  checkAuth,
  fireReportCreateValidation,
  handleValidationErrors,
  FireReportController.createFireReport,
);
app.get('/fireReports', FireReportController.getAllFireReports);
app.get('/fireReports/:id', FireReportController.getOneFireReport);
app.delete('/fireReports/:id', checkAuth, FireReportController.remove);
app.patch(
  '/fireReports/:id',
  checkAuth,
  fireReportCreateValidation,
  handleValidationErrors,
  FireReportController.update,
);

// collection resources
app.post(
  '/FireResources',
  checkAuth,
  fileResourceCreateValidation,
  handleValidationErrors,
  FireResourcesController.createFireResource,
);
app.get('/FireResources', FireResourcesController.getAllFireResources);
app.get('/FireResources/:id', FireResourcesController.getOneFireResource);
app.delete('/FireResources/:id', checkAuth, FireResourcesController.remove);
app.patch(
  '/FireResources/:id',
  checkAuth,
  fileResourceCreateValidation,
  handleValidationErrors,
  FireResourcesController.update,
);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('server OK');
});
