const mongoose = require('mongoose');
const ValidationMessage = require('../../../validation-messages');
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages");

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



ratingShcema.post('save' , async function (next) {
    const Book = require('../../book/models/Book')
    const User = require('../../user/models/User')
    //await Book.updateOne({ $and [_id: this.ratedBook],[] } , { $pull: { bookRatings: this._id } });
    await Book.updateOne({ _id: this.ratedBook } , { $push: { bookRatings: this._id } });
    await User.updateOne({ _id: this.rater } , { $push: { userRatings: this._id } });
})

/*
ratingShcema.pre('save' , async function (request , response , next) {
    const User = require('../../user/models/User')
    const Book = require('../../book/models/Book')
    console.log("jsjdsjdjsjdsj")
    try{
        await User.updateOne({ _id: this.rater } , { $push: { userRatings: this._id}  });
    }
    catch(err){
        next(new Error("Rating cannot be added to this user"));
    }
    try{
        await Book.updateOne({ _id: this.ratedBook } , { $push: { bookRatings: this._id}});
    }
    catch(err){
        next(new Error("Rating cann't be assigned to book"));
    }
})
*/

ratingShcema.pre('deleteOne',async function(next){
    console.log("Rating");
    //review-book
    const Book = require('../../book/models/Book')
    //review-user
    const user = require('../../user/models/User')
    const deletedRating = await ratingModel.findById(this._conditions._id)
    try
    {
        console.log(deletedRating);
        await user.updateOne({_id: deletedRating.rater} , {$pull: {userRatings: this._conditions._id}})
        console.log("removed the review from user correctly")
        await Book.updateOne({_id: deletedRating.ratedBook} , {$pull: {bookRatings: this._conditions._id}})
        console.log("removed the review from book correctly")
        next()
    }catch(e){
        console.log(e);
        next(new Error("can't remove dependencies"))
    }
})
const ratingModel = mongoose.model("Rating",ratingShcema);
module.exports = ratingModel;