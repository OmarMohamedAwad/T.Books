import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';


@Injectable({
  providedIn: 'root'
})

export class BookServiceService {

  //properties
  readonly BASE_URL: string = "http://localhost:3000/book";
  accessToken = sessionStorage.getItem('accessToken');

  //constructor
  constructor(private client:HttpClient) {}

  //get all data from GET / end point
  index(){
    return this.client.get(this.BASE_URL,{
      observe:"response"
    });
  }

  //get one page from database using GET /pages end point
  pagination(page: number = 1){
    return this.client.get(`${this.BASE_URL}/pages?page=${page}`,{observe:"response"});
  }

  //search for specific books using GET /search/{search word} end point
  search(keyword:string,page:number){
    return this.client.get(`${this.BASE_URL}/search/${keyword} ?page=${page}`,{observe:"response"})
  }

  //show one book details using GET /id end point
  show(id: string){
    return this.client.get(`${this.BASE_URL}/${id}`,{observe:"response"});
  }

  //add new book using POST / end point with adding authorization token key
  store(book: Book){
    return this.client.post(this.BASE_URL,book,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  //edit exist book using PATCH /id end point with adding authorization token key
  update(book: Book){
    return this.client.patch(`${this.BASE_URL}/${book.id}`,book,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  //delete exist  book using DELETE /id end point with adding authorization token key
  destroy(id: string){
    return this.client.delete(`${this.BASE_URL}/${id}`,{
      observe:"response",
      headers: {
        "Authorization": "Bearer " + this.accessToken
    }});
  }
}
