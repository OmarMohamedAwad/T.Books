const mongoose = require('mongoose');

const authorShcema = new mongoose.Schema({
    autherFirstName: {
        type: String,
        minLength: [2, "First Name Must contain at least 2 character"],
        required: [true, "First Name is requierd"],
        maxLength: [50, "First Name Must contain at most 50 character"]
    },
    autherLastName: {
        type: String,
        minLength: [2, "Last Name Must contain at least 1 character"],
        required: [true,"Last Name is requierd"],
        maxLength:  [50, "Last Name Must contain at most 50 character"]
    },
    authorDob: { 
        type: Date,
        required: [true,"Date of Birth is requierd"] },
    authorImage: { type: String },
    authorBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

//check that first-last name group are not repeated
authorShcema.index({ autherFirstName: 1, autherLastName: 1 }, { unique: true });

const Author = mongoose.model("Author", authorShcema);

module.exports = Author;