import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreComponent } from '../author/store/store.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  box_login = document.getElementById("l_box");
  password_login = document.getElementById("l_pass");
  box_signup = document.getElementById("s_box");
  password_signup = document.getElementsByName("s_pass");
  login_toggle = document.getElementById("login-toggle");
  login_form = document.getElementById("login-form");
  
  constructor(private myService:AdminLoginService, private router: Router) {
     
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

  
*/
myForm = new FormGroup({

  adminName:new FormControl('',[Validators.required]),
  adminPassword:new FormControl('',[Validators.required])

})
  ngOnInit(): void {
    document.body.className = "app-login-register";
  }

  tokens:any
  enterSite()
  {
    console.log("hi")
    this.router.navigate(['/admin/dashboard']);
  }

  login()
  {
    console.log("loged")
    this.myService.postAdmin({adminName:this.myForm.controls.adminName.value, 
      adminPassword:this.myForm.controls.adminPassword.value})
      .subscribe((data)=>{
        this.tokens = data
        console.log(this.tokens.token.accessToken)
        console.log(this.tokens.token.refreshToken)
        sessionStorage.setItem("accessToken", this.tokens.token.accessToken);
        sessionStorage.setItem("refreshToken", this.tokens.token.refreshToken);
        this.enterSite()
      },(err)=>{
        console.log("post error")
      })
  }

  ngOnDestroy(){
    document.body.className="";
  }

}
