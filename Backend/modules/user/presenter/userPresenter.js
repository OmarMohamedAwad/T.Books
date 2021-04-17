function present(user) {
    return {
        id: user._id,
        userName: user.userName,
        firstName :user.fName,
        lastName:user.lName,
        email :user.email,
        avatar: user.userImage,
        password:user.password,
        fullName: user.fName +" "+  user.lName,
        currentlyReadBooks:user.currentlyReadedBooks,
        wantToReadBooks:user.wantToReadedBooks,
        readBooks:user.readBooks,
        userReviews:user.userReviews,
        userRating:user.userRatings,
    }
}

async function profilePresenter(books , type , userId)
{
    returnDataArray = [];
    await books.map(async(book,index)=>{
        returnData = {};
         returnData.name = book.bookName;
         returnData.bookId = book._id;
         returnData.image = book.bookImage;
         returnData.author = book.bookAuthor.autherFirstName + ' ' + book.bookAuthor.autherLastName;
         if(type == "CurrentReading") returnData.state = "Is current reading"
         else if(type == "WantToRead") returnData.state = "Want to reading"
         else if(type == "read") returnData.state = "Finished reading"
        //  returnData.state = type;
         let avg = 0;
         for(let i = 0; i < book.bookRatings.length; i++)
         {
            avg += book.bookRatings[i].rate;
            if(book.bookRatings[i].rater == userId){
                returnData.myRating = book.bookRatings[i].rate;
                returnData.myRatingId = book.bookRatings[i]._id;
            }
         }
         returnData.bookRating = Math.round(avg / book.bookRatings.length);
         returnData.myRating = returnData.myRating ? Math.round(returnData.myRating) : 0;
         returnData.bookRating = returnData.bookRating ? Math.round(returnData.bookRating) : 0;
         returnData.myRatingId = returnData.myRatingId ? returnData.myRatingId : "";
         returnDataArray.push(returnData);
    })
    return returnDataArray;
}

module.exports = {
    present,
    profilePresenter
}
