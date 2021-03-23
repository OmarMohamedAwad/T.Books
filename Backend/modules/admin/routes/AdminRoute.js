const express = require('express')
const AdminController = require('../controllers/AdminController')

const adminRouter = express.Router()

adminRouter.post("/", (request, response, next)=> {
    AdminController.store(request, response, next);
})

adminRouter.patch("/:id", (request, response, next)=> {
    AdminController.update(request, response, next);
})

module.exports = adminRouter;