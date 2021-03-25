const bookModel = require("../models/Book")
const ResponseCode = require("../../../responses-code")
const ResponseMessage = require("../../../responses-message")

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
        bookName: request.body.bookName,
        bookDescription: request.body.bookDescription,
        bookImage: request.body.bookImage,
        bookCategory: request.body.bookCategory,
        bookAuthor: request.body.bookAuthor,
    })
    console.log(bookInstance)
    try
    {
        const bookPosted = await bookInstance.save()
        console.log()
        //console.log(bookPost)
        response.json(bookPosted)
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
        //return next(new Error("Saving book failed"))

    }
}

async function show(request, response, next) 
{
    try
    {
        const bookGetOneResults = await bookModel.findById(requset.param.bookId)
                    .populate("bookCategory").populate("bookAuthor").exec();
        //console.log(bookGetOneResults)
        response.json(bookGetOneResults);
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR);
        //next(new Error("Listing some books failed"))
    }
}

async function destroy(request, response, next) 
{
    try
    {
        const bookDeleteResult = await bookModel.deleteOne({_id: request.params.bookId})
        console.log(bookDeleteResult)
        response.json({message: ResponseMessage.DELETE_MESSAGE})
    }
    catch(e)
    {
        //next(new Error("Deleting book failed"))
        next(ResponseCode.SERVER_ERROR)
    }
    // delete book from author collection
    try
    {
        await authorModel.findOneAndUpdate({}, { $pull: { authorBooks: req.params.bookId } })
        console.log("Author updated successfully - book deleted")
    }
    catch(e)
    {
        //next(new Error("Updating author failed - book was not deleted"))
        next(ResponseCode.SERVER_ERROR)
    }
    // delete book from category collection
    try
    {
        await categoryModel.findOneAndUpdate({}, { $pull: { categoryBooks: req.params.bookId } })
        console.log("Category updated successfully - book deleted")
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
        //next(new Error("Updating category failed - book was not deleted"))
    }
    // delete book from review collection
    try
    {
        await reviewModel.deleteOne({reviewedBook: req.params.bookId});
        console.log("Reviews updated successfully - book deleted")
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
        //next(new Error("Updating reviews failed - book was not deleted"))
    }
    // // delete book from rating collection
    try
    {
        await ratingModel.deleteOne({ratedBook: req.params.bookId});
        console.log("Ratings updated successfully - book deleted")
    }
    catch(e)
    {
        next(ResponseCode.SERVER_ERROR)
        //next(new Error("Updating ratings failed - book was not deleted"))
    }
}

/**
 {
   "bookName":"mybook",
    "bookDescription":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bookImage": "zzz.png",
    "bookCategory": "605a2036f163d6047caacfc4",
    "bookAuthor": "605cc012292ba3558c650ada"
}
 */


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