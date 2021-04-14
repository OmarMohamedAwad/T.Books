const Category = require("../../category/models/Category")
const Book = require("../../book/models/Book")
const Response_Code = require("../../../response-codes")
const Response_Msg = require("../../../response-messages")
const CategoryPresenter = require("../presenter/CategoryPresenter")

async function index(req, res, next) {
    try {
        const foundCategories = await Category.find();
        res.json(foundCategories.map((category)=>{
                return CategoryPresenter.present(category);
            }))
    } catch (err) {
        next(Response_Code.SERVER_ERROR)
    }  
}


async function paginate(req, res, next) {

    try{
        const { page=1,limit=8,name} = req.query;
        console.log(page,limit,name)
        const category = await Category.find({categoryName: name});
        const BooksId = category[0].categoryBooks;
        let response = {};
        response.bookNumbers = BooksId.length;
        response.pagebooks = [];
        console.log(response)
        for(let i = limit * (page - 1); i < limit * page; i++){
            try{
                let x = await Book.find({_id: BooksId[i]} , {bookImage: 1})
                response.pagebooks.push(x[0].bookImage)
            }catch(err){
                console.log("no Data")
            }
        }
        console.log(response)
        res.send(response);
    }catch(err){
        next(err);
    }
}

async function paginateSearch(req, res, next) {
    try{
        const { page=1,limit=8,name,bookName } = req.query;
        console.log(page,limit,name,bookName)
        const category = await Category.find({categoryName: name});
        const BooksId = category[0].categoryBooks;
        let BooksIDWithName = [];
        let response = {};
        for(let i = 0; i < BooksId.length; i++){
            try{
            let x = await Book.find({_id: BooksId[i] , bookName: {$regex : bookName} } , {bookImage: 1})
            if(x[0].bookImage != null)
                BooksIDWithName.push(x[0].bookImage)
            } catch(err){
                console.log("no Data")
            }
        }
        response.bookNumbers = BooksIDWithName.length;
        response.pagebooks = [];
        console.log(response)
        for(let i = limit * (page - 1); i < limit * page; i++){
            if(BooksIDWithName[i] != null)
            response.pagebooks.push(BooksIDWithName[i])
        }
        console.log(response)
        res.send(response);
    }catch(err){
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
    console.log(req.params.id);
    const { id } = req.params
    console.log(id);
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
    paginateSearch,
    show,
    search,
    store,
    update,
    destroy
}
