const { JWT_SECRET, NODE_ENV } = process.env;
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');
const { devJwtKey } = require('../utils/config');
const { AUTHORIZATION_REQUIRED } = require('../utils/constants');

// мидлвара авторизации - проверяет наличие токена и верифицирует его
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError(AUTHORIZATION_REQUIRED));
    return; // выходим из функции при неудачной авторизации
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : devJwtKey);
  } catch (err) {
    next(new UnauthorizedError(AUTHORIZATION_REQUIRED));
  }
  req.user = payload; // записываем пейлоуд в объект запроса

  next();
};
