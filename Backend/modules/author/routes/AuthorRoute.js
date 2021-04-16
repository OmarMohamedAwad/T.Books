const express = require('express')
const AutherController = require('../controllers/AuthorController')

const autherRouter = express.Router()

autherRouter.get("/", (request, response, next)=> {
    AutherController.index(request, response, next);   
})

autherRouter.get("/search/:keyword",(request, response, next)=> {
    AutherController.search(request, response, next);   
})

autherRouter.get("/pages", (request, response, next)=> {
    AutherController.pagination(request, response, next);   
}) 

autherRouter.get("/:id", (request, response, next)=> {
    AutherController.show(request, response, next);
})

autherRouter.post("/", (request, response, next)=> {
    AutherController.store(request, response, next);
})

autherRouter.delete("/:id", (request, response, next)=> {
    AutherController.destroy(request, response, next);
})

autherRouter.patch("/:id", (request, response, next)=> {
    AutherController.update(request, response, next);
})

module.exports = autherRouter;