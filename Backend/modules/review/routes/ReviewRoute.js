const express = require('express');
const reviewRouter = express.Router();

const ReviewController = require('../controllers/ReviewController')

reviewRouter.get("/:id" , async (req , res , next) => {
    await ReviewController.reviewGetController(req , res , next);
})

reviewRouter.post("/" , async (req , res , next) => {
    await ReviewController.reviewPostController(req , res , next);
})

reviewRouter.patch("/:id" , async (req , res , next) => {
    await ReviewController.reviewPatchController(req , res , next);
})

reviewRouter.delete("/:id" , async (req , res , next) => {
    await ReviewController.reviewDeleteController(req , res , next);
})

module.exports = reviewRouter;