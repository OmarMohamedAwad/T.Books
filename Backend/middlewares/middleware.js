const tokenGeneration = require('../helpers/tokenGeneration')
const ResponseCode = require("../response-codes");
const Role = require('../helpers/Role');
const jwt = require("jsonwebtoken");
const User = require("../modules/user/models/User");
const { response } = require('express');

//check on token
function checkAccessToken(role) {

    return  function (req, res, next) {
        console.log(req.headers)
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader !== "undefined") {
            const bearer = bearerHeader.split(' ')[1];
            switch (role) {
                case Role.ADMIN:
                    console.log("admin in accesss")
                    try {
                        // console.log( bearer )
                        let check =  jwt.verify(bearer, process.env.ADMIN_ACCESS_TOKEN_SECRET);
                        // res.body("hi")
                        next()
                    } catch (error) {
                        // console.log("go to refresh")
                        checkRefreshToken(Role.ADMIN,req, res, next);
                    }
                    break;
                case Role.USER:
                    try {
                        res = jwt.verify(bearer, process.env.USER_ACCESS_TOKEN_SECRET);
                        next();
                    } catch (error) {
                        checkRefreshToken(Role.USER);
                    }
                    break;
                // case Role.ADMIN_USER:
                //     try {
                //         res = await jwt.verify(req.token, process.env.USER_ACCESS_TOKEN_SECRET);
                //         next();
                //     } catch (error) {
                //         try {
                //             res = await jwt.verify(req.token, process.env.ADMIN_ACCESS_TOKEN_SECRET);
                //             next();
                //         } catch (error) {
                //             checkRefreshToken(Role.ADMIN_USER);
                //         }
                //     }
                //     break;
                default:
                //Do Nothing
            }
        } 
        else 
        {
            // console.log("no")
            next(ResponseCode.AUTHENTICATION_ERROR);
        }
    }
}

function checkRefreshToken(role,req, res, next) {
    const bearerHeader = req.headers.authorization;
    const bearer = bearerHeader.split(' ')[1];
    // req.token = bearer;
    switch (role) {
        case Role.ADMIN:
            console.log("admin hii")
            try {
                console.log("0")
                console.log(bearer)
                let check = jwt.verify(bearer, process.env.ADMIN_REFRESH_TOKEN_SECRET);
                console.log("999")
                console.log(check)
                const yarab = {adminName: "admin"};
                console.log("1")

                let token = tokenGeneration(yarab, Role.ADMIN);
                console.log("2")
                console.log(token);
                res.status(200).json( token) ;
                // console.log("why")
                //hossam
                Admin.findOneAndUpdate({refreshToken: bearer}, {refreshToken: tokenGeneration.token})
            } catch (error) {
                // console.log("going to error from check refreash token")
                next(ResponseCode.AUTHENTICATION_ERROR);
            }
            break;
        case Role.USER:
            try {
                let check =  jwt.verify(bearer, process.env.USER_REFRESH_TOKEN_SECRET);
                var token = tokenGeneration(bearer, Role.USER);
                // response.status(200).json({token});
                // response.write(token)
                //hossam
                User.findOneAndUpdate({refreshToken: bearer}, {refreshToken: tokenGeneration.refreshToken})
            } catch (error) {
                next(ResponseCode.AUTHENTICATION_ERROR);
            }
            break;
        // case Role.ADMIN_USER:
        //     try {
        //         res =  jwt.verify(req.token, process.env.USER_REFRESH_TOKEN_SECRET);
        //         var token = tokenGeneration(req.token, Role.USER);
        //         response.status(200).json({token});
        //         //const user = await User.findOne({ userName: accessRequest.userName })
        //         //hossam
        //         //await User.findOneAndUpdate({userName: user.userName}, {refreshToken: tokenGeneration.refreshToken})
        //     } catch (error) {
        //         try {
        //             res =  jwt.verify(req.token, process.env.ADMIN_REFRESH_TOKEN_SECRET);
        //             var token = tokenGeneration(req.token, Role.ADMIN);
        //             response.status(200).json({token});
        //             //cconst admin = await Admin.findOne({ adminName: accessRequest.adminName })
        //             //hossam
        //             //await Admin.findOneAndUpdate({adminName: admin.adminName}, {refreshToken: tokenGeneration.refreshToken})
        //         } catch (error) {
        //             next(ResponseCode.AUTHENTICATION_ERROR);
        //         }
        //     }
        //     break;
        default:
        //Do Nothing
    }
    

    
        
}

module.exports = checkAccessToken