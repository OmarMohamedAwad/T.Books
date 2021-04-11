import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service'

@Component({
  selector: 'app-home-top-category',
  templateUrl: './home-top-category.component.html',
  styleUrls: ['./home-top-category.component.css']
})
export class HomeTopCategoryComponent implements OnInit {

  row1:string[] = ["assets/user/home/categories/art category" , "assets/user/home/categories/science category" , "assets/user/home/categories/category cooking"]
  row2:string[] = []
  topCategories:string[][] = [ this.row1 , this.row2 ];
  coleredBackground:string[] = ["bg-bink one" , "bg-blue two" , "bg-yellow three"]

  constructor() { }
  
  ngOnInit(): void {
  }

}
