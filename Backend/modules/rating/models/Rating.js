const mongoose = require('mongoose');
const User = require('../../user/models/User')
const Book = require('../../book/models/Book')
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

//assign the new rating to its book
ratingShcema.post('save' , async function (request , response , next) {
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

ratingShcema.pre('remove',async function(){
    //rating-book rating-user
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
const ratingModel = mongoose.model("Rating",ratingShcema);
module.exports = ratingModel;