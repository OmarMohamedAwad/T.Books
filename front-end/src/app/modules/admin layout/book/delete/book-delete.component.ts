import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from '../models/book';
import {BookServiceService} from '../services/book-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit, OnDestroy {

  @ViewChild('closebutton') closebutton: any;
  subscriber:any;
  constructor(private bookService:BookServiceService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //this.subscriber.unsubscribe();
  }

  deleteBook(){
    this.subscriber = this.bookService.destroy(this.book.id)
      .subscribe((data)=>{
        console.log(data);
        this.deletedBook.emit(this.book);
        this.closebutton.nativeElement.click();
      },(err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error Deleting Book, Try again!",
          footer: ''
        })
      })
  }

  @Input('bookInfo') book: Book = {
    id:"",
    name:"",
    description:"",
    image:"",
    category:"",
    author:"",
    categoryName:"",
    authorName:"",
    bookReviews:[],
    bookRatings:[]
  };

  @Output() deletedBook:EventEmitter<Book> = new EventEmitter<Book>()
}
