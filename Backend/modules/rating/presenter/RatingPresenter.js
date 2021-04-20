const BookPresenter = require("../../book/presenter/BookPresenter")

function present(rating) {
    return {
        id: rating._id,
        rate : rating.rate,
        rater: rating.rater,
        book: rating.ratedBook
    }
}

module.exports = {
    present
}