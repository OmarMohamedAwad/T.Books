import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile-header',
  templateUrl: './user-profile-header.component.html',
  styleUrls: ['./user-profile-header.component.css']
})
export class UserProfileHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchBook(event:any){
    console.log(event.target.value);
    this.searchEmitter.emit(event.target.value);  
  }

  @Output() searchEmitter:EventEmitter<string> = new EventEmitter()

}
