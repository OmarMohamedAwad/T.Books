import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service'

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  subscriber: any;
  settings: any;
  emailValue:string="";
  phoneValue:string="";
  faxValue:string="";
  footerTitleValue:string="";
  footerDescriptionValue:string="";
  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    this.subscriber = this.settingService.getSettings()
    .subscribe((response:any)=>{
      console.log(response.body)
      this.settings = response.body
      this.settings.find((section:any) => {
        if(section.sectionName == "FooterData")
        {
          this.emailValue=section.sectionContent.email;
          this.phoneValue=section.sectionContent.phone;
          this.faxValue=section.sectionContent.fax;
          this.footerTitleValue=section.sectionContent.footerTitle;
          this.footerDescriptionValue=section.sectionContent.footerDescription;
        }
      });
    },
    (err)=>{
      console.log(err)
    }
    )
  }

}


// subscriber: any;
// settings: any;
// headerTitleValue:string="";
// headerParagraphValue:string="";
// popularBooksValue:string="";
// popularAuthorValue:string="";
// popularCategoryValue:string="";

// constructor() { }

// ngOnInit(): void {
//   this.subscriber = this.settingService.getSettings()
//   .subscribe((response:any)=>{
//     console.log(response.body)
//     this.settings = response.body
//     this.settings.find((section:any) => {
//       if(section.sectionName == "headerData")
//       {
//         this.headerTitleValue=section.sectionContent.headerTitle;
//         this.headerParagraphValue=section.sectionContent.headerParagraph;
//       }
//       else if(section.sectionName == "TitleData")
//       {
//         this.popularBooksValue=section.sectionContent.popularBooks;
//         this.popularAuthorValue=section.sectionContent.popularAuthor;
//         this.popularCategoryValue=section.sectionContent.popularCategory;
//       }
//       else if(section.sectionName == "FooterData")
//       {
//         this.emailValue=section.sectionContent.email;
//         this.phoneValue=section.sectionContent.phone;
//         this.faxValue=section.sectionContent.fax;
//         this.footerTitleValue=section.sectionContent.footerTitle;
//         this.footerDescriptionValue=section.sectionContent.footerDescription;
//       }
//     });
//   },
//   (err)=>{
//     console.log(err)
//   }
//   )
// }