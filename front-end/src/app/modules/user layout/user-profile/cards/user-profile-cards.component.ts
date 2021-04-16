import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  userId:string = sessionStorage.getItem("userId")!; /*"6075b79ea7c3f52f7904ec09";*/
  currentBooksType:string = "All";
  currentPage:number = 1;
  maxPages:number = 1;
  @Output() paginationPages:{paginationPages:number[], currentPage:number} = {paginationPages: [] , currentPage: 1}
  bookImages:string[] = [];
  bookNames:string[] = [];
  bookIAuthor:string[] = [];
  bookRate:number[] = [];
  bookOverallRate:number[] = [];
  bookUserType:string[] = [];
  bookIds:string[] = [];
  myRatingIds:string[] = [];
  starsHover:number = 0;
  cardHover:number = 0; 

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.getPage(this.currentBooksType , this.currentPage);
  }

  showDropList(event:any){
      this.toggleFlag = !this.toggleFlag;
  }

  selectBooksType(booksType:string){
    this.currentBooksType = booksType;
    this.currentPage = 1;
    this.getPage(this.currentBooksType , this.currentPage);
  }

  searchBook(book:string){
    console.log("we are in search part")
    this.currentPage = 1;
    this.getPage(this.currentBooksType , this.currentPage , book);
  }

  submitRate(event:Event , index:number , ratingId:string , bookId:string){
    console.log("submit" , index , "book " , bookId , "rating: ", ratingId )
    if(ratingId){
      this.subscriber = this.userProfileService.updateRate(ratingId, index)
      .subscribe((response:any)=>{
      this.getPage(this.currentBooksType , this.currentPage);
        console.log(response.body)
        },
      (err)=>{
        console.log(err)
      })
    }
    else{
      this.subscriber = this.userProfileService.postRate(this.userId, bookId, index)
      .subscribe((response:any)=>{
      this.getPage(this.currentBooksType , this.currentPage);
        console.log(response.body)
        },
      (err)=>{
        console.log(err)
      })
    }
  }

  changePagination(type:any){
    if(type == "back" && this.currentPage > 1){
      this.currentPage--;
      this.getPage(this.currentBooksType , this.currentPage);
    }
    else if(type == "next" && this.currentPage < this.maxPages){
      this.currentPage++;
      this.getPage(this.currentBooksType , this.currentPage);
    }
    else if (type != "back" && type != "next"){
      this.currentPage = type;
      this.getPage(this.currentBooksType , this.currentPage);
    }
  }

  getPage(booktype:string , page:number , book:string="")
  {
    this.bookImages = [];
    this.bookNames = [];
    this.bookIAuthor = [];
    this.bookRate = [];
    this.bookOverallRate = [];
    this.bookUserType = [];
    this.bookIds = [];
    this.myRatingIds = [];
    this.subscriber = this.userProfileService.getUserProfilePage(this.userId,booktype,page,book)
    .subscribe((response:any)=>{
      this.maxPages = Math.ceil(response.body.bookNumbers / 4);
      let books = response.body.pagebooks;
      books.find((book:BookObj , index:number) => {
        if(index < 4 && index < books.length)
        {
          this.bookNames.push(book.name)
          this.bookImages.push(book.image)
          this.bookIAuthor.push(book.author)
          this.bookRate.push(book.myRating)
          this.bookOverallRate.push(book.bookRating)
          this.bookUserType.push(book.state)
          this.bookIds.push(book.bookId)
          this.myRatingIds.push(book.myRatingId)
        }
      })
      this.calculatePagination();
    },
    (err)=>{
      console.log(err)
    })
  }

  calculatePagination(){
    switch(this.maxPages)
    {
      case 0:
        this.paginationPages.paginationPages = [0];
        break;
      case 1:
        this.paginationPages.paginationPages = [1];
        break;
      case 2:
        this.paginationPages.paginationPages = [1,2];
        break;
      default:
        if(this.currentPage == 1 || this.currentPage == 2) 
          this.paginationPages.paginationPages = [1,2,3];
        else if (this.currentPage == this.maxPages)
          this.paginationPages.paginationPages = [this.maxPages - 2 , this.maxPages - 1 , this.maxPages]; 
        else
          this.paginationPages.paginationPages = [this.maxPages - 1 , this.maxPages , this.maxPages + 1];
        break;
    }
    this.paginationPages.currentPage = this.currentPage;
    this.setPaginationEmitter.emit(this.paginationPages)
  }

  @Output() setPaginationEmitter:EventEmitter<{paginationPages:number[] , currentPage:number}> = new EventEmitter()
}

