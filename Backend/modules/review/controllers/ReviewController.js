const reviewModel = require("../models/Review");

const reviewGetController = async function (req , res , next){
    console.log(req.params);
    console.log("list one user " + req.params.id);
    try{

        let review = await reviewModel.find({_id: req.params.id}).populate("reviwer").populate("reviewedBook");
        res.json(review);
    }
    catch(err)
    {
        next(422)
    }
}

const reviewPostController = async function (req , res , next){
    console.log("create new review");
    const reviewInstance = new reviewModel({
        reviwer: req.body.reviwer,
        reviewedBook: req.body.reviewedBook,
        reviewBody: req.body.reviewBody,
    }) 

    console.log("the review instance is: " + reviewInstance)

    try{
        let review = await reviewInstance.save();
        console.log("saved instance: " + review);
        res.json(review);
    }
    catch(err)
    {
        next(500)
    }
}

const reviewPatchController = async function (req , res , next){
    console.log("create updated review id" + req.params.id);
    const reviewInstance = new reviewModel({
        ...(req.body.reviwer) ? {reviwer: req.body.reviwer} : {},
        ...(req.body.reviewedBook) ? {reviewedBook: req.body.reviewedBook} : {},
        ...(req.body.reviewBody) ? {reviewBody: req.body.reviewBody} : {},
    }) 

    console.log("the review instance is: " + reviewInstance)
    
    try{
        let review = await reviewModel.updateOne( {_id: req.params.id} , reviewInstance )
        console.log("saved instance: " + review);
        res.json(review);
    }
    catch(err)
    {
        next("two reasons of errors")
    }
}


const reviewDeleteController = async function (req , res , next){
    console.log(req.params.id);
    console.log("delete review " + req.params.id);
    try{
        let review = await reviewModel.deleteOne({_id: req.params.id} );
        console.log("delete status " + review);
        res.json(review);
    }
    catch(err)
    {
        next(500)
    }
}


module.exports = {
    reviewGetController,
    reviewPostController,
    reviewPatchController,
    reviewDeleteController,
}