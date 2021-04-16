import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private client:HttpClient) { }
  accessToken = localStorage.getItem('TOKEN');

  readonly BASE_URL: string = "http://localhost:3000/review";

  index(){
    return this.client.get(this.BASE_URL,{observe:"response"});
  }

  pagination(page: number = 1){
    return this.client.get(`${this.BASE_URL}/pages?page=${page}`,
    {observe:"response"});
  }

  show(id: any){
    return this.client.get(`${this.BASE_URL}/${id}`,{observe:"response"});
  }

  store(review: {reviwer:string, book:string, body:string}){
    // console.log(review);
    return this.client.post(this.BASE_URL,review,{
      observe: 'response',
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  update(review: {id:string, reviwer:string, reviewedBook:any, reviewBody:string}){
    return this.client.patch(`${this.BASE_URL}/${review.id}`,review,{
      observe: 'response',
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  destroy(id: string){
    return this.client.delete(`${this.BASE_URL}/${id}`,{
      observe: 'response',
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }
}
