import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookServiceService} from '../../../admin layout/book/services/book-service.service';
import {Book} from '../../../admin layout/book/models/book';
import {AuthorsServiceService} from '../../../../services/authors-service.service';
import {CategoryService} from '../../../admin layout/services/category.service';

@Component({
  selector: 'app-user-book-index',
  templateUrl: './user-book-index.component.html',
  styleUrls: ['./user-book-index.component.css']
})
export class UserBookIndexComponent implements OnInit, OnDestroy {

  subscriber:any;
  books : Array<Book> = []

  constructor(private bookService: BookServiceService) { }

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

}
