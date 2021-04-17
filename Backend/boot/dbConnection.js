require("../boot/requires");
const mongoose = require('mongoose')
const MONGODB_URL = "mongodb+srv://T-Book:T-Book@t-book.qsljh.mongodb.net/trending_books?retryWrites=true&w=majority" || process.env.MONGODB_URL;
/*"mongodb://localhost:27017/trending_books"*/

mongoose.connect(MONGODB_URL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    },(error)=>{
        if (error) console.log(error);
        else console.log("Connected to DB"); 
})