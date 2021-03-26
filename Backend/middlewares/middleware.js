const ResponseCode = require("../response-codes");
const Role = require('../helpers/Role');
const jwt = require("jsonwebtoken");

//check on token
function checkAuthor(role) {

    return async function (req, res, next) {
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader !== "undefined") {
            const bearer = bearerHeader.split(' ')[1];
            req.token = bearer;
            switch (role) {
                case Role.ADMIN:
                    try {
                        res = await jwt.verify(req.token, ADMIN_ACCESS_TOKEN_SECRET);
                        next()
                    } catch (error) {
                        next(ResponseCode.AUTHENTICATION_ERROR);
                    }
                    break;
                case Role.USER:
                    try {
                        res = await jwt.verify(req.token, USER_ACCESS_TOKEN_SECRET);
                        next();
                    } catch (error) {
                        next(ResponseCode.AUTHENTICATION_ERROR);
                    }
                    break;
                case Role.ADMIN_USER:
                    try {
                        res = await jwt.verify(req.token, USER_ACCESS_TOKEN_SECRET);
                        next();
                    } catch (error) {
                        try {
                            res = await jwt.verify(req.token, ADMIN_ACCESS_TOKEN_SECRET);
                            next();
                        } catch (error) {
                            next(ResponseCode.AUTHENTICATION_ERROR);
                        }
                    }
                    break;
                default:
                //Do Nothing
            }
        } else {
            next(ResponseCode.AUTHENTICATION_ERROR);
        }
    }
}

module.exports = checkAuthor