const express = require('express')
const AdminController = require('../controllers/AdminController')
const checkAccessToken = require('../../../middlewares/middleware')
const Role = require("../../../helpers/Role")

const adminRouter = express.Router()
// checkAccessToken(Role.ADMIN)
adminRouter.post("/", (request, response, next)=> {
    AdminController.store(request, response, next);
})

adminRouter.patch("/:id", checkAccessToken(Role.ADMIN), (request, response, next)=> {
    AdminController.update(request, response, next);
})

module.exports = adminRouter;