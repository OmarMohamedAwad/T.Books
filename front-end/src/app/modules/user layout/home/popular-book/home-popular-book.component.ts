import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-popular-book',
  templateUrl: './home-popular-book.component.html',
  styleUrls: ['./home-popular-book.component.css']
})
export class HomePopularBookComponent implements OnInit {
  row1:string[] = ["assets/user/home/books/book1.jpeg" , "assets/user/home/books/book2.jpeg" , "assets/user/home/books/book3.jpeg" , "assets/user/home/books/book4.jpeg"]
  row2:string[] = ["assets/user/home/books/book5.jpeg" , "assets/user/home/books/book6.jpeg" , "assets/user/home/books/book7.jpeg" , "assets/user/home/books/book8.jpeg"]
  popularbooks:string[][] = [ this.row1 , this.row2 ];
  constructor() { }

  ngOnInit(): void {
  }

}
