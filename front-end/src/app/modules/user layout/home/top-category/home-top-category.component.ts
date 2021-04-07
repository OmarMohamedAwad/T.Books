import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-category',
  templateUrl: './home-top-category.component.html',
  styleUrls: ['./home-top-category.component.css']
})
export class HomeTopCategoryComponent implements OnInit {

  row1:string[] = ["assets/user/home/categories/art category" , "assets/user/home/categories/science category" , "assets/user/home/categories/category cooking"]
  row2:string[] = []
  topCategories:string[][] = [ this.row1 , this.row2 ];
<<<<<<< HEAD
  coleredBackground:string[] = ["bg-bink" , "bg-blue" , "bg-yellow"]
=======
  coleredBackground:string[] = ["bg-bink one" , "bg-blue two" , "bg-yellow three"]
>>>>>>> develop

  constructor() { }

  ngOnInit(): void {
  }

}
