const ErrorResponse = require('../helpers/errorResponse');
const ResponseMessage = require('../response-messages');
const ResponseCode = require('../response-codes');

const errorHandler = (err, req, res, next) => {
  console.log("I am in error")
  let error = { ...err };

  console.log(error);
  error.message = err.message;

  let errorName = err.name;
  if (errorName != undefined) {
    switch (errorName) 
    {
      // Mongoose bad ObjectId
      case 'CastError':
        error = new ErrorResponse(ResponseCode.NOT_FOUND, ResponseMessage.RESOURSE_NOT_FOUND_MESSAGE)
        res.json(error);
        break;

      case 'ValidationError':
        let errorsMessage = {};
        Object.keys(error.errors).forEach((key) => {
          errorsMessage[key] = error.errors[key].message;
        });
        error = new ErrorResponse(ResponseCode.VALIDATION_ERROR, errorsMessage)
        res.json(error);
        break;

      case 'TypeError':
          error = new ErrorResponse(ResponseCode.TYPE_ERROR, err.message +" "+ ResponseMessage.TYPE_ERROR_MESSAGE)
          res.json(error);
          break;

      case 'MongoError':
          if (err.code === ResponseCode.DUBLICATE_KEY) {
            error = new ErrorResponse(ResponseCode.DUBLICATE_KEY, ResponseMessage.DUBLICATE_KEY_MESSAGE)
            res.json(error);
          }
          break;

      default:
        console.log(err);
        break;
    }
  }

  else if (error == ResponseCode.SERVER_ERROR) {
    error = new ErrorResponse(ResponseCode.SERVER_ERROR, ResponseMessage.SERVER_ERROR_MESSAGE)
    res.json(error);
  }else{
    error = new ErrorResponse(403, "Wrong username or password")
    res.json(error);
    console.log(err);
  }

};

module.exports = errorHandler;