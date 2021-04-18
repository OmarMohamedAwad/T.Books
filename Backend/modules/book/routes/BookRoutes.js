const express = require('express');
const bookModel = require('../models/Book');
const bookController = require('../controllers/BookController')
const checkAccessToken = require('../../../middlewares/middleware')
const Role = require("../../../helpers/Role")


const booksRouter = express.Router()

booksRouter.get('/', (request, response, next)=>{
    console.log("hi")
    bookController.index(request, response, next);
})

booksRouter.get("/pages", (request, response, next)=> {
    bookController.pagination(request, response, next);   
})

booksRouter.get("/search/:keyword", (request, response, next)=> {
    bookController.search(request, response, next);   
})

booksRouter.get('/:id', (request,response, next)=>{
    bookController.show(request, response, next);
})

// , checkAccessToken(Role.ADMIN)
booksRouter.post('/', (request, response, next)=>{
    bookController.store(request, response, next);
})

// , checkAccessToken(Role.ADMIN)
booksRouter.patch('/:id', (request,response,next)=>{
    bookController.update(request, response, next); 
})

// , checkAccessToken(Role.ADMIN)
booksRouter.delete('/:id', (request, response, next)=>{
    bookController.destroy(request, response, next);
})

module.exports = booksRouter;