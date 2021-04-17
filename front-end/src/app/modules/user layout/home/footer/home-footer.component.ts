import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service'
import Swal from 'sweetalert2';

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
    this.subscriber = this.settingService.getSettingId("footer-info")
    .subscribe((response:any)=>{
      this.settings = response;
      this.emailValue = this.settings.sectionContent.email;
      this.phoneValue = this.settings.sectionContent.phone;
      this.faxValue = this.settings.sectionContent.fax;
      this.footerTitleValue = this.settings.sectionContent.title;
      this.footerDescriptionValue = this.settings.sectionContent.capation;
    },
    (err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error, can't get footer content !",
        footer: ''
      })
    }
    )
  }

}
