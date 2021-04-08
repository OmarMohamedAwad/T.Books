const express = require('express');
const auth = require('../../../middlewares/middleware');
const Role = require('../../../helpers/Role');

const ReviewController = require('../controllers/ReviewController')

const reviewRouter = express.Router();

reviewRouter.get("/:id" , auth(Role.ADMIN), (request, response, next) => {
    ReviewController.show(request, response, next);
})

/*
reviewRouter.get("/:id/pages", (request, response, next)=> {
    await ReviewController.pagination(request, response, next);   
})*/ 

reviewRouter.post("/", (request, response, next) => {
    ReviewController.store(request, response, next);
})

reviewRouter.patch("/:id", (request, response, next) => {
    ReviewController.update(request, response, next);
})

reviewRouter.delete("/:id", (request, response, next) => {
    ReviewController.destroy(request, response, next);
})

module.exports = reviewRouter;
