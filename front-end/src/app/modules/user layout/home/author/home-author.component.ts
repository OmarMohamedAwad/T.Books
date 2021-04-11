import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.css']
})
export class HomeAuthorComponent implements OnInit {

  // mAuthor:{id:string,autherFirstName:string,autherLastName:string,authorDob:string} = 
  // {
  //   id:"",
  //   autherFirstName:"",
  //   autherLastName:"",
  //   authorDob:""
  //   // authorImage:""
  // };

  subscriber:any;

  row1:string[] = []
  row2:string[] = []
  authorsImages:string[][] = [ this.row1 , this.row2 ];

  rowName1:string[] = []
  rowName2:string[] = []
  authorsNames:string[][] = [ this.row1 , this.row2 ];

  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
      home = response.body.authors;
      console.log(home)
      for(let i = 0 ; i < 6; i++)
      {
        this.row1.push(home[i].authorImage)
        this.rowName1.push(home[i].autherFirstName)
      }
      this.authorsImages = [ this.row1 , this.row2 ];
      this.authorsNames = [ this.rowName1 , this.rowName2 ];
      console.log(this.authorsImages)
      console.log(this.authorsNames)
    },
    (err)=>{
      console.log(err)
    }
    )
  }
}
