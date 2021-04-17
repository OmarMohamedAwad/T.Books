import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import { Router } from '@angular/router';
import {Author} from '../models/author';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit, OnChanges {

  //properties
  @Input('authorInfo') author:Author = {
    id:"",
    firstName:"",
    lastName:"",
    name:"",
    birthDay:"",
    image:"",
    books:[]
  };
  incorrectData = false;

  //constructor
  constructor(private myService:AuthorsServiceService, private router: Router) {}

  //start the component
  ngOnInit(): void {}

  //with every change of the component to update data of author
  ngOnChanges(changes: SimpleChanges): void {
    this.myForm.controls.fName.setValue(this.author.firstName)
    this.myForm.controls.lName.setValue(this.author.lastName)
    this.myForm.controls.dob.setValue(this.author.birthDay)
    this.myForm.controls.image.setValue(this.author.image)
  }

  //get author's first name
  getFNameStatus(){
    return this.myForm.controls.fName.valid
  }

  //get author's last name
  getLNameStatus(){
    return this.myForm.controls.lName.valid
  }

  //get author's date of birth 
  getDOBStatus(){
    return this.myForm.controls.dob.valid
  }

  //get author's image
  getImageStatus(){
    return this.myForm.controls.image.valid
  }

  //get author data from user using form and make validation test with specific requirement
  myForm = new FormGroup({

    fName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    lName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    dob:new FormControl('',[Validators.required]),

    image: new FormControl('' , [Validators.required , Validators.pattern('[a-zA-Z0-9]*')])
  })

  //navigate to author page
  goToAuthorsList() {
    this.router.navigate(['/admin/author']);
  }

  //send author data to backend
  submitForm(){
    //get updated information about the author
    this.author.firstName = this.myForm.controls.fName.value;
    this.author.lastName = this.myForm.controls.lName.value;
    this.author.birthDay = this.myForm.controls.dob.value;
    this.author.image = this.myForm.controls.image.value;
    //check on the data is valid or invalid
    if (this.getDOBStatus() && this.getFNameStatus() && this.getLNameStatus() && this.getImageStatus()){
      //send updated data to backend
      this.myService.updateAuthor(this.author.id, this.author)
      .subscribe((data) => {
        this.updated();
        this.goToAuthorsList()
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error, Author hasn't been updated !",
          footer: ''
        })
    }else {
      this.incorrectData = true;
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
      'Author updated Successfully!',
      'success'
    )
  }
}
