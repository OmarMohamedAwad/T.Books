import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { UserProfileService } from '../services/user-profile.service'

@Component({
  selector: 'app-user-profile-side',
  templateUrl: './user-profile-side.component.html',
  styleUrls: ['./user-profile-side.component.css']
})
export class UserProfileSideComponent implements OnInit {

  subscriber: any;
  userId:string | null = sessionStorage.getItem("userId") || "605a1a4922c6ca862b8658d6";
  selectedBooksType:string = "All";
  userImage:string = "assets/user/profile/author-4.jpg";
  userName:string = "";

  constructor(private userProfileService: UserProfileService) { }

  selectBooksType(event:Event , BooksType:string): void{
    this.selectedBooksTypeEmitter.emit(BooksType);
  }

  ngOnInit(): void {
    this.subscriber = this.userProfileService.getuserById(this.userId!)
    .subscribe((response:any)=>{
      if (response.avatar){
        this.userImage = response.avatar
      }
      this.userName = response.userName;

    },
    (err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error getting your information !",
        footer: ''
      })
    })
  }
  @Output() selectedBooksTypeEmitter:EventEmitter<string> = new EventEmitter()
}
