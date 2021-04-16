const mongoose = require('mongoose');
const ValidationMessage = require('../../../validation-messages');
const User = require("../../user/models/User");

const reviewShcema = mongoose.Schema({
    reviwer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, ValidationMessage.REVIEWER_REQUIRED]
    },
    reviewedBook: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Book", 
        required: [true, ValidationMessage.REVIEWED_BOOK_REQUIRED]
    },
    reviewBody: {
        type: String, 
        trim: true, 
        minlength: [1, ValidationMessage.REVIEW_BODY_MIN_LENGTH], 
        maxlength: [300, ValidationMessage.REVIEW_BODY_MAX_LENGTH]
    }
});

reviewShcema.post('save' , async function (next) {
    const Book = require("../../book/models/Book")
    console.log(this.reviewedBook ,"--",this._id )
    await Book.updateOne({ _id: this.reviewedBook } , { $push: { bookReviews: this._id } });
    await User.updateOne({ _id: this.reviwer } , { $push: { userReviews: this._id } });
})

reviewShcema.pre('deleteOne',async function(next){
    //review-book review-user
    const Book = require('../../book/models/Book')
    //review-book review-user
    const user = require('../../user/models/User')
    const deletedReview = await Review.findById(this._conditions._id)
    try
    {
        await user.updateOne({_id: deletedReview.reviwer} , {$pull: {userReviews: this._conditions._id}})
        console.log("removed the review from user correctly")
        await Book.updateOne({_id: deletedReview.reviewedBook} , {$pull: {bookReviews: this._conditions._id}})
        console.log("removed the review from book correctly")
        next()
    }
    catch(e)
    {
        next(new Error("can't remove dependencies"))
    }
})

//OnDelete Cascade

const Review = mongoose.model("Review", reviewShcema);

module.exports = Review;