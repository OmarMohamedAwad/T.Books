import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-det',
  templateUrl: './book-det.component.html',
  styleUrls: ['./book-det.component.css']
})
export class BookDetComponent implements OnInit {
  bookTitle: string ="Memoirs of a Geisha";
  bookAuthor:string ="Arthur Golden";
  bookCategory:string = "Fiction Novels"
  ratesNum:number =112585
  reviewsNum:number=5541
  avgRate:number = 3.1;
  favsNum:number =215;
  userRate=-1;
  dummy_rev="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
  bookDescribtion: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  user_img="assets/user/author/author-1.jpg";
  reviews_list= document.querySelector('ul')!;
  publish_clicked(){
    const ta=document.querySelector("textarea")!;
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    const p = document.createElement("p");
    //p.textContent=ta.target.value;
    
  }
  constructor() { }
  ngOnInit(): void {
  }

}
