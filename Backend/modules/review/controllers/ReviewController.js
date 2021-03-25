const Review = require("../models/Review");
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")

const show = async function (request, response, next){
    const { id } = request.params
    try{

        const review = await Review.findById(id).populate("reviwer").populate("reviewedBook");
        response.json(review);
    }
    catch(error)
    {
        next(ResponseCode.SERVER_ERROR)
    }
}

const store = async function (request, response, next){
    const reviewRequest = request.body
    const review = new Review({
        reviwer: reviewRequest.reviwer,
        reviewedBook: reviewRequest.reviewedBook,
        reviewBody: reviewRequest.reviewBody,
    }) 

    try{
        const savedReview = await review.save();
        response.json(savedReview);
    }catch(error){
        next(error)
    }
}

const update = async function (request, response, next){
    const { id } = request.params;
    const review = request.body
    const updatedReview = new Review({
        ...(review.reviwer) ? {reviwer: review.reviwer} : {},
        ...(review.reviewedBook) ? {reviewedBook: review.reviewedBook} : {},
        ...(review.reviewBody) ? {reviewBody: review.reviewBody} : {},
    }) 
    
    try{
        const updatedState = await Review.updateOne({ _id: id } , updatedReview) //findByIdAndUpdate
        console.log("saved instance: " + updatedState);
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.UPDATE_MESSAGE
        });
    }catch(errer){
        next(error)
    }
}


const destroy = async function (request, response, next){
    const { id } = request.params
    try{
        const review = await Review.deleteOne({ _id: id });
        console.log("delete status " + review);
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.DELETE_MESSAGE
        });
    }catch(error){
        next(error) //next(ResponseCode.SERVER_ERROR)
    }
}


module.exports = {
    show,
    store,
    destroy,
    update
};