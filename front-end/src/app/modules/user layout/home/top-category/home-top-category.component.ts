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

  subscriber: any;
  settings: any;
  popularCategoryValue:string="";

  constructor(private settingService: SettingsService) { }
  
  ngOnInit(): void {
    this.subscriber = this.settingService.getSettings()
    .subscribe((response:any)=>{
      console.log(response.body)
      this.settings = response.body
      this.settings.find((section:any) => {
        if(section.sectionName == "TitleData")
        {
          this.popularCategoryValue=section.sectionContent.popularCategory;
        }
      });
    },
    (err)=>{
      console.log(err)
    }
    )
  }

}
