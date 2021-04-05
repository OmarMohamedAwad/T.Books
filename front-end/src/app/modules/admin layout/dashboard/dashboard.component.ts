import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books=1648;
  categories=13;
  authors=123;
  constructor() { }

  ngOnInit(): void {
  }

}
