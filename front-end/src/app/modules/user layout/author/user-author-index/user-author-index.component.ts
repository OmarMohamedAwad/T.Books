import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorsServiceService} from '../../../../services/authors-service.service'


@Component({
  selector: 'app-user-author-index',
  templateUrl: './user-author-index.component.html',
  styleUrls: ['./user-author-index.component.css']
})
export class UserAuthorIndexComponent implements OnInit, OnDestroy {
  authors:any;
  isLoad=false;
  authorId:any=0;
  subscriber:any;
  pageNumber: number = 1;
  allPagesCount:number= -1;
  pages = new Array(1);
  public data = this.authorId;

  constructor(private authorService:AuthorsServiceService){}
  ngOnInit(): void {
    this.isLoad=true;
    this.getAuthors(1);
  }
  getAuthors(page:number){
    this.subscriber = this.authorService.pagination(page).subscribe((res:any)=>{
          this.authors = res.body.authors;
          this.allPagesCount = res.body.pages;
          console.log(this.allPagesCount );
          this.pages = new Array(this.allPagesCount)
        },(err)=>{console.log(err)})
  }
  sendID(id:any){
    this.authorService.sendID(id);
    console.log("id from index"+id);
  }
  prev(){
    if(this.pageNumber > 1){
      this.getAuthors(--this.pageNumber);
    }
  }
  next(){
    if(this.pageNumber < this.allPagesCount){
      this.getAuthors(++this.pageNumber);
    }
  }
  ngOnDestroy():void{
    this.subscriber.unsubscribe();
  }
}
