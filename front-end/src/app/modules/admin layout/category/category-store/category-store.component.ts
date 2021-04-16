import {ThrowStmt} from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-category-store',
  templateUrl: './category-store.component.html',
  styleUrls: ['./category-store.component.css']
})
export class CategoryStoreComponent implements OnInit {
  isStyleInvalid = {'background-color': '#24324a'};
  isStyleValid = {'background-color': '#de3242'};
  isClicked = false;
  responseMessage = '';
  isSucess = false;

  constructor(private _categoryService: CategoryService,private router: Router) {
  }

  ngOnInit(): void {
  }

  categoryForm = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    'image': new FormControl('', [Validators.required])
  });

  addCategory() {
    this.isClicked = true;
    if (this.categoryForm.valid) {
        this._categoryService.categoryStore(this.categoryForm.value).subscribe(response => {
          if (response.message == 'success') {
            this.isClicked = false;
            this.isSucess = true;
            this.responseMessage = 'Added Successfully.';
            this.categoryForm.reset();
            this.router.navigate(['/admin/category']);
          }
        },(err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Error saving category, Try again",
            footer: ''
          })
        });
        console.log(this.categoryForm);
    }
  }
}
