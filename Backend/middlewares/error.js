const ErrorResponse = require('../helpers/errorResponse');
const ResponseMessage = require('../response-messages');
const ResponseCode = require('../response-codes');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = new ErrorResponse(ResponseCode.NOT_FOUND, ResponseMessage.RESOURSE_NOT_FOUND_MESSAGE)
    res.json(error);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    let errorsMessage = {};

    Object.keys(error.errors).forEach((key) => {
      errorsMessage[key] = error.errors[key].message;
    });

    error = new ErrorResponse(ResponseCode.VALIDATION_ERROR, errorsMessage)
    res.json(error);
  }

  // Mongoose duplicate key
  if (err === ResponseCode.DUBLICATE_KEY) {
    error = new ErrorResponse(ResponseCode.DUBLICATE_KEY, ResponseMessage.DUBLICATE_KEY_MESSAGE)
    res.json(error);
  }

  if (error == ResponseCode.SERVER_ERROR) {
    error = new ErrorResponse(ResponseCode.SERVER_ERROR, ResponseMessage.SERVER_ERROR_MESSAGE)
    res.json(error);
  }

};

module.exports = errorHandler;