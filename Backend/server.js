require("./boot/requires");
const express = require('express');
const jwt = require('jsonwebtoken');
const UserAccess = require("./modules/user_access/routes/UserAccessRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

app.listen(process.env.PORT , (err) => {
    if(err)
        console.log("the port " + process.env.PORT  + " is busy");
    else
        console.log("thse server started correcttly on port " + process.env.PORT );
});

//end point for user login
app.use("/userlogin" , UserAccess);

//check on token
app.use(async (req , res , next) => {

    console.log("its the authentication check");
    const bearerHeader = req.headers.authorization; 
    console.log(bearerHeader)
    if(typeof bearerHeader !== "undefined")
    {
        const bearer = bearerHeader.split(' ')[1];
        req.token = bearer;
        try{
            res = await jwt.verify(req.token , USER_ACCESS_TOKEN_SECRET);
            next();
        }
        catch(err)
        {
            next("the user dosen't send right token");
        }

    }
    else{
        next("no token yet");
    }
})
