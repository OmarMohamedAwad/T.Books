const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = mongoose.Schema({
    user_name: { type: String, unique: true, minLength: 4, required: true },
    password: { type: String , minLength: 6, required: true},
})

adminSchema.pre('save', async function(next){
    if (this.isNew) {
        try
        {
            this.password = hashPassword(this.password);
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