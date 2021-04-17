const express = require('express')
const {index,store,show,update,destroy,pagination, paginationBooks, updateBookList} = require('../controllers/UserController')

const User = require('../models/User');
const Book = require('../../book/models/Book')
//const advancedResults = require('../../../middlewares/advancedQueries');

const userRouter = express.Router()

const checkAccessToken = require("../../../middlewares/middleware")
const Role = require("../../../helpers/Role")


userRouter.get("/", checkAccessToken(Role.USER), (request, response, next)=> {
    index(request, response, next);   
}) 

userRouter.get("/pages",checkAccessToken(Role.USER), (request, response, next)=> {
    const { userId,type,page=1,limit=2,book} = request.query;
    if(userId){
        if(book){}
        else
            paginationBooks(request, response, next); 
    }
    else
        pagination(request, response, next);   
}) 

userRouter.get("/:id", checkAccessToken(Role.USER), async (request, response, next)=> {
    show(request, response, next);
})

userRouter.post("/", (request, response, next)=> {
    store(request, response, next);
})

userRouter.patch("/:id", checkAccessToken(Role.ADMIN) , async (request, response, next)=> {
    update(request, response, next);
})

userRouter.post("/:id/update-books", checkAccessToken(Role.USER),async (request, response, next)=> {
    updateBookList(request, response, next);
})

userRouter.delete("/:id",checkAccessToken(Role.ADMIN), async (request, response, next)=> {
    destroy(request, response, next);
})

module.exports = userRouter;