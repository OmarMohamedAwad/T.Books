const express = require('express');
const bookModel = require('../models/Book');
const bookController = require('../controllers/BookController')


const booksRouter = express.Router()

booksRouter.get('/', (request, response, next)=>{
    bookController.index(request, response, next);
})

booksRouter.get("/pages", (request, response, next)=> {
    pagination(request, response, next);   
})

booksRouter.get('/:id', (request,response, next)=>{
    bookController.show(request, response, next);
})

booksRouter.post('/', (request, response, next)=>{
    bookController.store(request, response, next);
})

booksRouter.patch('/:id', (request,response,next)=>{
    bookController.update(request, response, next); 
})

booksRouter.delete('/:id', (request, response, next)=>{
    bookController.destroy(request, response, next);
})

module.exports = booksRouter;