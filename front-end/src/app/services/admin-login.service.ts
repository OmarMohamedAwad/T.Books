import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private adminClient: HttpClient) { }

  readonly baseURL: string = "http://localhost:3000/access";
  postAdmin(admin:{adminName:string, adminPassword:string})
  {
    return this.adminClient.post(`${this.baseURL}/admin`,admin)
  }

  logoutAdmin(token:{refreshToken:any})
  {
    return this.adminClient.post(`${this.baseURL}/adminLogout`,token)
  }
}
