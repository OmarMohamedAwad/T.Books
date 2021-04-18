import { Component, OnInit, OnDestroy, ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';
import {BookServiceService} from '../../../admin layout/book/services/book-service.service';
import {Book} from '../../../admin layout/book/models/book';
import { Router } from '@angular/router';
import {AuthorsServiceService} from '../../../../services/authors-service.service';
import {CategoryService }from '../../../../services/category.service';

import {any} from 'codelyzer/util/function';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-book-index',
  templateUrl: './user-book-index.component.html',
  styleUrls: ['./user-book-index.component.css']
})
export class UserBookIndexComponent implements OnInit, OnDestroy {

  @ViewChild('search_box')searchBox!:ElementRef<HTMLInputElement>;
  keywords:string = "";
  lastSearchContent:string="";
  search:boolean = false;
  subscriber:any;
  searchSubscriber:any;
  books : Array<Book> = []
  pageNumbers: number = 1;
  currantPage: number = 1;
  pages = new Array(1)
  loading = false;

  constructor(private bookService: BookServiceService, private router: Router) {
    this.getBooks();
   }
  ngOnInit(): void { }

  getBooks(page: number = 1){
    this.subscriber = this.bookService.pagination(page)
      .subscribe((response:any)=>{
        console.log(response.body)
          this.books = response.body.books;
          this.pageNumbers = response.body.pages;
          this.pages = new Array(this.pageNumbers)
          this.loading = true
        },
        (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Server Error, can't get books information !",
            footer: ''
          })
        }
      )
  }

  filter(searchContent:any,page:number){
    this.searchSubscriber = this.bookService.search(searchContent,page).subscribe((res:any)=>{
      this.books=res.body.books;
      console.log(this.books);
      this.pageNumbers= res.body.pages;
    },(err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error, Can't get search results",
        footer: ''
      })
    })
  }

  captureSearchContent(){
    this.currantPage=1;
    this.search=true;
    this.lastSearchContent=this.keywords=this.searchBox.nativeElement.value;
    this.filter(this.lastSearchContent,1);
  }

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
    // this.searchSubscriber.unsubscribe();
  }

  navigateBetweenPages(index: number){
    this.currantPage = index;
    this.getBooks(this.currantPage);
  }

  previous(){
    if( !this.search && this.currantPage > 1 )
      this.getBooks(--this.currantPage)
    else if(this.search)
      this.filter(this.lastSearchContent,--this.currantPage)
  }

  next() {
    if( !this.search && this.currantPage < this.pageNumbers )
      this.getBooks(--this.currantPage)
    else if(this.search)
      this.filter(this.lastSearchContent,++this.currantPage)
  }

}
