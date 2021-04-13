import {Component, OnInit, ViewChild, OnDestroy, ElementRef} from '@angular/core';
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
  @ViewChild('search_box') search_box!: ElementRef<HTMLInputElement>;
  subscriber:any;
  addFlag: boolean;
  authors : Array<Book> = []
  categories : Array<Book> = []
  keywords:string = ""
  allBooks:Array<Book> = []
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
    // this.getAuthors();
    // this.getCategories();
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
          /*this.books=this.allBooks = [{
            id:"605cdd9d22d5b83d40ada5e5",
            name:"mybook",
            description:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            image:"kk.png",
            category:"605cd2adc5c1be45441514e6",
            author:"605cc012292ba3558c650ada",
            categoryName:"",
            authorName:"",      
            bookReviews:[],
            bookRatings:[]
        },
        {
          id:"605cvd9d22d5b83d40ada5e5",
          name:"ag",
          description:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          image:"kk.png",
          category:"605cd2adc5c1be45441514e6",
          author:"605cc012292ba3558c650ada",
          categoryName:"",
          authorName:"",    
          bookReviews:[],
          bookRatings:[]
      }]
      */
          this.books=this.allBooks =response.body
          //console.log(response.body);
        },
        (err)=>{
          console.log(err)
        }
      )
  }
  books:any=this.allBooks;
  captureSearchContent(){
    this.keywords = this.search_box.nativeElement.value;
    this.filterList(this.keywords);
  }
  filterList(keywords:string){
    console.log(keywords)
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
