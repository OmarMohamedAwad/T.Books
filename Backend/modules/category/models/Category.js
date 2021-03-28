const mongoose = require('mongoose')
const ValidationMessage = require('../../../validation-messages');

const categorySchema = mongoose.Schema({
    categoryName: { 
        type: String, 
        unique: [true,ValidationMessage.CATEGORY_NAME_UNIQUE], 
        minLength: [2,ValidationMessage.CATEGORY_NAME_MIN_LENGTH], 
        maxLength: [30,ValidationMessage.CATEGORY_NAME_MAX_LENGTH],
        required: [true,ValidationMessage.CATEGORY_NAME_REQUIRED] 
    },
    categoryBooks: [{
        type:mongoose.Schema.Types.ObjectId, ref: 'Book'
    }],
    categoryImage:{
        type: String,
        required: [true,ValidationMessage.CATEGORY_IMAGE_REQUIRED]
    }
})

categorySchema.pre('deleteOne',async function(){
    // book book-user book-rating book-review book-auther rating-user review-user
    const Book = require('../../book/models/Book')
    try
    {
        await Book.updateMany({bookCategory: this._conditions._id} , {bookCategory: "no suitable category"})
    }
    catch(e)
    {
        next(new Error("can't update all books"))
    }
})


const Category = mongoose.model("Category" , categorySchema);
module.exports = Category;