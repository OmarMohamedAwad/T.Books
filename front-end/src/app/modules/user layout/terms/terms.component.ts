import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    document.body.className = "app-terms";
  }

  ngOnDestroy(){
    document.body.className="";
  }
  
}
