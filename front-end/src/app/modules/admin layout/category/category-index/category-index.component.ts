import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {
 
    categories:any;
    isLoad=false;
    categoryId:any=0;
    public data = this.categoryId; 
   
    constructor(private _categoryService:CategoryService) 
    { 
      this.getAllCategories();
    }
  getAllCategories(){
    this._categoryService.categoryIndex().subscribe((res)=>{
      this.categories=res;
      this.isLoad=true;
      console.log(this.categories)
    })
  }
  ngOnInit(): void {
  }
  sendID(id:any){
    //this.categoryId=id;
    this._categoryService.sendID(id);
    console.log("id from index"+id);
  }
  
}
