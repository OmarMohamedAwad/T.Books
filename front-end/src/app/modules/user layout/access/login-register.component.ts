import {AfterViewInit, ElementRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserAccessServiceService} from './services/user-access-service.service';
import {Router} from '@angular/router';
import {User} from './models/user';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit, AfterViewInit {
  @ViewChild('l_pass') password_login!: ElementRef<HTMLInputElement>;
  @ViewChild('s_pass') password_signup!: ElementRef<HTMLInputElement>;
  @ViewChild('s_pass_confirm') confirm_password_signup!: ElementRef<HTMLInputElement>;
  @ViewChild('login_toggle') login_toggle!: ElementRef<HTMLButtonElement>;
  @ViewChild('signup_toggle') signup_toggle!: ElementRef<HTMLButtonElement>;
  @ViewChild('login_form') login_form!: ElementRef<HTMLButtonElement>;
  @ViewChild('signup_form') signup_form!: ElementRef<HTMLButtonElement>;
  subscriber:any;
  userPassStatus= false
  userAccessToken: any;
  userRefreshToken: any;
  user: User ={
    id:"",
    firstName:"",
    lastName:"",
    avatar:"",
    userName:"",
    fullName:"",
    email:"",
    password:"",
    currentlyReadBooks:[],
    wantToReadBooks:[],
    readBooks:[],
    userRating:[],
    userReviews:[],
    token:"",
  };

  constructor(private userService: UserAccessServiceService, private router: Router) {
  }

  toggleLogin() {
    this.login_toggle.nativeElement.setAttribute('style', 'backgroundColor: #DE3241; color: #fff');
    this.signup_toggle.nativeElement.setAttribute('style', 'backgroundColor: #fff; color: #222');
    this.signup_form.nativeElement.setAttribute('style', 'display : none');
    this.login_form.nativeElement.setAttribute('style', 'display : block');
  }

  toggleSignup() {
    this.login_toggle.nativeElement.setAttribute('style', 'background-color: #fff; color : #222');
    this.signup_toggle.nativeElement.setAttribute('style', 'background-color: #DE3241; color: #fff');
    this.login_form.nativeElement.setAttribute('style', 'display : none');
    this.signup_form.nativeElement.setAttribute('style', 'display : block');
  }

  login_showPassword_changed(e: any) {
    if (e.target.checked) {
      this.password_login.nativeElement.setAttribute('type', 'text');
    } else {
      this.password_login.nativeElement.setAttribute('type', 'password');
    }
  }

  signUp_showPassword_changed(e: any) {
    if (e.target.checked) {
      this.password_signup.nativeElement.setAttribute('type', 'text');
      this.confirm_password_signup.nativeElement.setAttribute('type', 'text');
    } else {
      this.password_signup.nativeElement.setAttribute('type', 'password');
      this.confirm_password_signup.nativeElement.setAttribute('type', 'password');
    }
  }

  ngAfterViewInit() {

  }

  enterSite()
  {
    this.router.navigate(['/admin/author']);
  }

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  login() {
    this.subscriber =this.userService.login({userName: this.loginForm.controls.userName.value, password: this.loginForm.controls.password.value})
      .subscribe((response:any) => {
        this.userAccessToken = response.accessToken;
        this.userAccessToken = response.refreshToken;
        this.user = response.user;
        try {
          if (this.userAccessToken != undefined) {
            this.setSessionData(this.userAccessToken,this.userAccessToken,this.user)
            this.enterSite();
          }else {
            this.userPassStatus = true
            console.log(this.userPassStatus);
          }
        } catch {
          this.userPassStatus = true
        }
      }, (err) => {
        console.log('post error');
      });
  }

  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    avatar: new FormControl('', []),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  register() {
    this.user.userName = this.registerForm.controls.userName.value;
    this.user.password = this.registerForm.controls.password.value;
    this.user.firstName = this.registerForm.controls.fName.value;
    this.user.lastName = this.registerForm.controls.lName.value;
    this.user.email = this.registerForm.controls.email.value;

    if (!this.registerForm.invalid && this.user.password == this.registerForm.controls.confirmPassword.value){
      this.subscriber =this.userService.register(this.user)
        .subscribe((response:any) => {
          this.userAccessToken = response.accessToken;
          this.userAccessToken = response.refreshToken;
          this.user = response.user;
          try {
            if (this.userAccessToken != undefined) {
              this.setSessionData(this.userAccessToken,this.userAccessToken,this.user)
              this.enterSite();
            }
          } catch {
            console.log("");
          }
        }, (err) => {
          console.log('post error');
        });
    }
  }

  setSessionData(access:string, refresh:string, user:User){
    sessionStorage.setItem('accessToken', access);
    sessionStorage.setItem('refreshToken', refresh);
    sessionStorage.setItem('userName', user.userName);
    sessionStorage.setItem('userId', user.id);
  }

  ngOnInit(): void {
    document.body.className = 'app-access';
  }

  ngOnDestroy() {
    document.body.className = "";
  }
}