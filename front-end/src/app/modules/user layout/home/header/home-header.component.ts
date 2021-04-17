import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  slidePhotos:Array<string> = ["assets/user/home/header1.jpeg" , "assets/user/home/header1.jpeg"]
  currentSlide:number = 0;
  subscriber: any;
  settings: any;
  headerTitleValue:string="";
  headerParagraphValue:string="";
  constructor(private settingService: SettingsService) { }

ngOnInit(): void {
  this.subscriber = this.settingService.getSettingId("home")
  .subscribe((response:any)=>{
    this.settings = response
    this.headerTitleValue = this.settings.sectionContent.title;
    this.headerParagraphValue = this.settings.sectionContent.sub_title;
    },
  (err)=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Error, Can't get header content !",
      footer: ''
    })
  }
  )
}

}
