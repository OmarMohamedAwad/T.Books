import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IndexComponent } from './modules/admin layout/author/index/index.component';
import { SidebarComponent } from './modules/admin layout/shared/sidebar/sidebar.component';
import { StoreComponent } from './modules/admin layout/author/store/store.component';
import { DeleteComponent } from './modules/admin layout/author/delete/delete.component';
import { UpdateComponent } from './modules/admin layout/author/update/update.component';
import { NavbarAdminComponent } from './modules/admin layout/shared/navbar-admin/navbar-admin.component';
import { SettingComponent } from './modules/admin layout/setting/setting.component';
import { ShowAuthorComponent } from  './modules/user layout/author/show/show-author/show-author.component';
import { AuthorCardComponent } from  './modules/user layout/author/show/author-card/author-card.component';
import { AuthorBookslistComponent } from  './modules/user layout/author/show/author-bookslist/author-bookslist.component';
import { AuthorBookComponent } from  './modules/user layout/author/show/author-book/author-book.component';
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
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthorsListForAdminComponent } from './modules/admin layout/author/authors-list-for-admin/authors-list-for-admin.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AdminMainBookComponent } from './modules/admin layout/book/main/admin-main-book.component';
import { FooterComponent } from './modules/user layout/shared/footer/footer.component';
import { LoginRegisterComponent } from './modules/user layout/access/login-register.component';
import { TermsComponent } from './modules/user layout/terms/terms.component';
import { NavUserComponent } from './modules/user layout/shared/nav-user/nav-user.component';
import { BookDetComponent } from './modules/user layout/book/book-det/book-det.component';
import { DashboardComponent } from './modules/admin layout/dashboard/dashboard.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { AboutUsComponent } from './modules/user layout/about-us/about-us.component';
import { AboutHeaderComponent } from './modules/user layout/about-us/about-header/about-header.component';
import { AboutMissionComponent } from './modules/user layout/about-us/about-mission/about-mission.component';
import { AboutWhyChooseUsComponent } from './modules/user layout/about-us/about-why-choose-us/about-why-choose-us.component';
import { Observable } from 'rxjs';
import { AdminLoginComponent } from './modules/admin layout/admin-login/admin-login.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ConcateNamePipe } from './pipes/concate-name.pipe';
import { RatingDetComponent } from './modules/user layout/book/rating-det/rating-det.component';
import { AdminRoutingModule } from './modules/admin layout/route/admin-routing/admin-routing.module';
import { UserRoutingModule } from './modules/user layout/user-routing/user-routing.module';
import { UserAuthGaurdGuard } from './Guards/user-auth-gaurd.guard';
import { AveragePipe } from './pipes/average.pipe';
import { SumPipe } from './pipes/sum.pipe';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { EmptyComponent } from './modules/shared/empty/empty.component';
import { UserLoadingComponent } from './modules/user layout/shared/user-loading/user-loading.component';

//import {  AuthServiceConfig } from 'angular-6-social-login';
//import { SocialLoginModule, GoogleLoginProvider } from 'angular-6-social-login';

// const config = new AuthServiceConfig([
//   {
//     id:GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("1077731222680-epvlr6bqovq88fi7jbfi08anvd5iu315.apps.googleusercontent.com")
//   }
// ])
// export function provideConfig(){
//   return config;
// }

// const appRoutes:Routes=[
//   {path:"",redirectTo:"",pathMatch:"full"},
// ]

//  const appRoutes:Routes=[
//    {path:"",redirectTo:"",pathMatch:"full"},
//    {path:"login",component:LoginRegisterComponent},
//    //we can put guard in all url which we neeeeed to protect by CanActivate
//    {path:"user/home",canActivate:[UserAuthGaurdGuard],component:HomeAllComponent}
//  ]

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
    NavUserComponent,
    BookDetComponent,
    DashboardComponent,
    UserProfileIndexComponent,
    UserProfileHeaderComponent,
    UserProfileSideComponent,
    UserProfilePaginationComponent,
    UserProfileCardsComponent,
    UserBookIndexComponent,
    UserCategoryIndexComponent,
    UserCategorySidebarComponent,
    UserCategoryHeaderComponent,
    UserCategoryBooksComponent,
    AboutUsComponent,
    AboutHeaderComponent,
    AboutMissionComponent,
    AboutWhyChooseUsComponent,
    AdminMainBookComponent,
    AuthorsListForAdminComponent,
    NavUserComponent,
    BookDetComponent,
    DashboardComponent,
    FooterComponent,
    LoginRegisterComponent,
    TermsComponent,
    NotFoundComponent,
    ConcateNamePipe,
    AdminLoginComponent,
    RatingDetComponent,
    AveragePipe,
    SumPipe,
    EmptyComponent,
    UserLoadingComponent
  ],
  exports:[
    ConcateNamePipe
  ] ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AdminRoutingModule,
    UserRoutingModule,
    SocialLoginModule
    /*AngularFireModule.initializeApp({
      apiKey: "AIzaSyD0i1yATiiDS4BxkMiPlvYJ8qy0T1Ai6Co",
      authDomain: "tbooks-9e855.firebaseapp.com",
      projectId: "tbooks-9e855",
      storageBucket: "tbooks-9e855.appspot.com",
      messagingSenderId: "43736950350",
      appId: "1:43736950350:web:bb29d541a23df55f64851f"
    })*/
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "464610881896-l2coufs0u4oe7i5rll63k833ijf2o3rt.apps.googleusercontent.com"
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
