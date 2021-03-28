const Category = require("../../category/models/Category")
const Response_Code = require("../../../response-codes")
const Response_Msg = require("../../../response-messages")

async function index(req, res, next) {
    try {
        const foundCategories = await Category.find();
        res.json(foundCategories)
    } catch (err) {
        next(Response_Code.SERVER_ERROR)
    }  
}

async function paginate(req, res, next) {
    try{
        const { page=1,limit=2} = req.query;
        const categories = await Category.find();
        const numOfCategories = categories.count();
        if (numOfCategories<=page*limit)
            throw (new Error("Not existting Page"));
        const response=categories.sort('categoryName').limit(limit *1).skip((page-1) * limit).exec();
        res.send(response);
    }
    catch(err){
        next(err);
    }
}

async function show(req, res, next) {
    const {path} = req.params
    try {
        const foundCategory = await Category.findById(path).populate("categoryBooks").exec();
        res.json(foundCategory)
    } catch (err){
        next(Response_Code.SERVER_ERROR)
    }
}

async function search(req, res, next) {
    const {path} = req.params
    console.log(path)
    try {
        const foundCategories = await Category.find({categoryName: new RegExp(path, "i")});
        res.json(foundCategories)
    } catch (err){
        next(Response_Code.SERVER_ERROR)
    }
}

async function store(req, res, next) {
    const categorySavingRequest = req.body
    //console.log(categorySavingRequest);
    const category = new Category ({
        categoryName: categorySavingRequest.name,
        categoryImage: categorySavingRequest.image
    })
    /*error multi key*/
    try {
        const newCategory = await category.save()
        res.json(newCategory)
    }catch (err){
        next(err)
    }
}

async function update(req, res, next) {
    const {id} = req.params;
    const category = req.body
    const newCategory = {
        ...(category.name ? { categoryName: category.name } : {}),
        ...(category.books ? { categoryBooks: category.books } : {}),
        ...(category.image ? { categoryImage: category.image } : {}),
    }

    try {
        await Category.findByIdAndUpdate({ _id: id }, newCategory )
        res.json({
            status : Response_Code.SUCCESS,
            message: Response_Msg.UPDATE_MESSAGE
        });
    }catch(err){
        next(err)
    }
}


async function destroy(req, res, next) {
    const {id} = req.params
    try {
        await Category.deleteOne({_id: id})
        res.json({
            status : Response_Code.SUCCESS,
            message: Response_Msg.DELETE_MESSAGE
        });
    }catch(err) {
        next(Response_Code.SERVER_ERROR)
    }
}

module.exports = {
    index,
    paginate,
    show,
    search,
    store,
    update,
    destroy
}
