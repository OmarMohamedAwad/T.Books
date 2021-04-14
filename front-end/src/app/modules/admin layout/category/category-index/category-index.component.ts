import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../models/category';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  categories: Array<Category> = [];
  isLoad = false;
  categoryId: any = 0;
  public data = this.categoryId;

  constructor(private _categoryService: CategoryService) {
    this.getAllCategories();
  }

  getAllCategories() {
    this._categoryService.categoryIndex().subscribe((res) => {
      this.categories = res;
      this.isLoad = true;
    });
  }

  ngOnInit(): void {
  }

  sendID(id: any) {
    this._categoryService.sendID(id);
  }

  deleteCategory(){this.getAllCategories()}
  updateCategory(){this.getAllCategories()}
}
