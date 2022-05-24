const { ERROR_CODE_BAD_REQUEST } = require('../constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_BAD_REQUEST; // 400
  }
}

module.exports = BadRequestError;
