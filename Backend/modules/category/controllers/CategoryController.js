const Category = require("../../category/models/Category")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")

async function index(request, response, next) {
    try {
        const categories = await Category.find();
        response.json(categories)
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
    }  
}

async function show(request, response, next) {
    const {id} = request.params
    try {
        const category = await Category.findById(id);
        response.json(category)
    } catch (error){
        next(ResponseCode.SERVER_ERROR)
    }
}

async function search(request, response, next) {
    const {name} = request.params
    try {
        const categories = await Category.find({name: new RegExp('^'+name+'$', "i")});
        response.json(categories)
    } catch (error){
        next(ResponseCode.SERVER_ERROR)
    }
}

async function store(request, response, next) {
    const categoryRequest = request.body
    const category = new Category ({
        categoryName: categoryRequest.name,
        categoryImage: categoryRequest.image
    })
    try {
        const savedCategory = await category.save()
        response.json(savedCategory)
    }catch (error){
        next(error)
    }
}

async function update(request, response, next) {
    const {id} = request.params;
    const category = request.body
    const updatedCategory = {
        ...(category.name ? { categoryName: category.name } : {}),
        ...(category.books ? { categoryBooks: category.books } : {}),
        ...(category.image ? { categoryImage: category.image } : {}),
    }

    try {
        await Category.findByIdAndUpdate({ _id: id }, updatedCategory )
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.UPDATE_MESSAGE
        });
    }catch(error){
        next(error)
    }
}


async function destroy(request, response, next) {
    const {id} = request.params
    try {
        await Category.deleteOne({_id: id})
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.DELETE_MESSAGE
        });
    }catch(error) {
        next(ResponseCode.SERVER_ERROR)
    }
}

module.exports = {
    index,
    show,
    search,
    store,
    update,
    destroy
}
