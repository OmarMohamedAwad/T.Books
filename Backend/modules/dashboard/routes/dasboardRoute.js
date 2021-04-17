const express = require('express')
const {count} = require('../controller/dashboardController')
const checkAccessToken = require("../../../middlewares/middleware")
const Role = require("../../../helpers/Role")

const dashboardRouter = express.Router()


dashboardRouter.get("/", checkAccessToken(Role.ADMIN), (request, response, next)=> {
    count(request, response, next);   
}) 

module.exports = dashboardRouter;