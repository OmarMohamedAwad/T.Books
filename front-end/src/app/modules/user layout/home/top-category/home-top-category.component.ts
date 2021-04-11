import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-home-top-category',
  templateUrl: './home-top-category.component.html',
  styleUrls: ['./home-top-category.component.css']
})
export class HomeTopCategoryComponent implements OnInit {

  subscriber:any;

  row1:string[] = []
  row2:string[] = []
  topCategories:string[][] = [ this.row1 , this.row2 ];
  coleredBackground:string[] = ["bg-bink one" , "bg-blue two" , "bg-yellow three"]

  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
      home = response.body.categories;
      console.log(home)
      for(let i = 0 ; i < 3 ; i++)
      {
        this.row1.push(home[i].categoryImage)
      }
      this.topCategories = [ this.row1 , this.row2 ];
      console.log(this.topCategories)
    },
    (err)=>{
      console.log(err)
    }
    )
  }

}
