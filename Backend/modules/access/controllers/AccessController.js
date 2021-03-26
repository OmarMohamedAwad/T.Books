require('dotenv').config()
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const ResponseCode = require("../../../response-codes")
const Admin = require("../../admin/models/Admin")
const User = require("../../user/models/User");

async function adminAccessController(request, response, next) {
    const accessRequest = request.body
    try {
        
        const admin = await Admin.findOne({ adminName: accessRequest.adminName })
        if (!admin) {
            return next("no such admin") 
        }
        const match = await bcrypt.compare(accessRequest.password, admin.adminPassword);
    
        if(!match) {
            return next("password is wrong");
        }
        const adminMessage = {name: admin.adminName}
        var accessToken = jwt.sign(adminMessage, process.env.ADMIN_ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        var refreshToken = jwt.sign(adminMessage, process.env.ADMIN_REFRESH_TOKEN_SECRET);
        await Admin.findOneAndUpdate({adminName: admin.adminName}, 
            {refreshToken: refreshToken})
        response.status(200).json({accessToken,refreshToken});
        next();
    }catch (error){
        next("bcryption error")
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
        var accessToken = jwt.sign(userMessage, process.env.USER_ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        var refreshToken = jwt.sign(userMessage, process.env.USER_REFRESH_TOKEN_SECRET);
        await User.findOneAndUpdate({userName: user.userName},{refreshToken: refreshToken})        
        response.status(200).json({accessToken,refreshToken});
        next();
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