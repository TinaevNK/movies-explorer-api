const { ERROR_CODE_FORBIDDEN } = require('../constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_FORBIDDEN; // 403
  }
}

module.exports = ForbiddenError;
