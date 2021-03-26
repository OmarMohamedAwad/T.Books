const express = require('express')
const CategoryController = require('../controllers/CategoryController')
//var ObjectId = require('mongoose').Types.ObjectId;

const categoryRouter = express.Router()

categoryRouter.get("/", (request, response, next)=> {
    CategoryController.index(request, response, next);   
}) 

categoryRouter.post("/", (request, response, next)=> {
    CategoryController.store(request, response, next);
})

categoryRouter.get("/:path", (request, response, next)=> {
    const { path } = request.params
    if (path.match(/^[0-9a-fA-F]{24}$/))
        CategoryController.show(request, response, next);
    else
        CategoryController.search(request, response, next);
})

categoryRouter.patch("/:id", (request, response, next)=> {
    CategoryController.update(request, response, next);
})

categoryRouter.delete("/:id", (request, response, next)=> {
    CategoryController.destroy(request, response, next);
})

module.exports = categoryRouter;
