function present(author) {
    return {
        id: author._id,
        name: author.autherFirstName + " " + author.autherLastName,
        birthday : author.authorDob,
        image: author.authorImage,
        books : author.authorBooks
    }
}
module.exports = {
    present
}