const express = require('express')
const AccessController = require('../controllers/AccessController')

const AccessRouter = express.Router()

AccessRouter.post("/admin", async (request, response, next)=> {
    await AccessController.adminAccessController(request, response, next);
})


AccessRouter.post("/user" , async (request, response, next) => {
    await AccessController.userAccessController(request, response, next);
})

module.exports = AccessRouter;