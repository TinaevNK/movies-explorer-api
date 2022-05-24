const { ERROR_CODE_CONFLICT } = require('../constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_CONFLICT; // 409
  }
}

module.exports = ConflictError;
