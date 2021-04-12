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
        if(section.sectionName == "home")
        {
          this.homeHeaderForm.controls.title.setValue(section.sectionContent.title);
          this.homeHeaderForm.controls.sub_title.setValue(section.sectionContent.sub_title);
        }
        else if(section.sectionName == "titles")
        {
          this.HomeTitleForm.controls.book.setValue(section.sectionContent.book);
          this.HomeTitleForm.controls.author.setValue(section.sectionContent.author);
          this.HomeTitleForm.controls.category.setValue(section.sectionContent.category);
        }
        else if(section.sectionName == "footer-info")
        {
          this.HomeFooterForm.controls.email.setValue(section.sectionContent.email)
          this.HomeFooterForm.controls.phone.setValue(section.sectionContent.phone)
          this.HomeFooterForm.controls.fax.setValue(section.sectionContent.fax)
          this.HomeFooterForm.controls.title.setValue(section.sectionContent.title)
          this.HomeFooterForm.controls.capation.setValue(section.sectionContent.capation)
        }
      });
    },
    (err)=>{
      console.log(err)
    }
    )
  }

  homeHeaderForm = new FormGroup({

    title: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]*/),
    
    sub_title: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]*/)
  })

  submitHeaderForm(e:any)
  {
    console.log(this.homeHeaderForm.controls.title.value)
    console.log(this.homeHeaderForm.controls.sub_title.value)
    let insertedData : any = 
    {
    "title": this.homeHeaderForm.controls.title.value,
    "sub_title": this.homeHeaderForm.controls.sub_title.value
    };
    this.settingService.updateSetting("home" , {sectionName:"home", sectionContent: <JSON>insertedData})
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log("post error")
      })
  }


  HomeTitleForm = new FormGroup({

    book:new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')]*/),
    
    author:new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/),

    category:new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/)
      

  })
  submitTitleForm(e:any){
    console.log(this.HomeTitleForm.controls.book.value)
    console.log(this.HomeTitleForm.controls.author.value)
    console.log(this.HomeTitleForm.controls.category.value)
    let insertedData : any = 
    {
    "book": this.HomeTitleForm.controls.book.value,
    "author": this.HomeTitleForm.controls.author.value,
    "category": this.HomeTitleForm.controls.category.value
    };
    this.settingService.updateSetting("titles" , {sectionName:"titles", sectionContent: <JSON>insertedData})
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

    title: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/),
    
    capation: new FormControl('',[Validators.required]/*,Validators.maxLength(50),Validators.minLength(2),
    Validators.pattern('[a-zA-Z]*')]*/)
  })

  submitFooterForm(e:any){
    console.log(this.HomeFooterForm.controls.email.value)
    console.log(this.HomeFooterForm.controls.phone.value)
    console.log(this.HomeFooterForm.controls.fax.value)
    console.log(this.HomeFooterForm.controls.title.value)
    console.log(this.HomeFooterForm.controls.capation.value)
    let insertedData : any = 
    {
    "email": this.HomeFooterForm.controls.email.value,
    "phone": this.HomeFooterForm.controls.phone.value,
    "fax": this.HomeFooterForm.controls.fax.value,
    "title": this.HomeFooterForm.controls.title.value,
    "capation": this.HomeFooterForm.controls.capation.value
    };
    this.settingService.updateSetting("footer-info" , {sectionName:"footer-info", sectionContent: <JSON>insertedData})
      .subscribe((data)=>{
        console.log(data)
      },(err)=>{
        console.log(err)
      })
  }

}












