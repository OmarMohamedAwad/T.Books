const BookPresenter = require("../../book/presenter/BookPresenter")

function present(rate) {
    console.log("hello")
    return {
        id: rate._id,
        rater: rate.rater,
        book: rate.ratedBook
    }
}

module.exports = {
    present
}