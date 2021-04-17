const mongoos = require('mongoose')
const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')
const ratingModel = require('../../rating/models/Rating')
const reviewModel = require('../../review/models/Review')
const ResponseCode = require("../../../response-codes")

const ValidationMessage = require("../../../validation-messages")

const bookSchema = mongoos.Schema({
    bookName: {
        type: String,
        required: [true, ValidationMessage.BOOk_NAME_REQUIRED_ERROR_MESSAGE],
        unique: [true, ValidationMessage.BOOk_NAME_REQUIRED_ERROR_MESSAGE],
        minLength: [2, ValidationMessage.BOOk_NAME_MIN_LENGTH_ERROR_MESSAGE],
        maxLength: [50, ValidationMessage.BOOk_NAME_MAX_LENGTH_ERROR_MESSAGE]
    },
    bookDescription: {
        type: String,
        required: [true, ValidationMessage.BOOk_DESCRIPTION_UNIQUE_ERROR_MESSAGE],
        unique: [true, ValidationMessage.BOOk_DESCRIPTION_REQUIRED_ERROR_MESSAGE],
        minLength: [10, ValidationMessage.BOOk_DESCRIPTION_MIN_LENGTH_ERROR_MESSAGE],
        maxLength: [250, ValidationMessage.BOOk_DESCRIPTION_MAN_LENGTH_ERROR_MESSAGE]

    },
    bookImage: {
        type: String,
        unique: [true, ValidationMessage.BOOk_IMAGE_UNIQUE_ERROR_MESSAGE],
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
    bookReviews: [
        {
            type: mongoos.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    bookRatings: [
        {
            type: mongoos.Schema.Types.ObjectId,
            ref: 'Rating'
        }
    ],
    currentlyReader: [{
        type: mongoos.Schema.Types.ObjectId,
        ref: 'User'
    }],
    wantToReadeUsers: [{
        type: mongoos.Schema.Types.ObjectId,
        ref: 'User'
    }],
    finishReadUsers: [{
        type: mongoos.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

// saving book in categories and authors

bookSchema.post('save', async function (next) {

    if (this.isNew) {
        addDependencies(this, next)
    } else {
        updateDependencies(this, next)
    }

})

// removing book from categorie, author, rating and review 
bookSchema.pre('remove', async function (next) {
    const users = require('../../user/models/User');
    console.log(this);
    try {
        removeDependencies(this, next)
        // // delete book from author collection
        // await authorModel.updateMany({}, { $pull: { authorBooks: this._id } })

        // // delete book from category collection
        // await categoryModel.updateMany({}, { $pull: { categoryBooks: this._id } })
        
        await users.updateMany({} , {$pull: {currentlyReadedBooks: this._id}})
        console.log(("removed the book from user(current read) correctly"))
        await users.updateMany({}, { $pull: { wantToReadedBooks: this._id } })
        console.log("removed the book from user(want to read) correctly")
        await users.updateMany({}, { $pull: { readBooks: this._id } })
        console.log(("removed the book from user(read books) correctly"))
    }
    catch(e)
    {
        console.log(e)
        // next(ResponseCode.SERVER_ERROR)
    }


    // delete book from rating collection and from review collection
    try {
        for (const index in this.bookReviews) {
            //console.log(deletedAuthor.authorBooks[index])
            await reviews.deleteOne({ _id: index._id })
        }

        for (const index in this.bookRatings) {
            //console.log(deletedAuthor.authorBooks[index])
            await ratings.deleteOne({ _id: index._id })
        }
    }
    catch (e) {
        next(ResponseCode.SERVER_ERROR)
    }

});

async function addDependencies(addedBook, next) {
    // add book to author collection
    try {
        const updatingAuthor = await authorModel.updateOne({ _id: addedBook.bookAuthor },
            { $push: { authorBooks: addedBook._id } })

        // add book to category collection
        const updatingCategories = await categoryModel.updateOne({ _id: addedBook.bookCategory },
            { $push: { categoryBooks: addedBook._id } })

    }
    catch (e) {
        next(e)
    }
}

async function removeDependencies(deleteBook, next) {
    // delete book from author collection
    try {
        await authorModel.updateMany({}, { $pull: { authorBooks: deleteBook._id } })

        // delete book from category collection
        await categoryModel.updateMany({}, { $pull: { categoryBooks: deleteBook._id } })
    }
    catch (e) {
        next(e)
    }
}

function updateDependencies(updatedBook, next) {
    removeDependencies(updatedBook, next);
    addDependencies(updatedBook, next);
}

bookSchema.pre('deleteOne', async function (next) {
    const categories = require('../../category/models/Category');
    const reviews = require('../../review/models/Review');
    const ratings = require('../../rating/models/Rating');
    const users = require('../../user/models/User');
    console.log("id:",this._conditions._id);
    const deletedBook = await BookModel.findById(this._conditions.id)
    try {
        await removeDependencies(this._conditions._id, next);

        await users.updateMany({}, { $pull: { currentlyReadedBooks: this._conditions._id } })
        console.log(("removed the book from user(current read) correctly"))
        await users.updateMany({}, { $pull: { wantToReadedBooks: this._conditions._id } })
        console.log("removed the book from user(want to read) correctly")
        await users.updateMany({}, { $pull: { readBooks: this._conditions._id } })
        console.log(("removed the book from user(read books) correctly"))

        if (deletedBook.bookReviews) {
            //delete all reviews for this book
            for (const index in deletedBook.bookReviews) {
                //console.log(deletedAuthor.authorBooks[index])
                await reviews.deleteOne({ _id: index._id })
            }
        }
        
        if (deletedBook.bookRatings) {
            //delete all ratings for this book
            for (const index in deletedBook.bookRatings) {
                //console.log(deletedAuthor.authorBooks[index])
                await ratings.deleteOne({ _id: index._id })
            }
        }

        // await reviews.deleteMany({reviewedBook: this._conditions._id})
        // console.log(("removed the book from review correctly"))

        // await ratings.deleteMany({ratedBook: this._conditions._id})
        // console.log(("removed the book from rating correctly"))
        next()
    }
    catch (e) {
        console.log(e);
        next(new Error("can't remove dependencies"))
    }
})

var BookModel = mongoos.model('Book', bookSchema);

module.exports = BookModel;