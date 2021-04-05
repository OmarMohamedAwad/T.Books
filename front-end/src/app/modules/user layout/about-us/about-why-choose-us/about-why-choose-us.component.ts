import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-why-choose-us',
  templateUrl: './about-why-choose-us.component.html',
  styleUrls: ['./about-why-choose-us.component.css']
})
export class AboutWhyChooseUsComponent implements OnInit {
  cardData:any=[
    {icon:"far fa-hand-spock icon",title:"Trusted By Thousands",desc:"Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis."},
    {icon:"fas fa-book-open icon",title:"Wide Renge Of Books",desc:"Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis."},
    {icon:"far fa-window-restore icon",title:"Easy to Find",desc:"Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis."}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
