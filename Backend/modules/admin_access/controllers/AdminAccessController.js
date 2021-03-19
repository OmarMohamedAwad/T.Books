require('dotenv').config()
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const Admin = require("../../admin/models/Admin")

async function adminLogin(request, response, next) {
    const accessRequest = request.body
    try {
        
        const admin = await Admin.findOne({ adminName: accessRequest.adminName })
        if (!admin) {
            next("no such admin") 
        }
        const match = await bcrypt.compare(accessRequest.password, admin.adminPassword);
    
        if(!match) {
            next("password is wrong");
        }

        var token = jwt.sign({ admin }, process.env.ADMIN_ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
        response.status(200).json({token});
        
    }catch (error){
        next("bcryption error")
    }
}

module.exports = {
    adminLogin
}