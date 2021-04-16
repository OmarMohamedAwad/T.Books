import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import {Category} from '../models/category';
import {Book} from '../../book/models/book';
import Swal from 'sweetalert2'
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
    return this.deletedCategory;
  }

  deleteCategory(){
    this._categoryService.categoryDelete(this.deletedCategory.id).subscribe((res)=>{
      if(res.message=="Deleted Correctly"){
        this.closebutton.nativeElement.click();
        this.refreshCategories.emit()
      }
    },(err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error deleting category, Try again !",
        footer: ''
      })
    })
  }

  @Output() refreshCategories:EventEmitter<Category> = new EventEmitter<Category>()
}
