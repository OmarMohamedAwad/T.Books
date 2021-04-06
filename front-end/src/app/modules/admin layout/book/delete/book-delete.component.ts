import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Book} from '../models/book';
import {BookServiceService} from '../services/book-service.service';

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
    this.subscriber.unsubscribe();
  }

  deleteBook(){
    console.log("delete")
    console.log(this.book._id)
    this.subscriber = this.bookService.destroy(this.book._id)
      .subscribe((data)=>{
        console.log(data);
        this.closebutton.nativeElement.click();
      },(err)=>{
        console.log("delete error")
      })
  }

  @Input('bookInfo') book: Book = {
    _id:"",
    bookName:"",
    bookDescription:"",
    bookImage:"",
    bookCategory:"",
    bookAuthor:"",
  };
}
