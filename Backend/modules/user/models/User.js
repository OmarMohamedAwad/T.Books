const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    userName: { type: String, unique: true, minLength: 4, required: true },
    fName: { type: String, required: true, minLength: 4 },
    lName: { type: String, required: true, minLength: 4 },
    email: { type: String, unique: true, required: true },
    userPassword: { type: String , required: true, minLength: 6 },
    userImage: { type: String },
    currentlyReadedBooks: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    wantToReadedBooks: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    readBooks: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    userReviews: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    userRatings: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Rating' }]
})

userSchema.pre('save' , async function (next) {
    if(this.isNew)
    {
        try
        {
            this.password = passwordHash(this.password);
            emailValidation(this.email);
        }
        catch(err)
        {
            return next(err);
        }
    }
    next();
})

async function passwordHash(passed)
{
    let hashedtext
    try{
        hashedtext = await bcrypt.hash(passwd , 10) 
    }
    catch(err){
        throw new Error("encription error");
    }
    return hashedtext;
}

async function emailValidation(email)
{
    //emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4}){1}$/;
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(email.text))
        throw new Error("Invalid Email");
}

const User = mongoose.model("User" , userSchema);
module.exports = User;