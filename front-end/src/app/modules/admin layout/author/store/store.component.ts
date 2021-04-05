import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private myService:AuthorsServiceService) { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({

    fName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),
    
    lName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),
      
    dob:new FormControl('',[Validators.required]),

  })


  submitForm(e:any)
  {
    console.log(this.myForm.controls.fName.value)
    console.log(this.myForm.controls.lName.value)
    console.log(this.myForm.controls.dob.value)
    this.myService.postAuthor({autherFirstName:this.myForm.controls.fName.value, 
      autherLastName:this.myForm.controls.lName.value, authorDob: this.myForm.controls.dob.value
      /*image: this.myForm.controls.fName.value*/})
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log("post error")
      })
  }

}
