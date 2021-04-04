const Author = require("../../author/models/Author")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")

async function index(request, response, next) {
    try {
        const authors = await Author.find();
        response.json(authors)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
    }  
}

async function pagination(request, response, next){
    try{
        let { page=1,limit=2} = request.query;
        page < 0 ? page = 1 : page;
        limit < 2 ? limit = 2 : limit;
        
        const authers = await Author.find()
        .sort('authorDob')
        .limit(limit)
        .skip((page-1) * limit).exec();  
        
        const numberOfPages = Math.ceil(authers.length / limit)
        response.json({
            authers,
            pages: numberOfPages
        });
    }
    catch(err){
        next(err);
    }
}


async function store(request, response, next) {
    const authorRequest = request.body
    console.log(authorRequest)

    const author = new Author ({
        autherFirstName: authorRequest.autherFirstName,
        autherLastName: authorRequest.autherLastName,
        authorDob: authorRequest.authorDob,
        authorImage: authorRequest.image 
    })
    try {
        const savedAuthor = await author.save()
        response.json(savedAuthor)
    }catch (error){
        next(error)
    }
}

async function show(request, response, next) {
    const { id } = request.params
    try {
        const author = await Author.findById(id).populate("authorBooks").exec();     
        response.json(author)
    } catch (error) {
        next(error);
    }
}

async function destroy(request, response, next) {
    const { id } = request.params
    try {
        const author = await Author.deleteOne({_id: id})
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.DELETE_MESSAGE
        });
    }catch(error) {
        next(ResponseCode.SERVER_ERROR)
    }
}

async function update(request, response, next) {
    const { id } = request.params;
    const author = request.body
    const updatedAuther = {
        ...(author.first_name ? { autherFirstName: author.first_name } : {}),
        ...(author.last_name ? { autherLastName: author.last_name } : {}),
        ...(author.dob ? { dob: author.dob } : {}),
        ...(author.image ? { authorImage: author.image } : {}),
    }

    try {
        await Author.findByIdAndUpdate({ _id: id }, updatedAuther)
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.UPDATE_MESSAGE
        });
    }catch(error){
        next(error)
    }
}

module.exports = {
    index,
    store,
    show,
    destroy,
    update,
    pagination
}