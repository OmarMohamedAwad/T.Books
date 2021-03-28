const mongoose = require('mongoose');
const ValidationMessage = require('../../../validation-messages');
const User = require("../../user/models/User");
const Book = require("../../book/models/Book")

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
    await User.updateOne({ _id: this.reviwer } , { $push: { userReviews: this._id } });
    await Book.updateOne({ _id: this.reviewedBook } , { $push: { bookReviews: this._id } });
})

reviewShcema.pre('remove',async function(){
    //review-book review-user
    const BookModel = require('../../book/models/Book')
    try
    {
        const deletedAuthor = await Author.findById(this._conditions._id)
        for (const index in deletedAuthor.authorBooks)
        {
            //console.log(deletedAuthor.authorBooks[index])
            await BookModel.findOneAndDelete({_id: deletedAuthor.authorBooks[index]})
        }
        console.log("Books deleted successfully")
    }
    catch(e)
    {
        next(new Error("Deleting books failed"))
    }
})
//OnDelete Cascade

const Review = mongoose.model("Review", reviewShcema);

module.exports = Review;