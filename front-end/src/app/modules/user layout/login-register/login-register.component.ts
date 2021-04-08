import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  box_login = document.getElementById("l_box");
  password_login = document.getElementById("l_pass");
  box_signup = document.getElementById("s_box");
  password_signup = document.getElementsByName("s_pass");
  login_toggle = document.getElementById("login-toggle");
  signup_toggle =  document.getElementById("signup-toggle");
  login_form = document.getElementById("login-form");
  signup_form = document.getElementById("signup-form");
  /*function toggleSignup() {
    this.login_toggle.setAttribute("style","background-color: #; color : #222");
    this.login_toggle.style.backgroundColor = "#fff";
    this.login_toggle.style.color = "#222";
    this.signup_toggle.style.backgroundColor = "#DE3241";
    this.signup_toggle.style.color = "#fff";
    this.login_form.style.display = "none";
    this.signup_form.style.display = "block";
  }
  constructor() {
     
   }
  /*
  function toggleLogin() {
      login_toggle.style.backgroundColor = "#DE3241";
      login_toggle.style.color = "#fff";
      signup_toggle.style.backgroundColor = "#fff";
      signup_toggle.style.color = "#222";
      signup_form.style.display = "none";
      login_form.style.display = "block";
  }

  box_login.addEventListener("change", function () {
      if (this.checked)
          password_login.type = 'text';
      else
          password_login.type = 'password';
  });

  box_signup.addEventListener("change", function () {
      if (this.checked)
          password_signup[0].type = password_signup[1].type = 'text';
      else
          password_signup[0].type = password_signup[1].type = 'password';
  });
*/
  ngOnInit(): void {
    document.body.className = "app-login-register";
  }

  ngOnDestroy(){
    document.body.className="";
  }

}
