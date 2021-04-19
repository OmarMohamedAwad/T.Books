import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {
  constructor(private client:HttpClient) { }
  accessToken = localStorage.getItem('TOKEN');
  readonly BASE_URL: string = "http://localhost:3000/rating";
  
  show(id: any){
    return this.client.get(`${this.BASE_URL}/${id}`,{observe:"response"});
  }
  
  store(rating_det: { rate:number, rater:string, book:string}){
    return this.client.post(this.BASE_URL,rating_det,{
      observe: 'response',
      headers: {
        "Authorization": "Bearer" + this.accessToken
      }
    });
  }
  
  update(rating_det: { rate:number, rater:string, book:string}){
    console.log("updateeeeeeeee")
    return this.client.patch(`${this.BASE_URL}/${rating_det.book}/${rating_det.rater}`,rating_det,{
      observe: 'response',
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }


}
