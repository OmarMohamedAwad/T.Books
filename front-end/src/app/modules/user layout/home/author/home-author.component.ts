import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.css']
})
export class HomeAuthorComponent implements OnInit {

  subscriber:any;

  loading =false;
  authorsImages:string[] = [];
  authorsNames:string[] = [];
  authorsId:string [] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    let home;
    this.subscriber = this.homeService.getHome()
    .subscribe((response:any)=>{
      home = response.body.authors;
      this.loading = true
      for(let i = 0 ;  i < home.length && i < 6 ; i++)
      {
        this.authorsImages.push(home[i].authorImage)
        this.authorsNames.push(home[i].autherFirstName)
        this.authorsId.push(response.body.authors[i]._id)
      }
     // console.log(this.authorsImages)
     // console.log(this.authorsNames)
      console.log(this.authorsId)
    },
    (err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Error, Can't get authors information !",
        footer: ''
      })
    }
    )
  }
}
