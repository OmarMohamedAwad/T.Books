import {Component, OnInit, EventEmitter, Output, OnDestroy, OnChanges} from '@angular/core';
import {BookServiceService} from '../services/book-service.service';
import {Book} from '../models/book';
import {AuthorsServiceService} from '../../../../services/authors-service.service';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css','../../shared/style/dashboard.css']
})
export class BookIndexComponent implements OnInit, OnDestroy {

  isLoad= false;
  subscriber:any;
  addFlag: boolean;
  books : Array<Book> = []
  authors : Array<Book> = []
  categories : Array<Book> = []

  clickedBook: Book = {
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

  constructor(private bookService: BookServiceService, private authorService: AuthorsServiceService, private categoryService: CategoryService) {
    this.addFlag = false;
  }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
    this.getCategories();
  }

  getAuthors(){
    this.subscriber = this.authorService.getAuthors()
      .subscribe((response:any)=>{
          console.log(response.body);
          this.authors = response.body
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  getBooks(){
    this.subscriber = this.bookService.index()
      .subscribe((response:any)=>{
          this.books = response.body
          this.isLoad = true
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  getCategories(){
    this.subscriber = this.categoryService.categoryIndex()
      .subscribe((response)=>{
          this.categories = response
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
    console.log(book);
    this.ngOnInit();
  }

  addBook(book: any){
    this.ngOnInit();
  }

  updateBook(book: any){
    this.ngOnInit();
  }
}
