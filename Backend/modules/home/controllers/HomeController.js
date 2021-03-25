//const Home = require("../models/Home")
const Book = require("../../book/models/Book")
const Author = require("../../author/models/Author")
const Category = require("../../category/models/Category")
const ResponseCode = require("../../../responses-code")
const ResponseMessage = require("../../../responses-message")
const { db } = require("../../category/models/Category")

async function index(request, response, next) {
    try {
        const category = await Category.find().sort({ 'categoryBooks.length': -1 }).limit(20);
        //const category = await Category.find({$sort: {$size: $categoryBooks}})//.limit(20);
        //const author = await Author.find().sort({'authorDob': 1}).limit(20);
        //const books = await Book.find({}).sort({}).limit(20);
        response.json(category)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
        //response.json(error)
    }  
}


module.exports = {
    index
}