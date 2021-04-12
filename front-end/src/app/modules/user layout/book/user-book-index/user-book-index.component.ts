import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {BookServiceService} from '../../../admin layout/book/services/book-service.service';
import {Book} from '../../../admin layout/book/models/book';
import { Router } from '@angular/router';
import {AuthorsServiceService} from '../../../../services/authors-service.service';
import {CategoryService }from '../../../../services/category.service';

import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-user-book-index',
  templateUrl: './user-book-index.component.html',
  styleUrls: ['./user-book-index.component.css']
})
export class UserBookIndexComponent implements OnInit, OnDestroy {

  subscriber:any;
  books : Array<Book> = []
  pageNumbers: number = 1;
  currantPage: number = 1;
  pages = new Array(1)

  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
    console.log(this.pages.length);
  }

  getBooks(page: number = 1){
    this.subscriber = this.bookService.pagination(page)
      .subscribe((response:any)=>{
        console.log(response.body)
          this.books = response.body.books;
          this.pageNumbers = response.body.pages;
          this.pages = new Array(this.pageNumbers)
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  navigateBetweenPages(index: number){
    this.currantPage = index;
    this.getBooks(this.currantPage);
  }

  previous(){
    if(this.currantPage > 1){
      this.getBooks(--this.currantPage);
    }
  }

  next() {
    if (this.currantPage < this.pageNumbers) this.getBooks(++this.currantPage);
    else this.currantPage = this.pageNumbers
  }

 


}
