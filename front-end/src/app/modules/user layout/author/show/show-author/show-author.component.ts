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
  bookStatus: Array<String> = []

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
        this.readBookStatus(this.author.books);
        console.log(this.author.books[0].bookName);
      }
    );
  }

  changeBookStatus(type: string, bookId: any, index: number){
    console.log(type, bookId);
    this.userId = "605a0532ba76f47a7793e130"
    this.userSubscriber = this.userService.updateUserBookList({userId:this.userId, bookId:bookId, type:type})
      .subscribe((response:any)=>
        {
          if(type == "1") this.bookStatus[index]= "Is currant read"
          else if(type == "2") this.bookStatus[index] = "Want to read"
          else if(type == "3") this.bookStatus[index] = "Finished reading"
          this.ngOnInit()

        },
        (err)=>{
          console.log(err)
        }
      )
  }

  readBookStatus(books: any){
    this.userId = "605a0532ba76f47a7793e130"
    console.log(books);
    for(let i =0; i< books.length; i++){
      if (books[i].currantReader && books[i].currantReader.find((element: any) => element == this.userId)){
        this.bookStatus[i] = "Is currant read"
      }else if(books[i].wantToReadeUsers && books[i].wantToReadeUsers.find((element: any) => element == this.userId)){
        this.bookStatus[i] = "Want to read"
      }else if(books[i].finishReadUsers && books[i].finishReadUsers.find((element: any) => element == this.userId)){
        this.bookStatus[i] = "Finished reading"
      }else {
        this.bookStatus[i] = "Add to my list"
      }
      console.log("here",this.bookStatus[i]);
    }

  }

}
