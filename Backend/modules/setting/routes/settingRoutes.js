const express = require('express');
const {index,store,show,update,destroy} = require('../controllers/settingController');

const Setting = require('../models/setting');
const settingRouter = express.Router()


settingRouter.get("/", (request, response, next)=> {
    index(request, response, next);   
}) 
settingRouter.get("/:id",async (request, response, next)=> {
    show(request, response, next);
})
settingRouter.post("/", (request, response, next)=> {
    store(request, response, next);
})
settingRouter.patch("/:id", async (request, response, next)=> {
    update(request, response, next);
})

settingRouter.delete("/:id", async (request, response, next)=> {
    destroy(request, response, next);
})

module.exports = settingRouter;