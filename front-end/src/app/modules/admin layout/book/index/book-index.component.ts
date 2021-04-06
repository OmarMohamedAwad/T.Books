import {Component, OnInit, EventEmitter, Output, OnDestroy, OnChanges} from '@angular/core';
import {BookServiceService} from '../services/book-service.service';
import {Book} from '../models/book';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit, OnDestroy {

  subscriber:any;
  books : Array<Book> = []
  clickedBook: Book = {
      _id:"",
      bookName:"",
      bookDescription:"",
      bookImage:"",
      bookCategory:"",
      bookAuthor:"",
  };

  constructor(private bookService: BookServiceService) {

  }

  ngOnInit(): void {
    this.subscriber = this.bookService.index()
      .subscribe((response:any)=>{
          this.books = response.body
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getBook(book:Book)
  {
    this.clickedBook = book;
    console.log(book);
  }

  // addStudent(student: Student){
  //   student.id = this.students.length + 1;
  //   this.studentService.store(student).subscribe((response)=>{
  //     this.ngOnInit();
  //   }, error => {
  //     console.log(error)
  //   })
  // }

  deleteBook(book: any){
    this.ngOnInit();
  }
}
