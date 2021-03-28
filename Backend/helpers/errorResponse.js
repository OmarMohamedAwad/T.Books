
class ErrorResponse {
    constructor(statusCode,message){
        this.status=statusCode;
        this.message=message;
    }
}
module.exports = ErrorResponse;