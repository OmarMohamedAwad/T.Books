const express = require('express');
const UserAccess = express.Router();

// the function in the controller
const UserAccessController = require('../controllers/UserAccessController')


UserAccess.post("/" , async (req , res , next) => {
    await UserAccessController(req , res , next);
})

module.exports = UserAccess;