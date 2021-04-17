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
settingRouter.post("/", checkAccessToken(Role.ADMIN), (request, response, next)=> {
    store(request, response, next);
})
settingRouter.patch("/:id", checkAccessToken(Role.ADMIN), async (request, response, next)=> {
    update(request, response, next);
})

settingRouter.delete("/:id", checkAccessToken(Role.ADMIN), async (request, response, next)=> {
    destroy(request, response, next);
})
checkAccessToken(Role.ADMIN)
module.exports = settingRouter;