import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor( private _dashboard:HttpClient) { }
  readonly baseURL: string = "http://localhost:3000/dashboard";
   index():Observable<any>{
     const accessToken = sessionStorage.getItem('accessToken');
     return this._dashboard.get(this.baseURL,{
       headers: {
         "Authorization": "Bearer " + accessToken
       }
     });
   }
}
