const bookModel = require("../models/Book")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const BookPresenter = require("../presenter/BookPresenter")

const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')
const reviewModel = require('../../review/models/Review')
const ratingModel = require('../../rating/models/Rating')
const Author = require("../../author/models/Author")

async function index(request, response, next) 
{
    try
    {
        const bookGetAllResults = await bookModel.find({})
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
        response.json(bookPosted)
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
        const bookGetOneResults = await bookModel.findById(id)
                    .populate("bookCategory").populate("bookAuthor").exec();
        response.json(BookPresenter.present(bookGetOneResults));
    }
    catch(e)
    {
        next(e);
    }
}

async function pagination(request, response, next){
    try{
        //page and limit are default value 
        const { page=1,limit=2} = request.query;
       
        const books = await bookModel.find()
        const booksNumber = books.count();
        const booksTosend = books.sort('bookName')
        .limit(limit *1)
        .skip((page-1) * limit).exec();          
        const bookPages = booksNumber / limit;
        booksTosend.unshift({bookPages: bookPages}) //to put the number of pages at first
        response.send(booksTosend);
    }
    catch(err){
        next(err);
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
        console.log(e);
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
    show,
    destroy,
    update,
    pagination
}