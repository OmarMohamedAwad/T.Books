const bookModel = require("../models/Book")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const BookPresenter = require("../presenter/BookPresenter")

const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')
const reviewModel = require('../../review/models/Review')
const ratingModel = require('../../rating/models/Rating')
const Author = require("../../author/models/Author")

async function pagination(request, response, next){
    try{
        let { page=1,limit=8} = request.query;
        page < 0 ? page = 1 : page;
        limit < 2 ? limit = 8 : limit;
        
        const booksNumber = await bookModel.estimatedDocumentCount();
        const books = await bookModel.find().populate("bookCategory").populate("bookAuthor")
        .sort('bookName')
        .limit(limit)
        .skip((page-1) * limit).exec();  
        
        const numberOfPages = Math.ceil(booksNumber / limit)
        const presentedBooks = books.map((book)=>{
            return BookPresenter.present(book);
        });
        response.json({
            books: presentedBooks,
            pages: numberOfPages
        });
    }
    catch(err){
        next(err);
    }
}

async function search(request, response, next) {
    const { keyword } = request.params;
    const { page } = request.query;
    console.log("search");
    //trim
    var refactoredKeyword = keyword.replace(/^\s*|\s*$/g, '');
    page < 0 ? page = 1 : page;
    let regex = new RegExp();
    if(refactoredKeyword.length)
        regex= new RegExp(refactoredKeyword,'i');
    try{
        const filterCount = await bookModel.find( {bookName: regex } ) .count(); 
        const filtered = await bookModel.find( {bookName: regex } ).populate("bookCategory").populate("bookAuthor")
            .sort('bookName')
            .limit(8)
            .skip((page-1) * 8)
            .exec();
        const numberOfPages = Math.ceil(filterCount / 8)
        const presentedBooks = filtered.map((book)=>{
            return BookPresenter.present(book);
        });
        console.log(presentedBooks);
        response.json({
            books: presentedBooks,
            pages: numberOfPages
        });
    }
    catch{
        next(ResponseCode.SERVER_ERROR);
    }
}


async function index(request, response, next) 
{
    try
    {
        const bookGetAllResults = await bookModel.find()
            .populate("bookCategory").populate("bookAuthor").exec();        

        response.json(bookGetAllResults.map((book)=>{
            return BookPresenter.present(book);
        }))
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
        //return next(new Error("Listing all book failed"))
    } 
}

async function store(request, response, next) 
{
    const bookRequest = request.body
    const bookInstance = new bookModel({
        bookName: bookRequest.name,
        bookDescription: bookRequest.description,
        bookImage: bookRequest.image,
        bookCategory: bookRequest.category,
        bookAuthor: bookRequest.author,
    })

    try
    {
        const bookPosted = await bookInstance.save()
        response.json({
            status : ResponseCode.SUCCESS,
            books:BookPresenter.present(bookPosted)})
    }
    catch(e)
    {
        next(e)
    }
}

async function show(request, response, next) 
{
    const { id } = request.params
    try
    {
        const bookGetOneResults = await bookModel.findById(id).populate("bookCategory").populate("bookAuthor").populate("bookReviews").populate("bookRatings").exec();
        response.json(BookPresenter.present(bookGetOneResults));
    }
    catch(e)
    {
        next(e);
    }
}

async function destroy(request, response, next) 
{
    const { id } = request.params
    try
    {
        const bookDeleteResult = await bookModel.findById(id);
        bookDeleteResult.remove()
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.DELETE_MESSAGE
        });
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
    }

}

async function update(request, response, next) 
{
    const { id } = request.params
    const bookRequest = request.body

    const bookInstance = {
        ...(bookRequest.name) ? {bookName: bookRequest.name} : {},
        ...(bookRequest.description) ? {bookDescription: bookRequest.description} : {},
        ...(bookRequest.image) ? {bookImage: bookRequest.image} : {},
    }

    try
    {
        let bookDoc = await bookModel.findById({ _id: id });
        await bookModel.updateOne({_id: id}, bookInstance);

        // check if category or author changed and update it
        if (bookRequest.category && bookRequest.author) {
            bookDoc.bookCategory = bookRequest.category;
            bookDoc.bookAuthor = bookRequest.author;            
        }else if (bookRequest.category){
            bookDoc.bookCategory = bookRequest.category;
        }else if (bookRequest.category){
            bookDoc.bookAuthor = bookRequest.author;            
        }
        bookDoc.save()

        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.UPDATE_MESSAGE
        });
    }
    catch(e)
    {
        next(e)
    }
}

module.exports = {
    index,
    store,
    search,
    show,
    destroy,
    update,
    pagination
}