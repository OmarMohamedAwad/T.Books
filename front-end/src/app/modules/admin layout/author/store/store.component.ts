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

  newAuth:Author = {
    id:"",
    firstName:"",
    lastName:"",
    name:"",
    birthDay:"",
    image:"",
    books:[]
  };
  incorrectData = false;

  constructor(private myService:AuthorsServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({

    fName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    lName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    dob:new FormControl('',[Validators.required]),
    image: new FormControl('')

  })

  getFNameStatus(){
    return this.myForm.controls.fName.valid
  }

  getLNameStatus(){
    return this.myForm.controls.lName.valid
  }

  getDOBStatus(){
    return this.myForm.controls.dob.valid
  }

  goToAuthorsList()
  {
    this.router.navigate(['/admin/author']);
  }

  submitForm(e:any)
  {
    this.newAuth.firstName = this.myForm.controls.fName.value;
    this.newAuth.lastName = this.myForm.controls.lName.value;
    this.newAuth.birthDay = this.myForm.controls.dob.value;
    this.newAuth.image = this.myForm.controls.image.value;

    if (this.getDOBStatus() && this.getFNameStatus(), this.getLNameStatus()){
      this.myService.postAuthor(this.newAuth)
        .subscribe((data)=>{
          console.log(data)
          this.goToAuthorsList()
        },(err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Server Error, Author hasn't been saved !",
            footer: ''
          })      
        })
    }else {
      this.incorrectData = true
    }
  }

}
