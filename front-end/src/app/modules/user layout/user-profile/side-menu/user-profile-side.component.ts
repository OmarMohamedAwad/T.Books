import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service'

@Component({
  selector: 'app-user-profile-side',
  templateUrl: './user-profile-side.component.html',
  styleUrls: ['./user-profile-side.component.css']
})
export class UserProfileSideComponent implements OnInit {

  subscriber: any;
  selectedBooksType:string = "All";

  constructor(private userProfileService: UserProfileService) { }

  selectBooksType(event:Event  , BooksType:string): void{
    console.log("hi");
    console.log(event);
    console.log(BooksType);
    //this.selectedBooksTypeEmitter.emit(BooksType);
  }
  ngOnInit(): void {
    this.selectedBooksTypeEmitter.emit("All");
  }
  @Output() selectedBooksTypeEmitter:EventEmitter<string> = new EventEmitter()
}
