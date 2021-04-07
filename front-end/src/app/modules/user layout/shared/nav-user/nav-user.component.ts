import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  srcWidth=0;
 
  /*
  const navLinks = document.querySelectorAll('.nav-item')!;
  const menuToggle = document.querySelector('button')!;
  const bsCollapse = new bootstrap.Collapse(menuToggle)
  navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
  })
  */
  constructor() { 
    this.srcWidth=0;
  }
  ngOnInit(): void {
    
  }
  @HostListener('window:scroll', ['$event'])

  onScroll() {
      let navbar = document.querySelector('nav')!;
      if (window.pageYOffset > navbar.clientHeight) {
        navbar.setAttribute("style","background-color: rgba(0,0,0,0.8)");
      }
      else{
        navbar.setAttribute("style","background-color: rgba(0,0,0,0.3)");
      }
  }
 
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
      this.srcWidth = window.innerWidth;
      let navbar = document.querySelector('nav')!;
      if(this.srcWidth<992){
        navbar.setAttribute("style","background-color: rgba(0,0,0,0.8)");
      }
      else{
        navbar.setAttribute("style","background-color: rgba(0,0,0,0.3)");
      }
  }

 
}
