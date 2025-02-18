class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // 這是識別業務錯誤的關鍵標記

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
