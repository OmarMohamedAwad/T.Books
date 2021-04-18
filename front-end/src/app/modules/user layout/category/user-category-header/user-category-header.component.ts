import Swal  from 'sweetalert2';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-user-category-header',
  templateUrl: './user-category-header.component.html',
  styleUrls: ['./user-category-header.component.css']
})
export class UserCategoryHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchBook(event:any){
    console.log(event.target.value);
    this.searchEmitter.emit(event.target.value);  
  }
  futureWork(){
    Swal.fire({
      icon: 'info',
      title: 'Future Work',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  @Output() searchEmitter:EventEmitter<string> = new EventEmitter()
}
