import { Injectable } from '@angular/core';
import {Book} from '../../../admin layout/book/models/book';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserAccessServiceService {

  readonly BASE_URL: string = "http://localhost:3000/access";

  constructor(private client:HttpClient) { }

  register(user: User){
    return this.client.post(`${this.BASE_URL}/userRegister`,user);
  }

  login(user: any){
    return this.client.post(`${this.BASE_URL}/user`,user);
  }

}
