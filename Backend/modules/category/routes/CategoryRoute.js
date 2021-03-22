const express = require('express')
const CategoryController = require('../controllers/CategoryController')

const categoryRouter = express.Router()

categoryRouter.get("/", (request, response, next)=> {
    CategoryController.index(request, response, next);   
}) 

categoryRouter.get("/:id", (request, response, next)=> {
    CategoryController.show(request, response, next);
})

categoryRouter.get("/:name", (request, response, next)=> {
    CategoryController.search(request, response, next);
})

categoryRouter.post("/", (request, response, next)=> {
    CategoryController.store(request, response, next);
})

categoryRouter.patch("/:id", (request, response, next)=> {
    CategoryController.update(request, response, next);
})

categoryRouter.delete("/:id", (request, response, next)=> {
    CategoryController.destroy(request, response, next);
})

module.exports = categoryRouter;
