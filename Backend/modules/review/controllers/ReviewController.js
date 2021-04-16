const Review = require("../models/Review");
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const reviewPresenter = require("../presenter/reviewPresenter")

const show = async function (request, response, next){
    const { id } = request.params
    try{

        const review = await Review.findById(id).populate("reviwer").populate("reviewedBook");
        response.json(reviewPresenter.present(review));
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
        reviewedBook: reviewRequest.book,
        reviewBody: reviewRequest.body,
    }) 

    try{
        const savedReview = await review.save();
        response.json(reviewPresenter.present(savedReview))
    }catch(error){
        next(error)
    }
}

const update = async function (request, response, next){
    const { id } = request.params;
    const review = request.body
    const updatedReview = {
        ...(review.reviewBody) ? {reviewBody: review.reviewBody} : {},
    } 
    
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

const pagination = async function (request, response, next){
     try{
        const { id } = request.params
        let { page=1,limit=2} = request.query;
        page < 0 ? page = 1 : page;
        limit < 2 ? limit = 2 : limit;
        
        const reviews = await Review.find({reviewedBook: id})
        .limit(limit)
        .skip((page-1) * limit).exec();  
        
        const numberOfPages = Math.ceil(authers.length / limit)
        const presentedReviews = reviews.map((rev)=>{
            return reviewPresenter.present(rev);
        });
        response.json({
            presentedReviews,
            pages: numberOfPages
        });
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    show,
    store,
    destroy,
    update,
    pagination
};