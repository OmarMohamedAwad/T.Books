const mongoose = require('mongoose');
const User = require("../../user/models/User");
const Book = require("../../book/models/Book")

const reviewShcema = new mongoose.Schema({
    reviwer: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    reviewedBook: {type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true},
    reviewBody: {type: String, trim: true, minlength: 4, maxlength: 300}
});

postSchema.post('save' , async function (next) {
    await User.updateOne({_id: this.reviwer} , {$push: {userReviews: this._id}});
    await Book.updateOne({_id: this.reviewedBook} , {$push: {bookReviews: this._id}});
})

const reviewModel = mongoose.model("Review",reviewShcema);

module.exports = reviewModel;