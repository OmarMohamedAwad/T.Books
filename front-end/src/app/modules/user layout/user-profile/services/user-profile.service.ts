import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  readonly baseURL: string = "http://localhost:3000/users";
  readonly rateURL: string = "http://localhost:3000/rating";

  constructor(private userProfileClient: HttpClient) { }

    getCategoryPage(userId:string , booktype:string , page:number , book:string="") {
      console.log(booktype , page , (book ==""))
      if(book == "")
        return this.userProfileClient.get(`${this.baseURL}/pages?userId=${userId}&booktype=${booktype}&page=${page}`,{observe:'response'})
      else
        return this.userProfileClient.get(`${this.baseURL}/pages?userId=${userId}&booktype=${booktype}&page=${page}&bookName=${book}`,{observe:'response'})
    }

    getuserById(id: string) {
      return this.userProfileClient.get(`${this.baseURL}/${id}`)
    }

    postRate(userId: string, bookId: string, rate:number) {
      console.log("post")
      return this.userProfileClient.post(`${this.rateURL}` , {rate: rate, rater: userId, book: bookId})
    }
    updateRate(ratingId:string, rate:number){
      console.log("update")
      return this.userProfileClient.patch(`${this.rateURL}/${ratingId}`, {rate: rate})
    }
}
