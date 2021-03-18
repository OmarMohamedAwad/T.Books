const express = require('express');
const userModel = require('../user/models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const loginRouter = express.Router();

loginRouter.post('/', async (req,res,next)=>{
    
    try
    {
        const myUser = await userModel.findOne({ userName: req.body.userName})
        if (!myUser)
        {
          res.sendStatus(403)
        }
        else
        {
            const myPass = await bcrypt.compare( req.body.userPassword, myUser.userPassword )
            if(!myPass)
            {
                res.sendStatus(404)
            }
            else
            {
                const token = await jwt.sign({myUser},'secretkeyHossam', { expiresIn: '40s' })
                res.status(200).json({token})
            }
        }
    }
    catch(err)
    {
        next(new Error("Login Process failed"))
    }
})