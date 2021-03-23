const express = require('express');
const ReviewController = require('../controllers/ReviewController')

const reviewRouter = express.Router();

reviewRouter.get("/:id" , async (request, response, next) => {
    await ReviewController.show(request, response, next);
})

reviewRouter.post("/" , async (request, response, next) => {
    await ReviewController.store(request, response, next);
})

reviewRouter.patch("/:id" , async (request, response, next) => {
    await ReviewController.update(request, response, next);
})

reviewRouter.delete("/:id" , async (request, response, next) => {
    await ReviewController.destroy(request, response, next);
})

module.exports = reviewRouter;