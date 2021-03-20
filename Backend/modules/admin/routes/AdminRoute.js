const express = require('express')
const AdminController = require('../controllers/AdminController')

const adminRouter = express.Router()

adminRouter.post("/", async (request, response, next)=> {
    AdminController.store(request, response, next);
})

adminRouter.patch("/:id", async (request, response, next)=> {
    AdminController.update(request, response, next);
})

module.exports = adminRouter;