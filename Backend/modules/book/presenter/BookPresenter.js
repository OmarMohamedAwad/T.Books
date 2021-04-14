function present(book) {
    console.log(book);
    return {
        id: book._id,
        name: book.bookName,
        description: book.bookDescription,
        image: book.bookImage,
        author: book.bookAuthor, 
        category: book.bookCategory,
        authorName: book.bookAuthor.autherFirstName +" "+  book.bookAuthor.autherLastName,
        categoryName: book.bookCategory.categoryName,
        bookReviews: book.bookReviews,
        bookRatings: book.bookRatings

    }
}

module.exports = {
    present
}