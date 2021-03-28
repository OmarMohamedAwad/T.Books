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
    //delete review drom user //still
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
    //remove rating from user //still
    try
    {
        if(this.bookRatings.length > 0)
            await ratingModel.deleteMany({ratedBook: this._id});
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
    }

    // Delete Book From User //3documention
});

bookSchema.pre('deleteOne',async function(){
    const categories = require('../../category/models/Category');   
    const reviews = require('../../review/models/Review');  
    const ratings = require('../../rating/models/Rating');  
    const users = require('../../user/models/User'); 
    const deletedBook = await BookModel.findById(this._conditions._id)
    try
    {
        await removeDependencies(this._conditions._id);

        await users.updateMany({} , {$pull: {currentlyReadedBooks: this._conditions._id}})
        console.log(("removed the book from user(current read) correctly"))
        await users.updateMany({} , {$pull: {wantToReadedBooks: this._conditions._id}})
        console.log("removed the book from user(want to read) correctly")
        await users.updateMany({} , {$pull: {readBooks: this._conditions._id}})
        console.log(("removed the book from user(read books) correctly"))
        //delete all reviews for this book
        for (const index in deletedBook.bookReviews)
        {
            //console.log(deletedAuthor.authorBooks[index])
            await reviews.deleteOne({_id: index})
        }
        //delete all ratings for this book
        for (const index in deletedBook.bookRatings)
        {
            //console.log(deletedAuthor.authorBooks[index])
            await ratings.deleteOne({_id: index})
        }

        // await reviews.deleteMany({reviewedBook: this._conditions._id})
        // console.log(("removed the book from review correctly"))

        // await ratings.deleteMany({ratedBook: this._conditions._id})
        // console.log(("removed the book from rating correctly"))
    }
    catch(e)
    {
        next(new Error("can't remove dependencies"))
    }
})

var BookModel = mongoos.model('Book', bookSchema);

module.exports = BookModel;