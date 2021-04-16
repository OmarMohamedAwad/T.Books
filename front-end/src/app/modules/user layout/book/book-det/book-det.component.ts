import {AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger,state,transition, animate, style } from '@angular/animations';
import {Book} from '../../../admin layout/book/models/book';
import { ActivatedRoute } from '@angular/router';
import {BookServiceService} from '../../../admin layout/book/services/book-service.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Router } from '@angular/router';
import {UserService} from '../../../../services/user.service';




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

  selected:any = 'option2';
  // userId =
  user_img="assets/user/author/author-1.jpg";

  ratesNum:number =112585
  avgRate:number = 3.1;

  favsNum:number =215;
  userRate=-1;
  userReview:string="";

  constructor(private bookService: BookServiceService, private reviewsService: ReviewsService, private userService: UserService,
              private myActivatedRoute:ActivatedRoute, private router: Router) { }

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
      bookRatings:[]
    }

  subscriber:any;
  reviewSubscriber:any;
  userSubscriber:any;

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
      console.log(this.book)
      this.reviews = this.book.bookReviews;

      },
      (err)=>{
        console.log(err)
      }
    )
  }

  textChanged(e:any)
  {
    this.text = e.target.value;
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

  publishClicked(e:any){
    if(this.text.length > 9)
    {
      console.log(this.text)
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

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
    // this.reviewSubscriber.unsubscribe();
  }

  changeBookStatus(type: string){
    this.reviewerId = "605a0532ba76f47a7793e130"
    this.userSubscriber = this.userService.updateUserBookList({userId:this.reviewerId, bookId:this.book.id, type:type})
      .subscribe((response:any)=>
        {
          console.log(response)
          this.reloadComponent()

        },
        (err)=>{
          console.log(err)
        }
      )
  }
}
