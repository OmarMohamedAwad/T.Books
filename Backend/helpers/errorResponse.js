// class ErrorResponse extends Error{
//     constructor(message,statusCode){
//         super(message);
//         this.statusCode=statusCode;
//     }
// }

class ErrorResponse {
    constructor(statusCode,message){
        this.status=statusCode;
        this.message=message;
    }
}
module.exports = ErrorResponse;