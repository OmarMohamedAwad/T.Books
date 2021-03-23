const mongoose = require('mongoose');
const ValidationMessage = require('../../../validation-messages');
const User = require("../../user/models/User");
const Book = require("../../book/models/Book")

const reviewShcema = new mongoose.Schema({
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

const Review = mongoose.model("Review", reviewShcema);

module.exports = Review;