import {Component, OnInit, ViewChild} from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
declare var $:any;
@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  deletedCategory :any;
  @ViewChild('closebutton') closebutton: any;
  constructor(private _categoryService:CategoryService) {

   }

  ngOnInit(): void {
    this._categoryService.categoryID$
    .subscribe(
      (id)=>{
        this.deletedCategory=id;
      }
    )
  }
  getid(){
    console.log("from delete "+this.deletedCategory);
    return this.deletedCategory;
  }

  deleteCategory(){
    this._categoryService.categoryDelete(this.deletedCategory).subscribe((res)=>{
      console.log(res);
      if(res.message=="Deleted Correctly"){
        //$("#deleteCategory").model('hide');
        //this._categoryService.categoryIndex();
        this.closebutton.nativeElement.click();
        console.log("deleted")
      }
    })
  }

}
