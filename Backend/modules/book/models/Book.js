const mongoos = require('mongoose')

const bookSchema = mongoos.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true,
        minLength:3
    },
    bookDescription:{
        type: String,
        required: true,
        minLength:10
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

var BookModel = mongoos.model('Book', bookSchema);

module.exports = BookModel;