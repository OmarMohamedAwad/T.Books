import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseURL: string = 'http://localhost:3000/users';
  accessToken = sessionStorage.getItem('accessToken');

  constructor(private userClient: HttpClient) { }

  updateUserBookList(user: {userId: string, bookId: string, type: string}) {
    return this.userClient.post(`${this.baseURL}/${user.userId}/update-books`, user,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }
}
