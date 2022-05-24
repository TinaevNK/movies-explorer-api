const { ERROR_CODE_NOT_FOUND } = require('../constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_NOT_FOUND; // 404
  }
}

module.exports = NotFoundError;
