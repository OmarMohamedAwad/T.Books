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

const booksRouter = require('./modules/book/routes/BookRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

app.use("/BookRoutes", booksRouter)

app.listen(process.env.PORT , (err) => {
    if(err)
        console.log("the port " + process.env.PORT  + " is busy");
    else
        console.log("thse server started correcttly on port " + process.env.PORT );
});

 
//end point for user login
// app.use("/userlogin" , UserAccess);

app.use("/admin" , Admin);

//end point for author
app.use("/author" , Author);

//end point for admin login
//app.use("/admin-login" , AdminAccess);

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
