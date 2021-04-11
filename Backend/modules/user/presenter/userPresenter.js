function present(user) {
    return {
        'ID': user._id,
        'User Name': user.userName,
        'First Name' :user.fName,
        'Last Name':user.lName,
        'EMail' :user.email,
        'Avatar': user.userImage,
        'Password':user.password,
        'Full Name': user.fName +" "+  user.lName,
        'Currently Readed Books':user.currentlyReadedBooks,
        'Want To Readed Books':user.wantToReadedBooks,
        'Read Books':user.readBooks,
        'User Reviews':user.userReviews,
        'User Rating':user.userRatings,
        'Token ':user.refreshToken
        
    }
}

module.exports = {
    present
}
