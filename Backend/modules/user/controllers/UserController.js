const ErrorResponse = require('../../../helpers/errorResponse');
const User = require("../../user/models/User")
const bcrypt = require('bcrypt');
const bookModel = require('../../book/models/Book');
const reviewModel = require('../../review/models/Review');
const ratingModel = require('../../rating/models/Rating');

async function index(request, response,next) {

    try {
        const users = await User.find();
        console.log(users)
        response.status(200).json(users);

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
        .json(
            {
                "user Name ":user.userName,
                "Email ":user.email,
                "First Name":user.fName, 
                "Last Name":user.lName,
                "avatar":user.userImage 
            }
        );

    } catch (err) {
        next(err);
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
        
        const alreadyRegister = await User.find({email});
        console.log(alreadyRegister);
      if(!request.body){
            response.status(400).send({err:"Content can not be empty!"});
        }
       if(alreadyRegister.length) {
           
            return response.status(409).json({err:"Email is already used!"})
        }
        const newUser=new User(
        {
        userName     : userName,
        fName        : fName,
        lName        : lName,
        email        : email,
        userPassword : userPassword,
        userIamge    : userIamge
        })
        await newUser.save();
        response.status(200)
        .json(newUser);
    } catch (err) {
       next(err);
    }

}

async function update(req,res){
    const updatedUser = {
        ...(req.body.userName) ? {userName: req.body.userName} : {},
        ...(req.body.fName) ? {fName: req.body.fName} : {},
        ...(req.body.lName) ? {lName: req.body.lName} : {},
        ...(req.body.email) ? {email: req.body.email} : {},
        ...(req.body.userPassword) ? {userPassword: req.body.userPassword} : {},
        ...(req.body.userImage) ? {userIamge: req.body.userIamge} : {}
    }
    try
    {
        const userNewData = await bookModel.findOneAndUpdate({_id: req.params.userId}, 
            updatedUser )
        res.send("User updated successfully")
    }
    catch(e)
    {
        next(err);
    }
}

async function destroy(req, res,next){
    const {id} = req.params;
    try {
      const result = await User.deleteOne({_id: req.params.userId});
      res.json("User deleted successfully!");
    } catch (err) {
        next(err);
    }
     try
     {
         const res = await bookModel.deleteOne({currentlyReadedBooks: req.params.userId});
     } catch(e) {
         next(err)
     }
     
     try{
         const res = await bookModel.deleteOne({wantToReadedBooks: req.params.userId});
     } catch(e) {
         next(err)
     }

      try
      {
          const res = await reviewModel.deleteOne({userReviews: req.params.userId});
      }catch(e) {
          next(err)
      }
      try
      {
          const res = await ratingModel.deleteOne({userRatings: req.params.bookId})     
      }catch(e) {
          next(err)
      }        
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}