import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-home-all',
  templateUrl: './home-all.component.html',
  styleUrls: ['./home-all.component.css']
})
export class HomeAllComponent implements OnInit {

  constructor(private myService:HomeService) { }

  subscriber:any;
  ngOnInit(): void {
    this.subscriber = this.myService.getHome()
    .subscribe((response:any)=>{
      console.log(response.body)
    },
    (err)=>{
      console.log(err)
    }
    )
  }

}
