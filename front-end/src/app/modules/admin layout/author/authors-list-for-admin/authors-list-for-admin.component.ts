import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import {Author} from '../models/author';

@Component({
  selector: 'app-authors-list-for-admin',
  templateUrl: './authors-list-for-admin.component.html',
  styleUrls: ['./authors-list-for-admin.component.css','../../shared/style/dashboard.css']
})
export class AuthorsListForAdminComponent implements OnInit {

  constructor(private myService:AuthorsServiceService) { }
  authors:Array<Author> = []
  isLoad= false;

  mAuthor:Author =
  {
    id:"",
    firstName:"",
    lastName:"",
    name:"",
    birthDay:"",
    image:"",
    books:[]
  };

  subscriber:any;
  ngOnInit(): void {
    this.subscriber = this.myService.getAuthors()
    .subscribe((response:any)=>{
        this.authors = response.body
        this.isLoad = true
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
