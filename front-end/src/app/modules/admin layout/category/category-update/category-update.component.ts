import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  updatedCategory :any; 
  constructor(private _categoryService:CategoryService) { }

  ngOnInit(): void {
    this._categoryService.categoryID$
    .subscribe(
      (id)=>{
        this.updatedCategory=id;
      }
    )
  }
  categoryForm=new FormGroup({
    "name":new FormControl('',[Validators.minLength(5),Validators.minLength(50),Validators.pattern(/^[a-zA-Z]+$/) ]),
    "image":new FormControl('',)
  })
  updateCategory(){
    let data={
      name:this.categoryForm.value.name,
      image:this.categoryForm.value.image
    }
    this._categoryService.categoryUpdate(this.updatedCategory,data).subscribe((res)=>{
      console.log(this.updatedCategory);
      console.log(res);
    })
  }

}
