export interface User {
  id: string,
  userName: string,
  firstName :string,
  lastName:string,
  email :string,
  avatar: string,
  password:string,
  fullName: string,
  currentlyReadBooks:[],
  wantToReadBooks:[],
  readBooks:[],
  userReviews:[],
  userRating:[],
  token :string
}
