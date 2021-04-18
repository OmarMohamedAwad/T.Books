import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Book} from '../models/book';
import {BookServiceService} from '../services/book-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit, OnChanges {

  //properties
  @ViewChild('closebutton') closebutton: any;
  @Input('authorsInfo') authors: any;
  @Input('categoriesInfo') categories: any;
  @Output() updatedBook:EventEmitter<Book> = new EventEmitter<Book>();
  @Input('bookInfo') book: Book = {
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
  constructor(private bookService: BookServiceService) {}

  //start the component
  ngOnInit(): void {}

  //update the list after any edit
  ngOnChanges(changes: SimpleChanges): void {
    this.bookForm.controls.name.setValue(this.book.name)
    this.bookForm.controls.description.setValue(this.book.description)
    this.bookForm.controls.author.setValue(this.book.author)
    this.bookForm.controls.category.setValue(this.book.category)
    this.bookForm.controls.image.setValue(this.book.image)
  }

  //get book data with validation tests
  bookForm = new FormGroup({
    name: new FormControl("",[Validators.min(2),Validators.maxLength(50),Validators.pattern('[a-zA-Z0-9 ]*')]),
    description: new FormControl("",[Validators.min(10),Validators.max(250),Validators.pattern('[0-9a-zA-Z,-_. ]*')]),
    author: new FormControl("",[]),
    category: new FormControl("",[]),
    image: new FormControl('' , [ Validators.pattern('[a-zA-Z0-9]*')])
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

  //update the data of exist book
  submitUpdateForm(){
    //check if the all data are valid
    if (this.getNameStatus() && this.getDescriptionStatus() && this.getAuthorStatus() && this.getCategoryStatus() && this.getImageStatus()){
      this.book.name = this.bookForm.controls.name.value;
      this.book.description = this.bookForm.controls.description.value;
      this.book.author = this.bookForm.controls.author.value;
      this.book.category = this.bookForm.controls.category.value;

      this.book.image = this.bookForm.controls.image.value;
      //send the updated book to the backend

      this.bookService.update(this.book).subscribe((response)=>{
       // console.log(response.body.status);
       console.log(response);
        this.updated();
        this.bookForm.reset();
        this.updatedBook.emit(this.book);
        this.closebutton.nativeElement.click();
      }, error => {
        //error to add new book to database
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error updating book, changes havn't been saved!",
          footer: ''
        })
      })
    } else {
      //invalidation data for the new book
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Invalid data !",
        footer: ''
      })
    }
  }

  updated(){
    Swal.fire(
      'Good job!',
      'Author Updated Successfully!',
      'success'
    )
  }

}
