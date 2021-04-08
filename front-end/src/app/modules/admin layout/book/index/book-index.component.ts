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
  addFlag: boolean;
  books : Array<Book> = []

  clickedBook: Book = {
      id:"",
      name:"",
      description:"",
      image:"",
      category:"",
      author:"",
      categoryName:"",
      authorName:"",
  };

  constructor(private bookService: BookServiceService) {
    this.addFlag = false;
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

  getBook(book:Book) {
    this.clickedBook = book;
    console.log(book);
  }

  navigateToAdd(){
    this.addFlag = true
  }

  deleteBook(book: any){
    this.ngOnInit();
  }

  addBook(book: any){
    this.ngOnInit();
  }

  updateBook(book: any){
    this.ngOnInit();
  }
}
