const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ValidationMessage = require('../../../validation-messages');

const adminSchema = mongoose.Schema({
    adminName: { 
        type: String,
        unique: [true, ValidationMessage.USER_NAME_UNIQUE],
        minLength: [4,ValidationMessage.USER_NAME_MIN_LENGTH],
        required: [true, ValidationMessage.USER_NAME_REQUIRED],
        maxLength: [50,ValidationMessage.USER_NAME_MAX_LENGTH],
    },
    adminPassword: { 
        type: String,
        minLength: [6, ValidationMessage.PASSWORD_MIN_LENGTH],
        required: [true, ValidationMessage.PASSWORD_REQUIRED]
    },
    refreshToken: [{
        type:String
    }]
})

adminSchema.pre('save', async function(next){
    try
    {
        this.adminPassword = await hashPassword(this.adminPassword);
    }
    catch(error)
    {
        return next(error);
    }
    next();
})

async function hashPassword(password)
{
    console.log(password);
    let hashedtext
    try{
        hashedtext = await bcrypt.hash(password , 10) 
    }
    catch(err){
        throw new Error("encription error");
    }
    return hashedtext;
}

const Admin = mongoose.model("Admin" , adminSchema);
module.exports = Admin;