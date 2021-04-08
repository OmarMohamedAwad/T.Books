import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service'

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.css']
})
export class HomeAuthorComponent implements OnInit {

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

  subscriber: any;
  settings: any;
  popularAuthorValue:string="";
  
  constructor(private settingService: SettingsService) { }
  
  ngOnInit(): void {
    this.subscriber = this.settingService.getSettings()
    .subscribe((response:any)=>{
      console.log(response.body)
      this.settings = response.body
      this.settings.find((section:any) => {
        if(section.sectionName == "TitleData")
        {
          this.popularAuthorValue=section.sectionContent.popularAuthor;
        }
      });
    },
    (err)=>{
      console.log(err)
    }
    )
  }
}
