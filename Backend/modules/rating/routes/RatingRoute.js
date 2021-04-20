const express = require('express')
const RatingController = require('../controllers/RatingController')
const checkAccessToken = require("../../../middlewares/middleware")
const Role = require("../../../helpers/Role")

const ratingRouter = express.Router()


ratingRouter.get("/", (request, response, next)=> {
    RatingController.index(request, response, next);   
}) 

ratingRouter.get("/:id", (request, response, next)=> {
    console.log("show")
    RatingController.show(request, response, next);   
}) 

// , checkAccessToken(Role.USER)
ratingRouter.post("/", (request, response, next)=> {
    RatingController.store(request, response, next);
})

// , checkAccessToken(Role.USER)
ratingRouter.patch("/:bookId/:userId", (request, response, next)=> {
    console.log("update endpoint")
    RatingController.update(request, response, next);
})

// , checkAccessToken(Role.ADMIN)
ratingRouter.delete("/:id", (request, response, next)=> {
    RatingController.destroy(request, response, next);
})

module.exports = ratingRouter;
