import { Book } from './../../../../admin layout/book/models/book';
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
author:any;

authorID:any;
ratings=[1,2,3,4,5,4,5,3];

  ngOnInit(): void {
    this.getAuthorById();

  }

getAuthorById(){
  this.authorService.show(this.authorID).subscribe(
    (res)=>{
      console.log(this.authorID);
      this.author=res;
      console.log(this.author);
      console.log(this.author.books.length)
      console.log(this.author.books[0].bookName);
    }
  )
}

}
