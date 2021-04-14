import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../models/category';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  updatedCategory: Category = {
    id: "",
    name: "",
    image: "",
    books: [],
  };
  @ViewChild('closebutton') closebutton: any;

  constructor(private _categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this._categoryService.categoryID$
      .subscribe(
        (id) => {
          this.updatedCategory.id = id.toString();
        }
      );
  }

  categoryForm = new FormGroup({
    'name': new FormControl('', [Validators.minLength(5), Validators.minLength(50), Validators.pattern(/^[a-zA-Z]+$/)]),
    'image': new FormControl('',)
  });

  updateCategory() {
      this.updatedCategory.name = this.categoryForm.value.name;
      this.updatedCategory.image= this.categoryForm.value.image

    this._categoryService.categoryUpdate(this.updatedCategory.id, this.updatedCategory).subscribe((res) => {
      this.refreshCategories.emit();
      this.closebutton.nativeElement.click();
      // console.log(this.updatedCategory);
      // console.log(res);
    });
  }

  @Output() refreshCategories:EventEmitter<Category> = new EventEmitter<Category>()

}
