import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.css']
})
export class HomeAuthorComponent implements OnInit {

  subscriber:any;

 
  authorsImages:string[] = [];
  authorsNames:string[] = [];

  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
      home = response.body.authors;
      console.log(home)
      for(let i = 0 ;  i < home.length && i < 6 ; i++)
      {
        this.authorsImages.push(home[i].authorImage)
        this.authorsNames.push(home[i].autherFirstName)
      }
      console.log(this.authorsImages)
      console.log(this.authorsNames)
    },
    (err)=>{
      console.log(err)
    }
    )
  }
}
