const Author = require("../../author/models/Author")
const ResponseCode = require("../../../responses-code")

async function index(request, response, next) {
    try {
        const author = Author.find({});
        response.json(Author)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
    }  
}

module.exports = {
    index
}