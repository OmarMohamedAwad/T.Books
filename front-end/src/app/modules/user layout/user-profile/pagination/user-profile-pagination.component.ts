import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile-pagination',
  templateUrl: './user-profile-pagination.component.html',
  styleUrls: ['./user-profile-pagination.component.css']
})
export class UserProfilePaginationComponent implements OnInit {

  constructor() { }

  paginationPages:Array<number> =[1,2,3]
  currentPage:number = 1;

  getPagination(paginationObj:{paginationPages:number[] , currentPage:number}){
    console.log(paginationObj)
    this.paginationPages = paginationObj.paginationPages;
    this.currentPage = paginationObj.currentPage;
  }
  ngOnInit(): void {
  }


  changePagination(event:Event , type:any){
    this.selectedPageEmitter.emit(type);
  }

  @Output() selectedPageEmitter:EventEmitter<string> = new EventEmitter()



}
