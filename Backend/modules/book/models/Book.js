const mongoos = require('mongoose')

const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')

const bookSchema = mongoos.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true,
        minLength: 3,
        maxLength: 32
    },
    bookDescription:{
        type: String,
        required: true,
        minLength:10,
        maxLength: 150
    },
    bookImage: {
        type: String,
    },
    bookCategory: {
        type: mongoos.Schema.Types.ObjectId,
        ref: 'categories'
    },
    bookAuthor: {
        type: mongoos.Schema.Types.ObjectId,
        ref: 'authors'
    },
    bookReviews:[
        { 
        type: mongoos.Schema.Types.ObjectId,
        ref: 'reviwes' 
        }
    ],
    bookRatings:[
        { 
        type: mongoos.Schema.Types.ObjectId,
        ref: 'ratings' 
        }
    ]
    
   
})

// saving book in categories and authors
bookSchema.post('save', async function(){
    try
    {
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

var BookModel = mongoos.model('Book', bookSchema);

module.exports = BookModel;