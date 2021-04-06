import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('navbar')!;
      if (window.pageYOffset > element.clientHeight) {
        element.style.backgroundColor = 'black';
    }
  }
*/
}
