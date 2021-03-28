const ResponseCode = require("../response-codes");
const Role = require('../helpers/Role');
const jwt = require("jsonwebtoken");
const User = require("../modules/user/models/User");

//check on token
function checkAccessToken(role) {

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
                        checkRefreshToken(Role.ADMIN);
                    }
                    break;
                case Role.USER:
                    try {
                        res = await jwt.verify(req.token, USER_ACCESS_TOKEN_SECRET);
                        next();
                    } catch (error) {
                        checkRefreshToken(Role.USER);
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
                            checkRefreshToken(Role.ADMIN_USER);
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

function checkRefreshToken(role) {

    // we don't need the if condition.

    return async function (req, res, next) {
        const bearerHeader = req.headers.authorization;
        const bearer = bearerHeader.split(' ')[1];
        req.token = bearer;
        switch (role) {
            case Role.ADMIN:
                try {
                    res = await jwt.verify(req.token, ADMIN_REFRESH_TOKEN_SECRET);
                    var token = tokenGeneration(req.token, Role.ADMIN);
                    response.status(200).json({token});
                    //const admin = await Admin.findOne({ adminName: accessRequest.adminName })
                    //hossam
                    //await Admin.findOneAndUpdate({adminName: admin.adminName}, {refreshToken: tokenGeneration.refreshToken})
                } catch (error) {
                    next(ResponseCode.AUTHENTICATION_ERROR);
                }
                break;
            case Role.USER:
                try {
                    res = await jwt.verify(req.token, USER_REFRESH_TOKEN_SECRET);
                    var token = tokenGeneration(req.token, Role.USER);
                    response.status(200).json({token});
                    //const user = await User.findOne({ userName: accessRequest.userName })
                    //hossam
                    //await User.findOneAndUpdate({userName: user.userName}, {refreshToken: tokenGeneration.refreshToken})
                } catch (error) {
                    next(ResponseCode.AUTHENTICATION_ERROR);
                }
                break;
            case Role.ADMIN_USER:
                try {
                    res = await jwt.verify(req.token, USER_REFRESH_TOKEN_SECRET);
                    var token = tokenGeneration(req.token, Role.USER);
                    response.status(200).json({token});
                    //const user = await User.findOne({ userName: accessRequest.userName })
                    //hossam
                    //await User.findOneAndUpdate({userName: user.userName}, {refreshToken: tokenGeneration.refreshToken})
                } catch (error) {
                    try {
                        res = await jwt.verify(req.token, ADMIN_REFRESH_TOKEN_SECRET);
                        var token = tokenGeneration(req.token, Role.ADMIN);
                        response.status(200).json({token});
                        //cconst admin = await Admin.findOne({ adminName: accessRequest.adminName })
                        //hossam
                        //await Admin.findOneAndUpdate({adminName: admin.adminName}, {refreshToken: tokenGeneration.refreshToken})
                    } catch (error) {
                        next(ResponseCode.AUTHENTICATION_ERROR);
                    }
                }
                break;
            default:
            //Do Nothing
        }
    }
}

module.exports = checkAccessToken