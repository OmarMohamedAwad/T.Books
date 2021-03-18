const mongoose = require('mongoose');

const ratingShcema = new mongoose.Schema({
    rate: {type: Number, required: true, min: 0, max: 5},
    rater: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    ratedBook: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
         
});

const ratingModel = mongoose.model("Rating",ratingShcema);

module.exports = ratingModel;