import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private myService:AuthorsServiceService) { }

  ngOnInit(): void {
  }

  @Input('authorInfo') author:{id:string,autherFirstName:string,autherLastName:string,authorDob:string} = {
    id:'',
    autherFirstName:'',
    autherLastName:'',
    authorDob:''
  }

  a:any;
  deleteFun()
  {
    this.a = this.author;
    console.log("delete")
    console.log(this.a._id)
    this.myService.deleteAuthor(this.a._id)
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log("post error")
      })
  }
  submitForm()
  {
    console.log("submit")
    console.log(this.author)
    // this.myService.deleteAuthor("6069dd2d280c79391bc381fe")
    //   .subscribe((data)=>{
    //     console.log(data)
    //   },(err)=>{
    //     console.log("post error")
    //   })
  }
}
