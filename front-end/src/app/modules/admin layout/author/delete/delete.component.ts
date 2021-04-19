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

  //properties
  @Input('authorInfo') author:Author = {
    id:"",
    firstName:"",
    lastName:"",
    name:"",
    birthDay:"",
    image:"",
    books:[]
  };

  //constructor
  constructor(private myService:AuthorsServiceService,  private router: Router) { }

  //start the component
  ngOnInit(): void {}

  //navigate to the author list
  goToAuthorsList(){
    this.router.navigate(['/admin/author']);
  }

  //delete author from the list
  deleteFun(){
    //send request to backend to delete this author from the authors list
    this.myService.deleteAuthor(this.author.id)
      .subscribe((data:any)=>{
        if(data.status ===200){
          console.log(data.status)
          this.deleted();
          this.goToAuthorsList()
        }
        this.deleted();
        this.goToAuthorsList()
      },(err)=>{
        //erro while removing in backend
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error Deleting Author, Try again!",
          footer: ''

        })
      }
    )
  }
  deleted(){
    Swal.fire(
      'Good job!',
      'Author deleted Successfully!',
      'success'
    )
  }
}
