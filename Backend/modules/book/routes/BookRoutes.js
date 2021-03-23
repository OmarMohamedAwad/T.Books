const express = require('express');
const bookModel = require('../models/Book');
const bookController = require('../controllers/BookController')


const booksRouter = express.Router()

booksRouter.get('/', (request, response, next)=>{
    bookController.index(request, response, next);
})

booksRouter.get('/:bookId', (requset,response, next)=>{
    bookController.show(request, response, next);
})

booksRouter.post('/', (request, response, next)=>{
    console.log("hi")   
    bookController.store(request, response, next);
})

booksRouter.patch('/:bookId', (request,response,next)=>{
    bookController.update(request, response, next); 
})

booksRouter.delete('/:bookId', (req,res)=>{
    bookController.destroy(request, response, next);
})

module.exports = booksRouter;