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

  isLoad= false;
  @ViewChild('search_box') search_box!: ElementRef<HTMLInputElement>;
  subscriber:any;
  addFlag: boolean;
  authors : Array<Book> = []
  categories : Array<Book> = []
  keywords:string = ""
  allBooks:Array<Book> = []
  bookID:string="";
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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Loading authors failed !",
            footer: ''
          })
        }
      )
  }

  getBooks(){
    this.subscriber = this.bookService.index()
      .subscribe((response:any)=>{
          this.books = response.body
          this.isLoad = true
          this.books=this.allBooks =response.body
          //console.log(response.body);
        },
        (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Loading Books failed !",
            footer: ''
          })
        }
      )
  }
  books:any=this.allBooks;
  captureSearchContent(){
    this.keywords = this.search_box.nativeElement.value;
    this.filterList(this.keywords);
  }

  filterList(keywords:string){
    this.books= this.allBooks.filter((item)=>{
      return item.name.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())
    })
  }

  getCategories(){
    this.subscriber = this.categoryService.categoryIndex()
      .subscribe((response)=>{
          this.categories = response
        },
        (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Loading categories failed !",
            footer: ''
          })
        }
      )
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getBook(book:Book) {
    this.clickedBook = book;
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
