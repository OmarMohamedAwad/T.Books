import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-index',
  templateUrl: './user-profile-index.component.html',
  styleUrls: ['./user-profile-index.component.css']
})
export class UserProfileIndexComponent implements OnInit {

  paginationPagesOut:number[] = [1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
