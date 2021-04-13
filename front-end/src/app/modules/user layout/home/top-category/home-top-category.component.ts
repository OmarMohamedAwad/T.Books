import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-home-top-category',
  templateUrl: './home-top-category.component.html',
  styleUrls: ['./home-top-category.component.css']
})
export class HomeTopCategoryComponent implements OnInit {

  subscriber:any;

  topCategories:string[] = [];
  coleredBackground:string[] = ["bg-bink one" , "bg-blue two" , "bg-yellow three"]

  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
      home = response.body.categories;
      console.log(home)
      for(let i = 0; i < home.length && i < 3; i++)
      {
        this.topCategories.push(home[i].categoryImage)
      }
      console.log(this.topCategories)
    },
    (err)=>{
      console.log(err)
    }
    )
  }

}
