import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './modules/author/admin/index/index.component';
import { SidebarComponent } from './modules/author/admin/sidebar/sidebar.component';
import { StoreComponent } from './modules/author/admin/store/store.component';
import { DeleteComponent } from './modules/author/admin/delete/delete.component';
import { UpdateComponent } from './modules/author/admin/update/update.component';
import { NavbarAdminComponent } from './modules/author/admin/navbar-admin/navbar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    StoreComponent,
    DeleteComponent,
    UpdateComponent,
    NavbarAdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
