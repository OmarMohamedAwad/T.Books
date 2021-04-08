import { Component, OnInit } from '@angular/core';
import { trigger,state,transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-book-det',
  templateUrl: './book-det.component.html',
  styleUrls: ['./book-det.component.css'],
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
export class BookDetComponent implements OnInit {
  bookTitle: string ="Memoirs of a Geisha";
  bookAuthor:string ="Arthur Golden";
  bookCategory:string = "Fiction Novels"
  ratesNum:number =112585
  reviewsNum:number=5541
  avgRate:number = 3.1;
  favsNum:number =215;
  userRate=-1;
  userReview:string="";
  dummy_rev="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
  bookDescribtion: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  user_img="assets/user/author/author-1.jpg";
  reviews_list= document.querySelector('ul')!;
  /*for returned elements form database create li, img, p for each 1 and givethem same classes as current review */
  publishClicked(e:any){
    e.preventDedault();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
