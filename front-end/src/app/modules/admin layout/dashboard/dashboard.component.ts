import { trigger,state,transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
  books=1648;
  categories=13;
  authors=123;
  constructor() { }

  ngOnInit(): void {
  }

}
