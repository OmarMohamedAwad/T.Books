function present(review) {
    return {
        id: review._id,
        owner: review.reviwer,
        book: review.reviewedBook,
        content : review.reviewBody
    }
}
module.exports = {
    present
}