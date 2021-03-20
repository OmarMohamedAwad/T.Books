const express = require('express')
const AutherAccessController = require('../controllers/AuthorController')

const autherRouter = express.Router()

autherRouter.get("/", (request, response, next)=> {
    AutherAccessController.index(request, response, next);   
}) 

autherRouter.post("/", async (request, response, next)=> {
    AutherAccessController.store(request, response, next);
})

autherRouter.get("/:id",async (request, response, next)=> {
    AutherAccessController.show(request, response, next);
})

autherRouter.delete("/:id", async (request, response, next)=> {
    AutherAccessController.destroy(request, response, next);
})

autherRouter.patch("/:id", async (request, response, next)=> {
    AutherAccessController.update(request, response, next);
})

module.exports = autherRouter;