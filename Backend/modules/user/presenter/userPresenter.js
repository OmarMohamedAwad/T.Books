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
        token :user.refreshToken
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
         returnData.state = type;
         let avg = 0;
         console.log("rated books" , book.bookRatings)
         for(let i = 0; i < book.bookRatings.length; i++)
         {
             console.log(book.bookRatings[i].rater)
             console.log(userId)
             console.log(book.bookName)
            avg += book.bookRatings[i].rate;
            if(book.bookRatings[i].rater == userId){
                returnData.myRating = book.bookRatings[i].rate;
                returnData.myRatingId = book.bookRatings[i]._id;
                console.log(i)
            }
         }
         returnData.bookRating = Math.round(avg / book.bookRatings.length);
         returnData.myRating = returnData.myRating ? Math.round(returnData.myRating) : 0;
         returnData.bookRating = returnData.bookRating ? Math.round(returnData.bookRating) : 0;
         returnData.myRatingId = returnData.myRatingId ? returnData.myRatingId : "";
         returnDataArray.push(returnData);
    })
    //console.log(returnDataArray)
    return returnDataArray;
}

module.exports = {
    present,
    profilePresenter
}
