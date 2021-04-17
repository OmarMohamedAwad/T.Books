import {Component, OnInit} from '@angular/core';
import {AdminLoginService} from 'src/app/services/admin-login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  //properties
  box_login = document.getElementById('l_box');
  password_login = document.getElementById('l_pass');
  box_signup = document.getElementById('s_box');
  password_signup = document.getElementsByName('s_pass');
  login_toggle = document.getElementById('login-toggle');
  login_form = document.getElementById('login-form');
  userPassStatus: any;
  show = false;
  tokens: any;

  //constructor
  constructor(private myService: AdminLoginService, private router: Router) {}

  //start the component
  ngOnInit(): void {
    document.body.className = 'app-access';
    this.userPassStatus = false;
  }

  //get data from user
  myForm = new FormGroup({
    adminName: new FormControl('', [Validators.required]),
    adminPassword: new FormControl('', [Validators.required])
  });

  //navigate to dashboard page
  enterSite() {
    this.router.navigate(['/admin/dashboard']);
  }
  
  //show or hide password
  togglePassword(){
    this.show = !this.show
  }

  //login function
  login() {
    //send user name and password to backend to check.
    this.myService.postAdmin({
      adminName: this.myForm.controls.adminName.value,
      adminPassword: this.myForm.controls.adminPassword.value
    })
    .subscribe((data) => {
      //save tokens in session storage to use it for every next request 
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
      //
    }, (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Invalid name or password or both, try again",
            footer: ''
          })
       }
    );
  }

  //end of component
  ngOnDestroy() {
    document.body.className = '';
  }

}
