const mongoose = require('mongoose');
const User = require('../../user/models/User')
const Book = require('../../book/models/Book')
const ValidationMessage = require('../../../validation-messages');
const ResponseCode = require("../../../responses-code")
const ResponseMessage = require("../../../responses-message");

const ratingShcema = new mongoose.Schema({
    rate: {
        type: Number, 
        required: [true,ValidationMessage.RATE_IS_REQUIRED], 
        min: [0,ValidationMessage.RATE_MINIMUM_CONSTRAINT], 
        max: [5,ValidationMessage.RATE_MAXIMUM_CONSTRAINT]
    },
    rater: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "User"
    },
    ratedBook: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "Book"
    }
});

//assign the new rating to its book
ratingShcema.post('save' , async function (next) {
    try{
        await User.updateOne({ _id: this.rater } , { $push: { userRatings: this.rate } });
    }
    catch(err){
        next(new Error("Rating cannot be added to this user"));
    }
    try{
        await Book.updateOne({ _id: this.ratedBook } , { $push: { bookRatings: this._id } });
    }
    catch(err){
        next(new Error("Rating cann't be assigned to book"));
    }
})

const ratingModel = mongoose.model("Rating",ratingShcema);
module.exports = ratingModel;