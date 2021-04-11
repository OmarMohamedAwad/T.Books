function present(category) {
    return {
        id: category._id,
        name: category.categoryName,
        image: category.categoryImage,
        books: category.categoryBooks, 
    }
}

module.exports = {
    present
}