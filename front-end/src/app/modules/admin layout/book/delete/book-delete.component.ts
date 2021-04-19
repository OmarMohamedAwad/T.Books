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

  //properties
  @ViewChild('closebutton') closebutton: any;
  subscriber:any;
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
    bookRatings:[],
    currantReader:[],
    finishReadUsers:[],
    wantToReadeUsers:[],
  };
  @Output() deletedBook:EventEmitter<Book> = new EventEmitter<Book>()

  //constructor
  constructor(private bookService:BookServiceService) { }

  //start the component
  ngOnInit(): void {}

  //delete book from database
  deleteBook(){
    //send the request to the backend to remove the book
    this.subscriber = this.bookService.destroy(this.book.id)
      .subscribe((data:any)=>{
        //console.log(data.status)
        if(data.status ==200){
          this.deleted();
          this.deletedBook.emit(this.book);
          this.closebutton.nativeElement.click();
        }
      },(err)=>{
        //error message about failure of deleting
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error Deleting Book, Try again!",
          footer: ''
        })
      })
  }

  //at the end of component
  ngOnDestroy(): void {
    //this.subscriber.unsubscribe();
  }
  deleted(){
    Swal.fire(
      'Good job!',
      'Book Deleted Successfully!',
      'success'
    )
  }
}
