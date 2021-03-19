const mongoose = require('mongoose');


const authorShcema = new mongoose.Schema({
    autherFirstName: {type: String, minLength: 2, required: true},
    autherLastName: {type: String, minLength: 2, required: true},
    autjorDob: {type: Date, required: true},
    authorImage: {type: String},
    authorBooks: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],     
});

//check that first-last name group are not repeated
authorShcema.index({ autherFirstName: 1, autherLastName: 1 }, { unique: true });

const authorModel = mongoose.model("Author",authorShcema);

module.exports = authorModel;