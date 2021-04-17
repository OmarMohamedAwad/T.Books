import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service'

@Component({
  selector: 'app-user-profile-side',
  templateUrl: './user-profile-side.component.html',
  styleUrls: ['./user-profile-side.component.css']
})
export class UserProfileSideComponent implements OnInit {

  subscriber: any;
  userId:string = "605a0532ba76f47a7793e130" /*"6075b7d5a7c3f52f7904ec0a"*/;
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
      console.log(response)
      this.userName = response.firstName;

    },
    (err)=>{
      console.log(err)
    })
  }
  @Output() selectedBooksTypeEmitter:EventEmitter<string> = new EventEmitter()
}
