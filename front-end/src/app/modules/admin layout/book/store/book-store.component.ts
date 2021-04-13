import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookServiceService} from '../services/book-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../models/book';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css','../../shared/style/dashboard.css']
})
export class BookStoreComponent implements OnInit {

  book : Book = {
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

  indexFlag: boolean = false;

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  bookForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.min(2),Validators.maxLength(50),Validators.pattern('[a-zA-Z0-9 ]*')]),
    description: new FormControl("",[Validators.required,Validators.min(10),Validators.max(250),Validators.pattern('[0-9a-zA-Z,-_. ]*')]),
    author: new FormControl("",[Validators.required]),
    category: new FormControl("",[Validators.required]),

  })

  getNameStatus(){
    return this.bookForm.controls.name.valid
  }

  getDescriptionStatus(){
    return this.bookForm.controls.description.valid
  }

  getAuthorStatus(){
    return this.bookForm.controls.author.valid
  }

  getCategoryStatus(){
    return this.bookForm.controls.category.valid
  }

  submitAddForm(){
    if (this.getNameStatus() && this.getDescriptionStatus() && this.getAuthorStatus() && this.getCategoryStatus()){
      this.book.name = this.bookForm.controls.name.value;
      this.book.description = this.bookForm.controls.description.value;
      this.book.author = this.bookForm.controls.author.value;
      this.book.category = this.bookForm.controls.category.value;
      this.book.image = "https://i.morio421h.com/21056da3fv32436456787812/4b482f8e.webp";

      this.bookService.store(this.book).subscribe((response)=>{
        this.indexFlag = true;
        this.bookForm.reset();
        this.addedBook.emit(this.book);
      }, error => {
        console.log(error)
      })
    }
  }

  backToIndex(){
    this.indexFlag = true;
  }

  @Input('authorsInfo') authors: any;
  @Input('categoriesInfo') categories: any;

  @Output() addedBook: EventEmitter<Book> = new EventEmitter<Book>()
}
