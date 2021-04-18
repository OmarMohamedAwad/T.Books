const express = require('express')
const {index,store,show,update,destroy,pagination, paginationBooks, updateBookList} = require('../controllers/UserController')

const User = require('../models/User');
const Book = require('../../book/models/Book')
//const advancedResults = require('../../../middlewares/advancedQueries');

const userRouter = express.Router()

const checkAccessToken = require("../../../middlewares/middleware")
const Role = require("../../../helpers/Role")

// , checkAccessToken(Role.USER)
userRouter.get("/", (request, response, next)=> {
    index(request, response, next);   
}) 

// ,checkAccessToken(Role.USER)
userRouter.get("/pages", (request, response, next)=> {
    const { userId,type,page=1,limit=2,book} = request.query;
    if(userId){
        if(book){}
        else
            paginationBooks(request, response, next); 
    }
    else
        pagination(request, response, next);   
}) 

// , checkAccessToken(Role.USER)
userRouter.get("/:id", async (request, response, next)=> {
    show(request, response, next);
})

userRouter.post("/", (request, response, next)=> {
    store(request, response, next);
})

// , checkAccessToken(Role.ADMIN)
userRouter.patch("/:id", async (request, response, next)=> {
    update(request, response, next);
})

// checkAccessToken(Role.USER)
userRouter.post("/:id/update-books",async (request, response, next)=> {
    updateBookList(request, response, next);
})

// ,checkAccessToken(Role.ADMIN)
userRouter.delete("/:id", async (request, response, next)=> {
    destroy(request, response, next);
})

module.exports = userRouter;