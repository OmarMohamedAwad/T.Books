import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './modules/admin layout/author/index/index.component';
import { SidebarComponent } from './modules/admin layout/shared/sidebar/sidebar.component';
import { StoreComponent } from './modules/admin layout/author/store/store.component';
import { DeleteComponent } from './modules/admin layout/author/delete/delete.component';
import { UpdateComponent } from './modules/admin layout/author/update/update.component';
import { NavbarAdminComponent } from './modules/admin layout/shared/navbar-admin/navbar-admin.component';
import { ShowAuthorComponent } from './modules/user layout/shared/author/show/show-author/show-author.component';
import { AuthorCardComponent } from './modules/user layout/shared/author/show/author-card/author-card.component';
import { AuthorBookslistComponent } from './modules/user layout/shared/author/show/author-bookslist/author-bookslist.component';
import { AuthorBookComponent } from './modules/user layout/shared/author/show/author-book/author-book.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    StoreComponent,
    DeleteComponent,
    UpdateComponent,
    NavbarAdminComponent,
    ShowAuthorComponent,
    AuthorCardComponent,
    AuthorBookslistComponent,
    AuthorBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
