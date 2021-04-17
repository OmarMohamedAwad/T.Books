const Role = require("./Role")
const jwt = require('jsonwebtoken');
// var redis = require('redis');
// var JWTR =  require('jwt-redis').default;
// var redisClient = redis.createClient();
// var jwt = new JWTR(redisClient);
const ResponseCode = require("../response-codes")

function tokenGeneration (message , role){
    let token = {};
    if(role == Role.ADMIN)
    {
        token.accessToken =  jwt.sign(message, process.env.ADMIN_ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_EXPIRATION_DATE });
        token.refreshToken =  jwt.sign(message, process.env.ADMIN_REFRESH_TOKEN_SECRET , { expiresIn: process.env.REFRESH_EXPIRATION_DATE } );
    }
    else if(role == Role.USER)
    {
        token.accessToken = jwt.sign(message, process.env.USER_ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_EXPIRATION_DATE });
        token.refreshToken = jwt.sign(message, process.env.USER_REFRESH_TOKEN_SECRET , { expiresIn: process.env.REFRESH_EXPIRATION_DATE } );
    }
    else
    {
        throw new Error(new ErrorResponse(ResponseCode.ROLE_ERROR , "Invalid Role of Authentication, use Role.USER or Role.ADMIN."));
    }
    console.log("leaving token generation")
    return token;
}

module.exports = tokenGeneration;