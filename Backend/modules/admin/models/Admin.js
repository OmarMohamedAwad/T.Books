const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = mongoose.Schema({
    adminName: { 
        type: String,
        unique: true,
        minLength: [4,"The admin name must be at least 4 characters"],
        required: [true,"The admin name is required"] },
    adminPassword: { 
        type: String,
        minLength: [6,"The admin password must be at least 6 characters"],
        required: [true,"The admin password is required"]}
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