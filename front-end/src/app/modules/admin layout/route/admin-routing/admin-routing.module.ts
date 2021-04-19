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
import { AdminAuthGuard } from '../../../../Guards/admin-auth.guard'

const routes:Routes = [
  {path:"admin/login",component:AdminLoginComponent},
  {path:'admin/author', canActivate:[AdminAuthGuard], component:IndexComponent},
  {path:'admin/author/store', canActivate:[AdminAuthGuard], component:StoreComponent},
  {path:'admin/category', canActivate:[AdminAuthGuard], component:CategoryIndexComponent},
  {path:'admin/category/store', canActivate:[AdminAuthGuard], component:CategoryStoreComponent},
  {path:'admin/dashboard', canActivate:[AdminAuthGuard], component:DashboardComponent},
  {path:'admin/book', canActivate:[AdminAuthGuard],component:AdminMainBookComponent},
  {path:'admin/setting',canActivate:[AdminAuthGuard],component:SettingComponent},
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
