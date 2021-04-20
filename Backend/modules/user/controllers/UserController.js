const ErrorResponse = require('../../../helpers/errorResponse');
const User = require("../../user/models/User");
const Type = require("../BooksType");
const bcrypt = require('bcrypt');
const bookModel = require('../../book/models/Book');
const reviewModel = require('../../review/models/Review');
const ratingModel = require('../../rating/models/Rating');
const userPresenter = require("../presenter/userPresenter");
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const Author = require("../../author/models/Author");

async function index(request, response, next) {

    try {
        const users = await User.find();
        console.log(users);
        response.json(users.map((user) => {
            return userPresenter.present(user);
        }))

    } catch (err) {
        next(err);
    }
}

async function show(request, response, next) {
    try {
        const { id } = request.params;
        console.log(id)
        const user = await User.findById(id);
        response.status(200)
        response.json(userPresenter.present(user)); data
    }
    catch (err) {

    }

}

async function pagination(request, response, next) {
    try {
        //page and limit are default value 
        const { page = 1, limit = 2 } = request.query;

        const users = await User.find()
            .sort('userName')
            .limit(limit * 1)
            .skip((page - 1) * limit).exec();
        response.send(users);
    }
    catch (err) {
        next(err);
    }
}
async function paginationBooks(request, response, next) {
    try {
        //page and limit are default value 
        const { userId, booktype, page = 1, limit = 4, bookName } = request.query;

        let res = [];
        switch (booktype) {
            case 'All':
                arrayOfData = await getProfileData("readBooks", userId)
                res = await userPresenter.profilePresenter(arrayOfData, 'read', userId)
                arrayOfData = await getProfileData("currentlyReadedBooks", userId)
                res = res.concat(await userPresenter.profilePresenter(arrayOfData, 'CurrentReading', userId))
                arrayOfData = await getProfileData("wantToReadedBooks", userId)
                res = res.concat(await userPresenter.profilePresenter(arrayOfData, 'WantToRead', userId))
                break;
            case "Read":
                arrayOfData = await getProfileData("readBooks", userId)
                res = await userPresenter.profilePresenter(arrayOfData, 'read', userId)
                break;
            case 'CurrentReading':
                arrayOfData = await getProfileData("currentlyReadedBooks", userId)
                res = await userPresenter.profilePresenter(arrayOfData, 'CurrentReading', userId)
                break;
            case 'WantToRead':
                arrayOfData = await getProfileData("wantToReadedBooks", userId)
                res = await userPresenter.profilePresenter(arrayOfData, 'WantToRead', userId)
                break;
        }
        //serach part
        if (bookName) {
            let searchArray = []
            for (let i = 0; i < res.length; i++) {
                if (res[i].name.includes(bookName))
                    searchArray.push(res[i])
            }
            res = searchArray;
        }
        //pagination part
        responsePage = {}
        responsePage.bookNumbers = res.length
        responsePage.pagebooks = []
        for (let i = (page - 1) * limit; i < page * limit && i < res.length; i++)
            responsePage.pagebooks.push(res[i])

        response.send(responsePage)
    }
    catch (err) {
    }
}

async function store(request, response, next) {

    try {

        const {
            userName,
            fName,
            lName,
            email,
            userPassword,
            userIamge,
        } = request.body;

        const alreadyRegister = await User.find({ email });
        console.log(alreadyRegister);
        if (!request.body) {
            response.status(400).send({ err: "Content can not be empty!" });
        }
        if (alreadyRegister.length) {

            return response.status(409).json({ err: "Email is already used!" })
        }
        const newUser = new User(
            {
                userName: userName,
                fName: fName,
                lName: lName,
                email: email,
                userPassword: userPassword,
                userIamge: userIamge
            })
        await newUser.save();
        response.status(200)
            .json(userPresenter.present(newUser));
    } catch (err) {
        next(err);
    }

}

async function update(req, res) {
    const updatedUser = {
        ...(req.body.userName) ? { userName: req.body.userName } : {},
        ...(req.body.fName) ? { fName: req.body.fName } : {},
        ...(req.body.lName) ? { lName: req.body.lName } : {},
        ...(req.body.email) ? { email: req.body.email } : {},
        ...(req.body.userPassword) ? { userPassword: req.body.userPassword } : {},
        ...(req.body.userImage) ? { userIamge: req.body.userIamge } : {}
    }
    try {
        const userNewData = await bookModel.findOneAndUpdate({ _id: req.params.userId },
            updatedUser)
        res.send("User updated successfully")
    }
    catch (e) {
        next(e);
    }
}

async function updateBookList(req, res, next) {
    const { id } = req.params;
    console.log(id);
    const {
        bookId,
        type
    } = req.body;

    if (type && bookId) {
        try {
            await bookModel.updateOne({ _id: bookId }, {
                $pull: {
                    currentlyReader: id,
                    wantToReadeUsers: id,
                    finishReadUsers: id
                }
            })
            await User.updateOne({ _id: id }, {
                $pull: {
                    wantToReadedBooks: bookId,
                    currentlyReadedBooks: bookId,
                    readBooks: bookId
                }
            })
            switch (type) {
                case Type.WANT_TO_READ:
                    await User.updateOne({ _id: id }, { $push: { wantToReadedBooks: bookId } })
                    await bookModel.updateOne({ _id: bookId }, { $push: { wantToReadeUsers: id } })
                    break;
                case Type.CURRANT_READ:
                    await User.updateOne({ _id: id }, { $push: { currentlyReadedBooks: bookId } })
                    await bookModel.updateOne({ _id: bookId }, { $push: { currentlyReader: id } })
                    break;
                case Type.READ:
                    await User.updateOne({ _id: id }, { $push: { readBooks: bookId } })
                    await bookModel.updateOne({ _id: bookId }, { $push: { finishReadUsers: id } })
                    break;
                default:
                    break;
            }
            res.json({
                status: ResponseCode.SUCCESS,
                message: ResponseMessage.UPDATE_MESSAGE
            });
        }
        catch (e) {
            next(e);
        }
    }
}

async function destroy(req, res, next) {
    const { id } = req.params;
    try {
        const result = await User.deleteOne({ _id: req.params.userId });
        res.json("User deleted successfully!");
    } catch (err) {
        next(err);
    }
}

async function getProfileData(typeOfArray, userId) {
    const User = require("../../user/models/User")
    var books;
    let check = await User.find({ _id: userId });
    if (check[0][typeOfArray].length) {
        books = await User.find({ _id: userId }, { typeOfArray: 1 }).populate(typeOfArray).populate({
            path: typeOfArray,
            populate: {
                path: 'bookAuthor',
                model: 'Author'
            }
        }).populate({
            path: typeOfArray,
            populate: {
                path: 'bookRatings',
                model: 'Rating'
            }
        })
        return books[0][typeOfArray];
    }
    else {
        return check[0][typeOfArray] = [];
    }
}

module.exports = {
    index,
    show,
    pagination,
    paginationBooks,
    store,
    update,
    destroy,
    updateBookList
}