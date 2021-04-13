import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service'
import { BookObj } from '../models/book'

@Component({
  selector: 'app-user-profile-cards',
  templateUrl: './user-profile-cards.component.html',
  styleUrls: ['./user-profile-cards.component.css']
})
export class UserProfileCardsComponent implements OnInit {

  subscriber:any;
  toggleFlag:boolean = false;
  currentBooksType:string = "All";
  currentPage:number = 1;
  maxPages:number = 1;
  paginationPages:number[] = [4,5,6];
  bookImages:string[] = [];
  bookNames:string[] = [];
  bookIAuthoe:string[] = [];
  bookRate:string[] = [];
  bookOverallRate:string[] = [];
  bookUserType:string[] = [];

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    //this.getPage(this.currentCategory , this.currentPage);
  }

  showDropList(event:any){
      this.toggleFlag = !this.toggleFlag;
  }

  selectBooksType(booksType:string){
    this.currentBooksType = booksType;
    this.currentPage = 1;
    //this.getPage(this.currentCategory , this.currentPage);
  }
  searchBook(book:string){
    this.currentPage = 1;
    //this.getPage(this.currentCategory , this.currentPage , book);
  }

  // changePagination(event:Event , type:any){
  //   if(type == "back" && this.currentPage > 1){
  //     this.currentPage--;
  //     this.getPage(this.currentCategory , this.currentPage);
  //   }
  //   else if(type == "next" && this.currentPage < this.maxPages){
  //     this.currentPage++;
  //     this.getPage(this.currentCategory , this.currentPage);
  //   }
  //   else{
  //     this.currentPage = type;
  //     this.getPage(this.currentCategory , this.currentPage);
  //   }
  // }

  getPage(type:string , page:number , book:string="")
  {
    this.books = [];
    this.subscriber = this.userProfileService.getCategoryPage(type,page,book)
    .subscribe((response:any)=>{
      console.log(response.body)
      this.maxPages = Math.ceil(response.body.bookNumbers / 4);
      console.log(this.maxPages)
      let books = response.body.pagebooks;
      books.find((book:BookObj , index:number) => {
        if(index < 4 && index < books.length)
          this.row1.push(book.name)
      })
      console.log(this.row1 , this.row2)
      this.books = [this.row1 , this.row2 ]
      console.log(this.books)
      this.calculatePagination();
    },
    (err)=>{
      console.log(err)
    })
  }

  calculatePagination(){
    console.log(this.maxPages)
    switch(this.maxPages)
    {
      case 0:
        this.paginationPages = [0];
        break;
      case 1:
        this.paginationPages = [1];
        break;
      case 2:
        this.paginationPages = [1,2];
        break;
      default:
        if(this.currentPage == 1)
          this.paginationPages = [1,2,3];
        else if (this.currentPage == this.maxPages)
          this.paginationPages = [this.maxPages - 2 , this.maxPages - 1 , this.maxPages];
        else
          this.paginationPages = [this.maxPages - 1 , this.maxPages , this.maxPages + 1];
        break;
    }
  }

}

