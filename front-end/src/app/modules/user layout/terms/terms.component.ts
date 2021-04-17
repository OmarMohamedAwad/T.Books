import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  goToSection(sectionName: string) {
    switch (sectionName){
      case 'intro':
        document.getElementById("intro")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'cookies':
        document.getElementById("cookies")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'licence':
        document.getElementById("licence")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'iframes':
        document.getElementById("iframes")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'reports_and_reviews':
        document.getElementById("reports_and_reviews")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'termination':
        document.getElementById("termination")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'access':
        document.getElementById("accessData")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'ack':
        document.getElementById("ack")!.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        document.getElementById("contact")!.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        document.getElementById("intro")!.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  constructor() { }
  ngOnInit(): void {
    document.body.className = "app-terms";
  }

  ngOnDestroy(){
    document.body.className="";
  }

}
