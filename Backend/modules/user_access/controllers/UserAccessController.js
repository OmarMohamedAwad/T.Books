require("../../../boot/requires");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../../user/models/User");

const UserAccessController = async function (req , res , next){
    console.log("User Login");
    try
    {
        let user = await User.findOne({userName: req.body.userName})
        if(user)
        {
            console.log(user);
            try{
                let check = await bcrypt.compareSync(req.body.userPassword , user.userPassword)
                if(check)
                {
                    let token = jwt.sign({user}, process.env.USER_ACCESS_TOKEN_SECRET , {expiresIn: '30m'});
                    res.json({token});
                    next()
                }
                else
                {
                    next("password is wrong");
                }
            }
            catch(err)
            {
                next("error in bcryption method")
            }
        }
        else
        {
            next("no such user")
        }
    }
    catch(err){
        next("can't use database to find the user")
    }
}

module.exports = UserAccessController;