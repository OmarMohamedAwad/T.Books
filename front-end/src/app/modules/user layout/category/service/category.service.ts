import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly baseURL: string = "http://localhost:3000/category";

  constructor(private categoryClient: HttpClient) { }

  getCategories() {
  return this.categoryClient.get(this.baseURL,{observe:'response'})
  }

  getCategoryPage(name:string , page:number , book:string="") {
    console.log(name , page , (book ==""))
    if(book == "")
      return this.categoryClient.get(`${this.baseURL}/pages?name=${name}&page=${page}`,{observe:'response'})
    else
      return this.categoryClient.get(`${this.baseURL}/pages?name=${name}&page=${page}&bookName=${book}`,{observe:'response'})
  }

  // storeCategory(category:{name:string , image:string}){
  //   return this.categoryClient.post(this.baseURL,category)
  // }

  // deleteCategory(id:number)
  // {
  //   return this.categoryClient.delete(`${this.baseURL}/${id}`)
  // }

  getCategoryByName(name: string) {
    return this.categoryClient.get(`${this.baseURL}/${name}`)
  }

  // updateCategory(id:number, category:{name:string, image:string})
  // {
  //   return this.categoryClient.patch(`${this.baseURL}/${id}`,category);
  // }

}
