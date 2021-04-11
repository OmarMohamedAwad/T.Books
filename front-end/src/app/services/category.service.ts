import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly baseUrl: string = "http://localhost:3000/category";
  private _categoryIdSource = new Subject<String>();
  categoryID$ = this._categoryIdSource.asObservable();
  constructor(private _HttpClient:HttpClient) {      
    
  }

 sendID(id:String){
   this._categoryIdSource.next(id);
 }
  categoryIndex():Observable<any>
  {
    return this._HttpClient.get(this.baseUrl);
  }

 categoryStore(data:JSON):Observable<any>
  {
    return  this._HttpClient.post(this.baseUrl,data);
  }
  categoryDelete(id:any):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/${id}`);
  }
  categoryUpdate(id:string, cat:{name:string,image:string})
    {
      return this._HttpClient.patch(`${this.baseUrl}/${id}`,cat);
    }
}
