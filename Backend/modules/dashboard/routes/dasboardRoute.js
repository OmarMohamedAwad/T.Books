const express = require('express')
const {count} = require('../controller/dashboardController')

const dashboardRouter = express.Router()


dashboardRouter.get("/", (request, response, next)=> {
    count(request, response, next);   
}) 

module.exports = dashboardRouter;