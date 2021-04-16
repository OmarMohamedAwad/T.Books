const ErrorResponse = require('../../../helpers/errorResponse');
const User = require("../../user/models/User");
const ResponseCode = require("../../../response-codes");
const bookModel = require('../../book/models/Book');
const categoryModel = require('../../category/models/Category');
const authorModel = require('../../author/models/Author');


async function count(request, response,next) {
    try {
      // Estimate the total number of documents in the collection
      const books = await bookModel.estimatedDocumentCount();
      const authors =  await authorModel.estimatedDocumentCount();
      const categories =  await categoryModel.estimatedDocumentCount();
      console.log(`The total number of books : ${books} , authors ${authors} , categories ${categories}`.bgCyan.inverse);
     response.status(200).json({
         books:books,
         authors:authors,
         categories:categories
     });
     
    } 
    catch (err) {
        next(ResponseCode.SERVER_ERROR)
    }
  }

  module.exports ={
    count
}