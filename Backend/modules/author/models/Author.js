const mongoose = require('mongoose');
const ValidationMessage = require('../../../validation-messages');

const authorShcema = new mongoose.Schema({
    autherFirstName: {
        type: String,
        minLength: [2, ValidationMessage.FIRST_NAME_MIN_LENGTH],
        required: [true, ValidationMessage.FIRST_NAME_REQUIRED],
        maxLength: [50, ValidationMessage.FIRST_NAME_MAX_LENGTH]
    },
    autherLastName: {
        type: String,
        minLength: [2, ValidationMessage.LAST_NAME_MIN_LENGTH],
        required: [true, ValidationMessage.FIRST_NAME_REQUIRED],
        maxLength: [50, ValidationMessage.LAST_NAME_MAX_LENGTH]
    },
    authorDob: {
        type: Date,
        required: [true, ValidationMessage.DATE_OF_BIRTH_REQUIRED]
    },
    authorImage: {
        type: String
    },
    authorBooks: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Book"
    }],
});

//check that first-last name group are not repeated
authorShcema.index({
    autherFirstName: 1, autherLastName: 1
},{ 
    unique: [true, ValidationMessage.FIRST_LAST_NAME_UNIQUE] 
});

const Author = mongoose.model("Author", authorShcema);

module.exports = Author;