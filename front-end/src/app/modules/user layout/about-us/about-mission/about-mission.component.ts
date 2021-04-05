import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-mission',
  templateUrl: './about-mission.component.html',
  styleUrls: ['./about-mission.component.css']
})
export class AboutMissionComponent implements OnInit {
  paragraph:string[]=
  [
    "The Importance of Reading Naturally: Evidence From Combined Recordings of Eye Movements and Electric Brain Potentials",
    "First, in natural reading, a sustained negativity was found in both syntactic and semantic violations but only in sentence‐final position and only in trials without regression. These effects clearly demonstrate the added benefit of coregistration. In the grand mean these negativities were cancelled out by the stronger P600 effects, but the eye‐tracking signal allowed useparate them out.",
    "Regarding the ERP responses in word‐by‐word presentation and in natural reading, as Table 5 shows, these were remarkably similar in the two modalities. This shows that results from word‐by‐word reading do largely generalize to free reading. However, there were also some interesting differences demonstrating that coregistration gives us a more comprehensive picture: First, like earlier studies (Dimigen et al., 2011; Kretzschmar et al., 2009), we found that ERP effects appeared earlier in free reading than in word‐by‐word reading. This has been explained in terms of orthographic preactivation through parafoveal preview. Lexical processing basically gets a head start in free reading because visual information about a word enters the system even before the word is first fixated. One important consequence is that researchers have to be careful when they compare the time‐course of effects in RSVP studies to effects found in other experimental paradigms.",
     "Reading is typically an individual activity, done silently, although on occasion a person reads out loud for other listeners; or reads aloud for one's own use, for better comprehension."
  ]
  cardData:any=[{icon:"fas fa-users icon",number:"80,123",desc:"Customers to date"},
  {icon:"fas fa-book-open icon",number:"95,458",desc:"Amazing books"},
  {icon:"far fa-thumbs-up icon",number:"30,145",desc:"In Savings"}];

  constructor() { }

  ngOnInit(): void {
  }


}
