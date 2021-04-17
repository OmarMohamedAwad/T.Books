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

  @ViewChild('closebutton') closebutton: any;
  constructor(private bookService: BookServiceService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.bookForm.controls.name.setValue(this.book.name)
      this.bookForm.controls.description.setValue(this.book.description)
      this.bookForm.controls.author.setValue(this.book.author._id)
      this.bookForm.controls.category.setValue(this.book.category._id)
  }

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

  submitUpdateForm(){
    if (this.getNameStatus() && this.getDescriptionStatus() && this.getAuthorStatus() && this.getCategoryStatus()){
      this.book.name = this.bookForm.controls.name.value;
      this.book.description = this.bookForm.controls.description.value;
      this.book.author = this.bookForm.controls.author.value;
      this.book.category = this.bookForm.controls.category.value;
      // this.book.image = "https://i.morioh.com/210563673d812/4b482f8e.webp";

      this.bookService.update(this.book).subscribe((response)=>{
        this.bookForm.reset();
        this.updatedBook.emit(this.book);
        this.closebutton.nativeElement.click();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error updating book, changes havn't been saved!",
          footer: ''
        })
      })
    }
  }

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

  @Input('authorsInfo') authors: any;
  @Input('categoriesInfo') categories: any;

  @Output() updatedBook:EventEmitter<Book> = new EventEmitter<Book>()
}
