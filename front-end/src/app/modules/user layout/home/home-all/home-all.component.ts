import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home-all',
  templateUrl: './home-all.component.html',
  styleUrls: ['./home-all.component.css']
})
export class HomeAllComponent implements OnInit {

  constructor(private myService:HomeService) { }
  loading = false;

  subscriber:any;
  ngOnInit(): void {
    this.subscriber = this.myService.getHome()
    .subscribe((response:any)=>{
      console.log(response.body)
      this.loading = true
    },
    (err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error loading Home content !",
        footer: ''
      })
    }
    )
  }

}
