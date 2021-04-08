import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  subscriber: any;
  settings: any;
  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    this.subscriber = this.settingService.getSettings()
    .subscribe((response:any)=>{
      console.log(response.body)
      this.settings = response.body
      this.settings.find((section:any) => {
        if(section.sectionName == "headerData")
        {
          this.homeHeaderForm.controls.headerTitle.setValue(section.sectionContent.headerTitle);
          this.homeHeaderForm.controls.headerParagraph.setValue(section.sectionContent.headerParagraph);
        }
        else if(section.sectionName == "TitleData")
        {
          this.HomeTitleForm.controls.popularBooks.setValue(section.sectionContent.popularBooks);
          this.HomeTitleForm.controls.popularAuthor.setValue(section.sectionContent.popularAuthor);
          this.HomeTitleForm.controls.popularCategory.setValue(section.sectionContent.popularCategory);
        }
        else if(section.sectionName == "FooterData")
        {
          this.HomeFooterForm.controls.email.setValue(section.sectionContent.email)
          this.HomeFooterForm.controls.phone.setValue(section.sectionContent.phone)
          this.HomeFooterForm.controls.fax.setValue(section.sectionContent.fax)
          this.HomeFooterForm.controls.footerTitle.setValue(section.sectionContent.footerTitle)
          this.HomeFooterForm.controls.footerDescription.setValue(section.sectionContent.footerDescription)
        }
      });
    },
    (err)=>{
      console.log(err)
    }
    )
  }

  homeHeaderForm = new FormGroup({

    headerTitle: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]*/),
    
    headerParagraph: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]*/)
  })

  submitHeaderForm(e:any)
  {
    console.log(this.homeHeaderForm.controls.headerTitle.value)
    console.log(this.homeHeaderForm.controls.headerParagraph.value)
    let insertedData : any = 
    {
    "headerTitle": this.homeHeaderForm.controls.headerTitle.value,
    "headerParagraph": this.homeHeaderForm.controls.headerParagraph.value
    };
    this.settingService.updateAuthor("headerData" , {sectionName:"headerData", sectionContent: <JSON>insertedData})
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log("post error")
      })
  }


  HomeTitleForm = new FormGroup({

    popularBooks:new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]*/),
    
    popularAuthor:new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/),

    popularCategory:new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/)
      

  })
  submitTitleForm(e:any){
    console.log(this.HomeTitleForm.controls.popularBooks.value)
    console.log(this.HomeTitleForm.controls.popularAuthor.value)
    console.log(this.HomeTitleForm.controls.popularCategory.value)
    let insertedData : any = 
    {
    "popularBooks": this.HomeTitleForm.controls.popularBooks.value,
    "popularAuthor": this.HomeTitleForm.controls.popularAuthor.value,
    "popularCategory": this.HomeTitleForm.controls.popularCategory.value
    };
    this.settingService.updateAuthor("TitleData" , {sectionName:"TitleData", sectionContent: <JSON>insertedData})
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log(err)
      })
  }


  HomeFooterForm  = new FormGroup({

    email: new FormControl('',[Validators.required , Validators.email]/*,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]*/),
    
    phone: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/),

    fax: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/),

    footerTitle: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/),
    
    footerDescription: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/)
  })

  submitFooterForm(e:any){
    console.log(this.HomeFooterForm.controls.email.value)
    console.log(this.HomeFooterForm.controls.phone.value)
    console.log(this.HomeFooterForm.controls.fax.value)
    console.log(this.HomeFooterForm.controls.footerTitle.value)
    console.log(this.HomeFooterForm.controls.footerDescription.value)
    let insertedData : any = 
    {
    "email": this.HomeFooterForm.controls.email.value,
    "phone": this.HomeFooterForm.controls.phone.value,
    "fax": this.HomeFooterForm.controls.fax.value,
    "footerTitle": this.HomeFooterForm.controls.footerTitle.value,
    "footerDescription": this.HomeFooterForm.controls.footerDescription.value
    };
    this.settingService.updateAuthor("FooterData" , {sectionName:"FooterData", sectionContent: <JSON>insertedData})
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log(err)
      })
  }

}
