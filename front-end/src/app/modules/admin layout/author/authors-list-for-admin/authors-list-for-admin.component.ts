import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import {Author} from '../models/author';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-authors-list-for-admin',
  templateUrl: './authors-list-for-admin.component.html',
  styleUrls: ['./authors-list-for-admin.component.css','../../shared/style/dashboard.css']
})

export class AuthorsListForAdminComponent implements OnInit ,OnChanges{
  //properties
  @Input('keywords')  keywords:string = "";
  subscriber:any;
  allAuthors:Array<Author> = [];
  mAuthor:Author =
  {
    id: "",
    firstName: "",
    lastName: "",
    name: "",
    birthDay: "",
    image: "",
    books: []
  };

  //constructor
  constructor(private myService:AuthorsServiceService) { }
  authors:Array<Author> = []
  isLoad= false;

  //start the component
  ngOnInit(): void {
    //get all data of authors from backend to display them
    this.subscriber = this.myService.getAuthors()
    .subscribe((response:any)=>{
        this.authors = response.body
        this.isLoad = true
        this.authors=this.allAuthors = response.body
    },
    (err)=>{
      //wrong massage 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Server error, Can't load page content !",
        footer: ''
      })
    }
    )
  }

  //with every change of the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.filterList(this.keywords)
  }

  //search about author in the list of authors
  filterList(keywords:string){
    this.authors= this.allAuthors.filter((item)=>{
      return item.name.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())
    })
  }

  //get the details for specifc author 
  getAuthor(a:any){
    this.mAuthor = a;
  }


}
