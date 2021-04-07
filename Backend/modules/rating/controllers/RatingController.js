const Rating = require("../../rating/models/Rating")
const Response_Code = require("../../../response-codes")
const Response_Msg = require("../../../response-messages")

async function show(req, res, next) {

    const { id } = request.params
    try{
        const rating = await Rating.findById(id).populate("rater").populate("ratedBook");
        response.json(review);
    }catch(error){
        next(ResponseCode.SERVER_ERROR)
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
        ...(rating.rate ? { rate: rating.rate } : {})
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
    show,
    store,
    update,
    destroy
}
