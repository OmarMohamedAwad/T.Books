function present(author) {
    return {
        id: author._id,
        firstName: author.autherFirstName,
        lastName: author.autherLastName,
        name: author.autherFirstName + " " + author.autherLastName,
        birthDay : author.authorDob,
        image: author.authorImage,
        books : author.authorBooks
    }
}
module.exports = {
    present
}