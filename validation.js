import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя длиной не менее 3 букв').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export const fireReportCreateValidation = [
  body('location.latitude', 'Неверный формат широты').isFloat(),
  body('location.longitude', 'Неверный формат долготы').isFloat(),
  body('dangerLevel', 'Укажите уровень опасности').isString(),
  body('areaSize', 'Укажите размер площади').isNumeric(),
  body('description', 'Введите описание пожара').isString(),
];
