import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import {Author} from '../models/author';
@Component({
  selector: 'app-authors-list-for-admin',
  templateUrl: './authors-list-for-admin.component.html',
  styleUrls: ['./authors-list-for-admin.component.css','../../shared/style/dashboard.css']
})
export class AuthorsListForAdminComponent implements OnInit ,OnChanges{
  @Input('keywords')  keywords:string = "";

  constructor(private myService:AuthorsServiceService) { }
  authors:Array<Author> = []
  isLoad= false;

  //authors:Array<Author> = []
  allAuthors:Array<Author> = []
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
        this.authors=this.allAuthors = response.body
    },
    (err)=>{
      console.log(err)
    }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.filterList(this.keywords)
  }
  // authors:any = this.allAuthors
  filterList(keywords:string){
    this.authors= this.allAuthors.filter((item)=>{
      return item.name.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())
    })
  }

  getAuthor(a:any)
  {
    this.mAuthor = a;
  }


}
