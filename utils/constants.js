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
const EMAIL_AND_PASSWORD_REQUIRED = 'Поля email и password обязательны.';
const EMAIL_ALREADY_EXISTS = 'Передан уже зарегистрированный email.';
const WRONG_DATA_USER = 'Переданы некорректные данные при создании пользователя.';
const WRONG_DATA_PROFILE = 'Переданы некорректные данные при обновлении профиля.';
const USER_NOT_FOUND = 'Пользователь по указанному _id не найден.';
const AUTHORIZATION_REQUIRED = 'Необходима авторизация.';
const SERVER_ERROR = 'На сервере произошла ошибка.';
const WRONG_EMAIL_OR_PASSWORD = 'Неправильные почта или пароль.';
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
  EMAIL_AND_PASSWORD_REQUIRED,
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
