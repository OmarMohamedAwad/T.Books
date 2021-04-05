import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('authorInfo') author:{id:string,autherFirstName:string,autherLastName:string,authorDob:string} = {
    id:'',
    autherFirstName:'',
    autherLastName:'',
    authorDob:''
  }
  a:any;

  updateFun()
  {
    this.a=this.author
    console.log("updateeeeee")
    console.log(this.a)
  }

}
