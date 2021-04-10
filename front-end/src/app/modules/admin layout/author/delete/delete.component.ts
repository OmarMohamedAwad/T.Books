import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private myService:AuthorsServiceService,  private router: Router) { }

  ngOnInit(): void {
  }

  @Input('authorInfo') author:{id:string,autherFirstName:string,autherLastName:string,authorDob:string} = {
    id:'',
    autherFirstName:'',
    autherLastName:'',
    authorDob:''
  }

  goToAuthorsList()
  {
    this.router.navigate(['/admin/author']);
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
        this.goToAuthorsList()
      },(err)=>{
        console.log("post error")
      })
  }
  
}
