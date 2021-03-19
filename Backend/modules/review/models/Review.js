const mongoose = require('mongoose');

const reviewShcema = new mongoose.Schema({
    reviwer: [{type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}],
    reviewedBook: [{type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true}],
    reviewBody: {type: String, trim: true, minlength: 4, maxlength: 300}
});

const reviewModel = mongoose.model("Rating",reviewShcema);

module.exports = reviewModel;