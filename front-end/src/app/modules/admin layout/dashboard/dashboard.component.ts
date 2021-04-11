import { trigger,state,transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fade',[
      //state(),
      transition('void => *',[
        style({opacity:0}),
        animate(2000,style({opacity:1}))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  data ={books: '', authors: '', categories: ''}
  constructor(private _dashboard:DashboardService) {
    this.dashboard();
   }
  dashboard(){
    this._dashboard.index().subscribe((res)=>{
      this.data=res;
      console.log(this.data);
      console.log(this.data.books)
    })
  }
  ngOnInit(): void {
  }

}
