const express = require('express');
const bookModel = require('../models/Book');

const authorModel = require('../../author/models/Author')
const categoryModel = require('../../category/models/Category')
const reviewModel = require('../../review/models/Review')
const ratingModel = require('../../rating/models/Rating')


const booksRouter = express.Router()

booksRouter.get('/', async(req, res, next)=>{
    try
    {
        const bookGetAllResults = await bookModel.find({})
        console.log(bookGetAllResults)
        res.json(bookGetAllResults)
    }
    catch(e)
    {
        next(new Error("Listing all books failed"))
    }
})

booksRouter.get('/:searchedField/:searchedValue', async (req,res, next)=>{
    try
    {
        const field = req.params.searchedField
        const value = req.params.searchedValue
        const bookGetSomeResults = await bookModel.find({field: value})
                    //.populate("bookCategory").populate("bookAuthor").exec()
        console.log(bookGetSomeResults)
        res.json(bookGetSomeResults)
    }
    catch(e)
    {
        next(new Error("Listing some books failed"))
    }
})

booksRouter.post('/', async (req, res, next)=>{
    const bookInstance = new bookModel({
        bookName: req.body.bookName,
        bookDescription: req.body.bookDescription,
        bookImage: req.body.bookImage,
        bookCategory: req.body.bookCategory,
        bookAuthor: req.body.bookAuthor,
    })
    try
    {
        const bookPost = await bookInstance.save()
        console.log(bookPost)
        res.json(bookPost)
    }
    catch(e)
    {
        return next(new Error("Saving book failed"))

    }
})

booksRouter.patch('/:bookId', async (req,res)=>{
    try
    {
        const bookInstance = {
            ...(req.body.bookName) ? {bookName: req.body.bookName} : {},
            ...(req.body.bookDescription) ? {bookDescription: req.body.bookDescription} : {},
            ...(req.body.bookImage) ? {bookImage: req.body.bpostookImage} : {},
            ...(req.body.bookCategory) ? {bookCategory: req.body.bookCategory} : {},
            ...(req.body.bookAuthor) ? {bookAuthor: req.body.bookAuthor} : {},
            // the fellowing two may never be used
            ...(req.body.bookReviews) ? {bookReviews: req.body.bookReviews} : {},
            ...(req.body.bookRatings) ? {bookRatings: req.body.bookRatings} : {},
        }
        try
        {
            const bookPatchResult = await bookModel.findOneAndUpdate({_id: req.params.bookId}, 
                bookInstance )
            console.log(bookPatchResult)
            res.send("book updated successfully")
        }
        catch(e)
        {
            next(new Error("Updating book failed"))
        }
    }
    catch(e)
    {
        next(new Error("Updating book failed"))  
    }
})

booksRouter.delete('/:bookId', async (req,res)=>{
    try
    {
        const bookDeleteResult = await bookModel.deleteOne({_id: req.params.bookId})
        console.log(bookDeleteResult)
        res.send("book deleted successfully")
    }
    catch(e)
    {
        next(new Error("Deleting book failed"))
    }
    // delete book from author collection
    try
    {
        const res = await authorModel.findOneAndUpdate({}, 
                        { $pull: { authorBooks: req.params.bookId } })
        console.log("Author updated successfully - book deleted")
    }
    catch(e)
    {
        next(new Error("Updating author failed - book was not deleted"))
    }
    // delete book from category collection
    try
    {
        const res = await categoryModel.findOneAndUpdate({}, 
                        { $pull: { categoryBooks: req.params.bookId } })
        console.log("Category updated successfully - book deleted")
    }
    catch(e)
    {
        next(new Error("Updating category failed - book was not deleted"))
    }
    // delete book from review collection
    try
    {
        const res = await reviewModel.deleteOne({reviewedBook: req.params.bookId})
        console.log("Reviews updated successfully - book deleted")
    }
    catch(e)
    {
        next(new Error("Updating reviews failed - book was not deleted"))
    }
    // delete book from rating collection
    try
    {
        const res = await ratingModel.deleteOne({ratedBook: req.params.bookId})
        console.log("Ratings updated successfully - book deleted")
    }
    catch(e)
    {
        next(new Error("Updating ratings failed - book was not deleted"))
    }
})

module.exports = booksRouter;