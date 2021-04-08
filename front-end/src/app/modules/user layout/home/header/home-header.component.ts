import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  slidePhotos:Array<string> = ["assets/user/home/header1.jpeg" , "assets/user/home/header1.jpeg"]
  currentSlide:number = 0;
  subscriber: any;
  settings: any;
  headerTitleValue:string="";
  headerParagraphValue:string="";
  constructor(private settingService: SettingsService) { }

ngOnInit(): void {
  this.subscriber = this.settingService.getSettings()
  .subscribe((response:any)=>{
    console.log(response.body)
    this.settings = response.body
    this.settings.find((section:any) => {
      if(section.sectionName == "headerData")
      {
        this.headerTitleValue=section.sectionContent.headerTitle;
        this.headerParagraphValue=section.sectionContent.headerParagraph;
      }
    });
  },
  (err)=>{
    console.log(err)
  }
  )
}


// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
// }

}
