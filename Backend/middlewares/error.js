const ErrorResponse = require('../helpers/errorResponse');
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  console.log(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    // const message = Object.values(err.errors).map(val => val.message);
    // error = new ErrorResponse(message, 400);

    let errorsMessage = {};

    Object.keys(error.errors).forEach((key) => {
      errorsMessage[key] = error.errors[key].message;
    });

    res.json({
      status: ResponseCode.VALIDATION_ERROR,
      message: errorsMessage
    });
  }

  res.status(error.statusCode || err == 500).json({
      status: ResponseCode.SERVER_ERROR,
      message: ResponseMessage.SERVER_ERROR_MESSAGE
  });
  
};

module.exports = errorHandler;