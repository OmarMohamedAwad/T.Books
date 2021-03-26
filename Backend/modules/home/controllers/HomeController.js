//const Home = require("../models/Home")
const Book = require("../../book/models/Book")
const Rating = require("../../rating/models/Rating")
const Author = require("../../author/models/Author")
const Category = require("../../category/models/Category")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const { db } = require("../../category/models/Category")

async function index(request, response, next) {
    try {
        //const category = await Category.find().sort({ 'categoryBooks.size': 1 }).limit(1);
        //const category = await Category.find({$sort: {$size: "categoryBooks"}})//.limit(20);
        //const category = await Category.find().sort({categoryBooks: -1}).limit(1)
        //const category = await Category.aggregate({ $unwind: "$categoryBooks" })//, { $group : {_id:'$_id', numberOfBooks:{$sum:1}}}, { $sort :{ numberOfBooks: 1}} , {$limit: 1});
        //const author = await Author.aggregate([{ $group : {_id:'$_id' }}, { $sort :{ authorDob: -1}} , {$limit: 2}]);
        
        const categories = await Category.aggregate([{ $unwind: "$categoryBooks" } , { $group : {_id:'$_id', numberOfBooks:{$sum:1}}}, { $sort :{ numberOfBooks: -1}} , {$limit: 6}]);
        const authors = await Author.find({} , {_id: true}).sort({'authorDob': 1}).limit(6)
        let books = await Rating.aggregate([{ $group : {_id:'$ratedBook', avg:{$sum: {$toInt: '$rate'}}}}, {$sort: { avg: -1 }} , {$limit: 6}])
        //console.log(books.length)
        if(books.length < 6)
        {
            const moreBooks = await (await Book.find({bookRatings: {$size: 0}} , {_id: true})).concat(books)
            books = moreBooks;
        }

        const homeJson = {
            "books": books,
            "authors": authors,
            "categories": categories
        }
        response.json(homeJson)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
        //response.json(error)
    }  
}


module.exports = {
    index
}