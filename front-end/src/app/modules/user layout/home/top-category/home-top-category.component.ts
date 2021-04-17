import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-top-category',
  templateUrl: './home-top-category.component.html',
  styleUrls: ['./home-top-category.component.css']
})
export class HomeTopCategoryComponent implements OnInit {

  subscriber:any;
  loading = false
  topCategories:string[] = [];
  coleredBackground:string[] = ["bg-bink one" , "bg-blue two" , "bg-yellow three"]
  categoriesName:string [] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
      home = response.body.categories;
      this.loading = true
      for(let i = 0; i < home.length && i < 3; i++)
      {
        this.topCategories.push(home[i].categoryImage)
        this.categoriesName.push(response.body.categories[i].categoryName)
      }
      console.log(this.topCategories)
    },
    (err)=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error, Can't load home content!",
        footer: ''
      })
    })
  }

}
