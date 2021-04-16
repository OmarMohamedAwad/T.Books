import { Component, EventEmitter, ElementRef, OnInit, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-admin-author-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css','../../shared/style/dashboard.css']
})
export class IndexComponent implements OnInit {
  @ViewChild('search_box') search_box!: ElementRef<HTMLInputElement>;
  constructor() { }
  ngOnInit(): void {
  }
  keywords:string = ""
  captureSearchContent(){
    this.keywords = this.search_box.nativeElement.value;
  }
}
