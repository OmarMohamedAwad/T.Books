import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {
  constructor(private client:HttpClient) { }
  readonly BASE_URL: string = "http://localhost:3000/rating";
  
  store(rating_det: { rate:number, rater:string, book:string}){
    console.log(rating_det);
    return this.client.post(this.BASE_URL,rating_det);
  }
}
