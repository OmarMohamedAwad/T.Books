import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-home-popular-book',
  templateUrl: './home-popular-book.component.html',
  styleUrls: ['./home-popular-book.component.css']
})
export class HomePopularBookComponent implements OnInit {

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
      for(let i = 0; i < home.length && i < 4; i++)
      {
        this.row1.push(home[i].bookImage)
        this.bookNameRow1.push(home[i].bookName)
        this.bookAuthorRow1.push(home[i].bookAuthor.autherFirstName)
      }
      for(let i = 4; i < home.length && i < 8; i++)
      {
        this.row2.push(home[i].bookImage)
        this.bookNameRow2.push(home[i].bookName)
        this.bookAuthorRow2.push(home[i].bookAuthor.autherFirstName)
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
