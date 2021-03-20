const express = require('express')
const AutherAccessController = require('../controllers/AuthorController')

const autherRouter = express.Router()

autherRouter.get("/", (request, response, next)=> {
    AutherAccessController.index(request, response, next);   
}) 

// autherRouter.post("/", async (request, response, next)=> {
//     const userRequest = request.body

//     const user = new User ({
//         username: userRequest.username,
//         first_name: userRequest.first_name,
//         last_name: userRequest.last_name,
//         password: userRequest.password,
//         dob: userRequest.dob,
//         gender: userRequest.gender  
//     })

//     try {
//         const savedUser = await user.save()
//         response.json(savedUser)
//     }catch (error){
//         return console.log("Save Error");
//     }
//     // Get User Age
//     console.log(user.getAge());
// })

// autherRouter.get("/:id",async (request, response)=> {
//     const { id } = request.params
//     try {
//         const user = await User.findById(id).populate('posts').exec();
//         response.json(user)
//     } catch (error) {
//         return console.log(error);
//     }
    
// })

// autherRouter.get("/all/:gender", async (request, response,next)=> {
//     const { gender } = request.params
//     try {
//         const usersGender = await User.getUsersByGender(gender);
//         response.send("Users Count= "+usersGender.length);
//     } catch (error) {
//         return console.log(error);
//     }
// })

// autherRouter.delete("/:id", async (request, response)=> {
//     const { id } = request.params
//     try {
//         const deletedUser = await User.deleteOne({_id: id})
//         response.send("Deleted Correctly")
//     }catch(error) {
//         return console.log(error);
//     }

// })

// autherRouter.patch("/:id", async (request, response)=> {
//     const { id } = request.params;
//     const user = request.body
//     const updatedUser = {
//         ...(user.username ? { username: user.username } : {}),
//         ...(user.first_name ? { first_name: user.first_name } : {}),
//         ...(user.last_name ? { last_name: user.last_name } : {}),
//         ...(user.dob ? { dob: user.dob } : {}),
//         ...(user.gender ? { gender: user.gender } : {}),
//         ...(user.posts ? { posts: user.posts } : {})
//     }

//     try {
//     const userA = await User.findOneAndUpdate({ _id: id }, updatedUser)
//     response.json(user)
    
//     }catch(error){
//         return console.log("Error : failed to update user with id: " + id);
//     }
// })

module.exports = autherRouter;