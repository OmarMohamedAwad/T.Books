import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Author} from '../models/author';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css','../../shared/style/dashboard.css']
})

export class StoreComponent implements OnInit {

  //properties
  incorrectData = false;
  newAuth:Author = {
    id:"",
    firstName:"",
    lastName:"",
    name:"",
    birthDay:"",
    image:"",
    books:[]
  };
  
  //constructor
  constructor(private myService:AuthorsServiceService, private router: Router) {}

  //start the component
  ngOnInit(): void {}

  //get author data from user using form and make validation test with specific requirement
  myForm = new FormGroup({

    fName:new FormControl('' , [Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    lName:new FormControl('' , [Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    dob:new FormControl('' , [Validators.required]),

    image: new FormControl('' , [Validators.required , Validators.pattern('[a-zA-Z0-9]*')])

  })

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

  //navigate to author page
  goToAuthorsList(){
    this.router.navigate(['/admin/author']);
  }

  //send author data to backend
  submitForm(e:any){
    //get values from form
    this.newAuth.firstName = this.myForm.controls.fName.value;
    this.newAuth.lastName = this.myForm.controls.lName.value;
    this.newAuth.birthDay = this.myForm.controls.dob.value;
    this.newAuth.image = this.myForm.controls.image.value;
    //check on the data is valid or invalid
    if (this.getDOBStatus() && this.getFNameStatus() && this.getLNameStatus() && this.getImageStatus()){
      //send the data to backend
      this.myService.postAuthor(this.newAuth)
        .subscribe((data)=>{
          this.goToAuthorsList()
        },(err)=>{
          //the data didn't add to the database in the backend
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Server Error, Author hasn't been saved !",
            footer: ''
          })      
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
}
