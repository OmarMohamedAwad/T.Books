const express = require('express')
const RatingController = require('../controllers/RatingController')

const ratingRouter = express.Router()

ratingRouter.get("/:id", (request, response, next)=> {
    RatingController.show(request, response, next);   
}) 

ratingRouter.post("/", (request, response, next)=> {
    RatingController.store(request, response, next);
})

ratingRouter.patch("/:id", (request, response, next)=> {
    RatingController.update(request, response, next);
})

ratingRouter.delete("/:id", (request, response, next)=> {
    RatingController.destroy(request, response, next);
})

module.exports = ratingRouter;
