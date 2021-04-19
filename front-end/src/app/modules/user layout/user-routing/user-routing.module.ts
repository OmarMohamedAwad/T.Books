import { ShowAuthorComponent } from './../author/show/show-author/show-author.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component'
import { UserAuthorIndexComponent } from '../author/user-author-index/user-author-index.component'
import { UserBookIndexComponent } from '../book/user-book-index/user-book-index.component'
import { BookDetComponent } from '../book/book-det/book-det.component'
import { UserCategoryIndexComponent } from '../category/user-category-index/user-category-index.component'
import { HomeAllComponent } from '../home/home-all/home-all.component'
import { TermsComponent } from '../terms/terms.component'
import { UserProfileIndexComponent } from '../user-profile/index/user-profile-index.component'
import { LoginRegisterComponent } from '../access/login-register.component'
import { UserAuthGaurdGuard } from '../../../Guards/user-auth-gaurd.guard'
import { NotFoundComponent } from '../../not-found/not-found.component';



const routes:Routes = [

  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'authors',component:UserAuthorIndexComponent},
  {path:'authors/:id',component:ShowAuthorComponent},
  {path:'books', component:UserBookIndexComponent  },
  {path:'books/:id', component:BookDetComponent },
  {path:'categories', component:UserCategoryIndexComponent},
  {path:'home', component:HomeAllComponent},
  {path:'terms', component:TermsComponent},
  {path:'profile', canActivate:[UserAuthGaurdGuard], component:UserProfileIndexComponent},
  {path:'login', component:LoginRegisterComponent},
  {path:'users',canActivate:[UserAuthGaurdGuard],component:UserProfileIndexComponent},
  {path:'*',component:NotFoundComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class UserRoutingModule { }
