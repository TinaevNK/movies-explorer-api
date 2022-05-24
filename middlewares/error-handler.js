const { ERROR_CODE_INTERNAL_SERVER_ERROR } = require('../constants');

module.exports = (err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = ERROR_CODE_INTERNAL_SERVER_ERROR, message } = err;
  res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === ERROR_CODE_INTERNAL_SERVER_ERROR
        ? 'На сервере произошла ошибка.'
        : message,
    });
  next();
};
