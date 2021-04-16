import { Component, OnInit, OnDestroy, ViewChild,ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthorsServiceService} from '../../../../services/authors-service.service'


@Component({
  selector: 'app-user-author-index',
  templateUrl: './user-author-index.component.html',
  styleUrls: ['./user-author-index.component.css']
})
export class UserAuthorIndexComponent implements OnInit, OnDestroy {
  @ViewChild('search_box')searchBox!:ElementRef<HTMLInputElement>;
  keywords:string = "";
  authors:any;
  lastSearchContent:string="";
  search:boolean = false;
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
        },(err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Error getting authors information !",
            footer: ''
          })
        })
  }
  captureSearchContent(page=1){
    this.pageNumber=page;
    this.search=true;
    this.lastSearchContent=this.keywords=this.searchBox.nativeElement.value;
    this.filter(this.lastSearchContent,page);
  }
  filter(searchContent:any,page:number){
    this.subscriber = this.authorService.search(searchContent,page).subscribe((res:any)=>{
      this.authors=res.body.authors;
      this.allPagesCount= res.body.pages;
    },(err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error, Can't get search results",
        footer: ''
      })
    })
  }
  sendID(id:any){
    this.authorService.sendID(id);
    console.log("id from index"+id);
  }
  prev(){
    if( !this.search && this.pageNumber > 1 )
      this.getAuthors(--this.pageNumber)
    else if(this.search)
      this.filter(this.lastSearchContent,--this.pageNumber)
  }
  next(){
    if( !this.search && this.pageNumber< this.allPagesCount )
      this.getAuthors(++this.pageNumber)
    else if(this.search)
      this.filter(this.lastSearchContent,++this.pageNumber)
  }
  ngOnDestroy():void{
    this.subscriber.unsubscribe();
  }
}
