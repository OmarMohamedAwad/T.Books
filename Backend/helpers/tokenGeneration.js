const Role = require("./Role")
const jwt = require('jsonwebtoken');
const ResponseCode = require("../response-codes")

//
let tokenGeneration = function (message , role){
    let token = {};
    if(role == Role.ADMIN)
    {
        token.accessToken = jwt.sign(message, process.env.ADMIN_ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_EXPIRATION_DATE });
        token.refreshToken = jwt.sign(message, process.env.ADMIN_REFRESH_TOKEN_SECRET , { expiresIn: process.env.REFRESH_EXPIRATION_DATE } );
    }
    else if(type == Role.USER)
    {
        token.accessToken = jwt.sign(message, process.env.USER_ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_EXPIRATION_DATE });
        token.refreshToken = jwt.sign(message, process.env.USER_REFRESH_TOKEN_SECRET , { expiresIn: process.env.REFRESH_EXPIRATION_DATE } );
    }
    else
    {
        throw new Error(new ErrorResponse(ResponseCode.ROLE_ERROR , "Invalid Role of Authentication, use Role.USER or Role.ADMIN."));
    }
    return token;
}

module.exports = tokenGeneration;