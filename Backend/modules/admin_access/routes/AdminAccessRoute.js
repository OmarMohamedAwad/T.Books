const express = require('express')
const AdminAccessController = require('../controllers/AdminAccessController')

const adminAccessRouter = express.Router()

adminAccessRouter.post("/", async (request, response, next)=> {
    AdminAccessController.adminLogin(request, response, next);
})

module.exports = adminAccessRouter;