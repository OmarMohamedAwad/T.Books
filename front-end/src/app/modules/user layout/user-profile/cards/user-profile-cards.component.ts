import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-cards',
  templateUrl: './user-profile-cards.component.html',
  styleUrls: ['./user-profile-cards.component.css']
})
export class UserProfileCardsComponent implements OnInit {

  toggleFlag:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showDropList(event:any){
    this.toggleFlag = !this.toggleFlag;
  }
}

