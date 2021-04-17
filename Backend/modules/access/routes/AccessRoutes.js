const express = require('express')
const AccessController = require('../controllers/AccessController')

const AccessRouter = express.Router()

AccessRouter.post("/admin", async (request, response, next)=> {
    await AccessController.adminAccessController(request, response, next);
})

AccessRouter.post("/user" , async (request, response, next) => {
    await AccessController.userAccessController(request, response, next);
})

AccessRouter.post("/userRegister" , async (request, response, next) => {
    await AccessController.userRegister(request, response, next);
})

AccessRouter.post("/adminLogout", async (request, response, next)=> {
    await AccessController.adminLogout(request, response, next);
})

AccessRouter.post("/userLogout" , async (request, response, next) => {
    await AccessController.userLogout(request, response, next);
})




module.exports = AccessRouter;