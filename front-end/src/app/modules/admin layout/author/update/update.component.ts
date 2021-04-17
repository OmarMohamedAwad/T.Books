import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import { Router } from '@angular/router';
import {Author} from '../models/author';
<<<<<<< HEAD
import Swal from 'sweetalert2/dist/sweetalert2.js'
=======
import Swal from 'sweetalert2'

>>>>>>> aa9b5eefdf4346080c90eeef21449f1c2d883a84

@Component({
  selector: 'app-admin-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnChanges {

  constructor(private myService:AuthorsServiceService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.myForm.controls.fName.setValue(this.author.firstName)
    this.myForm.controls.lName.setValue(this.author.lastName)
    this.myForm.controls.dob.setValue(this.author.birthDay)
  }

  ngOnInit(): void {
  }

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
  myForm = new FormGroup({

    fName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    lName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    dob:new FormControl('',[Validators.required]),
  })

  goToAuthorsList() {
    this.router.navigate(['/admin/author']);
  }

  submitForm()
  {
    this.author.firstName = this.myForm.controls.fName.value;
    this.author.lastName = this.myForm.controls.lName.value;
    this.author.birthDay = this.myForm.controls.dob.value;
    this.myService.updateAuthor(this.author.id, this.author)
      .subscribe((data) => {
        console.log(data)
        this.updated();
        this.goToAuthorsList()
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error, Author hasn't been updated !",
          footer: ''
        })      
      })

  }
  updated(){
    Swal.fire(
      'Good job!',
      'Author updated Successfully!',
      'success'
    )
  }
}
