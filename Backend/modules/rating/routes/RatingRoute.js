const express = require('express')
const RatingController = require('../controllers/RatingController')
const checkAccessToken = require("../../../middlewares/middleware")
const Role = require("../../../helpers/Role")

const ratingRouter = express.Router()


ratingRouter.get("/", (request, response, next)=> {
    RatingController.index(request, response, next);   
}) 

ratingRouter.get("/:id", (request, response, next)=> {
    RatingController.show(request, response, next);   
}) 

ratingRouter.post("/", checkAccessToken(Role.USER), (request, response, next)=> {
    RatingController.store(request, response, next);
})

ratingRouter.patch("/:id", checkAccessToken(Role.USER), (request, response, next)=> {
    RatingController.update(request, response, next);
})

ratingRouter.delete("/:id", checkAccessToken(Role.ADMIN), (request, response, next)=> {
    RatingController.destroy(request, response, next);
})

module.exports = ratingRouter;
