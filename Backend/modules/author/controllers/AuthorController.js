const Author = require("../../author/models/Author")
const ResponseCode = require("../../../responses-code")
const ResponseMessage = require("../../../responses-massege")

async function index(request, response, next) {
    try {
        const authors = await Author.find();
        response.json(authors)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
    }  
}

async function store(request, response, next) {
    const authorRequest = request.body

    const author = new Author ({
        autherFirstName: authorRequest.first_name,
        autherLastName: authorRequest.last_name,
        authorDob: authorRequest.dob,
        authorImage: authorRequest.image 
    })

    try {
        const savedAuthor = await author.save()
        response.json(savedAuthor)
    }catch (error){
        if (error.name === "ValidationError") {
            let errorsMessage = {};
      
            Object.keys(error.errors).forEach((key) => {
                errorsMessage[key] = error.errors[key].message;
            });

            response.json(errorsMessage);
        }
        next(ResponseCode.SERVER_ERROR)
    }
}

async function show(request, response, next) {
    const { id } = request.params
    try {
        const author = await Author.findById(id);
        response.json(author)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
    }
}

async function destroy(request, response, next) {
    const { id } = request.params
    try {
        const author = await Author.deleteOne({_id: id})
        response.json({message: ResponseMessage.DELETE_MESSAGE})
    }catch(error) {
        next(ResponseCode.SERVER_ERROR)
    }
}

module.exports = {
    index,
    store,
    show,
    destroy
}