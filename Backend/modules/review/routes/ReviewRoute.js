const express = require('express');
const auth = require('../../../middlewares/middleware');
const Role = require('../../../helpers/Role');

const ReviewController = require('../controllers/ReviewController')

const reviewRouter = express.Router();

reviewRouter.get("/:id" , auth(Role.ADMIN), async (request, response, next) => {
    await ReviewController.show(request, response, next);
})

reviewRouter.post("/" , auth(Role.USER) , async (request, response, next) => {
    await ReviewController.store(request, response, next);
})

reviewRouter.patch("/:id" , auth(Role.USER) , async (request, response, next) => {
    await ReviewController.update(request, response, next);
})

reviewRouter.delete("/:id" , auth(Role.USER) , async (request, response, next) => {
    await ReviewController.destroy(request, response, next);
})

module.exports = reviewRouter;