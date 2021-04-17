import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookServiceService} from '../services/book-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../models/book';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css','../../shared/style/dashboard.css']
})
export class BookStoreComponent implements OnInit {

  //properties
  incorrectData = false;
  indexFlag: boolean = false;
  @Input('authorsInfo') authors: any;
  @Input('categoriesInfo') categories: any;
  @Output() addedBook: EventEmitter<Book> = new EventEmitter<Book>()
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
    bookRatings:[],
    currantReader:[],
    finishReadUsers:[],
    wantToReadeUsers:[],
  };

  //costructor
  constructor(private bookService: BookServiceService) {}

  //start the component
  ngOnInit(): void {}

  //get book data with validation tests
  bookForm = new FormGroup({
    name: new FormControl("",[Validators.required , Validators.min(2) , Validators.maxLength(50) , Validators.pattern('[a-zA-Z0-9 ]*')]),
    description: new FormControl("",[Validators.required , Validators.min(10) , Validators.max(250) , Validators.pattern('[0-9a-zA-Z,-_. ]*')]),
    author: new FormControl("",[Validators.required]),
    category: new FormControl("",[Validators.required]),
    image: new FormControl('' , [Validators.required , Validators.pattern('[a-zA-Z0-9]*')])

  })

  //get the name of the book from the form
  getNameStatus(){
    return this.bookForm.controls.name.valid
  }

  //get the discribtion of the book from the form
  getDescriptionStatus(){
    return this.bookForm.controls.description.valid
  }

  //get the author of the book from the form
  getAuthorStatus(){
    return this.bookForm.controls.author.valid
  }

  //get the category of the book from the form
  getCategoryStatus(){
    return this.bookForm.controls.category.valid
  }
  
  //get book's image
  getImageStatus(){
    return this.bookForm.controls.image.valid
  }

  //add new book to the database
  submitAddForm(){
    //check if the all data are valid
    if (this.getNameStatus() && this.getDescriptionStatus() && this.getAuthorStatus() && this.getCategoryStatus() && this.getImageStatus()){
      this.book.name = this.bookForm.controls.name.value;
      this.book.description = this.bookForm.controls.description.value;
      this.book.author = this.bookForm.controls.author.value;
      this.book.category = this.bookForm.controls.category.value;
      this.book.image = this.bookForm.controls.image.value;
      //send the new book to the backend
      // this.book.image = "https://i.morio421hjkeewh.com/21056da3fv32436456787812/4b482f8e.webp";
      this.bookService.store(this.book).subscribe((response)=>{
        this.indexFlag = true;
        this.bookForm.reset();
        this.addedBook.emit(this.book);
      }, error => {
        //error to add new book to database
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error saving book, Try again !",
          footer: ''
        })
      })
    
    }else {
      //invalidation data for the new book   
      this.incorrectData = true
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Invalid data !",
        footer: ''
      })
    }
  }

  //to return to index component
  backToIndex(){
    this.indexFlag = true;
  }
}
