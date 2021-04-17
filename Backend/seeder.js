const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

'use strict';
//load env 
const PORT = 3000
const MONGODB_URL = "mongodb+srv://T-Book:T-Book@t-book.qsljh.mongodb.net/trending_books?retryWrites=true&w=majority"

//load user model 
const Admin = require('./modules/admin/models/Admin');
const User = require('./modules/user/models/User');
const Setting = require('./modules/setting/models/setting');
const Author = require('./modules/author/models/Author');
const Book = require('./modules/book/models/Book');
const Category = require('./modules/category/models/Category');
const { settings } = require('cluster');
const { Rating } = require('./modules/rating/models/Rating');
/***You Can add Your Model Link here please ***/

//conect to DataBase 
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (error) => {
    if (error) console.log(error);
    else console.log("Connected to DB");
})

//read json files which have data to insert into DataBase
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/user.json`, 'utf-8'));
const setting = JSON.parse(fs.readFileSync(`${__dirname}/_data/setting.json`, 'utf-8'));
const admin = JSON.parse(fs.readFileSync(`${__dirname}/_data/admin.json`, 'utf-8'));
const authors = JSON.parse(fs.readFileSync(`${__dirname}/_data/author.json`, 'utf-8'));
const catgories = JSON.parse(fs.readFileSync(`${__dirname}/_data/category.json`, 'utf-8'));
const books = JSON.parse(fs.readFileSync(`${__dirname}/_data/book.json`, 'utf-8'));
const ratings = JSON.parse(fs.readFileSync(`${__dirname}/_data/rating.json`, 'utf-8'));
/***You Can add Your json File (put data as a json file in folder _data) Link here please  ***/


//import into DB
const importData = async() => {
        try {
            await User.create(users);
            await Setting.create(setting);
            await Admin.create(admin);
            await Author.create(authors);
            await Category.create(catgories);
            await Book.create(books);
            //await Rating.create(ratings);
            console.log('Data Imported Into DB....'.green.inverse);
            process.exit();
        } catch (err) {
            console.error(err);
        }
    }
    //Delete Data 
const deleteData = async() => {
    try {
        await User.deleteMany();
        await Setting.deleteMany();
        await Admin.deleteMany();
        await Author.deleteMany();
        await Category.deleteMany();
        await Book.deleteMany();
        // await Rating.deleteMany();
        /*** Create Your Model.deleteMany(fileJsonVariabe) ***/
        console.log('Data Destoryed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

//To Run The File 
const command = process.argv[2];
if (command === '-i' || command === 'import') {
    importData();
} else if (command === '-d' || command === 'delete') {
    deleteData();
}