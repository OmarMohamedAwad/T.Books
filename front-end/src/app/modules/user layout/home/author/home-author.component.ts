import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.css']
})
export class HomeAuthorComponent implements OnInit {
  row1:string[] = ["assets/user/home/authors/author1.jpeg" , "assets/user/home/authors/author2.jpeg" , "assets/user/home/authors/author3.jpeg" , "assets/user/home/authors/author4.jpeg" , "assets/user/home/authors/author5.jpeg" , "assets/user/home/authors/author6.jpeg"]
  row2:string[] = []
  authors:string[][] = [ this.row1 , this.row2 ];
  constructor() { }

  ngOnInit(): void {
  }

}
