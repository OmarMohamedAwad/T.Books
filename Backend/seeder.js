const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

'use strict';
//load env 
const PORT=3000
const MONGODB_URL="mongodb://localhost:27017/trending_books"

//load user model 
const User = require('./modules/user/models/User');
const Setting = require('./modules/setting/models/setting');
const { settings } = require('cluster');
/***You Can add Your Model Link here please ***/

//conect to DataBase 
mongoose.connect(MONGODB_URL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    },(error)=>{
        if (error) console.log(error);
        else console.log("Connected to DB");  
})

//read json files which have data to insert into DataBase
const users = JSON.parse(  fs.readFileSync(`${__dirname}/_data/user.json`, 'utf-8'));
const setting = JSON.parse(  fs.readFileSync(`${__dirname}/_data/setting.json`, 'utf-8'));
/***You Can add Your json File (put data as a json file in folder _data) Link here please  ***/


//import into DB
const importData = async()=>{
    try{
        await User.create(users);
        await Setting.create(setting);
        /*** Create Your Model.create(fileJsonVariabe) ***/
        console.log('Data Imported Into DB....'.green.inverse);
        process.exit();
    }
    catch (err){
        console.error(err);
    }
}
//Delete Data 
const deleteData = async()=>{
    try{
        await User.deleteMany();
        await Setting.deleteMany();
          /*** Create Your Model.deleteMany(fileJsonVariabe) ***/
        console.log('Data Destoryed...'.red.inverse);
        process.exit();
    }
    catch (err){
        console.error(err);
    }
}

//To Run The File 
const command = process.argv[2];
if(command === '-i' || command === 'import'){
    importData();
}
else if(command === '-d' || command === 'delete'){
    deleteData();
}
