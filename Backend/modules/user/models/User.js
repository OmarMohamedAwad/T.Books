const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var validator = require("email-validator");
const {required,minLength,unique,maxLength} = require('../validation');

const userSchema = mongoose.Schema({
    userName: { 
        type: String , 
        unique: [true, unique("User Name")],
        minLength:[5,minLength(5,"User Name")], 
        required: [true, required("User Name")],
        maxLength: [20,maxLength(20,"User Name")],
    },
    fName: { 
        type: String,
        minLength:[3,minLength(3,"First Name ")], 
        required: [true, required("First Name")],
        maxLength: [10,maxLength(10,"First Name ")],
    },
    lName: {
        type: String,
        minLength:[3,minLength(3,"First Name ")], 
        required: [true, required("First Name")],
        maxLength: [10,maxLength(10,"First Name ")],
    },
    email: { 
        type: String,
        unique: true, 
        required: true 
    },
    userPassword: { 
        type: String,
        minLength: [6, minLength(6,"Password ")],
        required: [true, required("Password")]
    },
    userImage: { 
        type: String
    },
    currentlyReadedBooks: [{ 
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Book' 
    }],
    wantToReadedBooks: [{
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Book'
    }],
    readBooks: [{
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Book'
    }],
    userReviews: [{ 
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Review'
    }],
    userRatings: [{ 
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Rating'
    }],
    refreshToken: [{
        type:String
    }]
})
userSchema.pre('save', async function(next){
    try
    {
        this.userPassword = await hashPassword(this.userPassword);
        validator.validate(this.email);
    }
    catch(error)
    {
        return next(error);
    }
    next();
})

userSchema.pre('deleteOne',async function(){
    const Review = require('../../review/models/Review')
    const ratingModel = require('../../rating/models/Rating')
    try
    {
        const deletedUser = await User.findById(this._conditions._id)
        for (const index in deletedUser.userReviews)
        {
            //console.log(deletedUser.userReviews[index])
            await Review.findOneAndDelete({_id: deletedUser.userReviews[index]})
        }
        console.log("Reviews deleted successfully")

        for (const index in deletedUser.userRatings)
        {
            //console.log(deletedUser.userRatings[index])
            await ratingModel.findOneAndDelete({_id: deletedUser.userRatings[index]})
        }
        console.log("Ratings deleted successfully")
    }
    catch(e)
    {
        next(new Error("Deleting user dependencies failed"))
    }
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



const User = mongoose.model("User" , userSchema);
module.exports = User;