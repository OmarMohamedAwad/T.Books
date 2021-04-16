import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/modules/admin layout/author/models/author';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() selectedAuthor!: Author;
  constructor() {

  }

  ngOnInit(): void {
    console.log(`from author card ${this.selectedAuthor.id}`);
  }

}
