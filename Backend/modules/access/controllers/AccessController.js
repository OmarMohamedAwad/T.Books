require('dotenv').config()
const bcrypt = require('bcrypt')

const ResponseCode = require("../../../response-codes")
const Admin = require("../../admin/models/Admin")
const User = require("../../user/models/User");
const tokenGeneration = require("../../../helpers/tokenGeneration");
const Role = require("../../../helpers/Role")
const userPresenter = require("../../user/presenter/userPresenter");

async function adminAccessController(request, response, next) {
    const accessRequest = request.body
    console.log(request.body)
    try {

        const admin = await Admin.findOne({ adminName: accessRequest.adminName })
        if (!admin) {
            return next("no such admin")
        }
        console.log(admin)

        const match = await bcrypt.compare(accessRequest.adminPassword, admin.adminPassword);
        console.log(match);
        if (!match) {
            return next("password is wrong");
        }
        const adminToBeSent = {adminName: admin.adminName}
        var token = tokenGeneration({ adminToBeSent }, Role.ADMIN);
        // console.log(token)
        await Admin.findOneAndUpdate({ adminName: admin.adminName }, { refreshToken: token.refreshToken })
        response.status(200).json({ token });
    } catch (error) {
        console.log(error);
        next("bcrypt error")
    }
}

async function userAccessController(request, response, next) {
    console.log("lkalsksand;alsd")
    const userRequest = request.body
    try 
    {

        const user = await User.findOne({ userName: userRequest.userName })
        if (!user) {
            return next("no such user")
        }
        const match = await bcrypt.compare(userRequest.password, user.userPassword);

        if (!match) {
            return next("password is wrong");
        }


        const userMessage =
        {
            name: user.userName,
            email: user.email,
            currentlyReadedBooks: user.currentlyReadedBooks,
            wantToReadedBooks: user.wantToReadedBooks,
            readBooks: user.readBooks,
        }

        var token = tokenGeneration({ userMessage }, Role.USER);
        console.log(token.accessToken)
        console.log(token.refreshToken)
        response.status(200).json({
            accessToken: token.accessToken,
            refreshToken: token.refreshToken,
            user: userPresenter.present(user)
        });
        console.log(user.userName, tokenGeneration.refreshToken )
        await User.findOneAndUpdate({ userName: user.userName }, { refreshToken: token.refreshToken })
        console.log("sakmalsl")
    } 
    catch (error) 
    {
        console.log(error);
        next(500)
    }
}

async function userRegister(request, response, next) {
    console.log("testing register")

    try {

        const {
            userName,
            firstName,
            lastName,
            email,
            password,
            image,
        } = request.body;

        console.log(firstName);
        const alreadyRegister = await User.find({ email });
        console.log(alreadyRegister);
        if (!request.body) {
            response.status(400).send({ err: "Content can not be empty!" });
        }
        if (alreadyRegister.length) {
            return response.status(409).json({ err: "Email is already used!" })
        }

        const newUser = new User(
            {
                userName: userName,
                fName: firstName,
                lName: lastName,
                email: email,
                userPassword: password,
                userIamge: image
            })
        await newUser.save();

        const userMessage = {
            name: newUser.userName,
            email: newUser.email,
            currentlyReadedBooks: newUser.currentlyReadedBooks,
            wantToReadedBooks: newUser.wantToReadedBooks,
            readBooks: newUser.readBooks,
        }

        var token = tokenGeneration({ userMessage }, Role.USER);
        
        //hossam
        await User.findOneAndUpdate({ userName: newUser.userName }, { refreshToken: tokenGeneration.refreshToken })
        response.status(200).json({
            accessToken: token.accessToken,
            refreshToken: token.refreshToken,
            user: userPresenter.present(newUser)
        });
    } catch (err) {
        console.log(err);
        next(err);
    }

}


async function adminLogout (request, responce, next)
{
    console.log(request.body)
    if (request.body.refreshToken == null) return responce.sendStatus(401)
    // await Admin.findOneAndUpdate({adminName: request.body.adminName},{refreshToken: null}) 
    await Admin.findOneAndUpdate({refreshToken: request.body.refreshToken},{refreshToken: null}) 
    responce.sendStatus(204)
}

async function userLogout (request, responce, next)
{
    
    if (request.body.refreshToken == null) return responce.sendStatus(401)
    // await User.findOneAndUpdate({userName: request.body.userName},{refreshToken: null})
    await User.findOneAndUpdate({refreshToken: request.body.refreshToken},{refreshToken: null}) 
    responce.sendStatus(204)
}

async function getNewToken (req, res, next)
{
    console.log("refresh")
    console.log("refresh2")
    const bearerHeader = req.headers.authorization;
    const bearer = bearerHeader.split(' ')[1];
    // req.token = bearer;
    switch (role) {
        case Role.ADMIN:
            console.log("admin")
            try {
                console.log("1", bearer, process.env.ADMIN_REFRESH_TOKEN_SECRET)
                res = await jwt.verify(bearer, process.env.ADMIN_REFRESH_TOKEN_SECRET);
                console.log("2")
                var token = tokenGeneration(bearer, Role.ADMIN);
                console.log("3")
                response.status(200).json({token});
                console.log("4")
                //const admin = await Admin.findOne({ adminName: accessRequest.adminName })
                //hossam
                await Admin.findOneAndUpdate({refreshToken: bearer}, {refreshToken: tokenGeneration.token})
            } catch (error) {
                console.log("going to error from check refreash token")
                next(ResponseCode.AUTHENTICATION_ERROR);
            }
            break;
        case Role.USER:
            try {
                res = await jwt.verify(req.token, process.env.USER_REFRESH_TOKEN_SECRET);
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
                res = await jwt.verify(req.token, process.env.USER_REFRESH_TOKEN_SECRET);
                var token = tokenGeneration(req.token, Role.USER);
                response.status(200).json({token});
                //const user = await User.findOne({ userName: accessRequest.userName })
                //hossam
                //await User.findOneAndUpdate({userName: user.userName}, {refreshToken: tokenGeneration.refreshToken})
            } catch (error) {
                try {
                    res = await jwt.verify(req.token, process.env.ADMIN_REFRESH_TOKEN_SECRET);
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



module.exports = {
    adminAccessController,
    userAccessController,
    adminLogout,
    userLogout,
    userRegister,
    getNewToken
}