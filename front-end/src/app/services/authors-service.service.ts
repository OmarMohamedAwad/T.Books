import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsServiceService {

  private _authorIdSource = new Subject<String>();
  authorID$ = this._authorIdSource.asObservable();
  constructor(private authorClient: HttpClient) { }
  readonly baseURL: string = "http://localhost:3000/author";
  
  sendID(id:String){
    this._authorIdSource.next(id);
  }
  
  getAuthors() {
    //fetch list of authors
  return this.authorClient.get(this.baseURL,{observe:'response'})
  }

  postAuthor(author:{autherFirstName:string, 
    autherLastName:string, authorDob: string, 
    /*image: string*/}){
    return this.authorClient.post(this.baseURL,author)
  }

  deleteAuthor(id:string)
  {
    return this.authorClient.delete(`${this.baseURL}/${id}`)
  }

  getAuthorById(id: number) {
    //fetch authors by id

    return this.authorClient.get(`${this.baseURL}/${id}`)
  }

  updateAuthor(id:string, author:{autherFirstName:string, 
    autherLastName:string, authorDob: string, 
    /*image: string*/})
    {
      return this.authorClient.patch(`${this.baseURL}/${id}`,author);
    }
}