const bookModel = require("../models/Book")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")

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
        //console.log(bookGetAllResults)
        response.json(bookGetAllResults)
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
        //console.log(bookPost)
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
        console.log(bookGetOneResults)
        response.json(bookGetOneResults);
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
        console.log(e);
        next(ResponseCode.SERVER_ERROR)
    }
    
}

async function update(request, response, next) 
{
    const { id } = request.params
    const bookRequest = request.body

    const bookInstance = {
        ...(request.body.bookName) ? {bookName: request.body.bookName} : {},
        ...(request.body.bookDescription) ? {bookDescription: request.body.bookDescription} : {},
        ...(request.body.bookImage) ? {bookImage: request.body.bpostookImage} : {},
        // the fellowing two may never be used
        ...(bookRequest.reviews) ? {bookReviews: bookRequest.reviews} : {},
        ...(bookRequest.ratings) ? {bookRatings: bookRequest.ratings} : {},
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
        console.log(e.name);
        next(e)
    }
}

module.exports = {
    index,
    store,
    show,
    destroy,
    update
}