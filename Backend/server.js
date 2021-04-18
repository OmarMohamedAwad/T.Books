require("./boot/requires");
require('./boot/dbConnection');
const cors = require('cors');
const express = require('express');
const errorHandler = require('./middlewares/error');
const jwt = require('jsonwebtoken');

const Home = require("./modules/home/routes/HomeRoute")
const Admin = require("./modules/admin/routes/AdminRoute");
const Author = require("./modules/author/routes/AuthorRoute");

const booksRouter = require('./modules/book/routes/BookRoutes')
const Access = require("./modules/access/routes/AccessRoutes");
const reviewRouter = require('./modules/review/routes/ReviewRoute');

const UserRouter = require("./modules/user/routes/UserRoute");

const categoryRouter = require('./modules/category/routes/CategoryRoute')

const settingRouter = require('./modules/setting/routes/settingRoutes');
const ratingRouter = require('./modules/rating/routes/RatingRoute');
const dashboardRouter = require('./modules/dashboard/routes/dasboardRoute');
const fileUploadRouter = require('./modules/shared/fileUpload.js')
const app = express();
//app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use((req, res, next) => {
    console.log(new Date(), req.url, req.method)
    next()
})

//end point for home
app.use("/home", Home);

//end point for book
app.use("/book", booksRouter);

//end Point for seeting
app.use("/settings", settingRouter);

//end point for Admin Dashboard
app.use("/dashboard", dashboardRouter)

//end point for admin
app.use("/admin", Admin);

//end point for author
app.use("/author", Author);

//end point for user
app.use("/users", UserRouter);

//end point for access
app.use("/access", Access);

//file upload
app.use('/file', fileUploadRouter)

//end point for review
app.use("/review", reviewRouter);

//end point for category
app.use("/category", categoryRouter);

//end point for rating
app.use("/rating", ratingRouter);

app.listen(process.env.PORT || 3000, (err) => {
    if (err)
        console.log("the port " + process.env.PORT + " is busy");
    else
        console.log("the server started correcttly on port " + process.env.PORT);
});

// error handeler middleware
app.use(errorHandler);