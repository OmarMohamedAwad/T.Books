const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = mongoose.Schema({
    adminName: { type: String, unique: true, minLength: 4, required: true },
    adminPassword: { type: String , minLength: 6, required: true}
})

adminSchema.pre('save', async function(next){
    if (this.isNew) {
        try
        {
            this.adminPassword = hashPassword(this.adminPassword);
        }
        catch(error)
        {
            return next(error);
        }
        next();
    }
})

async function hashPassword(password)
{
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