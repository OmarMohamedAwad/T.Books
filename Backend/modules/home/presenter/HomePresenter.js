function present(arrayBooks , arrayCategories, arrayAuthors) {
    return {
        id: book._id,
        name: book.bookName,
        description: book.bookDescription,
        image: book.bookImage,
        author: book.bookAuthor, 
        category: book.bookCategory,
        authorName: book.bookAuthor.autherFirstName +" "+  book.bookAuthor.autherLastName,
        categoryName: book.bookCategory.categoryName
    }
}

module.exports = {
    present
}