const mongoos = require('mongoose')

const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')

const bookSchema = mongoos.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true,
        minLength: [2,"Name must contain at least 2 character"],
        maxLength: [50,"Name must contain at most 50 character"]
    },
    bookDescription:{
        type: String,
        required: true,
        minLength:[10,"Description must contain at least 10 characters"],
        maxLength: [150,"Description must contain at least 10 characters"]
    },
    bookImage: {
        type: String,
        required: [true, "Book image is required"]
    },
    bookCategory: {
        type: mongoos.Schema.Types.ObjectId,
        ref: 'categories'
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