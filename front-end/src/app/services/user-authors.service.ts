import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserAuthorsService {
  readonly baseURL = "http://localhost:3000/author";
  constructor(private userAuthorClient: HttpClient) { }
  getAuthors() {
    return this.userAuthorClient.get(this.baseURL,{observe:'response'})
  }
}
