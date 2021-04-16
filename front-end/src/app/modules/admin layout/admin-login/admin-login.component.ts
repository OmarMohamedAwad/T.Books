import {Component, OnInit} from '@angular/core';
import {AdminLoginService} from 'src/app/services/admin-login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StoreComponent} from '../author/store/store.component';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  box_login = document.getElementById('l_box');
  password_login = document.getElementById('l_pass');
  box_signup = document.getElementById('s_box');
  password_signup = document.getElementsByName('s_pass');
  login_toggle = document.getElementById('login-toggle');
  login_form = document.getElementById('login-form');
  show = false;

  constructor(private myService: AdminLoginService, private router: Router) {

  }

  myForm = new FormGroup({
    adminName: new FormControl('', [Validators.required]),
    adminPassword: new FormControl('', [Validators.required])
  });
  userPassStatus: any;

  ngOnInit(): void {
    document.body.className = 'app-access';
    this.userPassStatus = false;
  }

  tokens: any;

  enterSite() {
    this.router.navigate(['/admin/dashboard']);
  }

  login() {
    console.log(this.myForm.controls.adminName.value,this.myForm.controls.adminPassword.value);
    this.myService.postAdmin({
      adminName: this.myForm.controls.adminName.value,
      adminPassword: this.myForm.controls.adminPassword.value
    })
      .subscribe((data) => {
        console.log(data);
        this.tokens = data;
        try {
          if (this.tokens.token.accessToken != undefined) {
            sessionStorage.setItem('accessToken', this.tokens.token.accessToken);
            sessionStorage.setItem('refreshToken', this.tokens.token.refreshToken);
            this.enterSite();
          }
        } catch {
          this.userPassStatus = true;
        }
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Session Expired, Login again",
          footer: ''
        })
      });
  }

  togglePassword(){
    this.show = !this.show
  }

  ngOnDestroy() {
    document.body.className = '';
  }

}
