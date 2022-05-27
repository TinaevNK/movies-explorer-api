const { ERROR_CODE_UNAUTHORIZED } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_UNAUTHORIZED; // 401
  }
}

module.exports = UnauthorizedError;
