import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService} from '../../../../services/authors-service.service'


@Component({
  selector: 'app-user-author-index',
  templateUrl: './user-author-index.component.html',
  styleUrls: ['./user-author-index.component.css']
})
export class UserAuthorIndexComponent implements OnInit {
  authors:any;
  isLoad=false;
  authorId:any=0;
  public data = this.authorId
  constructor(private _AuthorService:AuthorsServiceService){
    this.getAuthors();
  }
  ngOnInit(): void {
  }

  getAuthors(){
    this._AuthorService.getAuthors().subscribe((res)=>{
      this.authors=res.body;
      this.isLoad=true;
      console.log(this.authors)
    })
  }
  sendID(id:any){
    //this.categoryId=id;
    this._AuthorService.sendID(id);
    console.log("id from index"+id);
  }
}
