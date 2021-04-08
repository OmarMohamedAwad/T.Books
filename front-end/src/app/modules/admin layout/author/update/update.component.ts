import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnChanges {

  constructor(private myService:AuthorsServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.myForm.controls.fName.setValue(this.author.autherFirstName)
    this.myForm.controls.lName.setValue(this.author.autherLastName)
    this.myForm.controls.dob.setValue(this.author.authorDob)
  }

  ngOnInit(): void {
  }

  @Input('authorInfo') author:{id:string,autherFirstName:string,autherLastName:string,authorDob:string} = {
    id:'',
    autherFirstName:'',
    autherLastName:'',
    authorDob:''
  }
  // a:any;

  myForm = new FormGroup({

    fName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    lName:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]),

    dob:new FormControl('',[Validators.required]),
  })

  updateFun()
  {
    // this.a=this.author
    // this.myForm.controls.fName.setValue(this.author.autherFirstName);

    console.log("updateeeeee")
    // console.log(this.a)
    console.log(this.myForm.controls.fName.value)
    console.log(this.myForm.controls.lName.value)
    console.log(this.myForm.controls.dob.value)


  }

  a:any

  submitForm()
  {
    this.a = this.author;
    console.log(this.a._id)
    console.log(this.myForm.controls.fName.value)
    console.log(this.myForm.controls.lName.value)
    console.log(this.myForm.controls.dob.value)

    this.myService.updateAuthor(this.a._id,{autherFirstName:this.myForm.controls.fName.value,
      autherLastName:this.myForm.controls.lName.value, authorDob:this.myForm.controls.dob.value
      /*image: this.myForm.controls.fName.value*/})
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log("post error")
      })
  }
}
