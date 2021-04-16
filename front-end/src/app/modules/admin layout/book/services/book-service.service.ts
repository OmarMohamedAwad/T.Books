import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private client:HttpClient) {

  }

  readonly BASE_URL: string = "http://localhost:3000/book";
  accessToken = sessionStorage.getItem('accessToken');

  index(){
    return this.client.get(this.BASE_URL,{
      observe:"response"
    });
  }

  pagination(page: number = 1){
    return this.client.get(`${this.BASE_URL}/pages?page=${page}`,{
      observe:"response"
    });
  }

  search(keyword:string,page:number){
    return this.client.get(`${this.BASE_URL}/search/${keyword} ?page=${page}`,{observe:"response"})
  }

  show(id: string){
    return this.client.get(`${this.BASE_URL}/${id}`,{
      observe:"response"
    });
  }

  store(book: Book){
    console.log(book);
    return this.client.post(this.BASE_URL,book,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  update(book: Book){
    return this.client.patch(`${this.BASE_URL}/${book.id}`,book,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  destroy(id: string){
    return this.client.delete(`${this.BASE_URL}/${id}`,{
      observe:"response",
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }});
  }
}
