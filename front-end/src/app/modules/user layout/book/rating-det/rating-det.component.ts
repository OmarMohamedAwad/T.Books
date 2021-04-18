import { ElementRef, Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-rating-det',
  templateUrl: './rating-det.component.html',
  styleUrls: ['./rating-det.component.css']
})
export class RatingDetComponent implements OnInit, OnChanges {
  @ViewChild('progressFill5') progressFill5!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill4') progressFill4!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill3') progressFill3!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill2') progressFill2!: ElementRef<HTMLDivElement>;
  @ViewChild('progressFill1') progressFill1!: ElementRef<HTMLDivElement>;
  chartData = [0,0,0,0,0];
  ratingFreq= [0,0,0,0,0];
  userId:any;
  subscriber:any;
  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    for(let i=0;i<this.ratingsArr.length;i++)
      this.ratingFreq[this.ratingsArr[i].rate-1]++;
    for(let i=0;i<5;i++)
      this.chartData[i]=Math.ceil((this.ratingFreq[i]*100)/this.ratingsArr.length)
    this.setFill();
  }

  ngOnInit(): void {
  }
  setFill(){
    this.progressFill1.nativeElement.setAttribute('style', `width: ${this.chartData[0]}%;`);
    this.progressFill2.nativeElement.setAttribute('style', `width: ${this.chartData[1]}%;`);
    this.progressFill3.nativeElement.setAttribute('style', `width: ${this.chartData[2]}%;`);
    this.progressFill4.nativeElement.setAttribute('style', `width: ${this.chartData[3]}%;`);
    this.progressFill5.nativeElement.setAttribute('style', `width: ${this.chartData[4]}%;`);
  }
  @Input() ratingsArr:any;
}
