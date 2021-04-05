import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IndexComponent } from './modules/admin layout/author/index/index.component';
import { SidebarComponent } from './modules/admin layout/shared/sidebar/sidebar.component';
import { StoreComponent } from './modules/admin layout/author/store/store.component';
import { DeleteComponent } from './modules/admin layout/author/delete/delete.component';
import { UpdateComponent } from './modules/admin layout/author/update/update.component';
import { NavbarAdminComponent } from './modules/admin layout/shared/navbar-admin/navbar-admin.component';
import { SettingComponent } from './modules/admin layout/setting/setting.component';
import { ShowAuthorComponent } from './modules/user layout/shared/author/show/show-author/show-author.component';
import { AuthorCardComponent } from './modules/user layout/shared/author/show/author-card/author-card.component';
import { AuthorBookslistComponent } from './modules/user layout/shared/author/show/author-bookslist/author-bookslist.component';
import { AuthorBookComponent } from './modules/user layout/shared/author/show/author-book/author-book.component';
import { UserAuthorIndexComponent } from './modules/user layout/author/user-author-index/user-author-index.component';
import { BookIndexComponent } from './modules/admin layout/book/index/book-index.component';
import { BookDeleteComponent } from './modules/admin layout/book/delete/book-delete.component';
import { BookUpdateComponent } from './modules/admin layout/book/update/book-update.component';
import { BookStoreComponent } from './modules/admin layout/book/store/book-store.component';
import { HomeAllComponent } from './modules/user layout/home/home-all/home-all.component';
import { HomeHeaderComponent } from './modules/user layout/home/header/home-header.component';
import { HomePopularBookComponent } from './modules/user layout/home/popular-book/home-popular-book.component';
import { HomeSubscribeComponent } from './modules/user layout/home/subscribe/home-subscribe.component';
import { HomeAuthorComponent } from './modules/user layout/home/author/home-author.component';
import { HomeTopCategoryComponent } from './modules/user layout/home/top-category/home-top-category.component';
import { HomeFooterComponent } from './modules/user layout/home/footer/home-footer.component';
import { CategoryIndexComponent } from './modules/admin layout/category/category-index/category-index.component';
import { CategoryStoreComponent } from './modules/admin layout/category/category-store/category-store.component';
import { CategoryUpdateComponent } from './modules/admin layout/category/category-update/category-update.component';
import { CategoryDeleteComponent } from './modules/admin layout/category/category-delete/category-delete.component';
import { UserProfileIndexComponent } from './modules/user layout/user-profile/index/user-profile-index.component';
import { UserProfileHeaderComponent } from './modules/user layout/user-profile/header/user-profile-header.component';
import { UserProfileSideComponent } from './modules/user layout/user-profile/side-menu/user-profile-side.component';
import { UserProfilePaginationComponent } from './modules/user layout/user-profile/pagination/user-profile-pagination.component';
import { UserProfileCardsComponent } from './modules/user layout/user-profile/cards/user-profile-cards.component';
import { UserBookIndexComponent } from './modules/user layout/book/user-book-index/user-book-index.component';
import { UserCategoryIndexComponent } from './modules/user layout/category/user-category-index/user-category-index.component';
import { UserCategorySidebarComponent } from './modules/user layout/category/user-category-sidebar/user-category-sidebar.component';
import { UserCategoryHeaderComponent } from './modules/user layout/category/user-category-header/user-category-header.component';
import { UserCategoryBooksComponent } from './modules/user layout/category/user-category-books/user-category-books.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    StoreComponent,
    DeleteComponent,
    UpdateComponent,
    NavbarAdminComponent,
    SettingComponent,
    ShowAuthorComponent,
    AuthorCardComponent,
    AuthorBookslistComponent,
    AuthorBookComponent,
    UserAuthorIndexComponent,
    BookIndexComponent,
    BookDeleteComponent,
    BookUpdateComponent,
    BookStoreComponent,
    HomeAllComponent,
    HomeHeaderComponent,
    HomePopularBookComponent,
    HomeSubscribeComponent,
    HomeAuthorComponent,
    HomeTopCategoryComponent,
    HomeFooterComponent,
    CategoryIndexComponent,
    CategoryStoreComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent,
    UserProfileIndexComponent,
    UserProfileHeaderComponent,
    UserProfileSideComponent,
    UserProfilePaginationComponent,
    UserProfileCardsComponent,
    UserBookIndexComponent,
    UserCategoryIndexComponent,
    UserCategorySidebarComponent,
    UserCategoryHeaderComponent,
    UserCategoryBooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
