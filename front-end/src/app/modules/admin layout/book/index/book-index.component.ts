import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit {

  titleValue:string = ''
  constructor() { }

  ngOnInit(): void {
  }
  // getBookTitle(event:any){
  //   this.addStudentEmitter.emit({titleValue: this.titleValue});
  // }
  // @Output() addStudentEmitter:EventEmitter<{titleValue:string}> = new EventEmitter()

}
