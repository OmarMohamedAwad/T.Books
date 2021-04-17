import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-author-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css','../../shared/style/dashboard.css']
})

export class IndexComponent implements OnInit {

  //properties
  @ViewChild('search_box') search_box!: ElementRef<HTMLInputElement>;
  keywords:string = ""

  //construtor
  constructor() {}

  //start the component
  ngOnInit(): void {}

  //get the search words
  captureSearchContent(){
    this.keywords = this.search_box.nativeElement.value;
  }
}
