(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+TRR":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin layout/book/services/book-service.service.ts ***!
  \****************************************************************************/
/*! exports provided: BookServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookServiceService", function() { return BookServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class BookServiceService {
    //constructor
    constructor(client) {
        this.client = client;
        //properties
        this.BASE_URL = "http://localhost:3000/book";
        this.accessToken = sessionStorage.getItem('accessToken');
    }
    //get all data from GET / end point
    index() {
        return this.client.get(this.BASE_URL, {
            observe: "response"
        });
    }
    //get one page from database using GET /pages end point
    pagination(page = 1) {
        return this.client.get(`${this.BASE_URL}/pages?page=${page}`, { observe: "response" });
    }
    //search for specific books using GET /search/{search word} end point
    search(keyword, page) {
        return this.client.get(`${this.BASE_URL}/search/${keyword} ?page=${page}`, { observe: "response" });
    }
    //show one book details using GET /id end point
    show(id) {
        return this.client.get(`${this.BASE_URL}/${id}`, { observe: "response" });
    }
    //add new book using POST / end point with adding authorization token key
    store(book) {
        return this.client.post(this.BASE_URL, book, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    //edit exist book using PATCH /id end point with adding authorization token key
    update(book) {
        return this.client.patch(`${this.BASE_URL}/${book.id}`, book, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    //delete exist  book using DELETE /id end point with adding authorization token key
    destroy(id) {
        return this.client.delete(`${this.BASE_URL}/${id}`, {
            observe: "response",
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
}
BookServiceService.ɵfac = function BookServiceService_Factory(t) { return new (t || BookServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BookServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookServiceService, factory: BookServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+fJ/":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user layout/home/home-all/home-all.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAllComponent", function() { return HomeAllComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home.service */ "nr5L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _header_home_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/home-header.component */ "JQwJ");
/* harmony import */ var _popular_book_home_popular_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popular-book/home-popular-book.component */ "y+2T");
/* harmony import */ var _subscribe_home_subscribe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subscribe/home-subscribe.component */ "4SAU");
/* harmony import */ var _author_home_author_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../author/home-author.component */ "46cJ");
/* harmony import */ var _top_category_home_top_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../top-category/home-top-category.component */ "mSfS");
/* harmony import */ var _footer_home_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/home-footer.component */ "TUxq");












function HomeAllComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-loading");
} }
function HomeAllComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-home-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-home-popular-book");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-home-subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-home-author");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-home-top-category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-home-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeAllComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-home-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-home-popular-book");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-home-subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-home-author");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-home-top-category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-home-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeAllComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeAllComponent_ng_template_2_div_0_Template, 8, 0, "div", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loading);
} }
class HomeAllComponent {
    constructor(myService) {
        this.myService = myService;
        this.loading = false;
    }
    ngOnInit() {
        this.subscriber = this.myService.getHome()
            .subscribe((response) => {
            console.log(response.body);
            this.loading = true;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error loading Home content !",
                footer: ''
            });
        });
    }
}
HomeAllComponent.ɵfac = function HomeAllComponent_Factory(t) { return new (t || HomeAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"])); };
HomeAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeAllComponent, selectors: [["app-home-all"]], decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "content", "style", "overflow: hidden; width: 100%; height: 100%", 4, "ngIf", "ngIfElse"], ["displayScroll", ""], [1, "content", 2, "overflow", "hidden", "width", "100%", "height", "100%"], ["class", "content", "style", "overflow: auto; width: 100%; height: 100%", 4, "ngIf"], [1, "content", 2, "overflow", "auto", "width", "100%", "height", "100%"]], template: function HomeAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeAllComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeAllComponent_div_1_Template, 8, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeAllComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__["UserLoadingComponent"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__["NavUserComponent"], _header_home_header_component__WEBPACK_IMPORTED_MODULE_6__["HomeHeaderComponent"], _popular_book_home_popular_book_component__WEBPACK_IMPORTED_MODULE_7__["HomePopularBookComponent"], _subscribe_home_subscribe_component__WEBPACK_IMPORTED_MODULE_8__["HomeSubscribeComponent"], _author_home_author_component__WEBPACK_IMPORTED_MODULE_9__["HomeAuthorComponent"], _top_category_home_top_category_component__WEBPACK_IMPORTED_MODULE_10__["HomeTopCategoryComponent"], _footer_home_footer_component__WEBPACK_IMPORTED_MODULE_11__["HomeFooterComponent"]], styles: [".popular-book[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height: 230px !important;}\r\n\r\n.popular-book[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#88807C;}\r\n\r\n.popular-book[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color:#DE3241 ;font-size: 20px;}\r\n\r\n\r\n\r\n.subscribe[_ngcontent-%COMP%]{background-color: #DE3242;}\r\n\r\n\r\n\r\n.author[_ngcontent-%COMP%]{background-color: #F5F5F5;}\r\n\r\n.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #88807C; text-decoration: none; margin-top: 10px  !important;}\r\n\r\n\r\n\r\n.border[_ngcontent-%COMP%]{background-color: #121212;width: 100px; height: 2px;}\r\n\r\n\r\n\r\n.top-category[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height: 230px; width: 100%;}\r\n\r\n.top-category[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{background-color: rgba(0, 0, 0, .4); position: absolute; width: 100%; height: 230px}\r\n\r\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 40%;\r\n    left: 43%;\r\n    border-left: 20px solid transparent;\r\n    border-right: 20px solid transparent;\r\n}\r\n\r\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after{ border-bottom: 25px solid #DE3241;}\r\n\r\n.top-category[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]::after{border-bottom: 25px solid #53877A}\r\n\r\n.top-category[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]::after{border-bottom: 25px solid #F5BF56}\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%] {background-color: #EEEEEE;}\r\n\r\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size: 38px;}\r\n\r\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color: #DE3241; font-weight: 700;}\r\n\r\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color: #121212; font-weight: 700; text-transform: capitalize; font-size: 23px;}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color: #797980; }\r\n\r\n.mission[_ngcontent-%COMP%]{font-size: 15px; line-height: 1.7;}\r\n\r\n.mission[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size: 24px;}\r\n\r\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #DE3241;}\r\n\r\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color: #797980 ; cursor: pointer;}\r\n\r\n.find[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height: 1;}\r\n\r\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 15px;line-height: 1.2;}\r\n\r\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ color: #121212; font-size: 14px; text-decoration: underline;  }\r\n\r\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color: #DE3241; cursor: pointer;}\r\n\r\nfooter[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color: #121212; font-weight: 700;}\r\n\r\n\r\n\r\n.custom-background[_ngcontent-%COMP%]{\r\n    background-color:  #121212;\r\n }\r\n\r\n\r\n\r\n.bg-bink[_ngcontent-%COMP%]{background-color: #DE3241;}\r\n\r\n.bg-blue[_ngcontent-%COMP%]{background-color: #53877A;}\r\n\r\n.bg-yellow[_ngcontent-%COMP%]{background-color: #F5BF56;}\r\n\r\n.text-bink[_ngcontent-%COMP%]{color: #DE3241;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztxQkFTcUI7O0FBRXJCLHVCQUF1Qjs7QUFDdkIsa0JBQWtCLHdCQUF3QixDQUFDOztBQUMzQyxnQkFBZ0IsYUFBYSxDQUFDOztBQUM5QixpQkFBaUIsY0FBYyxDQUFDLGVBQWUsQ0FBQzs7QUFDaEQsd0JBQXdCOztBQUN4QixXQUFXLHlCQUF5QixDQUFDOztBQUdyQyxTQUFTOztBQUNULFFBQVEseUJBQXlCLENBQUM7O0FBQ2xDLFVBQVUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixDQUFDOztBQUU5RSxTQUFTOztBQUNULFFBQVEseUJBQXlCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzs7QUFFNUQsaUJBQWlCOztBQUNqQixvQkFBb0IsYUFBYSxFQUFFLFdBQVcsQ0FBQzs7QUFDL0MsdUJBQXVCLG1DQUFtQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxhQUFhOztBQUMxRztJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0FBQ3hDOztBQUNBLGlDQUFpQyxpQ0FBaUMsQ0FBQzs7QUFDbkUsMEJBQTBCLGlDQUFpQzs7QUFDM0QsNEJBQTRCLGlDQUFpQzs7QUFHN0QsU0FBUzs7QUFDVCxRQUFRLHlCQUF5QixDQUFDOztBQUNsQyxVQUFVLGVBQWUsQ0FBQzs7QUFDMUIsZUFBZSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7O0FBQ2hELFVBQVUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLDBCQUEwQixFQUFFLGVBQWUsQ0FBQzs7QUFDeEYsVUFBVSxjQUFjLEVBQUU7O0FBQzFCLFNBQVMsZUFBZSxFQUFFLGdCQUFnQixDQUFDOztBQUFFLFdBQVcsZUFBZSxDQUFDOztBQUN4RSxpQkFBaUIsY0FBYyxDQUFDOztBQUFFLHNCQUFzQixlQUFlLEVBQUUsZUFBZSxDQUFDOztBQUN6RixRQUFRLGNBQWMsQ0FBQzs7QUFDdkIsV0FBVyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7O0FBQzVDLFNBQVMsY0FBYyxFQUFFLGVBQWUsRUFBRSwwQkFBMEIsR0FBRzs7QUFBQyxjQUFjLGNBQWMsRUFBRSxlQUFlLENBQUM7O0FBQ3RILHFCQUFxQixjQUFjLEVBQUUsZ0JBQWdCLENBQUM7O0FBR3RELFlBQVk7O0FBQ1o7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBR0EsZ0JBQWdCOztBQUNoQixTQUFTLHlCQUF5QixDQUFDOztBQUNuQyxTQUFTLHlCQUF5QixDQUFDOztBQUNuQyxXQUFXLHlCQUF5QixDQUFDOztBQUNyQyxXQUFXLGNBQWMsQ0FBQyIsImZpbGUiOiJob21lLWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keXsgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjt9XHJcbi5pdGFsaWN7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5J31cclxuYnV0dG9uIHtwYWRkaW5nOiAxMnB4IDI0cHggIWltcG9ydGFudDtjb2xvcjogI2ZmZjsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbmZvbnQtc2l6ZTogMTdweDsgbGluZS1oZWlnaHQ6IDUwO30gXHJcbmhlYWRlciAuY2Fyb3VzZWwtaXRlbSBpbWd7aGVpZ2h0OiA0NTBweDt9XHJcbmhlYWRlciBoMntmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjsgZm9udC1zaXplOiA0OXB4O31cclxuaDJ7Zm9udC1zaXplOiA0OHB4O31cclxuLmJ0bi1jdXN0b20ge2ZvbnQtc2l6ZTogMjBweCA7IGZvbnQtd2VpZ2h0OjcwMDt9XHJcbmJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O2NvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG5we2ZvbnQtc2l6ZTogMjBweDt9ICovXHJcblxyXG4vKnBvcHVsYXIgQm9vayBTZWN0aW9uKi9cclxuLnBvcHVsYXItYm9vayBpbWd7aGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O31cclxuLnBvcHVsYXItYm9vayBhe2NvbG9yOiM4ODgwN0M7fVxyXG4ucG9wdWxhci1ib29rIGkge2NvbG9yOiNERTMyNDEgO2ZvbnQtc2l6ZTogMjBweDt9XHJcbi8qc3RheSBpbiB0b3VjaCBzZWN0aW9uKi9cclxuLnN1YnNjcmliZXtiYWNrZ3JvdW5kLWNvbG9yOiAjREUzMjQyO31cclxuXHJcblxyXG4vKmF1dGhvciovXHJcbi5hdXRob3J7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbi5hdXRob3IgYXtjb2xvcjogIzg4ODA3QzsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBtYXJnaW4tdG9wOiAxMHB4ICAhaW1wb3J0YW50O31cclxuXHJcbi8qY29tbW9uKi9cclxuLmJvcmRlcntiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAycHg7fVxyXG5cclxuLyp0b3AgY2F0ZWdvcmllcyovXHJcbi50b3AtY2F0ZWdvcnkgaW1nIHsgaGVpZ2h0OiAyMzBweDsgd2lkdGg6IDEwMCU7fVxyXG4udG9wLWNhdGVnb3J5IC5vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDIzMHB4fVxyXG4udG9wLWNhdGVnb3J5IC5jYXJkLWJvZHk6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDAlO1xyXG4gICAgbGVmdDogNDMlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRvcC1jYXRlZ29yeSAuY2FyZC1ib2R5OjphZnRlcnsgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCAjREUzMjQxO31cclxuLnRvcC1jYXRlZ29yeSAudHdvOjphZnRlcntib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkICM1Mzg3N0F9XHJcbi50b3AtY2F0ZWdvcnkgLnRocmVlOjphZnRlcntib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkICNGNUJGNTZ9XHJcblxyXG5cclxuLypGb290ZXIqL1xyXG5mb290ZXIge2JhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7fVxyXG5mb290ZXIgaDJ7Zm9udC1zaXplOiAzOHB4O31cclxuZm9vdGVyIGgyIHNwYW57Y29sb3I6ICNERTMyNDE7IGZvbnQtd2VpZ2h0OiA3MDA7fVxyXG5mb290ZXIgaDV7Y29sb3I6ICMxMjEyMTI7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBmb250LXNpemU6IDIzcHg7fVxyXG5mb290ZXIgIHB7Y29sb3I6ICM3OTc5ODA7IH1cclxuLm1pc3Npb257Zm9udC1zaXplOiAxNXB4OyBsaW5lLWhlaWdodDogMS43O30gLm1pc3Npb24gaXtmb250LXNpemU6IDI0cHg7fVxyXG4uc29jaWFsLWljb25zIGkge2NvbG9yOiAjREUzMjQxO30gLnNvY2lhbC1pY29ucyBpOmhvdmVye2NvbG9yOiAjNzk3OTgwIDsgY3Vyc29yOiBwb2ludGVyO30gXHJcbi5maW5kIHB7bGluZS1oZWlnaHQ6IDE7fVxyXG4uY29udGFjdCBwe2ZvbnQtc2l6ZTogMTVweDtsaW5lLWhlaWdodDogMS4yO31cclxuLmZpbmQgYXsgY29sb3I6ICMxMjEyMTI7IGZvbnQtc2l6ZTogMTRweDsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICB9LmZpbmQgYTpob3Zlcntjb2xvcjogI0RFMzI0MTsgY3Vyc29yOiBwb2ludGVyO31cclxuZm9vdGVyIC5jb250YWN0IHNwYW57Y29sb3I6ICMxMjEyMTI7IGZvbnQtd2VpZ2h0OiA3MDA7fVxyXG5cclxuXHJcbi8qZm9yIHRlc3QgKi9cclxuLmN1c3RvbS1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMxMjEyMTI7XHJcbiB9XHJcblxyXG5cclxuIC8qQ3VzdG9tIENvbG9ycyovXHJcbiAuYmctYmlua3tiYWNrZ3JvdW5kLWNvbG9yOiAjREUzMjQxO31cclxuIC5iZy1ibHVle2JhY2tncm91bmQtY29sb3I6ICM1Mzg3N0E7fVxyXG4gLmJnLXllbGxvd3tiYWNrZ3JvdW5kLWNvbG9yOiAjRjVCRjU2O31cclxuIC50ZXh0LWJpbmt7Y29sb3I6ICNERTMyNDE7fSJdfQ== */"] });


/***/ }),

/***/ "/CnI":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin layout/author/index/index.component.ts ***!
  \**********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _authors_list_for_admin_authors_list_for_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authors-list-for-admin/authors-list-for-admin.component */ "rZtP");






const _c0 = ["search_box"];
class IndexComponent {
    //construtor
    constructor() {
        this.keywords = "";
    }
    //start the component
    ngOnInit() { }
    //get the search words
    captureSearchContent() {
        this.keywords = this.search_box.nativeElement.value;
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-admin-author-index"]], viewQuery: function IndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.search_box = _t.first);
    } }, decls: 18, vars: 2, consts: [[1, "content-page"], [1, "author"], [1, "container"], [1, "top-part"], ["type", "button", "routerLink", "store", 1, "add-author"], [1, "fas", "fa-plus"], [1, "author-search"], [1, "input-group", "w-50", "m-auto"], [1, "form-outline", "w-75"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["search_box", ""], ["id", "search-button", "type", "button", 1, "btn", "search-btn", 3, "click"], [1, "fas", "fa-search"], [3, "keywords"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_input_ngModelChange_13_listener($event) { return ctx.keywords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_15_listener() { return ctx.captureSearchContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-authors-list-for-admin", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keywords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keywords", ctx.keywords);
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_1__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _authors_list_for_admin_authors_list_for_admin_component__WEBPACK_IMPORTED_MODULE_5__["AuthorsListForAdminComponent"]], styles: [".content-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding-left: 15%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  border: none !important;\r\n}\r\n\r\n\r\n\r\n.top-part[_ngcontent-%COMP%] {\r\n  padding-top: 10%;\r\n  height: 240px;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\r\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  color: white;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .add-author[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 20px;\r\n  float: right;\r\n  border-radius: 50%;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 4px 5px 0 rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.2);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.author-imag[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 35px;\r\n  border-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .author[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    padding-left: 21%;\r\n  }\r\n\r\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .orm-outline[_ngcontent-%COMP%] {\r\n    width: 90% !important;\r\n  }\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.5);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.table-dark[_ngcontent-%COMP%] {\r\n  background-color: #24324a;\r\n}\r\n\r\n\r\n\r\n.custom-bg[_ngcontent-%COMP%] {\r\n  background-color: #24324a;\r\n}\r\n\r\n.custom-txt[_ngcontent-%COMP%] {\r\n  color: #24324a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBLGNBQWM7O0FBQ2Q7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFO3FDQUNtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBLFlBQVk7O0FBQ1o7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQtcGFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTUlO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMsXHJcbmlucHV0OmZvY3VzLFxyXG5zdmc6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLypUb3AgU2VjdGlvbiovXHJcbi50b3AtcGFydCB7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG59XHJcblxyXG4udG9wLXBhcnQgaDIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50b3AtcGFydCAuYXV0aG9yLXNlYXJjaCBpbnB1dCxcclxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIGJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpLFxyXG4gICAgMCA0cHggNXB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xyXG59XHJcblxyXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2ggYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvcC1wYXJ0IC5hZGQtYXV0aG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKlRhYmxlIFNlY3Rpb24qL1xyXG5cclxuLmF1dGhvci1pbWFnIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmF1dGhvciAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjElO1xyXG4gIH1cclxuXHJcbiAgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3VwLFxyXG4gIC5vcm0tb3V0bGluZSB7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCBidXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4udGFibGUtZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzI0YTtcclxufVxyXG4vKk91ciBjb2xvciovXHJcbi5jdXN0b20tYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDMyNGE7XHJcbn1cclxuLmN1c3RvbS10eHQge1xyXG4gIGNvbG9yOiAjMjQzMjRhO1xyXG59XHJcbiJdfQ== */", ".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "/aK8":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user layout/shared/nav-user/nav-user.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavUserComponent", function() { return NavUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_user_layout_access_services_user_access_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/user layout/access/services/user-access-service.service */ "VDpO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["toggle_btn"];
const _c1 = ["collapseList"];
function NavUserComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavUserComponent_li_27_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.userLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavUserComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavUserComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavUserComponent_span_30_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.userLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.userName ? ctx_r4.userName : "user");
} }
function NavUserComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login |");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavUserComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.srcWidth = 0;
        this.refreshToken = "";
        this.userName = "";
        // userIsLoggedIn:any = false;
        this.userIsLoggedIn = sessionStorage.getItem('accessToken');
        this.srcWidth = 0;
        this.is_open = false;
    }
    ngOnInit() {
        console.log('status', this.userIsLoggedIn);
        this.userName = sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : "";
    }
    userLogout() {
        console.log('out');
        this.refreshToken = sessionStorage.getItem('refreshToken');
        this.service.logoutUser({ refreshToken: this.refreshToken })
            .subscribe((data) => {
            this.router.navigate(['/login']);
            console.log(data);
        }, (err) => {
        });
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userId');
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
    }
    onScroll() {
        let navbar = document.querySelector('nav');
        if (window.pageYOffset > navbar.clientHeight) {
            navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.8)');
        }
        else if (window.innerWidth >= 992) {
            navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.3)');
        }
    }
    getScreenSize() {
        this.srcWidth = window.innerWidth;
        let navbar = document.querySelector('nav');
        if (this.srcWidth < 992) {
            navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.8)');
        }
        else {
            navbar.setAttribute('style', 'background-color: rgba(0,0,0,0.3)');
        }
    }
    toggle_list(e) {
        if (this.is_open) {
            this.is_open = false;
            this.collapseList.nativeElement.setAttribute('style', 'display:none');
        }
        else {
            this.is_open = true;
            this.collapseList.nativeElement.setAttribute('style', 'display:block');
        }
    }
}
NavUserComponent.ɵfac = function NavUserComponent_Factory(t) { return new (t || NavUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_user_layout_access_services_user_access_service_service__WEBPACK_IMPORTED_MODULE_1__["UserAccessServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavUserComponent, selectors: [["app-nav-user"]], viewQuery: function NavUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toggle_btn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.collapseList = _t.first);
    } }, hostBindings: function NavUserComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavUserComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function NavUserComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 36, vars: 4, consts: [["data-spy", "affix", "data-offset-top", "205", 1, "navbar", "navbar-default", "navbar-expand-lg", "fixed-top", "scrolling-navbar"], [1, "container-fluid"], [1, "navbar-header"], [1, "logo", "d-inline", "navbar-brand", "ml-lg-5"], ["src", "assets/icon.ico", 1, "icon", "mr"], [1, "trending", "d-inline-block", "mt-1", 2, "font-size", "25px"], [1, "books", 2, "font-size", "25px"], ["id", "myNavbar", 1, "collapse", "navbar-collapse", "fixed-top", "p-2"], ["collapseList", ""], [1, "navbar-nav", "col-6", "ml-5"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/home", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/books", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/authors", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/categories", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/aboutUs", 1, "nav-link"], ["class", "nav-item d-lg-none d-md-block d-sm-block", 4, "ngIf", "ngIfElse"], ["falseBlock1", ""], ["class", "collapse navbar-collapse login  d-md-none  d-sm-none ml-lg-5", 4, "ngIf", "ngIfElse"], ["falseBlock", ""], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#myNavbar", "aria-controls", "myNavbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["toggle_btn", ""], ["src", "assets/user/shared/menu.svg", 1, "toggle"], [1, "nav-item", "d-lg-none", "d-md-block", "d-sm-block"], ["href", "", 1, "nav-link", 3, "click"], [1, "fas", "fa-sign-out-alt", "fa-1x", "text-white"], ["routerLinkActive", "active", "routerLink", "/login", 1, "nav-item", "d-lg-none", "d-md-block", "d-sm-block"], [1, "nav-link"], [1, "collapse", "navbar-collapse", "login", "d-md-none", "d-sm-none", "ml-lg-5"], ["src", "https://www.flaticon.com/svg/vstatic/svg/3011/3011478.svg?token=exp=1618634236~hmac=7e9248dd6b3015891f86be698334ca59", "width", "30", "height", "30", "alt", "user image", "routerLink", "/profile", 1, "mr", "user-image"], ["routerLinkActive", "active", "routerLink", "/profile", 1, "user-name", "mr"], [3, "click"], [1, "fas", "fa-sign-out-alt", "fa-1x", "text-white", "logout"], [1, "bg-transparent", "border-0"], ["routerLinkActive", "active", "routerLink", "/login", 1, "login-anchor"], ["routerLinkActive", "active", "routerLink", "/login"]], template: function NavUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavUserComponent_li_27_Template, 3, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavUserComponent_ng_template_28_Template, 6, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavUserComponent_span_30_Template, 8, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavUserComponent_ng_template_31_Template, 5, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavUserComponent_Template_button_click_33_listener($event) { return ctx.toggle_list($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn)("ngIfElse", _r5);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #DE3241;\r\n  padding: 5px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%] {\r\n  height: 30px;\r\n  color: white;\r\n}\r\n\r\nul[_ngcontent-%COMP%]:first-child {\r\n  margin-left: 32%;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  margin: 0 2%;\r\n}\r\n\r\nnav.logo[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  float: left;\r\n  height: 45px;\r\n  transition: 0.5s;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-family: 'Playfair Display';\r\n  font-weight: 700;\r\n  font-size: 30px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .books[_ngcontent-%COMP%] {\r\n  color: #DE3241;\r\n}\r\n\r\nnav.navbar-default[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\nnav.navbar-default.affix[_ngcontent-%COMP%] {\r\n  background-color: #222;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.login[_ngcontent-%COMP%] {\r\n  padding-right: 20px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.login-anchor[_ngcontent-%COMP%] {\r\n  padding: 0 10px;\r\n}\r\n\r\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, nav.navbar-default[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n  color: #fff !important;\r\n  background-color: transparent;\r\n}\r\n\r\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .login[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  \r\n  font-size: 110%;\r\n  font-weight: bold;\r\n}\r\n\r\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, nav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #DE3241;\r\n  background-color: transparent;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:focus, nav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:hover {\r\n  font-weight: 700;\r\n  color: #DE3241;\r\n  background-color: transparent;\r\n}\r\n\r\n.navbar-toggler-icon[_ngcontent-%COMP%], .navbar-toggler[_ngcontent-%COMP%]{\r\n  border-color: transparent;\r\n  background-color: transparent;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .navbar-collapse[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    margin-top: 67px;\r\n    align-items: left;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n\r\n  .navbar-toggler-icon[_ngcontent-%COMP%], .navbar-toggler[_ngcontent-%COMP%] {\r\n    border: transparent !important;\r\n  }\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n  animation: rotation 3s infinite;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  color: #DE3241;\r\n}\r\n\r\n.mr[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.user-image[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  border: 1px solid #DE3241;\r\n  cursor: pointer;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes rotation {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n  nav.navbar-default[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  nav.navbar-default[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFHckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBR2pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUd0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBQ0YiLCJmaWxlIjoibmF2LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREUzMjQxO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnVsOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogMzIlO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbWFyZ2luOiAwIDIlO1xyXG59XHJcblxyXG5uYXYubG9nbyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5uYXYgLmxvZ28gaW1nIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxubmF2IC5sb2dvIHNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbm5hdiAubG9nbyAuYm9va3Mge1xyXG4gIGNvbG9yOiAjREUzMjQxO1xyXG59XHJcblxyXG5uYXYubmF2YmFyLWRlZmF1bHQge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxubmF2Lm5hdmJhci1kZWZhdWx0LmFmZml4IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxvZ2luLWFuY2hvciB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG5uYXYubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubmF2Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6Zm9jdXMsIG5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5uYXYubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGEsIC5sb2dpbiwgcHJlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICAvKmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsqL1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxubmF2Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzLFxyXG5uYXYubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsXHJcbi5sb2dpbiBhOmhvdmVyIHtcclxuICBjb2xvcjogI0RFMzI0MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmxvZ2luIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxubmF2Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IGxpIGEuYWN0aXZlLFxyXG5uYXYubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgbGkgYS5hY3RpdmU6Zm9jdXMsXHJcbm5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiBsaSBhLmFjdGl2ZTpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI0RFMzI0MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWljb24sIC5uYXZiYXItdG9nZ2xlcntcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIG1hcmdpbi10b3A6IDY3cHg7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGVyLWljb24sIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAzcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNERTMyNDE7XHJcbn1cclxuXHJcbi5tciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udXNlci1pbWFnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNERTMyNDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nb3V0e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgbmF2Lm5hdmJhci1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgbmF2Lm5hdmJhci1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "/r+5":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user layout/book/rating-det/rating-det.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RatingDetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDetComponent", function() { return RatingDetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


const _c0 = ["progressFill5"];
const _c1 = ["progressFill4"];
const _c2 = ["progressFill3"];
const _c3 = ["progressFill2"];
const _c4 = ["progressFill1"];
class RatingDetComponent {
    constructor() {
        this.chartData = [0, 0, 0, 0, 0];
        this.ratingFreq = [0, 0, 0, 0, 0];
    }
    ngOnChanges(changes) {
        for (let i = 0; i < this.ratingsArr.length; i++)
            this.ratingFreq[this.ratingsArr[i].rate - 1]++;
        for (let i = 0; i < 5; i++)
            this.chartData[i] = Math.ceil((this.ratingFreq[i] * 100) / this.ratingsArr.length);
        this.setFill();
    }
    ngOnInit() {
    }
    setFill() {
        this.progressFill1.nativeElement.setAttribute('style', `width: ${this.chartData[0]}%;`);
        this.progressFill2.nativeElement.setAttribute('style', `width: ${this.chartData[1]}%;`);
        this.progressFill3.nativeElement.setAttribute('style', `width: ${this.chartData[2]}%;`);
        this.progressFill4.nativeElement.setAttribute('style', `width: ${this.chartData[3]}%;`);
        this.progressFill5.nativeElement.setAttribute('style', `width: ${this.chartData[4]}%;`);
    }
}
RatingDetComponent.ɵfac = function RatingDetComponent_Factory(t) { return new (t || RatingDetComponent)(); };
RatingDetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingDetComponent, selectors: [["app-rating-det"]], viewQuery: function RatingDetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressFill5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressFill4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressFill3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressFill2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressFill1 = _t.first);
    } }, inputs: { ratingsArr: "ratingsArr" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 45, vars: 15, consts: [["id", "ratingModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title", "d-block", "text-center"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-3", "author-form"], ["id", "graph"], ["graph", ""], [1, "progressBar"], [1, "barLabel", 2, "font-size", "x-large"], [2, "color", "#DE3241", "font-size", "xx-large", "width", "0", 3, "max", "rate", "readonly"], [1, "progressTrack", "mt-0", "pt-0"], [1, "progressFill"], ["progressFill5", ""], [1, "barLabel", "d-inline", 2, "font-size", "x-large"], ["progressFill4", ""], [1, "barLabel", "d-inline-block", 2, "font-size", "x-large"], ["progressFill3", ""], ["progressFill2", ""], ["progressFill1", ""]], template: function RatingDetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rating details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngb-rating", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngb-rating", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ngb-rating", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 13, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ngb-rating", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 13, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "ngb-rating", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 13, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1)("rate", 1)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1)("rate", 1)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1)("rate", 1)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1)("rate", 1)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1)("rate", 1)("readonly", true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"]], styles: ["#graph[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 450px;\r\n  padding-bottom: 5px;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  background-color: #e4e4e4;\r\n  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.34);\r\n}\r\n.progressBar[_ngcontent-%COMP%] {\r\n  width: 96%;\r\n  height: 60px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center; \r\n}\r\n.progressTrack[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  margin-top: 10px;\r\n  box-shadow: inset 0px 0px 10px 5px rgba(0,0,0,0.4);\r\n}\r\n.progressFill[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 0%;\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: linear-gradient(0deg, #CE3241 0%, #DE3241 52%, #CE3241 100%);\r\n  text-align: center;\r\n  line-height: 40px;\r\n  transition: all 3s ease ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy1kZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUd6Qiw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFHaEIsa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGtDQUFrQztFQUNsQyx3RUFBd0U7RUFDeEUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoicmF0aW5nLWRldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dyYXBoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zNCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMzQpO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zNCk7XHJcbn1cclxuLnByb2dyZXNzQmFyIHtcclxuICB3aWR0aDogOTYlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbn1cclxuLnByb2dyZXNzVHJhY2sge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuLnByb2dyZXNzRmlsbCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjQ0UzMjQxIDAlLCAjREUzMjQxIDUyJSwgI0NFMzI0MSAxMDAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2UgO1xyXG59ICBcclxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\New foldert\T.Books\front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "03wz":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/user layout/user-profile/pagination/user-profile-pagination.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UserProfilePaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePaginationComponent", function() { return UserProfilePaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserProfilePaginationComponent_span_8_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfilePaginationComponent_span_8_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changePagination($event, page_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r1, " ");
} }
function UserProfilePaginationComponent_span_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfilePaginationComponent_span_8_ng_template_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePagination($event, page_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r1, " ");
} }
function UserProfilePaginationComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfilePaginationComponent_span_8_a_2_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserProfilePaginationComponent_span_8_ng_template_3_Template, 3, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r1 == ctx_r0.currentPage)("ngIfElse", _r4);
} }
class UserProfilePaginationComponent {
    constructor() {
        this.paginationPages = [1, 2, 3];
        this.currentPage = 1;
        this.selectedPageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getPagination(paginationObj) {
        console.log(paginationObj);
        this.paginationPages = paginationObj.paginationPages;
        this.currentPage = paginationObj.currentPage;
    }
    ngOnInit() {
    }
    changePagination(event, type) {
        this.selectedPageEmitter.emit(type);
    }
}
UserProfilePaginationComponent.ɵfac = function UserProfilePaginationComponent_Factory(t) { return new (t || UserProfilePaginationComponent)(); };
UserProfilePaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfilePaginationComponent, selectors: [["app-user-profile-pagination"]], outputs: { selectedPageEmitter: "selectedPageEmitter" }, decls: 12, vars: 1, consts: [[1, "pagination-section"], [1, "container"], [1, "row"], ["aria-label", "Page navigation example"], [1, "pagination", "w-50"], [1, "page-item"], ["href", "#", 1, "", 3, "click"], [1, "fas", "fa-chevron-circle-left", "fa-2x"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-circle-right", "fa-2x"], ["class", "", "href", "#", "style", "color:  #de3242", 3, "click", 4, "ngIf", "ngIfElse"], ["noStar", ""], ["href", "#", 1, "", 2, "color", "#de3242", 3, "click"]], template: function UserProfilePaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfilePaginationComponent_Template_a_click_6_listener($event) { return ctx.changePagination($event, "back"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserProfilePaginationComponent_span_8_Template, 5, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfilePaginationComponent_Template_a_click_10_listener($event) { return ctx.changePagination($event, "next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paginationPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".pagination[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    justify-content: center;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: black;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n  }\r\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    margin-top: -5px;\r\n    color: #de3242;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCIiwiZmlsZSI6InVzZXItcHJvZmlsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlBhZ2luYXRpb24gU2VjdGlvbiovXHJcbi5wYWdpbmF0aW9ue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGxpIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBsaSBhIHN2ZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgY29sb3I6ICNkZTMyNDI7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "0AbP":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DashboardService {
    constructor(_dashboard) {
        this._dashboard = _dashboard;
        this.baseURL = "http://localhost:3000/dashboard";
    }
    index() {
        const accessToken = sessionStorage.getItem('accessToken');
        return this._dashboard.get(this.baseURL, {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        });
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1NIu":
/*!**********************************************************!*\
  !*** ./src/app/modules/not-found/not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_layout_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user layout/shared/nav-user/nav-user.component */ "/aK8");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 12, vars: 0, consts: [[1, "text-center", "content", "fontPink"], ["src", "../../../assets/notfoundicon.gif", "alt", "not found icon", 2, "width", "80px", "overflow-y", "hidden"], [1, "fas", "fa-exclamation-triangle"], [1, "image"], ["src", "../../../assets/PageNotFound.jpg", "alt", "NotFound Image"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Page Not Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_user_layout_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__["NavUserComponent"]], styles: ["img[_ngcontent-%COMP%]{\r\n    width:70%;\r\n}\r\n.image[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n    font-size: 2.7em;\r\n    font-weight: 700;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOjcwJTtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDIuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC8qY29sb3I6IHJnYig4NywgODcsIDg3KTsqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "46cJ":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user layout/home/author/home-author.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomeAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAuthorComponent", function() { return HomeAuthorComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home.service */ "nr5L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/authors", a1]; };
function HomeAuthorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorCol_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/user/author/", authorCol_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.authorsId[i_r2]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.authorsNames[i_r2]);
} }
class HomeAuthorComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.loading = false;
        this.authorsImages = [];
        this.authorsNames = [];
        this.authorsId = [];
    }
    ngOnInit() {
        let home;
        this.subscriber = this.homeService.getHome()
            .subscribe((response) => {
            home = response.body.authors;
            this.loading = true;
            for (let i = 0; i < home.length && i < 6; i++) {
                this.authorsImages.push(home[i].authorImage);
                this.authorsNames.push(home[i].autherFirstName);
                this.authorsId.push(response.body.authors[i]._id);
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error, Can't get authors information !",
                footer: ''
            });
        });
    }
}
HomeAuthorComponent.ɵfac = function HomeAuthorComponent_Factory(t) { return new (t || HomeAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"])); };
HomeAuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeAuthorComponent, selectors: [["app-home-author"]], decls: 12, vars: 1, consts: [[1, "author", "py-5"], [1, "text-center", "pt-4"], [1, "italic"], [1, "border", "m-auto"], [1, "container"], [1, "row", "mt-4", "pt-4", "w-100"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-center", "mt-5"], ["routerLink", "/authors", 1, "btn", "btn-custom-custom", "font-weight-bold"], [1, "col"], ["onerror", "this.onerror=null; this.src='/assets/user/author/author-1.jpg'", 1, "w-100", 3, "src"], [1, "d-block", "text-center", 3, "routerLink"]], template: function HomeAuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Authors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeAuthorComponent_div_8_Template, 4, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "view more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authorsImages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".author[_ngcontent-%COMP%] {\r\n    font-family: 'PT Sans', sans-serif;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.italic[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-family: 'Playfair Display';\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 12px 24px !important;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-radius: 10px;\r\n    font-size: 17px;\r\n    line-height: 2;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n}\r\n\r\n.btn-custom[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    border: 1px solid #000 !important;\r\n    color: #000 !important;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #88807C;\r\n    text-decoration: none;\r\n    margin-top: 10px !important;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    background-color: #121212;\r\n    width: 100px;\r\n    height: 2px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n    object-fit: cover;\r\n    transition: .5s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYXV0aG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUtYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uaXRhbGljIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hdXRob3IgYSB7XHJcbiAgICBjb2xvcjogIzg4ODA3QztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "4Fz0":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin layout/route/admin-routing/admin-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _author_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../author/index/index.component */ "/CnI");
/* harmony import */ var _author_store_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../author/store/store.component */ "G09a");
/* harmony import */ var _category_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../category/category-index/category-index.component */ "MMyg");
/* harmony import */ var _category_category_store_category_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../category/category-store/category-store.component */ "GZWh");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "jHFM");
/* harmony import */ var _book_main_admin_main_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../book/main/admin-main-book.component */ "FgoS");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../setting/setting.component */ "jfoX");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../not-found/not-found.component */ "1NIu");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin-login/admin-login.component */ "WpqI");
/* harmony import */ var _Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Guards/admin-auth.guard */ "Rp5y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: "admin/login", component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"] },
    { path: 'admin/author', canActivate: [_Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]], component: _author_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'admin/author/store', canActivate: [_Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]], component: _author_store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"] },
    { path: 'admin/category', canActivate: [_Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]], component: _category_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_4__["CategoryIndexComponent"] },
    { path: 'admin/category/store', canActivate: [_Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]], component: _category_category_store_category_store_component__WEBPACK_IMPORTED_MODULE_5__["CategoryStoreComponent"] },
    { path: 'admin/dashboard', canActivate: [_Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]], component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'admin/book', canActivate: [_Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]], component: _book_main_admin_main_book_component__WEBPACK_IMPORTED_MODULE_7__["AdminMainBookComponent"] },
    { path: 'admin/setting', canActivate: [_Guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]], component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"] },
    { path: '*', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "4SAU":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user layout/home/subscribe/home-subscribe.component.ts ***!
  \********************************************************************************/
/*! exports provided: HomeSubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSubscribeComponent", function() { return HomeSubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeSubscribeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeSubscribeComponent.ɵfac = function HomeSubscribeComponent_Factory(t) { return new (t || HomeSubscribeComponent)(); };
HomeSubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeSubscribeComponent, selectors: [["app-home-subscribe"]], decls: 5, vars: 0, consts: [[1, "subscribe", "py-5", "text-center"], [1, "text-capitalize", "text-white", "italic", "mb-4"], ["routerLink", "/login", 1, "btn", "btn-custom", "py-2", "px-5"]], template: function HomeSubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stay in Touch With Our Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".subscribe[_ngcontent-%COMP%] {\r\n    font-family: 'PT Sans', sans-serif;\r\n    background-color: #DE3242;\r\n}\r\n\r\n.italic[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-family: 'Playfair Display';\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 12px 24px !important;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-radius: 10px;\r\n    font-size: 17px;\r\n    line-height: 2;\r\n    width: 140px;\r\n}\r\n\r\n.btn-custom[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    border: 1px solid #000 !important;\r\n    color: #000 !important;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc3Vic2NyaWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJob21lLXN1YnNjcmliZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnNjcmliZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFMzI0MjtcclxufVxyXG5cclxuLml0YWxpYyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbi5idG4tY3VzdG9tIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "6nr9":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class SettingsService {
    constructor(settingClient) {
        this.settingClient = settingClient;
        this.baseURL = 'http://localhost:3000/settings';
        this.accessToken = sessionStorage.getItem('accessToken');
    }
    getSettings() {
        return this.settingClient.get(this.baseURL, {
            observe: 'response',
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    storeSetting(setting) {
        return this.settingClient.post(this.baseURL, setting, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    deleteSetting(id) {
        return this.settingClient.delete(`${this.baseURL}/${id}`, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    getSettingId(id) {
        return this.settingClient.get(`${this.baseURL}/${id}`, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    updateSetting(id, setting) {
        return this.settingClient.patch(`${this.baseURL}/${id}`, setting, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7JOT":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin layout/author/update/update.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authors-service.service */ "IpQU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class UpdateComponent {
    //constructor
    constructor(myService, router) {
        this.myService = myService;
        this.router = router;
        //properties
        this.author = {
            id: '',
            firstName: '',
            lastName: '',
            name: '',
            birthDay: '',
            image: '',
            books: []
        };
        this.incorrectData = false;
        //get author data from user using form and make validation test with specific requirement
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z]*')]),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z]*')]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z0-9]*')])
        });
    }
    //start the component
    ngOnInit() {
    }
    //with every change of the component to update data of author
    ngOnChanges(changes) {
        this.myForm.controls.fName.setValue(this.author.firstName);
        this.myForm.controls.lName.setValue(this.author.lastName);
        this.myForm.controls.dob.setValue(this.author.birthDay);
        this.myForm.controls.image.setValue(this.author.image);
    }
    //get author's first name
    getFNameStatus() {
        return this.myForm.controls.fName.valid;
    }
    //get author's last name
    getLNameStatus() {
        return this.myForm.controls.lName.valid;
    }
    //get author's date of birth
    getDOBStatus() {
        return this.myForm.controls.dob.valid;
    }
    //get author's image
    getImageStatus() {
        return this.myForm.controls.image.valid;
    }
    //navigate to author page
    goToAuthorsList() {
        this.router.navigate(['/admin/author']);
    }
    //send author data to backend
    submitForm() {
        //get updated information about the author
        this.author.firstName = this.myForm.controls.fName.value;
        this.author.lastName = this.myForm.controls.lName.value;
        this.author.birthDay = this.myForm.controls.dob.value;
        this.author.image = this.myForm.controls.image.value;
        //check on the data is valid or invalid
        if (this.getDOBStatus() && this.getFNameStatus() && this.getLNameStatus() && this.getImageStatus()) {
            //send updated data to backend
            this.myService.updateAuthor(this.author.id, this.author)
                .subscribe((data) => {
                this.updated();
                this.goToAuthorsList();
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error, Author hasn\'t been updated !',
                    footer: ''
                });
            });
        }
        else {
            this.incorrectData = true;
            //invalidation data for the new book
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid data !',
                footer: ''
            });
        }
    }
    updated() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Good job!', 'Author updated Successfully!', 'success');
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthorsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-admin-update"]], inputs: { author: ["authorInfo", "author"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 4, consts: [["id", "updateModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", "w-100"], [1, "modal-dialog", "w-100"], [1, "modal-content", "w-100"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-3", "author-form"], ["id", "form", 1, "", 3, "formGroup"], [1, "fas", "fa-book-open", "fa-5x", "d-block"], [1, "mb-3", "field"], ["for", "first-name", 1, "form-label"], ["type", "text", "formControlName", "fName", "id", "first-name", 1, "form-control", 3, "value"], ["for", "last-name", 1, "form-label"], ["type", "text", "formControlName", "lName", "id", "last-name", 1, "form-control", 3, "value"], [1, "field"], ["for", "dob", 1, "form-label"], ["type", "date", "formControlName", "dob", "id", "dob", 1, "form-control", 3, "value"], ["for", "image", 1, "form-label"], ["type", "text", "id", "image", 1, "form-control"], [1, "actions", "text-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "w-25", "m-1"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "w-25", "m-1", 3, "click"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Update Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateComponent_Template_button_click_29_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Update Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.author.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.author.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.author.birthDay);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".author-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.author-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  float: right;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n  margin: 10px 0 20px 2%;\r\n  width: 48%;\r\n  display: inline-block;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  margin-top: 10%;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #de3242;\r\n  margin: 40px auto;\r\n}\r\n\r\n@media (min-width: 576px){\r\n  .modal-dialog[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 1.75rem auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoidXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yLWZvcm0gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uYXV0aG9yLWZvcm0gYnV0dG9uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBtYXJnaW46IDEwcHggMCAyMHB4IDIlO1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbmZvcm0gc3ZnIHtcclxuICBjb2xvcjogI2RlMzI0MjtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9fWq":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin layout/shared/sidebar/sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-admin-sidebar"]], decls: 36, vars: 0, consts: [[1, "col-md-2", "dashboard-sidebar"], [1, "sidebar-menu", "list-unstyled"], [1, "logo-icon", "pt-2"], [1, "fas", "fa-book-open", "fa-3x"], [1, "header"], [1, "header-char"], [1, "title"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "mange"], [1, "text-decoration-none"], [1, "fas", "fa-users", "sm-icon"], ["routerLinkActive", "active", "routerLink", "/admin/book", 1, "mange"], [1, "fas", "fa-book-open", "sm-icon"], ["routerLinkActive", "active", "routerLink", "/admin/author", 1, "mange"], [1, "far", "fa-address-book", "sm-icon"], ["routerLinkActive", "active", "routerLink", "/admin/category", 1, "mange"], [1, "fas", "fa-newspaper", "sm-icon"], ["routerLinkActive", "active", "routerLink", "/admin/setting", 1, "mange"], [1, "fas", "fa-cogs", "sm-icon"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mange Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "update content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".dashboard-sidebar[_ngcontent-%COMP%] {\r\n  background-color: #24324a;\r\n  height: 100vh;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  top: 0;\r\n}\r\n.dashboard-sidebar[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\r\n  margin: 5% 0;\r\n  text-align: center;\r\n  color: rgb(138, 153, 179);\r\n}\r\n.header-char[_ngcontent-%COMP%] {\r\n  color: #de3242;\r\n}\r\n.dashboard-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  line-height: 1.2;\r\n  padding: 10% 0 10% 25%;\r\n  text-align: left;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  font-style: italic;\r\n}\r\n.dashboard-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n.dashboard-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dashboard-sidebar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  color: rgb(138, 153, 179);\r\n}\r\n.dashboard-sidebar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  line-height: 1.5;\r\n}\r\n.mange[_ngcontent-%COMP%] {\r\n  padding: 2% 10% 1%;\r\n  line-height: 3;\r\n}\r\n.mange[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n  font-weight: 800;\r\n}\r\n.mange[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n  font-weight: 800;\r\n}\r\n.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #fff !important;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  margin: 7% 5%;\r\n  font-size: 20px;\r\n}\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixNQUFNO0FBQ1I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtc2lkZWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzI0YTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxufVxyXG4uZGFzaGJvYXJkLXNpZGViYXIgLmxvZ28taWNvbiB7XHJcbiAgbWFyZ2luOiA1JSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDEzOCwgMTUzLCAxNzkpO1xyXG59XHJcbi5oZWFkZXItY2hhciB7XHJcbiAgY29sb3I6ICNkZTMyNDI7XHJcbn1cclxuLmRhc2hib2FyZC1zaWRlYmFyIC5oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIHBhZGRpbmc6IDEwJSAwIDEwJSAyNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5kYXNoYm9hcmQtc2lkZWJhciAuaGVhZGVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZGFzaGJvYXJkLXNpZGViYXIgYSxcclxuLmRhc2hib2FyZC1zaWRlYmFyIC50aXRsZSB7XHJcbiAgY29sb3I6IHJnYigxMzgsIDE1MywgMTc5KTtcclxufVxyXG4uZGFzaGJvYXJkLXNpZGViYXIgLnRpdGxlIHtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5tYW5nZSB7XHJcbiAgcGFkZGluZzogMiUgMTAlIDElO1xyXG4gIGxpbmUtaGVpZ2h0OiAzO1xyXG59XHJcbi5tYW5nZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5tYW5nZTpob3ZlciBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYWN0aXZlIGF7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW46IDclIDUlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5saSBhIHN2ZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 700px) {\r\n  .dashboard-sidebar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n  }\r\n  .dashboard-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n  div.content[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .dashboard-sidebar[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .dashboard-sidebar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .dashboard-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .dashboard-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .dashboard-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 2%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 589px) {\r\n  .dashboard-sidebar[_ngcontent-%COMP%]   .sm-icon[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LXJlc3BvbnNpdmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQtcmVzcG9uc2l2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5kYXNoYm9hcmQtc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmRhc2hib2FyZC1zaWRlYmFyIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIGRpdi5jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuZGFzaGJvYXJkLXNpZGViYXIgLmxvZ28taWNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kYXNoYm9hcmQtc2lkZWJhciAudGl0bGUsXHJcbiAgLmRhc2hib2FyZC1zaWRlYmFyIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmRhc2hib2FyZC1zaWRlYmFyIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuZGFzaGJvYXJkLXNpZGViYXIgbGkge1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODlweCkge1xyXG4gIC5kYXNoYm9hcmQtc2lkZWJhciAuc20taWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AmwC":
/*!***********************************!*\
  !*** ./src/app/pipes/sum.pipe.ts ***!
  \***********************************/
/*! exports provided: SumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SumPipe {
    transform(items) {
        let total = 0;
        items.forEach(function (item, index) {
            total += item;
        });
        return total;
    }
}
SumPipe.ɵfac = function SumPipe_Factory(t) { return new (t || SumPipe)(); };
SumPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sum", type: SumPipe, pure: true });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BXn/":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin layout/shared/navbar-admin/navbar-admin.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavbarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarAdminComponent", function() { return NavbarAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin-login.service */ "Qhb7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class NavbarAdminComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.refreashToken = "";
    }
    ngOnInit() {
    }
    logout() {
        this.refreashToken = "sasasasasdklfl";
        // this.refreashToken = sessionStorage.getItem("refreshToken")
        this.service.logoutAdmin({ refreshToken: this.refreashToken })
            .subscribe((data) => {
            console.log(data);
            this.router.navigate(['/admin/login']);
        }, (err) => {
            console.log(err);
        });
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");
    }
}
NavbarAdminComponent.ɵfac = function NavbarAdminComponent_Factory(t) { return new (t || NavbarAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_login_service__WEBPACK_IMPORTED_MODULE_1__["AdminLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarAdminComponent, selectors: [["app-navbar-admin"]], decls: 12, vars: 0, consts: [[1, "navbar", "navbar-expand-lg"], [1, "container-fluid"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "mb-2", "mb-lg-0", "col-10"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], [1, "d-inline-block", "ml-5"], [1, "navbar-text"], [2, "border", "none", "background-color", "#de3242", "color", "white", 3, "click"], [1, "fas", "fa-sign-out-alt", "fa-1x", "text-white"]], template: function NavbarAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Admin |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarAdminComponent_Template_button_click_10_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]], styles: ["nav[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  top: 0px;\r\n  color: white;\r\n  padding: 0;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 10px 20px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding-left: 18%;\r\n  color: white;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJuYXZiYXItYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcclxuICB0b3A6IDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubmF2IHAge1xyXG4gIG1hcmdpbjogMTBweCAyMHB4O1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gIHBhZGRpbmctbGVmdDogMTglO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubmF2IHVsIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "CH8H":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/empty/empty.component.ts ***!
  \*********************************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EmptyComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmptyComponent.ɵfac = function EmptyComponent_Factory(t) { return new (t || EmptyComponent)(); };
EmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyComponent, selectors: [["app-empty"]], decls: 2, vars: 0, consts: [[1, "content-page"], [1, "img-empty", "mt-4"]], template: function EmptyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-empty[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    background-image: url('/assets/empty-comp.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osK0NBQStDO0lBQy9DLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImVtcHR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWVtcHR5IHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9lbXB0eS1jb21wLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "CY+G":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user layout/user-profile/cards/user-profile-cards.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserProfileCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileCardsComponent", function() { return UserProfileCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-profile.service */ "mnJU");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");








function UserProfileCardsComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-loading");
} }
function UserProfileCardsComponent_div_4_span_16_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
} }
function UserProfileCardsComponent_div_4_span_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
} }
function UserProfileCardsComponent_div_4_span_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileCardsComponent_div_4_span_16_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const j_r6 = ctx.index; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.submitRate($event, j_r6 + 1, ctx_r10.myRatingIds[i_r3], ctx_r10.bookIds[i_r3]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileCardsComponent_div_4_span_16_i_1_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfileCardsComponent_div_4_span_16_ng_template_2_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r6 = ctx.index;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r6 + 1 < ctx_r4.bookRate[i_r3] || j_r6 + 1 == ctx_r4.bookRate[i_r3])("ngIfElse", _r8);
} }
const _c0 = function () { return [1, 2, 3, 4, 5]; };
function UserProfileCardsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserProfileCardsComponent_div_4_span_16_Template, 4, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileCardsComponent_div_4_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changeBookStatus("1", ctx_r14.bookIds[i_r3], i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Want to read");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileCardsComponent_div_4_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeBookStatus("2", ctx_r16.bookIds[i_r3], i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Is currant read");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileCardsComponent_div_4_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.changeBookStatus("3", ctx_r17.bookIds[i_r3], i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Finished reading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.bookImages[i_r3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.bookOverallRate[i_r3], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bookIAuthor[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.bookUserType[i_r3], " ");
} }
class UserProfileCardsComponent {
    constructor(userProfileService, userService) {
        this.userProfileService = userProfileService;
        this.userService = userService;
        this.loading = false;
        this.toggleFlag = false;
        this.userId = sessionStorage.getItem('userId') || "";
        this.currentBooksType = 'All';
        this.currentPage = 1;
        this.maxPages = 1;
        this.paginationPages = { paginationPages: [], currentPage: 1 };
        this.bookImages = [];
        this.bookNames = [];
        this.bookIAuthor = [];
        this.bookRate = [];
        this.bookOverallRate = [];
        this.bookUserType = [];
        this.bookIds = [];
        this.myRatingIds = [];
        this.starsHover = 0;
        this.cardHover = 0;
        this.setPaginationEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.getPage(this.currentBooksType, this.currentPage);
    }
    showDropList(event) {
        this.toggleFlag = !this.toggleFlag;
    }
    selectBooksType(booksType) {
        this.currentBooksType = booksType;
        this.currentPage = 1;
        this.loading = false;
        this.getPage(this.currentBooksType, this.currentPage);
    }
    searchBook(book) {
        this.currentPage = 1;
        this.loading = false;
        this.getPage(this.currentBooksType, this.currentPage, book);
    }
    submitRate(event, index, ratingId, bookId) {
        this.loading = false;
        if (ratingId) {
            this.subscriber = this.userProfileService.updateRate(ratingId, index)
                .subscribe((response) => {
                this.getPage(this.currentBooksType, this.currentPage);
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error updating rate!',
                    footer: ''
                });
            });
        }
        else {
            this.subscriber = this.userProfileService.postRate(this.userId, bookId, index)
                .subscribe((response) => {
                this.getPage(this.currentBooksType, this.currentPage);
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your rate hasn\'t been saved!',
                    footer: ''
                });
            });
        }
    }
    changePagination(type) {
        this.loading = false;
        if (type == 'back' && this.currentPage > 1) {
            this.currentPage--;
            this.getPage(this.currentBooksType, this.currentPage);
        }
        else if (type == 'next' && this.currentPage < this.maxPages) {
            this.currentPage++;
            this.getPage(this.currentBooksType, this.currentPage);
        }
        else if (type != 'back' && type != 'next') {
            this.currentPage = type;
            this.getPage(this.currentBooksType, this.currentPage);
        }
    }
    getPage(booktype, page, book = '') {
        this.bookImages = [];
        this.bookNames = [];
        this.bookIAuthor = [];
        this.bookRate = [];
        this.bookOverallRate = [];
        this.bookUserType = [];
        this.bookIds = [];
        this.myRatingIds = [];
        this.subscriber = this.userProfileService.getUserProfilePage(this.userId, booktype, page, book)
            .subscribe((response) => {
            this.maxPages = Math.ceil(response.body.bookNumbers / 4);
            let books = response.body.pagebooks;
            this.loading = true;
            books.find((book, index) => {
                if (index < 4 && index < books.length) {
                    this.bookNames.push(book.name);
                    this.bookImages.push(book.image);
                    this.bookIAuthor.push(book.author);
                    this.bookRate.push(book.myRating);
                    this.bookOverallRate.push(book.bookRating);
                    this.bookUserType.push(book.state);
                    this.bookIds.push(book.bookId);
                    this.myRatingIds.push(book.myRatingId);
                }
            });
            this.calculatePagination();
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error getting categories information !',
                footer: ''
            });
        });
    }
    calculatePagination() {
        switch (this.maxPages) {
            case 0:
                this.paginationPages.paginationPages = [0];
                break;
            case 1:
                this.paginationPages.paginationPages = [1];
                break;
            case 2:
                this.paginationPages.paginationPages = [1, 2];
                break;
            default:
                if (this.currentPage == 1 || this.currentPage == 2) {
                    this.paginationPages.paginationPages = [1, 2, 3];
                }
                else if (this.currentPage == this.maxPages) {
                    this.paginationPages.paginationPages = [this.maxPages - 2, this.maxPages - 1, this.maxPages];
                }
                else {
                    this.paginationPages.paginationPages = [this.maxPages - 1, this.maxPages, this.maxPages + 1];
                }
                break;
        }
        this.paginationPages.currentPage = this.currentPage;
        this.setPaginationEmitter.emit(this.paginationPages);
    }
    changeBookStatus(type, bookId, index) {
        this.loading = false;
        this.userSubscriber = this.userService.updateUserBookList({ userId: this.userId, bookId: bookId, type: type })
            .subscribe((response) => {
            if (type == '1') {
                this.bookUserType[index] = 'Want to read';
            }
            else if (type == '2') {
                this.bookUserType[index] = 'Is currant read';
            }
            else if (type == '3') {
                this.bookUserType[index] = 'Finished reading';
            }
            this.getPage(this.currentBooksType, this.currentPage);
        }, (err) => {
            console.log(err);
        });
    }
}
UserProfileCardsComponent.ɵfac = function UserProfileCardsComponent_Factory(t) { return new (t || UserProfileCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
UserProfileCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileCardsComponent, selectors: [["app-user-profile-cards"]], outputs: { paginationPages: "paginationPages", setPaginationEmitter: "setPaginationEmitter" }, decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "parentContainer", "justify-content-center"], [1, "row"], ["class", " card-container col-lg-4 col-md-5 col-sm-10 col-xxs-12 ", 4, "ngFor", "ngForOf"], [1, "card-container", "col-lg-4", "col-md-5", "col-sm-10", "col-xxs-12"], [1, "book-img", "col-3"], ["alt", "", 1, "w-100", 3, "src"], [1, "col-9"], [1, "col-8"], [1, "col-4"], [1, "fas", "fa-star", "first-star"], [1, "row", "author"], [1, "col-12"], [1, "row", "ratingStars"], [3, "click", 4, "ngFor", "ngForOf"], [1, "dropdown", 2, "margin-top", "50px", "margin-left", "5px"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [3, "click"], ["class", "fas fa-star ratingstar1", "style", "color:  #de3242", 4, "ngIf", "ngIfElse"], ["noStar", ""], [1, "fas", "fa-star", "ratingstar1", 2, "color", "#de3242"], [1, "fas", "fa-star", "ratingstar1"]], template: function UserProfileCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileCardsComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserProfileCardsComponent_div_4_Template, 28, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookNames);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__["NavUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_6__["UserLoadingComponent"]], styles: [".parentContainer[_ngcontent-%COMP%]{\r\n    margin-top: 1%;\r\n    margin-left: 10%;\r\n}\r\n.card-container[_ngcontent-%COMP%]{\r\n    margin-left: 15%;\r\n    margin-bottom: 3%;\r\n    background-color: #f5f5f5;\r\n    font-size: 20px;\r\n    padding-bottom: 1%;\r\n    padding-top: 1%;\r\n    border-radius: 25px;\r\n    display: inline-block;\r\n}\r\n.first-star[_ngcontent-%COMP%]{\r\n    margin-left: 20%;\r\n    color:  #de3242;\r\n}\r\nselect[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: 45%;\r\n    margin-top: 2%;\r\n    border-radius: 25px;\r\n}\r\n.selectHeader[_ngcontent-%COMP%]{\r\n    background-color: #de3242;\r\n\r\n}\r\n.ratingstar1[_ngcontent-%COMP%]:hover, .ratingstar2[_ngcontent-%COMP%]:hover, .ratingstar3[_ngcontent-%COMP%]:hover, .ratingstar4[_ngcontent-%COMP%]:hover, .ratingstar5[_ngcontent-%COMP%]:hover{\r\n    color:  #de3242;\r\n}\r\n.author[_ngcontent-%COMP%]{\r\n    color: #de3242;\r\n    margin-top: 2%;\r\n}\r\n.ratingStars[_ngcontent-%COMP%]{\r\n    margin-top: 2%;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n@media only screen and (max-width: 1000px) {\r\n    .card-container[_ngcontent-%COMP%]{\r\n        margin-left: 40%;\r\n        width: 50%\r\n    }\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .card-container[_ngcontent-%COMP%]{\r\n        margin-left: 2%;\r\n        width: 90%\r\n    }\r\n    .parentContainer[_ngcontent-%COMP%]{\r\n        margin-top: 5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLEdBQUc7QUFDSDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHlCQUF5Qjs7QUFFN0I7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQjtJQUNKO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmO0lBQ0o7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUtY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi8qKi9cclxuLnBhcmVudENvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZpcnN0LXN0YXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgY29sb3I6ICAjZGUzMjQyO1xyXG59XHJcblxyXG5zZWxlY3R7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLnNlbGVjdEhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XHJcblxyXG59XHJcblxyXG4ucmF0aW5nc3RhcjE6aG92ZXIsLnJhdGluZ3N0YXIyOmhvdmVyLC5yYXRpbmdzdGFyMzpob3ZlciwucmF0aW5nc3RhcjQ6aG92ZXIsLnJhdGluZ3N0YXI1OmhvdmVye1xyXG4gICAgY29sb3I6ICAjZGUzMjQyO1xyXG59XHJcbi5hdXRob3J7XHJcbiAgICBjb2xvcjogI2RlMzI0MjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4ucmF0aW5nU3RhcnN7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5jYXJkLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgICAgIHdpZHRoOiA1MCVcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNhcmQtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICB3aWR0aDogOTAlXHJcbiAgICB9XHJcbiAgICAucGFyZW50Q29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Cg11":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user layout/user-routing/user-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _author_show_show_author_show_author_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../author/show/show-author/show-author.component */ "ao5n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-us/about-us.component */ "h/UE");
/* harmony import */ var _author_user_author_index_user_author_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../author/user-author-index/user-author-index.component */ "XyzB");
/* harmony import */ var _book_user_book_index_user_book_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../book/user-book-index/user-book-index.component */ "hLC1");
/* harmony import */ var _book_book_det_book_det_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../book/book-det/book-det.component */ "rUEV");
/* harmony import */ var _category_user_category_index_user_category_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../category/user-category-index/user-category-index.component */ "ImBr");
/* harmony import */ var _home_home_all_home_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/home-all/home-all.component */ "+fJ/");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../terms/terms.component */ "khJe");
/* harmony import */ var _user_profile_index_user_profile_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user-profile/index/user-profile-index.component */ "fO1k");
/* harmony import */ var _access_login_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../access/login-register.component */ "omQl");
/* harmony import */ var _Guards_user_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Guards/user-auth-gaurd.guard */ "fSjY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: 'aboutUs', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'authors', component: _author_user_author_index_user_author_index_component__WEBPACK_IMPORTED_MODULE_4__["UserAuthorIndexComponent"] },
    { path: 'authors/:id', component: _author_show_show_author_show_author_component__WEBPACK_IMPORTED_MODULE_0__["ShowAuthorComponent"] },
    { path: 'books', component: _book_user_book_index_user_book_index_component__WEBPACK_IMPORTED_MODULE_5__["UserBookIndexComponent"] },
    { path: 'books/:id', component: _book_book_det_book_det_component__WEBPACK_IMPORTED_MODULE_6__["BookDetComponent"] },
    { path: 'categories', component: _category_user_category_index_user_category_index_component__WEBPACK_IMPORTED_MODULE_7__["UserCategoryIndexComponent"] },
    { path: 'home', component: _home_home_all_home_all_component__WEBPACK_IMPORTED_MODULE_8__["HomeAllComponent"] },
    { path: 'terms', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"] },
    { path: 'profile', canActivate: [_Guards_user_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_12__["UserAuthGaurdGuard"]], component: _user_profile_index_user_profile_index_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileIndexComponent"] },
    { path: 'login', component: _access_login_register_component__WEBPACK_IMPORTED_MODULE_11__["LoginRegisterComponent"] },
    { path: 'users', canActivate: [_Guards_user_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_12__["UserAuthGaurdGuard"]], component: _user_profile_index_user_profile_index_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileIndexComponent"] }
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "DxB8":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/user layout/author/show/author-bookslist/author-bookslist.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AuthorBookslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorBookslistComponent", function() { return AuthorBookslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthorBookslistComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorBookslistComponent.ɵfac = function AuthorBookslistComponent_Factory(t) { return new (t || AuthorBookslistComponent)(); };
AuthorBookslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorBookslistComponent, selectors: [["app-author-bookslist"]], decls: 17, vars: 0, consts: [["aria-label", "Page navigation example", 2, "padding-left", "300px", "padding-top", "50px"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link", 2, "color", "red"]], template: function AuthorBookslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItYm9va3NsaXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ETsY":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin layout/book/store/book-store.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreComponent", function() { return BookStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_book_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/book-service.service */ "+TRR");





function BookStoreComponent_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The name is invalid must be at least 2 character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookStoreComponent_div_1_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The description is invalid must be at least 10 character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookStoreComponent_div_1_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", author_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r10.name);
} }
function BookStoreComponent_div_1_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The author is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookStoreComponent_div_1_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r11.name);
} }
function BookStoreComponent_div_1_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The category is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookStoreComponent_div_1_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Image is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookStoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BookStoreComponent_div_1_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.submitAddForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookStoreComponent_div_1_p_9_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookStoreComponent_div_1_p_14_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select the author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BookStoreComponent_div_1_option_21_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BookStoreComponent_div_1_p_22_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select the category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BookStoreComponent_div_1_option_29_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BookStoreComponent_div_1_p_30_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BookStoreComponent_div_1_p_35_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_div_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.backToIndex(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.bookForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.getNameStatus() && ctx_r0.incorrectData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.getDescriptionStatus() && ctx_r0.incorrectData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.authors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.getAuthorStatus() && ctx_r0.incorrectData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.getAuthorStatus() && ctx_r0.incorrectData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.getImageStatus() && ctx_r0.incorrectData);
} }
function BookStoreComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-book-index");
} }
class BookStoreComponent {
    //costructor
    constructor(bookService) {
        this.bookService = bookService;
        //properties
        this.incorrectData = false;
        this.indexFlag = false;
        this.addedBook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.book = {
            id: "",
            name: "",
            description: "",
            image: "",
            category: "",
            author: "",
            categoryName: "",
            authorName: "",
            bookReviews: [],
            bookRatings: [],
            currantReader: [],
            finishReadUsers: [],
            wantToReadeUsers: [],
        };
        //get book data with validation tests
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9 ]*')]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(250), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z,-_. ]*')]),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]*')])
        });
    }
    //start the component
    ngOnInit() { }
    //get the name of the book from the form
    getNameStatus() {
        return this.bookForm.controls.name.valid;
    }
    //get the discribtion of the book from the form
    getDescriptionStatus() {
        return this.bookForm.controls.description.valid;
    }
    //get the author of the book from the form
    getAuthorStatus() {
        return this.bookForm.controls.author.valid;
    }
    //get the category of the book from the form
    getCategoryStatus() {
        return this.bookForm.controls.category.valid;
    }
    //get book's image
    getImageStatus() {
        return this.bookForm.controls.image.valid;
    }
    //add new book to the database
    submitAddForm() {
        //check if the all data are valid
        if (this.getNameStatus() && this.getDescriptionStatus() && this.getAuthorStatus() && this.getCategoryStatus() && this.getImageStatus()) {
            this.book.name = this.bookForm.controls.name.value;
            this.book.description = this.bookForm.controls.description.value;
            this.book.author = this.bookForm.controls.author.value;
            this.book.category = this.bookForm.controls.category.value;
            this.book.image = "https://i.morio421hjkeewh.com/21056da3fv32436456787812/4b482f8e.webp";
            this.bookService.store(this.book).subscribe((response) => {
                console.log(response.body);
                this.indexFlag = true;
                this.added();
                this.bookForm.reset();
                this.addedBook.emit(this.book);
            }, error => {
                //error to add new book to database
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Error saving book, Try again !",
                    footer: ''
                });
            });
        }
        else {
            //invalidation data for the new book
            this.incorrectData = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Invalid data !",
                footer: ''
            });
        }
    }
    //to return to index component
    backToIndex() {
        this.indexFlag = true;
    }
    added() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Good job!', 'Author Added Successfully!', 'success');
    }
}
BookStoreComponent.ɵfac = function BookStoreComponent_Factory(t) { return new (t || BookStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service_service__WEBPACK_IMPORTED_MODULE_3__["BookServiceService"])); };
BookStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookStoreComponent, selectors: [["app-book-store"]], inputs: { authors: ["authorsInfo", "authors"], categories: ["categoriesInfo", "categories"] }, outputs: { addedBook: "addedBook" }, decls: 4, vars: 2, consts: [[1, "content-page"], ["class", "container", 4, "ngIf", "ngIfElse"], ["navigateToIndexLayout", ""], [1, "container"], [1, "row", "p-5"], [1, "update-form", "p-3"], ["id", "form", 1, "", 3, "formGroup", "ngSubmit"], [1, "fas", "fa-book-open", "fa-5x", "d-block", "m-auto"], [1, "mb-3", "field", "w-75"], ["for", "title", 1, "form-label"], ["id", "title", "placeholder", "book title", "type", "text", "formControlName", "name", 1, "form-control", "input-field"], ["class", "alert-danger p-1 mt-2", 4, "ngIf"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", 1, "form-control", "input-field"], ["for", "author", 1, "form-label"], ["aria-label", "Default select example", "id", "author", "formControlName", "author", 1, "form-select", "input-field"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "category", 1, "form-label"], ["aria-label", "Default select example", "id", "category", "formControlName", "category", 1, "form-select", "input-field"], ["class", "alert-danger p-1 mt-2 w-100", 4, "ngIf"], ["for", "image", 1, "form-label"], ["id", "image", "type", "text", "formControlName", "image", 1, "form-control", "input-field"], [1, "actions", "text-center", "mt-3"], ["type", "button", 1, "btn", "btn-secondary", "w-25", "m-1", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", "w-25", "m-1"], [1, "alert-danger", "p-1", "mt-2"], [3, "value"], [1, "alert-danger", "p-1", "mt-2", "w-100"]], template: function BookStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookStoreComponent_div_1_Template, 41, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookStoreComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.indexFlag == false)("ngIfElse", _r1);
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  padding-left: 18%;\r\n}\r\n\r\n.update-form[_ngcontent-%COMP%] {\r\n  margin-top: 10%;\r\n  box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 10px;\r\n}\r\n\r\n.book-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  float: center;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n  margin: 10px 0 20px 2%;\r\n  width: 48%;\r\n  display: inline-block;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-left: 13%;\r\n  width: 100%;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\n\r\nform[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #de3242;\r\n  margin: 40px auto;\r\n}\r\n\r\n@media (min-width: 576px){\r\n  .modal-dialog[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 1.75rem auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stc3RvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4RUFBOEU7RUFDOUUsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoiYm9vay1zdG9yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOCU7XHJcbn1cclxuXHJcbi51cGRhdGUtZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmJvb2stZm9ybSBidXR0b24ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBtYXJnaW46IDEwcHggMCAyMHB4IDIlO1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQsLmZpZWxkIHB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpZWxkIHAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLypcclxuLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59ICovXHJcblxyXG5mb3JtIHN2ZyB7XHJcbiAgY29sb3I6ICNkZTMyNDI7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "F3ho":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin layout/book/index/book-index.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookIndexComponent", function() { return BookIndexComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_book_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/book-service.service */ "+TRR");
/* harmony import */ var _services_authors_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authors-service.service */ "IpQU");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/category.service */ "cPV5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _delete_book_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../delete/book-delete.component */ "mUvC");
/* harmony import */ var _update_book_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../update/book-update.component */ "tU9N");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/empty/empty.component */ "CH8H");
/* harmony import */ var _store_book_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/book-store.component */ "ETsY");











const _c0 = ["search_box"];
function BookIndexComponent_section_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookIndexComponent_section_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookIndexComponent_section_1_ng_template_22_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookIndexComponent_section_1_ng_template_22_tr_18_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const book_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.getBook(book_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookIndexComponent_section_1_ng_template_22_tr_18_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const book_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.getBook(book_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r9.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r9.authorName);
} }
function BookIndexComponent_section_1_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "thead", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BookIndexComponent_section_1_ng_template_22_tr_18_Template, 16, 4, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.books);
} }
function BookIndexComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Books");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "We are glad to see you again!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookIndexComponent_section_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.navigateToAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookIndexComponent_section_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.keywords = $event; })("keyup", function BookIndexComponent_section_1_Template_input_keyup_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.filterList(ctx_r17.keywords); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookIndexComponent_section_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.captureSearchContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BookIndexComponent_section_1_div_20_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, BookIndexComponent_section_1_div_21_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, BookIndexComponent_section_1_ng_template_22_Template, 19, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.keywords);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoad)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.books.length);
} }
function BookIndexComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-book-store", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("addedBook", function BookIndexComponent_ng_template_2_Template_app_book_store_addedBook_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.addBook($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("authorsInfo", ctx_r2.authors)("categoriesInfo", ctx_r2.categories);
} }
class BookIndexComponent {
    //constructor
    constructor(bookService, authorService, categoryService) {
        this.bookService = bookService;
        this.authorService = authorService;
        this.categoryService = categoryService;
        //properties
        this.isLoad = false;
        this.authors = [];
        this.categories = [];
        this.keywords = "";
        this.allBooks = [];
        this.bookID = "";
        this.books = this.allBooks;
        this.clickedBook = {
            id: "",
            name: "",
            description: "",
            image: "",
            category: "",
            author: "",
            categoryName: "",
            authorName: "",
            bookReviews: [],
            bookRatings: [],
            currantReader: [],
            finishReadUsers: [],
            wantToReadeUsers: [],
        };
        this.addFlag = false;
    }
    //start the component
    ngOnInit() {
        this.getBooks();
        this.getAuthors();
        this.getCategories();
    }
    //get authors data from backend
    getAuthors() {
        //ask backend for data
        this.subscriber = this.authorService.getAuthors()
            .subscribe((response) => {
            this.authors = response.body;
        }, (err) => {
            //error from asking data from database
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Loading authors failed !",
                footer: ''
            });
        });
    }
    //get books data from backend
    getBooks() {
        //ask backend for data
        this.subscriber = this.bookService.index()
            .subscribe((response) => {
            this.books = response.body;
            this.isLoad = true;
            this.books = this.allBooks = response.body;
        }, (err) => {
            //error from asking data from database
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Loading Books failed !",
                footer: ''
            });
        });
    }
    //get categories data from backend
    getCategories() {
        this.subscriber = this.categoryService.categoryIndex()
            .subscribe((response) => {
            this.categories = response;
        }, (err) => {
            //error from asking data from database
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Loading categories failed !",
                footer: ''
            });
        });
    }
    //get search words 
    captureSearchContent() {
        this.keywords = this.search_box.nativeElement.value;
        this.filterList(this.keywords);
    }
    //return the books that matched the search words
    filterList(keywords) {
        this.books = this.allBooks.filter((item) => {
            return item.name.toLocaleLowerCase().includes(keywords.toLocaleLowerCase());
        });
    }
    //navigate to add page for new book
    navigateToAdd() {
        this.addFlag = true;
    }
    //get book data
    getBook(book) {
        this.clickedBook = book;
    }
    //rerender the list after delete a book
    deleteBook(book) {
        this.ngOnInit();
    }
    //rerender the list after add a book
    addBook(book) {
        this.ngOnInit();
    }
    //rerender the list after update a book
    updateBook(book) {
        this.ngOnInit();
    }
    //at the end of component
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
}
BookIndexComponent.ɵfac = function BookIndexComponent_Factory(t) { return new (t || BookIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authors_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthorsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"])); };
BookIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookIndexComponent, selectors: [["app-book-index"]], viewQuery: function BookIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.search_box = _t.first);
    } }, decls: 6, vars: 6, consts: [[1, "content-page"], ["class", "book", 4, "ngIf", "ngIfElse"], ["navigateToAddLayout", ""], [3, "bookInfo", "deletedBook"], [3, "bookInfo", "authorsInfo", "categoriesInfo", "updatedBook"], [1, "book"], [1, "container"], [1, "top-part"], [1, "row"], [1, "col-6"], [1, "content"], ["type", "button", 1, "add-book", 3, "click"], [1, "fas", "fa-plus"], [1, "book-search"], [1, "input-group", "w-100", "m-auto"], [1, "form-outline", "w-85"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["search_box", ""], ["id", "search-button", "type", "button", 1, "btn", "search-btn", 3, "click"], [1, "fas", "fa-search"], ["class", "row w-100", 4, "ngIf", "ngIfElse"], [4, "ngIf"], ["displayContent", ""], [1, "row", "w-100"], [1, "col-md-12", "text-center", "loader"], [1, "fas", "fa-spinner", "fa-spin", "fa-5x", "text-info"], [1, "col-2"], [1, "table", "col-8"], [1, "table-active"], [1, "col", "text-center"], [1, "col-2", "text-center"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "text-center", "pt-3"], [1, "text-center", "pt-3"], ["src", "assets/admin/book/open-book.svg", 1, "book-imag"], [1, "text-center"], ["data-bs-toggle", "modal", "data-bs-target", "#updateModal", 1, "btn", "text-dark", 3, "click"], [1, "fas", "fa-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteModal", 1, "btn", "text-danger", 3, "click"], [1, "fas", "fa-trash"], [3, "authorsInfo", "categoriesInfo", "addedBook"]], template: function BookIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BookIndexComponent_section_1_Template, 24, 4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BookIndexComponent_ng_template_2_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-book-delete", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deletedBook", function BookIndexComponent_Template_app_book_delete_deletedBook_4_listener($event) { return ctx.deleteBook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-book-update", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updatedBook", function BookIndexComponent_Template_app_book_update_updatedBook_5_listener($event) { return ctx.updateBook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addFlag == false)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bookInfo", ctx.clickedBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bookInfo", ctx.clickedBook)("authorsInfo", ctx.authors)("categoriesInfo", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _delete_book_delete_component__WEBPACK_IMPORTED_MODULE_6__["BookDeleteComponent"], _update_book_update_component__WEBPACK_IMPORTED_MODULE_7__["BookUpdateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_9__["EmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _store_book_store_component__WEBPACK_IMPORTED_MODULE_10__["BookStoreComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding-left: 15%;\r\n  min-height: 94vh;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  border: none !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.top-part[_ngcontent-%COMP%] {\r\n  padding-top: 10%;\r\n}\r\n\r\n\r\n\r\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%] {\r\n  padding-bottom: 4%;\r\n  margin-top: 0;\r\n  margin-left: 35%;\r\n  display: inline-block;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\r\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  color: white;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .add-book[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 20px;\r\n  float: right;\r\n  border-radius: 50%;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 4px 5px 0 rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.2);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.book-imag[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 35px;\r\n  border-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .book[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    padding-left: 2%;\r\n  }\r\n\r\n  .book-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .orm-outline[_ngcontent-%COMP%] {\r\n    width: 90% !important;\r\n  }\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.5);\r\n  transition: all 0.5s ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2staW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUEsY0FBYzs7QUFDZDs7OztFQUlFOztBQUNGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztLQUVLOztBQUVMO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFO3FDQUNtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6ImJvb2staW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gIG1pbi1oZWlnaHQ6IDk0dmg7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyxcclxuaW5wdXQ6Zm9jdXMsXHJcbnN2Zzpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKlRvcCBTZWN0aW9uKi9cclxuLypcclxuLnRvcC1wYXJ0IHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufSovXHJcbi50b3AtcGFydCB7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLyogLnRvcC1wYXJ0IGgyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH0gKi9cclxuXHJcbi50b3AtcGFydCAuYm9vay1zZWFyY2gge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9wLXBhcnQgLmJvb2stc2VhcmNoIC5pbnB1dC1ncm91cCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udG9wLXBhcnQgLmJvb2stc2VhcmNoIGlucHV0LFxyXG4udG9wLXBhcnQgLmJvb2stc2VhcmNoIGJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpLFxyXG4gICAgMCA0cHggNXB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xyXG59XHJcblxyXG4udG9wLXBhcnQgLmJvb2stc2VhcmNoIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b3AtcGFydCAuYWRkLWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qVGFibGUgU2VjdGlvbiovXHJcblxyXG4uYm9vay1pbWFnIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmJvb2sgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIH1cclxuXHJcbiAgLmJvb2stc2VhcmNoIC5pbnB1dC1ncm91cCxcclxuICAub3JtLW91dGxpbmUge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxudGFibGUgdGQgYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuIl19 */", ".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "FgoS":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin layout/book/main/admin-main-book.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminMainBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainBookComponent", function() { return AdminMainBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _index_book_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index/book-index.component */ "F3ho");




class AdminMainBookComponent {
    //costructor
    constructor() { }
    //start the component
    ngOnInit() { }
}
AdminMainBookComponent.ɵfac = function AdminMainBookComponent_Factory(t) { return new (t || AdminMainBookComponent)(); };
AdminMainBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMainBookComponent, selectors: [["app-admin-main-book"]], decls: 3, vars: 0, template: function AdminMainBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-book-index");
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_1__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _index_book_index_component__WEBPACK_IMPORTED_MODULE_3__["BookIndexComponent"]], encapsulation: 2 });


/***/ }),

/***/ "G09a":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin layout/author/store/store.component.ts ***!
  \**********************************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authors-service.service */ "IpQU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function StoreComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "The first name is invalid must be at least 2 character");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StoreComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "The last name is invalid must be at least 2 character");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StoreComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "The date is invalid must be in this format mm/dd/yyyy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class StoreComponent {
    //constructor
    constructor(myService, router) {
        this.myService = myService;
        this.router = router;
        //properties
        this.incorrectData = false;
        this.newAuth = {
            id: "",
            firstName: "",
            lastName: "",
            name: "",
            birthDay: "",
            image: "",
            books: []
        };
        //get author data from user using form and make validation test with specific requirement
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z]*')]),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z]*')]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z0-9]*'))])
        });
    }
    //start the component
    ngOnInit() { }
    //get author's first name
    getFNameStatus() {
        return this.myForm.controls.fName.valid;
    }
    //get author's last name
    getLNameStatus() {
        return this.myForm.controls.lName.valid;
    }
    //get author's date of birth 
    getDOBStatus() {
        return this.myForm.controls.dob.valid;
    }
    //get author's image
    getImageStatus() {
        return this.myForm.controls.image.valid;
    }
    //navigate to author page
    goToAuthorsList() {
        this.router.navigate(['/admin/author']);
    }
    //send author data to backend
    submitForm(e) {
        //get values from form
        this.newAuth.firstName = this.myForm.controls.fName.value;
        this.newAuth.lastName = this.myForm.controls.lName.value;
        this.newAuth.birthDay = this.myForm.controls.dob.value;
        this.newAuth.image = this.myForm.controls.image.value;
        //check on the data is valid or invalid
        if (this.getDOBStatus() && this.getFNameStatus(), this.getLNameStatus()) {
            //send the data to backen
            this.myService.postAuthor(this.newAuth)
                .subscribe((data) => {
                this.added();
                this.goToAuthorsList();
            }, (err) => {
                //the data didn't add to the database in the backend
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Server Error, Author hasn't been saved !",
                    footer: ''
                });
            });
        }
        else {
            this.incorrectData = true;
            //invalidation data for the new book  
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Invalid data !",
                footer: ''
            });
        }
    }
    added() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Good job!', 'Author Added Successfully!', 'success');
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthorsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["app-admin-store"]], decls: 32, vars: 4, consts: [[1, "content-page"], [1, "container"], [1, "row", "p-5"], [1, "update-form", "p-3"], ["id", "form", 1, "", 3, "formGroup"], [1, "fas", "fa-book-open", "fa-5x", "d-block", "m-auto"], [1, "mb-3", "field"], ["for", "first-name", 1, "form-label"], ["formControlName", "fName", "id", "first-name", "placeholder", "Enter first name...", "type", "text", 1, "form-control"], ["class", "alert-danger p-1 mt-2", 4, "ngIf"], ["for", "last-name", 1, "form-label"], ["formControlName", "lName", "id", "last-name", "placeholder", "Enter last name...", "type", "text", 1, "form-control"], ["for", "dob", 1, "form-label"], ["formControlName", "dob", "id", "dob", "placeholder", "Enter date...", "type", "date", 1, "form-control"], ["for", "image", 1, "form-label"], ["id", "image", "type", "text", "formControlName", "image", 1, "form-control"], [1, "actions", "text-center", "mt-3"], ["type", "button", "routerLink", "../../author", 1, "btn", "btn-secondary", "w-25", "m-1"], ["type", "button", 1, "btn", "btn-danger", "w-25", "m-1", 3, "click"], [1, "alert-danger", "p-1", "mt-2"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, StoreComponent_p_12_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, StoreComponent_p_17_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, StoreComponent_p_22_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StoreComponent_Template_button_click_30_listener($event) { return ctx.submitForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Add Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.getFNameStatus() && ctx.incorrectData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.getLNameStatus() && ctx.incorrectData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.getDOBStatus() && ctx.incorrectData);
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_5__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".content-page[_ngcontent-%COMP%]{\r\n  min-height: 95vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding-left: 18%;\r\n}\r\n\r\n.update-form[_ngcontent-%COMP%] {\r\n  margin-top: 10%;\r\n  box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 10px;\r\n}\r\n\r\n.fa-book-open[_ngcontent-%COMP%] {\r\n  color: #de3242;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXBhZ2V7XHJcbiAgbWluLWhlaWdodDogOTV2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOCU7XHJcbn1cclxuXHJcbi51cGRhdGUtZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZmEtYm9vay1vcGVuIHtcclxuICBjb2xvcjogI2RlMzI0MjtcclxufVxyXG5cclxuLmZpZWxkIHAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */", ".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "G7Ye":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/user layout/category/user-category-sidebar/user-category-sidebar.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserCategorySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategorySidebarComponent", function() { return UserCategorySidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/category.service */ "QzLg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserCategorySidebarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCategorySidebarComponent_li_9_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const category_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCategory($event, category_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1);
} }
class UserCategorySidebarComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.selectedCategory = "";
        this.categories = [];
        this.categoriesName = [];
        this.selectCategoryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDefaultCategoryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectCategory(event, category) {
        console.log(category);
        if (this.lastActivelink)
            this.selectCategoryEmitter.emit(category);
        else
            this.lastActivelink = document.getElementsByClassName("mylink")[0];
        if (this.lastActivelink) {
            this.lastActivelink.setAttribute('style', 'font-weight: 500; font-size: 1.0em;');
        }
        this.lastActivelink = event.target;
        this.lastActivelink.setAttribute('style', 'font-weight: 900; font-size: 1.05em;');
    }
    ngOnInit() {
        this.subscriber = this.categoryService.getCategories()
            .subscribe((response) => {
            console.log(response.body);
            this.categories = response.body;
            this.categoriesName = this.categories.map((category) => {
                return category.name;
            });
            if (this.categories.length > 0) {
                this.setDefaultCategoryEmitter.emit(this.categories[0].name);
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Can't load categories!",
                footer: ''
            });
        });
    }
}
UserCategorySidebarComponent.ɵfac = function UserCategorySidebarComponent_Factory(t) { return new (t || UserCategorySidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
UserCategorySidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCategorySidebarComponent, selectors: [["app-user-category-sidebar"]], outputs: { selectCategoryEmitter: "selectCategoryEmitter", setDefaultCategoryEmitter: "setDefaultCategoryEmitter" }, decls: 10, vars: 1, consts: [[1, "container-fluid"], [1, "sidebar", "row"], ["id", "sidebar", 1, "sidebar-wrapper", "col-3"], [1, "category-content"], [1, "category-header"], ["href", "#", 1, "btn", "btn-danger", "w-100"], [1, "category"], [4, "ngFor", "ngForOf"], [1, "active", "mylink", 3, "click"], [1, "fas", "fa-chevron-right"]], template: function UserCategorySidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserCategorySidebarComponent_li_9_Template, 5, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["body[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n  left: 10%;\r\n  top: 13%;\r\n  height: 84%;\r\n}\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%] {\r\n  background: #F5F5F5;\r\n  font-size: 1.15rem;\r\n  width: 260px;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -300px;\r\n  z-index: 999;\r\n}\r\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{\r\n  font-weight: 900;\r\n  font-size: 1.05em;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.category-content[_ngcontent-%COMP%] {\r\n  max-height: calc(100% - 30px);\r\n  height: calc(100% - 30px);\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n.category-content.desktop[_ngcontent-%COMP%] {\r\n  overflow-y: hidden;\r\n}\r\n\r\n.category-header[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px;\r\n}\r\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 100%;\r\n  text-decoration: none;\r\n  position: relative;\r\n  padding: 8px 30px 8px 20px;\r\n}\r\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #818896;\r\n}\r\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]{\r\n  color: #DE3241;\r\n}\r\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n  transform: rotate(360deg);\r\n  transition: all 0.5s ease;\r\n}\r\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  color: #DE3241;\r\n}\r\n@media only screen and (max-width: 1700px) {\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n    left: 0;\r\n  }\r\n}\r\n@media only screen and (max-width: 800px) {\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n    width: 140px;\r\n    padding: 0;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n  }\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    padding: 0;\r\n    font-size: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2F0ZWdvcnktc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUVBLGtCQUFrQjtBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUEsbUJBQW1CO0FBRW5CO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxrQkFBa0I7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBR0EsV0FBVztBQUVYO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFO0lBQ0UsT0FBTztFQUNUO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoidXNlci1jYXRlZ29yeS1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcclxuICBsZWZ0OiAxMCU7XHJcbiAgdG9wOiAxMyU7XHJcbiAgaGVpZ2h0OiA4NCU7XHJcbn1cclxuXHJcbi8qU2lkZWJhciBXcmFwcGVyKi9cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0zMDBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNpZGViYXItd3JhcHBlciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnkgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDEuMDVlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLypDYXRlZ29yeSBjb250ZW50Ki9cclxuXHJcbi5jYXRlZ29yeS1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY29udGVudC5kZXNrdG9wIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qQ2F0ZWdvcnkgaGVhZGVyKi9cclxuXHJcbi5jYXRlZ29yeS1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi8qQ2F0ZWdvcnkqL1xyXG5cclxuLmNhdGVnb3J5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHVsIGxpIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnkgdWwgbGkgYXtcclxuICBjb2xvcjogIzgxODg5NjtcclxufVxyXG5cclxuLmNhdGVnb3J5IHVsIGxpIHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnkgdWwgbGk6aG92ZXI+YXtcclxuICBjb2xvcjogI0RFMzI0MTtcclxufVxyXG5cclxuLmNhdGVnb3J5IHVsIGxpOmhvdmVyPmEgc3Zne1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmNhdGVnb3J5IHVsIGxpIC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjREUzMjQxO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnkgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "GZWh":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin layout/category/category-store/category-store.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CategoryStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStoreComponent", function() { return CategoryStoreComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/category.service */ "cPV5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CategoryStoreComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The Category Name is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryStoreComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The Category Image is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryStoreComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryStoreComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wating....");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryStoreComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.responseMessage, " ");
} }
class CategoryStoreComponent {
    constructor(_categoryService, router) {
        this._categoryService = _categoryService;
        this.router = router;
        this.isStyleInvalid = { 'background-color': '#24324a' };
        this.isStyleValid = { 'background-color': '#de3242' };
        this.isClicked = false;
        this.responseMessage = '';
        this.isSucess = false;
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z0-9 ]*')]),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    ngOnInit() {
    }
    addCategory() {
        this.isClicked = true;
        if (this.categoryForm.valid) {
            this._categoryService.categoryStore(this.categoryForm.value).subscribe(response => {
                //if (response.message == 'success') {
                this.isClicked = false;
                this.isSucess = true;
                this.responseMessage = 'Added Successfully.';
                this.categoryForm.reset();
                this.router.navigate(['/admin/category']);
                // }
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Error saving category, Try again",
                    footer: ''
                });
            });
            console.log(this.categoryForm);
        }
    }
}
CategoryStoreComponent.ɵfac = function CategoryStoreComponent_Factory(t) { return new (t || CategoryStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CategoryStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoryStoreComponent, selectors: [["app-category-store"]], decls: 27, vars: 10, consts: [[1, "content-page"], [1, "category"], [1, "container"], [1, "content", "pt-5"], [1, "conteiner", "mt-5"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "headerTitel", 1, "form-label"], ["formControlName", "name", "type", "text", "id", "headerTitel", "placeholder", "Enter The Categoy Name", 1, "form-control"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "form-group", "mb-3"], ["for", "exampleFormControlFile1"], ["type", "text", "formControlName", "image", "id", "exampleFormControlFile1", 1, "form-control-file"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-custom", 3, "disabled", "ngStyle"], [4, "ngIf"], ["class", "alert alert-success text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["role", "alert", 1, "alert", "alert-success", "text-center"]], template: function CategoryStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "We are glad to see you again!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CategoryStoreComponent_Template_form_ngSubmit_11_listener() { return ctx.categoryForm.valid && ctx.addCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Category Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CategoryStoreComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Category Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CategoryStoreComponent_div_21_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CategoryStoreComponent_span_24_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CategoryStoreComponent_span_25_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CategoryStoreComponent_div_26_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.categoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-valid", ctx.categoryForm.controls.name.status == "VALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.categoryForm.controls.name.errors && ctx.categoryForm.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.categoryForm.controls.image.errors && ctx.categoryForm.controls.image.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.categoryForm.invalid)("ngStyle", ctx.categoryForm.invalid ? ctx.isStyleInvalid : ctx.isStyleValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSucess);
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_5__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], styles: [".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n  min-height: 92vh;\r\n}\r\n.category[_ngcontent-%COMP%] {\r\n  margin-left: 19%;\r\n}\r\n.btn-custom[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  color: #ffffff;\r\n  height: 50px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  width: 100px;\r\n  border-radius: 10px;\r\n}\r\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  color: #484848;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #484848;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  border: 1px solid rgb(235, 235, 235);\r\n  border-radius: 8px;\r\n  padding: 30px;\r\n  margin-bottom: 20px;\r\n  margin-right: 20px;\r\n}\r\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  color: #484848;\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n}\r\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-family: \"Nunito\";\r\n  color: rgb(72, 72, 72);\r\n  font-weight: 700;\r\n  line-height: 1.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImNhdGVnb3J5LXN0b3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA5MnZoO1xyXG59XHJcbi5jYXRlZ29yeSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcclxufVxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbnRlbnQgaDIge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzQ4NDg0ODtcclxufVxyXG5mb3JtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzUsIDIzNSwgMjM1KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5mb3JtIGg0IHtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiAjNDg0ODQ4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmZvcm0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcclxuICBjb2xvcjogcmdiKDcyLCA3MiwgNzIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "HNuO":
/*!********************************************!*\
  !*** ./src/app/pipes/concate-name.pipe.ts ***!
  \********************************************/
/*! exports provided: ConcateNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcateNamePipe", function() { return ConcateNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConcateNamePipe {
    transform(fname, lname) {
        return `${fname} + ${lname}`;
    }
}
ConcateNamePipe.ɵfac = function ConcateNamePipe_Factory(t) { return new (t || ConcateNamePipe)(); };
ConcateNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "concateName", type: ConcateNamePipe, pure: true });


/***/ }),

/***/ "ImBr":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/user layout/category/user-category-index/user-category-index.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserCategoryIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategoryIndexComponent", function() { return UserCategoryIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _user_category_header_user_category_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-category-header/user-category-header.component */ "bdQi");
/* harmony import */ var _user_category_sidebar_user_category_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-category-sidebar/user-category-sidebar.component */ "G7Ye");
/* harmony import */ var _user_category_books_user_category_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-category-books/user-category-books.component */ "Kpfp");





class UserCategoryIndexComponent {
    constructor() {
        this.category = "";
    }
    ngOnInit() {
    }
}
UserCategoryIndexComponent.ɵfac = function UserCategoryIndexComponent_Factory(t) { return new (t || UserCategoryIndexComponent)(); };
UserCategoryIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCategoryIndexComponent, selectors: [["app-user-category-index"]], decls: 5, vars: 0, consts: [[3, "searchEmitter"], [3, "selectCategoryEmitter", "setDefaultCategoryEmitter"], ["sendCategory", ""]], template: function UserCategoryIndexComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user-category-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmitter", function UserCategoryIndexComponent_Template_app_user_category_header_searchEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.searchBook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-user-category-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectCategoryEmitter", function UserCategoryIndexComponent_Template_app_user_category_sidebar_selectCategoryEmitter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.selectCategory($event); })("setDefaultCategoryEmitter", function UserCategoryIndexComponent_Template_app_user_category_sidebar_setDefaultCategoryEmitter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.getDefaultCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-user-category-books", null, 2);
    } }, directives: [_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__["NavUserComponent"], _user_category_header_user_category_header_component__WEBPACK_IMPORTED_MODULE_2__["UserCategoryHeaderComponent"], _user_category_sidebar_user_category_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["UserCategorySidebarComponent"], _user_category_books_user_category_books_component__WEBPACK_IMPORTED_MODULE_4__["UserCategoryBooksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNhdGVnb3J5LWluZGV4LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "IpQU":
/*!*****************************************************!*\
  !*** ./src/app/services/authors-service.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthorsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsServiceService", function() { return AuthorsServiceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthorsServiceService {
    constructor(authorClient) {
        this.authorClient = authorClient;
        this._authorIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.authorID$ = this._authorIdSource.asObservable();
        this.baseURL = "http://localhost:3000/author";
        this.accessToken = sessionStorage.getItem('accessToken');
    }
    sendID(id) {
        this._authorIdSource.next(id);
    }
    getAuthors() {
        //fetch list of authors
        return this.authorClient.get(this.baseURL, {
            observe: 'response'
        });
    }
    search(keyword, page) {
        return this.authorClient.get(`${this.baseURL}/search/${keyword} ?page=${page}`, { observe: "response" });
    }
    pagination(page) {
        return this.authorClient.get(`${this.baseURL}/pages?page=${page}`, {
            observe: "response"
        });
    }
    postAuthor(author) {
        return this.authorClient.post(this.baseURL, author, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    deleteAuthor(id) {
        return this.authorClient.delete(`${this.baseURL}/${id}`, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    getAuthorById(id) {
        //fetch authors by id
        return this.authorClient.get(`${this.baseURL}/${id}`);
    }
    updateAuthor(id, author) {
        return this.authorClient.patch(`${this.baseURL}/${id}`, author, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    ///Author Details
    show(id) {
        return this.authorClient.get(`${this.baseURL}/${id}`);
    }
}
AuthorsServiceService.ɵfac = function AuthorsServiceService_Factory(t) { return new (t || AuthorsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthorsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorsServiceService, factory: AuthorsServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JQwJ":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user layout/home/header/home-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function() { return HomeHeaderComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/settings.service */ "6nr9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeHeaderComponent {
    constructor(settingService) {
        this.settingService = settingService;
        this.slidePhotos = ["assets/user/home/header1.jpeg", "assets/user/home/header1.jpeg"];
        this.currentSlide = 0;
        this.headerTitleValue = "";
        this.headerParagraphValue = "";
    }
    ngOnInit() {
        this.subscriber = this.settingService.getSettingId("home")
            .subscribe((response) => {
            this.settings = response;
            this.headerTitleValue = this.settings.sectionContent.title;
            this.headerParagraphValue = this.settings.sectionContent.sub_title;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error, Can't get header content !",
                footer: ''
            });
        });
    }
}
HomeHeaderComponent.ɵfac = function HomeHeaderComponent_Factory(t) { return new (t || HomeHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"])); };
HomeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeHeaderComponent, selectors: [["app-home-header"]], decls: 11, vars: 2, consts: [[1, "carousel-inner"], ["src", "assets/user/home/header1.jpeg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "text-capitalize", "py-1", "typing"], [1, "text-capitalize", "pb-2"], ["routerLink", "/books", 1, "btn", "btn-custom", "font-weight-bold"]], template: function HomeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Discover Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.headerTitleValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.headerParagraphValue);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["header[_ngcontent-%COMP%] {\r\n    font-family: 'PT Sans', sans-serif;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 12px 24px !important;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-radius: 10px;\r\n    font-size: 17px;\r\n    line-height: 2;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 85vh;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 49px;\r\n    font-size: 48px;\r\n}\r\n\r\n.btn-custom[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    border: 1px solid #000 !important;\r\n    color: #000 !important;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG5oZWFkZXIgLmNhcm91c2VsLWl0ZW0gaW1nIHtcclxuICAgIGhlaWdodDogODV2aDtcclxufVxyXG5cclxuaGVhZGVyIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0OXB4O1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Kkkl":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin layout/category/category-update/category-update.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CategoryUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryUpdateComponent", function() { return CategoryUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/category.service */ "cPV5");






const _c0 = ["closebutton"];
class CategoryUpdateComponent {
    constructor(_categoryService) {
        this._categoryService = _categoryService;
        this.updatedCategory = {
            id: "",
            name: "",
            image: "",
            books: [],
        };
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z]+$/)]),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.refreshCategories = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._categoryService.categoryID$
            .subscribe((id) => {
            this.updatedCategory.id = id.toString();
        });
    }
    updateCategory() {
        this.updatedCategory.name = this.categoryForm.value.name;
        this.updatedCategory.image = this.categoryForm.value.image;
        this._categoryService.categoryUpdate(this.updatedCategory.id, this.updatedCategory).subscribe((res) => {
            this.refreshCategories.emit();
            this.closebutton.nativeElement.click();
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error updating category. Try again !",
                footer: ''
            });
        });
    }
}
CategoryUpdateComponent.ɵfac = function CategoryUpdateComponent_Factory(t) { return new (t || CategoryUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"])); };
CategoryUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryUpdateComponent, selectors: [["app-category-update"]], viewQuery: function CategoryUpdateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, outputs: { refreshCategories: "refreshCategories" }, decls: 24, vars: 1, consts: [["id", "updateCategory", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", "w-100"], [1, "modal-dialog", "w-100"], [1, "modal-content", "w-100"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-3", "author-form"], ["id", "form", 1, "", 3, "formGroup"], [1, "fas", "fa-book-open", "fa-5x", "d-block"], [1, "mb-3", "field"], ["for", "first-name", 1, "form-label"], ["formControlName", "name", "type", "text", "id", "first-name", "placeholder", "update Category Name", 1, "form-control"], [1, "field"], ["for", "image", 1, "form-label"], ["formControlName", "image", "type", "text", "id", "image", 1, "form-control"], [1, "actions", "text-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "w-25", "m-1"], ["closebutton", ""], ["type", "submit", 1, "btn", "btn-danger", "w-25", "m-1", 3, "click"]], template: function CategoryUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Category Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryUpdateComponent_Template_button_click_22_listener() { return ctx.updateCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Update Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".author-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.author-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  float: right;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n  margin: 10px 0 20px 2%;\r\n  width: 48%;\r\n  display: inline-block;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  margin-top: 10%;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #de3242;\r\n  margin: 40px auto;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .modal-dialog[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 1.75rem auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoiY2F0ZWdvcnktdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yLWZvcm0gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uYXV0aG9yLWZvcm0gYnV0dG9uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBtYXJnaW46IDEwcHggMCAyMHB4IDIlO1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbmZvcm0gc3ZnIHtcclxuICBjb2xvcjogI2RlMzI0MjtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Kpfp":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/user layout/category/user-category-books/user-category-books.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserCategoryBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategoryBooksComponent", function() { return UserCategoryBooksComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/category.service */ "QzLg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UserCategoryBooksComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", book_r4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserCategoryBooksComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCategoryBooksComponent_div_2_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookRow_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", bookRow_r2);
} }
function UserCategoryBooksComponent_span_12_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_span_12_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.changePagination($event, page_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r5, " ");
} }
function UserCategoryBooksComponent_span_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_span_12_ng_template_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.changePagination($event, page_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r5, " ");
} }
function UserCategoryBooksComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCategoryBooksComponent_span_12_a_2_Template, 2, 1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCategoryBooksComponent_span_12_ng_template_3_Template, 3, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", page_r5 == ctx_r1.currentPage)("ngIfElse", _r8);
} }
class UserCategoryBooksComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.currentPage = 1;
        this.currentCategory = "";
        this.maxPages = 1;
        this.row1 = [];
        this.row2 = [];
        this.books = [this.row1, this.row2];
        this.paginationPages = [4, 5, 6];
    }
    getDefaultCategory(category) {
        this.currentCategory = category;
        this.getPage(this.currentCategory, this.currentPage);
    }
    selectCategory(name) {
        this.currentCategory = name;
        this.currentPage = 1;
        this.getPage(this.currentCategory, this.currentPage);
    }
    searchBook(book) {
        this.currentPage = 1;
        this.getPage(this.currentCategory, this.currentPage, book);
    }
    ngOnInit() {
    }
    changePagination(event, type) {
        if (type == "back" && this.currentPage > 1) {
            this.currentPage--;
            this.getPage(this.currentCategory, this.currentPage);
        }
        else if (type == "next" && this.currentPage < this.maxPages) {
            this.currentPage++;
            this.getPage(this.currentCategory, this.currentPage);
        }
        else if (type != "back" && type != "next") {
            this.currentPage = type;
            this.getPage(this.currentCategory, this.currentPage);
        }
    }
    getPage(category, page, book = "") {
        this.row2 = [];
        this.row1 = [];
        this.subscriber = this.categoryService.getCategoryPage(category, page, book)
            .subscribe((response) => {
            console.log(response.body);
            this.maxPages = Math.ceil(response.body.bookNumbers / 8);
            console.log(this.maxPages);
            let books = response.body.pagebooks;
            books.find((book, index) => {
                if (index < 4)
                    this.row1.push(book);
                else
                    this.row2.push(book);
                console.log(this.row1[0], this.row2[0]);
            });
            console.log(this.row1, this.row2);
            this.books = [this.row1, this.row2];
            console.log(this.books);
            this.calculatePagination();
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something went wrong, can't get page content!",
                footer: ''
            });
        });
    }
    calculatePagination() {
        console.log(this.maxPages);
        switch (this.maxPages) {
            case 0:
                this.paginationPages = [0];
                break;
            case 1:
                this.paginationPages = [1];
                break;
            case 2:
                this.paginationPages = [1, 2];
                break;
            default:
                if (this.currentPage == 1 || this.currentPage == 2)
                    this.paginationPages = [1, 2, 3];
                else if (this.currentPage == this.maxPages)
                    this.paginationPages = [this.maxPages - 2, this.maxPages - 1, this.maxPages];
                else
                    this.paginationPages = [this.maxPages - 1, this.maxPages, this.maxPages + 1];
                break;
        }
    }
}
UserCategoryBooksComponent.ɵfac = function UserCategoryBooksComponent_Factory(t) { return new (t || UserCategoryBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
UserCategoryBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserCategoryBooksComponent, selectors: [["app-user-category-books"]], decls: 16, vars: 2, consts: [[1, "books"], [1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "pagination-section"], [1, "row"], [1, "col-2"], ["aria-label", "Page navigation example", 1, "col-10"], [1, "pagination", "w-100"], [1, "page-item"], ["href", "#", 1, "", 3, "click"], [1, "fas", "fa-chevron-circle-left", "fa-2x"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-circle-right", "fa-2x"], ["class", "col-lg-3 col-sm-6 col-8 col-xxs-9 book text-center", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-6", "col-8", "col-xxs-9", "book", "text-center"], [1, "book-image", "mt-3", 3, "src"], ["class", "", "href", "#", "style", "color:  #de3242", 3, "click", 4, "ngIf", "ngIfElse"], ["noStar", ""], ["href", "#", 1, "", 2, "color", "#de3242", 3, "click"]], template: function UserCategoryBooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCategoryBooksComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_Template_a_click_10_listener($event) { return ctx.changePagination($event, "back"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserCategoryBooksComponent_span_12_Template, 5, 2, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_Template_a_click_14_listener($event) { return ctx.changePagination($event, "next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paginationPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".books[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  padding-left: 15%;\r\n}\r\n\r\n.books[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n  min-height: 60%;\r\n}\r\n\r\n.book[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.book[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.book-image[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  height: 250px;\r\n  border-radius: 20px;\r\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 1px 7px 0 rgba(0,0,0,0.2), 0 3px 2px -2px rgba(0,0,0,0.2);\r\n}\r\n\r\n.book-image[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.2);\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.pagination-section[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n  justify-content: right;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .books[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    padding-left: 20%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2F0ZWdvcnktYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0dBQW9HO0FBQ3RHOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InVzZXItY2F0ZWdvcnktYm9va3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm9va3MgLnJvdyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbn1cclxuXHJcbi5ib29rcyB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmJvb2sge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJvb2s6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvb2staW1hZ2Uge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCAxcHggN3B4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDNweCAycHggLTJweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5ib29rLWltYWdlOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuYm9va3MgLnJvdyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "LFVM":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/user layout/user-profile/header/user-profile-header.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserProfileHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileHeaderComponent", function() { return UserProfileHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserProfileHeaderComponent {
    constructor() {
        this.searchEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    searchBook(event) {
        console.log(event.target.value);
        this.searchEmitter.emit(event.target.value);
    }
}
UserProfileHeaderComponent.ɵfac = function UserProfileHeaderComponent_Factory(t) { return new (t || UserProfileHeaderComponent)(); };
UserProfileHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileHeaderComponent, selectors: [["app-user-profile-header"]], outputs: { searchEmitter: "searchEmitter" }, decls: 9, vars: 0, consts: [[1, "p-5", "text-center", "bg-image"], [1, "mask"], [1, "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "d-flex", "justify-content-center", "h-100"], [1, "searchbar"], ["type", "text", "name", "", "placeholder", "Search...", 1, "search_input", 3, "keyup"], ["href", "#", 1, "search_icon"], [1, "fas", "fa-search"]], template: function UserProfileHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UserProfileHeaderComponent_Template_input_keyup_6_listener($event) { return ctx.searchBook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg-image[_ngcontent-%COMP%]{\r\n    background-image: url('header-photo.jpg');\r\n    height: 300px;\r\n}\r\n\r\n.mask[_ngcontent-%COMP%]{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    margin-top: 7%;\r\n    margin-left: 25%;\r\n    width: 50%;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]{\r\n    margin-bottom: auto;\r\n    margin-top: auto;\r\n    height: 60px;\r\n    background-color: #353b48;\r\n    border-radius: 30px;\r\n    padding: 10px;\r\n}\r\n\r\n.search_input[_ngcontent-%COMP%]{\r\n    color: white;\r\n    border: 0;\r\n    outline: 0;\r\n    background: none;\r\n    width: 0;\r\n    caret-color:transparent;\r\n    line-height: 40px;\r\n    transition: width 0.4s linear;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]:hover    > .search_input[_ngcontent-%COMP%]{\r\n    padding: 0 10px;\r\n    width: 450px;\r\n    caret-color:red;\r\n    transition: width 0.4s linear;\r\n}\r\n\r\n.searchbar[_ngcontent-%COMP%]:hover    > .search_icon[_ngcontent-%COMP%]{\r\n    background: white;\r\n    color: #e74c3c;\r\n}\r\n\r\n.search_icon[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 40px;\r\n    float: right;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    color:white;\r\n    text-decoration:none;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .mask[_ngcontent-%COMP%]{margin-top: 25%;}\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUE0RTtJQUM1RSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUIiLCJmaWxlIjoidXNlci1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvdXNlci9wcm9maWxlL2hlYWRlci1waG90by5qcGcnKTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5tYXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNiNDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbnB1dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBjYXJldC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2lucHV0e1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgY2FyZXQtY29sb3I6cmVkO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjZTc0YzNjO1xyXG59XHJcblxyXG4uc2VhcmNoX2ljb257XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubWFza3ttYXJnaW4tdG9wOiAyNSU7fVxyXG4gICAgXHJcbn0gICAiXX0= */"] });


/***/ }),

/***/ "MMyg":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin layout/category/category-index/category-index.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CategoryIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIndexComponent", function() { return CategoryIndexComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/category.service */ "cPV5");
/* harmony import */ var _shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../category-delete/category-delete.component */ "Qujb");
/* harmony import */ var _category_update_category_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../category-update/category-update.component */ "Kkkl");
/* harmony import */ var _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/empty/empty.component */ "CH8H");










function CategoryIndexComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryIndexComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryIndexComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryIndexComponent_div_18_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const category_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.sendID(category_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryIndexComponent_div_18_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const category_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.sendID(category_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/admin/category/", category_r4.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", category_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r4.name);
} }
function CategoryIndexComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryIndexComponent_div_18_div_1_Template, 12, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
} }
class CategoryIndexComponent {
    constructor(_categoryService) {
        this._categoryService = _categoryService;
        this.categories = [];
        this.isLoad = false;
        this.categoryId = 0;
        this.data = this.categoryId;
        this.getAllCategories();
    }
    getAllCategories() {
        this._categoryService.categoryIndex().subscribe((res) => {
            this.categories = res;
            this.isLoad = true;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error loading books",
                footer: ''
            });
        });
    }
    ngOnInit() {
    }
    sendID(id) {
        this._categoryService.sendID(id);
    }
    deleteCategory() { this.getAllCategories(); }
    updateCategory() { this.getAllCategories(); }
}
CategoryIndexComponent.ɵfac = function CategoryIndexComponent_Factory(t) { return new (t || CategoryIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
CategoryIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryIndexComponent, selectors: [["app-category-index"]], decls: 21, vars: 3, consts: [[1, "content-page"], [1, "category"], [1, "container"], [1, "row"], [1, "col-6"], [1, "content", "pt-5"], ["routerLink", "/admin/category/store", 1, "add", "text-decoration-none"], ["class", "row w-100", 4, "ngIf"], [4, "ngIf"], ["class", "row w-100 mb-4 mt-5", 4, "ngIf"], [3, "refreshCategories"], [1, "row", "w-100"], [1, "col-md-12", "text-center", "loader"], [1, "fas", "fa-spinner", "fa-spin", "fa-5x", "text-info"], [1, "row", "w-100", "mb-4", "mt-5"], ["class", "col-md-6 col-lg-4 col-xl-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "col-xl-4", "mb-4"], [1, "card"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body", "row", "w-100", "align-items-center"], [1, "col-3"], ["data-bs-toggle", "modal", "data-bs-target", "#updateCategory", 1, "btn", "custom-txt", 3, "click"], [1, "fas", "fa-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteCategory", 1, "btn", "text-danger", 3, "click"], [1, "fas", "fa-trash"]], template: function CategoryIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "We are glad to see you again!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CategoryIndexComponent_div_16_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CategoryIndexComponent_div_17_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoryIndexComponent_div_18_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-category-delete", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("refreshCategories", function CategoryIndexComponent_Template_app_category_delete_refreshCategories_19_listener() { return ctx.deleteCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-category-update", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("refreshCategories", function CategoryIndexComponent_Template_app_category_update_refreshCategories_20_listener() { return ctx.updateCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.categories.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_3__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_7__["CategoryDeleteComponent"], _category_update_category_update_component__WEBPACK_IMPORTED_MODULE_8__["CategoryUpdateComponent"], _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_9__["EmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n  min-height: 90vh;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n  margin-left: 19%;\r\n}\r\n\r\n.category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n}\r\n\r\n.custom-txt[_ngcontent-%COMP%] {\r\n  color: #24324a;\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n  background-color: #24324a;\r\n  font-weight: 700;\r\n  border-radius: 10px;\r\n  padding: 15px 25px;\r\n  float: right;\r\n  margin-right: 20px;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 30%), 0 4px 5px 0 rgb(0 0 0 / 30%);\r\n}\r\n\r\n.add[_ngcontent-%COMP%]:hover {\r\n  background-color: #de3242;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNFQUFzRTtBQUN4RTs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJjYXRlZ29yeS1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICBtYXJnaW4tbGVmdDogMTklO1xyXG59XHJcbi5jYXRlZ29yeSAuY2FyZCBpbWcge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmN1c3RvbS10eHQge1xyXG4gIGNvbG9yOiAjMjQzMjRhO1xyXG59XHJcbi5hZGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDMyNGE7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiKDAgMCAwIC8gMzAlKSwgMCA0cHggNXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcclxufVxyXG4uYWRkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "Qhb7":
/*!*************************************************!*\
  !*** ./src/app/services/admin-login.service.ts ***!
  \*************************************************/
/*! exports provided: AdminLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginService", function() { return AdminLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AdminLoginService {
    constructor(adminClient) {
        this.adminClient = adminClient;
        this.baseURL = "http://localhost:3000/access";
    }
    postAdmin(admin) {
        return this.adminClient.post(`${this.baseURL}/admin`, admin);
    }
    logoutAdmin(token) {
        return this.adminClient.post(`${this.baseURL}/adminLogout`, token);
    }
    isLoggedIn() {
        return !!sessionStorage.getItem('accessToken');
    }
}
AdminLoginService.ɵfac = function AdminLoginService_Factory(t) { return new (t || AdminLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminLoginService, factory: AdminLoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Qujb":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin layout/category/category-delete/category-delete.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CategoryDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDeleteComponent", function() { return CategoryDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/category.service */ "cPV5");




const _c0 = ["closebutton"];
class CategoryDeleteComponent {
    constructor(_categoryService) {
        this._categoryService = _categoryService;
        this.deletedCategory = {
            id: "",
            name: "",
            image: "",
            books: [],
        };
        this.refreshCategories = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._categoryService.categoryID$
            .subscribe((id) => {
            this.deletedCategory.id = id.toString();
        });
    }
    getid() {
        return this.deletedCategory;
    }
    deleteCategory() {
        this._categoryService.categoryDelete(this.deletedCategory.id).subscribe((res) => {
            if (res.message == "Deleted Correctly") {
                this.closebutton.nativeElement.click();
                this.refreshCategories.emit();
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error deleting category, Try again !",
                footer: ''
            });
        });
    }
}
CategoryDeleteComponent.ɵfac = function CategoryDeleteComponent_Factory(t) { return new (t || CategoryDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
CategoryDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryDeleteComponent, selectors: [["app-category-delete"]], viewQuery: function CategoryDeleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, outputs: { refreshCategories: "refreshCategories" }, decls: 15, vars: 0, consts: [["id", "deleteCategory", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", "w-100"], [1, "modal-dialog", "w-100"], [1, "modal-content", "w-100"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-3", "register-form"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "m-1"], ["closebutton", ""], ["type", "submit", 1, "btn", "btn-danger", "m-1", 3, "click"]], template: function CategoryDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure you want to delete this Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDeleteComponent_Template_button_click_13_listener() { return ctx.deleteCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".modal-body[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  margin: 15rem auto;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  margin-top: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJjYXRlZ29yeS1kZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgbWFyZ2luOiAxNXJlbSBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "QzLg":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user layout/category/service/category.service.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CategoryService {
    constructor(categoryClient) {
        this.categoryClient = categoryClient;
        this.baseURL = "http://localhost:3000/category";
    }
    getCategories() {
        return this.categoryClient.get(this.baseURL, { observe: 'response' });
    }
    getCategoryPage(name, page, book = "") {
        console.log(name, page, (book == ""));
        if (book == "")
            return this.categoryClient.get(`${this.baseURL}/pages?name=${name}&page=${page}`, { observe: 'response' });
        else
            return this.categoryClient.get(`${this.baseURL}/pages?name=${name}&page=${page}&bookName=${book}`, { observe: 'response' });
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Rp5y":
/*!********************************************!*\
  !*** ./src/app/Guards/admin-auth.guard.ts ***!
  \********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin-login.service */ "Qhb7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminAuthGuard {
    constructor(adminService, _Router) {
        this.adminService = adminService;
        this._Router = _Router;
    }
    canActivate(route, state) {
        if (this.adminService.isLoggedIn()) {
            return true;
        }
        else {
            this._Router.navigate(["admin/login"]); ///admin login page
            return false;
        }
    }
}
AdminAuthGuard.ɵfac = function AdminAuthGuard_Factory(t) { return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_admin_login_service__WEBPACK_IMPORTED_MODULE_1__["AdminLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminAuthGuard, factory: AdminAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Trending Books';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_ngcontent-%COMP%]::selection {\r\n  color: #fff;\r\n  background: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LW1vei1zZWxlY3Rpb24ge1xyXG4gIC8qIENvZGUgZm9yIEZpcmVmb3ggKi9cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "TUxq":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user layout/home/footer/home-footer.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFooterComponent", function() { return HomeFooterComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/settings.service */ "6nr9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeFooterComponent {
    constructor(settingService) {
        this.settingService = settingService;
        this.emailValue = "";
        this.phoneValue = "";
        this.faxValue = "";
        this.footerTitleValue = "";
        this.footerDescriptionValue = "";
    }
    ngOnInit() {
        this.subscriber = this.settingService.getSettingId("footer-info")
            .subscribe((response) => {
            this.settings = response;
            this.emailValue = this.settings.sectionContent.email;
            this.phoneValue = this.settings.sectionContent.phone;
            this.faxValue = this.settings.sectionContent.fax;
            this.footerTitleValue = this.settings.sectionContent.title;
            this.footerDescriptionValue = this.settings.sectionContent.capation;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error, can't get footer content !",
                footer: ''
            });
        });
    }
}
HomeFooterComponent.ɵfac = function HomeFooterComponent_Factory(t) { return new (t || HomeFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"])); };
HomeFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeFooterComponent, selectors: [["app-home-footer"]], decls: 49, vars: 4, consts: [[1, "pt-5", "m-0"], [1, "container"], [1, "row", "py-5", "w-100"], [1, "col-sm-6", "col-md-6", "col-lg-3", "mb-md-3"], [1, "italic"], [1, "mission"], [1, "far", "fa-smile-wink", "text-bink"], [1, "col-md-6", "col-lg-3", "mb-md-4", "image"], ["src", "assets/user/book/book.jpg", "height", "200", "alt", "best book", 1, "w-100"], [1, "find", "col-md-6", "col-lg-3", "pl-5"], ["routerLink", "/aboutUs", "href", ""], ["routerLink", "/terms", "href", ""], [1, "social-icons"], [1, "mb-3"], [1, "fab", "fa-facebook", "ml-4", "icon"], [1, "fab", "fa-twitter", "mx-4", "icon"], [1, "fab", "fa-linkedin-in", "icon"], [1, "contact", "col-md-6", "col-lg-3"], [1, "text-center", "custom-background", "py-4", "m-0", "text-white"], [1, "far", "fa-heart"]], template: function HomeFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "find");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "contact info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " fax: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Made With Love ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " By Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.footerDescriptionValue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.phoneValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.emailValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.faxValue);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\r\n    font-family: 'PT Sans', sans-serif;\r\n    background-color: #EEEEEE;\r\n}\r\n\r\n.italic[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-family: 'Playfair Display';\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 38px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #DE3241;\r\n    font-weight: 700;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: #121212;\r\n    font-weight: 700;\r\n    text-transform: capitalize;\r\n    font-size: 25px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:first-of-type {\r\n    font-size: 30px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #797980;\r\n}\r\n\r\n.mission[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    line-height: 1.7;\r\n}\r\n\r\n.mission[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #DE3241;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\r\n    color: #DE3241;\r\n    cursor: pointer;\r\n}\r\n\r\n.find[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    line-height: 1.2;\r\n}\r\n\r\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #121212;\r\n    font-size: 18px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #DE3241;\r\n    cursor: pointer;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #121212;\r\n    font-weight: 900;\r\n}\r\n\r\n.custom-background[_ngcontent-%COMP%] {\r\n    background-color: #121212;\r\n}\r\n\r\n.text-bink[_ngcontent-%COMP%] {\r\n    color: #DE3241;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .find[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%], .image[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJOzs7UUFHSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiaG9tZS1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxufVxyXG5cclxuLml0YWxpYyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5mb290ZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG5mb290ZXIgaDIgc3BhbiB7XHJcbiAgICBjb2xvcjogI0RFMzI0MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmZvb3RlciBoNSB7XHJcbiAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuZm9vdGVyIGg1OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgICBjb2xvcjogIzc5Nzk4MDtcclxufVxyXG5cclxuLm1pc3Npb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLm1pc3Npb24gaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgaSB7XHJcbiAgICBjb2xvcjogI0RFMzI0MTtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgLmljb246aG92ZXIge1xyXG4gICAgY29sb3I6ICNERTMyNDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maW5kIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5jb250YWN0IHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmZpbmQgYSB7XHJcbiAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZmluZCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjREUzMjQxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5mb290ZXIgLmNvbnRhY3Qgc3BhbiB7XHJcbiAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG59XHJcblxyXG4udGV4dC1iaW5rIHtcclxuICAgIGNvbG9yOiAjREUzMjQxO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmZpbmQsXHJcbiAgICAuY29udGFjdCxcclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "TgDO":
/*!****************************************************!*\
  !*** ./src/app/services/rating-service.service.ts ***!
  \****************************************************/
/*! exports provided: RatingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingServiceService", function() { return RatingServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RatingServiceService {
    constructor(client) {
        this.client = client;
        this.BASE_URL = "http://localhost:3000/rating";
    }
    store(rating_det) {
        console.log(rating_det);
        return this.client.post(this.BASE_URL, rating_det);
    }
}
RatingServiceService.ɵfac = function RatingServiceService_Factory(t) { return new (t || RatingServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RatingServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RatingServiceService, factory: RatingServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VDpO":
/*!************************************************************************************!*\
  !*** ./src/app/modules/user layout/access/services/user-access-service.service.ts ***!
  \************************************************************************************/
/*! exports provided: UserAccessServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccessServiceService", function() { return UserAccessServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserAccessServiceService {
    constructor(client) {
        this.client = client;
        this.BASE_URL = "http://localhost:3000/access";
    }
    register(user) {
        return this.client.post(`${this.BASE_URL}/userRegister`, user);
    }
    login(user) {
        return this.client.post(`${this.BASE_URL}/user`, user);
    }
    logoutUser(token) {
        return this.client.post(`${this.BASE_URL}/userLogout`, token);
    }
    isLoggedIn() {
        return !!localStorage.getItem('TOKEN');
    }
}
UserAccessServiceService.ɵfac = function UserAccessServiceService_Factory(t) { return new (t || UserAccessServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserAccessServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAccessServiceService, factory: UserAccessServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ViJb":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin layout/author/delete/delete.component.ts ***!
  \************************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authors-service.service */ "IpQU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class DeleteComponent {
    //constructor
    constructor(myService, router) {
        this.myService = myService;
        this.router = router;
        //properties
        this.author = {
            id: "",
            firstName: "",
            lastName: "",
            name: "",
            birthDay: "",
            image: "",
            books: []
        };
    }
    //start the component
    ngOnInit() { }
    //navigate to the author list
    goToAuthorsList() {
        this.router.navigate(['/admin/author']);
    }
    //delete author from the list
    deleteFun() {
        //send request to backend to delete this author from the authors list
        this.myService.deleteAuthor(this.author.id)
            .subscribe((data) => {
            console.log(data.status);
            this.deleted();
            this.goToAuthorsList();
        }, (err) => {
            //erro while removing in backend
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error Deleting Author, Try again!",
                footer: ''
            });
        });
    }
    deleted() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Good job!', 'Author deleted Successfully!', 'success');
    }
}
DeleteComponent.ɵfac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthorsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteComponent, selectors: [["app-admin-delete"]], inputs: { author: ["authorInfo", "author"] }, decls: 15, vars: 0, consts: [["id", "deleteModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", "w-100"], [1, "modal-dialog", "w-100"], [1, "modal-content", "w-100"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-3", "register-form"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "m-1"], ["type", "button", "routerLink", "", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "m-1", 3, "click"]], template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Delete Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Are you sure you want to delete this author");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_13_listener() { return ctx.deleteFun(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".modal-body[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  margin: 15rem auto;\r\n}\r\n\r\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  margin-top: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgbWFyZ2luOiAxNXJlbSBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "WpqI":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin layout/admin-login/admin-login.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin-login.service */ "Qhb7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AdminLoginComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wrong username or password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AdminLoginComponent {
    //constructor
    constructor(myService, router) {
        this.myService = myService;
        this.router = router;
        //properties
        this.box_login = document.getElementById('l_box');
        this.password_login = document.getElementById('l_pass');
        this.box_signup = document.getElementById('s_box');
        this.password_signup = document.getElementsByName('s_pass');
        this.login_toggle = document.getElementById('login-toggle');
        this.login_form = document.getElementById('login-form');
        this.show = false;
        //get data from user
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            adminName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            adminPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    //start the component
    ngOnInit() {
        document.body.className = 'app-access';
        this.userPassStatus = false;
    }
    //navigate to dashboard page
    enterSite() {
        this.router.navigate(['/admin/dashboard']);
    }
    //show or hide password
    togglePassword() {
        this.show = !this.show;
    }
    //login function
    login() {
        //send user name and password to backend to check.
        this.myService.postAdmin({
            adminName: this.myForm.controls.adminName.value,
            adminPassword: this.myForm.controls.adminPassword.value
        })
            .subscribe((data) => {
            //save tokens in session storage to use it for every next request 
            this.tokens = data;
            try {
                if (this.tokens.token.accessToken != undefined) {
                    sessionStorage.setItem('accessToken', this.tokens.token.accessToken);
                    sessionStorage.setItem('refreshToken', this.tokens.token.refreshToken);
                    this.enterSite();
                }
            }
            catch (_a) {
                this.userPassStatus = true;
            }
            //
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Invalid name or password or both, try again",
                footer: ''
            });
        });
    }
    //end of component
    ngOnDestroy() {
        document.body.className = '';
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_admin_login_service__WEBPACK_IMPORTED_MODULE_3__["AdminLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 15, vars: 4, consts: [[1, "content"], [1, "form-modal"], [1, "form-toggle"], ["id", "login-toggle", "onclick", "toggleLogin()", "disabled", ""], ["id", "login-form"], ["src", "assets/icon.ico"], [3, "formGroup"], ["type", "text", "formControlName", "adminName", "placeholder", "Username", "required", "", 1, "w-100"], ["formControlName", "adminPassword", "id", "l_pass", "placeholder", "Password", "required", "", "minlength", "8", 1, "w-100", 3, "type"], ["type", "checkbox", "id", "l_box", 1, "m-1", 3, "click"], [1, "m-2"], ["class", "mb-1 mt-1", "style", "color: red;", 4, "ngIf"], ["id", "submitBtn", "type", "submit", "value", "login", 1, "btn", "mt-4", "login", 3, "disabled", "click"], [1, "mb-1", "mt-1", 2, "color", "red"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login as admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminLoginComponent_Template_input_click_10_listener() { return ctx.togglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AdminLoginComponent_p_13_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminLoginComponent_Template_input_click_14_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", !ctx.show ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userPassStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\r\n  padding-top: 20vh;\r\n  background-image: url(\"/assets/admin/login/back.jpeg\");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100%;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    width:50%;\r\n    height:420px;\r\n    font-size: 14px;\r\n    left:50%;\r\n    transform:translateX(-50%);\r\n    background:rgba(255, 255, 255, 0.85);\r\n    border-radius: 20px;\r\n    box-shadow:0 5px 15px 0px rgba(0, 0, 0, 0.3);\r\n    overflow: hidden;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    position: relative;\r\n    text-transform: capitalize;\r\n    font-size:16px;\r\n    z-index: 2;\r\n    outline: none;\r\n    background:white;\r\n    border: 1px solid #DE3241;\r\n    transition:0.2s;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    border:none;\r\n    font-weight: bold;\r\n    padding:0.8em 1em 0.8em 1em!important;\r\n    transition:0.5s;\r\n    margin-bottom:7px;\r\n    margin-top:7px;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{\r\n    background:#DE3241;\r\n    color:#fff;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover {\r\n    background:#222;\r\n}\r\n\r\n.form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    padding:10px;\r\n    margin-bottom:20px;\r\n    border:none;\r\n    transition: 0.2s;\r\n    font-weight: bold;\r\n    border-top-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n}\r\n\r\n.form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1), .form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){\r\n    border-bottom-right-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n}\r\n\r\n#login-toggle[_ngcontent-%COMP%]{\r\n    background:#DE3241;\r\n    color:#ffff;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width:90%;\r\n    left:50%;\r\n    transform:translateX(-50%);\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size: 16px;\r\n    padding:10px 20px;\r\n    margin-top:0.6em;\r\n    margin-bottom:0.6em;\r\n    border-radius: 20px;\r\n    border:none;\r\n    background:#fff;\r\n    outline:none;\r\n    font-weight: bold;\r\n    transition:0.4s;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active{\r\n    transform:scaleX(1.03);\r\n    border: 1px solid #de3240c9;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\r\n    color:rgb(99, 98, 98);\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:#DE3241;\r\n    text-decoration: none;\r\n    transition:0.2s;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color:#222;\r\n}\r\n\r\n.form-modal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left:10%;\r\n    top:50%;\r\n    transform:translateX(-10%) translateY(-50%);\r\n    align-self: center;\r\n}\r\n\r\n.fa-google[_ngcontent-%COMP%]{\r\n    color:#dd4b39;\r\n}\r\n\r\n.fa-facebook-official[_ngcontent-%COMP%]{\r\n    color:#3b5998;\r\n}\r\n\r\n.-box-sd-effect[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 2px 4px 4px #dd4b39\r\n}\r\n\r\n.w-45[_ngcontent-%COMP%]{\r\n    width:45%;\r\n}\r\n\r\n.w-100[_ngcontent-%COMP%]{\r\n    width:100%\r\n}\r\n\r\n.ml3[_ngcontent-%COMP%]{\r\n    margin-left: 3%;\r\n}\r\n\r\n.ml5[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n}\r\n\r\n@media only screen and (max-width:600px){\r\n    .form-modal[_ngcontent-%COMP%]{\r\n        width:100%;\r\n    }\r\n}\r\n\r\n#login-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n     width: 10%;\r\n     margin-left: 45%;\r\n     animation: hu__hu__ 1 2s ease-in-out\r\n}\r\n\r\n@keyframes hu__hu__ {\r\n    25% { transform: translateY(-10px) }\r\n    50% { transform: translateY(10px) }\r\n    75% { transform: translateY(-10px) }\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover{\r\n    animation: rotation 5s 1 linear;\r\n}\r\n\r\n@keyframes rotation {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(359deg);\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width:600px){\r\n    i[_ngcontent-%COMP%]{\r\n        display: none!important;\r\n    }\r\n}\r\n\r\n#submitBtn[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    margin-top:0.5em;\r\n    padding:0.6em;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n\r\n  background-color: indianred;\r\n\r\n  background-image:\r\n    linear-gradient(white,white),\r\n    linear-gradient(white,white),\r\n    linear-gradient(white,white),\r\n    linear-gradient(white,white),\r\n    linear-gradient(white,white),\r\n    linear-gradient(white,white),\r\n    linear-gradient(white,white);\r\n\r\n  background-position:\r\n    calc(50% - 30px) 50%,\r\n    calc(50% - 20px) 50%,\r\n    calc(50% - 10px) 50%,\r\n    50% 50%,\r\n    calc(50% + 10px) 50%,\r\n    calc(50% + 20px) 50%,\r\n    calc(50% + 30px) 50%;\r\n\r\n  background-size:\r\n    5px 10px,\r\n    5px 10px,\r\n    5px 10px,\r\n    5px 10px,\r\n    5px 10px,\r\n    5px 10px,\r\n    5px 10px;\r\n  background-repeat: no-repeat;\r\n\r\n  animation: l-bars 1s linear infinite alternate;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0RBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCwyQ0FBMkM7SUFDM0Msa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUNBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtLQUNLLFVBQVU7S0FDVixnQkFBZ0I7S0FDaEI7QUFDTDs7QUFDQTtJQUNJLE1BQU0sNkJBQTZCO0lBQ25DLE1BQU0sNEJBQTRCO0lBQ2xDLE1BQU0sNkJBQTZCO0FBQ3ZDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGOztBQUNGO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosMkJBQTJCOztFQUUzQjs7Ozs7OztnQ0FPOEI7O0VBRTlCOzs7Ozs7O3dCQU9zQjs7RUFFdEI7Ozs7Ozs7WUFPVTtFQUNWLDRCQUE0Qjs7RUFFNUIsOENBQThDO0FBQ2hEIiwiZmlsZSI6ImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hZG1pbi9sb2dpbi9iYWNrLmpwZWdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLW1vZGFse1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6NDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6MCA1cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZvcm0tbW9kYWwgYnV0dG9ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERTMyNDE7XHJcbiAgICB0cmFuc2l0aW9uOjAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLW1vZGFsIC5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6MC44ZW0gMWVtIDAuOGVtIDFlbSFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICBtYXJnaW4tYm90dG9tOjdweDtcclxuICAgIG1hcmdpbi10b3A6N3B4O1xyXG59XHJcblxyXG4uZm9ybS1tb2RhbCAubG9naW4gLCAuZm9ybS1tb2RhbCAuc2lnbnVwe1xyXG4gICAgYmFja2dyb3VuZDojREUzMjQxO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmZvcm0tbW9kYWwgLmxvZ2luOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IzIyMjtcclxufVxyXG5cclxuLmZvcm0tdG9nZ2xlIGJ1dHRvbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmZvcm0tdG9nZ2xlIGJ1dHRvbjpudGgtY2hpbGQoMSksIC5mb3JtLXRvZ2dsZSBidXR0b246bnRoLWNoaWxkKDIpe1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4jbG9naW4tdG9nZ2xle1xyXG4gICAgYmFja2dyb3VuZDojREUzMjQxO1xyXG4gICAgY29sb3I6I2ZmZmY7XHJcbn1cclxuXHJcbi5mb3JtLW1vZGFsIGZvcm17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uZm9ybS1tb2RhbCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6MC42ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOjAuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbn1cclxuXHJcbi5mb3JtLW1vZGFsIGlucHV0OmZvY3VzICwgLmZvcm0tbW9kYWwgaW5wdXQ6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlWCgxLjAzKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZTMyNDBjOTtcclxufVxyXG5cclxuLmZvcm0tbW9kYWwgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjpyZ2IoOTksIDk4LCA5OCk7XHJcbn1cclxuXHJcbi5mb3JtLW1vZGFsIHB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tbW9kYWwgcCBhe1xyXG4gICAgY29sb3I6I0RFMzI0MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246MC4ycztcclxufVxyXG5cclxuLmZvcm0tbW9kYWwgcCBhOmhvdmVye1xyXG4gICAgY29sb3I6IzIyMjtcclxufVxyXG5cclxuLmZvcm0tbW9kYWwgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwJTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZmEtZ29vZ2xle1xyXG4gICAgY29sb3I6I2RkNGIzOTtcclxufVxyXG5cclxuLmZhLWZhY2Vib29rLW9mZmljaWFse1xyXG4gICAgY29sb3I6IzNiNTk5ODtcclxufVxyXG5cclxuLi1ib3gtc2QtZWZmZWN0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2RkNGIzOVxyXG59XHJcblxyXG4udy00NXtcclxuICAgIHdpZHRoOjQ1JTtcclxufVxyXG4udy0xMDB7XHJcbiAgICB3aWR0aDoxMDAlXHJcbn1cclxuXHJcbi5tbDN7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuLm1sNXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC5mb3JtLW1vZGFse1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNsb2dpbi1mb3JtIGltZ3tcclxuICAgICB3aWR0aDogMTAlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgICAgYW5pbWF0aW9uOiBodV9faHVfXyAxIDJzIGVhc2UtaW4tb3V0XHJcbn1cclxuQGtleWZyYW1lcyBodV9faHVfXyB7XHJcbiAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSB9XHJcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIH1cclxufVxyXG5cclxuaW1nOmhvdmVye1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiA1cyAxIGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgaXtcclxuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuI3N1Ym1pdEJ0biB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDowLjVlbTtcclxuICAgIHBhZGRpbmc6MC42ZW07XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KHdoaXRlLHdoaXRlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCh3aGl0ZSx3aGl0ZSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHdoaXRlLHdoaXRlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCh3aGl0ZSx3aGl0ZSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHdoaXRlLHdoaXRlKTtcclxuXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpcclxuICAgIGNhbGMoNTAlIC0gMzBweCkgNTAlLFxyXG4gICAgY2FsYyg1MCUgLSAyMHB4KSA1MCUsXHJcbiAgICBjYWxjKDUwJSAtIDEwcHgpIDUwJSxcclxuICAgIDUwJSA1MCUsXHJcbiAgICBjYWxjKDUwJSArIDEwcHgpIDUwJSxcclxuICAgIGNhbGMoNTAlICsgMjBweCkgNTAlLFxyXG4gICAgY2FsYyg1MCUgKyAzMHB4KSA1MCU7XHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTpcclxuICAgIDVweCAxMHB4LFxyXG4gICAgNXB4IDEwcHgsXHJcbiAgICA1cHggMTBweCxcclxuICAgIDVweCAxMHB4LFxyXG4gICAgNXB4IDEwcHgsXHJcbiAgICA1cHggMTBweCxcclxuICAgIDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIGFuaW1hdGlvbjogbC1iYXJzIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "XyzB":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/user layout/author/user-author-index/user-author-index.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UserAuthorIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthorIndexComponent", function() { return UserAuthorIndexComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authors-service.service */ "IpQU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["search_box"];
function UserAuthorIndexComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-loading");
} }
function UserAuthorIndexComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/user/author/", author_r5.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", author_r5.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](author_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", author_r5.id.toString());
} }
function UserAuthorIndexComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserAuthorIndexComponent_div_11_div_1_Template, 13, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.authors);
} }
function UserAuthorIndexComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAuthorIndexComponent_section_12_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAuthorIndexComponent_section_12_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.pageNumber);
} }
class UserAuthorIndexComponent {
    constructor(authorService) {
        this.authorService = authorService;
        this.keywords = '';
        this.lastSearchContent = '';
        this.search = false;
        this.isLoad = false;
        this.authorId = 0;
        this.pageNumber = 1;
        this.allPagesCount = -1;
        this.pages = new Array(1);
        this.data = this.authorId;
        this.loading = false;
    }
    ngOnInit() {
        this.isLoad = true;
        this.getAuthors(1);
    }
    getAuthors(page) {
        this.subscriber = this.authorService.pagination(page).subscribe((res) => {
            this.authors = res.body.authors;
            this.allPagesCount = res.body.pages;
            console.log(this.allPagesCount);
            this.pages = new Array(this.allPagesCount);
            this.loading = true;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error getting authors information !',
                footer: ''
            });
        });
    }
    captureSearchContent(page = 1) {
        this.pageNumber = page;
        this.search = true;
        this.lastSearchContent = this.keywords = this.searchBox.nativeElement.value;
        this.filter(this.lastSearchContent, page);
    }
    filter(searchContent, page) {
        this.subscriber = this.authorService.search(searchContent, page).subscribe((res) => {
            this.authors = res.body.authors;
            this.allPagesCount = res.body.pages;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error, Can\'t get search results',
                footer: ''
            });
        });
    }
    sendID(id) {
        this.authorService.sendID(id);
        console.log('id from index' + id);
    }
    prev() {
        if (!this.search && this.pageNumber > 1) {
            this.getAuthors(--this.pageNumber);
        }
        else if (this.search) {
            this.filter(this.lastSearchContent, --this.pageNumber);
        }
    }
    next() {
        if (!this.search && this.pageNumber < this.allPagesCount) {
            this.getAuthors(++this.pageNumber);
        }
        else if (this.search) {
            this.filter(this.lastSearchContent, ++this.pageNumber);
        }
    }
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
}
UserAuthorIndexComponent.ɵfac = function UserAuthorIndexComponent_Factory(t) { return new (t || UserAuthorIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthorsServiceService"])); };
UserAuthorIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserAuthorIndexComponent, selectors: [["app-user-author-index"]], viewQuery: function UserAuthorIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchBox = _t.first);
    } }, decls: 13, vars: 3, consts: [[4, "ngIf"], [1, "author-search"], [1, "input-group", "m-auto", "w-40"], [1, "form-outline", "w-90"], ["type", "search", "placeholder", "Search", 1, "form-control"], ["search_box", ""], ["id", "search-button", "type", "button", 1, "btn", "search-btn", 3, "click"], [1, "fas", "fa-search"], [1, "authors"], [1, "container"], ["class", "row", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [1, "row"], ["class", "col-lg-3 col-sm-6 col-8 col-xxs-10", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-6", "col-8", "col-xxs-10"], [1, "author", "text-center", "p-3"], ["onerror", "this.onerror=null; this.src='/assets/user/author/author-1.jpg'", 1, "author-image", 3, "src", "alt"], [1, "big-cir"], [1, "small-cir"], [1, "small-cir2"], [1, "small-cir3"], [1, "triangle", "t-top-left"], [1, "triangle", "t-bottom-right"], [1, "mb-4", "mt-4"], [1, "btn", "btn-dark", 3, "routerLink"], [1, "pagination-section"], ["aria-label", "Page navigation example"], [1, "pagination", "w-50"], [1, "page-item"], [1, "", 3, "click"], [1, "fas", "fa-chevron-circle-left", "fa-2x"], [1, ""], [1, "fas", "fa-chevron-circle-right", "fa-2x"]], template: function UserAuthorIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserAuthorIndexComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAuthorIndexComponent_Template_button_click_7_listener() { return ctx.captureSearchContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserAuthorIndexComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserAuthorIndexComponent_section_12_Template, 14, 1, "section", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allPagesCount > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_4__["NavUserComponent"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_5__["UserLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n.author-search[_ngcontent-%COMP%] {\r\n  margin-top: 6%;\r\n}\r\n.w-40[_ngcontent-%COMP%]{ width:40% }\r\n.w-90[_ngcontent-%COMP%]{ width:90% }\r\n.author-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\r\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\r\n}\r\n.author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  color: white;\r\n}\r\n\r\n.authors[_ngcontent-%COMP%] {\r\n  margin-top: 3%;\r\n  margin-bottom: 50px;\r\n}\r\n.authors[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n.author[_ngcontent-%COMP%] {\r\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\r\n  border-radius: 10px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n  background-color: #F5F5F5;\r\n}\r\n.author-image[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  top: 8%;\r\n  left: 25%;\r\n  position: absolute;\r\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\r\n}\r\n.author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n}\r\n.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent;\r\n  color: black;\r\n  border: 1px black solid;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.big-cir[_ngcontent-%COMP%] {\r\n  left: 18%;\r\n  height: 170px;\r\n  width: 170px;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  border-color: #000000;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  animation: dotmove cubic-bezier(1,0,0,1) 2s infinite;\r\n  z-index: 1;\r\n}\r\n.big-cir[_ngcontent-%COMP%]    > .small-cir[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  border-color: #de3242;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  padding: 5px;\r\n  left: 35px;\r\n}\r\n.big-cir[_ngcontent-%COMP%]    > .small-cir2[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  border-color: #de3242;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  padding: 5px;\r\n  left: 140px;\r\n  top: 130px;\r\n}\r\n.big-cir[_ngcontent-%COMP%]    > .small-cir3[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  border-color: #de3242;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  padding: 5px;\r\n  left: 125px;\r\n  top: 5px;\r\n}\r\n.client-image[_ngcontent-%COMP%] {\r\n  margin-top: -230px;\r\n  margin-left: 10px;\r\n}\r\n@keyframes dotmove {\r\n  from {\r\n    transform: rotate(360deg);\r\n  }\r\n  to {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n.triangle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  color: #de3242;\r\n}\r\n.t-top-left[_ngcontent-%COMP%] {\r\n  top: 5%;\r\n  left: 12%;\r\n  border-top: 50px solid transparent;\r\n  border-left: 75px solid rgba(222, 50, 66, 0.4);\r\n  border-bottom: 50px solid transparent;\r\n  transform: rotate(260deg);\r\n}\r\n.t-bottom-right[_ngcontent-%COMP%] {\r\n  border-top: 50px solid transparent;\r\n  border-left: 75px solid rgba(0, 0, 0, 0.4);\r\n  border-bottom: 50px solid transparent;\r\n  transform: rotate(70deg);\r\n  top: 28%;\r\n  right: 12%;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  justify-content: center;\r\n}\r\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  margin-top: -5px;\r\n  color: #de3242;\r\n}\r\n\r\n@media only screen and (max-width: 1400px) {\r\n  .t-bottom-right[_ngcontent-%COMP%]{right: 6%;}\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n  .author-image[_ngcontent-%COMP%]{left: 16%;}\r\n\r\n  .big-cir[_ngcontent-%COMP%]  {left: 6%;}\r\n\r\n  .t-bottom-right[_ngcontent-%COMP%]{right: 4%;}\r\n\r\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\r\n\r\n  .author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {font-size: 1.2em;}\r\n\r\n  .author-search[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{width: 60%;}\r\n}\r\n@media only screen and (max-width: 990px) {\r\n  .author-image[_ngcontent-%COMP%]{left: 25%;}\r\n\r\n  .big-cir[_ngcontent-%COMP%]  {left: 20%;}\r\n\r\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\r\n\r\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\r\n\r\n}\r\n@media only screen and (max-width: 780px) {\r\n  .author-image[_ngcontent-%COMP%]{left: 18%;}\r\n\r\n  .big-cir[_ngcontent-%COMP%]  {left: 10%;}\r\n\r\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\r\n\r\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\r\n\r\n  .author-search[_ngcontent-%COMP%] {margin-top: 12%;}\r\n\r\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{width: 95%;}\r\n}\r\n@media only screen and (max-width: 575px) {\r\n  .author-image[_ngcontent-%COMP%]{left: 25%;}\r\n\r\n  .big-cir[_ngcontent-%COMP%]  {left: 18%;}\r\n\r\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\r\n\r\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\r\n\r\n  .author-search[_ngcontent-%COMP%] {margin-top: 18%;}\r\n\r\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{width: 100%;justify-content: center}\r\n\r\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-outline[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n  }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .author-image[_ngcontent-%COMP%]{left: 20%;}\r\n\r\n  .big-cir[_ngcontent-%COMP%]  {left: 12%;}\r\n\r\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\r\n\r\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYXV0aG9yLWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxPQUFPLFVBQVU7QUFDakIsT0FBTyxVQUFVO0FBQ2pCOztFQUVFO3FDQUNtQztBQUNyQztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBLGtCQUFrQjtBQUVsQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usc0dBQXNHO0VBQ3RHLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHNHQUFzRztBQUN4RztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsUUFBUTtBQUNWO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7QUFDaEI7QUFFQTtFQUNFLE9BQU87RUFDUCxTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLDhDQUE4QztFQUM5QyxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMENBQTBDO0VBQzFDLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQixTQUFTLENBQUM7QUFDNUI7QUFFQTtFQUNFLGNBQWMsU0FBUyxDQUFDOztFQUV4QixXQUFXLFFBQVEsQ0FBQzs7RUFFcEIsZ0JBQWdCLFNBQVMsQ0FBQzs7RUFFMUIsYUFBYSxRQUFRLENBQUM7O0VBRXRCLFdBQVcsZ0JBQWdCLENBQUM7O0VBRTVCO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUEsNEJBQTRCLFVBQVUsQ0FBQztBQUN6QztBQUVBO0VBQ0UsY0FBYyxTQUFTLENBQUM7O0VBRXhCLFdBQVcsU0FBUyxDQUFDOztFQUVyQixnQkFBZ0IsU0FBUyxDQUFDOztFQUUxQixhQUFhLFFBQVEsQ0FBQzs7QUFFeEI7QUFFQTtFQUNFLGNBQWMsU0FBUyxDQUFDOztFQUV4QixXQUFXLFNBQVMsQ0FBQzs7RUFFckIsZ0JBQWdCLFNBQVMsQ0FBQzs7RUFFMUIsYUFBYSxRQUFRLENBQUM7O0VBRXRCLGdCQUFnQixlQUFlLENBQUM7O0VBRWhDLDRCQUE0QixVQUFVLENBQUM7QUFDekM7QUFFQTtFQUNFLGNBQWMsU0FBUyxDQUFDOztFQUV4QixXQUFXLFNBQVMsQ0FBQzs7RUFFckIsZ0JBQWdCLFNBQVMsQ0FBQzs7RUFFMUIsYUFBYSxRQUFRLENBQUM7O0VBRXRCLGdCQUFnQixlQUFlLENBQUM7O0VBRWhDLDRCQUE0QixXQUFXLENBQUMsdUJBQXVCOztFQUUvRDtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxjQUFjLFNBQVMsQ0FBQzs7RUFFeEIsV0FBVyxTQUFTLENBQUM7O0VBRXJCLGdCQUFnQixTQUFTLENBQUM7O0VBRTFCLGFBQWEsUUFBUSxDQUFDO0FBQ3hCIiwiZmlsZSI6InVzZXItYXV0aG9yLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5hdXRob3Itc2VhcmNoIHtcclxuICBtYXJnaW4tdG9wOiA2JTtcclxufVxyXG4udy00MHsgd2lkdGg6NDAlIH1cclxuLnctOTB7IHdpZHRoOjkwJSB9XHJcbi5hdXRob3Itc2VhcmNoIGlucHV0LFxyXG4uYXV0aG9yLXNlYXJjaCBidXR0b24ge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKSxcclxuICAgIDAgNHB4IDVweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcclxufVxyXG5cclxuLmF1dGhvci1zZWFyY2ggYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKkF1dGhvcnMgU2VjdGlvbiovXHJcblxyXG4uYXV0aG9ycyB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmF1dGhvcnMgLnJvdyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5hdXRob3ItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogOCU7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5hdXRob3IgcCB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmF1dGhvciBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5iaWctY2lyIHtcclxuICBsZWZ0OiAxOCU7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBhbmltYXRpb246IGRvdG1vdmUgY3ViaWMtYmV6aWVyKDEsMCwwLDEpIDJzIGluZmluaXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5iaWctY2lyID4gLnNtYWxsLWNpciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2RlMzI0MjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsZWZ0OiAzNXB4O1xyXG59XHJcblxyXG4uYmlnLWNpciA+IC5zbWFsbC1jaXIyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGUzMjQyO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxlZnQ6IDE0MHB4O1xyXG4gIHRvcDogMTMwcHg7XHJcbn1cclxuXHJcbi5iaWctY2lyID4gLnNtYWxsLWNpcjMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItY29sb3I6ICNkZTMyNDI7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbGVmdDogMTI1cHg7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jbGllbnQtaW1hZ2Uge1xyXG4gIG1hcmdpbi10b3A6IC0yMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBkb3Rtb3ZlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLnRyaWFuZ2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjZGUzMjQyO1xyXG59XHJcblxyXG4udC10b3AtbGVmdCB7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiAxMiU7XHJcbiAgYm9yZGVyLXRvcDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogNzVweCBzb2xpZCByZ2JhKDIyMiwgNTAsIDY2LCAwLjQpO1xyXG4gIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjYwZGVnKTtcclxufVxyXG5cclxuLnQtYm90dG9tLXJpZ2h0IHtcclxuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiA3NXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcclxuICB0b3A6IDI4JTtcclxuICByaWdodDogMTIlO1xyXG59XHJcblxyXG4vKlBhZ2luYXRpb24gU2VjdGlvbiovXHJcbi5wYWdpbmF0aW9ue1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gbGkge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gbGkgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gbGkgYSBzdmcge1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgY29sb3I6ICNkZTMyNDI7XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNZWRpYSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgLnQtYm90dG9tLXJpZ2h0e3JpZ2h0OiA2JTt9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmF1dGhvci1pbWFnZXtsZWZ0OiAxNiU7fVxyXG5cclxuICAuYmlnLWNpciAge2xlZnQ6IDYlO31cclxuXHJcbiAgLnQtYm90dG9tLXJpZ2h0e3JpZ2h0OiA0JTt9XHJcblxyXG4gIC50LXRvcC1sZWZ0IHtsZWZ0OiA3JTt9XHJcblxyXG4gIC5hdXRob3IgcCB7Zm9udC1zaXplOiAxLjJlbTt9XHJcblxyXG4gIC5hdXRob3Itc2VhcmNoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3Vwe3dpZHRoOiA2MCU7fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgLmF1dGhvci1pbWFnZXtsZWZ0OiAyNSU7fVxyXG5cclxuICAuYmlnLWNpciAge2xlZnQ6IDIwJTt9XHJcblxyXG4gIC50LWJvdHRvbS1yaWdodHtyaWdodDogNyU7fVxyXG5cclxuICAudC10b3AtbGVmdCB7bGVmdDogNyU7fVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xyXG4gIC5hdXRob3ItaW1hZ2V7bGVmdDogMTglO31cclxuXHJcbiAgLmJpZy1jaXIgIHtsZWZ0OiAxMCU7fVxyXG5cclxuICAudC1ib3R0b20tcmlnaHR7cmlnaHQ6IDclO31cclxuXHJcbiAgLnQtdG9wLWxlZnQge2xlZnQ6IDclO31cclxuXHJcbiAgLmF1dGhvci1zZWFyY2gge21hcmdpbi10b3A6IDEyJTt9XHJcblxyXG4gIC5hdXRob3Itc2VhcmNoIC5pbnB1dC1ncm91cHt3aWR0aDogOTUlO31cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5hdXRob3ItaW1hZ2V7bGVmdDogMjUlO31cclxuXHJcbiAgLmJpZy1jaXIgIHtsZWZ0OiAxOCU7fVxyXG5cclxuICAudC1ib3R0b20tcmlnaHR7cmlnaHQ6IDclO31cclxuXHJcbiAgLnQtdG9wLWxlZnQge2xlZnQ6IDclO31cclxuXHJcbiAgLmF1dGhvci1zZWFyY2gge21hcmdpbi10b3A6IDE4JTt9XHJcblxyXG4gIC5hdXRob3Itc2VhcmNoIC5pbnB1dC1ncm91cHt3aWR0aDogMTAwJTtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcn1cclxuXHJcbiAgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3VwIC5mb3JtLW91dGxpbmV7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5hdXRob3ItaW1hZ2V7bGVmdDogMjAlO31cclxuXHJcbiAgLmJpZy1jaXIgIHtsZWZ0OiAxMiU7fVxyXG5cclxuICAudC1ib3R0b20tcmlnaHR7cmlnaHQ6IDclO31cclxuXHJcbiAgLnQtdG9wLWxlZnQge2xlZnQ6IDclO31cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_admin_layout_author_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/admin layout/author/index/index.component */ "/CnI");
/* harmony import */ var _modules_admin_layout_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/admin layout/shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _modules_admin_layout_author_store_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/admin layout/author/store/store.component */ "G09a");
/* harmony import */ var _modules_admin_layout_author_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/admin layout/author/delete/delete.component */ "ViJb");
/* harmony import */ var _modules_admin_layout_author_update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/admin layout/author/update/update.component */ "7JOT");
/* harmony import */ var _modules_admin_layout_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/admin layout/shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _modules_admin_layout_setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/admin layout/setting/setting.component */ "jfoX");
/* harmony import */ var _modules_user_layout_author_show_show_author_show_author_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/user layout/author/show/show-author/show-author.component */ "ao5n");
/* harmony import */ var _modules_user_layout_author_show_author_card_author_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/user layout/author/show/author-card/author-card.component */ "lVJd");
/* harmony import */ var _modules_user_layout_author_show_author_bookslist_author_bookslist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/user layout/author/show/author-bookslist/author-bookslist.component */ "DxB8");
/* harmony import */ var _modules_user_layout_author_show_author_book_author_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/user layout/author/show/author-book/author-book.component */ "o9c8");
/* harmony import */ var _modules_user_layout_author_user_author_index_user_author_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/user layout/author/user-author-index/user-author-index.component */ "XyzB");
/* harmony import */ var _modules_admin_layout_book_index_book_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/admin layout/book/index/book-index.component */ "F3ho");
/* harmony import */ var _modules_admin_layout_book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/admin layout/book/delete/book-delete.component */ "mUvC");
/* harmony import */ var _modules_admin_layout_book_update_book_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/admin layout/book/update/book-update.component */ "tU9N");
/* harmony import */ var _modules_admin_layout_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/admin layout/book/store/book-store.component */ "ETsY");
/* harmony import */ var _modules_user_layout_home_home_all_home_all_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/user layout/home/home-all/home-all.component */ "+fJ/");
/* harmony import */ var _modules_user_layout_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/user layout/home/header/home-header.component */ "JQwJ");
/* harmony import */ var _modules_user_layout_home_popular_book_home_popular_book_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/user layout/home/popular-book/home-popular-book.component */ "y+2T");
/* harmony import */ var _modules_user_layout_home_subscribe_home_subscribe_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/user layout/home/subscribe/home-subscribe.component */ "4SAU");
/* harmony import */ var _modules_user_layout_home_author_home_author_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/user layout/home/author/home-author.component */ "46cJ");
/* harmony import */ var _modules_user_layout_home_top_category_home_top_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/user layout/home/top-category/home-top-category.component */ "mSfS");
/* harmony import */ var _modules_user_layout_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/user layout/home/footer/home-footer.component */ "TUxq");
/* harmony import */ var _modules_admin_layout_category_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/admin layout/category/category-index/category-index.component */ "MMyg");
/* harmony import */ var _modules_admin_layout_category_category_store_category_store_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/admin layout/category/category-store/category-store.component */ "GZWh");
/* harmony import */ var _modules_admin_layout_category_category_update_category_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/admin layout/category/category-update/category-update.component */ "Kkkl");
/* harmony import */ var _modules_admin_layout_category_category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/admin layout/category/category-delete/category-delete.component */ "Qujb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modules_admin_layout_author_authors_list_for_admin_authors_list_for_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/admin layout/author/authors-list-for-admin/authors-list-for-admin.component */ "rZtP");
/* harmony import */ var _modules_admin_layout_book_main_admin_main_book_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/admin layout/book/main/admin-main-book.component */ "FgoS");
/* harmony import */ var _modules_user_layout_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/user layout/shared/footer/footer.component */ "qL8W");
/* harmony import */ var _modules_user_layout_access_login_register_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modules/user layout/access/login-register.component */ "omQl");
/* harmony import */ var _modules_user_layout_terms_terms_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modules/user layout/terms/terms.component */ "khJe");
/* harmony import */ var _modules_user_layout_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/user layout/shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _modules_user_layout_book_book_det_book_det_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/user layout/book/book-det/book-det.component */ "rUEV");
/* harmony import */ var _modules_admin_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/admin layout/dashboard/dashboard.component */ "jHFM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _modules_user_layout_user_profile_index_user_profile_index_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/user layout/user-profile/index/user-profile-index.component */ "fO1k");
/* harmony import */ var _modules_user_layout_user_profile_header_user_profile_header_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modules/user layout/user-profile/header/user-profile-header.component */ "LFVM");
/* harmony import */ var _modules_user_layout_user_profile_side_menu_user_profile_side_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./modules/user layout/user-profile/side-menu/user-profile-side.component */ "f6kv");
/* harmony import */ var _modules_user_layout_user_profile_pagination_user_profile_pagination_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./modules/user layout/user-profile/pagination/user-profile-pagination.component */ "03wz");
/* harmony import */ var _modules_user_layout_user_profile_cards_user_profile_cards_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./modules/user layout/user-profile/cards/user-profile-cards.component */ "CY+G");
/* harmony import */ var _modules_user_layout_book_user_book_index_user_book_index_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modules/user layout/book/user-book-index/user-book-index.component */ "hLC1");
/* harmony import */ var _modules_user_layout_category_user_category_index_user_category_index_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modules/user layout/category/user-category-index/user-category-index.component */ "ImBr");
/* harmony import */ var _modules_user_layout_category_user_category_sidebar_user_category_sidebar_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./modules/user layout/category/user-category-sidebar/user-category-sidebar.component */ "G7Ye");
/* harmony import */ var _modules_user_layout_category_user_category_header_user_category_header_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./modules/user layout/category/user-category-header/user-category-header.component */ "bdQi");
/* harmony import */ var _modules_user_layout_category_user_category_books_user_category_books_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./modules/user layout/category/user-category-books/user-category-books.component */ "Kpfp");
/* harmony import */ var _modules_user_layout_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./modules/user layout/about-us/about-us.component */ "h/UE");
/* harmony import */ var _modules_user_layout_about_us_about_header_about_header_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./modules/user layout/about-us/about-header/about-header.component */ "mm1a");
/* harmony import */ var _modules_user_layout_about_us_about_mission_about_mission_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./modules/user layout/about-us/about-mission/about-mission.component */ "euvg");
/* harmony import */ var _modules_user_layout_about_us_about_why_choose_us_about_why_choose_us_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./modules/user layout/about-us/about-why-choose-us/about-why-choose-us.component */ "gByw");
/* harmony import */ var _modules_admin_layout_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./modules/admin layout/admin-login/admin-login.component */ "WpqI");
/* harmony import */ var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./modules/not-found/not-found.component */ "1NIu");
/* harmony import */ var _pipes_concate_name_pipe__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pipes/concate-name.pipe */ "HNuO");
/* harmony import */ var _modules_user_layout_book_rating_det_rating_det_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./modules/user layout/book/rating-det/rating-det.component */ "/r+5");
/* harmony import */ var _modules_admin_layout_route_admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./modules/admin layout/route/admin-routing/admin-routing.module */ "4Fz0");
/* harmony import */ var _modules_user_layout_user_routing_user_routing_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./modules/user layout/user-routing/user-routing.module */ "Cg11");
/* harmony import */ var _pipes_average_pipe__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pipes/average.pipe */ "cgzm");
/* harmony import */ var _pipes_sum_pipe__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pipes/sum.pipe */ "AmwC");
/* harmony import */ var _modules_shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./modules/shared/empty/empty.component */ "CH8H");
/* harmony import */ var _modules_user_layout_shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./modules/user layout/shared/user-loading/user-loading.component */ "qyV3");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/common */ "ofXK");






































































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
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵdefineInjector"]({ providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_65__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_65__["GoogleLoginProvider"]("464610881896-l2coufs0u4oe7i5rll63k833ijf2o3rt.apps.googleusercontent.com")
                    }
                ]
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
            _modules_admin_layout_route_admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_59__["AdminRoutingModule"],
            _modules_user_layout_user_routing_user_routing_module__WEBPACK_IMPORTED_MODULE_60__["UserRoutingModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_65__["SocialLoginModule"]
            /*AngularFireModule.initializeApp({
              apiKey: "AIzaSyD0i1yATiiDS4BxkMiPlvYJ8qy0T1Ai6Co",
              authDomain: "tbooks-9e855.firebaseapp.com",
              projectId: "tbooks-9e855",
              storageBucket: "tbooks-9e855.appspot.com",
              messagingSenderId: "43736950350",
              appId: "1:43736950350:web:bb29d541a23df55f64851f"
            })*/
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _modules_admin_layout_author_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        _modules_admin_layout_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _modules_admin_layout_author_store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"],
        _modules_admin_layout_author_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["DeleteComponent"],
        _modules_admin_layout_author_update_update_component__WEBPACK_IMPORTED_MODULE_7__["UpdateComponent"],
        _modules_admin_layout_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_8__["NavbarAdminComponent"],
        _modules_admin_layout_setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"],
        _modules_user_layout_author_show_show_author_show_author_component__WEBPACK_IMPORTED_MODULE_10__["ShowAuthorComponent"],
        _modules_user_layout_author_show_author_card_author_card_component__WEBPACK_IMPORTED_MODULE_11__["AuthorCardComponent"],
        _modules_user_layout_author_show_author_bookslist_author_bookslist_component__WEBPACK_IMPORTED_MODULE_12__["AuthorBookslistComponent"],
        _modules_user_layout_author_show_author_book_author_book_component__WEBPACK_IMPORTED_MODULE_13__["AuthorBookComponent"],
        _modules_user_layout_author_user_author_index_user_author_index_component__WEBPACK_IMPORTED_MODULE_14__["UserAuthorIndexComponent"],
        _modules_admin_layout_book_index_book_index_component__WEBPACK_IMPORTED_MODULE_15__["BookIndexComponent"],
        _modules_admin_layout_book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_16__["BookDeleteComponent"],
        _modules_admin_layout_book_update_book_update_component__WEBPACK_IMPORTED_MODULE_17__["BookUpdateComponent"],
        _modules_admin_layout_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_18__["BookStoreComponent"],
        _modules_user_layout_home_home_all_home_all_component__WEBPACK_IMPORTED_MODULE_19__["HomeAllComponent"],
        _modules_user_layout_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_20__["HomeHeaderComponent"],
        _modules_user_layout_home_popular_book_home_popular_book_component__WEBPACK_IMPORTED_MODULE_21__["HomePopularBookComponent"],
        _modules_user_layout_home_subscribe_home_subscribe_component__WEBPACK_IMPORTED_MODULE_22__["HomeSubscribeComponent"],
        _modules_user_layout_home_author_home_author_component__WEBPACK_IMPORTED_MODULE_23__["HomeAuthorComponent"],
        _modules_user_layout_home_top_category_home_top_category_component__WEBPACK_IMPORTED_MODULE_24__["HomeTopCategoryComponent"],
        _modules_user_layout_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_25__["HomeFooterComponent"],
        _modules_admin_layout_category_category_index_category_index_component__WEBPACK_IMPORTED_MODULE_26__["CategoryIndexComponent"],
        _modules_admin_layout_category_category_store_category_store_component__WEBPACK_IMPORTED_MODULE_27__["CategoryStoreComponent"],
        _modules_admin_layout_category_category_update_category_update_component__WEBPACK_IMPORTED_MODULE_28__["CategoryUpdateComponent"],
        _modules_admin_layout_category_category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_29__["CategoryDeleteComponent"],
        _modules_user_layout_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_37__["NavUserComponent"],
        _modules_user_layout_book_book_det_book_det_component__WEBPACK_IMPORTED_MODULE_38__["BookDetComponent"],
        _modules_admin_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_39__["DashboardComponent"],
        _modules_user_layout_user_profile_index_user_profile_index_component__WEBPACK_IMPORTED_MODULE_41__["UserProfileIndexComponent"],
        _modules_user_layout_user_profile_header_user_profile_header_component__WEBPACK_IMPORTED_MODULE_42__["UserProfileHeaderComponent"],
        _modules_user_layout_user_profile_side_menu_user_profile_side_component__WEBPACK_IMPORTED_MODULE_43__["UserProfileSideComponent"],
        _modules_user_layout_user_profile_pagination_user_profile_pagination_component__WEBPACK_IMPORTED_MODULE_44__["UserProfilePaginationComponent"],
        _modules_user_layout_user_profile_cards_user_profile_cards_component__WEBPACK_IMPORTED_MODULE_45__["UserProfileCardsComponent"],
        _modules_user_layout_book_user_book_index_user_book_index_component__WEBPACK_IMPORTED_MODULE_46__["UserBookIndexComponent"],
        _modules_user_layout_category_user_category_index_user_category_index_component__WEBPACK_IMPORTED_MODULE_47__["UserCategoryIndexComponent"],
        _modules_user_layout_category_user_category_sidebar_user_category_sidebar_component__WEBPACK_IMPORTED_MODULE_48__["UserCategorySidebarComponent"],
        _modules_user_layout_category_user_category_header_user_category_header_component__WEBPACK_IMPORTED_MODULE_49__["UserCategoryHeaderComponent"],
        _modules_user_layout_category_user_category_books_user_category_books_component__WEBPACK_IMPORTED_MODULE_50__["UserCategoryBooksComponent"],
        _modules_user_layout_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_51__["AboutUsComponent"],
        _modules_user_layout_about_us_about_header_about_header_component__WEBPACK_IMPORTED_MODULE_52__["AboutHeaderComponent"],
        _modules_user_layout_about_us_about_mission_about_mission_component__WEBPACK_IMPORTED_MODULE_53__["AboutMissionComponent"],
        _modules_user_layout_about_us_about_why_choose_us_about_why_choose_us_component__WEBPACK_IMPORTED_MODULE_54__["AboutWhyChooseUsComponent"],
        _modules_admin_layout_book_main_admin_main_book_component__WEBPACK_IMPORTED_MODULE_33__["AdminMainBookComponent"],
        _modules_admin_layout_author_authors_list_for_admin_authors_list_for_admin_component__WEBPACK_IMPORTED_MODULE_32__["AuthorsListForAdminComponent"],
        _modules_user_layout_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_37__["NavUserComponent"],
        _modules_user_layout_book_book_det_book_det_component__WEBPACK_IMPORTED_MODULE_38__["BookDetComponent"],
        _modules_admin_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_39__["DashboardComponent"],
        _modules_user_layout_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__["FooterComponent"],
        _modules_user_layout_access_login_register_component__WEBPACK_IMPORTED_MODULE_35__["LoginRegisterComponent"],
        _modules_user_layout_terms_terms_component__WEBPACK_IMPORTED_MODULE_36__["TermsComponent"],
        _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_56__["NotFoundComponent"],
        _pipes_concate_name_pipe__WEBPACK_IMPORTED_MODULE_57__["ConcateNamePipe"],
        _modules_admin_layout_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_55__["AdminLoginComponent"],
        _modules_user_layout_book_rating_det_rating_det_component__WEBPACK_IMPORTED_MODULE_58__["RatingDetComponent"],
        _pipes_average_pipe__WEBPACK_IMPORTED_MODULE_61__["AveragePipe"],
        _pipes_sum_pipe__WEBPACK_IMPORTED_MODULE_62__["SumPipe"],
        _modules_shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_63__["EmptyComponent"],
        _modules_user_layout_shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_64__["UserLoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
        _modules_admin_layout_route_admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_59__["AdminRoutingModule"],
        _modules_user_layout_user_routing_user_routing_module__WEBPACK_IMPORTED_MODULE_60__["UserRoutingModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_65__["SocialLoginModule"]
        /*AngularFireModule.initializeApp({
          apiKey: "AIzaSyD0i1yATiiDS4BxkMiPlvYJ8qy0T1Ai6Co",
          authDomain: "tbooks-9e855.firebaseapp.com",
          projectId: "tbooks-9e855",
          storageBucket: "tbooks-9e855.appspot.com",
          messagingSenderId: "43736950350",
          appId: "1:43736950350:web:bb29d541a23df55f64851f"
        })*/
    ], exports: [_pipes_concate_name_pipe__WEBPACK_IMPORTED_MODULE_57__["ConcateNamePipe"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵsetComponentScope"](_modules_admin_layout_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_18__["BookStoreComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_67__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_67__["NgForOf"], _modules_admin_layout_book_index_book_index_component__WEBPACK_IMPORTED_MODULE_15__["BookIndexComponent"]], []);


/***/ }),

/***/ "ao5n":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/user layout/author/show/show-author/show-author.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ShowAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthorComponent", function() { return ShowAuthorComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authors-service.service */ "IpQU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/user-loading/user-loading.component */ "qyV3");
/* harmony import */ var _pipes_average_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../pipes/average.pipe */ "cgzm");









function ShowAuthorComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-loading");
} }
function ShowAuthorComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "average");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowAuthorComponent_div_14_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const authorBook_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.changeBookStatus("1", authorBook_r2._id, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Want to read");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowAuthorComponent_div_14_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const authorBook_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.changeBookStatus("2", authorBook_r2._id, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Is currently reading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowAuthorComponent_div_14_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const authorBook_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.changeBookStatus("3", authorBook_r2._id, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Finished reading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorBook_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/user/book/", authorBook_r2.bookImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", authorBook_r2.bookName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authorBook_r2.bookName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.ratings.length, " Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 6, ctx_r1.ratings));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.bookStatus[i_r3], " ");
} }
class ShowAuthorComponent {
    constructor(authorService, myActivatedRoute, router, userService) {
        this.authorService = authorService;
        this.myActivatedRoute = myActivatedRoute;
        this.router = router;
        this.userService = userService;
        this.ratings = [1, 2, 3, 4, 5, 3];
        this.bookStatus = [];
        this.loading = false;
        this.authorID = this.myActivatedRoute.snapshot.params.id;
        this.userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : '605a0532ba76f47a7793e130';
    }
    ngOnInit() {
        this.getAuthorById();
    }
    getAuthorById() {
        this.authorService.show(this.authorID).subscribe((res) => {
            this.author = res;
            this.loading = true;
            this.readBookStatus(this.author.books);
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error getting Author information !',
                footer: ''
            });
        });
    }
    changeBookStatus(type, bookId, index) {
        this.loading = false;
        this.userSubscriber = this.userService.updateUserBookList({ userId: this.userId, bookId: bookId, type: type })
            .subscribe((response) => {
            if (type == '1') {
                this.bookStatus[index] = 'Is currant read';
            }
            else if (type == '2') {
                this.bookStatus[index] = 'Want to read';
            }
            else if (type == '3') {
                this.bookStatus[index] = 'Finished reading';
            }
            this.ngOnInit();
            this.loading = true;
        }, (err) => {
            console.log(err);
        });
    }
    readBookStatus(books) {
        for (let i = 0; i < books.length; i++) {
            if (books[i].currentlyReader && books[i].currentlyReader.find((element) => element == this.userId)) {
                this.bookStatus[i] = 'Is currant read';
            }
            else if (books[i].wantToReadeUsers && books[i].wantToReadeUsers.find((element) => element == this.userId)) {
                this.bookStatus[i] = 'Want to read';
            }
            else if (books[i].finishReadUsers && books[i].finishReadUsers.find((element) => element == this.userId)) {
                this.bookStatus[i] = 'Finished reading';
            }
            else {
                this.bookStatus[i] = "Add to my list";
            }
        }
    }
}
ShowAuthorComponent.ɵfac = function ShowAuthorComponent_Factory(t) { return new (t || ShowAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthorsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
ShowAuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowAuthorComponent, selectors: [["app-show-author"]], decls: 15, vars: 8, consts: [[4, "ngIf"], [1, "myCard"], [1, "box-part", "text-center", "px-3"], [3, "src", "alt"], [1, "title"], [1, "text"], [1, "myBooks"], ["class", "main authorBook", 4, "ngFor", "ngForOf"], [1, "main", "authorBook"], [1, "image"], [1, "info1"], [2, "color", "black"], [1, "fas", "fa-star", 2, "color", "rgb(255, 60, 0)", "margin-left", "5px"], [1, "far", "fa-star", 2, "color", "rgb(255, 60, 0)", "margin-left", "5px"], [1, "far", "fa-star", 2, "color", "rgb(255, 60, 0)"], [1, "info2", "w-25"], [2, "margin-left", "120px", "font-size", "larger"], [2, "display", "inline"], [1, "fas", "fa-star", 2, "color", "red", "margin-left", "5px"], [1, "dropdown", 2, "margin-top", "90px", "margin-left", "35px"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"]], template: function ShowAuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowAuthorComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ShowAuthorComponent_div_14_Template, 29, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/user/author/", ctx.author.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", ctx.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, ctx.author.birthDay), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.author.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_6__["NavUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_7__["UserLoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _pipes_average_pipe__WEBPACK_IMPORTED_MODULE_8__["AveragePipe"]], styles: [".myCard[_ngcontent-%COMP%] {\r\n    width: 322px;\r\n    float: left;\r\n    margin-left: 120px;\r\n    margin-top: 100px;\r\n}\r\n\r\n.myBooks[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    float: left;\r\n    height: 70%;\r\n    margin-left: 40px;\r\n    margin-top: 70px;\r\n}\r\n\r\n.box-part[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 453px;\r\n    width: 322px;\r\n    background: #ddd;\r\n    width: 80%;\r\n    height: 40%;\r\n    border-radius: 10px;\r\n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    color: black;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    margin: 20px 0px;\r\n    color: black;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-top: 30px;\r\n    width: 186px;\r\n    height: 186px;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    width: 750px;\r\n    height: 200px;\r\n    padding-top: 10px;\r\n    \r\n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 10px;\r\n}\r\n\r\n.authorBook[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    float: left;\r\n    width: 20%;\r\n    height: 170px;\r\n    margin-top: 0;\r\n}\r\n\r\n.authorBook[_ngcontent-%COMP%]   .info1[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    float: left;\r\n    \r\n    width: 49%;\r\n    height: 170px;\r\n    padding-top: 20px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.authorBook[_ngcontent-%COMP%]   .info2[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    float: right;\r\n    \r\n    width: 25%;\r\n    height: 170px;\r\n}\r\n\r\n.authorBook[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.authorBook[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYXV0aG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFGQUFxRjtBQUN6Rjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUdBLE9BQU87O0FBRVA7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCOzBCQUNzQjtJQUN0QixxRkFBcUY7SUFDckYsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNob3ctYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDYXJkIHtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5teUJvb2tzIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4uYm94LXBhcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0NTNweDtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4IHJnYmEoOTUsIDkzLCA5MywgMC4zOSksIC00cHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDE4NnB4O1xyXG4gICAgaGVpZ2h0OiAxODZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcbi8qYm9vayovXHJcblxyXG4ubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNzUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgKi9cclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDJweCByZ2JhKDk1LCA5MywgOTMsIDAuMzkpLCAtNHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYXV0aG9yQm9vayAuaW1hZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmF1dGhvckJvb2sgLmluZm8xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOkdyZWVuOyAqL1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmF1dGhvckJvb2sgLmluZm8yIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC8qIGJhY2tncm91bmQ6Ymx1ZTsgKi9cclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG59XHJcblxyXG4uYXV0aG9yQm9vayBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hdXRob3JCb29rIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGF7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "bdQi":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/user layout/category/user-category-header/user-category-header.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UserCategoryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCategoryHeaderComponent", function() { return UserCategoryHeaderComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class UserCategoryHeaderComponent {
    constructor() {
        this.searchEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    searchBook(event) {
        console.log(event.target.value);
        this.searchEmitter.emit(event.target.value);
    }
    futureWork() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            icon: 'info',
            title: 'Future Work',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }
}
UserCategoryHeaderComponent.ɵfac = function UserCategoryHeaderComponent_Factory(t) { return new (t || UserCategoryHeaderComponent)(); };
UserCategoryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserCategoryHeaderComponent, selectors: [["app-user-category-header"]], outputs: { searchEmitter: "searchEmitter" }, decls: 19, vars: 0, consts: [[1, "header"], [1, "container"], [1, "row"], [1, "col-2"], [1, "book-search", "col-7"], [1, "input-group", "w-100", "m-auto"], [1, "form-outline", "w-75"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "keyup"], ["id", "search-button", "type", "button", 1, "btn", "search-btn"], [1, "fas", "fa-search"], [1, "filter", "col-2"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "w-75", "btn", "btn-dark", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"]], template: function UserCategoryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function UserCategoryHeaderComponent_Template_input_keyup_7_listener($event) { return ctx.searchBook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sort By Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryHeaderComponent_Template_a_click_17_listener() { return ctx.futureWork(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Top Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n  margin-top: 7%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.book-search[_ngcontent-%COMP%]{\r\n  margin-left: 7%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\r\n  0 4px 5px 0 rgba(66, 66, 66, 0.2);\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  color: white;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]{\r\n  text-align: end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2F0ZWdvcnktaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUU7bUNBQ2lDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoidXNlci1jYXRlZ29yeS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxufVxyXG5cclxuLmhlYWRlciAuaW5wdXQtZ3JvdXAge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uYm9vay1zZWFyY2h7XHJcbiAgbWFyZ2luLWxlZnQ6IDclO1xyXG59XHJcbi5oZWFkZXIgLmJvb2stc2VhcmNoIGlucHV0LFxyXG4uaGVhZGVyIC5ib29rLXNlYXJjaCBidXR0b24ge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKSxcclxuICAwIDRweCA1cHggMCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmJvb2stc2VhcmNoIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmZpbHRlcntcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "cPV5":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CategoryService {
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
        this.baseUrl = 'http://localhost:3000/category';
        this._categoryIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.categoryID$ = this._categoryIdSource.asObservable();
        this.accessToken = sessionStorage.getItem('accessToken');
    }
    sendID(id) {
        this._categoryIdSource.next(id);
    }
    categoryIndex() {
        return this._HttpClient.get(this.baseUrl);
    }
    categoryStore(data) {
        return this._HttpClient.post(this.baseUrl, data, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    categoryDelete(id) {
        return this._HttpClient.delete(`${this.baseUrl}/${id.toString()}`, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    categoryUpdate(id, cat) {
        return this._HttpClient.patch(`${this.baseUrl}/${id}`, cat, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cgzm":
/*!***************************************!*\
  !*** ./src/app/pipes/average.pipe.ts ***!
  \***************************************/
/*! exports provided: AveragePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AveragePipe", function() { return AveragePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AveragePipe {
    transform(items) {
        let total = 0;
        var count = 0;
        items.forEach(function (item, index) {
            total += item;
            count++;
        });
        return total / count;
    }
}
AveragePipe.ɵfac = function AveragePipe_Factory(t) { return new (t || AveragePipe)(); };
AveragePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "average", type: AveragePipe, pure: true });


/***/ }),

/***/ "euvg":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/user layout/about-us/about-mission/about-mission.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AboutMissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMissionComponent", function() { return AboutMissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AboutMissionComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const para_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](para_r2);
} }
function AboutMissionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](card_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.desc);
} }
class AboutMissionComponent {
    constructor() {
        this.paragraph = [
            "The Importance of Reading Naturally: Evidence From Combined Recordings of Eye Movements and Electric Brain Potentials",
            "First, in natural reading, a sustained negativity was found in both syntactic and semantic violations but only in sentence‐final position and only in trials without regression. These effects clearly demonstrate the added benefit of coregistration. In the grand mean these negativities were cancelled out by the stronger P600 effects, but the eye‐tracking signal allowed useparate them out.",
            "Regarding the ERP responses in word‐by‐word presentation and in natural reading, as Table 5 shows, these were remarkably similar in the two modalities. This shows that results from word‐by‐word reading do largely generalize to free reading. However, there were also some interesting differences demonstrating that coregistration gives us a more comprehensive picture: First, like earlier studies (Dimigen et al., 2011; Kretzschmar et al., 2009), we found that ERP effects appeared earlier in free reading than in word‐by‐word reading. This has been explained in terms of orthographic preactivation through parafoveal preview. Lexical processing basically gets a head start in free reading because visual information about a word enters the system even before the word is first fixated. One important consequence is that researchers have to be careful when they compare the time‐course of effects in RSVP studies to effects found in other experimental paradigms.",
            "Reading is typically an individual activity, done silently, although on occasion a person reads out loud for other listeners; or reads aloud for one's own use, for better comprehension."
        ];
        this.cardData = [
            { icon: "fas fa-users icon", number: "80,123", desc: "Customers to date" },
            { icon: "fas fa-book-open icon", number: "95,458", desc: "Amazing books" },
            { icon: "far fa-thumbs-up icon", number: "30,145", desc: "In Savings" }
        ];
    }
    ngOnInit() {
    }
}
AboutMissionComponent.ɵfac = function AboutMissionComponent_Factory(t) { return new (t || AboutMissionComponent)(); };
AboutMissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMissionComponent, selectors: [["app-about-mission"]], decls: 12, vars: 2, consts: [[1, "Mission", "py-5"], [1, "container-custom"], [1, "text-center", "my-5"], [1, "row", "w-100"], [1, "col-lg-8", "col-xl-7"], [4, "ngFor", "ngForOf"], [1, "icons"], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-xl-5"], ["src", "/assets/user/about-us/about-header.jpg", "alt", "", 1, "img-fluid"], [1, "col"], [1, "col-3"], [1, "col-9"], [1, "details"]], template: function AboutMissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Mission Is To Find All Books Tybes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutMissionComponent_p_6_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutMissionComponent_div_9_Template, 10, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paragraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  font-family: 'Playfair Display';\r\n}\r\n.about-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #484848;\r\n  line-height: 1.714;\r\n  margin-bottom: 40px;\r\n}\r\n.Mission[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\r\n  color: #484848;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  line-height: 1.5;\r\n  margin-bottom: 45px;\r\n}\r\n.Mission[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\r\n  margin-bottom: 40px;\r\n}\r\n.icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  color: #de3242;\r\n  font-size: 40px;\r\n  line-height: 1.2;\r\n}\r\n.details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  font-family: \"Nunito\";\r\n  color: #484848;\r\n  font-weight: bold;\r\n  margin-bottom: 0;\r\n}\r\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-family: \"Nunito\";\r\n  color: #484848;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJmaWxlIjoiYWJvdXQtbWlzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JztcclxufVxyXG4uYWJvdXQtdXMgcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDg0ODQ4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjcxNDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5NaXNzaW9uIHA6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG4uTWlzc2lvbiBwOmxhc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmljb25zIC5pY29uIHtcclxuICBjb2xvcjogI2RlMzI0MjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4uZGV0YWlscyBoMyB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xyXG4gIGNvbG9yOiAjNDg0ODQ4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmRldGFpbHMgcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xyXG4gIGNvbG9yOiAjNDg0ODQ4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "f6kv":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user layout/user-profile/side-menu/user-profile-side.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UserProfileSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileSideComponent", function() { return UserProfileSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-profile.service */ "mnJU");




class UserProfileSideComponent {
    constructor(userProfileService) {
        this.userProfileService = userProfileService;
        this.userId = sessionStorage.getItem("userId") || "605a1a4922c6ca862b8658d6";
        this.selectedBooksType = "All";
        this.userImage = "assets/user/profile/author-4.jpg";
        this.userName = "";
        this.selectedBooksTypeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectBooksType(event, BooksType) {
        this.selectedBooksTypeEmitter.emit(BooksType);
    }
    ngOnInit() {
        this.subscriber = this.userProfileService.getuserById(this.userId)
            .subscribe((response) => {
            if (response.avatar) {
                this.userImage = response.avatar;
            }
            this.userName = response.userName;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error getting your information !",
                footer: ''
            });
        });
    }
}
UserProfileSideComponent.ɵfac = function UserProfileSideComponent_Factory(t) { return new (t || UserProfileSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"])); };
UserProfileSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileSideComponent, selectors: [["app-user-profile-side"]], outputs: { selectedBooksTypeEmitter: "selectedBooksTypeEmitter" }, decls: 22, vars: 2, consts: [[1, "container-fluid", "justify-content-center"], [1, "user", "col-lg-2", "col-md-4", "col-sm-10", "col-xxs-12", "text-center", "p-3"], [1, "user-image", "rounded-circle", "border-danger", "border", 3, "src"], [1, "mt-4", "mb-5", "user-name"], [1, "sidebar-menu", "list-unstyled"], [1, "mange"], [1, "text-decoration-none", 3, "click"], [1, "fas", "fa-chevron-right"]], template: function UserProfileSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileSideComponent_Template_a_click_7_listener($event) { return ctx.selectBooksType($event, "All"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileSideComponent_Template_a_click_11_listener($event) { return ctx.selectBooksType($event, "Read"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileSideComponent_Template_a_click_15_listener($event) { return ctx.selectBooksType($event, "CurrentReading"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Current Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileSideComponent_Template_a_click_19_listener($event) { return ctx.selectBooksType($event, "WantToRead"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Want ot Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
    } }, styles: [".user[_ngcontent-%COMP%] {\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n  background-color: #f5f5f5;\r\n  margin-top: -4%;\r\n  border-radius: 25px;\r\n  margin-left: 3%;\r\n  min-height: 50%;\r\n  position: fixed;\r\n}\r\n\r\n.user-image[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 15%;\r\n  z-index: 1;\r\n  margin-top: -40%;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n  left: 6.7%;\r\n  padding-top: 5px;\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  border-radius: 25px;\r\n  color: #ffffff;\r\n}\r\n\r\n.mange[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  margin-top: 15%;\r\n}\r\n\r\n.mange[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #353b48;\r\n}\r\n\r\n.mange[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #de3242;\r\n  cursor: pointer;\r\n  font-weight: 800;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-top: 5%;\r\n  border-radius: 15px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #de3242;\r\n  cursor: pointer;\r\n  font-weight: 800;\r\n  color: #ffffff;\r\n}\r\n\r\n.mange[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n  transform: rotate(360deg);\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .user[_ngcontent-%COMP%] {\r\n    position: initial;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsK0dBQStHO0VBQy9HLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwrR0FBK0c7RUFDL0csVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoidXNlci1wcm9maWxlLXNpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udXNlciB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgbWFyZ2luLXRvcDogLTQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLXRvcDogLTQwJTtcclxuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbGVmdDogNi43JTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYW5nZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbi5tYW5nZSBhIHtcclxuICBjb2xvcjogIzM1M2I0ODtcclxufVxyXG5cclxuLm1hbmdlIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZGUzMjQyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubWFuZ2U6aG92ZXI+YSBzdmd7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnVzZXIge1xyXG4gICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fO1k":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user layout/user-profile/index/user-profile-index.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserProfileIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileIndexComponent", function() { return UserProfileIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_user_profile_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/user-profile-header.component */ "LFVM");
/* harmony import */ var _side_menu_user_profile_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-menu/user-profile-side.component */ "f6kv");
/* harmony import */ var _cards_user_profile_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/user-profile-cards.component */ "CY+G");
/* harmony import */ var _pagination_user_profile_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pagination/user-profile-pagination.component */ "03wz");





class UserProfileIndexComponent {
    constructor() {
        this.paginationPagesOut = [1, 2, 3];
    }
    ngOnInit() {
    }
}
UserProfileIndexComponent.ɵfac = function UserProfileIndexComponent_Factory(t) { return new (t || UserProfileIndexComponent)(); };
UserProfileIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileIndexComponent, selectors: [["app-user-profile-index"]], decls: 6, vars: 0, consts: [[3, "searchEmitter"], [3, "selectedBooksTypeEmitter"], [3, "setPaginationEmitter"], ["sendBookType", ""], [3, "selectedPageEmitter"], ["paginationComponent", ""]], template: function UserProfileIndexComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-profile-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmitter", function UserProfileIndexComponent_Template_app_user_profile_header_searchEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.searchBook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user-profile-side", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedBooksTypeEmitter", function UserProfileIndexComponent_Template_app_user_profile_side_selectedBooksTypeEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.selectBooksType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-user-profile-cards", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setPaginationEmitter", function UserProfileIndexComponent_Template_app_user_profile_cards_setPaginationEmitter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r1.getPagination($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-user-profile-pagination", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedPageEmitter", function UserProfileIndexComponent_Template_app_user_profile_pagination_selectedPageEmitter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.changePagination($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_user_profile_header_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileHeaderComponent"], _side_menu_user_profile_side_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileSideComponent"], _cards_user_profile_cards_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileCardsComponent"], _pagination_user_profile_pagination_component__WEBPACK_IMPORTED_MODULE_4__["UserProfilePaginationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUtaW5kZXguY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "fSjY":
/*!*************************************************!*\
  !*** ./src/app/Guards/user-auth-gaurd.guard.ts ***!
  \*************************************************/
/*! exports provided: UserAuthGaurdGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGaurdGuard", function() { return UserAuthGaurdGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_user_layout_access_services_user_access_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/user layout/access/services/user-access-service.service */ "VDpO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserAuthGaurdGuard {
    constructor(userAuthService, _Router) {
        this.userAuthService = userAuthService;
        this._Router = _Router;
    }
    canActivate(route, state) {
        if (this.userAuthService.isLoggedIn()) {
            return true;
        }
        else {
            this._Router.navigate(["login"]); ///user login page
            return false;
        }
    }
}
UserAuthGaurdGuard.ɵfac = function UserAuthGaurdGuard_Factory(t) { return new (t || UserAuthGaurdGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_user_layout_access_services_user_access_service_service__WEBPACK_IMPORTED_MODULE_1__["UserAccessServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserAuthGaurdGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthGaurdGuard, factory: UserAuthGaurdGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "g+37":
/*!*********************************************!*\
  !*** ./src/app/services/reviews.service.ts ***!
  \*********************************************/
/*! exports provided: ReviewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsService", function() { return ReviewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ReviewsService {
    constructor(client) {
        this.client = client;
        this.accessToken = localStorage.getItem('TOKEN');
        this.BASE_URL = "http://localhost:3000/review";
    }
    index() {
        return this.client.get(this.BASE_URL, { observe: "response" });
    }
    pagination(page = 1) {
        return this.client.get(`${this.BASE_URL}/pages?page=${page}`, { observe: "response" });
    }
    show(id) {
        return this.client.get(`${this.BASE_URL}/${id}`, { observe: "response" });
    }
    store(review) {
        // console.log(review);
        return this.client.post(this.BASE_URL, review, {
            observe: 'response',
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    update(review) {
        return this.client.patch(`${this.BASE_URL}/${review.id}`, review, {
            observe: 'response',
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
    destroy(id) {
        return this.client.delete(`${this.BASE_URL}/${id}`, {
            observe: 'response',
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
}
ReviewsService.ɵfac = function ReviewsService_Factory(t) { return new (t || ReviewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReviewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReviewsService, factory: ReviewsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gByw":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/user layout/about-us/about-why-choose-us/about-why-choose-us.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AboutWhyChooseUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutWhyChooseUsComponent", function() { return AboutWhyChooseUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AboutWhyChooseUsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](card_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.desc);
} }
class AboutWhyChooseUsComponent {
    constructor() {
        this.cardData = [
            { icon: "far fa-hand-spock icon", title: "Trusted By Thousands", desc: "Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis." },
            { icon: "fas fa-book-open icon", title: "Wide Renge Of Books", desc: "Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis." },
            { icon: "far fa-window-restore icon", title: "Easy to Find", desc: "Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis." }
        ];
    }
    ngOnInit() {
    }
}
AboutWhyChooseUsComponent.ɵfac = function AboutWhyChooseUsComponent_Factory(t) { return new (t || AboutWhyChooseUsComponent)(); };
AboutWhyChooseUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutWhyChooseUsComponent, selectors: [["app-about-why-choose-us"]], decls: 8, vars: 1, consts: [[1, "why-choose-us", "py-5"], [1, "text-center"], [1, "text-center", "mb-5"], [1, "container-custom"], [1, "row"], ["class", "col-md-6 col-lg-4 col-xl-4 ", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "col-xl-4"], [1, "item"], [1, "icons", "d-flex", "align-items-center", "justify-content-center"], [1, "details", "text-center"], [1, "mt-4", "mb-2"]], template: function AboutWhyChooseUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Why To Choose Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We provide full service at every step.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutWhyChooseUsComponent_div_7_Template, 9, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  font-family: 'Playfair Display';\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-family: \"Nunito\";\r\n  line-height: 1.2;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  border: 1px solid #ebebeb;\r\n  border-radius: 8px;\r\n  padding: 50px 41px 30px 41px;\r\n  transition: all 0.3s ease;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0px 0px 50px 0px rgb(19 19 28 / 12%);\r\n  background-color: #ffffff;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .icons[_ngcontent-%COMP%] {\r\n  background-color: #ff5a5f;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  border-radius: 50%;\r\n  height: 130px;\r\n  line-height: 130px;\r\n  margin: 0 auto;\r\n  width: 130px;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  color: #ff5a5f;\r\n  font-size: 68px;\r\n  line-height: 130px;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #484848;\r\n  font-weight: bold;\r\n}\r\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-family: \"Nunito\";\r\n  line-height: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdoeS1jaG9vc2UtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCIiwiZmlsZSI6ImFib3V0LXdoeS1jaG9vc2UtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XHJcbn1cclxuLndoeS1jaG9vc2UtdXMgcCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4ud2h5LWNob29zZS11cyAuaXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogNTBweCA0MXB4IDMwcHggNDFweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi53aHktY2hvb3NlLXVzIC5pdGVtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggMHB4IHJnYigxOSAxOSAyOCAvIDEyJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ud2h5LWNob29zZS11cyAuaXRlbTpob3ZlciAuaWNvbnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVhNWY7XHJcbn1cclxuLndoeS1jaG9vc2UtdXMgLml0ZW06aG92ZXIgLmljb24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ud2h5LWNob29zZS11cyAuaWNvbnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEzMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG4ud2h5LWNob29zZS11cyAuaWNvbiB7XHJcbiAgY29sb3I6ICNmZjVhNWY7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMzBweDtcclxufVxyXG4ud2h5LWNob29zZS11cyBoNCB7XHJcbiAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndoeS1jaG9vc2UtdXMgLml0ZW0gLmRldGFpbHMgcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "h/UE":
/*!********************************************************************!*\
  !*** ./src/app/modules/user layout/about-us/about-us.component.ts ***!
  \********************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _about_header_about_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-header/about-header.component */ "mm1a");
/* harmony import */ var _about_mission_about_mission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-mission/about-mission.component */ "euvg");
/* harmony import */ var _about_why_choose_us_about_why_choose_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-why-choose-us/about-why-choose-us.component */ "gByw");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/footer/footer.component */ "qL8W");






class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 5, vars: 0, template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about-why-choose-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__["NavUserComponent"], _about_header_about_header_component__WEBPACK_IMPORTED_MODULE_2__["AboutHeaderComponent"], _about_mission_about_mission_component__WEBPACK_IMPORTED_MODULE_3__["AboutMissionComponent"], _about_why_choose_us_about_why_choose_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutWhyChooseUsComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "hLC1":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/user layout/book/user-book-index/user-book-index.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UserBookIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBookIndexComponent", function() { return UserBookIndexComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_layout_book_services_book_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin layout/book/services/book-service.service */ "+TRR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../home/footer/home-footer.component */ "TUxq");
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");








const _c0 = ["search_box"];
function UserBookIndexComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-loading");
} }
function UserBookIndexComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 5, book_r4.name, 0, 15), ".. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/user/book/", book_r4.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r4.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", book_r4.id.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r4.categoryName);
} }
function UserBookIndexComponent_section_15_ng_container_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserBookIndexComponent_section_15_ng_container_8_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.navigateBetweenPages(i_r7 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7 + 1);
} }
function UserBookIndexComponent_section_15_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserBookIndexComponent_section_15_ng_container_8_li_1_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r7 < 3);
} }
function UserBookIndexComponent_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserBookIndexComponent_section_15_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserBookIndexComponent_section_15_ng_container_8_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserBookIndexComponent_section_15_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.pages);
} }
class UserBookIndexComponent {
    constructor(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.keywords = "";
        this.lastSearchContent = "";
        this.search = false;
        this.books = [];
        this.pageNumbers = 1;
        this.currantPage = 1;
        this.pages = new Array(1);
        this.loading = false;
        this.getBooks();
    }
    ngOnInit() { }
    getBooks(page = 1) {
        this.subscriber = this.bookService.pagination(page)
            .subscribe((response) => {
            console.log(response.body);
            this.books = response.body.books;
            this.pageNumbers = response.body.pages;
            this.pages = new Array(this.pageNumbers);
            this.loading = true;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Server Error, can't get books information !",
                footer: ''
            });
        });
    }
    filter(searchContent, page) {
        this.searchSubscriber = this.bookService.search(searchContent, page).subscribe((res) => {
            this.books = res.body.books;
            console.log(this.books);
            this.pageNumbers = res.body.pages;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error, Can't get search results",
                footer: ''
            });
        });
    }
    captureSearchContent() {
        this.currantPage = 1;
        this.search = true;
        this.lastSearchContent = this.keywords = this.searchBox.nativeElement.value;
        this.filter(this.lastSearchContent, 1);
    }
    ngOnDestroy() {
        // this.subscriber.unsubscribe();
        // this.searchSubscriber.unsubscribe();
    }
    navigateBetweenPages(index) {
        this.currantPage = index;
        this.getBooks(this.currantPage);
    }
    previous() {
        if (!this.search && this.currantPage > 1)
            this.getBooks(--this.currantPage);
        else if (this.search)
            this.filter(this.lastSearchContent, --this.currantPage);
    }
    next() {
        if (!this.search && this.currantPage < this.pageNumbers)
            this.getBooks(--this.currantPage);
        else if (this.search)
            this.filter(this.lastSearchContent, ++this.currantPage);
    }
}
UserBookIndexComponent.ɵfac = function UserBookIndexComponent_Factory(t) { return new (t || UserBookIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_layout_book_services_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserBookIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserBookIndexComponent, selectors: [["app-user-book-index"]], viewQuery: function UserBookIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchBox = _t.first);
    } }, decls: 17, vars: 3, consts: [[4, "ngIf"], [1, "back"], ["src", "assets/user/book/book-gif.gif"], [1, "book-search"], [1, "input-group", "m-auto", "w-40"], [1, "form-outline", "w-90"], ["type", "search", "placeholder", "Search", 1, "form-control"], ["search_box", ""], ["id", "search-button", "type", "button", 1, "btn", "search-btn", 3, "click"], [1, "fas", "fa-search"], [1, "books"], [1, "container"], [1, "row", "justify-content-around"], ["class", "col-lg-3 col-sm-6 col-xxs-6 text-center", 4, "ngFor", "ngForOf"], ["class", "pagination-section", 4, "ngIf"], [1, "col-lg-3", "col-sm-6", "col-xxs-6", "text-center"], [1, "book"], [1, "book-title", "text-center"], [1, "w-75"], [1, "text-danger", "w-75", "m-auto"], ["onerror", "this.onerror=null; this.src='/assets/user/book/book-1.jpg.jpg'", 1, "book-image", "mt-3", 3, "src"], [1, "book-info"], [1, "mb-2", "mt-4"], [1, "btn", "btn-dark", 3, "routerLink"], [1, "category"], [1, "pagination-section"], [1, "row"], ["aria-label", "Page navigation example"], [1, "pagination", "w-50"], [1, "page-item", 3, "click"], [1, ""], [1, "fas", "fa-chevron-circle-left", "fa-2x"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-circle-right", "fa-2x"], ["class", "page-item", 3, "click", 4, "ngIf"]], template: function UserBookIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserBookIndexComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserBookIndexComponent_Template_button_click_9_listener() { return ctx.captureSearchContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserBookIndexComponent_div_14_Template, 16, 9, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserBookIndexComponent_section_15_Template, 12, 1, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageNumbers > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__["NavUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_6__["HomeFooterComponent"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_7__["UserLoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".back[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: -5%;\r\n    bottom: 0;\r\n}\r\n\r\n.book-search[_ngcontent-%COMP%] {\r\n    margin-top: 7%;\r\n}\r\n\r\n.w-40[_ngcontent-%COMP%] {\r\n    width: 40%\r\n}\r\n\r\n.w-90[_ngcontent-%COMP%] {\r\n    width: 90%\r\n}\r\n\r\n.book-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2), 0 4px 5px 0 rgba(66, 66, 66, 0.2);\r\n}\r\n\r\n.book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background-color: #de3242;\r\n    color: white;\r\n}\r\n\r\n.books[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.book[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-color: #F5F5F5;\r\n    padding: 10px;\r\n    min-height: 440px;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 3px 2px -2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.books[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n}\r\n\r\n.book[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.book-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    margin: 10px auto;\r\n}\r\n\r\n.book-image[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    height: 250px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.book-image[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n    transition: all 0.3s linear;\r\n}\r\n\r\n.book-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.1em;\r\n}\r\n\r\n.book-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    color: black;\r\n    border: 1px black solid;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n    transform: rotate(90deg);\r\n    position: absolute;\r\n    top: 12%;\r\n    background-color: rgba(222, 50, 66, 0.8);\r\n    left: -18%;\r\n    padding: 10px;\r\n    height: 40px;\r\n    width: 150px;\r\n    color: white;\r\n    border-radius: 0 20px 20px 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.category[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 3px 2px -2px rgba(0, 0, 0, 0.2);\r\n    background-color: rgba(222, 50, 66, 1);\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .category[_ngcontent-%COMP%] {\r\n        left: -12%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYm9vay1pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUksZ0ZBQWdGO0FBQ3BGOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNkdBQTZHO0FBQ2pIOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2R0FBNkc7SUFDN0csc0NBQXNDO0lBQ3RDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoidXNlci1ib29rLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogLTUlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYm9vay1zZWFyY2gge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbi53LTQwIHtcclxuICAgIHdpZHRoOiA0MCVcclxufVxyXG5cclxuLnctOTAge1xyXG4gICAgd2lkdGg6IDkwJVxyXG59XHJcblxyXG4uYm9vay1zZWFyY2ggaW5wdXQsXHJcbi5ib29rLXNlYXJjaCBidXR0b24ge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XHJcbn1cclxuXHJcbi5ib29rLXNlYXJjaCBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJvb2tzIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJvb2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0NDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uYm9va3MgLmNvbC1sZy0zIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5ib29rOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvb2stdGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuLmJvb2staW1hZ2Uge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYm9vay1pbWFnZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5ib29rLWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4uYm9vay1pbmZvIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgNTAsIDY2LCAwLjgpO1xyXG4gICAgbGVmdDogLTE4JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgM3B4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCA1MCwgNjYsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgbGVmdDogLTEyJTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "jHFM":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin layout/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dashboard.service */ "0AbP");
/* harmony import */ var _shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DashboardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Number of Authors :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Number of Books:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Number of Categories:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.data.authors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.data.books);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.data.categories);
} }
class DashboardComponent {
    constructor(_dashboard) {
        this._dashboard = _dashboard;
        this.data = { books: '', authors: '', categories: '' };
        this.cardData = [
            { icon: 'far fa-hand-spock icon', title: 'Trusted By Thousands', count: this.data.authors },
            { icon: 'fas fa-book-open icon', title: 'Wide Renge Of Books', count: this.data.books },
            { icon: 'far fa-window-restore icon', title: 'Easy to Find', count: this.data.categories }
        ];
        this.isLoad = false;
        this.dashboard();
    }
    dashboard() {
        this._dashboard.index().subscribe((res) => {
            this.data = res;
            this.isLoad = true;
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Can't get required Info from the server!",
                footer: ''
            });
        });
    }
    ngOnInit() {
    }
    emptyData() {
        return Object.keys(this.data).length === 0 && this.data.constructor === Object;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 15, vars: 2, consts: [[1, "page-content"], [1, "dashboard"], [1, "container"], [1, "row", "w-100"], [1, "col"], [1, "content", "pt-5"], ["class", "row w-100", 4, "ngIf", "ngIfElse"], ["displayContent", ""], [1, "col-md-12", "text-center", "loader"], [1, "fas", "fa-spinner", "fa-spin", "fa-5x", "text-info"], [1, "col-md-6", "col-lg-4", "col-xl-4"], [1, "item", "my-5"], [1, "icons", "d-flex", "align-items-center", "justify-content-center"], [1, "fas", "fa-users", "icon"], [1, "details", "text-center"], [1, "mt-4", "mb-2"], [1, "fas", "fa-book-open", "icon"], [1, "fas", "fa-newspaper", "icon"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Welcome Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "We are glad to see you again!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DashboardComponent_div_12_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DashboardComponent_ng_template_13_Template, 28, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoad)("ngIfElse", _r1);
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_4__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}\n.animate__animated[_ngcontent-%COMP%]{animation-duration:1s;animation-duration:var(--animate-duration);animation-fill-mode:both}\n.animate__animated.animate__infinite[_ngcontent-%COMP%]{animation-iteration-count:infinite}\n.animate__animated.animate__repeat-1[_ngcontent-%COMP%]{animation-iteration-count:1;animation-iteration-count:var(--animate-repeat)}\n.animate__animated.animate__repeat-2[_ngcontent-%COMP%]{animation-iteration-count:2;animation-iteration-count:calc(var(--animate-repeat)*2)}\n.animate__animated.animate__repeat-3[_ngcontent-%COMP%]{animation-iteration-count:3;animation-iteration-count:calc(var(--animate-repeat)*3)}\n.animate__animated.animate__delay-1s[_ngcontent-%COMP%]{animation-delay:1s;animation-delay:var(--animate-delay)}\n.animate__animated.animate__delay-2s[_ngcontent-%COMP%]{animation-delay:2s;animation-delay:calc(var(--animate-delay)*2)}\n.animate__animated.animate__delay-3s[_ngcontent-%COMP%]{animation-delay:3s;animation-delay:calc(var(--animate-delay)*3)}\n.animate__animated.animate__delay-4s[_ngcontent-%COMP%]{animation-delay:4s;animation-delay:calc(var(--animate-delay)*4)}\n.animate__animated.animate__delay-5s[_ngcontent-%COMP%]{animation-delay:5s;animation-delay:calc(var(--animate-delay)*5)}\n.animate__animated.animate__faster[_ngcontent-%COMP%]{animation-duration:.5s;animation-duration:calc(var(--animate-duration)/2)}\n.animate__animated.animate__fast[_ngcontent-%COMP%]{animation-duration:.8s;animation-duration:calc(var(--animate-duration)*0.8)}\n.animate__animated.animate__slow[_ngcontent-%COMP%]{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2)}\n.animate__animated.animate__slower[_ngcontent-%COMP%]{animation-duration:3s;animation-duration:calc(var(--animate-duration)*3)}\n@media (prefers-reduced-motion:reduce), print{.animate__animated[_ngcontent-%COMP%]{animation-duration:1ms!important;transition-duration:1ms!important;animation-iteration-count:1!important}.animate__animated[class*=Out][_ngcontent-%COMP%]{opacity:0}}\n@keyframes bounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0) scaleY(.95)}90%{transform:translate3d(0,-4px,0) scaleY(1.02)}}\n.animate__bounce[_ngcontent-%COMP%]{animation-name:bounce;transform-origin:center bottom}\n@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}\n.animate__flash[_ngcontent-%COMP%]{animation-name:flash}\n@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}\n.animate__pulse[_ngcontent-%COMP%]{animation-name:pulse;animation-timing-function:ease-in-out}\n@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}\n.animate__rubberBand[_ngcontent-%COMP%]{animation-name:rubberBand}\n@keyframes shakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}\n.animate__shakeX[_ngcontent-%COMP%]{animation-name:shakeX}\n@keyframes shakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}\n.animate__shakeY[_ngcontent-%COMP%]{animation-name:shakeY}\n@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}\n.animate__headShake[_ngcontent-%COMP%]{animation-timing-function:ease-in-out;animation-name:headShake}\n@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}\n.animate__swing[_ngcontent-%COMP%]{transform-origin:top center;animation-name:swing}\n@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}\n.animate__tada[_ngcontent-%COMP%]{animation-name:tada}\n@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}\n.animate__wobble[_ngcontent-%COMP%]{animation-name:wobble}\n@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}\n.animate__jello[_ngcontent-%COMP%]{animation-name:jello;transform-origin:center}\n@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}\n.animate__heartBeat[_ngcontent-%COMP%]{animation-name:heartBeat;animation-duration:1.3s;animation-duration:calc(var(--animate-duration)*1.3);animation-timing-function:ease-in-out}\n@keyframes backInDown{0%{transform:translateY(-1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInDown[_ngcontent-%COMP%]{animation-name:backInDown}\n@keyframes backInLeft{0%{transform:translateX(-2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInLeft[_ngcontent-%COMP%]{animation-name:backInLeft}\n@keyframes backInRight{0%{transform:translateX(2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInRight[_ngcontent-%COMP%]{animation-name:backInRight}\n@keyframes backInUp{0%{transform:translateY(1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInUp[_ngcontent-%COMP%]{animation-name:backInUp}\n@keyframes backOutDown{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(700px) scale(.7);opacity:.7}}\n.animate__backOutDown[_ngcontent-%COMP%]{animation-name:backOutDown}\n@keyframes backOutLeft{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(-2000px) scale(.7);opacity:.7}}\n.animate__backOutLeft[_ngcontent-%COMP%]{animation-name:backOutLeft}\n@keyframes backOutRight{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(2000px) scale(.7);opacity:.7}}\n.animate__backOutRight[_ngcontent-%COMP%]{animation-name:backOutRight}\n@keyframes backOutUp{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(-700px) scale(.7);opacity:.7}}\n.animate__backOutUp[_ngcontent-%COMP%]{animation-name:backOutUp}\n@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}\n.animate__bounceIn[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceIn}\n@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;transform:translate3d(0,25px,0) scaleY(.9)}75%{transform:translate3d(0,-10px,0) scaleY(.95)}90%{transform:translate3d(0,5px,0) scaleY(.985)}to{transform:translateZ(0)}}\n.animate__bounceInDown[_ngcontent-%COMP%]{animation-name:bounceInDown}\n@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(25px,0,0) scaleX(1)}75%{transform:translate3d(-10px,0,0) scaleX(.98)}90%{transform:translate3d(5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}\n.animate__bounceInLeft[_ngcontent-%COMP%]{animation-name:bounceInLeft}\n@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}\n.animate__bounceInRight[_ngcontent-%COMP%]{animation-name:bounceInRight}\n@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}75%{transform:translate3d(0,10px,0) scaleY(.95)}90%{transform:translate3d(0,-5px,0) scaleY(.985)}to{transform:translateZ(0)}}\n.animate__bounceInUp[_ngcontent-%COMP%]{animation-name:bounceInUp}\n@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}\n.animate__bounceOut[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceOut}\n@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,2000px,0) scaleY(3)}}\n.animate__bounceOutDown[_ngcontent-%COMP%]{animation-name:bounceOutDown}\n@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(-2000px,0,0) scaleX(2)}}\n.animate__bounceOutLeft[_ngcontent-%COMP%]{animation-name:bounceOutLeft}\n@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}\n.animate__bounceOutRight[_ngcontent-%COMP%]{animation-name:bounceOutRight}\n@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,-2000px,0) scaleY(3)}}\n.animate__bounceOutUp[_ngcontent-%COMP%]{animation-name:bounceOutUp}\n@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n.animate__fadeIn[_ngcontent-%COMP%]{animation-name:fadeIn}\n@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInDown[_ngcontent-%COMP%]{animation-name:fadeInDown}\n@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInDownBig[_ngcontent-%COMP%]{animation-name:fadeInDownBig}\n@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInLeft[_ngcontent-%COMP%]{animation-name:fadeInLeft}\n@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInLeftBig[_ngcontent-%COMP%]{animation-name:fadeInLeftBig}\n@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInRight[_ngcontent-%COMP%]{animation-name:fadeInRight}\n@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInRightBig[_ngcontent-%COMP%]{animation-name:fadeInRightBig}\n@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInUp[_ngcontent-%COMP%]{animation-name:fadeInUp}\n@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInUpBig[_ngcontent-%COMP%]{animation-name:fadeInUpBig}\n@keyframes fadeInTopLeft{0%{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInTopLeft[_ngcontent-%COMP%]{animation-name:fadeInTopLeft}\n@keyframes fadeInTopRight{0%{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInTopRight[_ngcontent-%COMP%]{animation-name:fadeInTopRight}\n@keyframes fadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInBottomLeft[_ngcontent-%COMP%]{animation-name:fadeInBottomLeft}\n@keyframes fadeInBottomRight{0%{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInBottomRight[_ngcontent-%COMP%]{animation-name:fadeInBottomRight}\n@keyframes fadeOut{0%{opacity:1}to{opacity:0}}\n.animate__fadeOut[_ngcontent-%COMP%]{animation-name:fadeOut}\n@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}\n.animate__fadeOutDown[_ngcontent-%COMP%]{animation-name:fadeOutDown}\n@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}\n.animate__fadeOutDownBig[_ngcontent-%COMP%]{animation-name:fadeOutDownBig}\n@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}\n.animate__fadeOutLeft[_ngcontent-%COMP%]{animation-name:fadeOutLeft}\n@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}\n.animate__fadeOutLeftBig[_ngcontent-%COMP%]{animation-name:fadeOutLeftBig}\n@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}\n.animate__fadeOutRight[_ngcontent-%COMP%]{animation-name:fadeOutRight}\n@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}\n.animate__fadeOutRightBig[_ngcontent-%COMP%]{animation-name:fadeOutRightBig}\n@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}\n.animate__fadeOutUp[_ngcontent-%COMP%]{animation-name:fadeOutUp}\n@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}\n.animate__fadeOutUpBig[_ngcontent-%COMP%]{animation-name:fadeOutUpBig}\n@keyframes fadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}\n.animate__fadeOutTopLeft[_ngcontent-%COMP%]{animation-name:fadeOutTopLeft}\n@keyframes fadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}\n.animate__fadeOutTopRight[_ngcontent-%COMP%]{animation-name:fadeOutTopRight}\n@keyframes fadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,100%,0)}}\n.animate__fadeOutBottomRight[_ngcontent-%COMP%]{animation-name:fadeOutBottomRight}\n@keyframes fadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}\n.animate__fadeOutBottomLeft[_ngcontent-%COMP%]{animation-name:fadeOutBottomLeft}\n@keyframes flip{0%{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}}\n.animate__animated.animate__flip[_ngcontent-%COMP%]{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}\n@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}\n.animate__flipInX[_ngcontent-%COMP%]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}\n@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}\n.animate__flipInY[_ngcontent-%COMP%]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}\n@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}\n.animate__flipOutX[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}\n@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}\n.animate__flipOutY[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}\n@keyframes lightSpeedInRight{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg)}to{transform:translateZ(0)}}\n.animate__lightSpeedInRight[_ngcontent-%COMP%]{animation-name:lightSpeedInRight;animation-timing-function:ease-out}\n@keyframes lightSpeedInLeft{0%{transform:translate3d(-100%,0,0) skewX(30deg);opacity:0}60%{transform:skewX(-20deg);opacity:1}80%{transform:skewX(5deg)}to{transform:translateZ(0)}}\n.animate__lightSpeedInLeft[_ngcontent-%COMP%]{animation-name:lightSpeedInLeft;animation-timing-function:ease-out}\n@keyframes lightSpeedOutRight{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}\n.animate__lightSpeedOutRight[_ngcontent-%COMP%]{animation-name:lightSpeedOutRight;animation-timing-function:ease-in}\n@keyframes lightSpeedOutLeft{0%{opacity:1}to{transform:translate3d(-100%,0,0) skewX(-30deg);opacity:0}}\n.animate__lightSpeedOutLeft[_ngcontent-%COMP%]{animation-name:lightSpeedOutLeft;animation-timing-function:ease-in}\n@keyframes rotateIn{0%{transform:rotate(-200deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateIn[_ngcontent-%COMP%]{animation-name:rotateIn;transform-origin:center}\n@keyframes rotateInDownLeft{0%{transform:rotate(-45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInDownLeft[_ngcontent-%COMP%]{animation-name:rotateInDownLeft;transform-origin:left bottom}\n@keyframes rotateInDownRight{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInDownRight[_ngcontent-%COMP%]{animation-name:rotateInDownRight;transform-origin:right bottom}\n@keyframes rotateInUpLeft{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInUpLeft[_ngcontent-%COMP%]{animation-name:rotateInUpLeft;transform-origin:left bottom}\n@keyframes rotateInUpRight{0%{transform:rotate(-90deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInUpRight[_ngcontent-%COMP%]{animation-name:rotateInUpRight;transform-origin:right bottom}\n@keyframes rotateOut{0%{opacity:1}to{transform:rotate(200deg);opacity:0}}\n.animate__rotateOut[_ngcontent-%COMP%]{animation-name:rotateOut;transform-origin:center}\n@keyframes rotateOutDownLeft{0%{opacity:1}to{transform:rotate(45deg);opacity:0}}\n.animate__rotateOutDownLeft[_ngcontent-%COMP%]{animation-name:rotateOutDownLeft;transform-origin:left bottom}\n@keyframes rotateOutDownRight{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}\n.animate__rotateOutDownRight[_ngcontent-%COMP%]{animation-name:rotateOutDownRight;transform-origin:right bottom}\n@keyframes rotateOutUpLeft{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}\n.animate__rotateOutUpLeft[_ngcontent-%COMP%]{animation-name:rotateOutUpLeft;transform-origin:left bottom}\n@keyframes rotateOutUpRight{0%{opacity:1}to{transform:rotate(90deg);opacity:0}}\n.animate__rotateOutUpRight[_ngcontent-%COMP%]{animation-name:rotateOutUpRight;transform-origin:right bottom}\n@keyframes hinge{0%{animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}\n.animate__hinge[_ngcontent-%COMP%]{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2);animation-name:hinge;transform-origin:top left}\n@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}\n.animate__jackInTheBox[_ngcontent-%COMP%]{animation-name:jackInTheBox}\n@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}\n.animate__rollIn[_ngcontent-%COMP%]{animation-name:rollIn}\n@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}\n.animate__rollOut[_ngcontent-%COMP%]{animation-name:rollOut}\n@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}\n.animate__zoomIn[_ngcontent-%COMP%]{animation-name:zoomIn}\n@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInDown[_ngcontent-%COMP%]{animation-name:zoomInDown}\n@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInLeft[_ngcontent-%COMP%]{animation-name:zoomInLeft}\n@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInRight[_ngcontent-%COMP%]{animation-name:zoomInRight}\n@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInUp[_ngcontent-%COMP%]{animation-name:zoomInUp}\n@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}\n.animate__zoomOut[_ngcontent-%COMP%]{animation-name:zoomOut}\n@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomOutDown[_ngcontent-%COMP%]{animation-name:zoomOutDown;transform-origin:center bottom}\n@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0)}}\n.animate__zoomOutLeft[_ngcontent-%COMP%]{animation-name:zoomOutLeft;transform-origin:left center}\n@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0)}}\n.animate__zoomOutRight[_ngcontent-%COMP%]{animation-name:zoomOutRight;transform-origin:right center}\n@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomOutUp[_ngcontent-%COMP%]{animation-name:zoomOutUp;transform-origin:center bottom}\n@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInDown[_ngcontent-%COMP%]{animation-name:slideInDown}\n@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInLeft[_ngcontent-%COMP%]{animation-name:slideInLeft}\n@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInRight[_ngcontent-%COMP%]{animation-name:slideInRight}\n@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInUp[_ngcontent-%COMP%]{animation-name:slideInUp}\n@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}\n.animate__slideOutDown[_ngcontent-%COMP%]{animation-name:slideOutDown}\n@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}\n.animate__slideOutLeft[_ngcontent-%COMP%]{animation-name:slideOutLeft}\n@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}\n.animate__slideOutRight[_ngcontent-%COMP%]{animation-name:slideOutRight}\n@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}\n.animate__slideOutUp[_ngcontent-%COMP%]{animation-name:slideOutUp}\n.page-content[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n  min-height: 90vh;\r\n}\n.dashboard[_ngcontent-%COMP%] {\r\n  margin-left: 19%;\r\n  margin-right: 2%;\r\n}\n\n\np[_ngcontent-%COMP%] {\r\n  font-family: \"Nunito\";\r\n  color: rgb(119, 119, 119);\r\n  line-height: 1.2;\r\n}\n.item[_ngcontent-%COMP%] {\r\n  border: 1px solid #ebebeb;\r\n  border-radius: 8px;\r\n  padding: 50px 41px 30px 41px;\r\n  transition: all 0.3s ease;\r\n}\n.item[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0px 0px 50px 0px rgb(19 19 28 / 12%);\r\n  background-color: #ffffff;\r\n}\n.item[_ngcontent-%COMP%]:hover   .icons[_ngcontent-%COMP%] {\r\n  background-color: #ff5a5f;\r\n}\n.item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n}\n.icons[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  border-radius: 50%;\r\n  height: 130px;\r\n  line-height: 130px;\r\n  margin: 0 auto;\r\n  width: 130px;\r\n}\n.icon[_ngcontent-%COMP%] {\r\n  color: #ff5a5f;\r\n  font-size: 68px;\r\n  line-height: 130px;\r\n}\nh4[_ngcontent-%COMP%] {\r\n  color: #484848;\r\n  font-size: 40px;\r\n  font-weight: 900;\r\n}\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-family: \"Nunito\";\r\n  line-height: 2;\r\n}\n@media screen and (max-width: 700px) {\r\n  .dashboard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiLCJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBQzs7Ozs7O0VBTWY7QUFBQyxNQUFNLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLGtCQUFrQjtBQUFDLG1CQUFpRCxxQkFBcUIsQ0FBb0QsMENBQTBDLENBQWtDLHdCQUF3QjtBQUFDLHFDQUFnRixrQ0FBa0M7QUFBQyxxQ0FBeUUsMkJBQTJCLENBQXlELCtDQUErQztBQUFDLHFDQUF5RSwyQkFBMkIsQ0FBaUUsdURBQXVEO0FBQUMscUNBQXlFLDJCQUEyQixDQUFpRSx1REFBdUQ7QUFBQyxxQ0FBZ0Usa0JBQWtCLENBQThDLG9DQUFvQztBQUFDLHFDQUFnRSxrQkFBa0IsQ0FBc0QsNENBQTRDO0FBQUMscUNBQWdFLGtCQUFrQixDQUFzRCw0Q0FBNEM7QUFBQyxxQ0FBZ0Usa0JBQWtCLENBQXNELDRDQUE0QztBQUFDLHFDQUFnRSxrQkFBa0IsQ0FBc0QsNENBQTRDO0FBQUMsbUNBQWtFLHNCQUFzQixDQUE0RCxrREFBa0Q7QUFBQyxpQ0FBZ0Usc0JBQXNCLENBQThELG9EQUFvRDtBQUFDLGlDQUErRCxxQkFBcUIsQ0FBNEQsa0RBQWtEO0FBQUMsbUNBQWlFLHFCQUFxQixDQUE0RCxrREFBa0Q7QUFBQyw4Q0FBNkMsbUJBQTRELGdDQUFnQyxDQUEyQyxpQ0FBaUMsQ0FBK0MscUNBQXFDLENBQUMsK0JBQStCLFNBQVMsQ0FBQztBQUF3OUIsa0JBQWtCLGNBQThFLHVEQUF1RCxDQUFpQyx1QkFBdUIsQ0FBQyxRQUEwRSx5REFBeUQsQ0FBc0QsNENBQTRDLENBQUMsSUFBc0UseURBQXlELENBQXVELDZDQUE2QyxDQUFDLElBQXFFLHdEQUF3RCxDQUE2QyxtQ0FBbUMsQ0FBQyxJQUF5RCw0Q0FBNEMsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUIsQ0FBd0MsOEJBQThCO0FBQWlFLGlCQUFpQixVQUFVLFNBQVMsQ0FBQyxRQUFRLFNBQVMsQ0FBQztBQUFDLGdCQUE2QyxvQkFBb0I7QUFBaU4saUJBQWlCLEdBQStCLG1CQUFtQixDQUFDLElBQThDLGlDQUFpQyxDQUFDLEdBQStCLG1CQUFtQixDQUFDO0FBQUMsZ0JBQTZDLG9CQUFvQixDQUErQyxxQ0FBcUM7QUFBOGUsc0JBQXNCLEdBQStCLG1CQUFtQixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLEdBQStCLG1CQUFtQixDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUFnUixrQkFBa0IsTUFBc0MsdUJBQXVCLENBQUMsb0JBQTZELGdDQUFnQyxDQUFDLGdCQUF3RCwrQkFBK0IsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBZ1Isa0JBQWtCLE1BQXNDLHVCQUF1QixDQUFDLG9CQUE2RCxnQ0FBZ0MsQ0FBQyxnQkFBd0QsK0JBQStCLENBQUM7QUFBQyxpQkFBK0MscUJBQXFCO0FBQXFoQixxQkFBcUIsR0FBbUMsdUJBQXVCLENBQUMsS0FBdUQseUNBQXlDLENBQUMsTUFBc0QsdUNBQXVDLENBQUMsTUFBd0QseUNBQXlDLENBQUMsTUFBc0QsdUNBQXVDLENBQUMsSUFBb0MsdUJBQXVCLENBQUM7QUFBQyxvQkFBa0UscUNBQXFDLENBQWtDLHdCQUF3QjtBQUFvVSxpQkFBaUIsSUFBb0MsdUJBQXVCLENBQUMsSUFBcUMsd0JBQXdCLENBQUMsSUFBbUMsc0JBQXNCLENBQUMsSUFBb0MsdUJBQXVCLENBQUMsR0FBa0Msc0JBQXNCLENBQUM7QUFBQyxnQkFBb0QsMkJBQTJCLENBQThCLG9CQUFvQjtBQUFrYyxnQkFBZ0IsR0FBK0IsbUJBQW1CLENBQUMsUUFBMEQseUNBQXlDLENBQUMsZ0JBQW9FLDJDQUEyQyxDQUFDLFlBQWlFLDRDQUE0QyxDQUFDLEdBQStCLG1CQUFtQixDQUFDO0FBQUMsZUFBMkMsbUJBQW1CO0FBQWdwQixrQkFBa0IsR0FBbUMsdUJBQXVCLENBQUMsSUFBMEQsNkNBQTZDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsSUFBMEQsNkNBQTZDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsSUFBeUQsNENBQTRDLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyxpQkFBK0MscUJBQXFCO0FBQWl6QixpQkFBaUIsWUFBNEMsdUJBQXVCLENBQUMsTUFBd0QseUNBQXlDLENBQUMsTUFBc0QsdUNBQXVDLENBQUMsTUFBMEQsMkNBQTJDLENBQUMsTUFBMEQsMkNBQTJDLENBQUMsTUFBNEQsNkNBQTZDLENBQUMsTUFBNEQsNkNBQTZDLENBQUMsTUFBZ0UsaURBQWlELENBQUM7QUFBQyxnQkFBNkMsb0JBQW9CLENBQWlDLHVCQUF1QjtBQUFnUyxxQkFBcUIsR0FBOEIsa0JBQWtCLENBQUMsSUFBaUMsb0JBQW9CLENBQUMsSUFBK0Isa0JBQWtCLENBQUMsSUFBaUMsb0JBQW9CLENBQUMsSUFBK0Isa0JBQWtCLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCLENBQWlDLHVCQUF1QixDQUE4RCxvREFBb0QsQ0FBK0MscUNBQXFDO0FBQTRSLHNCQUFzQixHQUFtRCx1Q0FBdUMsQ0FBQyxVQUFVLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztBQUFDLHFCQUF1RCx5QkFBeUI7QUFBNFIsc0JBQXNCLEdBQW1ELHVDQUF1QyxDQUFDLFVBQVUsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUEyUix1QkFBdUIsR0FBa0Qsc0NBQXNDLENBQUMsVUFBVSxDQUFDLElBQThDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxHQUE4QixrQkFBa0IsQ0FBQyxTQUFTLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQXdSLG9CQUFvQixHQUFrRCxzQ0FBc0MsQ0FBQyxVQUFVLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUI7QUFBeVIsdUJBQXVCLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBaUQscUNBQXFDLENBQUMsVUFBVSxDQUFDO0FBQUMsc0JBQXlELDBCQUEwQjtBQUE2Uix1QkFBdUIsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQThDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxHQUFtRCx1Q0FBdUMsQ0FBQyxVQUFVLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTRSLHdCQUF3QixHQUE4QixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQWtELHNDQUFzQyxDQUFDLFVBQVUsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBeVIscUJBQXFCLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBa0Qsc0NBQXNDLENBQUMsVUFBVSxDQUFDO0FBQUMsb0JBQXFELHdCQUF3QjtBQUF3bUIsb0JBQW9CLHNCQUFzRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBcUMsMkJBQTJCLENBQUMsSUFBMkMsOEJBQThCLENBQUMsSUFBd0MsMkJBQTJCLENBQUMsSUFBSSxTQUFTLENBQTJDLGlDQUFpQyxDQUFDLElBQTJDLDhCQUE4QixDQUFDLEdBQUcsU0FBUyxDQUE2QixtQkFBbUIsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUIsQ0FBK0QscURBQXFELENBQWlDLHVCQUF1QjtBQUE0b0Isd0JBQXdCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUMsSUFBSSxTQUFTLENBQW9ELDBDQUEwQyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUEwb0Isd0JBQXdCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUMsSUFBSSxTQUFTLENBQW1ELHlDQUF5QyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUEyb0IseUJBQXlCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsSUFBSSxTQUFTLENBQW9ELDBDQUEwQyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUEwb0Isc0JBQXNCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsSUFBSSxTQUFTLENBQXFELDJDQUEyQyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUF3USxxQkFBcUIsSUFBd0MsMkJBQTJCLENBQUMsUUFBUSxTQUFTLENBQXdDLDhCQUE4QixDQUFDLEdBQUcsU0FBUyxDQUFxQywyQkFBMkIsQ0FBQztBQUFDLG9CQUFvRCx1QkFBdUIsQ0FBK0QscURBQXFELENBQWtDLHdCQUF3QjtBQUF3Vyx5QkFBeUIsSUFBeUQsNENBQTRDLENBQUMsUUFBUSxTQUFTLENBQXFELDJDQUEyQyxDQUFDLEdBQUcsU0FBUyxDQUFxRCwyQ0FBMkMsQ0FBQztBQUFDLHdCQUE2RCw0QkFBNEI7QUFBOFAseUJBQXlCLElBQUksU0FBUyxDQUFvRCwwQ0FBMEMsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUM7QUFBQyx3QkFBNkQsNEJBQTRCO0FBQStQLDBCQUEwQixJQUFJLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsR0FBRyxTQUFTLENBQXFELDJDQUEyQyxDQUFDO0FBQUMseUJBQStELDZCQUE2QjtBQUF3Vyx1QkFBdUIsSUFBMEQsNkNBQTZDLENBQUMsUUFBUSxTQUFTLENBQW9ELDBDQUEwQyxDQUFDLEdBQUcsU0FBUyxDQUFzRCw0Q0FBNEMsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBc0Qsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQUMsaUJBQStDLHFCQUFxQjtBQUE0TCxzQkFBc0IsR0FBRyxTQUFTLENBQTBDLGdDQUFnQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHFCQUF1RCx5QkFBeUI7QUFBbU0seUJBQXlCLEdBQUcsU0FBUyxDQUE0QyxrQ0FBa0MsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyx3QkFBNkQsNEJBQTRCO0FBQTRMLHNCQUFzQixHQUFHLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUFtTSx5QkFBeUIsR0FBRyxTQUFTLENBQTRDLGtDQUFrQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHdCQUE2RCw0QkFBNEI7QUFBMkwsdUJBQXVCLEdBQUcsU0FBUyxDQUF5QywrQkFBK0IsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQWtNLDBCQUEwQixHQUFHLFNBQVMsQ0FBMkMsaUNBQWlDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMseUJBQStELDZCQUE2QjtBQUF3TCxvQkFBb0IsR0FBRyxTQUFTLENBQXlDLCtCQUErQixDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUI7QUFBK0wsdUJBQXVCLEdBQUcsU0FBUyxDQUEyQyxpQ0FBaUMsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQXVNLHlCQUF5QixHQUFHLFNBQVMsQ0FBOEMsb0NBQW9DLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUFzTSwwQkFBMEIsR0FBRyxTQUFTLENBQTZDLG1DQUFtQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHlCQUErRCw2QkFBNkI7QUFBd00sNEJBQTRCLEdBQUcsU0FBUyxDQUE2QyxtQ0FBbUMsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQywyQkFBbUUsK0JBQStCO0FBQXVNLDZCQUE2QixHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQztBQUF1RCxtQkFBbUIsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7QUFBQyxrQkFBaUQsc0JBQXNCO0FBQW1JLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBeUMsK0JBQStCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTBJLDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMkMsaUNBQWlDLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCO0FBQXFJLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTRJLDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCO0FBQW9JLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBeUMsK0JBQStCLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQTJJLDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMkMsaUNBQWlDLENBQUM7QUFBQywwQkFBaUUsOEJBQThCO0FBQW1JLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCO0FBQTBJLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQXdNLDBCQUEwQixHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUMsR0FBRyxTQUFTLENBQThDLG9DQUFvQyxDQUFDO0FBQUMseUJBQStELDZCQUE2QjtBQUF1TSwyQkFBMkIsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDLEdBQUcsU0FBUyxDQUE2QyxtQ0FBbUMsQ0FBQztBQUFDLDBCQUFpRSw4QkFBOEI7QUFBd00sOEJBQThCLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQyxHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUM7QUFBQyw2QkFBdUUsaUNBQWlDO0FBQXlNLDZCQUE2QixHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUMsR0FBRyxTQUFTLENBQTZDLG1DQUFtQyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQztBQUF3cUMsZ0JBQWdCLEdBQWdGLG9FQUFvRSxDQUE0QyxrQ0FBa0MsQ0FBQyxJQUFzRix5RUFBeUUsQ0FBNEMsa0NBQWtDLENBQUMsSUFBc0YseUVBQXlFLENBQTJDLGlDQUFpQyxDQUFDLElBQTBGLDZFQUE2RSxDQUEyQyxpQ0FBaUMsQ0FBQyxHQUE4RSxrRUFBa0UsQ0FBMkMsaUNBQWlDLENBQUM7QUFBQyxpQ0FBaUMsbUNBQW1DLENBQUMsMkJBQTJCLENBQTZCLG1CQUFtQjtBQUErcEIsbUJBQW1CLEdBQXVELDJDQUEyQyxDQUEyQyxpQ0FBaUMsQ0FBQyxTQUFTLENBQUMsSUFBeUQsNENBQTRDLENBQTJDLGlDQUFpQyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLFNBQVMsQ0FBQyxJQUF3RCwyQ0FBMkMsQ0FBQyxHQUF3Qyw0QkFBNEIsQ0FBQztBQUFDLGtCQUFrQiw2Q0FBNkMsQ0FBQyxxQ0FBcUMsQ0FBZ0Msc0JBQXNCO0FBQStwQixtQkFBbUIsR0FBdUQsMkNBQTJDLENBQTJDLGlDQUFpQyxDQUFDLFNBQVMsQ0FBQyxJQUF5RCw0Q0FBNEMsQ0FBMkMsaUNBQWlDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsU0FBUyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLEdBQXdDLDRCQUE0QixDQUFDO0FBQUMsa0JBQWtCLDZDQUE2QyxDQUFDLHFDQUFxQyxDQUFnQyxzQkFBc0I7QUFBZ1Usb0JBQW9CLEdBQXdDLDRCQUE0QixDQUFDLElBQXlELDRDQUE0QyxDQUFDLFNBQVMsQ0FBQyxHQUF1RCwyQ0FBMkMsQ0FBQyxTQUFTLENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCLENBQStELHFEQUFxRCxDQUFpQyx1QkFBdUIsQ0FBQyw2Q0FBNkMsQ0FBQyxxQ0FBcUM7QUFBZ1Usb0JBQW9CLEdBQXdDLDRCQUE0QixDQUFDLElBQXlELDRDQUE0QyxDQUFDLFNBQVMsQ0FBQyxHQUF1RCwyQ0FBMkMsQ0FBQyxTQUFTLENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCLENBQStELHFEQUFxRCxDQUFDLDZDQUE2QyxDQUFDLHFDQUFxQyxDQUFpQyx1QkFBdUI7QUFBaVYsNkJBQTZCLEdBQXlELDZDQUE2QyxDQUFDLFNBQVMsQ0FBQyxJQUFtQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsSUFBbUMsc0JBQXNCLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyw0QkFBcUUsZ0NBQWdDLENBQTRDLGtDQUFrQztBQUFnViw0QkFBNEIsR0FBeUQsNkNBQTZDLENBQUMsU0FBUyxDQUFDLElBQW9DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxJQUFrQyxxQkFBcUIsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQztBQUFDLDJCQUFtRSwrQkFBK0IsQ0FBNEMsa0NBQWtDO0FBQW9LLDhCQUE4QixHQUFHLFNBQVMsQ0FBQyxHQUF3RCw0Q0FBNEMsQ0FBQyxTQUFTLENBQUM7QUFBQyw2QkFBdUUsaUNBQWlDLENBQTJDLGlDQUFpQztBQUF1Syw2QkFBNkIsR0FBRyxTQUFTLENBQUMsR0FBMEQsOENBQThDLENBQUMsU0FBUyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQyxDQUEyQyxpQ0FBaUM7QUFBNEssb0JBQW9CLEdBQXFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCLENBQWlDLHVCQUF1QjtBQUFrTCw0QkFBNEIsR0FBb0Msd0JBQXdCLENBQUMsU0FBUyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztBQUFDLDJCQUFtRSwrQkFBK0IsQ0FBc0MsNEJBQTRCO0FBQWlMLDZCQUE2QixHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQyxDQUF1Qyw2QkFBNkI7QUFBOEssMEJBQTBCLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCLENBQXNDLDRCQUE0QjtBQUFpTCwyQkFBMkIsR0FBb0Msd0JBQXdCLENBQUMsU0FBUyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztBQUFDLDBCQUFpRSw4QkFBOEIsQ0FBdUMsNkJBQTZCO0FBQW1ILHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxHQUFvQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCLENBQWlDLHVCQUF1QjtBQUF5SCw2QkFBNkIsR0FBRyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQyxDQUFzQyw0QkFBNEI7QUFBNEgsOEJBQThCLEdBQUcsU0FBUyxDQUFDLEdBQW9DLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUFDLDZCQUF1RSxpQ0FBaUMsQ0FBdUMsNkJBQTZCO0FBQXlILDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxHQUFvQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFBQywwQkFBaUUsOEJBQThCLENBQXNDLDRCQUE0QjtBQUF3SCw0QkFBNEIsR0FBRyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsMkJBQW1FLCtCQUErQixDQUF1Qyw2QkFBNkI7QUFBMmYsaUJBQWlCLEdBQWlELHFDQUFxQyxDQUFDLFFBQXdDLHVCQUF1QixDQUErQyxxQ0FBcUMsQ0FBQyxRQUF3Qyx1QkFBdUIsQ0FBK0MscUNBQXFDLENBQUMsU0FBUyxDQUFDLEdBQTRDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQztBQUFDLGdCQUE4QyxxQkFBcUIsQ0FBNEQsa0RBQWtELENBQThCLG9CQUFvQixDQUFtQyx5QkFBeUI7QUFBb1gsd0JBQXdCLEdBQUcsU0FBUyxDQUEyQyxpQ0FBaUMsQ0FBd0MsOEJBQThCLENBQUMsSUFBcUMsd0JBQXdCLENBQUMsSUFBbUMsc0JBQXNCLENBQUMsR0FBRyxTQUFTLENBQTRCLGtCQUFrQixDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUF3TixrQkFBa0IsR0FBRyxTQUFTLENBQTBELGdEQUFnRCxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBNkosbUJBQW1CLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUF3RCw4Q0FBOEMsQ0FBQztBQUFDLGtCQUFpRCxzQkFBc0I7QUFBdUgsa0JBQWtCLEdBQUcsU0FBUyxDQUFxQywyQkFBMkIsQ0FBQyxJQUFJLFNBQVMsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBeWhCLHNCQUFzQixHQUFHLFNBQVMsQ0FBOEQsb0RBQW9ELENBQW1FLHlEQUF5RCxDQUFDLElBQUksU0FBUyxDQUFpRSx1REFBdUQsQ0FBaUUsdURBQXVELENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FBQXloQixzQkFBc0IsR0FBRyxTQUFTLENBQThELG9EQUFvRCxDQUFtRSx5REFBeUQsQ0FBQyxJQUFJLFNBQVMsQ0FBaUUsdURBQXVELENBQWlFLHVEQUF1RCxDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUEwaEIsdUJBQXVCLEdBQUcsU0FBUyxDQUE2RCxtREFBbUQsQ0FBbUUseURBQXlELENBQUMsSUFBSSxTQUFTLENBQWtFLHdEQUF3RCxDQUFpRSx1REFBdUQsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBdWhCLG9CQUFvQixHQUFHLFNBQVMsQ0FBNkQsbURBQW1ELENBQW1FLHlEQUF5RCxDQUFDLElBQUksU0FBUyxDQUFrRSx3REFBd0QsQ0FBaUUsdURBQXVELENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCO0FBQXFJLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBcUMsMkJBQTJCLENBQUMsR0FBRyxTQUFTLENBQUM7QUFBQyxrQkFBaUQsc0JBQXNCO0FBQTBoQix1QkFBdUIsSUFBSSxTQUFTLENBQWtFLHdEQUF3RCxDQUFtRSx5REFBeUQsQ0FBQyxHQUFHLFNBQVMsQ0FBNkQsbURBQW1ELENBQWlFLHVEQUF1RCxDQUFDO0FBQUMsc0JBQXlELDBCQUEwQixDQUF3Qyw4QkFBOEI7QUFBc1IsdUJBQXVCLElBQUksU0FBUyxDQUFpRSx1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCLENBQXNDLDRCQUE0QjtBQUF1Uix3QkFBd0IsSUFBSSxTQUFTLENBQWtFLHdEQUF3RCxDQUFDLEdBQUcsU0FBUyxDQUFxRCwyQ0FBMkMsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkIsQ0FBdUMsNkJBQTZCO0FBQXdoQixxQkFBcUIsSUFBSSxTQUFTLENBQWlFLHVEQUF1RCxDQUFtRSx5REFBeUQsQ0FBQyxHQUFHLFNBQVMsQ0FBOEQsb0RBQW9ELENBQWlFLHVEQUF1RCxDQUFDO0FBQUMsb0JBQXFELHdCQUF3QixDQUF3Qyw4QkFBOEI7QUFBNEwsdUJBQXVCLEdBQTRDLGdDQUFnQyxDQUFDLGtCQUFrQixDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsc0JBQXlELDBCQUEwQjtBQUE0TCx1QkFBdUIsR0FBNEMsZ0NBQWdDLENBQUMsa0JBQWtCLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTJMLHdCQUF3QixHQUEyQywrQkFBK0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBd0wscUJBQXFCLEdBQTJDLCtCQUErQixDQUFDLGtCQUFrQixDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsb0JBQXFELHdCQUF3QjtBQUEwTCx3QkFBd0IsR0FBbUMsdUJBQXVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBeUMsK0JBQStCLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQTRMLHdCQUF3QixHQUFtQyx1QkFBdUIsQ0FBQyxHQUFHLGlCQUFpQixDQUEwQyxnQ0FBZ0MsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBMkwseUJBQXlCLEdBQW1DLHVCQUF1QixDQUFDLEdBQUcsaUJBQWlCLENBQXlDLCtCQUErQixDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUEwTCxzQkFBc0IsR0FBbUMsdUJBQXVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBMEMsZ0NBQWdDLENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FDTHo0ckU7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Q0FZQztBQUNEOzs7Ozs7Ozs7O0NBVUM7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiOy8qIVxuICogYW5pbWF0ZS5jc3MgLSBodHRwczovL2FuaW1hdGUuc3R5bGUvXG4gKiBWZXJzaW9uIC0gNC4xLjFcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgQW5pbWF0ZS5jc3NcbiAqLzpyb290ey0tYW5pbWF0ZS1kdXJhdGlvbjoxczstLWFuaW1hdGUtZGVsYXk6MXM7LS1hbmltYXRlLXJlcGVhdDoxfS5hbmltYXRlX19hbmltYXRlZHstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxczthbmltYXRpb24tZHVyYXRpb246MXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tYW5pbWF0ZS1kdXJhdGlvbik7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWFuaW1hdGUtZHVyYXRpb24pOy13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9faW5maW5pdGV7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3JlcGVhdC0xey13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tYW5pbWF0ZS1yZXBlYXQpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tYW5pbWF0ZS1yZXBlYXQpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19yZXBlYXQtMnstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MjthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjI7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmNhbGModmFyKC0tYW5pbWF0ZS1yZXBlYXQpKjIpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Y2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkqMil9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3JlcGVhdC0zey13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDozO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Mzstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Y2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkqMyk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDpjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSozKX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktMXN7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MXM7YW5pbWF0aW9uLWRlbGF5OjFzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OnZhcigtLWFuaW1hdGUtZGVsYXkpO2FuaW1hdGlvbi1kZWxheTp2YXIoLS1hbmltYXRlLWRlbGF5KX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktMnN7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MnM7YW5pbWF0aW9uLWRlbGF5OjJzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqMik7YW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqMil9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTNzey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjNzO2FuaW1hdGlvbi1kZWxheTozczstd2Via2l0LWFuaW1hdGlvbi1kZWxheTpjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpKjMpO2FuaW1hdGlvbi1kZWxheTpjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpKjMpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19kZWxheS00c3std2Via2l0LWFuaW1hdGlvbi1kZWxheTo0czthbmltYXRpb24tZGVsYXk6NHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSo0KTthbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSo0KX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktNXN7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6NXM7YW5pbWF0aW9uLWRlbGF5OjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqNSk7YW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqNSl9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2Zhc3Rlcnstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNXM7YW5pbWF0aW9uLWR1cmF0aW9uOi41czstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pLzIpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pLzIpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYXN0ey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi44czthbmltYXRpb24tZHVyYXRpb246LjhzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC44KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjgpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19zbG93ey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjJzO2FuaW1hdGlvbi1kdXJhdGlvbjoyczstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjIpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjIpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19zbG93ZXJ7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246M3M7YW5pbWF0aW9uLWR1cmF0aW9uOjNzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMyk7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMyl9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSkscHJpbnR7LmFuaW1hdGVfX2FuaW1hdGVkey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFtcyFpbXBvcnRhbnQ7YW5pbWF0aW9uLWR1cmF0aW9uOjFtcyFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjFtcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kdXJhdGlvbjoxbXMhaW1wb3J0YW50Oy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxIWltcG9ydGFudDthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjEhaW1wb3J0YW50fS5hbmltYXRlX19hbmltYXRlZFtjbGFzcyo9T3V0XXtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2V7MCUsMjAlLDUzJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTQwJSw0MyV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSl9NzAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xNXB4LDApIHNjYWxlWSgxLjA1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTVweCwwKSBzY2FsZVkoMS4wNSl9ODAley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKX19QGtleWZyYW1lcyBib3VuY2V7MCUsMjAlLDUzJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTQwJSw0MyV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSl9NzAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xNXB4LDApIHNjYWxlWSgxLjA1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTVweCwwKSBzY2FsZVkoMS4wNSl9ODAley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKX19LmFuaW1hdGVfX2JvdW5jZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZTthbmltYXRpb24tbmFtZTpib3VuY2U7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyBmbGFzaHswJSw1MCUsdG97b3BhY2l0eToxfTI1JSw3NSV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZsYXNoezAlLDUwJSx0b3tvcGFjaXR5OjF9MjUlLDc1JXtvcGFjaXR5OjB9fS5hbmltYXRlX19mbGFzaHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsYXNoO2FuaW1hdGlvbi1uYW1lOmZsYXNofUAtd2Via2l0LWtleWZyYW1lcyBwdWxzZXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjA1LDEuMDUsMS4wNSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwxLjA1LDEuMDUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHB1bHNlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDUsMS4wNSwxLjA1KTt0cmFuc2Zvcm06c2NhbGUzZCgxLjA1LDEuMDUsMS4wNSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fS5hbmltYXRlX19wdWxzZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnB1bHNlO2FuaW1hdGlvbi1uYW1lOnB1bHNlOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fUAtd2Via2l0LWtleWZyYW1lcyBydWJiZXJCYW5kezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMjUsLjc1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMjUsLjc1LDEpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC43NSwxLjI1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC43NSwxLjI1LDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMTUsLjg1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMTUsLjg1LDEpfTY1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NSwxLjA1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwxLjA1LDEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDUsLjk1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDUsLjk1LDEpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHJ1YmJlckJhbmR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xNSwuODUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xNSwuODUsMSl9NjUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fS5hbmltYXRlX19ydWJiZXJCYW5key13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cnViYmVyQmFuZDthbmltYXRpb24tbmFtZTpydWJiZXJCYW5kfUAtd2Via2l0LWtleWZyYW1lcyBzaGFrZVh7MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0xMCUsMzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCl9MjAlLDQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApfX1Aa2V5ZnJhbWVzIHNoYWtlWHswJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwJSwzMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX0yMCUsNDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCl9fS5hbmltYXRlX19zaGFrZVh7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzaGFrZVg7YW5pbWF0aW9uLW5hbWU6c2hha2VYfUAtd2Via2l0LWtleWZyYW1lcyBzaGFrZVl7MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0xMCUsMzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCl9MjAlLDQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApfX1Aa2V5ZnJhbWVzIHNoYWtlWXswJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwJSwzMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX0yMCUsNDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCl9fS5hbmltYXRlX19zaGFrZVl7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzaGFrZVk7YW5pbWF0aW9uLW5hbWU6c2hha2VZfUAtd2Via2l0LWtleWZyYW1lcyBoZWFkU2hha2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX02LjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyl9MTguNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpfTMxLjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyl9NDMuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfX1Aa2V5ZnJhbWVzIGhlYWRTaGFrZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTYuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKX0xOC41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyl9MzEuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKX00My41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9fS5hbmltYXRlX19oZWFkU2hha2V7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpoZWFkU2hha2U7YW5pbWF0aW9uLW5hbWU6aGVhZFNoYWtlfUAtd2Via2l0LWtleWZyYW1lcyBzd2luZ3syMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE1ZGVnKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpfTYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC01ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX19QGtleWZyYW1lcyBzd2luZ3syMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE1ZGVnKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpfTYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC01ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX19LmFuaW1hdGVfX3N3aW5ney13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcjstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnN3aW5nO2FuaW1hdGlvbi1uYW1lOnN3aW5nfUAtd2Via2l0LWtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKDNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoM2RlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19QGtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKDNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoM2RlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmFuaW1hdGVfX3RhZGF7LXdlYmtpdC1hbmltYXRpb24tbmFtZTp0YWRhO2FuaW1hdGlvbi1uYW1lOnRhZGF9QC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTE1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjUlLDAsMCkgcm90YXRlKC01ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1JSwwLDApIHJvdGF0ZSgtNWRlZyl9MzAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwJSwwLDApIHJvdGF0ZSgzZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAlLDAsMCkgcm90YXRlKDNkZWcpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTUlLDAsMCkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTE1JSwwLDApIHJvdGF0ZSgtM2RlZyl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwJSwwLDApIHJvdGF0ZSgyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAlLDAsMCkgcm90YXRlKDJkZWcpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNSUsMCwwKSByb3RhdGUoLTFkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNSUsMCwwKSByb3RhdGUoLTFkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgd29iYmxlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MTUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNSUsMCwwKSByb3RhdGUoLTVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjUlLDAsMCkgcm90YXRlKC01ZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAlLDAsMCkgcm90YXRlKDNkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMCUsMCwwKSByb3RhdGUoM2RlZyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNSUsMCwwKSByb3RhdGUoLTNkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTUlLDAsMCkgcm90YXRlKC0zZGVnKX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAlLDAsMCkgcm90YXRlKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMCUsMCwwKSByb3RhdGUoMmRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01JSwwLDApIHJvdGF0ZSgtMWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01JSwwLDApIHJvdGF0ZSgtMWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3dvYmJsZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOndvYmJsZTthbmltYXRpb24tbmFtZTp3b2JibGV9QC13ZWJraXQta2V5ZnJhbWVzIGplbGxvezAlLDExLjElLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MjIuMiV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTt0cmFuc2Zvcm06c2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKX0zMy4zJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTt0cmFuc2Zvcm06c2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyl9NDQuNCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyl9NTUuNSV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpO3RyYW5zZm9ybTpza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyl9NjYuNiV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLS43ODEyNWRlZykgc2tld1koLS43ODEyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0uNzgxMjVkZWcpIHNrZXdZKC0uNzgxMjVkZWcpfTc3Ljcley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC4zOTA2MjVkZWcpIHNrZXdZKC4zOTA2MjVkZWcpO3RyYW5zZm9ybTpza2V3WCguMzkwNjI1ZGVnKSBza2V3WSguMzkwNjI1ZGVnKX04OC44JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtLjE5NTMxMjVkZWcpIHNrZXdZKC0uMTk1MzEyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0uMTk1MzEyNWRlZykgc2tld1koLS4xOTUzMTI1ZGVnKX19QGtleWZyYW1lcyBqZWxsb3swJSwxMS4xJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTIyLjIley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyl9MzMuMyV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7dHJhbnNmb3JtOnNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpfTQ0LjQley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTt0cmFuc2Zvcm06c2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpfTU1LjUley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTt0cmFuc2Zvcm06c2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpfTY2LjYley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC0uNzgxMjVkZWcpIHNrZXdZKC0uNzgxMjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtLjc4MTI1ZGVnKSBza2V3WSgtLjc4MTI1ZGVnKX03Ny43JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCguMzkwNjI1ZGVnKSBza2V3WSguMzkwNjI1ZGVnKTt0cmFuc2Zvcm06c2tld1goLjM5MDYyNWRlZykgc2tld1koLjM5MDYyNWRlZyl9ODguOCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLS4xOTUzMTI1ZGVnKSBza2V3WSgtLjE5NTMxMjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtLjE5NTMxMjVkZWcpIHNrZXdZKC0uMTk1MzEyNWRlZyl9fS5hbmltYXRlX19qZWxsb3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmplbGxvO2FuaW1hdGlvbi1uYW1lOmplbGxvOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXJ9QC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0QmVhdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MTQley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9Mjgley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX00MiV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGhlYXJ0QmVhdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MTQley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9Mjgley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX00MiV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0uYW5pbWF0ZV9faGVhcnRCZWF0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6aGVhcnRCZWF0O2FuaW1hdGlvbi1uYW1lOmhlYXJ0QmVhdDstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjNzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjNzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMS4zKTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSoxLjMpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fUAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5Eb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMjAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGJhY2tJbkRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fS5hbmltYXRlX19iYWNrSW5Eb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja0luRG93bjthbmltYXRpb24tbmFtZTpiYWNrSW5Eb3dufUAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5MZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGJhY2tJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fS5hbmltYXRlX19iYWNrSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja0luTGVmdDthbmltYXRpb24tbmFtZTpiYWNrSW5MZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYmFja0luUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fYmFja0luUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrSW5SaWdodDthbmltYXRpb24tbmFtZTpiYWNrSW5SaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja0luVXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGJhY2tJblVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN304MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19LmFuaW1hdGVfX2JhY2tJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja0luVXA7YW5pbWF0aW9uLW5hbWU6YmFja0luVXB9QC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXREb3duezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg3MDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9fUBrZXlmcmFtZXMgYmFja091dERvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg3MDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN319LmFuaW1hdGVfX2JhY2tPdXREb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja091dERvd247YW5pbWF0aW9uLW5hbWU6YmFja091dERvd259QC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXRMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX1Aa2V5ZnJhbWVzIGJhY2tPdXRMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX0uYW5pbWF0ZV9fYmFja091dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrT3V0TGVmdDthbmltYXRpb24tbmFtZTpiYWNrT3V0TGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN319QGtleWZyYW1lcyBiYWNrT3V0UmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX0uYW5pbWF0ZV9fYmFja091dFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja091dFJpZ2h0O2FuaW1hdGlvbi1uYW1lOmJhY2tPdXRSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dFVwezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTcwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTcwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN319QGtleWZyYW1lcyBiYWNrT3V0VXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX0uYW5pbWF0ZV9fYmFja091dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja091dFVwO2FuaW1hdGlvbi1uYW1lOmJhY2tPdXRVcH1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW57MCUsMjAlLDQwJSw2MCUsODAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KTt0cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIGJvdW5jZUluezAlLDIwJSw0MCUsNjAlLDgwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmFuaW1hdGVfX2JvdW5jZUluey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZUluO2FuaW1hdGlvbi1uYW1lOmJvdW5jZUlufUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbkRvd257MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKSBzY2FsZVkoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDI1cHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApIHNjYWxlWSguOSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45NSl9OTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApIHNjYWxlWSguOTg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCkgc2NhbGVZKC45ODUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgYm91bmNlSW5Eb3duezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCkgc2NhbGVZKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCkgc2NhbGVZKDMpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApIHNjYWxlWSguOSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjVweCwwKSBzY2FsZVkoLjkpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTUpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKSBzY2FsZVkoLjk4NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApIHNjYWxlWSguOTg1KX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fYm91bmNlSW5Eb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5Eb3duO2FuaW1hdGlvbi1uYW1lOmJvdW5jZUluRG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5MZWZ0ezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCkgc2NhbGVYKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCkgc2NhbGVYKDMpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApIHNjYWxlWCgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApIHNjYWxlWCgxKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKSBzY2FsZVgoLjk4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKSBzY2FsZVgoLjk4KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXB4LDAsMCkgc2NhbGVYKC45OTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1cHgsMCwwKSBzY2FsZVgoLjk5NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBib3VuY2VJbkxlZnR7MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKSBzY2FsZVgoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKSBzY2FsZVgoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCkgc2NhbGVYKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCkgc2NhbGVYKDEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApIHNjYWxlWCguOTgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApIHNjYWxlWCguOTgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1cHgsMCwwKSBzY2FsZVgoLjk5NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApIHNjYWxlWCguOTk1KX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fYm91bmNlSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5MZWZ0O2FuaW1hdGlvbi1uYW1lOmJvdW5jZUluTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5SaWdodHswJSw2MCUsNzUlLDkwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzAwMHB4LDAsMCkgc2NhbGVYKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKSBzY2FsZVgoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApIHNjYWxlWCgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1cHgsMCwwKSBzY2FsZVgoMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKSBzY2FsZVgoLjk4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApIHNjYWxlWCguOTgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgYm91bmNlSW5SaWdodHswJSw2MCUsNzUlLDkwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzAwMHB4LDAsMCkgc2NhbGVYKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKSBzY2FsZVgoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApIHNjYWxlWCgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1cHgsMCwwKSBzY2FsZVgoMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKSBzY2FsZVgoLjk4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApIHNjYWxlWCguOTgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19ib3VuY2VJblJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5SaWdodDthbmltYXRpb24tbmFtZTpib3VuY2VJblJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDMwMDBweCwwKSBzY2FsZVkoNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMzAwMHB4LDApIHNjYWxlWSg1KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk1KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApIHNjYWxlWSguOTg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApIHNjYWxlWSguOTg1KX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGJvdW5jZUluVXB7MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMzAwMHB4LDApIHNjYWxlWSg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwzMDAwcHgsMCkgc2NhbGVZKDUpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApIHNjYWxlWSguOSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApIHNjYWxlWSguOTUpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCkgc2NhbGVZKC45ODUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19ib3VuY2VJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5VcDthbmltYXRpb24tbmFtZTpib3VuY2VJblVwfUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXR7MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX01MCUsNTUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX19QGtleWZyYW1lcyBib3VuY2VPdXR7MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX01MCUsNTUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX19LmFuaW1hdGVfX2JvdW5jZU91dHstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNzVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNzVzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXQ7YW5pbWF0aW9uLW5hbWU6Ym91bmNlT3V0fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXREb3duezIwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpfTQwJSw0NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApIHNjYWxlWSgzKX19QGtleWZyYW1lcyBib3VuY2VPdXREb3duezIwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpfTQwJSw0NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApIHNjYWxlWSgzKX19LmFuaW1hdGVfX2JvdW5jZU91dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXREb3duO2FuaW1hdGlvbi1uYW1lOmJvdW5jZU91dERvd259QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dExlZnR7MjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMHB4LDAsMCkgc2NhbGVYKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjBweCwwLDApIHNjYWxlWCguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKSBzY2FsZVgoMik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKSBzY2FsZVgoMil9fUBrZXlmcmFtZXMgYm91bmNlT3V0TGVmdHsyMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsMCwwKSBzY2FsZVgoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMHB4LDAsMCkgc2NhbGVYKC45KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApIHNjYWxlWCgyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApIHNjYWxlWCgyKX19LmFuaW1hdGVfX2JvdW5jZU91dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXRMZWZ0O2FuaW1hdGlvbi1uYW1lOmJvdW5jZU91dExlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0ezIwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwcHgsMCwwKSBzY2FsZVgoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCwwLDApIHNjYWxlWCguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApIHNjYWxlWCgyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCkgc2NhbGVYKDIpfX1Aa2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0ezIwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwcHgsMCwwKSBzY2FsZVgoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCwwLDApIHNjYWxlWCguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApIHNjYWxlWCgyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCkgc2NhbGVYKDIpfX0uYW5pbWF0ZV9fYm91bmNlT3V0UmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXRSaWdodDthbmltYXRpb24tbmFtZTpib3VuY2VPdXRSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0VXB7MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTg1KX00MCUsNDUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMHB4LDApIHNjYWxlWSguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyl9fUBrZXlmcmFtZXMgYm91bmNlT3V0VXB7MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTg1KX00MCUsNDUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMHB4LDApIHNjYWxlWSguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyl9fS5hbmltYXRlX19ib3VuY2VPdXRVcHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZU91dFVwO2FuaW1hdGlvbi1uYW1lOmJvdW5jZU91dFVwfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW57MCV7b3BhY2l0eTowfXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBmYWRlSW57MCV7b3BhY2l0eTowfXRve29wYWNpdHk6MX19LmFuaW1hdGVfX2ZhZGVJbnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbjthbmltYXRpb24tbmFtZTpmYWRlSW59QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd257MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluRG93bnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJbkRvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5Eb3duO2FuaW1hdGlvbi1uYW1lOmZhZGVJbkRvd259QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd25CaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJbkRvd25CaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluRG93bkJpZ3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkRvd25CaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZUluRG93bkJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5MZWZ0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkxlZnQ7YW5pbWF0aW9uLW5hbWU6ZmFkZUluTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluTGVmdEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5MZWZ0Qmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluTGVmdEJpZzthbmltYXRpb24tbmFtZTpmYWRlSW5MZWZ0QmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluUmlnaHR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodDthbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHRCaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5SaWdodEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluUmlnaHRCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodEJpZzthbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodEJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXB7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJblVwezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVXA7YW5pbWF0aW9uLW5hbWU6ZmFkZUluVXB9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwQmlnezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluVXBCaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJblVwQmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVXBCaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZUluVXBCaWd9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblRvcExlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Ub3BMZWZ0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5Ub3BMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVG9wTGVmdDthbmltYXRpb24tbmFtZTpmYWRlSW5Ub3BMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Ub3BSaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Ub3BSaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJblRvcFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVG9wUmlnaHQ7YW5pbWF0aW9uLW5hbWU6ZmFkZUluVG9wUmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkJvdHRvbUxlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluQm90dG9tTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJbkJvdHRvbUxlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5Cb3R0b21MZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVJbkJvdHRvbUxlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkJvdHRvbVJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Cb3R0b21SaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5Cb3R0b21SaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkJvdHRvbVJpZ2h0O2FuaW1hdGlvbi1uYW1lOmZhZGVJbkJvdHRvbVJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZU91dHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX0uYW5pbWF0ZV9fZmFkZU91dHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd257MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0RG93bnswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0RG93bjthbmltYXRpb24tbmFtZTpmYWRlT3V0RG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd25CaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fUBrZXlmcmFtZXMgZmFkZU91dERvd25CaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fS5hbmltYXRlX19mYWRlT3V0RG93bkJpZ3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXREb3duQmlnO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXREb3duQmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0TGVmdHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9fUBrZXlmcmFtZXMgZmFkZU91dExlZnR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfX0uYW5pbWF0ZV9fZmFkZU91dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdDthbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnRCaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKX19QGtleWZyYW1lcyBmYWRlT3V0TGVmdEJpZ3swJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApfX0uYW5pbWF0ZV9fZmFkZU91dExlZnRCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdEJpZzthbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdEJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9fS5hbmltYXRlX19mYWRlT3V0UmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0UmlnaHQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0QmlnezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApfX0uYW5pbWF0ZV9fZmFkZU91dFJpZ2h0Qmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dFJpZ2h0QmlnO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRSaWdodEJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0VXB7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dFVwO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRVcH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwQmlnezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFVwQmlnezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9fS5hbmltYXRlX19mYWRlT3V0VXBCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0VXBCaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFVwQmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VG9wTGVmdHswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApfX1Aa2V5ZnJhbWVzIGZhZGVPdXRUb3BMZWZ0ezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0VG9wTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRUb3BMZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRUb3BMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VG9wUmlnaHR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFRvcFJpZ2h0ezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dFRvcFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dFRvcFJpZ2h0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRUb3BSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJvdHRvbVJpZ2h0ezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0Qm90dG9tUmlnaHR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dEJvdHRvbVJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dEJvdHRvbVJpZ2h0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRCb3R0b21SaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9fUBrZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0Qm90dG9tTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRCb3R0b21MZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRCb3R0b21MZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmbGlwezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0xdHVybik7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0xdHVybik7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9NDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xOTBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTUwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE3MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTcwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59ODAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwuOTUsLjk1KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwuOTUsLjk1KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59fUBrZXlmcmFtZXMgZmxpcHswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgtMXR1cm4pO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgtMXR1cm4pOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH01MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xNzBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCguOTUsLjk1LC45NSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCguOTUsLjk1LC45NSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmxpcHstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZTtiYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwO2FuaW1hdGlvbi1uYW1lOmZsaXB9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblh7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO29wYWNpdHk6MH00MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTVkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgZmxpcEluWHswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19LmFuaW1hdGVfX2ZsaXBJblh7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwSW5YO2FuaW1hdGlvbi1uYW1lOmZsaXBJblh9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJbll7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO29wYWNpdHk6MH00MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTIwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTIwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDEwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTVkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgZmxpcEluWXswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgxMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtNWRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19LmFuaW1hdGVfX2ZsaXBJbll7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwSW5ZO2FuaW1hdGlvbi1uYW1lOmZsaXBJbll9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmxpcE91dFh7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9MzAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX2ZsaXBPdXRYey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsaXBPdXRYO2FuaW1hdGlvbi1uYW1lOmZsaXBPdXRYOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDtiYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50fUAtd2Via2l0LWtleWZyYW1lcyBmbGlwT3V0WXswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTE1ZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTE1ZGVnKTtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZsaXBPdXRZezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTVkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTVkZWcpO29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19mbGlwT3V0WXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNzVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNzVzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwT3V0WTthbmltYXRpb24tbmFtZTpmbGlwT3V0WX1ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHNrZXdYKC0zMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO29wYWNpdHk6MH02MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goMjBkZWcpO3RyYW5zZm9ybTpza2V3WCgyMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJblJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgc2tld1goLTMwZGVnKTtvcGFjaXR5OjB9NjAley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDIwZGVnKTt0cmFuc2Zvcm06c2tld1goMjBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTVkZWcpO3RyYW5zZm9ybTpza2V3WCgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2xpZ2h0U3BlZWRJblJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZEluUmlnaHQ7YW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZEluUmlnaHQ7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9QC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgzMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goMzBkZWcpO29wYWNpdHk6MH02MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTIwZGVnKTt0cmFuc2Zvcm06c2tld1goLTIwZGVnKTtvcGFjaXR5OjF9ODAley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDVkZWcpO3RyYW5zZm9ybTpza2V3WCg1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgzMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goMzBkZWcpO29wYWNpdHk6MH02MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTIwZGVnKTt0cmFuc2Zvcm06c2tld1goLTIwZGVnKTtvcGFjaXR5OjF9ODAley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDVkZWcpO3RyYW5zZm9ybTpza2V3WCg1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fbGlnaHRTcGVlZEluTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmxpZ2h0U3BlZWRJbkxlZnQ7YW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZEluTGVmdDstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH1ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dFJpZ2h0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgc2tld1goMzBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgc2tld1goMzBkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBsaWdodFNwZWVkT3V0UmlnaHR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgzMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgzMGRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fbGlnaHRTcGVlZE91dFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZE91dFJpZ2h0O2FuaW1hdGlvbi1uYW1lOmxpZ2h0U3BlZWRPdXRSaWdodDstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59QC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXRMZWZ0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHNrZXdYKC0zMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goLTMwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goLTMwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX2xpZ2h0U3BlZWRPdXRMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZE91dExlZnQ7YW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZE91dExlZnQ7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTIwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMjAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0yMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTIwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fcm90YXRlSW57LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVJbjthbmltYXRpb24tbmFtZTpyb3RhdGVJbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fcm90YXRlSW5Eb3duTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZUluRG93bkxlZnQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlSW5Eb3duTGVmdDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fS5hbmltYXRlX19yb3RhdGVJbkRvd25SaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZUluRG93blJpZ2h0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZUluRG93blJpZ2h0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluVXBMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fcm90YXRlSW5VcExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVJblVwTGVmdDthbmltYXRpb24tbmFtZTpyb3RhdGVJblVwTGVmdDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fS5hbmltYXRlX19yb3RhdGVJblVwUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVJblVwUmlnaHQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlSW5VcFJpZ2h0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMDBkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyByb3RhdGVPdXR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjAwZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVPdXQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXJ9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXREb3duTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dERvd25MZWZ0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dERvd25MZWZ0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXREb3duUmlnaHR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fcm90YXRlT3V0RG93blJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0RG93blJpZ2h0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dERvd25SaWdodDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgYm90dG9tO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcExlZnR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgcm90YXRlT3V0VXBMZWZ0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fcm90YXRlT3V0VXBMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0VXBMZWZ0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dFVwTGVmdDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXRVcFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0VXBSaWdodDthbmltYXRpb24tbmFtZTpyb3RhdGVPdXRVcFJpZ2h0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIGhpbmdlezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fTIwJSw2MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dH00MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGhpbmdlezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fTIwJSw2MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dH00MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7b3BhY2l0eTowfX0uYW5pbWF0ZV9faGluZ2V7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MnM7YW5pbWF0aW9uLWR1cmF0aW9uOjJzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMik7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMik7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpoaW5nZTthbmltYXRpb24tbmFtZTpoaW5nZTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIGxlZnQ7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgamFja0luVGhlQm94ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgcm90YXRlKDMwZGVnKTt0cmFuc2Zvcm06c2NhbGUoLjEpIHJvdGF0ZSgzMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9NzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzZGVnKTt0cmFuc2Zvcm06cm90YXRlKDNkZWcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgamFja0luVGhlQm94ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgcm90YXRlKDMwZGVnKTt0cmFuc2Zvcm06c2NhbGUoLjEpIHJvdGF0ZSgzMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9NzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzZGVnKTt0cmFuc2Zvcm06cm90YXRlKDNkZWcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fS5hbmltYXRlX19qYWNrSW5UaGVCb3h7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpqYWNrSW5UaGVCb3g7YW5pbWF0aW9uLW5hbWU6amFja0luVGhlQm94fUAtd2Via2l0LWtleWZyYW1lcyByb2xsSW57MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgcm90YXRlKC0xMjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHJvdGF0ZSgtMTIwZGVnKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyByb2xsSW57MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgcm90YXRlKC0xMjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHJvdGF0ZSgtMTIwZGVnKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3JvbGxJbnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvbGxJbjthbmltYXRpb24tbmFtZTpyb2xsSW59QC13ZWJraXQta2V5ZnJhbWVzIHJvbGxPdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgcm90YXRlKDEyMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSByb3RhdGUoMTIwZGVnKX19QGtleWZyYW1lcyByb2xsT3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHJvdGF0ZSgxMjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgcm90YXRlKDEyMGRlZyl9fS5hbmltYXRlX19yb2xsT3V0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm9sbE91dDthbmltYXRpb24tbmFtZTpyb2xsT3V0fUAtd2Via2l0LWtleWZyYW1lcyB6b29tSW57MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX01MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHpvb21JbnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTUwJXtvcGFjaXR5OjF9fS5hbmltYXRlX196b29tSW57LXdlYmtpdC1hbmltYXRpb24tbmFtZTp6b29tSW47YW5pbWF0aW9uLW5hbWU6em9vbUlufUAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5Eb3duezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLC0xMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTEwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19QGtleWZyYW1lcyB6b29tSW5Eb3duezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLC0xMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTEwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19LmFuaW1hdGVfX3pvb21JbkRvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTp6b29tSW5Eb3duO2FuaW1hdGlvbi1uYW1lOnpvb21JbkRvd259QC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkxlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21JbkxlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX0uYW5pbWF0ZV9fem9vbUluTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21JbkxlZnQ7YW5pbWF0aW9uLW5hbWU6em9vbUluTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluUmlnaHR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsMCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21JblJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LDAsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsMCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19LmFuaW1hdGVfX3pvb21JblJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbUluUmlnaHQ7YW5pbWF0aW9uLW5hbWU6em9vbUluUmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIHpvb21JblVwezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDEwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwxMDAwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19QGtleWZyYW1lcyB6b29tSW5VcHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwxMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMTAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsLTYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsLTYwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSl9fS5hbmltYXRlX196b29tSW5VcHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21JblVwO2FuaW1hdGlvbi1uYW1lOnpvb21JblVwfUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0ezAle29wYWNpdHk6MX01MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgem9vbU91dHswJXtvcGFjaXR5OjF9NTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9dG97b3BhY2l0eTowfX0uYW5pbWF0ZV9fem9vbU91dHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21PdXQ7YW5pbWF0aW9uLW5hbWU6em9vbU91dH1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dERvd257NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwyMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21PdXREb3duezQwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19LmFuaW1hdGVfX3pvb21PdXREb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbU91dERvd247YW5pbWF0aW9uLW5hbWU6em9vbU91dERvd247LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0TGVmdHs0MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwwLDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwwLDApO3RyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwwLDApfX1Aa2V5ZnJhbWVzIHpvb21PdXRMZWZ0ezQwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LDAsMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9fS5hbmltYXRlX196b29tT3V0TGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21PdXRMZWZ0O2FuaW1hdGlvbi1uYW1lOnpvb21PdXRMZWZ0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgY2VudGVyfUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0UmlnaHR7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX19QGtleWZyYW1lcyB6b29tT3V0UmlnaHR7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX19LmFuaW1hdGVfX3pvb21PdXRSaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21PdXRSaWdodDthbmltYXRpb24tbmFtZTp6b29tT3V0UmlnaHQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGNlbnRlcn1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dFVwezQwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCw2MHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19QGtleWZyYW1lcyB6b29tT3V0VXB7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX0uYW5pbWF0ZV9fem9vbU91dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbU91dFVwO2FuaW1hdGlvbi1uYW1lOnpvb21PdXRVcDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5Eb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc2xpZGVJbkRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3NsaWRlSW5Eb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVJbkRvd247YW5pbWF0aW9uLW5hbWU6c2xpZGVJbkRvd259QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5MZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc2xpZGVJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3NsaWRlSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVJbkxlZnQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVJbkxlZnR9QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzbGlkZUluUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19zbGlkZUluUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZUluUmlnaHQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVJblJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluVXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc2xpZGVJblVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fc2xpZGVJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVJblVwO2FuaW1hdGlvbi1uYW1lOnNsaWRlSW5VcH1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXREb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9fUBrZXlmcmFtZXMgc2xpZGVPdXREb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9fS5hbmltYXRlX19zbGlkZU91dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZU91dERvd247YW5pbWF0aW9uLW5hbWU6c2xpZGVPdXREb3dufUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dExlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfX1Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9fS5hbmltYXRlX19zbGlkZU91dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZU91dExlZnQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVPdXRMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9fUBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfX0uYW5pbWF0ZV9fc2xpZGVPdXRSaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnNsaWRlT3V0UmlnaHQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVPdXRSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRVcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9fUBrZXlmcmFtZXMgc2xpZGVPdXRVcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9fS5hbmltYXRlX19zbGlkZU91dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVPdXRVcDthbmltYXRpb24tbmFtZTpzbGlkZU91dFVwfSIsIkBpbXBvcnQgXCJ+YW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW5cIjtcclxuLnBhZ2UtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcbi8qXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlMzI0MTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuKi9cclxuLypcclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjogI2RlMzI0MTtcclxufVxyXG4uLWJveC1zZC1lZmZlY3Q6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggNnB4IDJweCAjZGQ0YjM5O1xyXG59XHJcbiovXHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcclxuICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuLml0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDUwcHggNDFweCAzMHB4IDQxcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uaXRlbTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCByZ2IoMTkgMTkgMjggLyAxMiUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLml0ZW06aG92ZXIgLmljb25zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1YTVmO1xyXG59XHJcbi5pdGVtOmhvdmVyIC5pY29uIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTMwcHg7XHJcbn1cclxuLmljb24ge1xyXG4gIGNvbG9yOiAjZmY1YTVmO1xyXG4gIGZvbnQtc2l6ZTogNjhweDtcclxuICBsaW5lLWhlaWdodDogMTMwcHg7XHJcbn1cclxuaDQge1xyXG4gIGNvbG9yOiAjNDg0ODQ4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uaXRlbSAuZGV0YWlscyBwIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmRhc2hib2FyZCAuY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                //state(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "jfoX":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin layout/setting/setting.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/settings.service */ "6nr9");
/* harmony import */ var _shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/navbar-admin/navbar-admin.component */ "BXn/");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ "9fWq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SettingComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Home Page Header ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Header Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Header paragraph");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingComponent_ng_template_11_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.submitHeaderForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Home Page Titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Book Section Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Author Section Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Category Section Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingComponent_ng_template_11_Template_button_click_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.submitTitleForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Footer Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Footer Capation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Descrition");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Our mission to give the customers opportunity to enjoy high-quality services to Choose thier favorite book with us.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingComponent_ng_template_11_Template_button_click_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.submitFooterForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.homeHeaderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.HomeTitleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.HomeFooterForm);
} }
class SettingComponent {
    constructor(settingService) {
        this.settingService = settingService;
        this.isLoad = false;
        this.homeHeaderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
              Validators.pattern('[a-zA-Z]*')]*/),
            sub_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
              Validators.pattern('[a-zA-Z]*')]*/)
        });
        this.HomeTitleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            book: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
              Validators.pattern('[a-zA-Z]*')]*/),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
            Validators.pattern('[a-zA-Z]*')]*/),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
            Validators.pattern('[a-zA-Z]*')]*/)
        });
        this.HomeFooterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email] /*,Validators.maxLength(50),Validators.minLength(2),
              Validators.pattern('[a-zA-Z]*')]*/),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
            Validators.pattern('[a-zA-Z]*')]*/),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
            Validators.pattern('[a-zA-Z]*')]*/),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
            Validators.pattern('[a-zA-Z]*')]*/),
            capation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] /*,Validators.maxLength(50),Validators.minLength(2),
            Validators.pattern('[a-zA-Z]*')]*/)
        });
    }
    ngOnInit() {
        this.subscriber = this.settingService.getSettings()
            .subscribe((response) => {
            this.settings = response.body;
            this.isLoad = true;
            this.settings.find((section) => {
                if (section.sectionName == "home") {
                    this.homeHeaderForm.controls.title.setValue(section.sectionContent.title);
                    this.homeHeaderForm.controls.sub_title.setValue(section.sectionContent.sub_title);
                }
                else if (section.sectionName == "titles") {
                    this.HomeTitleForm.controls.book.setValue(section.sectionContent.book);
                    this.HomeTitleForm.controls.author.setValue(section.sectionContent.author);
                    this.HomeTitleForm.controls.category.setValue(section.sectionContent.category);
                }
                else if (section.sectionName == "footer-info") {
                    this.HomeFooterForm.controls.email.setValue(section.sectionContent.email);
                    this.HomeFooterForm.controls.phone.setValue(section.sectionContent.phone);
                    this.HomeFooterForm.controls.fax.setValue(section.sectionContent.fax);
                    this.HomeFooterForm.controls.title.setValue(section.sectionContent.title);
                    this.HomeFooterForm.controls.capation.setValue(section.sectionContent.capation);
                }
            });
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error getting settings content!",
                footer: ''
            });
        });
    }
    submitHeaderForm(e) {
        console.log(this.homeHeaderForm.controls.title.value);
        console.log(this.homeHeaderForm.controls.sub_title.value);
        let insertedData = {
            "title": this.homeHeaderForm.controls.title.value,
            "sub_title": this.homeHeaderForm.controls.sub_title.value
        };
        this.settingService.updateSetting("home", { sectionName: "home", sectionContent: insertedData })
            .subscribe((data) => {
            console.log(data);
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error updating home settings. Try again !",
                footer: ''
            });
        });
    }
    submitTitleForm(e) {
        console.log(this.HomeTitleForm.controls.book.value);
        console.log(this.HomeTitleForm.controls.author.value);
        console.log(this.HomeTitleForm.controls.category.value);
        let insertedData = {
            "book": this.HomeTitleForm.controls.book.value,
            "author": this.HomeTitleForm.controls.author.value,
            "category": this.HomeTitleForm.controls.category.value
        };
        this.settingService.updateSetting("titles", { sectionName: "titles", sectionContent: insertedData })
            .subscribe((data) => {
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error updating titles. Try again !",
                footer: ''
            });
        });
    }
    submitFooterForm(e) {
        console.log(this.HomeFooterForm.controls.email.value);
        console.log(this.HomeFooterForm.controls.phone.value);
        console.log(this.HomeFooterForm.controls.fax.value);
        console.log(this.HomeFooterForm.controls.title.value);
        console.log(this.HomeFooterForm.controls.capation.value);
        let insertedData = {
            "email": this.HomeFooterForm.controls.email.value,
            "phone": this.HomeFooterForm.controls.phone.value,
            "fax": this.HomeFooterForm.controls.fax.value,
            "title": this.HomeFooterForm.controls.title.value,
            "capation": this.HomeFooterForm.controls.capation.value
        };
        this.settingService.updateSetting("footer-info", { sectionName: "footer-info", sectionContent: insertedData })
            .subscribe((data) => {
            console.log(data);
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error updating footer settings. Try again !",
                footer: ''
            });
        });
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 13, vars: 2, consts: [[1, "content-page"], [1, "setting"], [1, "container"], [1, "content", "pt-5"], ["class", "row w-100", 4, "ngIf", "ngIfElse"], ["displayContent", ""], [1, "row", "w-100"], [1, "col-md-12", "text-center", "loader"], [1, "fas", "fa-spinner", "fa-spin", "fa-5x", "text-info"], [1, "container", "mt-5"], [1, "form-horizontal", 3, "formGroup"], [1, "mb-3"], ["for", "headerTitel", 1, "form-label"], ["type", "text", "id", "headerTitel", "formControlName", "title", 1, "form-control"], ["for", "headerPara", 1, "form-label"], ["type", "text", "id", "headerPara", "formControlName", "sub_title", 1, "form-control"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-custom", "btn-header", 3, "click"], [1, "form-horizontal", "mb-5", 3, "formGroup"], [1, "row"], [1, "mb-3", "col"], ["for", "bookSection", 1, "form-label"], ["type", "text", "id", "bookSection", "formControlName", "book", 1, "form-control"], ["for", "authorSection", 1, "form-label"], ["type", "text", "id", "authorSection", "formControlName", "author", 1, "form-control"], ["for", "categorySection", 1, "form-label"], ["type", "text", "id", "categorySection", "formControlName", "category", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phone", 1, "form-label"], ["type", "phone", "id", "phone", "formControlName", "phone", 1, "form-control"], ["for", "fax", 1, "form-label"], ["type", "text", "id", "fax", "formControlName", "fax", 1, "form-control"], ["for", "footerTitle", 1, "form-label"], ["type", "text", "id", "footerTitle", "formControlName", "title", 1, "form-control"], [1, "form-floating"], ["for", "floatingTextarea2"], ["id", "floatingTextarea2", "formControlName", "capation", 1, "form-control", "mb-3", 2, "height", "100px"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Update Website Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "We are glad to see you again!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SettingComponent_div_10_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SettingComponent_ng_template_11_Template, 64, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoad)("ngIfElse", _r1);
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_4__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".setting[_ngcontent-%COMP%] {\r\n  margin-left: 19%;\r\n}\r\n.btn-custom[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  color: #ffffff;\r\n  height: 50px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  width: 100px;\r\n  border-radius: 20px;\r\n}\r\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  color: #484848;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #484848;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  border: 1px solid rgb(235, 235, 235);\r\n  border-radius: 8px;\r\n  padding: 30px;\r\n  margin-bottom: 20px;\r\n}\r\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  color: #484848;\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n}\r\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-family: \"Nunito\";\r\n  color: rgb(72, 72, 72);\r\n  font-weight: 700;\r\n  line-height: 1.5;\r\n}\r\n.btn-header[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  font-weight: 800;\r\n}\r\n.btn-header[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffffff;\r\n  border: 1px solid rgb(255, 90, 95);\r\n  color: rgb(255, 90, 95);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcclxufVxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmNvbnRlbnQgaDIge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzQ4NDg0ODtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5mb3JtIGg0IHtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiAjNDg0ODQ4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmZvcm0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcclxuICBjb2xvcjogcmdiKDcyLCA3MiwgNzIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uYnRuLWhlYWRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmJ0bi1oZWFkZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgOTAsIDk1KTtcclxuICBjb2xvcjogcmdiKDI1NSwgOTAsIDk1KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "khJe":
/*!**************************************************************!*\
  !*** ./src/app/modules/user layout/terms/terms.component.ts ***!
  \**************************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/footer/footer.component */ "qL8W");



class TermsComponent {
    constructor() { }
    goToSection(sectionName) {
        switch (sectionName) {
            case 'intro':
                document.getElementById("intro").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'cookies':
                document.getElementById("cookies").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'licence':
                document.getElementById("licence").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'iframes':
                document.getElementById("iframes").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'reports_and_reviews':
                document.getElementById("reports_and_reviews").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'termination':
                document.getElementById("termination").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'access':
                document.getElementById("accessData").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'ack':
                document.getElementById("ack").scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                document.getElementById("intro").scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
    ngOnInit() {
        document.body.className = "app-terms";
    }
    ngOnDestroy() {
        document.body.className = "";
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 130, vars: 0, consts: [[1, "fixed", "page_content", "position-absolute"], [1, "sidebar"], [1, "intro", "btn", "btn-danger", "mt-1", 3, "click"], [1, "cookies", "btn", "btn-danger", "mt-2", 3, "click"], [1, "licence", "btn", "btn-danger", "mt-2", 3, "click"], [1, "iframes", "btn", "btn-danger", "mt-2", 3, "click"], [1, "accessData", "btn", "btn-danger", "mt-2", 3, "click"], [1, "reports_and_reviews", "btn", "btn-danger", "mt-2", 3, "click"], [1, "termination", "btn", "btn-danger", "mt-2", 3, "click"], [1, "ack", "btn", "btn-danger", "mt-2", 3, "click"], [1, "contact", "btn", "btn-danger", "mt-2", 3, "click"], [1, "terms"], ["id", "intro"], ["href", "index.html"], ["id", "cookies"], ["id", "licence"], [1, "licence_ul"], ["id", "iframes"], ["id", "accessData"], ["id", "reports_and_reviews"], ["id", "termination"], ["id", "ack"], ["id", "contact"], [1, "m-0", "text-center", 2, "font-size", "12px"], [1, "fixed-bottom"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_4_listener() { return ctx.goToSection("intro"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_7_listener() { return ctx.goToSection("cookies"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_10_listener() { return ctx.goToSection("licence"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_13_listener() { return ctx.goToSection("iframes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "iFrames");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_16_listener() { return ctx.goToSection("access"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Access Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_19_listener() { return ctx.goToSection("reports_and_reviews"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reports and Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_22_listener() { return ctx.goToSection("termination"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Termination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_25_listener() { return ctx.goToSection("ack"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Acknowledgement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_a_click_28_listener() { return ctx.goToSection("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Welcome to Trending Books.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "These terms and conditions outline the rules and regulations for the use of Reading Leaders's Website, located at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "www.trendingbooks.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "By accessing Trending Books we assume you accept these terms and conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Do not continue to use Trending Books if you do not agree to take all of the terms and conditions stated on this page. but please let us know by emailing us at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "trendingbooks@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " so we can try to find a solution. These Terms apply to all visitors, users and others who wish to use our services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "We employ the use of cookies to suggeest suitable books for you. By having account on Trending Books, you agreed to use cookies in agreement with the Reading Leaders's Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Most interactive websites use cookies to let us retrieve the user\u2019s details for each visit. Cookies are used by our website to enhance the functionality of certain areas to make it easier for people visiting our website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Licence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Reading Leaders and/or its Books own the intellectual property rights for all material on Trending Books. All intellectual property rights are reserved. You may access this from Trending Books for your own personal use subjected to restrictions set in these terms and conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "You must not:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reuse content included in or made available through our services such as logos, icons, images and books.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Use the content of books without referencing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sell, rent or sub-license material from Trending Books.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Redistribute content from Trending Books.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "This Agreement shall begin on the date hereof. Our Terms and Conditions were created in 18/3/2021.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "IFrames");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Without prior approval and written permission, you may not create frames around our Webpages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " that alter in any way the visual presentation or appearance of our Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Access Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " The access data (email address and password, or user name and password) are exclusively for the Customer\u2019s own personal use. The Customer may not pass on or otherwise disclose his or her access data to third parties. If the Customer obtains knowledge of any misuse of access data, or simply suspects such misuse, he or she must immediately report this to Trending Books. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "In the event of any breach of these terms of use and T&, in particular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " - If incorrect data are provided during registration, and/or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " - If access data (esp. the password) is disclosed without authority to do so,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Trending Books shall be entitled to temporarily or permanently block the Customer\u2019s access data, and/or to finally and conclusively refuse the Customer access either with immediate effect or after a period of notice fixed at Trending Book\u2019 own discretion, and/or to give extraordinary notice terminating the agreement on use with immediate effect. In any such case, the Customer may not re-register as a user without Trending Book\u2019 express prior approval. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Reports and Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "It's forbbiden to use bad language in your reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " and if you did you'll be panned and your account will never be activated once more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "If you saw any bad language in the reviews you're allowed to report it to the admin using report button beside the review.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Termination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under violationg our terms or not being active for 2 years straight so stay in touch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "If you wish to terminate your account, you may simply discontinue using Service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Acknowledgement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Please send your feedback, comments, requests for technical support by email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "trendingbooks@gmail.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "These Terms of Service were created for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "www.trendingbooks.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " by Reading Leaders company on 2021-03-19. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "app-footer", 24);
    } }, directives: [_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__["NavUserComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".page_content[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 80vh;\r\n    padding: 50px 0;\r\n    font-size: 1vw;\r\n    margin: 90px 0 0 10%;\r\n    background: #DE3241;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n}\r\n\r\n.terms[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    height: 80vh;\r\n    margin: 90px 0 0 30.5%;\r\n    background: rgba(255,255,255,0.9);\r\n    overflow: auto;\r\n    text-align:justify;\r\n    padding: 7px 20px;\r\n    border-top: 1vh solid rgba(255,255,255,0.9);\r\n    border-bottom: 1vh solid rgba(255,255,255,0.9);\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%]{\r\n    font-family: 'Playfair Display';\r\n    color: #DE3241;\r\n    font-weight: 700;\r\n}\r\n\r\np[_ngcontent-%COMP%], .licence_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    margin: 10px 15px;\r\n    font-weight: 500;\r\n    color: rgb(0,0,0);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    padding: 5px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]:target{\r\n    border: 1px solid #DE3241;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-weight: 900;\r\n    width: 100%\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n  .page_content[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .terms[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    display: block;\r\n    margin: 90px 0 0 10%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5QyxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2Qsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoidGVybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFnZV9jb250ZW50e1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgbWFyZ2luOiA5MHB4IDAgMCAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREUzMjQxO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRlcm1ze1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIG1hcmdpbjogOTBweCAwIDAgMzAuNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHRleHQtYWxpZ246anVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXZoIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxuICAgIGJvcmRlci1ib3R0b206IDF2aCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaDR7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xyXG4gICAgY29sb3I6ICNERTMyNDE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbnAsIC5saWNlbmNlX3VsIGxpe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYigwLDAsMCk7XHJcbn1cclxuc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuc2VjdGlvbjp0YXJnZXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREUzMjQxO1xyXG59XHJcbi5idG57XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG4uc2lkZWJhcntcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAucGFnZV9jb250ZW50e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRlcm1ze1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA5MHB4IDAgMCAxMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "lVJd":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/user layout/author/show/author-card/author-card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AuthorCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorCardComponent", function() { return AuthorCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthorCardComponent {
    constructor() {
    }
    ngOnInit() {
        console.log(`from author card ${this.selectedAuthor.id}`);
    }
}
AuthorCardComponent.ɵfac = function AuthorCardComponent_Factory(t) { return new (t || AuthorCardComponent)(); };
AuthorCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorCardComponent, selectors: [["app-author-card"]], inputs: { selectedAuthor: "selectedAuthor" }, decls: 9, vars: 0, consts: [[1, "box-part", "text-center", "px-3"], ["src", "https://api.time.com/wp-content/uploads/2014/12/ap569552639660.jpg", "alt", ""], [1, "title"], [1, "text"]], template: function AuthorCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "J. K. Rowling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "July 31, 1965 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".box-part[_ngcontent-%COMP%]{\r\n    position: relative; \r\n    height: 453px;\r\n    width: 322px;\r\n    background: #ddd;\r\n    width: 80%;\r\n    height: 40%;\r\n    border-radius: 10px;\r\n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n.title[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 20px;\r\n    color: black;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    margin:20px 0px;\r\n    color: black;\r\n    padding-bottom: 10px  ;\r\n}\r\nimg[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    margin-top: 30px;\r\n    width: 186px;\r\n    height: 186px;\r\n    \r\n    border-radius: 50%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUZBQXFGO0FBQ3pGO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTs7SUFFYixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6ImF1dGhvci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LXBhcnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgaGVpZ2h0OiA0NTNweDtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4IHJnYmEoOTUsIDkzLCA5MywgMC4zOSksIC00cHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG4udGl0bGVcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnRleHR7XHJcbiAgICBtYXJnaW46MjBweCAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAgO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDE4NnB4O1xyXG4gICAgaGVpZ2h0OiAxODZweDtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "mSfS":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/user layout/home/top-category/home-top-category.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HomeTopCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTopCategoryComponent", function() { return HomeTopCategoryComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home.service */ "nr5L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HomeTopCategoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " see your favourite books in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryCol_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/admin/category/", categoryCol_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.coleredBackground[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.categoriesName[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.categoriesName[i_r2]);
} }
class HomeTopCategoryComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.loading = false;
        this.topCategories = [];
        this.coleredBackground = ["bg-bink one", "bg-blue two", "bg-yellow three"];
        this.categoriesName = [];
    }
    ngOnInit() {
        let home;
        this.subscriber = this.homeService.getHome()
            .subscribe((response) => {
            home = response.body.categories;
            this.loading = true;
            for (let i = 0; i < home.length && i < 3; i++) {
                this.topCategories.push(home[i].categoryImage);
                this.categoriesName.push(response.body.categories[i].categoryName);
            }
            console.log(this.topCategories);
        }, (err) => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error, Can't load home content!",
                footer: ''
            });
        });
    }
}
HomeTopCategoryComponent.ɵfac = function HomeTopCategoryComponent_Factory(t) { return new (t || HomeTopCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"])); };
HomeTopCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeTopCategoryComponent, selectors: [["app-home-top-category"]], decls: 9, vars: 1, consts: [[1, "top-category", "my-5", "py-5"], [1, "text-center"], [1, "italic"], [1, "border", "m-auto"], [1, "container"], [1, "row", "mt-5", "w-100"], ["class", "col-md-4 ", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "mb-3"], ["onerror", "this.onerror=null; this.src='/assets/user/category/Health.png'", "alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "overlay"], [1, "card-body", "text-center", "text-white"], [1, "fw-bold"]], template: function HomeTopCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "The Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeTopCategoryComponent_div_8_Template, 12, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.topCategories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".top-category[_ngcontent-%COMP%] {\r\n    font-family: 'PT Sans', sans-serif;\r\n}\r\n\r\n.italic[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-family: 'Playfair Display';\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    background-color: #121212;\r\n    width: 100px;\r\n    height: 2px;\r\n}\r\n\r\n.top-category[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 230px;\r\n    width: 100%;\r\n}\r\n\r\n.top-category[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, .4);\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 230px\r\n}\r\n\r\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 148px;\r\n    left: 43%;\r\n    border-left: 20px solid transparent;\r\n    border-right: 20px solid transparent;\r\n}\r\n\r\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after {\r\n    border-bottom: 25px solid #DE3241;\r\n}\r\n\r\n.top-category[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]::after {\r\n    border-bottom: 25px solid #53877A\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n}\r\n\r\n.top-category[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]::after {\r\n    border-bottom: 25px solid #F5BF56\r\n}\r\n\r\n.bg-bink[_ngcontent-%COMP%] {\r\n    background-color: #DE3241;\r\n}\r\n\r\n.bg-blue[_ngcontent-%COMP%] {\r\n    background-color: #53877A;\r\n}\r\n\r\n.bg-yellow[_ngcontent-%COMP%] {\r\n    background-color: #F5BF56;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdG9wLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiaG9tZS10b3AtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY2F0ZWdvcnkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLml0YWxpYyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxufVxyXG5cclxuLnRvcC1jYXRlZ29yeSBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9wLWNhdGVnb3J5IC5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIzMHB4XHJcbn1cclxuXHJcbi50b3AtY2F0ZWdvcnkgLmNhcmQtYm9keTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTQ4cHg7XHJcbiAgICBsZWZ0OiA0MyU7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRvcC1jYXRlZ29yeSAuY2FyZC1ib2R5OjphZnRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkICNERTMyNDE7XHJcbn1cclxuXHJcbi50b3AtY2F0ZWdvcnkgLnR3bzo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCAjNTM4NzdBXHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnRvcC1jYXRlZ29yeSAudGhyZWU6OmFmdGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgI0Y1QkY1NlxyXG59XHJcblxyXG4uYmctYmluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREUzMjQxO1xyXG59XHJcblxyXG4uYmctYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM4NzdBO1xyXG59XHJcblxyXG4uYmcteWVsbG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUJGNTY7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "mUvC":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin layout/book/delete/book-delete.component.ts ***!
  \***************************************************************************/
/*! exports provided: BookDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDeleteComponent", function() { return BookDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_book_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/book-service.service */ "+TRR");




const _c0 = ["closebutton"];
class BookDeleteComponent {
    //constructor
    constructor(bookService) {
        this.bookService = bookService;
        this.book = {
            id: "",
            name: "",
            description: "",
            image: "",
            category: "",
            author: "",
            categoryName: "",
            authorName: "",
            bookReviews: [],
            bookRatings: [],
            currantReader: [],
            finishReadUsers: [],
            wantToReadeUsers: [],
        };
        this.deletedBook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //start the component
    ngOnInit() { }
    //delete book from database
    deleteBook() {
        //send the request to the backend to remove the book
        this.subscriber = this.bookService.destroy(this.book.id)
            .subscribe((data) => {
            this.deletedBook.emit(this.book);
            this.closebutton.nativeElement.click();
        }, (err) => {
            //error message about failure of deleting 
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error Deleting Book, Try again!",
                footer: ''
            });
        });
    }
    //at the end of component
    ngOnDestroy() {
        //this.subscriber.unsubscribe();
    }
}
BookDeleteComponent.ɵfac = function BookDeleteComponent_Factory(t) { return new (t || BookDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookServiceService"])); };
BookDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookDeleteComponent, selectors: [["app-book-delete"]], viewQuery: function BookDeleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, inputs: { book: ["bookInfo", "book"] }, outputs: { deletedBook: "deletedBook" }, decls: 15, vars: 0, consts: [["id", "deleteModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", "w-100"], [1, "modal-dialog", "w-100"], [1, "modal-content", "w-100"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-3", "register-form"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "m-1"], ["closebutton", ""], ["type", "submit", 1, "btn", "btn-danger", "m-1", 3, "click"]], template: function BookDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure you want to delete this book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookDeleteComponent_Template_button_click_13_listener() { return ctx.deleteBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".modal-body[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  \r\n  .modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n  }\r\n  \r\n  .modal-dialog[_ngcontent-%COMP%] {\r\n    margin: 15rem auto;\r\n  }\r\n  \r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    margin-top: 20%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCIiwiZmlsZSI6ImJvb2stZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1hcmdpbjogMTVyZW0gYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "mm1a":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/user layout/about-us/about-header/about-header.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AboutHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHeaderComponent", function() { return AboutHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutHeaderComponent.ɵfac = function AboutHeaderComponent_Factory(t) { return new (t || AboutHeaderComponent)(); };
AboutHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutHeaderComponent, selectors: [["app-about-header"]], decls: 5, vars: 0, consts: [[1, "about-us"], [1, "overlay", "d-flex", "justify-content-center", "align-items-center"], [1, "capation"]], template: function AboutHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-us[_ngcontent-%COMP%] {\r\n  height: 75vh;\r\n  background-image: url(\"/assets/user/profile/header-photo.jpg\");\r\n  position: relative;\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  font-family: \"Nunito\";\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  line-height: 1.2;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  color: #484848;\r\n  font-family: \"Nunito\";\r\n  line-height: 1.2;\r\n  font-weight: 800;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLDhEQUE4RDtFQUM5RCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFib3V0LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXVzIHtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91c2VyL3Byb2ZpbGUvaGVhZGVyLXBob3RvLmpwZ1wiKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbmgxIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5oMiB7XHJcbiAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "mnJU":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user layout/user-profile/services/user-profile.service.ts ***!
  \***********************************************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserProfileService {
    constructor(userProfileClient) {
        this.userProfileClient = userProfileClient;
        this.baseURL = "http://localhost:3000/users";
        this.rateURL = "http://localhost:3000/rating";
    }
    getUserProfilePage(userId, booktype, page, book = "") {
        console.log(booktype, page, (book == ""));
        if (book == "")
            return this.userProfileClient.get(`${this.baseURL}/pages?userId=${userId}&booktype=${booktype}&page=${page}`, { observe: 'response' });
        else
            return this.userProfileClient.get(`${this.baseURL}/pages?userId=${userId}&booktype=${booktype}&page=${page}&bookName=${book}`, { observe: 'response' });
    }
    getuserById(id) {
        return this.userProfileClient.get(`${this.baseURL}/${id}`);
    }
    postRate(userId, bookId, rate) {
        console.log("post");
        return this.userProfileClient.post(`${this.rateURL}`, { rate: rate, rater: userId, book: bookId });
    }
    updateRate(ratingId, rate) {
        console.log("update");
        return this.userProfileClient.patch(`${this.rateURL}/${ratingId}`, { rate: rate });
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nr5L":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HomeService {
    constructor(homeClient) {
        this.homeClient = homeClient;
        this.baseURL = "http://localhost:3000/home";
    }
    getHome() {
        //fetch home
        return this.homeClient.get(this.baseURL, { observe: 'response' });
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "o9c8":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/user layout/author/show/author-book/author-book.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AuthorBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorBookComponent", function() { return AuthorBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthorBookComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorBookComponent.ɵfac = function AuthorBookComponent_Factory(t) { return new (t || AuthorBookComponent)(); };
AuthorBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorBookComponent, selectors: [["app-author-book"]], decls: 28, vars: 0, consts: [[1, "main"], [1, "image"], ["src", "https://image.tmdb.org/t/p/w500/g6n8G0xPnBVUIKKK41sNmbZB5h4.jpg", "alt", ""], [1, "info1"], [2, "color", "black"], [1, "fas", "fa-star", 2, "color", "rgb(255, 60, 0)", "margin-left", "5px"], [1, "far", "fa-star", 2, "color", "rgb(255, 60, 0)", "margin-left", "5px"], [1, "far", "fa-star", 2, "color", "rgb(255, 60, 0)"], [1, "info2"], [2, "margin-left", "120px", "font-size", "larger"], [2, "display", "inline"], [1, "fas", "fa-star", 2, "color", "red", "margin-left", "5px"], [1, "dropdown", 2, "margin-top", "90px", "margin-left", "35px"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"]], template: function AuthorBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Harry Potter and the Order of the Phoenix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "300 Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Book status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Is currently reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Want to read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Finished reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] \r\n{\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    width: 750px;\r\n    height: 200px;\r\n    padding-top: 10px;\r\n    \r\n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 10px;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    float:left; \r\n    background:Red;\r\n    width:20%;\r\n    height:170px;\r\n}\r\n\r\n.info1[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n\r\n    float:left; \r\n    \r\n    width:49%;\r\n    height:170px;\r\n    padding-top: 20px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.info2[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n    float:right;\r\n    \r\n    width:25%;\r\n    height:170px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQjswQkFDc0I7SUFDdEIscUZBQXFGO0lBQ3JGLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJhdXRob3ItYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4gXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA3NTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4IHJnYmEoOTUsIDkzLCA5MywgMC4zOSksIC00cHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZsb2F0OmxlZnQ7IFxyXG4gICAgYmFja2dyb3VuZDpSZWQ7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBoZWlnaHQ6MTcwcHg7XHJcbn1cclxuLmluZm8xe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgZmxvYXQ6bGVmdDsgXHJcbiAgICAvKiBiYWNrZ3JvdW5kOkdyZWVuOyAqL1xyXG4gICAgd2lkdGg6NDklO1xyXG4gICAgaGVpZ2h0OjE3MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmluZm8ye1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOmJsdWU7ICovXHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBoZWlnaHQ6MTcwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59Il19 */"] });


/***/ }),

/***/ "omQl":
/*!************************************************************************!*\
  !*** ./src/app/modules/user layout/access/login-register.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_access_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user-access-service.service */ "VDpO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["l_pass"];
const _c1 = ["s_pass"];
const _c2 = ["s_pass_confirm"];
const _c3 = ["login_toggle"];
const _c4 = ["signup_toggle"];
const _c5 = ["login_form"];
const _c6 = ["signup_form"];
function LoginRegisterComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Wrong username or password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LoginRegisterComponent {
    constructor(socialAuthService, userService, router) {
        this.socialAuthService = socialAuthService;
        this.userService = userService;
        this.router = router;
        this.userPassStatus = false;
        this.user = {
            id: "",
            firstName: "",
            lastName: "",
            avatar: "",
            userName: "",
            fullName: "",
            email: "",
            password: "",
            currentlyReadBooks: [],
            wantToReadBooks: [],
            readBooks: [],
            userRating: [],
            userReviews: [],
            token: "",
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)])
        });
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)])
        });
    }
    toggleLogin() {
        this.login_toggle.nativeElement.setAttribute('style', 'backgroundColor: #DE3241; color: #fff');
        this.signup_toggle.nativeElement.setAttribute('style', 'backgroundColor: #fff; color: #222');
        this.signup_form.nativeElement.setAttribute('style', 'display : none');
        this.login_form.nativeElement.setAttribute('style', 'display : block');
    }
    toggleSignup() {
        this.login_toggle.nativeElement.setAttribute('style', 'background-color: #fff; color : #222');
        this.signup_toggle.nativeElement.setAttribute('style', 'background-color: #DE3241; color: #fff');
        this.login_form.nativeElement.setAttribute('style', 'display : none');
        this.signup_form.nativeElement.setAttribute('style', 'display : block');
    }
    login_showPassword_changed(e) {
        if (e.target.checked) {
            this.password_login.nativeElement.setAttribute('type', 'text');
        }
        else {
            this.password_login.nativeElement.setAttribute('type', 'password');
        }
    }
    signUp_showPassword_changed(e) {
        if (e.target.checked) {
            this.password_signup.nativeElement.setAttribute('type', 'text');
            this.confirm_password_signup.nativeElement.setAttribute('type', 'text');
        }
        else {
            this.password_signup.nativeElement.setAttribute('type', 'password');
            this.confirm_password_signup.nativeElement.setAttribute('type', 'password');
        }
    }
    ngAfterViewInit() {
    }
    enterSite() {
        this.router.navigate(['/profile']);
    }
    login() {
        this.subscriber = this.userService.login({ userName: this.loginForm.controls.userName.value, password: this.loginForm.controls.password.value })
            .subscribe((response) => {
            this.userAccessToken = response.accessToken;
            this.userRefreshToken = response.refreshToken;
            this.user = response.user;
            try {
                if (this.userAccessToken != undefined) {
                    this.setSessionData(this.userAccessToken, this.userRefreshToken, this.user);
                    this.setLocalStorageData(this.userAccessToken, this.userRefreshToken, this.user);
                    this.enterSite(); //navigate to user profile isa
                }
                else {
                    this.userPassStatus = true;
                    console.log(this.userPassStatus);
                }
            }
            catch (_a) {
                this.userPassStatus = true;
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Server error, Can't create the session!",
                footer: ''
            });
        });
    }
    register() {
        this.user.userName = this.registerForm.controls.userName.value;
        this.user.password = this.registerForm.controls.password.value;
        this.user.firstName = this.registerForm.controls.fName.value;
        this.user.lastName = this.registerForm.controls.lName.value;
        this.user.email = this.registerForm.controls.email.value;
        if (!this.registerForm.invalid && this.user.password == this.registerForm.controls.confirmPassword.value) {
            this.subscriber = this.userService.register(this.user)
                .subscribe((response) => {
                this.userAccessToken = response.accessToken;
                this.userRefreshToken = response.refreshToken;
                this.user = response.user;
                try {
                    if (this.userAccessToken != undefined) {
                        this.setSessionData(this.userAccessToken, this.userRefreshToken, this.user);
                        this.enterSite();
                    }
                }
                catch (_a) {
                    console.log("");
                }
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Server error, your data haven't been saved !",
                    footer: ''
                });
            });
        }
    }
    setSessionData(access, refresh, user) {
        localStorage.setItem('TOKEN', access);
        localStorage.setItem('refreshToken', refresh);
        localStorage.setItem('userName', user.userName);
        localStorage.setItem('userId', user.id);
    }
    setLocalStorageData(access, refresh, user) {
        sessionStorage.setItem('accessToken', access);
        sessionStorage.setItem('refreshToken', refresh);
        sessionStorage.setItem('userName', user.userName);
        sessionStorage.setItem('userId', user.id);
    }
    ngOnInit() {
        document.body.className = 'app-access';
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = (user != null);
            console.log(this.socialUser);
        });
    }
    enterWithGoogle(status) {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
    }
    //to logout: this.authService.signOut();
    //socialuser.photoUrl , .name, .email
    ngOnDestroy() {
        document.body.className = "";
    }
}
LoginRegisterComponent.ɵfac = function LoginRegisterComponent_Factory(t) { return new (t || LoginRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_access_service_service__WEBPACK_IMPORTED_MODULE_4__["UserAccessServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginRegisterComponent, selectors: [["app-login-register"]], viewQuery: function LoginRegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c6, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.password_login = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.password_signup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.confirm_password_signup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.login_toggle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.signup_toggle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.login_form = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.signup_form = _t.first);
    } }, decls: 60, vars: 5, consts: [[1, "content"], [1, "form-modal"], [1, "form-toggle"], ["id", "login-toggle", 3, "click"], ["login_toggle", ""], ["id", "signup-toggle", 3, "click"], ["signup_toggle", ""], ["id", "login-form"], ["login_form", ""], ["src", "assets/icon.ico"], ["method", "POST", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Username", "required", "", "formControlName", "userName", 1, "w-100"], ["type", "password", "id", "l_pass", "placeholder", "Password", "required", "", "minlength", "8", "formControlName", "password", 1, "w-100"], ["l_pass", ""], ["type", "checkbox", "id", "l_box", 1, "ml3", "mr-2", "mb-2", "mt-2", 3, "change"], ["l_box", ""], [1, "mb-4", "mt-3"], ["class", "ml3 mr-2 mb-2 mt-2", "style", "color: red;", 4, "ngIf"], ["type", "submit", 1, "btn", "login", 3, "disabled"], ["type", "button", 1, "btn2", "-box-sd-effect", 3, "click"], ["aria-hidden", "true", 1, "fab", "fa-google", "fa-lg"], [1, "d-inline-block", "w-45", "m-0"], ["type", "button", 1, "btn2", "-box-sd-effect", "mt-3"], [1, "fab", "fa-facebook-square", "fa-lg"], ["id", "signup-form"], ["signup_form", ""], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "First name", "required", "", "formControlName", "fName", 1, "w-45", "ml3"], ["type", "text", "placeholder", "Last name", "required", "", "formControlName", "lName", 1, "w-45", "ml5"], ["type", "text", "placeholder", "Username", "required", "", "formControlName", "userName", 1, "w-45", "ml3"], ["type", "email", "placeholder", "Email", "required", "", "formControlName", "email", 1, "w-45", "ml5"], ["type", "password", "name", "s_pass", "placeholder", "Password", "required", "", "formControlName", "password", 1, "w-45", "ml3"], ["s_pass", ""], ["type", "password", "name", "s_pass", "placeholder", "Confirm password", "required", "", "formControlName", "confirmPassword", 1, "w-45", "ml5"], ["s_pass_confirm", ""], ["type", "checkbox", "id", "s_box", 1, "ml5", "mr-2", "mb-2", "mt-2", 3, "change"], ["s_box", ""], [1, "mt-3", "ml-2"], ["type", "submit", 1, "btn", "signup", "mb-2", 3, "disabled"], [1, "ml3", "mr-2", "mb-2", "mt-2", 2, "color", "red"]], template: function LoginRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegisterComponent_Template_button_click_4_listener() { return ctx.toggleLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegisterComponent_Template_button_click_7_listener() { return ctx.toggleSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginRegisterComponent_Template_form_ngSubmit_13_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function LoginRegisterComponent_Template_input_change_17_listener($event) { return ctx.login_showPassword_changed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, LoginRegisterComponent_p_21_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegisterComponent_Template_button_click_25_listener() { return ctx.enterWithGoogle("login"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "sign in with google");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "sign in with facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginRegisterComponent_Template_form_ngSubmit_35_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function LoginRegisterComponent_Template_input_change_45_listener($event) { return ctx.signUp_showPassword_changed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "b", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegisterComponent_Template_button_click_52_listener() { return ctx.enterWithGoogle("signup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "sign up with google");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "sign up with facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userPassStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
    } }, directives: [_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_6__["NavUserComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\r\n    padding-top: 15vh;\r\n    background-image: url(\"/assets/user/login/back.jpg\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]{\r\n      position:relative;\r\n      width:50%;\r\n      height:82vh;\r\n      font-size: 14px;\r\n      left:50%;\r\n      transform:translateX(-50%);\r\n      background:rgba(255, 255, 255, 0.85);\r\n      border-radius: 20px;\r\n      box-shadow:0 5px 15px 0px rgba(0, 0, 0,0.4)\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n      cursor: pointer;\r\n      position: relative;\r\n      text-transform: capitalize;\r\n      font-size:16px;\r\n      z-index: 2;\r\n      outline: none;\r\n      background:white;\r\n      border: 1px solid #DE3241;\r\n      transition:0.2s;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n      border-radius: 20px;\r\n      border:none;\r\n      font-weight: bold;\r\n      padding:0.8em 1em 0.8em 1em!important;\r\n      transition:0.5s;\r\n      margin-bottom:7px;\r\n      margin-top:7px;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{\r\n      background:#DE3241;\r\n      color:#fff;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover, .form-modal[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]:hover{\r\n      background:#222;\r\n  }\r\n  \r\n  .form-toggle[_ngcontent-%COMP%]{\r\n      position: relative;\r\n      width:100%;\r\n      height:auto;\r\n  }\r\n  \r\n  .form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n      width:50%;\r\n      float:left;\r\n      padding:10px;\r\n      margin-bottom:20px;\r\n      border:none;\r\n      transition: 0.2s;\r\n      font-weight: bold;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   #login-toggle[_ngcontent-%COMP%]{\r\n      border-top-left-radius: 20px;\r\n      border-bottom-left-radius: 20px;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   #signup-toggle[_ngcontent-%COMP%]{\r\n      border-top-right-radius: 20px;\r\n      border-bottom-right-radius: 20px;\r\n  }\r\n  \r\n  #login-toggle[_ngcontent-%COMP%]{\r\n      background:#DE3241;\r\n      color:#ffff;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n      position: relative;\r\n      width:90%;\r\n      height:70vh;\r\n      left:50%;\r\n      transform:translateX(-50%);\r\n  }\r\n  \r\n  #login-form[_ngcontent-%COMP%], #signup-form[_ngcontent-%COMP%]{\r\n      position:relative;\r\n      width:100%;\r\n      height:auto;\r\n      padding-bottom:1em;\r\n  }\r\n  \r\n  #signup-form[_ngcontent-%COMP%]{\r\n      display: none;\r\n  }\r\n  \r\n  #login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #signup-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n      width:100%;\r\n      margin-top:0.5em;\r\n      padding:0.6em;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n      position: relative;\r\n      font-size: 16px;\r\n      padding:10px 20px;\r\n      margin-top:0.6em;\r\n      margin-bottom:0.6em;\r\n      border-radius: 20px;\r\n      border:none;\r\n      background:#fff;\r\n      outline:none;\r\n      font-weight: bold;\r\n      transition:0.4s;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active{\r\n      transform:scaleX(1.03);\r\n      border: 1px solid #de3240c9;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\r\n      color:rgb(99, 98, 98);\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      font-size: 18px;\r\n      font-weight: bold;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      color:#DE3241;\r\n      text-decoration: none;\r\n      transition:0.2s;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n      color:#222;\r\n  }\r\n  \r\n  .form-modal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      left:10%;\r\n      top:50%;\r\n      transform:translateX(-10%) translateY(-50%);\r\n      align-self: center;\r\n  }\r\n  \r\n  .fa-google[_ngcontent-%COMP%]{\r\n      color:#dd4b39;\r\n  }\r\n  \r\n  .fa-facebook-square[_ngcontent-%COMP%]{\r\n      color:#3b5998;\r\n  }\r\n  \r\n  .-box-sd-effect[_ngcontent-%COMP%]:hover{\r\n      box-shadow: 2px 4px 4px #dd4b39\r\n  }\r\n  \r\n  .w-45[_ngcontent-%COMP%]{\r\n      width:45%;\r\n  }\r\n  \r\n  .w-100[_ngcontent-%COMP%]{\r\n      width:100%\r\n  }\r\n  \r\n  .ml3[_ngcontent-%COMP%]{\r\n      margin-left: 3%;\r\n  }\r\n  \r\n  .ml5[_ngcontent-%COMP%]{\r\n      margin-left: 5%;\r\n  }\r\n  \r\n  @media only screen and (max-width:600px){\r\n      .form-modal[_ngcontent-%COMP%]{\r\n          width:100%;\r\n      }\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%]{\r\n       width: 10%;\r\n       margin-left: 45%;\r\n       animation: hu__hu__ 1 2s ease-in-out\r\n  }\r\n  \r\n  @keyframes hu__hu__ {\r\n      25% { transform: translateY(-10px) }\r\n      50% { transform: translateY(10px) }\r\n      75% { transform: translateY(-10px) }\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%]:hover{\r\n      animation: rotation 5s 1 linear;\r\n  }\r\n  \r\n  @keyframes rotation {\r\n      from {\r\n        transform: rotate(0deg);\r\n      }\r\n      to {\r\n        transform: rotate(359deg);\r\n      }\r\n    }\r\n  \r\n  @media only screen and (max-width:600px){\r\n      i[_ngcontent-%COMP%]{\r\n          display: none!important;\r\n      }\r\n  }\r\n  \r\n  @media only screen and (max-width:960px){\r\n    .content[_ngcontent-%COMP%]{\r\n      overflow: auto;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0RBQW9EO0lBQ3BELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO01BQ0ksaUJBQWlCO01BQ2pCLFNBQVM7TUFDVCxXQUFXO01BQ1gsZUFBZTtNQUNmLFFBQVE7TUFDUiwwQkFBMEI7TUFDMUIsb0NBQW9DO01BQ3BDLG1CQUFtQjtNQUNuQjs7O09BR0MsQ0FBQztFQUNOOztFQUVBO01BQ0ksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQiwwQkFBMEI7TUFDMUIsY0FBYztNQUNkLFVBQVU7TUFDVixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixlQUFlO0VBQ25COztFQUVBO01BQ0ksbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIscUNBQXFDO01BQ3JDLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztFQUNsQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixVQUFVO0VBQ2Q7O0VBRUE7TUFDSSxlQUFlO0VBQ25COztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxTQUFTO01BQ1QsVUFBVTtNQUNWLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixpQkFBaUI7RUFDckI7O0VBQ0E7TUFDSSw0QkFBNEI7TUFDNUIsK0JBQStCO0VBQ25DOztFQUNBO01BQ0ksNkJBQTZCO01BQzdCLGdDQUFnQztFQUNwQzs7RUFHQTtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxRQUFRO01BQ1IsMEJBQTBCO0VBQzlCOztFQUVBO01BQ0ksaUJBQWlCO01BQ2pCLFVBQVU7TUFDVixXQUFXO01BQ1gsa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksYUFBYTtFQUNqQjs7RUFHQTtNQUNJLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsYUFBYTtFQUNqQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxlQUFlO01BQ2YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO0VBQ25COztFQUVBO01BQ0ksc0JBQXNCO01BQ3RCLDJCQUEyQjtFQUMvQjs7RUFFQTtNQUNJLHFCQUFxQjtFQUN6Qjs7RUFHQTtNQUNJLGVBQWU7TUFDZixpQkFBaUI7RUFDckI7O0VBRUE7TUFDSSxhQUFhO01BQ2IscUJBQXFCO01BQ3JCLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxVQUFVO0VBQ2Q7O0VBR0E7TUFDSSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLE9BQU87TUFDUCwyQ0FBMkM7TUFDM0Msa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksYUFBYTtFQUNqQjs7RUFFQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7TUFDSTtFQUNKOztFQUVBO01BQ0ksU0FBUztFQUNiOztFQUNBO01BQ0k7RUFDSjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7O0VBQ0E7TUFDSSxlQUFlO0VBQ25COztFQUVBO01BQ0k7VUFDSSxVQUFVO01BQ2Q7RUFDSjs7RUFFQTtPQUNLLFVBQVU7T0FDVixnQkFBZ0I7T0FDaEI7RUFDTDs7RUFDQTtNQUNJLE1BQU0sNkJBQTZCO01BQ25DLE1BQU0sNEJBQTRCO01BQ2xDLE1BQU0sNkJBQTZCO0VBQ3ZDOztFQUVBO01BQ0ksK0JBQStCO0VBQ25DOztFQUVBO01BQ0k7UUFDRSx1QkFBdUI7TUFDekI7TUFDQTtRQUNFLHlCQUF5QjtNQUMzQjtJQUNGOztFQUNGO01BQ0k7VUFDSSx1QkFBdUI7TUFDM0I7RUFDSjs7RUFDQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6ImxvZ2luLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTV2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdXNlci9sb2dpbi9iYWNrLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1tb2RhbHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgaGVpZ2h0Ojgydmg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGVmdDo1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC8qYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAqL2JveC1zaGFkb3c6MCA1cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLDAuNClcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbW9kYWwgYnV0dG9ue1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjREUzMjQxO1xyXG4gICAgICB0cmFuc2l0aW9uOjAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLW1vZGFsIC5idG57XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzowLjhlbSAxZW0gMC44ZW0gMWVtIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbjowLjVzO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjdweDtcclxuICAgICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLW1vZGFsIC5sb2dpbiAsIC5mb3JtLW1vZGFsIC5zaWdudXB7XHJcbiAgICAgIGJhY2tncm91bmQ6I0RFMzI0MTtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbW9kYWwgLmxvZ2luOmhvdmVyICwgLmZvcm0tbW9kYWwgLnNpZ251cDpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZDojMjIyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS10b2dnbGV7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXRvZ2dsZSBidXR0b257XHJcbiAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmZvcm0tbW9kYWwgI2xvZ2luLXRvZ2dsZXtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgLmZvcm0tbW9kYWwgI3NpZ251cC10b2dnbGV7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI2xvZ2luLXRvZ2dsZXtcclxuICAgICAgYmFja2dyb3VuZDojREUzMjQxO1xyXG4gICAgICBjb2xvcjojZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbW9kYWwgZm9ybXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDo5MCU7XHJcbiAgICAgIGhlaWdodDo3MHZoO1xyXG4gICAgICBsZWZ0OjUwJTtcclxuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2dpbi1mb3JtICwgI3NpZ251cC1mb3Jte1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjFlbTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZ251cC1mb3Jte1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAjbG9naW4tZm9ybSBidXR0b24gLCAjc2lnbnVwLWZvcm0gYnV0dG9ue1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOjAuNWVtO1xyXG4gICAgICBwYWRkaW5nOjAuNmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1tb2RhbCBpbnB1dHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOjAuNmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjAuNmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLW1vZGFsIGlucHV0OmZvY3VzICwgLmZvcm0tbW9kYWwgaW5wdXQ6YWN0aXZle1xyXG4gICAgICB0cmFuc2Zvcm06c2NhbGVYKDEuMDMpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGUzMjQwYzk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLW1vZGFsIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICAgICBjb2xvcjpyZ2IoOTksIDk4LCA5OCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb3JtLW1vZGFsIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLW1vZGFsIHAgYXtcclxuICAgICAgY29sb3I6I0RFMzI0MTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOjAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLW1vZGFsIHAgYTpob3ZlcntcclxuICAgICAgY29sb3I6IzIyMjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvcm0tbW9kYWwgaSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDoxMCU7XHJcbiAgICAgIHRvcDo1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZhLWdvb2dsZXtcclxuICAgICAgY29sb3I6I2RkNGIzOTtcclxuICB9XHJcbiAgXHJcbiAgLmZhLWZhY2Vib29rLXNxdWFyZXtcclxuICAgICAgY29sb3I6IzNiNTk5ODtcclxuICB9XHJcbiAgXHJcbiAgLi1ib3gtc2QtZWZmZWN0OmhvdmVye1xyXG4gICAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjZGQ0YjM5XHJcbiAgfVxyXG4gIFxyXG4gIC53LTQ1e1xyXG4gICAgICB3aWR0aDo0NSU7XHJcbiAgfVxyXG4gIC53LTEwMHtcclxuICAgICAgd2lkdGg6MTAwJVxyXG4gIH1cclxuICBcclxuICAubWwze1xyXG4gICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgfVxyXG4gIC5tbDV7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgICAgLmZvcm0tbW9kYWx7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGltZ3tcclxuICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gICAgICAgYW5pbWF0aW9uOiBodV9faHVfXyAxIDJzIGVhc2UtaW4tb3V0XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgaHVfX2h1X18ge1xyXG4gICAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIH1cclxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIH1cclxuICAgICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSB9XHJcbiAgfVxyXG4gIFxyXG4gIGltZzpob3ZlcntcclxuICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA1cyAxIGxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgICAgaXtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCl7XHJcbiAgICAuY29udGVudHtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "qL8W":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user layout/shared/footer/footer.component.ts ***!
  \***********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "text-center", "text-white", "mt-5", 2, "background-color", "rgba(0, 0, 0, 0.05)"], [1, "text-center", "custom-background", "text-white", "m-0", "py-1"], [1, "far", "fa-heart"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Made with love ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " By The best team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".custom-background[_ngcontent-%COMP%]{\r\n    background-color:  rgba(0,0,0,0.8);\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0NBQ3JDIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwwLDAsMC44KTtcclxuIH1cclxuIl19 */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(userClient) {
        this.userClient = userClient;
        this.baseURL = 'http://localhost:3000/users';
        this.accessToken = sessionStorage.getItem('accessToken');
    }
    updateUserBookList(user) {
        return this.userClient.post(`${this.baseURL}/${user.userId}/update-books`, user, {
            headers: {
                "Authorization": "Bearer " + this.accessToken
            }
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qyV3":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user layout/shared/user-loading/user-loading.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoadingComponent", function() { return UserLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserLoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserLoadingComponent.ɵfac = function UserLoadingComponent_Factory(t) { return new (t || UserLoadingComponent)(); };
UserLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoadingComponent, selectors: [["app-user-loading"]], decls: 2, vars: 0, consts: [[1, "content"], [1, "kinetic"]], template: function UserLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  text-align: center;\r\n  position: absolute;\r\n  background-color: rgba(00, 00, 00, 0.6);\r\n  z-index: 999;\r\n  overflow: hidden;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.kinetic[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 80px;\r\n  width: 80px;\r\n  left: 44%;\r\n  top: 38%;\r\n}\r\n\r\n.kinetic[_ngcontent-%COMP%]::after, .kinetic[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  border: 50px solid transparent;\r\n  border-bottom-color: #DE3241;\r\n  animation: rotateA 1.5s linear infinite 0.4s;\r\n}\r\n\r\n.kinetic[_ngcontent-%COMP%]::before {\r\n  transform: rotate(90deg);\r\n  animation: rotateB 1.5s linear infinite;\r\n}\r\n\r\n@keyframes rotateA {\r\n  0%,\r\n  25% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  50%,\r\n  75% {\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotateB {\r\n  0%,\r\n  25% {\r\n    transform: rotate(90deg);\r\n  }\r\n\r\n  50%,\r\n  75% {\r\n    transform: rotate(270deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(450deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxRQUFRO0VBQ1IsU0FBUztFQUNULDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFOztJQUVFLHVCQUF1QjtFQUN6Qjs7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFOztJQUVFLHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJ1c2VyLWxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMDAsIDAwLCAwMCwgMC42KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmtpbmV0aWMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgbGVmdDogNDQlO1xyXG4gIHRvcDogMzglO1xyXG59XHJcblxyXG4ua2luZXRpYzo6YWZ0ZXIsXHJcbi5raW5ldGljOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlcjogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjREUzMjQxO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlQSAxLjVzIGxpbmVhciBpbmZpbml0ZSAwLjRzO1xyXG59XHJcblxyXG4ua2luZXRpYzo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGVCIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZUEge1xyXG4gIDAlLFxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDUwJSxcclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlQiB7XHJcbiAgMCUsXHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB9XHJcblxyXG4gIDUwJSxcclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "rUEV":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user layout/book/book-det/book-det.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookDetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetComponent", function() { return BookDetComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_layout_book_services_book_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin layout/book/services/book-service.service */ "+TRR");
/* harmony import */ var src_app_services_reviews_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reviews.service */ "g+37");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user.service */ "qfBg");
/* harmony import */ var _services_rating_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/rating-service.service */ "TgDO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _rating_det_rating_det_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rating-det/rating-det.component */ "/r+5");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../home/footer/home-footer.component */ "TUxq");
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");















const _c0 = ["star1"];
const _c1 = ["star2"];
const _c2 = ["star3"];
const _c3 = ["star4"];
const _c4 = ["star5"];
const _c5 = ["reviewArea"];
function BookDetComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-loading");
} }
function BookDetComponent_li_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r7.user_img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](review_r8.reviewBody);
} }
class BookDetComponent {
    constructor(bookService, reviewsService, userService, ratingService, myActivatedRoute, router) {
        this.bookService = bookService;
        this.reviewsService = reviewsService;
        this.userService = userService;
        this.ratingService = ratingService;
        this.myActivatedRoute = myActivatedRoute;
        this.router = router;
        this.selected = 'option2';
        this.userId = "";
        this.bookId = "";
        this.user_img = "assets/user/author/author-1.jpg";
        this.loading = false;
        this.favsNum = 100;
        this.userRate = -1;
        this.userReview = "";
        this.bookStatus = "";
        this.book = {
            id: "",
            name: "",
            description: "",
            image: "",
            category: "",
            author: "",
            categoryName: "",
            authorName: "",
            bookReviews: [],
            bookRatings: [],
            currantReader: [],
            finishReadUsers: [],
            wantToReadeUsers: [],
        };
        this.ratesNum = 0;
        this.avgRate = 0;
        this.myRating = -1;
        this.text = '';
        this.reviewerId = '';
        this.reviews = [];
        this.userId = sessionStorage.getItem("userId") || "" /*"605a0532ba76f47a7793e130"*/;
    }
    ngOnInit() {
        this.subscriber = this.bookService.show(this.myActivatedRoute.snapshot.params.id)
            .subscribe((response) => {
            this.book = response.body;
            this.reviews = this.book.bookReviews;
            this.ratings = this.book.bookRatings;
            this.ratesNum = this.book.bookRatings.length;
            this.readBookStatus(response.body.currantReader, response.body.wantToReadeUsers, response.body.finishReadUsers);
            this.favsNum = 0;
            this.avgRate = 0;
            this.loading = true;
            for (let i = 0; i < this.ratings.length; i++)
                this.avgRate += this.ratings[i].rate;
            if (this.ratesNum)
                this.avgRate /= this.ratesNum;
            this.drawMyRating(this.ratings);
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error getting book details!",
                footer: ''
            });
        });
    }
    setRate(bookRate) {
        if (this.userId) {
            this.rateSubscriber = this.ratingService.store({ rate: bookRate, rater: this.userId, book: this.userId }).subscribe((response) => { }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Error, your rate hasn't been saved !",
                    footer: ''
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to login first!',
                footer: '<a routerLinkActive="active" routerLink="/login"> Go to Login</a>'
            });
        }
    }
    drawMyRating(ratingsArr) {
        this.stars_Arr = [this.star1, this.star2, this.star3, this.star4, this.star5];
        for (let i = 0; i < ratingsArr.length; i++) {
            if (ratingsArr[i].rater == this.userId) {
                this.stars_Arr[ratingsArr[i].rate - 1].nativeElement.checked = true;
            }
        }
    }
    reloadComponent() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
    publishClicked(e) {
        if (this.userId) {
            this.text = this.reviewArea.nativeElement.value;
            if (this.text.length >= 1 && this.text.length <= 300) {
                console.log(this.book.id);
                this.reviewerId = /*sessionStorage.getItem("userId");*/ this.userId;
                this.reviewSubscriber = this.reviewsService.store({ reviwer: this.reviewerId, book: this.book.id, body: this.text })
                    .subscribe((response) => {
                    console.log(response);
                    // this.router.navigate([`/book/${this.myActivatedRoute.snapshot.params.id}`]);
                    this.reloadComponent();
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Error, your review hasn't been saved !",
                        footer: ''
                    });
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to login first!',
                footer: '<a routerLinkActive="active" routerLink="/login"> Go to Login</a>'
            });
        }
    }
    changeBookStatus(type) {
        this.loading = false;
        if (this.userId) {
            this.reviewerId = this.userId;
            this.userSubscriber = this.userService.updateUserBookList({ userId: this.reviewerId, bookId: this.book.id, type: type })
                .subscribe((response) => {
                if (type == "1")
                    this.bookStatus = "Want to read";
                else if (type == "2")
                    this.bookStatus = "Is currant read";
                else if (type == "3")
                    this.bookStatus = "Finished reading";
                console.log(response);
                this.loading = true;
                this.reloadComponent();
            }, (err) => {
                console.log(err);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to login first!',
                footer: '<a routerLinkActive="active" routerLink="/login"> Go to Login</a>'
            });
        }
    }
    readBookStatus(currantReader, wantToRead, finishRead) {
        // this.userId = "605a0532ba76f47a7793e130"
        const currant = currantReader.find(element => element == this.userId);
        const want = wantToRead.find(element => element == this.userId);
        const finish = finishRead.find(element => element == this.userId);
        if (currant)
            this.bookStatus = "Is currant read";
        else if (want)
            this.bookStatus = "Want to read";
        else if (finish)
            this.bookStatus = "Finished reading";
        else
            this.bookStatus = "Add to my list";
    }
}
BookDetComponent.ɵfac = function BookDetComponent_Factory(t) { return new (t || BookDetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_layout_book_services_book_service_service__WEBPACK_IMPORTED_MODULE_3__["BookServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_reviews_service__WEBPACK_IMPORTED_MODULE_4__["ReviewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_rating_service_service__WEBPACK_IMPORTED_MODULE_6__["RatingServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
BookDetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BookDetComponent, selectors: [["app-book-det"]], viewQuery: function BookDetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.star1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.star2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.star3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.star4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.star5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.reviewArea = _t.first);
    } }, decls: 81, vars: 19, consts: [[4, "ngIf"], [1, "book_show"], [1, "book_cover"], ["src", "assets/user/book/memories.jpg"], [1, "nav", "nav-pills", "mt-2"], [1, "nav-item", "dropdown", "m-0", "w-100", "btn-danger"], ["data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "btn", "w-100", "p-0", "text-white"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "font15", "d-block", "mt-2"], [1, "rating", "d-block", "text-center", "rating_field"], ["type", "radio", "id", "star5", "name", "rating", "value", "5", 3, "click"], ["star5", ""], ["for", "star5", "title", "Awesome - 5 stars", 1, "full", 3, "click"], ["type", "radio", "id", "star4", "name", "rating", "value", "4", 3, "click"], ["star4", ""], ["for", "star4", "title", "Excellent- 4 stars", 1, "full", 3, "click"], ["type", "radio", "id", "star3", "name", "rating", "value", "3", 3, "click"], ["star3", ""], ["for", "star3", "title", "Good - 3 stars", 1, "full", 3, "click"], ["type", "radio", "id", "star2", "name", "rating", "value", "2", 3, "click"], ["star2", ""], ["for", "star2", "title", "Kinda Good - 2 stars", 1, "full", 3, "click"], ["type", "radio", "id", "star1", "name", "rating", "value", "1", 3, "click"], ["star1", ""], ["for", "star1", "title", "bad - 1 star", 1, "full", 3, "click"], [1, "details"], [1, "fontPink"], [1, "font20", "align-self-center"], [1, "d-inline-block", "col-3", "font17"], [2, "color", "rgb(250, 225, 0)", "font-size", "large", 3, "max", "rate", "readonly", "rateChange"], ["src", "assets/user/book/book_details.jpg", 2, "width", "22px"], [1, "d-inline-block"], ["data-bs-toggle", "modal", "data-bs-target", "#ratingModal", 1, "colorBlack"], [1, "d-inline-block", "font15"], [1, "desc"], [1, "reviews"], ["action", "Post"], [1, "rev_img", 3, "src"], ["rows", "4", "placeholder", "Write your review about this book.", "required", "", "minlength", "10", "maxlength", "300", 1, "my_review", "review_body", "border-danger", 3, "value"], ["reviewArea", ""], ["type", "submit", 1, "btn", "btn-danger", "my_review_submit", 3, "click"], [4, "ngFor", "ngForOf"], [3, "ratingsArr"], [3, "src"], [1, "review_body"]], template: function BookDetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BookDetComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_a_click_11_listener() { return ctx.changeBookStatus("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Want to read");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_a_click_13_listener() { return ctx.changeBookStatus("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Is currently reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_a_click_15_listener() { return ctx.changeBookStatus("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Finished reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Rate This book");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "fieldset", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_input_click_20_listener() { return ctx.setRate(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_label_click_22_listener() { return ctx.setRate(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_input_click_23_listener() { return ctx.setRate(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_label_click_25_listener() { return ctx.setRate(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_input_click_26_listener() { return ctx.setRate(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_label_click_28_listener() { return ctx.setRate(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_input_click_29_listener() { return ctx.setRate(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_label_click_31_listener() { return ctx.setRate(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_input_click_32_listener() { return ctx.setRate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_label_click_34_listener() { return ctx.setRate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Authors: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ngb-rating", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rateChange", function BookDetComponent_Template_ngb_rating_rateChange_52_listener($event) { return ctx.avgRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "pre", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Rating details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "textarea", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookDetComponent_Template_button_click_75_listener($event) { return ctx.publishClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, BookDetComponent_li_78_Template, 4, 2, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "app-rating-det", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "app-home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.bookStatus, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.book.author.autherFirstName, " ", ctx.book.author.autherLastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book.category.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", 5)("rate", ctx.avgRate)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.avgRate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Number of rates: ", ctx.ratesNum, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Number of reviews: ", ctx.reviews.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.favsNum, " people have added this book to there favourite books list, join them now. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.book.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.user_img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratingsArr", ctx.ratings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_9__["NavUserComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRating"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _rating_det_rating_det_component__WEBPACK_IMPORTED_MODULE_12__["RatingDetComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_13__["HomeFooterComponent"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_14__["UserLoadingComponent"]], styles: ["@import url(http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\r\n\r\n.book_show[_ngcontent-%COMP%]{\r\n    margin: 90px 0 0 5%;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]{\r\n    min-height: 28vh;\r\n}\r\n\r\n.book_cover[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    margin-top: 20px;\r\n    position: absolute;\r\n    text-align: center;\r\n}\r\n\r\n.book_cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]{\r\n    margin-left: 17%;\r\n    padding: 15px 20px 0 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Playfair Display';\r\n    margin-bottom: 20px;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.font20[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n.font15[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    color: rgb(88, 88, 88);\r\n}\r\n\r\n.font17[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n}\r\n\r\np[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, .colorBlack[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n\r\nngb-rating[_ngcontent-%COMP%]{\r\n    outline: none;\r\n}\r\n\r\n.reviews[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-left: 65px;\r\n    margin-top: 9%;\r\n}\r\n\r\n.my_review_submit[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.rev_img[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    width: 8%;\r\n    position: absolute;\r\n}\r\n\r\n.review_body[_ngcontent-%COMP%]{\r\n    margin-left: 10%;\r\n    width: 90%;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-top: 80px;\r\n    padding: 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n\r\n    margin-left: 10%;\r\n    border: 1px solid rgb(182, 182, 182);\r\n    list-style: none;\r\n    margin-top: 10px;\r\n    padding: 5px;\r\n    display: flex;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 6%;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    display: inline;\r\n    margin-left: 1%;\r\n    align-self: center;\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]{\r\n  background-color: #DE3241;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%], label[_ngcontent-%COMP%] { margin: 0; padding: 0; }\r\n\r\nbody[_ngcontent-%COMP%]{ margin: 20px; }\r\n\r\nh1[_ngcontent-%COMP%] { font-size: 1.5em; margin: 10px; }\r\n\r\n\r\n\r\n.rating[_ngcontent-%COMP%] {\r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] { display: none; }\r\n\r\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:before {\r\n  margin: 5px;\r\n  font-size: 1.2em;\r\n  font-family: FontAwesome;\r\n  display: inlEMine-block;\r\n  content: \"\\f005\";\r\n}\r\n\r\n.rating[_ngcontent-%COMP%] {\r\n  content: \"\\f089\";\r\n  position: absolute;\r\n}\r\n\r\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n  color: #ddd;\r\n float: right;\r\n}\r\n\r\n.rating_field[_ngcontent-%COMP%]{\r\n    width: 84%;\r\n}\r\n\r\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] { color: #FFD700;  }\r\n\r\n\r\n\r\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] { color: #FFED85;  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GOztBQUVuRjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0IsU0FBUyxFQUFFLFVBQVUsRUFBRTs7QUFDekMsTUFBTSxZQUFZLEVBQUU7O0FBQ3BCLEtBQUssZ0JBQWdCLEVBQUUsWUFBWSxFQUFFOztBQUVyQyxzQ0FBc0M7O0FBRXRDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0IsYUFBYSxFQUFFOztBQUNqQztFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztDQUNaLFlBQVk7QUFDYjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTs7OENBRThDLGNBQWMsR0FBRzs7QUFBRSxpQ0FBaUM7O0FBRWxHOzs7Z0RBR2dELGNBQWMsR0FBRyIsImZpbGUiOiJib29rLWRldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cDovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XHJcblxyXG4uYm9va19zaG93e1xyXG4gICAgbWFyZ2luOiA5MHB4IDAgMCA1JTtcclxufVxyXG4uZGVzY3tcclxuICAgIG1pbi1oZWlnaHQ6IDI4dmg7XHJcbn1cclxuLmJvb2tfY292ZXJ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm9va19jb3ZlciBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCAwIDEwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9udDIwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5mb250MTV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG59XHJcbi5mb250MTd7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxucCxhOmhvdmVyLC5jb2xvckJsYWNre1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbm5nYi1yYXRpbmd7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5yZXZpZXdze1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbn1cclxuLm15X3Jldmlld19zdWJtaXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnJldl9pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnJldmlld19ib2R5e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxudWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxubGl7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODIsIDE4MiwgMTgyKTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5saSBpbWd7XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxubGkgcHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5re1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNERTMyNDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVte1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZmllbGRzZXQsIGxhYmVsIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XHJcbmJvZHl7IG1hcmdpbjogMjBweDsgfVxyXG5oMSB7IGZvbnQtc2l6ZTogMS41ZW07IG1hcmdpbjogMTBweDsgfVxyXG5cclxuLyoqKioqKiBTdHlsZSBTdGFyIFJhdGluZyBXaWRnZXQgKioqKiovXHJcblxyXG4ucmF0aW5nIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5yYXRpbmcgPiBpbnB1dCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLnJhdGluZyA+IGxhYmVsOmJlZm9yZSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgZGlzcGxheTogaW5sRU1pbmUtYmxvY2s7XHJcbiAgY29udGVudDogXCJcXGYwMDVcIjtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgY29udGVudDogXCJcXGYwODlcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5yYXRpbmcgPiBsYWJlbCB7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnJhdGluZ19maWVsZHtcclxuICAgIHdpZHRoOiA4NCU7XHJcbn1cclxuXHJcblxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLCAvKiBzaG93IGdvbGQgc3RhciB3aGVuIGNsaWNrZWQgKi9cclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsIC8qIGhvdmVyIGN1cnJlbnQgc3RhciAqL1xyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHsgY29sb3I6ICNGRkQ3MDA7ICB9IC8qIGhvdmVyIHByZXZpb3VzIHN0YXJzIGluIGxpc3QgKi9cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsIC8qIGhvdmVyIGN1cnJlbnQgc3RhciB3aGVuIGNoYW5naW5nIHJhdGluZyAqL1xyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxyXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsIC8qIGxpZ2h0ZW4gY3VycmVudCBzZWxlY3Rpb24gKi9cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsIHsgY29sb3I6ICNGRkVEODU7ICB9XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                //state(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "rZtP":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/admin layout/author/authors-list-for-admin/authors-list-for-admin.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AuthorsListForAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsListForAdminComponent", function() { return AuthorsListForAdminComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authors-service.service */ "IpQU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete/delete.component */ "ViJb");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update/update.component */ "7JOT");
/* harmony import */ var _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/empty/empty.component */ "CH8H");







function AuthorsListForAdminComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorsListForAdminComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthorsListForAdminComponent_ng_template_2_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorsListForAdminComponent_ng_template_2_tr_19_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const author_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.getAuthor(author_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthorsListForAdminComponent_ng_template_2_tr_19_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const author_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.getAuthor(author_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", author_r5.firstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](author_r5.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 4, author_r5.birthDay, "dd-mm-yyyy"));
} }
function AuthorsListForAdminComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AuthorsListForAdminComponent_ng_template_2_tr_19_Template, 17, 7, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.authors);
} }
class AuthorsListForAdminComponent {
    //constructor
    constructor(myService) {
        this.myService = myService;
        //properties
        this.keywords = "";
        this.allAuthors = [];
        this.mAuthor = {
            id: "",
            firstName: "",
            lastName: "",
            name: "",
            birthDay: "",
            image: "",
            books: []
        };
        this.authors = [];
        this.isLoad = false;
    }
    //start the component
    ngOnInit() {
        //get all data of authors from backend to display them
        this.subscriber = this.myService.getAuthors()
            .subscribe((response) => {
            this.authors = response.body;
            this.isLoad = true;
            this.authors = this.allAuthors = response.body;
        }, (err) => {
            //wrong massage 
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Server error, Can't load page content !",
                footer: ''
            });
        });
    }
    //with every change of the component
    ngOnChanges(changes) {
        console.log(changes);
        this.filterList(this.keywords);
    }
    //search about author in the list of authors
    filterList(keywords) {
        this.authors = this.allAuthors.filter((item) => {
            return item.name.toLocaleLowerCase().includes(keywords.toLocaleLowerCase());
        });
    }
    //get the details for specifc author 
    getAuthor(a) {
        this.mAuthor = a;
    }
}
AuthorsListForAdminComponent.ɵfac = function AuthorsListForAdminComponent_Factory(t) { return new (t || AuthorsListForAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authors_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthorsServiceService"])); };
AuthorsListForAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthorsListForAdminComponent, selectors: [["app-authors-list-for-admin"]], inputs: { keywords: "keywords" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 5, consts: [["class", "row w-100 mt-5 pt-5", 4, "ngIf", "ngIfElse"], [4, "ngIf"], ["displayContent", ""], [3, "authorInfo"], [1, "row", "w-100", "mt-5", "pt-5"], [1, "col-md-12", "text-center", "loader"], [1, "fas", "fa-spinner", "fa-spin", "fa-5x", "text-info"], [1, "content-page", "mt-4"], [1, "row", "mt-5"], [1, "col-2"], [1, "table", "col-8"], [1, "custom-bg", "text-white"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["src", "assets/admin/author/author.svg", 1, "author-imag"], ["data-bs-toggle", "modal", "data-bs-target", "#updateModal", 1, "btn", "custom-txt", 3, "click"], [1, "fas", "fa-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteModal", 1, "btn", "text-danger", 3, "click"], [1, "fas", "fa-trash"]], template: function AuthorsListForAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AuthorsListForAdminComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AuthorsListForAdminComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AuthorsListForAdminComponent_ng_template_2_Template, 20, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-admin-delete", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-admin-update", 3);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoad)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("authorInfo", ctx.mAuthor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("authorInfo", ctx.mAuthor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_4__["DeleteComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"], _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_6__["EmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding-left: 15%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  border: none !important;\r\n}\r\n\r\n\r\n\r\n.top-part[_ngcontent-%COMP%] {\r\n  margin-top: 10%;\r\n  height: 200px;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\r\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  color: white;\r\n}\r\n\r\n.top-part[_ngcontent-%COMP%]   .add-author[_ngcontent-%COMP%] {\r\n  background-color: #de3242;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 20px;\r\n  float: right;\r\n  border-radius: 50%;\r\n  color: white;\r\n  border: none;\r\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 4px 5px 0 rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.2);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.author-imag[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 35px;\r\n  border-radius: 50%;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .author[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    padding-left: 21%;\r\n  }\r\n\r\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .orm-outline[_ngcontent-%COMP%] {\r\n    width: 90% !important;\r\n  }\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.5);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.table-dark[_ngcontent-%COMP%] {\r\n  background-color: #24324a;\r\n}\r\n\r\n\r\n\r\n.custom-bg[_ngcontent-%COMP%] {\r\n  background-color: #24324a;\r\n}\r\n\r\n.custom-txt[_ngcontent-%COMP%] {\r\n  color: #24324a;\r\n}\r\n\r\n.table-dark[_ngcontent-%COMP%] {\r\n  background-color: #24324a !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcnMtbGlzdC1mb3ItYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQSxjQUFjOztBQUNkO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTtxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQSxZQUFZOztBQUNaO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJhdXRob3JzLWxpc3QtZm9yLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzLFxyXG5pbnB1dDpmb2N1cyxcclxuc3ZnOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qVG9wIFNlY3Rpb24qL1xyXG4udG9wLXBhcnQge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4udG9wLXBhcnQgaDIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50b3AtcGFydCAuYXV0aG9yLXNlYXJjaCBpbnB1dCxcclxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIGJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpLFxyXG4gICAgMCA0cHggNXB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xyXG59XHJcblxyXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2ggYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvcC1wYXJ0IC5hZGQtYXV0aG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKlRhYmxlIFNlY3Rpb24qL1xyXG5cclxuLmF1dGhvci1pbWFnIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmF1dGhvciAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjElO1xyXG4gIH1cclxuXHJcbiAgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3VwLFxyXG4gIC5vcm0tb3V0bGluZSB7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCBidXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4udGFibGUtZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzI0YTtcclxufVxyXG4vKk91ciBjb2xvciovXHJcbi5jdXN0b20tYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDMyNGE7XHJcbn1cclxuLmN1c3RvbS10eHQge1xyXG4gIGNvbG9yOiAjMjQzMjRhO1xyXG59XHJcbi50YWJsZS1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMjRhICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */", ".content-page[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  margin-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "tU9N":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin layout/book/update/book-update.component.ts ***!
  \***************************************************************************/
/*! exports provided: BookUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookUpdateComponent", function() { return BookUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_book_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/book-service.service */ "+TRR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["closebutton"];
function BookUpdateComponent_ng_container_20_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", author_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r3.name);
} }
function BookUpdateComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookUpdateComponent_ng_container_20_option_1_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const author_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", author_r3.id != ctx_r0.book.author.id);
} }
function BookUpdateComponent_ng_container_27_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r6.name);
} }
function BookUpdateComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookUpdateComponent_ng_container_27_option_1_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r6.id != ctx_r1.book.category.id);
} }
class BookUpdateComponent {
    //constructor
    constructor(bookService) {
        this.bookService = bookService;
        this.updatedBook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.book = {
            id: "",
            name: "",
            description: "",
            image: "",
            category: "",
            author: "",
            categoryName: "",
            authorName: "",
            bookReviews: [],
            bookRatings: [],
            currantReader: [],
            finishReadUsers: [],
            wantToReadeUsers: [],
        };
        //get book data with validation tests
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9 ]*')]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(250), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z,-_. ]*')]),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]*')])
        });
    }
    //start the component
    ngOnInit() { }
    //update the list after any edit
    ngOnChanges(changes) {
        this.bookForm.controls.name.setValue(this.book.name);
        this.bookForm.controls.description.setValue(this.book.description);
        this.bookForm.controls.author.setValue(this.book.author);
        this.bookForm.controls.category.setValue(this.book.category);
        this.bookForm.controls.image.setValue(this.book.image);
    }
    //get the name of the book from the form
    getNameStatus() {
        return this.bookForm.controls.name.valid;
    }
    //get the discribtion of the book from the form
    getDescriptionStatus() {
        return this.bookForm.controls.description.valid;
    }
    //get the author of the book from the form
    getAuthorStatus() {
        return this.bookForm.controls.author.valid;
    }
    //get the category of the book from the form
    getCategoryStatus() {
        return this.bookForm.controls.category.valid;
    }
    //get book's image
    getImageStatus() {
        return this.bookForm.controls.image.valid;
    }
    //update the data of exist book
    submitUpdateForm() {
        //check if the all data are valid
        if (this.getNameStatus() && this.getDescriptionStatus() && this.getAuthorStatus() && this.getCategoryStatus() && this.getImageStatus()) {
            this.book.name = this.bookForm.controls.name.value;
            this.book.description = this.bookForm.controls.description.value;
            this.book.author = this.bookForm.controls.author.value;
            this.book.category = this.bookForm.controls.category.value;
            this.book.image = this.bookForm.controls.image.value;
            //send the updated book to the backend
            this.bookService.update(this.book).subscribe((response) => {
                // console.log(response.body.status);
                console.log(response);
                this.updated();
                this.bookForm.reset();
                this.updatedBook.emit(this.book);
                this.closebutton.nativeElement.click();
            }, error => {
                //error to add new book to database
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Error updating book, changes havn't been saved!",
                    footer: ''
                });
            });
        }
        else {
            //invalidation data for the new book
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Invalid data !",
                footer: ''
            });
        }
    }
    updated() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Good job!', 'Author Updated Successfully!', 'success');
    }
}
BookUpdateComponent.ɵfac = function BookUpdateComponent_Factory(t) { return new (t || BookUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service_service__WEBPACK_IMPORTED_MODULE_3__["BookServiceService"])); };
BookUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookUpdateComponent, selectors: [["app-book-update"]], viewQuery: function BookUpdateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, inputs: { authors: ["authorsInfo", "authors"], categories: ["categoriesInfo", "categories"], book: ["bookInfo", "book"] }, outputs: { updatedBook: "updatedBook" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 42, vars: 9, consts: [["id", "updateModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", "w-100"], [1, "modal-dialog", "w-100"], [1, "modal-content", "w-100"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "p-3", "book-form"], ["id", "form", 1, "", 3, "formGroup", "ngSubmit"], [1, "fas", "fa-book-open", "fa-5x", "d-block"], [1, "mb-3", "field"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "formControlName", "name", 1, "form-control", 3, "value"], ["for", "author", 1, "form-label"], ["aria-label", "Default select example", "id", "author", "formControlName", "author", 1, "form-select"], ["selected", "", 3, "value"], [4, "ngFor", "ngForOf"], [1, "field"], ["for", "category", 1, "form-label"], ["aria-label", "Default select example", "id", "category", "formControlName", "category", 1, "form-select"], ["for", "image", 1, "form-label"], ["type", "text", "id", "image", 1, "form-control"], ["for", "description", 1, "form-label"], ["id", "description", "rows", "6", 1, "form-control", 3, "value"], [1, "actions", "text-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "w-25", "m-1"], ["closebutton", ""], ["type", "submit", 1, "btn", "btn-danger", "w-25", "m-1"], [3, "value", 4, "ngIf"], [3, "value"]], template: function BookUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BookUpdateComponent_Template_form_ngSubmit_8_listener() { return ctx.submitUpdateForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BookUpdateComponent_ng_container_20_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BookUpdateComponent_ng_container_27_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Update Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bookForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.book.author.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.authorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.book.category._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.book.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".book-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .book-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: right;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%] {\r\n    margin: 10px 0 20px 2%;\r\n    width: 48%;\r\n    display: inline-block;\r\n  }\r\n\r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: #de3242;\r\n    margin: 40px auto;\r\n  }\r\n\r\n  @media (min-width: 576px){\r\n    .modal-dialog[_ngcontent-%COMP%] {\r\n      max-width: 800px;\r\n      margin: 1.75rem auto;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTtNQUNFLGdCQUFnQjtNQUNoQixvQkFBb0I7SUFDdEI7RUFDRiIsImZpbGUiOiJib29rLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stZm9ybSBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvb2stZm9ybSBidXR0b24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5maWVsZCB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4IDIlO1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICBmb3JtIHN2ZyB7XHJcbiAgICBjb2xvcjogI2RlMzI0MjtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "y+2T":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/user layout/home/popular-book/home-popular-book.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HomePopularBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePopularBookComponent", function() { return HomePopularBookComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home.service */ "nr5L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");





function HomePopularBookComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-loading");
} }
function HomePopularBookComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookCol_r5 = ctx.$implicit;
    const j_r6 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/user/book/", bookCol_r5, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", bookCol_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.popularbooksNames[i_r3][j_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.popularbooksAuthors[i_r3][j_r6]);
} }
function HomePopularBookComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePopularBookComponent_div_8_div_1_Template, 8, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookRow_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", bookRow_r2);
} }
class HomePopularBookComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.row1 = [];
        this.row2 = [];
        this.popularbooks = [[], []];
        this.loading = false;
        this.bookNameRow1 = [];
        this.bookNameRow2 = [];
        this.popularbooksNames = [[], []];
        this.bookAuthorRow1 = [];
        this.bookAuthorRow2 = [];
        this.popularbooksAuthors = [[], []];
    }
    ngOnInit() {
        let home;
        this.subscriber = this.homeService.getHome()
            .subscribe((response) => {
            console.log(response);
            home = response.body.books;
            console.log(home);
            this.loading = true;
            for (let i = 0; i < home.length && i < 4; i++) {
                this.row1.push(home[i].bookImage);
                this.bookNameRow1.push(home[i].bookName);
                this.bookAuthorRow1.push(home[i].bookAuthor.autherFirstName);
            }
            for (let i = 4; i < home.length && i < 8; i++) {
                this.row2.push(home[i].bookImage);
                this.bookNameRow2.push(home[i].bookName);
                this.bookAuthorRow2.push(home[i].bookAuthor.autherFirstName);
            }
            this.popularbooks = [this.row1, this.row2];
            this.popularbooksNames = [this.bookNameRow1, this.bookNameRow2];
            this.popularbooksAuthors = [this.bookAuthorRow1, this.bookAuthorRow2];
            console.log(this.popularbooks);
            console.log(this.popularbooksNames);
            console.log(this.popularbooksAuthors);
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error loading Home content",
                footer: ''
            });
        });
    }
}
HomePopularBookComponent.ɵfac = function HomePopularBookComponent_Factory(t) { return new (t || HomePopularBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"])); };
HomePopularBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePopularBookComponent, selectors: [["app-home-popular-book"]], decls: 9, vars: 2, consts: [[4, "ngIf"], [1, "popular-book", "my-5"], [1, "container-home"], [1, "pt-3", "text-center"], [1, "italic"], [1, "border", "m-auto"], ["class", "row mt-5 w-100", 4, "ngFor", "ngForOf"], [1, "row", "mt-5", "w-100"], ["class", "col-md-6 col-lg-4 col-xl-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "col-xl-3"], [1, "card", "mb-3", "mt-3"], ["onerror", "this.onerror=null; this.src='/assets/user/book/book-1.jpg.jpg'", 1, "card-img-top", 3, "src", "alt"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "card-link"]], template: function HomePopularBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePopularBookComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePopularBookComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.popularbooks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__["UserLoadingComponent"]], styles: [".container-home[_ngcontent-%COMP%] {\r\n    max-width: 90%;\r\n    margin: auto;\r\n    padding: 0 20px !important;\r\n}\r\n\r\n.popular-book[_ngcontent-%COMP%] {\r\n    font-family: 'PT Sans', sans-serif;\r\n}\r\n\r\n.popular-book[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 230px !important;\r\n}\r\n\r\n.popular-book[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #88807C;\r\n}\r\n\r\n.popular-book[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\r\n    color: #DE3241;\r\n    font-weight: bold;\r\n}\r\n\r\n.popular-book[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #DE3241;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.subscribe[_ngcontent-%COMP%] {\r\n    background-color: #DE3242;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    background-color: #121212;\r\n    width: 100px;\r\n    height: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcG9wdWxhci1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCOztBQUV2QjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFHQSx3QkFBd0I7O0FBRXhCO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoiaG9tZS1wb3B1bGFyLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcG9wdWxhciBCb29rIFNlY3Rpb24qL1xyXG5cclxuLmNvbnRhaW5lci1ob21lIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3B1bGFyLWJvb2sge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBvcHVsYXItYm9vayBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9wdWxhci1ib29rIHAge1xyXG4gICAgY29sb3I6ICM4ODgwN0M7XHJcbn1cclxuXHJcbi5wb3B1bGFyLWJvb2sgcDpsYXN0LW9mLXR5cGUge1xyXG4gICAgY29sb3I6ICNERTMyNDE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBvcHVsYXItYm9vayBpIHtcclxuICAgIGNvbG9yOiAjREUzMjQxO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLypzdGF5IGluIHRvdWNoIHNlY3Rpb24qL1xyXG5cclxuLnN1YnNjcmliZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREUzMjQyO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map