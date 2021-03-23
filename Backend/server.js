require("./boot/requires");
require('./boot/dbConnection')
const express = require('express');
const jwt = require('jsonwebtoken');
const UserAccess = require("./modules/user_access/routes/UserAccessRoutes");
const AdminAccess = require("./modules/admin_access/routes/AdminAccessRoute");
const Admin = require("./modules/admin/routes/AdminRoute");
const Author = require("./modules/author/routes/AuthorRoute");
const ResponseCode = require("./responses-code")
const ResponseMessage = require("./responses-message")

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
/*app.use(async (req , res , next) => {
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
})*/


app.use("/admin" , Admin);

//end point for author
app.use("/author" , Author);

//end point for admin login
app.use("/admin-login" , AdminAccess);

//check on token
app.use(async (request , response , next) => {

    const bearerHeader = request.headers.authorization; 

    if(typeof bearerHeader !== "undefined")
    {
        const bearer = bearerHeader.split(' ')[1];
        request.token = bearer;
        try{
            response = await jwt.verify(request.token , process.env.ADMIN_ACCESS_TOKEN_SECRET);
        }
        catch(err)
        {
            next("the admin dosen't send right token");

        }
    }

})

app.use((error, request, response, next)=>{
    if (error.name === "ValidationError") {
        let errorsMessage = {};
  
        Object.keys(error.errors).forEach((key) => {
            errorsMessage[key] = error.errors[key].message;
        });

        response.json({
            status: ResponseCode.VALIDATION_ERROR,
            message: errorsMessage
        });
    }else {
        switch (error) {
            default:
                response.json({
                    status: ResponseCode.SERVER_ERROR,
                    message: ResponseMessage.SERVER_ERROR_MESSAGE
                });
                break;
        }
        
    }
})