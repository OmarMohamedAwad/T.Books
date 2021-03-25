const mongoos = require('mongoose')

const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')
const ratingModel = require('../../rating/models/Rating')
const reviewModel = require('../../review/models/Review')

const ValidationMessage = require("../../../validation-messages")

const bookSchema = mongoos.Schema({
    bookName: {
        type: String,
        unique: [true, ValidationMessage.BOOk_NAME_REQUIRED_ERROR_MESSAGE],
        required: [true, ValidationMessage.BOOk_NAME_REQUIRED_ERROR_MESSAGE],
        minLength: [2,ValidationMessage.BOOk_NAME_MIN_LENGTH_ERROR_MESSAGE],
        maxLength: [50,ValidationMessage.BOOk_NAME_MAX_LENGTH_ERROR_MESSAGE]
    },
    bookDescription:{
        type: String,
        unique: [true, ValidationMessage.BOOk_DESCRIPTION_REQUIRED_ERROR_MESSAGE],
        required: [true, ValidationMessage.BOOk_DESCRIPTION_UNIQUE_ERROR_MESSAGE],
        minLength:[10,ValidationMessage.BOOk_DESCRIPTION_MIN_LENGTH_ERROR_MESSAGE],
        maxLength: [150,ValidationMessage.BOOk_DESCRIPTION_MAN_LENGTH_ERROR_MESSAGE]
    },
    bookImage: {
        type: String,
        unique : [true, ValidationMessage.BOOk_IMAGE_UNIQUE_ERROR_MESSAGE],
        required: [true, ValidationMessage.BOOk_IMAGE_REQUIRED_ERROR_MESSAGE]
    },
    bookCategory: {
        type: mongoos.Schema.Types.ObjectId,
        ref: 'Category'
    },
    bookAuthor: {
        type: mongoos.Schema.Types.ObjectId,
        ref: 'Author'
    },
    bookReviews:[
        { 
        type: mongoos.Schema.Types.ObjectId,
        ref: 'Review' 
        }
    ],
    bookRatings:[
        { 
        type: mongoos.Schema.Types.ObjectId,
        ref: 'Rating' 
        }
    ]
})

// saving book in categories and authors
bookSchema.post('save', async function(){
    console.log("post hock");
    try
    {
        console.log("post hock");
        const updatingCategories = await categoryModel.findOneAndUpdate({_id: this.bookCategory}, 
            { $push: { categoryBooks: this._id } })
        console.log("New book has been added to categorh")
    }
    catch(e)
    {
        next(new Error("Adding new book to category has failed"))
    }
    try
    {
        const updatingAuthor = await authorModel.findOneAndUpdate({_id: this.bookAuthor}, 
            { $push: { authorBooks: this._id } })
        console.log("New book has been added to author")
    }
    catch(e)
    {
        next(new Error("Adding new book to author has failed"))
    } 
    
})

// removing book from categorie, author, rating and review 
bookSchema.pre('remove', async function(next){

    // delete book from author collection
    try
    {
        await authorModel.findOneAndUpdate({}, { $pull: { authorBooks: this._id } })
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
    }

    // delete book from category collection
    try
    {
        await categoryModel.findOneAndUpdate({}, { $pull: { categoryBooks: this._id } })
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
    }

    // delete book from review collection
    try
    {
        if(this.bookReviews.length > 0)
            await reviewModel.deleteMany({reviewedBook: this._id});
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
    }

    // delete book from rating collection
    try
    {
        if(this.bookRatings.length > 0)
            await ratingModel.deleteMany({ratedBook: this._id});
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
    }

    // Delete Book From User 
});

var BookModel = mongoos.model('Book', bookSchema);

module.exports = BookModel;