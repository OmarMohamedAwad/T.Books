//const Home = require("../models/Home")
const Book = require("../../book/models/Book")
const Rating = require("../../rating/models/Rating")
const Author = require("../../author/models/Author")
const Category = require("../../category/models/Category")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const { db } = require("../../category/models/Category")

const NUMBER_OF_BOOK_ITEMS = 8;
const NUMBER_OF_AUTHOR_ITEMS = 6;
const NUMBER_OF_CATEGORY_ITEMS = 3;

async function index(request, response, next) {
    try {
        // category data
        const categories = await Category.aggregate([
            { $unwind: "$categoryBooks" }, 
            { $group : {_id:'$_id', 
                        numberOfBooks:{$sum:1}, 
                        categoryName: {$last: '$categoryName'}, 
                        categoryImage: {$last: '$categoryImage' } }}, 
            { $sort :{ numberOfBooks: -1}}, 
            {$limit: NUMBER_OF_CATEGORY_ITEMS}]);

        //author data
        const authors = await Author.find({},
                { authorBooks: false,
                __v: false,
                authorDob: false}).
            sort({'authorDob': 1}).
            limit(NUMBER_OF_AUTHOR_ITEMS)

        // book data
        let books = await Rating.aggregate([
            { $addFields: { "userId": { $toObjectId: "$ratedBook" }}}, 
            { $lookup: {from: "books" , localField: "userId" , foreignField: "_id" , as: "bookDetails" }}, 
            { $group : {_id: "$ratedBook", 
                        avg: {$sum: {$toInt: '$rate'}}, 
                        bookName: { $first:  {$last: '$bookDetails.bookName'} }, 
                        bookImage: { $first:  {$last: "$bookDetails.bookImage"} }, 
                        bookCategory: { $first: {$last: "$bookDetails.bookCategory"} }, 
                        bookAuthor: { $first: {$last: "$bookDetails.bookAuthor" } } } },             
            { $sort: { avg: -1 } }, 
            { $limit: NUMBER_OF_BOOK_ITEMS } ]
        );
        //more books if the rated books aren't enough
        if(books.length < NUMBER_OF_BOOK_ITEMS){
            const moreBooks = await Book.find({ bookRatings: [] }, {bookRatings: false , bookDescription: false , bookReviews: false }).limit(NUMBER_OF_BOOK_ITEMS - books.length)
            if(moreBooks.length > 0){
                books = books.concat(moreBooks);
                console.log(books)
            }     
        }
        //get author names
        for(let i = 0; i < NUMBER_OF_BOOK_ITEMS; i++){
            console.log(await Author.find({_id: books[i].bookAuthor} , {autherFirstName: 1}))
            let x = await Author.find({_id: books[i].bookAuthor} , {autherFirstName: 1})
            console.log(x)
            books[i].bookAuthor = x[0];
        }

        const homeJson = {
            "books": books,
            "authors": authors,
            "categories": categories
        }
        response.json(homeJson)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
        console.log(error)
    }  
}

module.exports = {
    index
}