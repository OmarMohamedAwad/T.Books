import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-category-index',
  templateUrl: './user-category-index.component.html',
  styleUrls: ['./user-category-index.component.css']
})
export class UserCategoryIndexComponent implements OnInit {
  category:string= "";
  constructor() { }
  ngOnInit(): void {
  }
}
