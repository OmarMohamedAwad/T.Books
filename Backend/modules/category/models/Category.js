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
    const BookModel = require('../../book/models/Book')
    try
    {
        const deletedCategory = await Category.findById(this._conditions._id)
        for (const index in deletedCategory.categoryBooks)
        {
            //console.log(deletedCategory.categoryBooks[index])
            await BookModel.findOneAndDelete({_id: deletedCategory.categoryBooks[index]})
        }
        console.log("Books deleted successfully")
    }
    catch(e)
    {
        next(new Error("Deleting books failed"))
    }
})

/*
categorySchema.pre('deleteOne',async function(){
    const BookModel = require('../../book/models/Book')
    try
    {
        await BookModel.updateMany({ bookCategory: this._conditions._id }, { bookCategory: "none" });
    }
    catch(e)
    {
        next(new Error("Updating books failed"))
    }
})
*/
const Category = mongoose.model("Category" , categorySchema);
module.exports = Category;