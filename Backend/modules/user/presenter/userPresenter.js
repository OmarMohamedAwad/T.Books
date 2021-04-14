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

module.exports = {
    present
}
