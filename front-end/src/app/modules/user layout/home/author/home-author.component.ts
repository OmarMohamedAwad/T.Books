import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.css']
})
export class HomeAuthorComponent implements OnInit {
<<<<<<< HEAD

  mAuthor:{id:string,autherFirstName:string,autherLastName:string,authorDob:string} = 
  {
    id:"",
    autherFirstName:"",
    autherLastName:"",
    authorDob:""
    // authorImage:""
  };

  row1:string[] = ["assets/user/home/authors/author1.jpeg" , "assets/user/home/authors/author2.jpeg" , "assets/user/home/authors/author3.jpeg" , "assets/user/home/authors/author4.jpeg" , "assets/user/home/authors/author5.jpeg" , "assets/user/home/authors/author6.jpeg"]
  row2:string[] = []
  authors:string[][] = [ this.row1 , this.row2 ];

  
=======
  row1:string[] = ["assets/user/home/authors/author1.jpeg" , "assets/user/home/authors/author2.jpeg" , "assets/user/home/authors/author3.jpeg" , "assets/user/home/authors/author4.jpeg" , "assets/user/home/authors/author5.jpeg" , "assets/user/home/authors/author6.jpeg"]
  row2:string[] = []
  authors:string[][] = [ this.row1 , this.row2 ];
>>>>>>> develop
  constructor() { }

  ngOnInit(): void {
  }

}
