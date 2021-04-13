import {trigger, state, transition, animate, style} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../shared/style/dashboard.css'],
  animations: [
    trigger('fade', [
      //state(),
      transition('void => *', [
        style({opacity: 0}),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  data = {books: '', authors: '', categories: ''};
  cardData: any = [
    {icon: 'far fa-hand-spock icon', title: 'Trusted By Thousands', count: this.data.authors},
    {icon: 'fas fa-book-open icon', title: 'Wide Renge Of Books', count: this.data.books},
    {icon: 'far fa-window-restore icon', title: 'Easy to Find', count: this.data.categories}
  ];

  isLoad = false
  constructor(private _dashboard: DashboardService) {
    this.dashboard();
  }

  dashboard() {
    this._dashboard.index().subscribe((res) => {
      this.data = res;
      this.isLoad = true
      console.log(this.data);
    });
  }

  ngOnInit(): void {
  }

}
