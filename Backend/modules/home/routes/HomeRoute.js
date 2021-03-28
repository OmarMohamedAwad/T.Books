const express = require('express')
const HomeController = require('../controllers/HomeController')

const homeRouter = express.Router()

homeRouter.get("/", (request, response, next)=> {
    HomeController.index(request, response, next);   
}) 

module.exports = homeRouter;