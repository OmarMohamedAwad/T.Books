require("../boot/requires");
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    },(error)=>{
        if (error) console.log(error);
        else console.log("Connected to DB");  
})