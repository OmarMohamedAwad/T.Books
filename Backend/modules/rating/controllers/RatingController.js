const Rating = require("../../rating/models/Rating")
const Response_Code = require("../../../response-codes")
const Response_Msg = require("../../../response-messages")

async function index(req, res, next) {
    try{
        const ratingsDetails = await Rating.find();
        res.json(ratingsDetails)
    } catch (err){
        next(Response_Code.SERVER_ERROR)
    }
}

async function store(req, res, next) {
    const ratingSavingRequest = req.body
    const rating = new Rating ({
        rate: ratingSavingRequest.rate,
        rater: ratingSavingRequest.rater,
        ratedBook: ratingSavingRequest.book
    })
    try {
        const newRating = await rating.save()
        res.json(newRating)
    }catch (err){
        console.log(err)
        next(err)
    }
}

async function update(req, res, next) {
    const {id} = req.params;
    const rating = req.body
    const newRating = {
        ...(rating.name ? { rate: rating.name } : {}),
        ...(rating.book ? { rater: rating.books } : {}),
        ...(rating.image ? { ratedBook: rating.image } : {}),
    }

    try{
        await Rating.findByIdAndUpdate({ _id: id }, newRating)
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
        await Rating.deleteOne({_id: id})
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
    store,
    update,
    destroy
}
