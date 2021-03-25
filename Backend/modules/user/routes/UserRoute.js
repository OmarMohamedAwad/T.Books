const express = require('express')
const {index,store,show,update,destroy,pagination} = require('../controllers/UserController')

const User = require('../models/User');
const Book = require('../../book/models/Book')
//const advancedResults = require('../../../middlewares/advancedQueries');

const userRouter = express.Router()


userRouter.get("/", (request, response, next)=> {
    index(request, response, next);   
}) 

userRouter.get("/pages", (request, response, next)=> {
    pagination(request, response, next);   
}) 

userRouter.get("/:id",async (request, response, next)=> {
    show(request, response, next);
})

userRouter.post("/", (request, response, next)=> {
    store(request, response, next);
})

userRouter.patch("/:id", async (request, response, next)=> {
    update(request, response, next);
})

userRouter.delete("/:id", async (request, response, next)=> {
    destroy(request, response, next);
})

module.exports = userRouter;