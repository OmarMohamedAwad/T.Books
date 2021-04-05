import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';


@Component({
  selector: 'app-authors-list-for-admin',
  templateUrl: './authors-list-for-admin.component.html',
  styleUrls: ['./authors-list-for-admin.component.css']
})
export class AuthorsListForAdminComponent implements OnInit {

  constructor(private myService:AuthorsServiceService) { }
  authors:Array<{id:string,autherFirstName:string,autherLastName:string,authorDob:string}> = []

  mAuthor:{id:string,autherFirstName:string,autherLastName:string,authorDob:string} = 
  {
    id:"",
    autherFirstName:"",
    autherLastName:"",
    authorDob:""
  };

  subscriber:any;
  ngOnInit(): void {
    this.subscriber = this.myService.getAuthors()
    .subscribe((response:any)=>{
      console.log(response.body)
      this.authors = response.body
    },
    (err)=>{
      console.log(err)
    }
    )
  }

  getAuthor(a:any)
  {
    this.mAuthor = a;
  }

}
