const BookPresenter = require("../../book/presenter/BookPresenter")

function present(rate) {
    return {
        id: rate._id,
        rater: rate.rater,
        book: BookPresenter.present(rate.ratedBook),
    }
}

module.exports = {
    present
}