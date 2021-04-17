import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { AuthorsServiceService } from 'src/app/services/authors-service.service';
import { Router } from '@angular/router';
import {Author} from '../models/author';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private myService:AuthorsServiceService,  private router: Router) { }

  ngOnInit(): void {
  }

  @Input('authorInfo') author:Author = {
    id:"",
    firstName:"",
    lastName:"",
    name:"",
    birthDay:"",
    image:"",
    books:[]
  };

  goToAuthorsList()
  {
    this.router.navigate(['/admin/author']);
  }

  deleteFun()
  {
    console.log("delete")
    console.log(this.author.id)
    this.myService.deleteAuthor(this.author.id)
      .subscribe((data:any)=>{
        console.log(data.status)
        this.deleted();
        this.goToAuthorsList()
      },(err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error Deleting Author, Try again!",
          footer: ''
        })
      })
  }
  deleted(){
    Swal.fire(
      'Good job!',
      'Author deleted Successfully!',
      'success'
    )
  }
}
