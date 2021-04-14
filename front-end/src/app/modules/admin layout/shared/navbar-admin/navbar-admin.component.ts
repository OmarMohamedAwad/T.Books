import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from 'src/app/services/admin-login.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private service:AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  refreashToken:any = "";
  logout()
  {
    this.refreashToken = "sasasasasdklfl"

    // this.refreashToken = sessionStorage.getItem("refreshToken")
    this.service.logoutAdmin({refreshToken:this.refreashToken})
      .subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/admin/login']);
      },(err)=>{
        console.log(err);
    })
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
  }
}
