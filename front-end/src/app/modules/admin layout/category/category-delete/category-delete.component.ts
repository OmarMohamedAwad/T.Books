import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import {Category} from '../models/category';
import {Book} from '../../book/models/book';
declare var $:any;
@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  deletedCategory :Category = {
    id: "",
    name: "",
    image: "",
    books: [],
  };
  @ViewChild('closebutton') closebutton: any;
  constructor(private _categoryService:CategoryService) {

   }

  ngOnInit(): void {
    this._categoryService.categoryID$
    .subscribe(
      (id)=>{
        this.deletedCategory.id= id.toString();
      }
    )
  }
  getid(){
    console.log("from delete "+this.deletedCategory);
    return this.deletedCategory;
  }

  deleteCategory(){
    this._categoryService.categoryDelete(this.deletedCategory.id).subscribe((res)=>{
      console.log(res);
      if(res.message=="Deleted Correctly"){
        this.closebutton.nativeElement.click();
        this.refreshCategories.emit()
        console.log("deleted")
      }
    })
  }

  @Output() refreshCategories:EventEmitter<Category> = new EventEmitter<Category>()
}
