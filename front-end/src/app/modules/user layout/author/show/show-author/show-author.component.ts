import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorsServiceService} from 'src/app/services/authors-service.service';
import {UserService} from '../../../../../services/user.service';
import { BookServiceService } from '../../../../admin layout/book/services/book-service.service'
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
  ratings = [1, 2, 3, 4, 5, 3];
  userSubscriber: any;
  bookSubscriber:any;
  booksNum:number = 0;
  bookStatus: Array<String> = [];
  loading=false;

  constructor(private bookService:BookServiceService,private authorService: AuthorsServiceService,
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
        this.readBookStatus(this.author.books);
        console.log(this.author.books)
        this.booksNum=this.author.books.length;
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error getting Author information !',
          footer: ''
        });
      });
  }

  changeBookStatus(type: string, bookId: any, index: number) {
    this.loading = false
    this.userSubscriber = this.userService.updateUserBookList({userId: this.userId, bookId: bookId, type: type})
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
        },
        (err) => {
          console.log(err);
        }
      );
  }

  readBookStatus(books: any) {
    for (let i = 0; i < books.length; i++){
      if (books[i].currentlyReader && books[i].currentlyReader.find((element: any) => element == this.userId)) {
        this.bookStatus[i] = 'Is currant read';
      } else if (books[i].wantToReadeUsers && books[i].wantToReadeUsers.find((element: any) => element == this.userId)) {
        this.bookStatus[i] = 'Want to read';
      } else if (books[i].finishReadUsers && books[i].finishReadUsers.find((element: any) => element == this.userId)) {
        this.bookStatus[i] = 'Finished reading';
      } else {
        this.bookStatus[i] = "Add to my list"
      }
    }
  }

}
