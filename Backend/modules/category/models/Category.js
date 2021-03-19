const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categoryName: { type: String, unique: true, minLength: 2, required: true },
    categoryBooks: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Book' }]
})

const Category = mongoose.model("Category" , categorySchema);
module.exports = Category;