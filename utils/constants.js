const ERROR_CODE_BAD_REQUEST = 400;
const ERROR_CODE_UNAUTHORIZED = 401;
const ERROR_CODE_FORBIDDEN = 403;
const ERROR_CODE_NOT_FOUND = 404;
const ERROR_CODE_CONFLICT = 409;
const ERROR_CODE_INTERNAL_SERVER_ERROR = 500;

const ACCESS_ERROR = 'Попытка удалить чужой фильм.';
const MOVIE_NOT_FOUND = 'Фильм с указанным _id не найден.';
const WRONG_DATA_MOVIE_DELETE = 'Переданы некорректные данные при удалении фильма.';
const WRONG_DATA_MOVIE = 'Переданы некорректные данные при создании фильма.';
const EMAIL_ALREADY_EXISTS = 'Пользователь с таким email уже существует.';
const WRONG_DATA_USER = 'При регистрации пользователя произошла ошибка.';
const WRONG_DATA_PROFILE = 'При обновлении профиля произошла ошибка.';
const USER_NOT_FOUND = 'Пользователь по указанному _id не найден.';
const AUTHORIZATION_REQUIRED = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
const SERVER_ERROR = 'На сервере произошла ошибка.';
const WRONG_EMAIL_OR_PASSWORD = 'Вы ввели неправильный логин или пароль.';
const WRONG_EMAIL = 'Некорректный email.';
const WRONG_URL_FORMAT = 'Некорректный адрес URL.';
const URL_NOT_FOUND = 'Запрашиваемый ресурс не найден, проверьте адрес:';

module.exports = {
  ERROR_CODE_BAD_REQUEST,
  ERROR_CODE_FORBIDDEN,
  ERROR_CODE_NOT_FOUND,
  ERROR_CODE_INTERNAL_SERVER_ERROR,
  ERROR_CODE_UNAUTHORIZED,
  ERROR_CODE_CONFLICT,
  ACCESS_ERROR,
  MOVIE_NOT_FOUND,
  WRONG_DATA_MOVIE_DELETE,
  WRONG_DATA_MOVIE,
  EMAIL_ALREADY_EXISTS,
  WRONG_DATA_USER,
  WRONG_DATA_PROFILE,
  USER_NOT_FOUND,
  AUTHORIZATION_REQUIRED,
  SERVER_ERROR,
  WRONG_EMAIL_OR_PASSWORD,
  WRONG_EMAIL,
  WRONG_URL_FORMAT,
  URL_NOT_FOUND,
};
