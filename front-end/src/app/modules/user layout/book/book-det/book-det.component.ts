import {AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger,state,transition, animate, style } from '@angular/animations';
import {Book} from '../../../admin layout/book/models/book';
import { ActivatedRoute } from '@angular/router';
import {BookServiceService} from '../../../admin layout/book/services/book-service.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { RatingServiceService } from '../../../../services/rating-service.service';
import { Router } from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {element} from 'protractor';

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

  @ViewChild("star1")star1!:ElementRef<HTMLInputElement>;
  @ViewChild("star2")star2!:ElementRef<HTMLInputElement>;
  @ViewChild("star3")star3!:ElementRef<HTMLInputElement>;
  @ViewChild("star4")star4!:ElementRef<HTMLInputElement>;
  @ViewChild("star5")star5!:ElementRef<HTMLInputElement>;
  @ViewChild("reviewArea")reviewArea!:ElementRef<HTMLInputElement>;
  stars_Arr:any;
  selected:any = 'option2';
  userId:string = "";
  bookId:string="";
  user_img="assets/user/author/author-1.jpg";

  favsNum:number =215;
  userRate=-1;
  userReview: string ="";
  bookStatus: string = "";

  constructor(private bookService: BookServiceService, private reviewsService: ReviewsService, private userService: UserService,
              private ratingService: RatingServiceService,
              private myActivatedRoute:ActivatedRoute, private router: Router) {
    this.userId=sessionStorage.getItem("userId")!;
  }

  book : Book =
    {
      id: "",
      name: "",
      description: "",
      image: "",
      category: "",
      author: "",
      categoryName: "",
      authorName: "",
      bookReviews:[],
      bookRatings:[],
      currantReader:[],
      finishReadUsers:[],
      wantToReadeUsers:[],
    }

  subscriber:any;
  rateSubscriber:any;
  reviewSubscriber:any;
  userSubscriber:any;

  ratesNum:number =112585
  avgRate:number = 3.1;
  ratings:any;
  myRating=-1;
  text:string = '';
  reviewerId:any = '';

  reviews:Array<{reviewBody: string,
  reviewedBook: string,
  reviwer: string,
  __v: any,
  _id: string}>=[]

  ngOnInit(): void {
    this.subscriber = this.bookService.show(this.myActivatedRoute.snapshot.params.id)
    .subscribe((response:any)=>{
      this.book = response.body
      this.reviews = this.book.bookReviews;
      this.ratings = this.book.bookRatings;
      this.ratesNum = this.book.bookRatings.length;
      this.readBookStatus(response.body.currantReader, response.body.wantToReadeUsers, response.body.finishReadUsers);
      this.favsNum = 0
      this.avgRate=0
      for(let i=0;i<this.ratings.length;i++)
        this.avgRate+=this.ratings[i].rate;
      if(this.ratesNum)
        this.avgRate/=this.ratesNum;
        this.drawMyRating(this.ratings);
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  setRate(bookRate:any){
    this.rateSubscriber = this.ratingService.store({rate:bookRate, rater:"605cde6e22d5b83d40ada5e6"/*this.userId*/, book:"605cdd9d22d5b83d40ada5e5"/*this.book.id*/})
  }

  drawMyRating(ratingsArr:any){
    this.stars_Arr=[this.star1,this.star2,this.star3,this.star4,this.star5];
    for(let i=0;i<ratingsArr.length;i++){
      if(ratingsArr[i].rater=="605cde6e22d5b83d40ada5e6"/*this.userId*/){
        this.stars_Arr[ratingsArr[i].rate-1].nativeElement.checked=true;
      }
    }
  }

  reloadComponent(){
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  publishClicked(e:any){
    this.text=this.reviewArea.nativeElement.value;
    if(this.text.length >= 1 && this.text.length <=300)
    {
      console.log(this.book.id)
      this.reviewerId = sessionStorage.getItem("userId");
      this.reviewSubscriber = this.reviewsService.store({reviwer:this.reviewerId, book:this.book.id, body:this.text})
      .subscribe((response:any)=>
        {
          console.log(response)
          // this.router.navigate([`/book/${this.myActivatedRoute.snapshot.params.id}`]);
          this.reloadComponent()

          },
          (err)=>{
            console.log(err)
        }
      )
    }
  }

  // ngOnDestroy(): void {
  //   this.subscriber.unsubscribe();
  //   this.rateSubscriber.unsubscribe();
  //   this.reviewSubscriber.unsubscribe();
  // }

  changeBookStatus(type: string){
    this.reviewerId = "605a0532ba76f47a7793e130"
    this.userSubscriber = this.userService.updateUserBookList({userId:this.reviewerId, bookId:this.book.id, type:type})
      .subscribe((response:any)=>
        {
          if(type == "1") this.bookStatus = "Want to read"
          else if(type == "2") this.bookStatus = "Is currant read"
          else if(type == "3") this.bookStatus = "Finished reading"
          console.log(response)
          // this.reloadComponent()

        },
        (err)=>{
          console.log(err)
        }
      )
  }

  readBookStatus(currantReader: [], wantToRead: [], finishRead: []){
    this.userId = "605a0532ba76f47a7793e130"
    const currant = currantReader.find(element => element == this.userId)
    const want = wantToRead.find(element => element == this.userId)
    const finish = finishRead.find(element => element == this.userId)

    if (currant) this.bookStatus = "Is currant read"
    else if (want) this.bookStatus = "Want to read"
    else if(finish) this.bookStatus = "Finished reading"
    else this.bookStatus = "Add to my list"

  }
}
