require('dotenv').config()
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const ResponseCode = require("../../../response-codes")
const Admin = require("../../admin/models/Admin")
const User = require("../../user/models/User");
const tokenGeneration = require("../../../helpers/tokenGeneration");
const Role = require("../../../helpers/Role")

// async function adminAccessController(request, response, next) {
//     const accessRequest = request.body
//     try {
        
//         const admin = await Admin.findOne({ adminName: accessRequest.adminName })
//         if (!admin) {
//             next("no such admin") 
//         }
//         const match = await bcrypt.compare(accessRequest.password, admin.adminPassword);
    
//         if(!match) {
//             next("password is wrong");
//         }

//         var token = jwt.sign({ admin }, process.env.ADMIN_ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
//         response.status(200).json({token});
        
//     }catch (error){
//         next("bcryption error")
//     }
// }

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

        var token = tokenGeneration({ admin }, Role.ADMIN);
        response.status(200).json({token});
        //hossam
        //await Admin.findOneAndUpdate({adminName: admin.adminName}, {refreshToken: tokenGeneration.refreshToken})
    }catch (error){
        next("bcryption error")
    }
}

const userAccessController = async function (request, response, next){
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

        var token = tokenGeneration({ user }, Role.USER);
        response.status(200).json({token});
        //hossam
        //await User.findOneAndUpdate({userName: user.userName}, {refreshToken: tokenGeneration.refreshToken})
    }catch (error){
        next("bcryption error")
    }
}

/*const userAccessController = async function (req , res , next){
    console.log("User Login");
    try
    {
        let user = await User.findOne({userName: req.body.userName})
        if(user)
        {
            console.log(user);
            try{
                let check = await bcrypt.compare(req.body.userPassword , user.userPassword)
                if(check)
                {
                    let token = jwt.sign({user}, process.env.USER_ACCESS_TOKEN_SECRET , {expiresIn: '1h'});
                    res.status(200).json({token});
                    next()
                }
                else
                {
                    next("password is wrong");
                }
            }
            catch(err)
            {
                next("error in bcryption method")
            }
        }
        else
        {
            next("no such user")
        }
    }
    catch(err){
        next("can't use database to find the user")
    }
}*/

module.exports = {
    adminAccessController,
    userAccessController
}