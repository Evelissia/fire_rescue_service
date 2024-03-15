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
  body('location.street', 'Неверный формат улицы').isFloat(),
  body('location.house', 'Неверный формат дома').isFloat(),
  body('location.apartment', 'Неверный формат квартиры').isFloat(),
  body('dangerLevel', 'Укажите уровень опасности').isString(),
  body('areaSize', 'Укажите размер площади').isNumeric(),
  body('description', 'Введите описание пожара').isString(),
];

export const fileResourceCreateValidation = [
  body('name', 'Укажите название ресурса').isLength({ min: 3 }).isString(),
  body('type', 'Выберите тип ресурса из предложенного списка').isIn([
    'fire truck',
    'ambulance',
    'rescue vehicle',
    'helicopter',
    'fireboat',
    'medical tent',
  ]),
  body('status', 'Выберите статус ресурса из предложенного списка').isIn([
    'available',
    'busy',
    'maintenance',
  ]),
];
