const express = require('express');
const {index,store,show,update,destroy} = require('../controllers/settingController');
const checkAccessToken = require("../../../middlewares/middleware")
const Role = require("../../../helpers/Role")


const Setting = require('../models/setting');
const settingRouter = express.Router()


settingRouter.get("/", (request, response, next)=> {
    index(request, response, next);   
}) 
settingRouter.get("/:id",async (request, response, next)=> {
    show(request, response, next);
})
// , checkAccessToken(Role.ADMIN)
settingRouter.post("/", (request, response, next)=> {
    store(request, response, next);
})

// , checkAccessToken(Role.ADMIN)
settingRouter.patch("/:id", async (request, response, next)=> {
    update(request, response, next);
})

// , checkAccessToken(Role.ADMIN)
settingRouter.delete("/:id", async (request, response, next)=> {
    destroy(request, response, next);
})
checkAccessToken(Role.ADMIN)
module.exports = settingRouter;