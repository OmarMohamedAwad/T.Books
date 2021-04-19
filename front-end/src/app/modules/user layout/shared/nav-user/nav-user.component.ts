import {state} from '@angular/animations';
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {HostListener} from '@angular/core';

import {UserAccessServiceService} from 'src/app/modules/user layout/access/services/user-access-service.service';
import {AdminLoginService} from '../../../../services/admin-login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  srcWidth = 0;
  is_open: boolean;
  refreshToken:any = "";
  userName: string | null = ""
  userRole:boolean =false
  @ViewChild('toggle_btn') toggle_btn!: ElementRef<HTMLButtonElement>;
  @ViewChild('collapseList') collapseList!: ElementRef<HTMLDivElement>;

  constructor(private service: UserAccessServiceService, private router: Router) {
    this.srcWidth = 0;
    this.is_open = false;
  }

  // userIsLoggedIn:any = false;
  userIsLoggedIn: any = sessionStorage.getItem('accessToken');

  ngOnInit(): void {
    console.log('status', this.userIsLoggedIn);
    this.userName = sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : localStorage.getItem("userName")
    this.userRole = sessionStorage.getItem("role")=="user";

  }

  userLogout() {
    console.log('out');

    this.refreshToken = sessionStorage.getItem('refreshToken');

    this.service.logoutUser({refreshToken: this.refreshToken})
      .subscribe((data) => {
        this.router.navigate(['/login']);
        console.log(data);
      }, (err) => {

      });
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userId');

    localStorage.removeItem("TOKEN");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");

  }

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    let navbar = document.querySelector('nav')!;
    if (window.pageYOffset > navbar.clientHeight) {
      navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.8)');
    } else if (window.innerWidth >= 992) {
      navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.3)');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.srcWidth = window.innerWidth;
    let navbar = document.querySelector('nav')!;
    if (this.srcWidth < 992) {
      navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.8)');
    } else {
      navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.3)');
    }
  }

  toggle_list(e: any) {
    if (this.is_open) {
      this.is_open = false;
      this.collapseList.nativeElement.setAttribute('style', 'display:none');
    } else {
      this.is_open = true;
      this.collapseList.nativeElement.setAttribute('style', 'display:block');
    }
  }


}
