import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  readonly baseURL: string = "http://localhost:3000/category";

  constructor(private categoryClient: HttpClient) { }

    getCategoryPage(type:string , page:number , book:string="") {
      console.log(type , page , (book ==""))
      if(book == "")
        return this.categoryClient.get(`${this.baseURL}/pages?type=${type}&page=${page}`,{observe:'response'})
      else
        return this.categoryClient.get(`${this.baseURL}/pages?type=${type}&page=${page}&bookName=${book}`,{observe:'response'})
    }
}
