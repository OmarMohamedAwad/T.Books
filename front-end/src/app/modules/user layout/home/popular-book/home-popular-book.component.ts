import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-home-popular-book',
  templateUrl: './home-popular-book.component.html',
  styleUrls: ['./home-popular-book.component.css']
})
export class HomePopularBookComponent implements OnInit {
  // row1:string[] = ["assets/user/home/books/book1.jpeg" , "assets/user/home/books/book2.jpeg" , "assets/user/home/books/book3.jpeg" , "assets/user/home/books/book4.jpeg"]
  // row2:string[] = ["assets/user/home/books/book5.jpeg" , "assets/user/home/books/book6.jpeg" , "assets/user/home/books/book7.jpeg" , "assets/user/home/books/book8.jpeg"]
  // popularbooks:string[][] = [ this.row1 , this.row2 ];

  row1:string[] = []
  row2:string[] = []
  popularbooks:string[][] = [ [] , [] ];
  
  bookNameRow1:string[] = [];
  bookNameRow2:string[] = [];
  popularbooksNames:string[][] = [ [] , [] ];

  bookAuthorRow1:string[] = [];
  bookAuthorRow2:string[] = [];
  popularbooksAuthors:string[][] = [ [] , [] ];

  subscriber:any;

  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
      home = response.body.books;
      console.log(home)
      for(let i = 0 ; i < 4 ; i++)
      {
        this.row1.push(home[i].bookImage)
        this.bookNameRow1.push(home[i].bookName)
        this.bookAuthorRow1.push(home[i].bookAuthor)
      }
      for(let i = 4 ; i < 8 ; i++)
      {
        this.row2.push(home[i].bookImage)
        this.bookNameRow2.push(home[i].bookName)
        this.bookAuthorRow2.push(home[i].bookAuthor)
      }
      this.popularbooks = [ this.row1 , this.row2 ];
      this.popularbooksNames = [ this.bookNameRow1 , this.bookNameRow2 ];
      this.popularbooksAuthors = [ this.bookAuthorRow1 , this.bookAuthorRow2 ];
      console.log(this.popularbooks)
      console.log(this.popularbooksNames)
      console.log(this.popularbooksAuthors)
    },
    (err)=>{
      console.log(err)
    }
    )
  }

}
