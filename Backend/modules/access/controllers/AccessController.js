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
    try {

        const admin = await Admin.findOne({ adminName: accessRequest.adminName })
        if (!admin) {
            return next("no such admin")
        }

        const match = await bcrypt.compare(accessRequest.adminPassword, admin.adminPassword);
        if (!match) {
            return next("password is wrong");
        }
        var token = tokenGeneration({ admin }, Role.ADMIN);
        // console.log(token)
        await Admin.findOneAndUpdate({ adminName: admin.adminName }, { refreshToken: token.refreshToken })
        response.status(200).json({ token });
    } catch (error) {
        next("bcrypt error")
    }
}

async function userAccessController(request, response, next) {
    const userRequest = request.body
    try {

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
        response.status(200).json({
            accessToken: token.accessToken,
            refreshToken: token.refreshToken,
            user: userPresenter.present(user)
        });
        //hossam
        await User.findOneAndUpdate({ userName: user.userName }, { refreshToken: tokenGeneration.refreshToken })
    } catch (error) {
        next(500)
    }
}

async function userRegister(request, response, next) {

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

async function adminLogout(request, responce, next) {
    if (request.body.refreshToken == null) return responce.sendStatus(401)
    await Admin.findOneAndUpdate({ adminName: request.body.adminName }, { refreshToken: null })
    responce.sendStatus(204)
}

async function userLogout(request, responce, next) {
    if (request.body.refreshToken == null) return responce.sendStatus(401)
    await User.findOneAndUpdate({ userName: request.body.userName }, { refreshToken: null })
    responce.sendStatus(204)
}



module.exports = {
    adminAccessController,
    userAccessController,
    adminLogout,
    userLogout,
    userRegister
}