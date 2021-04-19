import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import { UserService } from '../../../../../services/user.service';
import { BookServiceService } from '../../../../admin layout/book/services/book-service.service'
import { RatingServiceService } from '../../../../../services/rating-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {
  author: any;
  userId: any;
  authorID: any;
  userSubscriber: any;
  ratingSubscriber: any;
  booksNum: number = 0;
  bookStatus: Array<String> = [];
  loading = false;
  booksArr: { _id:string, name: string, numberOfRatings: number, avgRate: number, status: string, image:string }[] = [];
  bookObj = {
    _id:"",
    name: "",
    numberOfRatings: 0,
    avgRate: 0,
    status: "",
    image:"https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg",
  }

  constructor(private ratingService: RatingServiceService, private authorService: AuthorsServiceService,
    private myActivatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    this.authorID = this.myActivatedRoute.snapshot.params.id;
    this.userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : '605a0532ba76f47a7793e130';
  }

  ngOnInit(): void {
    this.getAuthorById();
  }

  getAuthorById() {
    this.authorService.show(this.authorID).subscribe(
      (res) => {
        this.author = res;
        this.loading = true;
        this.loadBookInfo(this.author.books);
        console.log(this.author.books)
        this.booksNum = this.author.books.length;
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error getting Author information !',
          footer: ''
        });
      });
  }

  calcAvgRate(ratingsArr:any){
    this.bookObj.avgRate=0;
    for(let i=0;i<ratingsArr.length;i++)
      this.bookObj.avgRate+=ratingsArr[i].rate
    if(this.bookObj.numberOfRatings)
      this.bookObj.avgRate/=this.bookObj.numberOfRatings;
  }


  loadBookInfo(books: any) {
    for (let i = 0; i < books.length; i++) {
      //book rating
      this.bookObj.name = books[i].bookName;
      this.bookObj.numberOfRatings = books[i].bookRatings.length;
      this.bookObj._id = books[i].bookRatings.ratedBook;
      this.bookObj.image="https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg";
      this.calcAvgRate(books[i].bookRatings);
      //book status
      if (books[i].currentlyReader && books[i].currentlyReader.find((element: any) => element == this.userId)) {
        this.bookObj.status = 'Is currant read';
      } else if (books[i].wantToReadeUsers && books[i].wantToReadeUsers.find((element: any) => element == this.userId)) {
        this.bookObj.status = 'Want to read';
      } else if (books[i].finishReadUsers && books[i].finishReadUsers.find((element: any) => element == this.userId)) {
        this.bookObj.status = 'Finished reading';
      } else {
        this.bookObj.status = "Add to my list"
      }
      //image
      if(books[i].bookImage)
        this.bookObj.image=books[i].bookImage;
      this.booksArr.push(this.bookObj);
    }
  }
  changeBookStatus(type: string, bookId: any, index: number) {
    this.loading = false
    this.userSubscriber = this.userService.updateUserBookList({ userId: this.userId, bookId: bookId, type: type })
      .subscribe((response: any) => {
        if (type == '1') {
          this.bookStatus[index] = 'Is currant read';
        } else if (type == '2') {
          this.bookStatus[index] = 'Want to read';
        } else if (type == '3') {
          this.bookStatus[index] = 'Finished reading';
        }
        this.ngOnInit();
        this.loading = true
      },(err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to login first!',
          footer: '<a routerLinkActive="active" routerLink="/login"> Go to Login</a>'
        })
        }
      );
  }
}
