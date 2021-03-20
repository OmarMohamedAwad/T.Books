const express = require('express')
const AutherAccessController = require('../controllers/AuthorController')

const autherRouter = express.Router()

autherRouter.get("/", (request, response, next)=> {
    AutherAccessController.index(request, response, next);   
}) 

autherRouter.post("/", async (request, response, next)=> {
    AutherAccessController.store(request, response, next);
})

autherRouter.get("/:id",async (request, response, next)=> {
    AutherAccessController.show(request, response, next);
})

autherRouter.delete("/:id", async (request, response, next)=> {
    AutherAccessController.destroy(request, response, next);
})

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