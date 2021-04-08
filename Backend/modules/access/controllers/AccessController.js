require('dotenv').config()
const bcrypt = require('bcrypt')

const ResponseCode = require("../../../response-codes")
const Admin = require("../../admin/models/Admin")
const User = require("../../user/models/User");
const tokenGeneration = require("../../../helpers/tokenGeneration");
const Role = require("../../../helpers/Role")

async function adminAccessController(request, response, next) {
    const accessRequest = request.body
    console.log(request.body)
    try {
        
        const admin = await Admin.findOne({ adminName: accessRequest.adminName })
        if (!admin) {
            console.log("adminNo")
            return next("no such admin") 
        }
        // const match = await bcrypt.compare(accessRequest.adminPassword, admin.adminPassword);
        // console.log(match)
    
        // if(!match) {
        //     console.log("passNo")
        //     return next("password is wrong");
        // }
        var token = tokenGeneration({ admin }, Role.ADMIN);
        console.log(token)
        response.status(200).json({token});
        //hossam
        //await Admin.findOneAndUpdate({adminName: admin.adminName}, {refreshToken: tokenGeneration.refreshToken})
    }catch (error){
        next("bcrypt error")
    }
}

async function userAccessController (request, response, next){
    const userRequest = request.body
    try {
        
        const user = await User.findOne({ userName: accessRequest.userName })
        if (!user) {
            return next("no such user") 
        }
        const match = await bcrypt.compare(userRequest.password, user.userPassword);
    
        if(!match) {
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
        response.status(200).json({token});
        //hossam
        //await User.findOneAndUpdate({userName: user.userName}, {refreshToken: tokenGeneration.refreshToken})
    }catch (error){
        next("bcryption error")
    }
}

async function adminLogout (request, responce, next)
{
    if (request.body.refreshToken == null) return responce.sendStatus(401)
    await Admin.findOneAndUpdate({adminName: request.body.adminName},{refreshToken: null}) 
    responce.sendStatus(204)
}

async function userLogout (request, responce, next)
{
    if (request.body.refreshToken == null) return responce.sendStatus(401)
    await User.findOneAndUpdate({userName: request.body.userName},{refreshToken: null}) 
    responce.sendStatus(204)
}



module.exports = {
    adminAccessController,
    userAccessController,
    adminLogout,
    userLogout
}