import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from '../../author/index/index.component';
import {StoreComponent} from '../../author/store/store.component';
import {CategoryIndexComponent} from '../../category/category-index/category-index.component';
import {CategoryStoreComponent} from '../../category/category-store/category-store.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {AdminMainBookComponent} from '../../book/main/admin-main-book.component';
import {SettingComponent} from '../../setting/setting.component';
import {NotFoundComponent} from '../../../not-found/not-found.component';
import {AdminLoginComponent} from '../../admin-login/admin-login.component';

const routes:Routes = [
  {path:"admin/login",component:AdminLoginComponent},
  {path:'admin/author',component:IndexComponent},
  {path:'admin/author/store',component:StoreComponent},
  {path:'admin/category',component:CategoryIndexComponent},
  {path:'admin/category/store',component:CategoryStoreComponent},
  {path:'admin/dashboard',component:DashboardComponent},
  {path:'admin/book',component:AdminMainBookComponent},
  {path:'admin/setting',component:SettingComponent},
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
export class AdminRoutingModule { }
