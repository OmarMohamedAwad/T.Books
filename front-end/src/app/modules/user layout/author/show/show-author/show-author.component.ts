import {Book} from './../../../../admin layout/book/models/book';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Author} from 'src/app/modules/admin layout/author/models/author';
import {AuthorsServiceService} from 'src/app/services/authors-service.service';
import {ReviewsService} from '../../../../../services/reviews.service';
import {UserService} from '../../../../../services/user.service';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  author: any;
  userId: any;
  authorID: any;
  ratings = [1, 2, 3, 4, 5, 3];
  userSubscriber:any;

  constructor(private authorService: AuthorsServiceService,
              private myActivatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    this.authorID = this.myActivatedRoute.snapshot.params.id;
    this.userId=sessionStorage.getItem("userId") ? sessionStorage.getItem("userId") : "";
  }

  ngOnInit(): void {
    this.getAuthorById();
  }

  getAuthorById() {
    this.authorService.show(this.authorID).subscribe(
      (res) => {
        console.log(this.authorID);
        this.author = res;
        console.log(this.author);
        console.log(this.author.books.length);
        console.log(this.author.books[0].bookName);
      }
    );
  }

  changeBookStatus(type: string, bookId: any){
    console.log(type, bookId);
    this.userId = "605a0532ba76f47a7793e130"
    this.userSubscriber = this.userService.updateUserBookList({userId:this.userId, bookId:bookId, type:type})
      .subscribe((response:any)=>
        {
          console.log(response)
          this.ngOnInit()

        },
        (err)=>{
          console.log(err)
        }
      )
  }

}
