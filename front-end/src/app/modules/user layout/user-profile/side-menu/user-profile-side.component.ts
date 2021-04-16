import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service'

@Component({
  selector: 'app-user-profile-side',
  templateUrl: './user-profile-side.component.html',
  styleUrls: ['./user-profile-side.component.css']
})
export class UserProfileSideComponent implements OnInit {

  subscriber: any;
  userId:string = sessionStorage.getItem("userId")!; /*"6075b79ea7c3f52f7904ec09" /*"6075b7d5a7c3f52f7904ec0a"*/;
  selectedBooksType:string = "All";
  userImage:string = "assets/user/profile/author-4.jpg";
  userName:string = "";

  constructor(private userProfileService: UserProfileService) { }

  selectBooksType(event:Event , BooksType:string): void{
    console.log("hi");
    console.log(event);
    console.log(BooksType);
    this.selectedBooksTypeEmitter.emit(BooksType);
  }
  ngOnInit(): void {
    this.subscriber = this.userProfileService.getuserById(this.userId)
    .subscribe((response:any)=>{
      this.userName = response.firstName;
      
    },
    (err)=>{
      console.log(err)
    })
  }
  @Output() selectedBooksTypeEmitter:EventEmitter<string> = new EventEmitter()
}
