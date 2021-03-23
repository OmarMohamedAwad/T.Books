
require('path');
require("./boot/requires");
require('./boot/dbConnection');
const express = require('express');
const errorHandler = require('./middlewares/error');
const jwt = require('jsonwebtoken');
// const UserAccess = require("./modules/user_access/routes/UserAccessRoutes");
// const AdminAccess = require("./modules/admin_access/routes/AdminAccessRoute");
const Access = require("./modules/access/routes/AccessRoutes");
const reviewRouter = require('./modules/review/routes/ReviewRoute');

const UserRouter = require("./modules/user/routes/UserRoute");
const userRouter = require("./modules/user/routes/UserRoute");

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


app.use("/users" , userRouter);
app.use(errorHandler);

*/
app.use("/access" , Access);
app.use("/review" , reviewRouter);
