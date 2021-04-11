import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CategoryService } from '../service/category.service'

@Component({
  selector: 'app-user-category-books',
  templateUrl: './user-category-books.component.html',
  styleUrls: ['./user-category-books.component.css']
})
export class UserCategoryBooksComponent implements OnInit {

  subscriber:any;
  currentPage:number = 1;
  currentCategory:string = "Sport";
  maxPages:number = 1;
  row1:string[] = []
  row2:string[] = []
  books:string[][] = [ this.row1 , this.row2 ];
  paginationPages:number[] = [4,5,6];

  constructor(private categoryService: CategoryService) { }

  selectCategory(name:string){
    this.currentCategory = name;
    this.currentPage = 1;
    this.getPage(this.currentCategory , this.currentPage);
  }

  searchBook(book:string){
    this.currentPage = 1;
    this.getPage(this.currentCategory , this.currentPage , book);
  }

  ngOnInit(): void {
    this.getPage(this.currentCategory , this.currentPage);
  }

  changePagination(event:Event , type:any){
    if(type == "back" && this.currentPage > 1){
      this.currentPage--;
      this.getPage(this.currentCategory , this.currentPage);
    }
    else if(type == "next" && this.currentPage < this.maxPages){
      this.currentPage++;
      this.getPage(this.currentCategory , this.currentPage);
    }
    else{
      this.currentPage = type;
      this.getPage(this.currentCategory , this.currentPage);
    }
  }

  getPage(category:string , page:number , book:string="")
  {
    this.row2 = [];
    this.row1 = [];
    this.subscriber = this.categoryService.getCategoryPage(category,page,book)
    .subscribe((response:any)=>{
      console.log(response.body)
      this.maxPages = Math.ceil(response.body.bookNumbers / 8);
      console.log(this.maxPages)
      let books = response.body.pagebooks;
      books.find((book:string , index:number) => {
        if(index < 4)
          this.row1.push(book)
        else
          this.row2.push(book)
        console.log(this.row1[0] , this.row2[0])
      })
      console.log(this.row1 , this.row2)
      this.books = [this.row1 , this.row2 ]
      console.log(this.books)
      this.calculatePagination();
    },
    (err)=>{
      console.log(err)
    })
  }

  calculatePagination(){
    console.log(this.maxPages)
    switch(this.maxPages)
    {
      case 0:
        this.paginationPages = [0];
        break;
      case 1:
        this.paginationPages = [1];
        break;
      case 2:
        this.paginationPages = [1,2];
        break;
      default:
        if(this.currentPage == 1)
          this.paginationPages = [1,2,3];
        else if (this.currentPage == this.maxPages)
          this.paginationPages = [this.maxPages - 2 , this.maxPages - 1 , this.maxPages];
        else
          this.paginationPages = [this.maxPages - 1 , this.maxPages , this.maxPages + 1];
        break;
    }
  }
}