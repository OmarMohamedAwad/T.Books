//const Home = require("../models/Home")
const Book = require("../../book/models/Book")
const Rating = require("../../rating/models/Rating")
const Author = require("../../author/models/Author")
const Category = require("../../category/models/Category")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const { db } = require("../../category/models/Category")

const NUMBER_OF_BOOK_ITEMS = 6;
const NUMBER_OF_AUTHOR_ITEMS = 6;
const NUMBER_OF_CATEGORY_ITEMS = 6;

async function index(request, response, next) {
    try {
        //const category = await Category.find().sort({ 'categoryBooks.size': 1 }).limit(1);
        //const category = await Category.find({$sort: {$size: "categoryBooks"}})//.limit(20);
        //const category = await Category.find().sort({categoryBooks: -1}).limit(1)
        //const category = await Category.aggregate({ $unwind: "$categoryBooks" })//, { $group : {_id:'$_id', numberOfBooks:{$sum:1}}}, { $sort :{ numberOfBooks: 1}} , {$limit: 1});
        //const author = await Author.aggregate([{ $group : {_id:'$_id' }}, { $sort :{ authorDob: -1}} , {$limit: 2}]);
        
        //const categories = await Category.aggregate([{ $unwind: "$categoryBooks" } , { $group : {_id:'$_id', numberOfBooks:{$sum:1}}}, { $sort :{ numberOfBooks: -1}} , {$limit: 6}]);
        //const authors = await Author.find({} , {_id: true}).sort({'authorDob': 1}).limit(6)
        //let books = await Rating.aggregate([{ $group : {_id:'$ratedBook', avg:{$sum: {$toInt: '$rate'}}}}, {$sort: { avg: -1 }} , {$limit: 6}])
        //console.log(books.length)
        //const book = await Rating.aggregate([ { $addFields: { "userId": { $toObjectId: "$ratedBook" }}} , {$lookup: {from: "books" , localField: "userId" , foreignField: "_id" , as: "bookDetails"}}])
        //,  bookName: {$last: '$bookName'}  , bookImage: {$last: "$bookImage"} , bookCategory: {$last: "$bookCategory"} , bookAuthor: {$last: "$bookAuthor"} 



        // let books = await Rating.aggregate([
        //     { $addFields: { "bookId": { $toObjectId: "$ratedBook" }}}, 
        //     { $lookup: {from: "books" , localField: "bookId" , foreignField: "_id" , as: "bookDetails" }}, 
        //     { $group : {_id: "$ratedBook", 
        //                 avg: {$avg: {$toInt: '$rate'}}, 
        //                 details:{$first: {$last: "$bookDetails"} } } },
        //     { $sort: { avg: -1 } }, 
        //     { $limit: NUMBER_OF_BOOK_ITEMS} ]);

            // books.forEach((i)=> {
            //     i.bookName = i.details.bookName;
            //     i.bookCategory = i.details.bookCategory;
            //     i.bookAuthor = i.details.bookAuthor;
            //     i.bookImage = i.details.bookImage;
            //      delete i.details;
            // })


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
        const authors = await Author.find({} , {authorBooks: false , __v: false , authorDob: false}).sort({'authorDob': 1}).limit(NUMBER_OF_AUTHOR_ITEMS)

        // // book data
        // let books = await Rating.aggregate([
        //     { $addFields: { "userId": { $toObjectId: "$ratedBook" }}}, 
        //     { $lookup: {from: "books" , localField: "userId" , foreignField: "_id" , as: "bookDetails" }}, 
        //     { $group : {_id: "$ratedBook", 
        //                 avg: {$sum: {$toInt: '$rate'}}, 
        //                 bookName: { $first:  {$last: '$bookDetails.bookName'} }, 
        //                 bookImage: { $first:  {$last: "$bookDetails.bookImage"} }, 
        //                 bookCategory: { $first: {$last: "$bookDetails.bookCategory"} }, 
        //                 bookAuthor: { $first: {$last: "$bookDetails.bookAuthor" } } } }, 
        //     { $sort: { avg: -1 } }, 
        //     { $limit: NUMBER_OF_BOOK_ITEMS} ]);


        // if(books.length < NUMBER_OF_BOOK_ITEMS)
        // {
        //     const moreBooks = await Book.find({ bookRatings: {$exists: false} }, {bookRatings: false , bookDescription: false , bookReviews: false })
        //     if(moreBooks.length > 0)
        //         books = moreBooks.concat(books);
        // }


        let books = await Rating.aggregate([
        { $addFields: { "bookId": { $toObjectId: "$ratedBook" }}}, 
        { $lookup: {from: "books" , localField: "bookId" , foreignField: "_id" , as: "bookDetails" }}, 
        { $group : {_id: "$ratedBook", avg: {$avg: {$toInt: '$rate'}}, 
          details:{$first: {$last: "$bookDetails"} } } },
        { $sort: { avg: -1 } }, 
        { $limit: NUMBER_OF_BOOK_ITEMS} ]);
        
        books.forEach((i)=> {
        i.bookName = i.details.bookName;
        i.bookCategory = i.details.bookCategory;
        i.bookAuthor = i.details.bookAuthor;
        i.bookImage = i.details.bookImage;
        delete i.details;
        })

       
        const homeJson = {
            "books": books,
            "authors": authors,
            "categories": categories
        }
        response.json(homeJson)
    } catch (error) {
    
        // next(ResponseCode.SERVER_ERROR)
        console.log(error)
        //response.json(error)
    }  
}


module.exports = {
    index
}