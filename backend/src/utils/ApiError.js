class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = "something went wrong",
    stack = "",
    errors = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.stack = stack;
    this.errors = errors;
    this.message = message;
    this.success = false;
    this.data = null;
    if (stack) this.stack;
    else Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
