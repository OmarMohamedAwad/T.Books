import {Component, OnInit} from '@angular/core';
import {HomeService} from 'src/app/services/home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-popular-book',
  templateUrl: './home-popular-book.component.html',
  styleUrls: ['./home-popular-book.component.css']
})
export class HomePopularBookComponent implements OnInit {

  loading = false
  subscriber: any;

  popularbooks: string[] = []
  popularbooksNames: string[] = []
  popularbooksAuthors: string[] = [];


  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
        console.log(response);
      home = response.body.books;
      console.log(home)
      this.loading = true
      for(let i = 0; i < home.length && i < 8; i++)
      {
        this.popularbooks.push(home[i].bookImage);
        this.popularbooksNames.push(home[i].bookName);
        this.popularbooksAuthors.push(home[i].bookAuthor.autherFirstName);
      }
      console.log(this.popularbooks)
      console.log(this.popularbooksNames)
      console.log(this.popularbooksAuthors)
    },
    (err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error loading Home content",
        footer: ''
      })
    }
    )
  }

}
