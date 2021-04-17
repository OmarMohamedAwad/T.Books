import {Component, OnInit, ViewChild, OnDestroy, ElementRef} from '@angular/core';
import {BookServiceService} from '../services/book-service.service';
import {Book} from '../models/book';
import {AuthorsServiceService} from '../../../../services/authors-service.service';
import {CategoryService} from '../../../../services/category.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css','../../shared/style/dashboard.css']
})
export class BookIndexComponent implements OnInit, OnDestroy {

  //properties
  isLoad:boolean = false;
  @ViewChild('search_box') search_box!: ElementRef<HTMLInputElement>;
  subscriber:any;
  addFlag:boolean;
  authors:Array<Book> = [];
  categories:Array<Book> = [];
  keywords:string = "";
  allBooks:Array<Book> = [];
  bookID:string="";
  books:any=this.allBooks;
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
      bookRatings:[],
      currantReader:[],
      finishReadUsers:[],
      wantToReadeUsers:[],
  };

  //constructor
  constructor(private bookService: BookServiceService, private authorService: AuthorsServiceService, private categoryService: CategoryService) {
    this.addFlag = false;
  }

  //start the component
  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
    this.getCategories();
  }

  //get authors data from backend
  getAuthors(){
    //ask backend for data
    this.subscriber = this.authorService.getAuthors()
    .subscribe((response:any)=>{
        this.authors = response.body
      },
      (err)=>{
        //error from asking data from database
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Loading authors failed !",
          footer: ''
        })
      }
    )
  }

  //get books data from backend
  getBooks(){
    //ask backend for data
    this.subscriber = this.bookService.index()
    .subscribe((response:any)=>{
        this.books = response.body
        this.isLoad = true
        this.books=this.allBooks =response.body
      },
      (err)=>{
        //error from asking data from database
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Loading Books failed !",
          footer: ''
        })
      }
    )
  }
  
  //get categories data from backend
  getCategories(){
    this.subscriber = this.categoryService.categoryIndex()
    .subscribe((response)=>{
        this.categories = response
      },
      (err)=>{
        //error from asking data from database
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Loading categories failed !",
          footer: ''
        })
      }
    )
  }

  //get search words 
  captureSearchContent(){
    this.keywords = this.search_box.nativeElement.value;
    this.filterList(this.keywords);
  }

  //return the books that matched the search words
  filterList(keywords:string){
    this.books= this.allBooks.filter((item)=>{
      return item.name.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())
    })
  }

  //navigate to add page for new book
  navigateToAdd(){
    this.addFlag = true
  }

  //get book data
  getBook(book:Book) {
    this.clickedBook = book;
  }

  //rerender the list after delete a book
  deleteBook(book: any){
    this.ngOnInit();
  }

  //rerender the list after add a book
  addBook(book: any){
    this.ngOnInit();
  }

  //rerender the list after update a book
  updateBook(book: any){
    this.ngOnInit();
  }

  //at the end of component
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
