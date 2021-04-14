import { ElementRef, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-rating-det',
  templateUrl: './rating-det.component.html',
  styleUrls: ['./rating-det.component.css']
})
export class RatingDetComponent implements OnInit {
  @ViewChild('progressFill5') progressFill5!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill4') progressFill4!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill3') progressFill3!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill2') progressFill2!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill1') progressFill1!: ElementRef<HTMLDivElement>;
  chartData = [20,5,15,10,50];
  
  constructor() { 
    
  }
  
  ngOnInit(): void {
    this.setFill();
  }
  setFill(){
    this.progressFill1.nativeElement.setAttribute('style', `width: ${this.chartData[0]}%;`);
    this.progressFill2.nativeElement.setAttribute('style', `width: ${this.chartData[1]}%;`);
    this.progressFill3.nativeElement.setAttribute('style', `width: ${this.chartData[2]}%;`);
    this.progressFill4.nativeElement.setAttribute('style', `width: ${this.chartData[3]}%;`);
    this.progressFill5.nativeElement.setAttribute('style', `width: ${this.chartData[4]}%;`);
  }
  
}
