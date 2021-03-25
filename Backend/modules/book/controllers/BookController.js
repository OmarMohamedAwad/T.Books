const bookModel = require("../models/Book")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")

const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')
const reviewModel = require('../../review/models/Review')
const ratingModel = require('../../rating/models/Rating')


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
    const bookInstance = new bookModel({
        bookName: request.body.name,
        bookDescription: request.body.description,
        bookImage: request.body.image,
        bookCategory: request.body.category,
        bookAuthor: request.body.author,
    })

    try
    {
        console.log(bookInstance);
        const bookPosted = await bookInstance.save()
        console.log()
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
    
    const bookInstance = {
        ...(request.body.bookName) ? {bookName: request.body.bookName} : {},
        ...(request.body.bookDescription) ? {bookDescription: request.body.bookDescription} : {},
        ...(request.body.bookImage) ? {bookImage: request.body.bpostookImage} : {},
        ...(request.body.bookCategory) ? {bookCategory: request.body.bookCategory} : {},
        ...(request.body.bookAuthor) ? {bookAuthor: request.body.bookAuthor} : {},
        // the fellowing two may never be used
        ...(request.body.bookReviews) ? {bookReviews: request.body.bookReviews} : {},
        ...(request.body.bookRatings) ? {bookRatings: request.body.bookRatings} : {},
    }
    try
    {
        await bookModel.findOneAndUpdate({_id: request.params.bookId}, bookInstance);
        response.json({message: ResponseMessage.UPDATE_MESSAGE})
        //res.send("book updated successfully")
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
        //next(new Error("Updating book failed"))
    }
}

module.exports = {
    index,
    store,
    show,
    destroy,
    update
}