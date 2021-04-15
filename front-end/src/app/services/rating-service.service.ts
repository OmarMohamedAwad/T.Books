import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {
  constructor(private client:HttpClient) { }
  readonly BASE_URL: string = "http://localhost:3000/rating";
  
  store(rating_det: { rate:number, rater:string, book:string}){
    return this.client.post(this.BASE_URL,rating_det);
  }

  update(rating_det: {lastRateId:string, rate:number}){
    return this.client.patch(`${this.BASE_URL}/${rating_det.lastRateId}`,rating_det);
  }

  show(bookId: any,userId:any){
    return this.client.get(`${this.BASE_URL}/${bookId}/${userId}`,{observe:"response"});
  }

}
