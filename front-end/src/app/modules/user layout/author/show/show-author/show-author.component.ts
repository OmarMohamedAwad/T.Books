import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/modules/admin layout/author/models/author';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  constructor(private authorService: AuthorsServiceService,
    private myActivatedRoute:ActivatedRoute, private router: Router) {
      this.authorID = this.myActivatedRoute.snapshot.params.id;

    }
author:Author =
  {
    id:"",
    firstName:"",
    lastName:"",
    name:"",
    birthDay:"",
    image:"",
    books:[]
  };
authorID:any;

  ngOnInit(): void {
    this.getAuthorById();

  }

getAuthorById(){
  this.authorService.show(this.authorID).subscribe(
    (res)=>{
      console.log(this.authorID);
      this.author=res;
      console.log(this.author);
    }
  )
}

}
