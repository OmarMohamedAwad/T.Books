import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from 'src/app/services/admin-login.service'

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private service:AdminLoginService) { }

  ngOnInit(): void {
  }

  refreashToken:any = "";
  logout()
  {
    console.log("out")

    this.refreashToken = "sasasasasdklfl"

    // this.refreashToken = sessionStorage.getItem("refreshToken") 
    this.service.logoutAdmin({refreshToken:this.refreashToken})
      .subscribe((data)=>{
        console.log(data)
        
      },(err)=>{

    })
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
  }
}
