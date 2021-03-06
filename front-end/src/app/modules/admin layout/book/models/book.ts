export interface Book {
  id:               string,
  name:             string,
  description:      string,
  image:            string,
  category:         any,
  author:           any,
  categoryName:     string,
  authorName:       string,
  bookReviews:      Array<any>,
  bookRatings:      Array<any>,
  currantReader:    [],
  wantToReadeUsers: [],
  finishReadUsers:  [],
}
