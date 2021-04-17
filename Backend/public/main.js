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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__["UserLoadingComponent"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__["NavUserComponent"], _header_home_header_component__WEBPACK_IMPORTED_MODULE_6__["HomeHeaderComponent"], _popular_book_home_popular_book_component__WEBPACK_IMPORTED_MODULE_7__["HomePopularBookComponent"], _subscribe_home_subscribe_component__WEBPACK_IMPORTED_MODULE_8__["HomeSubscribeComponent"], _author_home_author_component__WEBPACK_IMPORTED_MODULE_9__["HomeAuthorComponent"], _top_category_home_top_category_component__WEBPACK_IMPORTED_MODULE_10__["HomeTopCategoryComponent"], _footer_home_footer_component__WEBPACK_IMPORTED_MODULE_11__["HomeFooterComponent"]], styles: [".popular-book[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height: 230px !important;}\n\n.popular-book[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#88807C;}\n\n.popular-book[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color:#DE3241 ;font-size: 20px;}\n\n\n\n.subscribe[_ngcontent-%COMP%]{background-color: #DE3242;}\n\n\n\n.author[_ngcontent-%COMP%]{background-color: #F5F5F5;}\n\n.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #88807C; text-decoration: none; margin-top: 10px  !important;}\n\n\n\n.border[_ngcontent-%COMP%]{background-color: #121212;width: 100px; height: 2px;}\n\n\n\n.top-category[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height: 230px; width: 100%;}\n\n.top-category[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{background-color: rgba(0, 0, 0, .4); position: absolute; width: 100%; height: 230px}\n\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after{\n    content: \"\";\n    position: absolute;\n    bottom: 40%;\n    left: 43%;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n}\n\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after{ border-bottom: 25px solid #DE3241;}\n\n.top-category[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]::after{border-bottom: 25px solid #53877A}\n\n.top-category[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]::after{border-bottom: 25px solid #F5BF56}\n\n\n\nfooter[_ngcontent-%COMP%] {background-color: #EEEEEE;}\n\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size: 38px;}\n\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color: #DE3241; font-weight: 700;}\n\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color: #121212; font-weight: 700; text-transform: capitalize; font-size: 23px;}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color: #797980; }\n\n.mission[_ngcontent-%COMP%]{font-size: 15px; line-height: 1.7;}\n\n.mission[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size: 24px;}\n\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #DE3241;}\n\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color: #797980 ; cursor: pointer;}\n\n.find[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height: 1;}\n\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 15px;line-height: 1.2;}\n\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ color: #121212; font-size: 14px; text-decoration: underline;  }\n\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color: #DE3241; cursor: pointer;}\n\nfooter[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color: #121212; font-weight: 700;}\n\n\n\n.custom-background[_ngcontent-%COMP%]{\n    background-color:  #121212;\n }\n\n\n\n.bg-bink[_ngcontent-%COMP%]{background-color: #DE3241;}\n\n.bg-blue[_ngcontent-%COMP%]{background-color: #53877A;}\n\n.bg-yellow[_ngcontent-%COMP%]{background-color: #F5BF56;}\n\n.text-bink[_ngcontent-%COMP%]{color: #DE3241;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztxQkFTcUI7O0FBRXJCLHVCQUF1Qjs7QUFDdkIsa0JBQWtCLHdCQUF3QixDQUFDOztBQUMzQyxnQkFBZ0IsYUFBYSxDQUFDOztBQUM5QixpQkFBaUIsY0FBYyxDQUFDLGVBQWUsQ0FBQzs7QUFDaEQsd0JBQXdCOztBQUN4QixXQUFXLHlCQUF5QixDQUFDOztBQUdyQyxTQUFTOztBQUNULFFBQVEseUJBQXlCLENBQUM7O0FBQ2xDLFVBQVUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixDQUFDOztBQUU5RSxTQUFTOztBQUNULFFBQVEseUJBQXlCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzs7QUFFNUQsaUJBQWlCOztBQUNqQixvQkFBb0IsYUFBYSxFQUFFLFdBQVcsQ0FBQzs7QUFDL0MsdUJBQXVCLG1DQUFtQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxhQUFhOztBQUMxRztJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0FBQ3hDOztBQUNBLGlDQUFpQyxpQ0FBaUMsQ0FBQzs7QUFDbkUsMEJBQTBCLGlDQUFpQzs7QUFDM0QsNEJBQTRCLGlDQUFpQzs7QUFHN0QsU0FBUzs7QUFDVCxRQUFRLHlCQUF5QixDQUFDOztBQUNsQyxVQUFVLGVBQWUsQ0FBQzs7QUFDMUIsZUFBZSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7O0FBQ2hELFVBQVUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLDBCQUEwQixFQUFFLGVBQWUsQ0FBQzs7QUFDeEYsVUFBVSxjQUFjLEVBQUU7O0FBQzFCLFNBQVMsZUFBZSxFQUFFLGdCQUFnQixDQUFDOztBQUFFLFdBQVcsZUFBZSxDQUFDOztBQUN4RSxpQkFBaUIsY0FBYyxDQUFDOztBQUFFLHNCQUFzQixlQUFlLEVBQUUsZUFBZSxDQUFDOztBQUN6RixRQUFRLGNBQWMsQ0FBQzs7QUFDdkIsV0FBVyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7O0FBQzVDLFNBQVMsY0FBYyxFQUFFLGVBQWUsRUFBRSwwQkFBMEIsR0FBRzs7QUFBQyxjQUFjLGNBQWMsRUFBRSxlQUFlLENBQUM7O0FBQ3RILHFCQUFxQixjQUFjLEVBQUUsZ0JBQWdCLENBQUM7O0FBR3RELFlBQVk7O0FBQ1o7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBR0EsZ0JBQWdCOztBQUNoQixTQUFTLHlCQUF5QixDQUFDOztBQUNuQyxTQUFTLHlCQUF5QixDQUFDOztBQUNuQyxXQUFXLHlCQUF5QixDQUFDOztBQUNyQyxXQUFXLGNBQWMsQ0FBQyIsImZpbGUiOiJob21lLWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keXsgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjt9XG4uaXRhbGljeyBmb250LXN0eWxlOiBpdGFsaWM7IGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSd9XG5idXR0b24ge3BhZGRpbmc6IDEycHggMjRweCAhaW1wb3J0YW50O2NvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBib3JkZXItcmFkaXVzOiAxMHB4OyBcbmZvbnQtc2l6ZTogMTdweDsgbGluZS1oZWlnaHQ6IDUwO30gXG5oZWFkZXIgLmNhcm91c2VsLWl0ZW0gaW1ne2hlaWdodDogNDUwcHg7fVxuaGVhZGVyIGgye2ZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmOyBmb250LXNpemU6IDQ5cHg7fVxuaDJ7Zm9udC1zaXplOiA0OHB4O31cbi5idG4tY3VzdG9tIHtmb250LXNpemU6IDIwcHggOyBmb250LXdlaWdodDo3MDA7fVxuYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7Y29sb3I6ICMwMDAgIWltcG9ydGFudDsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogYm9sZDt9XG5we2ZvbnQtc2l6ZTogMjBweDt9ICovXG5cbi8qcG9wdWxhciBCb29rIFNlY3Rpb24qL1xuLnBvcHVsYXItYm9vayBpbWd7aGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O31cbi5wb3B1bGFyLWJvb2sgYXtjb2xvcjojODg4MDdDO31cbi5wb3B1bGFyLWJvb2sgaSB7Y29sb3I6I0RFMzI0MSA7Zm9udC1zaXplOiAyMHB4O31cbi8qc3RheSBpbiB0b3VjaCBzZWN0aW9uKi9cbi5zdWJzY3JpYmV7YmFja2dyb3VuZC1jb2xvcjogI0RFMzI0Mjt9XG5cblxuLyphdXRob3IqL1xuLmF1dGhvcntiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O31cbi5hdXRob3IgYXtjb2xvcjogIzg4ODA3QzsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBtYXJnaW4tdG9wOiAxMHB4ICAhaW1wb3J0YW50O31cblxuLypjb21tb24qL1xuLmJvcmRlcntiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAycHg7fVxuXG4vKnRvcCBjYXRlZ29yaWVzKi9cbi50b3AtY2F0ZWdvcnkgaW1nIHsgaGVpZ2h0OiAyMzBweDsgd2lkdGg6IDEwMCU7fVxuLnRvcC1jYXRlZ29yeSAub3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAyMzBweH1cbi50b3AtY2F0ZWdvcnkgLmNhcmQtYm9keTo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MCU7XG4gICAgbGVmdDogNDMlO1xuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50b3AtY2F0ZWdvcnkgLmNhcmQtYm9keTo6YWZ0ZXJ7IGJvcmRlci1ib3R0b206IDI1cHggc29saWQgI0RFMzI0MTt9XG4udG9wLWNhdGVnb3J5IC50d286OmFmdGVye2JvcmRlci1ib3R0b206IDI1cHggc29saWQgIzUzODc3QX1cbi50b3AtY2F0ZWdvcnkgLnRocmVlOjphZnRlcntib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkICNGNUJGNTZ9XG5cblxuLypGb290ZXIqL1xuZm9vdGVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO31cbmZvb3RlciBoMntmb250LXNpemU6IDM4cHg7fVxuZm9vdGVyIGgyIHNwYW57Y29sb3I6ICNERTMyNDE7IGZvbnQtd2VpZ2h0OiA3MDA7fVxuZm9vdGVyIGg1e2NvbG9yOiAjMTIxMjEyOyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgZm9udC1zaXplOiAyM3B4O31cbmZvb3RlciAgcHtjb2xvcjogIzc5Nzk4MDsgfVxuLm1pc3Npb257Zm9udC1zaXplOiAxNXB4OyBsaW5lLWhlaWdodDogMS43O30gLm1pc3Npb24gaXtmb250LXNpemU6IDI0cHg7fVxuLnNvY2lhbC1pY29ucyBpIHtjb2xvcjogI0RFMzI0MTt9IC5zb2NpYWwtaWNvbnMgaTpob3Zlcntjb2xvcjogIzc5Nzk4MCA7IGN1cnNvcjogcG9pbnRlcjt9IFxuLmZpbmQgcHtsaW5lLWhlaWdodDogMTt9XG4uY29udGFjdCBwe2ZvbnQtc2l6ZTogMTVweDtsaW5lLWhlaWdodDogMS4yO31cbi5maW5kIGF7IGNvbG9yOiAjMTIxMjEyOyBmb250LXNpemU6IDE0cHg7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgfS5maW5kIGE6aG92ZXJ7Y29sb3I6ICNERTMyNDE7IGN1cnNvcjogcG9pbnRlcjt9XG5mb290ZXIgLmNvbnRhY3Qgc3Bhbntjb2xvcjogIzEyMTIxMjsgZm9udC13ZWlnaHQ6IDcwMDt9XG5cblxuLypmb3IgdGVzdCAqL1xuLmN1c3RvbS1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMTIxMjEyO1xuIH1cblxuXG4gLypDdXN0b20gQ29sb3JzKi9cbiAuYmctYmlua3tiYWNrZ3JvdW5kLWNvbG9yOiAjREUzMjQxO31cbiAuYmctYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjNTM4NzdBO31cbiAuYmcteWVsbG93e2JhY2tncm91bmQtY29sb3I6ICNGNUJGNTY7fVxuIC50ZXh0LWJpbmt7Y29sb3I6ICNERTMyNDE7fSJdfQ== */"] });


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
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_1__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _authors_list_for_admin_authors_list_for_admin_component__WEBPACK_IMPORTED_MODULE_5__["AuthorsListForAdminComponent"]], styles: [".content-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-left: 15%;\n}\n\nbutton[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n\n\n.top-part[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  height: 240px;\n}\n\n.top-part[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  color: white;\n}\n\n.top-part[_ngcontent-%COMP%]   .add-author[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  width: 50px;\n  height: 50px;\n  font-size: 20px;\n  float: right;\n  border-radius: 50%;\n  color: white;\n  border: none;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 4px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\n.search-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  transition: all 0.5s ease-in-out;\n}\n\n\n\n.author-imag[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n\n@media only screen and (max-width: 500px) {\n  .author[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 21%;\n  }\n\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .orm-outline[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  transition: all 0.5s ease-in-out;\n}\n\n.table-dark[_ngcontent-%COMP%] {\n  background-color: #24324a;\n}\n\n\n\n.custom-bg[_ngcontent-%COMP%] {\n  background-color: #24324a;\n}\n\n.custom-txt[_ngcontent-%COMP%] {\n  color: #24324a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBLGNBQWM7O0FBQ2Q7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFO3FDQUNtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBLFlBQVk7O0FBQ1o7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW50LXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xufVxuXG5idXR0b246Zm9jdXMsXG5pbnB1dDpmb2N1cyxcbnN2Zzpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qVG9wIFNlY3Rpb24qL1xuLnRvcC1wYXJ0IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cblxuLnRvcC1wYXJ0IGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2gge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2ggaW5wdXQsXG4udG9wLXBhcnQgLmF1dGhvci1zZWFyY2ggYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpLFxuICAgIDAgNHB4IDVweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcbn1cblxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvcC1wYXJ0IC5hZGQtYXV0aG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uc2VhcmNoLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qVGFibGUgU2VjdGlvbiovXG5cbi5hdXRob3ItaW1hZyB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYXV0aG9yIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjElO1xuICB9XG5cbiAgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3VwLFxuICAub3JtLW91dGxpbmUge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG50YWJsZSB0ZCBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLnRhYmxlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMjRhO1xufVxuLypPdXIgY29sb3IqL1xuLmN1c3RvbS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDMyNGE7XG59XG4uY3VzdG9tLXR4dCB7XG4gIGNvbG9yOiAjMjQzMjRhO1xufVxuIl19 */", ".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


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
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  transition: all 0.3s ease-in;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #DE3241;\n  padding: 5px;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  outline: none;\n  border: none;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  height: 30px;\n  color: white;\n}\n\nul[_ngcontent-%COMP%]:first-child {\n  margin-left: 32%;\n}\n\nli[_ngcontent-%COMP%] {\n  margin: 0 2%;\n}\n\nnav.logo[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: left;\n  height: 45px;\n  transition: 0.5s;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display';\n  font-weight: 700;\n  font-size: 30px;\n}\n\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .books[_ngcontent-%COMP%] {\n  color: #DE3241;\n}\n\nnav.navbar-default[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease-in-out;\n}\n\nnav.navbar-default.affix[_ngcontent-%COMP%] {\n  background-color: #222;\n  transition: all 0.3s ease-in-out;\n}\n\n.login[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  justify-content: flex-end;\n}\n\n.login-anchor[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  font-family: 'Roboto', sans-serif;\n}\n\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, nav.navbar-default[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent;\n}\n\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .login[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  font-size: 110%;\n  font-weight: bold;\n}\n\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, nav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #DE3241;\n  background-color: transparent;\n}\n\n.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\nnav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:focus, nav.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:hover {\n  font-weight: 700;\n  color: #DE3241;\n  background-color: transparent;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%], .navbar-toggler[_ngcontent-%COMP%]{\n  border-color: transparent;\n  background-color: transparent;\n}\n\n@media (max-width: 991px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.8);\n    margin-top: 67px;\n    align-items: left;\n  }\n\n  li[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .navbar-toggler-icon[_ngcontent-%COMP%], .navbar-toggler[_ngcontent-%COMP%] {\n    border: transparent !important;\n  }\n}\n\n.icon[_ngcontent-%COMP%] {\n  animation: rotation 3s infinite;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #DE3241;\n}\n\n.mr[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #DE3241;\n  cursor: pointer;\n}\n\n.logout[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@media screen and (max-width: 991px) {\n  nav.navbar-default[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n\n@media screen and (min-width: 992px) {\n  nav.navbar-default[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFHckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBR2pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUd0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBQ0YiLCJmaWxlIjoibmF2LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERTMyNDE7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvZ2dsZSB7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG51bDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMiU7XG59XG5cbmxpIHtcbiAgbWFyZ2luOiAwIDIlO1xufVxuXG5uYXYubG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxubmF2IC5sb2dvIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbm5hdiAubG9nbyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5uYXYgLmxvZ28gLmJvb2tzIHtcbiAgY29sb3I6ICNERTMyNDE7XG59XG5cbm5hdi5uYXZiYXItZGVmYXVsdCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxubmF2Lm5hdmJhci1kZWZhdWx0LmFmZml4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ2luIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmxvZ2luLWFuY2hvciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxubmF2Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbm5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmZvY3VzLCBuYXYubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5uYXYubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGEsIC5sb2dpbiwgcHJlIHtcbiAgY29sb3I6ICNmZmY7XG4gIC8qZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyovXG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyxcbm5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpob3Zlcixcbi5sb2dpbiBhOmhvdmVyIHtcbiAgY29sb3I6ICNERTMyNDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubG9naW4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbm5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiBsaSBhLmFjdGl2ZSxcbm5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiBsaSBhLmFjdGl2ZTpmb2N1cyxcbm5hdi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiBsaSBhLmFjdGl2ZTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjREUzMjQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmJhci10b2dnbGVyLWljb24sIC5uYXZiYXItdG9nZ2xlcntcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgbWFyZ2luLXRvcDogNjdweDtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbiAgfVxuXG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlci1pY29uLCAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaWNvbiB7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gM3MgaW5maW5pdGU7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI0RFMzI0MTtcbn1cblxuLm1yIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4udXNlci1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RFMzI0MTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nb3V0e1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICBuYXYubmF2YmFyLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICBuYXYubmF2YmFyLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxufVxuIl19 */"] });


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
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"]], styles: ["#graph[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 450px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  font-family: 'Ubuntu', sans-serif;\n  background-color: #e4e4e4;\n  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.34);\n}\n.progressBar[_ngcontent-%COMP%] {\n  width: 96%;\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; \n}\n.progressTrack[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 40px;\n  border-radius: 10px;\n  margin-top: 10px;\n  box-shadow: inset 0px 0px 10px 5px rgba(0,0,0,0.4);\n}\n.progressFill[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 0%;\n  border-radius: 10px 10px 10px 10px;\n  background: linear-gradient(0deg, #CE3241 0%, #DE3241 52%, #CE3241 100%);\n  text-align: center;\n  line-height: 40px;\n  transition: all 3s ease ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy1kZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUd6Qiw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFHaEIsa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGtDQUFrQztFQUNsQyx3RUFBd0U7RUFDeEUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoicmF0aW5nLWRldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dyYXBoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjM0KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMzQpO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMzQpO1xufVxuLnByb2dyZXNzQmFyIHtcbiAgd2lkdGg6IDk2JTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG59XG4ucHJvZ3Jlc3NUcmFjayB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC40KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNCk7XG59XG4ucHJvZ3Jlc3NGaWxsIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjQ0UzMjQxIDAlLCAjREUzMjQxIDUyJSwgI0NFMzI0MSAxMDAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2UgO1xufSAgXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/hossam/Local Disk/workspaces/gitHub/T.Books/front-end/src/main.ts */"zUnb");


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".pagination[_ngcontent-%COMP%]{\n    margin: auto;\n    justify-content: center;\n  }\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n    font-size: 24px;\n    font-weight: bold;\n  }\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-top: -5px;\n    color: #de3242;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCIiwiZmlsZSI6InVzZXItcHJvZmlsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlBhZ2luYXRpb24gU2VjdGlvbiovXG4ucGFnaW5hdGlvbntcbiAgICBtYXJnaW46IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uIGxpIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uIGxpIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uIGxpIGEgc3ZnIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGNvbG9yOiAjZGUzMjQyO1xuICB9XG4gICJdfQ== */"] });


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
    } }, directives: [_user_layout_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__["NavUserComponent"]], styles: ["img[_ngcontent-%COMP%]{\n    width:70%;\n}\n.image[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.content[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    font-size: 2.7em;\n    font-weight: 700;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDo3MCU7XG59XG4uaW1hZ2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMi43ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAvKmNvbG9yOiByZ2IoODcsIDg3LCA4Nyk7Ki9cbn1cbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".author[_ngcontent-%COMP%] {\n    font-family: 'PT Sans', sans-serif;\n    background-color: #F5F5F5;\n}\n\n.italic[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-family: 'Playfair Display';\n}\n\nbutton[_ngcontent-%COMP%] {\n    padding: 12px 24px !important;\n    color: #fff;\n    background-color: #000;\n    border-radius: 10px;\n    font-size: 17px;\n    line-height: 2;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 48px;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n    border: 1px solid #000 !important;\n    color: #000 !important;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #88807C;\n    text-decoration: none;\n    margin-top: 10px !important;\n}\n\n.border[_ngcontent-%COMP%] {\n    background-color: #121212;\n    width: 100px;\n    height: 2px;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    object-fit: cover;\n    transition: .5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYXV0aG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUtYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yIHtcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5pdGFsaWMge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDEycHggMjRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5idG4tY3VzdG9tIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hdXRob3IgYSB7XG4gICAgY29sb3I6ICM4ODgwN0M7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuIl19 */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".subscribe[_ngcontent-%COMP%] {\n    font-family: 'PT Sans', sans-serif;\n    background-color: #DE3242;\n}\n\n.italic[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-family: 'Playfair Display';\n}\n\nbutton[_ngcontent-%COMP%] {\n    padding: 12px 24px !important;\n    color: #fff;\n    background-color: #000;\n    border-radius: 10px;\n    font-size: 17px;\n    line-height: 2;\n    width: 140px;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n    border: 1px solid #000 !important;\n    color: #000 !important;\n    font-size: 20px;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc3Vic2NyaWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJob21lLXN1YnNjcmliZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnNjcmliZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREUzMjQyO1xufVxuXG4uaXRhbGljIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jztcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIHdpZHRoOiAxNDBweDtcbn1cblxuLmJ0bi1jdXN0b20ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".author-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.author-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n\n.field[_ngcontent-%COMP%] {\n  margin: 10px 0 20px 2%;\n  width: 48%;\n  display: inline-block;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\nform[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #de3242;\n  margin: 40px auto;\n}\n\n@media (min-width: 576px){\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 1.75rem auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoidXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yLWZvcm0gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5hdXRob3ItZm9ybSBidXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbjogMTBweCAwIDIwcHggMiU7XG4gIHdpZHRoOiA0OCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuZm9ybSBzdmcge1xuICBjb2xvcjogI2RlMzI0MjtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".dashboard-sidebar[_ngcontent-%COMP%] {\n  background-color: #24324a;\n  height: 100vh;\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n}\n.dashboard-sidebar[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  margin: 5% 0;\n  text-align: center;\n  color: rgb(138, 153, 179);\n}\n.header-char[_ngcontent-%COMP%] {\n  color: #de3242;\n}\n.dashboard-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 28px;\n  font-weight: bold;\n  line-height: 1.2;\n  padding: 10% 0 10% 25%;\n  text-align: left;\n  background-color: rgba(0, 0, 0, 0.1);\n  font-style: italic;\n}\n.dashboard-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.dashboard-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dashboard-sidebar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgb(138, 153, 179);\n}\n.dashboard-sidebar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.mange[_ngcontent-%COMP%] {\n  padding: 2% 10% 1%;\n  line-height: 3;\n}\n.mange[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  font-weight: 800;\n}\n.mange[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  font-weight: 800;\n}\n.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #fff !important;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 7% 5%;\n  font-size: 20px;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixNQUFNO0FBQ1I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDMyNGE7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xufVxuLmRhc2hib2FyZC1zaWRlYmFyIC5sb2dvLWljb24ge1xuICBtYXJnaW46IDUlIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYigxMzgsIDE1MywgMTc5KTtcbn1cbi5oZWFkZXItY2hhciB7XG4gIGNvbG9yOiAjZGUzMjQyO1xufVxuLmRhc2hib2FyZC1zaWRlYmFyIC5oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZzogMTAlIDAgMTAlIDI1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZGFzaGJvYXJkLXNpZGViYXIgLmhlYWRlciBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmRhc2hib2FyZC1zaWRlYmFyIGEsXG4uZGFzaGJvYXJkLXNpZGViYXIgLnRpdGxlIHtcbiAgY29sb3I6IHJnYigxMzgsIDE1MywgMTc5KTtcbn1cbi5kYXNoYm9hcmQtc2lkZWJhciAudGl0bGUge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLm1hbmdlIHtcbiAgcGFkZGluZzogMiUgMTAlIDElO1xuICBsaW5lLWhlaWdodDogMztcbn1cbi5tYW5nZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLm1hbmdlOmhvdmVyIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uYWN0aXZlIGF7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogNyUgNSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmxpIGEgc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIl19 */", "@media screen and (max-width: 700px) {\n  .dashboard-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  .dashboard-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: left;\n  }\n  div.content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .dashboard-sidebar[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .dashboard-sidebar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .dashboard-sidebar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n  .dashboard-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 2%;\n  }\n}\n\n@media screen and (max-width: 589px) {\n  .dashboard-sidebar[_ngcontent-%COMP%]   .sm-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LXJlc3BvbnNpdmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQtcmVzcG9uc2l2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuZGFzaGJvYXJkLXNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmRhc2hib2FyZC1zaWRlYmFyIGEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIGRpdi5jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuZGFzaGJvYXJkLXNpZGViYXIgLmxvZ28taWNvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5kYXNoYm9hcmQtc2lkZWJhciAudGl0bGUsXG4gIC5kYXNoYm9hcmQtc2lkZWJhciAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5kYXNoYm9hcmQtc2lkZWJhciB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmRhc2hib2FyZC1zaWRlYmFyIGxpIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODlweCkge1xuICAuZGFzaGJvYXJkLXNpZGViYXIgLnNtLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]], styles: ["nav[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  top: 0px;\n  color: white;\n  padding: 0;\n}\n\nnav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 20px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18%;\n  color: white;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJuYXZiYXItYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XG4gIHRvcDogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm5hdiBwIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG59XG5cbm5hdiB1bCB7XG4gIHBhZGRpbmctbGVmdDogMTglO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm5hdiB1bCBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


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
    } }, styles: [".img-empty[_ngcontent-%COMP%] {\n    height: 80vh;\n    background-image: url('/assets/empty-comp.jpg');\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osK0NBQStDO0lBQy9DLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImVtcHR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWVtcHR5IHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2VtcHR5LWNvbXAuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__["NavUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_6__["UserLoadingComponent"]], styles: [".parentContainer[_ngcontent-%COMP%]{\n    margin-top: 1%;\n    margin-left: 10%;\n}\n.card-container[_ngcontent-%COMP%]{\n    margin-left: 15%;\n    margin-bottom: 3%;\n    background-color: #f5f5f5;\n    font-size: 20px;\n    padding-bottom: 1%;\n    padding-top: 1%;\n    border-radius: 25px;\n    display: inline-block;\n}\n.first-star[_ngcontent-%COMP%]{\n    margin-left: 20%;\n    color:  #de3242;\n}\nselect[_ngcontent-%COMP%]{\n    width: 50%;\n    margin-left: 45%;\n    margin-top: 2%;\n    border-radius: 25px;\n}\n.selectHeader[_ngcontent-%COMP%]{\n    background-color: #de3242;\n\n}\n.ratingstar1[_ngcontent-%COMP%]:hover, .ratingstar2[_ngcontent-%COMP%]:hover, .ratingstar3[_ngcontent-%COMP%]:hover, .ratingstar4[_ngcontent-%COMP%]:hover, .ratingstar5[_ngcontent-%COMP%]:hover{\n    color:  #de3242;\n}\n.author[_ngcontent-%COMP%]{\n    color: #de3242;\n    margin-top: 2%;\n}\n.ratingStars[_ngcontent-%COMP%]{\n    margin-top: 2%;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media only screen and (max-width: 1000px) {\n    .card-container[_ngcontent-%COMP%]{\n        margin-left: 40%;\n        width: 50%\n    }\n}\n@media only screen and (max-width: 767px) {\n    .card-container[_ngcontent-%COMP%]{\n        margin-left: 2%;\n        width: 90%\n    }\n    .parentContainer[_ngcontent-%COMP%]{\n        margin-top: 5%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLEdBQUc7QUFDSDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHlCQUF5Qjs7QUFFN0I7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQjtJQUNKO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmO0lBQ0o7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUtY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi8qKi9cbi5wYXJlbnRDb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5jYXJkLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcbiAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5maXJzdC1zdGFye1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgY29sb3I6ICAjZGUzMjQyO1xufVxuXG5zZWxlY3R7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5zZWxlY3RIZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcblxufVxuXG4ucmF0aW5nc3RhcjE6aG92ZXIsLnJhdGluZ3N0YXIyOmhvdmVyLC5yYXRpbmdzdGFyMzpob3ZlciwucmF0aW5nc3RhcjQ6aG92ZXIsLnJhdGluZ3N0YXI1OmhvdmVye1xuICAgIGNvbG9yOiAgI2RlMzI0Mjtcbn1cbi5hdXRob3J7XG4gICAgY29sb3I6ICNkZTMyNDI7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5yYXRpbmdTdGFyc3tcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmNhcmQtY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgICAgICB3aWR0aDogNTAlXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQtY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIHdpZHRoOiA5MCVcbiAgICB9XG4gICAgLnBhcmVudENvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgfVxufVxuXG5cbiJdfQ== */"] });


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
    } }, styles: [".container[_ngcontent-%COMP%] {\n  padding-left: 18%;\n}\n\n.update-form[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 10px;\n}\n\n.book-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n  float: center;\n}\n\n.field[_ngcontent-%COMP%] {\n  margin: 10px 0 20px 2%;\n  width: 48%;\n  display: inline-block;\n}\n\n.input-field[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin-left: 13%;\n  width: 100%;\n}\n\n.field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n\n\nform[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #de3242;\n  margin: 40px auto;\n}\n\n@media (min-width: 576px){\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 1.75rem auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stc3RvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4RUFBOEU7RUFDOUUsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoiYm9vay1zdG9yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMTglO1xufVxuXG4udXBkYXRlLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG4uYm9vay1mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBjZW50ZXI7XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbjogMTBweCAwIDIwcHggMiU7XG4gIHdpZHRoOiA0OCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmlucHV0LWZpZWxkLC5maWVsZCBwe1xuICBtYXJnaW4tbGVmdDogMTMlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkIHAge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufSAqL1xuXG5mb3JtIHN2ZyB7XG4gIGNvbG9yOiAjZGUzMjQyO1xuICBtYXJnaW46IDQwcHggYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcbiAgfVxufVxuIl19 */", ".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _delete_book_delete_component__WEBPACK_IMPORTED_MODULE_6__["BookDeleteComponent"], _update_book_update_component__WEBPACK_IMPORTED_MODULE_7__["BookUpdateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_9__["EmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _store_book_store_component__WEBPACK_IMPORTED_MODULE_10__["BookStoreComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-left: 15%;\n  min-height: 94vh;\n}\n\nbutton[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n\n\n\n\n.top-part[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n\n\n\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%] {\n  padding-bottom: 4%;\n  margin-top: 0;\n  margin-left: 35%;\n  display: inline-block;\n}\n\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\n}\n\n.top-part[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  color: white;\n}\n\n.top-part[_ngcontent-%COMP%]   .add-book[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  width: 50px;\n  height: 50px;\n  font-size: 20px;\n  float: right;\n  border-radius: 50%;\n  color: white;\n  border: none;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 4px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\n.search-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  transition: all 0.5s ease-in-out;\n}\n\n\n\n.book-imag[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n\n@media only screen and (max-width: 500px) {\n  .book[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 2%;\n  }\n\n  .book-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .orm-outline[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  transition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2staW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUEsY0FBYzs7QUFDZDs7OztFQUlFOztBQUNGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztLQUVLOztBQUVMO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFO3FDQUNtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6ImJvb2staW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgbWluLWhlaWdodDogOTR2aDtcbn1cblxuYnV0dG9uOmZvY3VzLFxuaW5wdXQ6Zm9jdXMsXG5zdmc6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKlRvcCBTZWN0aW9uKi9cbi8qXG4udG9wLXBhcnQge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGhlaWdodDogMTUwcHg7XG59Ki9cbi50b3AtcGFydCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi8qIC50b3AtcGFydCBoMiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH0gKi9cblxuLnRvcC1wYXJ0IC5ib29rLXNlYXJjaCB7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9wLXBhcnQgLmJvb2stc2VhcmNoIC5pbnB1dC1ncm91cCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRvcC1wYXJ0IC5ib29rLXNlYXJjaCBpbnB1dCxcbi50b3AtcGFydCAuYm9vay1zZWFyY2ggYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpLFxuICAgIDAgNHB4IDVweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcbn1cblxuLnRvcC1wYXJ0IC5ib29rLXNlYXJjaCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b3AtcGFydCAuYWRkLWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5zZWFyY2gtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLypUYWJsZSBTZWN0aW9uKi9cblxuLmJvb2staW1hZyB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYm9vayAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICB9XG5cbiAgLmJvb2stc2VhcmNoIC5pbnB1dC1ncm91cCxcbiAgLm9ybS1vdXRsaW5lIHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxudGFibGUgdGQgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbiJdfQ== */", ".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


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
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_5__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".content-page[_ngcontent-%COMP%]{\n  min-height: 95vh;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-left: 18%;\n}\n\n.update-form[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  box-shadow: 3px 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 10px;\n}\n\n.fa-book-open[_ngcontent-%COMP%] {\n  color: #de3242;\n}\n\n.field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXBhZ2V7XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE4JTtcbn1cblxuLnVwZGF0ZS1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBib3gtc2hhZG93OiAzcHggNHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mYS1ib29rLW9wZW4ge1xuICBjb2xvcjogI2RlMzI0Mjtcbn1cblxuLmZpZWxkIHAge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iXX0= */", ".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


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
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");






function UserCategorySidebarComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-loading");
} }
function UserCategorySidebarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserCategorySidebarComponent_li_10_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const category_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectCategory($event, category_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2);
} }
class UserCategorySidebarComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.loading = false;
        this.selectedCategory = "";
        this.categories = [];
        this.categoriesName = [];
        this.selectCategoryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setDefaultCategoryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectCategory(event, category) {
        console.log(category);
        this.selectCategoryEmitter.emit(category);
    }
    ngOnInit() {
        this.subscriber = this.categoryService.getCategories()
            .subscribe((response) => {
            this.loading = true;
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
                text: "Something went wrong!",
                footer: ''
            });
        });
    }
}
UserCategorySidebarComponent.ɵfac = function UserCategorySidebarComponent_Factory(t) { return new (t || UserCategorySidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
UserCategorySidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCategorySidebarComponent, selectors: [["app-user-category-sidebar"]], outputs: { selectCategoryEmitter: "selectCategoryEmitter", setDefaultCategoryEmitter: "setDefaultCategoryEmitter" }, decls: 11, vars: 2, consts: [[4, "ngIf"], [1, "container-fluid"], [1, "sidebar", "row"], ["id", "sidebar", 1, "sidebar-wrapper", "col-3"], [1, "category-content"], [1, "category-header"], [1, "btn", "btn-danger", "w-100"], [1, "category"], [4, "ngFor", "ngForOf"], [1, "active", 3, "click"], [1, "fas", "fa-chevron-right"]], template: function UserCategorySidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserCategorySidebarComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserCategorySidebarComponent_li_10_Template, 5, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__["UserLoadingComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  left: 10%;\n  top: 20%;\n}\n\n\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  width: 260px;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  left: -300px;\n  z-index: 999;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n\n.category-content[_ngcontent-%COMP%] {\n  max-height: calc(100% - 30px);\n  height: calc(100% - 30px);\n  overflow-y: auto;\n  position: relative;\n}\n\n.category-content.desktop[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n\n\n\n.category-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: hidden;\n}\n\n\n\n.category[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-decoration: none;\n  position: relative;\n  padding: 8px 30px 8px 20px;\n}\n\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #818896;\n}\n\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]{\n  color: #DE3241;\n}\n\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n  transform: rotate(360deg);\n  transition: all 0.5s ease;\n}\n\n.category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #DE3241;\n}\n\n@media only screen and (max-width: 1700px) {\n  .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 140px;\n    padding: 0;\n    font-size: 14px;\n  }\n\n  .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 120px;\n    padding: 0;\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2F0ZWdvcnktc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFHQSxXQUFXOztBQUVYO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoidXNlci1jYXRlZ29yeS1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIge1xuICBsZWZ0OiAxMCU7XG4gIHRvcDogMjAlO1xufVxuXG4vKlNpZGViYXIgV3JhcHBlciovXG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0zMDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKkNhdGVnb3J5IGNvbnRlbnQqL1xuXG4uY2F0ZWdvcnktY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXRlZ29yeS1jb250ZW50LmRlc2t0b3Age1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi8qQ2F0ZWdvcnkgaGVhZGVyKi9cblxuLmNhdGVnb3J5LWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLypDYXRlZ29yeSovXG5cbi5jYXRlZ29yeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY2F0ZWdvcnkgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4cHggMzBweCA4cHggMjBweDtcbn1cblxuLmNhdGVnb3J5IHVsIGxpIGF7XG4gIGNvbG9yOiAjODE4ODk2O1xufVxuXG4uY2F0ZWdvcnkgdWwgbGkgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2F0ZWdvcnkgdWwgbGk6aG92ZXI+YXtcbiAgY29sb3I6ICNERTMyNDE7XG59XG5cbi5jYXRlZ29yeSB1bCBsaTpob3Zlcj5hIHN2Z3tcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLmNhdGVnb3J5IHVsIGxpIC5hY3RpdmUge1xuICBjb2xvcjogI0RFMzI0MTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpIHtcbiAgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5jYXRlZ29yeSB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cblxuIl19 */"] });


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
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_5__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], styles: [".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n  min-height: 92vh;\n}\n.category[_ngcontent-%COMP%] {\n  margin-left: 19%;\n}\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  color: #ffffff;\n  height: 50px;\n  text-align: center;\n  vertical-align: middle;\n  width: 100px;\n  border-radius: 10px;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  color: #484848;\n  font-weight: bold;\n  font-size: 30px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #484848;\n}\nform[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid rgb(235, 235, 235);\n  border-radius: 8px;\n  padding: 30px;\n  margin-bottom: 20px;\n  margin-right: 20px;\n}\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  color: #484848;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Nunito\";\n  color: rgb(72, 72, 72);\n  font-weight: 700;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImNhdGVnb3J5LXN0b3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA5MnZoO1xufVxuLmNhdGVnb3J5IHtcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcbn1cbi5idG4tY3VzdG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29udGVudCBoMiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNSwgMjM1LCAyMzUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmZvcm0gaDQge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG4gIGNvbG9yOiByZ2IoNzIsIDcyLCA3Mik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4iXX0= */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["header[_ngcontent-%COMP%] {\n    font-family: 'PT Sans', sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n    padding: 12px 24px !important;\n    color: #fff;\n    background-color: #000;\n    border-radius: 10px;\n    font-size: 17px;\n    line-height: 2;\n}\n\nheader[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 85vh;\n}\n\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: 'Playfair Display', serif;\n    font-size: 49px;\n    font-size: 48px;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n    border: 1px solid #000 !important;\n    color: #000 !important;\n    font-size: 20px;\n    font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTJweCAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbn1cblxuaGVhZGVyIC5jYXJvdXNlbC1pdGVtIGltZyB7XG4gICAgaGVpZ2h0OiA4NXZoO1xufVxuXG5oZWFkZXIgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDlweDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5idG4tY3VzdG9tIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".author-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.author-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n\n.field[_ngcontent-%COMP%] {\n  margin: 10px 0 20px 2%;\n  width: 48%;\n  display: inline-block;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\nform[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #de3242;\n  margin: 40px auto;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 1.75rem auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoiY2F0ZWdvcnktdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yLWZvcm0gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5hdXRob3ItZm9ybSBidXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbjogMTBweCAwIDIwcHggMiU7XG4gIHdpZHRoOiA0OCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuZm9ybSBzdmcge1xuICBjb2xvcjogI2RlMzI0MjtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xuICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user-loading/user-loading.component */ "qyV3");





function UserCategoryBooksComponent_app_user_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-loading");
} }
function UserCategoryBooksComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", book_r5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserCategoryBooksComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCategoryBooksComponent_div_3_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookRow_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", bookRow_r3);
} }
function UserCategoryBooksComponent_span_13_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_span_13_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.changePagination($event, page_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r6, " ");
} }
function UserCategoryBooksComponent_span_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_span_13_ng_template_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.changePagination($event, page_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r6, " ");
} }
function UserCategoryBooksComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCategoryBooksComponent_span_13_a_2_Template, 2, 1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCategoryBooksComponent_span_13_ng_template_3_Template, 3, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", page_r6 == ctx_r2.currentPage)("ngIfElse", _r9);
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
        this.loading = false;
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
        this.loading = false;
        this.row2 = [];
        this.row1 = [];
        this.subscriber = this.categoryService.getCategoryPage(category, page, book)
            .subscribe((response) => {
            this.maxPages = Math.ceil(response.body.bookNumbers / 8);
            console.log(this.maxPages);
            this.loading = true;
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
UserCategoryBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserCategoryBooksComponent, selectors: [["app-user-category-books"]], decls: 17, vars: 3, consts: [[4, "ngIf"], [1, "books"], [1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "pagination-section"], [1, "row"], [1, "col-2"], ["aria-label", "Page navigation example", 1, "col-10"], [1, "pagination", "w-100"], [1, "page-item"], [1, "", 3, "click"], [1, "fas", "fa-chevron-circle-left", "fa-2x"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-circle-right", "fa-2x"], ["class", "col-lg-3 col-sm-6 col-8 col-xxs-9 book text-center", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-6", "col-8", "col-xxs-9", "book", "text-center"], [1, "book-image", "mt-3", 3, "src"], ["class", "", "style", "color:  #de3242", 3, "click", 4, "ngIf", "ngIfElse"], ["noStar", ""], [1, "", 2, "color", "#de3242", 3, "click"]], template: function UserCategoryBooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserCategoryBooksComponent_app_user_loading_0_Template, 1, 0, "app-user-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCategoryBooksComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_Template_a_click_11_listener($event) { return ctx.changePagination($event, "back"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserCategoryBooksComponent_span_13_Template, 5, 2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCategoryBooksComponent_Template_a_click_15_listener($event) { return ctx.changePagination($event, "next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paginationPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__["UserLoadingComponent"]], styles: [".books[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-left: 15%;\n}\n\n.books[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 20px;\n  height: 60%;\n}\n\n.book[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.book[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.book-image[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 250px;\n  border-radius: 20px;\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 1px 7px 0 rgba(0,0,0,0.2), 0 3px 2px -2px rgba(0,0,0,0.2);\n}\n\n.book-image[_ngcontent-%COMP%]:hover{\n  transform: scale(1.2);\n  transition: all 0.3s linear;\n}\n\n.pagination-section[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  justify-content: right;\n}\n\n@media only screen and (max-width: 700px) {\n  .books[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding-left: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2F0ZWdvcnktYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvR0FBb0c7QUFDdEc7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoidXNlci1jYXRlZ29yeS1ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYm9va3MgLnJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xufVxuXG4uYm9va3Mge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmJvb2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib29rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9vay1pbWFnZSB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCAxcHggN3B4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDNweCAycHggLTJweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi5ib29rLWltYWdlOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cblxuLnBhZ2luYXRpb24tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5ib29rcyAucm93IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgfVxufVxuIl19 */"] });


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
    } }, styles: [".bg-image[_ngcontent-%COMP%]{\n    background-image: url('header-photo.jpg');\n    height: 300px;\n}\n\n.mask[_ngcontent-%COMP%]{\n    background-color: rgba(0, 0, 0, 0);\n    margin-top: 7%;\n    margin-left: 25%;\n    width: 50%;\n}\n\n.searchbar[_ngcontent-%COMP%]{\n    margin-bottom: auto;\n    margin-top: auto;\n    height: 60px;\n    background-color: #353b48;\n    border-radius: 30px;\n    padding: 10px;\n}\n\n.search_input[_ngcontent-%COMP%]{\n    color: white;\n    border: 0;\n    outline: 0;\n    background: none;\n    width: 0;\n    caret-color:transparent;\n    line-height: 40px;\n    transition: width 0.4s linear;\n}\n\n.searchbar[_ngcontent-%COMP%]:hover    > .search_input[_ngcontent-%COMP%]{\n    padding: 0 10px;\n    width: 450px;\n    caret-color:red;\n    transition: width 0.4s linear;\n}\n\n.searchbar[_ngcontent-%COMP%]:hover    > .search_icon[_ngcontent-%COMP%]{\n    background: white;\n    color: #e74c3c;\n}\n\n.search_icon[_ngcontent-%COMP%]{\n    height: 40px;\n    width: 40px;\n    float: right;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    color:white;\n    text-decoration:none;\n}\n\n@media only screen and (max-width: 800px) {\n    .mask[_ngcontent-%COMP%]{margin-top: 25%;}\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUE0RTtJQUM1RSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUIiLCJmaWxlIjoidXNlci1wcm9maWxlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWltYWdle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3VzZXIvcHJvZmlsZS9oZWFkZXItcGhvdG8uanBnJyk7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLm1hc2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBtYXJnaW4tdG9wOiA3JTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5zZWFyY2hiYXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYjQ4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlYXJjaF9pbnB1dHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB3aWR0aDogMDtcbiAgICBjYXJldC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cblxuLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXR7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBjYXJldC1jb2xvcjpyZWQ7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XG59XG5cbi5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb257XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICNlNzRjM2M7XG59XG5cbi5zZWFyY2hfaWNvbntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAubWFza3ttYXJnaW4tdG9wOiAyNSU7fVxuICAgIFxufSAgICJdfQ== */"] });


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
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_3__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_7__["CategoryDeleteComponent"], _category_update_category_update_component__WEBPACK_IMPORTED_MODULE_8__["CategoryUpdateComponent"], _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_9__["EmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n  min-height: 90vh;\n}\n\n.category[_ngcontent-%COMP%] {\n  margin-left: 19%;\n}\n\n.category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.custom-txt[_ngcontent-%COMP%] {\n  color: #24324a;\n}\n\n.add[_ngcontent-%COMP%] {\n  background-color: #24324a;\n  font-weight: 700;\n  border-radius: 10px;\n  padding: 15px 25px;\n  float: right;\n  margin-right: 20px;\n  color: white;\n  border: none;\n  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 30%), 0 4px 5px 0 rgb(0 0 0 / 30%);\n}\n\n.add[_ngcontent-%COMP%]:hover {\n  background-color: #de3242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNFQUFzRTtBQUN4RTs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJjYXRlZ29yeS1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogOTB2aDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcbn1cbi5jYXRlZ29yeSAuY2FyZCBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLmN1c3RvbS10eHQge1xuICBjb2xvcjogIzI0MzI0YTtcbn1cbi5hZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMjRhO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiKDAgMCAwIC8gMzAlKSwgMCA0cHggNXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcbn1cbi5hZGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xufVxuXG4iXX0= */"] });


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
    } }, styles: [".modal-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 15rem auto;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJjYXRlZ29yeS1kZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwtYm9keSBidXR0b24ge1xuICB3aWR0aDogNDUlO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgbWFyZ2luOiAxNXJlbSBhdXRvO1xufVxuXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuIl19 */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_ngcontent-%COMP%]::selection {\n  color: #fff;\n  background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LW1vei1zZWxlY3Rpb24ge1xuICAvKiBDb2RlIGZvciBGaXJlZm94ICovXG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuIl19 */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\n    font-family: 'PT Sans', sans-serif;\n    background-color: #EEEEEE;\n}\n\n.italic[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-family: 'Playfair Display';\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 48px;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n}\n\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #DE3241;\n    font-weight: 700;\n}\n\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    color: #121212;\n    font-weight: 700;\n    text-transform: capitalize;\n    font-size: 25px;\n}\n\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:first-of-type {\n    font-size: 30px;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #797980;\n}\n\n.mission[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.7;\n}\n\n.mission[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n}\n\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #DE3241;\n}\n\n.social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n.social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n    color: #DE3241;\n    cursor: pointer;\n}\n\n.find[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1;\n}\n\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.2;\n}\n\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #121212;\n    font-size: 18px;\n    text-decoration: underline;\n}\n\n.find[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #DE3241;\n    cursor: pointer;\n}\n\nfooter[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #121212;\n    font-weight: 900;\n}\n\n.custom-background[_ngcontent-%COMP%] {\n    background-color: #121212;\n}\n\n.text-bink[_ngcontent-%COMP%] {\n    color: #DE3241;\n}\n\n@media screen and (max-width: 700px) {\n    .find[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%], .image[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJOzs7UUFHSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiaG9tZS1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuXG4uaXRhbGljIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jztcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5mb290ZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuZm9vdGVyIGgyIHNwYW4ge1xuICAgIGNvbG9yOiAjREUzMjQxO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmZvb3RlciBoNSB7XG4gICAgY29sb3I6ICMxMjEyMTI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbmZvb3RlciBoNTpmaXJzdC1vZi10eXBlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbmZvb3RlciBwIHtcbiAgICBjb2xvcjogIzc5Nzk4MDtcbn1cblxuLm1pc3Npb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4ubWlzc2lvbiBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgaSB7XG4gICAgY29sb3I6ICNERTMyNDE7XG59XG5cbi5zb2NpYWwtaWNvbnMgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNvY2lhbC1pY29ucyAuaWNvbjpob3ZlciB7XG4gICAgY29sb3I6ICNERTMyNDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmluZCBwIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmNvbnRhY3QgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5maW5kIGEge1xuICAgIGNvbG9yOiAjMTIxMjEyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZpbmQgYTpob3ZlciB7XG4gICAgY29sb3I6ICNERTMyNDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mb290ZXIgLmNvbnRhY3Qgc3BhbiB7XG4gICAgY29sb3I6ICMxMjEyMTI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmN1c3RvbS1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xufVxuXG4udGV4dC1iaW5rIHtcbiAgICBjb2xvcjogI0RFMzI0MTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuZmluZCxcbiAgICAuY29udGFjdCxcbiAgICAuaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".modal-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 15rem auto;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwtYm9keSBidXR0b24ge1xuICB3aWR0aDogNDUlO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgbWFyZ2luOiAxNXJlbSBhdXRvO1xufVxuXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuIl19 */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\n  padding-top: 20vh;\n  background-image: url(\"/assets/admin/login/back.jpeg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n}\n\n.form-modal[_ngcontent-%COMP%]{\n    position:relative;\n    width:50%;\n    height:420px;\n    font-size: 14px;\n    left:50%;\n    transform:translateX(-50%);\n    background:rgba(255, 255, 255, 0.85);\n    border-radius: 20px;\n    box-shadow:0 5px 15px 0px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n}\n\n.form-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    cursor: pointer;\n    position: relative;\n    text-transform: capitalize;\n    font-size:16px;\n    z-index: 2;\n    outline: none;\n    background:white;\n    border: 1px solid #DE3241;\n    transition:0.2s;\n}\n\n.form-modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n    border-radius: 20px;\n    border:none;\n    font-weight: bold;\n    padding:0.8em 1em 0.8em 1em!important;\n    transition:0.5s;\n    margin-bottom:7px;\n    margin-top:7px;\n}\n\n.form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{\n    background:#DE3241;\n    color:#fff;\n}\n\n.form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover {\n    background:#222;\n}\n\n.form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width:100%;\n    padding:10px;\n    margin-bottom:20px;\n    border:none;\n    transition: 0.2s;\n    font-weight: bold;\n    border-top-right-radius: 20px;\n    border-top-left-radius: 20px;\n}\n\n.form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1), .form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 20px;\n}\n\n#login-toggle[_ngcontent-%COMP%]{\n    background:#DE3241;\n    color:#ffff;\n}\n\n.form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\n    position: relative;\n    width:90%;\n    left:50%;\n    transform:translateX(-50%);\n}\n\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 16px;\n    padding:10px 20px;\n    margin-top:0.6em;\n    margin-bottom:0.6em;\n    border-radius: 20px;\n    border:none;\n    background:#fff;\n    outline:none;\n    font-weight: bold;\n    transition:0.4s;\n}\n\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active{\n    transform:scaleX(1.03);\n    border: 1px solid #de3240c9;\n}\n\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n    color:rgb(99, 98, 98);\n}\n\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color:#DE3241;\n    text-decoration: none;\n    transition:0.2s;\n}\n\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color:#222;\n}\n\n.form-modal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n    left:10%;\n    top:50%;\n    transform:translateX(-10%) translateY(-50%);\n    align-self: center;\n}\n\n.fa-google[_ngcontent-%COMP%]{\n    color:#dd4b39;\n}\n\n.fa-facebook-official[_ngcontent-%COMP%]{\n    color:#3b5998;\n}\n\n.-box-sd-effect[_ngcontent-%COMP%]:hover{\n    box-shadow: 2px 4px 4px #dd4b39\n}\n\n.w-45[_ngcontent-%COMP%]{\n    width:45%;\n}\n\n.w-100[_ngcontent-%COMP%]{\n    width:100%\n}\n\n.ml3[_ngcontent-%COMP%]{\n    margin-left: 3%;\n}\n\n.ml5[_ngcontent-%COMP%]{\n    margin-left: 5%;\n}\n\n@media only screen and (max-width:600px){\n    .form-modal[_ngcontent-%COMP%]{\n        width:100%;\n    }\n}\n\n#login-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n     width: 10%;\n     margin-left: 45%;\n     animation: hu__hu__ 1 2s ease-in-out\n}\n\n@keyframes hu__hu__ {\n    25% { transform: translateY(-10px) }\n    50% { transform: translateY(10px) }\n    75% { transform: translateY(-10px) }\n}\n\nimg[_ngcontent-%COMP%]:hover{\n    animation: rotation 5s 1 linear;\n}\n\n@keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n\n@media only screen and (max-width:600px){\n    i[_ngcontent-%COMP%]{\n        display: none!important;\n    }\n}\n\n#submitBtn[_ngcontent-%COMP%] {\n    width:100%;\n    margin-top:0.5em;\n    padding:0.6em;\n}\n\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n\n  background-color: indianred;\n\n  background-image:\n    linear-gradient(white,white),\n    linear-gradient(white,white),\n    linear-gradient(white,white),\n    linear-gradient(white,white),\n    linear-gradient(white,white),\n    linear-gradient(white,white),\n    linear-gradient(white,white);\n\n  background-position:\n    calc(50% - 30px) 50%,\n    calc(50% - 20px) 50%,\n    calc(50% - 10px) 50%,\n    50% 50%,\n    calc(50% + 10px) 50%,\n    calc(50% + 20px) 50%,\n    calc(50% + 30px) 50%;\n\n  background-size:\n    5px 10px,\n    5px 10px,\n    5px 10px,\n    5px 10px,\n    5px 10px,\n    5px 10px,\n    5px 10px;\n  background-repeat: no-repeat;\n\n  animation: l-bars 1s linear infinite alternate;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0RBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCwyQ0FBMkM7SUFDM0Msa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUNBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtLQUNLLFVBQVU7S0FDVixnQkFBZ0I7S0FDaEI7QUFDTDs7QUFDQTtJQUNJLE1BQU0sNkJBQTZCO0lBQ25DLE1BQU0sNEJBQTRCO0lBQ2xDLE1BQU0sNkJBQTZCO0FBQ3ZDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGOztBQUNGO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosMkJBQTJCOztFQUUzQjs7Ozs7OztnQ0FPOEI7O0VBRTlCOzs7Ozs7O3dCQU9zQjs7RUFFdEI7Ozs7Ozs7WUFPVTtFQUNWLDRCQUE0Qjs7RUFFNUIsOENBQThDO0FBQ2hEIiwiZmlsZSI6ImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAyMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2FkbWluL2xvZ2luL2JhY2suanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JtLW1vZGFse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOjUwJTtcbiAgICBoZWlnaHQ6NDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxlZnQ6NTAlO1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6MCA1cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JtLW1vZGFsIGJ1dHRvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERTMyNDE7XG4gICAgdHJhbnNpdGlvbjowLjJzO1xufVxuXG4uZm9ybS1tb2RhbCAuYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzowLjhlbSAxZW0gMC44ZW0gMWVtIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgbWFyZ2luLWJvdHRvbTo3cHg7XG4gICAgbWFyZ2luLXRvcDo3cHg7XG59XG5cbi5mb3JtLW1vZGFsIC5sb2dpbiAsIC5mb3JtLW1vZGFsIC5zaWdudXB7XG4gICAgYmFja2dyb3VuZDojREUzMjQxO1xuICAgIGNvbG9yOiNmZmY7XG59XG5cbi5mb3JtLW1vZGFsIC5sb2dpbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDojMjIyO1xufVxuXG4uZm9ybS10b2dnbGUgYnV0dG9ue1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG59XG5cbi5mb3JtLXRvZ2dsZSBidXR0b246bnRoLWNoaWxkKDEpLCAuZm9ybS10b2dnbGUgYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuXG4jbG9naW4tdG9nZ2xle1xuICAgIGJhY2tncm91bmQ6I0RFMzI0MTtcbiAgICBjb2xvcjojZmZmZjtcbn1cblxuLmZvcm0tbW9kYWwgZm9ybXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6OTAlO1xuICAgIGxlZnQ6NTAlO1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4uZm9ybS1tb2RhbCBpbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcbiAgICBtYXJnaW4tdG9wOjAuNmVtO1xuICAgIG1hcmdpbi1ib3R0b206MC42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgb3V0bGluZTpub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246MC40cztcbn1cblxuLmZvcm0tbW9kYWwgaW5wdXQ6Zm9jdXMgLCAuZm9ybS1tb2RhbCBpbnB1dDphY3RpdmV7XG4gICAgdHJhbnNmb3JtOnNjYWxlWCgxLjAzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGUzMjQwYzk7XG59XG5cbi5mb3JtLW1vZGFsIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xuICAgIGNvbG9yOnJnYig5OSwgOTgsIDk4KTtcbn1cblxuLmZvcm0tbW9kYWwgcHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLW1vZGFsIHAgYXtcbiAgICBjb2xvcjojREUzMjQxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOjAuMnM7XG59XG5cbi5mb3JtLW1vZGFsIHAgYTpob3ZlcntcbiAgICBjb2xvcjojMjIyO1xufVxuXG4uZm9ybS1tb2RhbCBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDoxMCU7XG4gICAgdG9wOjUwJTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZhLWdvb2dsZXtcbiAgICBjb2xvcjojZGQ0YjM5O1xufVxuXG4uZmEtZmFjZWJvb2stb2ZmaWNpYWx7XG4gICAgY29sb3I6IzNiNTk5ODtcbn1cblxuLi1ib3gtc2QtZWZmZWN0OmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNkZDRiMzlcbn1cblxuLnctNDV7XG4gICAgd2lkdGg6NDUlO1xufVxuLnctMTAwe1xuICAgIHdpZHRoOjEwMCVcbn1cblxuLm1sM3tcbiAgICBtYXJnaW4tbGVmdDogMyU7XG59XG4ubWw1e1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAuZm9ybS1tb2RhbHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG59XG5cbiNsb2dpbi1mb3JtIGltZ3tcbiAgICAgd2lkdGg6IDEwJTtcbiAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgICAgYW5pbWF0aW9uOiBodV9faHVfXyAxIDJzIGVhc2UtaW4tb3V0XG59XG5Aa2V5ZnJhbWVzIGh1X19odV9fIHtcbiAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgfVxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgfVxufVxuXG5pbWc6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiA1cyAxIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICB9XG4gIH1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XG4gICAgaXtcbiAgICAgICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4jc3VibWl0QnRuIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6MC41ZW07XG4gICAgcGFkZGluZzowLjZlbTtcbn1cblxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUpLFxuICAgIGxpbmVhci1ncmFkaWVudCh3aGl0ZSx3aGl0ZSksXG4gICAgbGluZWFyLWdyYWRpZW50KHdoaXRlLHdoaXRlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUpLFxuICAgIGxpbmVhci1ncmFkaWVudCh3aGl0ZSx3aGl0ZSksXG4gICAgbGluZWFyLWdyYWRpZW50KHdoaXRlLHdoaXRlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQod2hpdGUsd2hpdGUpO1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246XG4gICAgY2FsYyg1MCUgLSAzMHB4KSA1MCUsXG4gICAgY2FsYyg1MCUgLSAyMHB4KSA1MCUsXG4gICAgY2FsYyg1MCUgLSAxMHB4KSA1MCUsXG4gICAgNTAlIDUwJSxcbiAgICBjYWxjKDUwJSArIDEwcHgpIDUwJSxcbiAgICBjYWxjKDUwJSArIDIwcHgpIDUwJSxcbiAgICBjYWxjKDUwJSArIDMwcHgpIDUwJTtcblxuICBiYWNrZ3JvdW5kLXNpemU6XG4gICAgNXB4IDEwcHgsXG4gICAgNXB4IDEwcHgsXG4gICAgNXB4IDEwcHgsXG4gICAgNXB4IDEwcHgsXG4gICAgNXB4IDEwcHgsXG4gICAgNXB4IDEwcHgsXG4gICAgNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgYW5pbWF0aW9uOiBsLWJhcnMgMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_4__["NavUserComponent"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_5__["UserLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.author-search[_ngcontent-%COMP%] {\n  margin-top: 6%;\n}\n.w-40[_ngcontent-%COMP%]{ width:40% }\n.w-90[_ngcontent-%COMP%]{ width:90% }\n.author-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\n}\n.author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  color: white;\n}\n\n.authors[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  margin-bottom: 50px;\n}\n.authors[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.author[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\n  border-radius: 10px;\n  position: relative;\n  margin-bottom: 20px;\n  background-color: #F5F5F5;\n}\n.author-image[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  z-index: 1;\n  top: 8%;\n  left: 25%;\n  position: absolute;\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\n}\n.author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: black;\n  border: 1px black solid;\n  transition: all 0.5s ease-in-out;\n}\n.big-cir[_ngcontent-%COMP%] {\n  left: 18%;\n  height: 170px;\n  width: 170px;\n  border-radius: 50%;\n  position: relative;\n  border-color: #000000;\n  border-style: solid;\n  border-width: 2px;\n  animation: dotmove cubic-bezier(1,0,0,1) 2s infinite;\n  z-index: 1;\n}\n.big-cir[_ngcontent-%COMP%]    > .small-cir[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  border-radius: 50%;\n  position: absolute;\n  border-color: #de3242;\n  border-style: solid;\n  border-width: 2px;\n  padding: 5px;\n  left: 35px;\n}\n.big-cir[_ngcontent-%COMP%]    > .small-cir2[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  border-radius: 50%;\n  position: absolute;\n  border-color: #de3242;\n  border-style: solid;\n  border-width: 2px;\n  padding: 5px;\n  left: 140px;\n  top: 130px;\n}\n.big-cir[_ngcontent-%COMP%]    > .small-cir3[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  border-radius: 50%;\n  position: absolute;\n  border-color: #de3242;\n  border-style: solid;\n  border-width: 2px;\n  padding: 5px;\n  left: 125px;\n  top: 5px;\n}\n.client-image[_ngcontent-%COMP%] {\n  margin-top: -230px;\n  margin-left: 10px;\n}\n@keyframes dotmove {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n.triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  color: #de3242;\n}\n.t-top-left[_ngcontent-%COMP%] {\n  top: 5%;\n  left: 12%;\n  border-top: 50px solid transparent;\n  border-left: 75px solid rgba(222, 50, 66, 0.4);\n  border-bottom: 50px solid transparent;\n  transform: rotate(260deg);\n}\n.t-bottom-right[_ngcontent-%COMP%] {\n  border-top: 50px solid transparent;\n  border-left: 75px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 50px solid transparent;\n  transform: rotate(70deg);\n  top: 28%;\n  right: 12%;\n}\n\n.pagination[_ngcontent-%COMP%]{\n  margin: auto;\n  justify-content: center;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  color: #de3242;\n}\n\n@media only screen and (max-width: 1400px) {\n  .t-bottom-right[_ngcontent-%COMP%]{right: 6%;}\n}\n@media only screen and (max-width: 1200px) {\n  .author-image[_ngcontent-%COMP%]{left: 16%;}\n\n  .big-cir[_ngcontent-%COMP%]  {left: 6%;}\n\n  .t-bottom-right[_ngcontent-%COMP%]{right: 4%;}\n\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\n\n  .author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {font-size: 1.2em;}\n\n  .author-search[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n  }\n\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{width: 60%;}\n}\n@media only screen and (max-width: 990px) {\n  .author-image[_ngcontent-%COMP%]{left: 25%;}\n\n  .big-cir[_ngcontent-%COMP%]  {left: 20%;}\n\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\n\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\n\n}\n@media only screen and (max-width: 780px) {\n  .author-image[_ngcontent-%COMP%]{left: 18%;}\n\n  .big-cir[_ngcontent-%COMP%]  {left: 10%;}\n\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\n\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\n\n  .author-search[_ngcontent-%COMP%] {margin-top: 12%;}\n\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{width: 95%;}\n}\n@media only screen and (max-width: 575px) {\n  .author-image[_ngcontent-%COMP%]{left: 25%;}\n\n  .big-cir[_ngcontent-%COMP%]  {left: 18%;}\n\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\n\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\n\n  .author-search[_ngcontent-%COMP%] {margin-top: 18%;}\n\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{width: 100%;justify-content: center}\n\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-outline[_ngcontent-%COMP%]{\n    width: 70%;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .author-image[_ngcontent-%COMP%]{left: 20%;}\n\n  .big-cir[_ngcontent-%COMP%]  {left: 12%;}\n\n  .t-bottom-right[_ngcontent-%COMP%]{right: 7%;}\n\n  .t-top-left[_ngcontent-%COMP%] {left: 7%;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYXV0aG9yLWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxPQUFPLFVBQVU7QUFDakIsT0FBTyxVQUFVO0FBQ2pCOztFQUVFO3FDQUNtQztBQUNyQztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBLGtCQUFrQjtBQUVsQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usc0dBQXNHO0VBQ3RHLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHNHQUFzRztBQUN4RztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsUUFBUTtBQUNWO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7QUFDaEI7QUFFQTtFQUNFLE9BQU87RUFDUCxTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLDhDQUE4QztFQUM5QyxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMENBQTBDO0VBQzFDLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQixTQUFTLENBQUM7QUFDNUI7QUFFQTtFQUNFLGNBQWMsU0FBUyxDQUFDOztFQUV4QixXQUFXLFFBQVEsQ0FBQzs7RUFFcEIsZ0JBQWdCLFNBQVMsQ0FBQzs7RUFFMUIsYUFBYSxRQUFRLENBQUM7O0VBRXRCLFdBQVcsZ0JBQWdCLENBQUM7O0VBRTVCO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUEsNEJBQTRCLFVBQVUsQ0FBQztBQUN6QztBQUVBO0VBQ0UsY0FBYyxTQUFTLENBQUM7O0VBRXhCLFdBQVcsU0FBUyxDQUFDOztFQUVyQixnQkFBZ0IsU0FBUyxDQUFDOztFQUUxQixhQUFhLFFBQVEsQ0FBQzs7QUFFeEI7QUFFQTtFQUNFLGNBQWMsU0FBUyxDQUFDOztFQUV4QixXQUFXLFNBQVMsQ0FBQzs7RUFFckIsZ0JBQWdCLFNBQVMsQ0FBQzs7RUFFMUIsYUFBYSxRQUFRLENBQUM7O0VBRXRCLGdCQUFnQixlQUFlLENBQUM7O0VBRWhDLDRCQUE0QixVQUFVLENBQUM7QUFDekM7QUFFQTtFQUNFLGNBQWMsU0FBUyxDQUFDOztFQUV4QixXQUFXLFNBQVMsQ0FBQzs7RUFFckIsZ0JBQWdCLFNBQVMsQ0FBQzs7RUFFMUIsYUFBYSxRQUFRLENBQUM7O0VBRXRCLGdCQUFnQixlQUFlLENBQUM7O0VBRWhDLDRCQUE0QixXQUFXLENBQUMsdUJBQXVCOztFQUUvRDtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxjQUFjLFNBQVMsQ0FBQzs7RUFFeEIsV0FBVyxTQUFTLENBQUM7O0VBRXJCLGdCQUFnQixTQUFTLENBQUM7O0VBRTFCLGFBQWEsUUFBUSxDQUFDO0FBQ3hCIiwiZmlsZSI6InVzZXItYXV0aG9yLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hdXRob3Itc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogNiU7XG59XG4udy00MHsgd2lkdGg6NDAlIH1cbi53LTkweyB3aWR0aDo5MCUgfVxuLmF1dGhvci1zZWFyY2ggaW5wdXQsXG4uYXV0aG9yLXNlYXJjaCBidXR0b24ge1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDY2LCA2NiwgNjYsIDAuMiksXG4gICAgMCA0cHggNXB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xufVxuXG4uYXV0aG9yLXNlYXJjaCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4vKkF1dGhvcnMgU2VjdGlvbiovXG5cbi5hdXRob3JzIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5hdXRob3JzIC5yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmF1dGhvciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uYXV0aG9yLWltYWdlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogOCU7XG4gIGxlZnQ6IDI1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi5hdXRob3IgcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5hdXRob3IgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJpZy1jaXIge1xuICBsZWZ0OiAxOCU7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGFuaW1hdGlvbjogZG90bW92ZSBjdWJpYy1iZXppZXIoMSwwLDAsMSkgMnMgaW5maW5pdGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5iaWctY2lyID4gLnNtYWxsLWNpciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItY29sb3I6ICNkZTMyNDI7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGxlZnQ6IDM1cHg7XG59XG5cbi5iaWctY2lyID4gLnNtYWxsLWNpcjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGUzMjQyO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgcGFkZGluZzogNXB4O1xuICBsZWZ0OiAxNDBweDtcbiAgdG9wOiAxMzBweDtcbn1cblxuLmJpZy1jaXIgPiAuc21hbGwtY2lyMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItY29sb3I6ICNkZTMyNDI7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGxlZnQ6IDEyNXB4O1xuICB0b3A6IDVweDtcbn1cblxuLmNsaWVudC1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IC0yMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgZG90bW92ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgY29sb3I6ICNkZTMyNDI7XG59XG5cbi50LXRvcC1sZWZ0IHtcbiAgdG9wOiA1JTtcbiAgbGVmdDogMTIlO1xuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNzVweCBzb2xpZCByZ2JhKDIyMiwgNTAsIDY2LCAwLjQpO1xuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNjBkZWcpO1xufVxuXG4udC1ib3R0b20tcmlnaHQge1xuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNzVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcbiAgdG9wOiAyOCU7XG4gIHJpZ2h0OiAxMiU7XG59XG5cbi8qUGFnaW5hdGlvbiBTZWN0aW9uKi9cbi5wYWdpbmF0aW9ue1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnBhZ2luYXRpb24gbGkgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWdpbmF0aW9uIGxpIGEgc3ZnIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgY29sb3I6ICNkZTMyNDI7XG59XG5cbi8qUmVzcG9uc2l2ZSBNZWRpYSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAudC1ib3R0b20tcmlnaHR7cmlnaHQ6IDYlO31cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmF1dGhvci1pbWFnZXtsZWZ0OiAxNiU7fVxuXG4gIC5iaWctY2lyICB7bGVmdDogNiU7fVxuXG4gIC50LWJvdHRvbS1yaWdodHtyaWdodDogNCU7fVxuXG4gIC50LXRvcC1sZWZ0IHtsZWZ0OiA3JTt9XG5cbiAgLmF1dGhvciBwIHtmb250LXNpemU6IDEuMmVtO31cblxuICAuYXV0aG9yLXNlYXJjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgLmF1dGhvci1zZWFyY2ggLmlucHV0LWdyb3Vwe3dpZHRoOiA2MCU7fVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5hdXRob3ItaW1hZ2V7bGVmdDogMjUlO31cblxuICAuYmlnLWNpciAge2xlZnQ6IDIwJTt9XG5cbiAgLnQtYm90dG9tLXJpZ2h0e3JpZ2h0OiA3JTt9XG5cbiAgLnQtdG9wLWxlZnQge2xlZnQ6IDclO31cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5hdXRob3ItaW1hZ2V7bGVmdDogMTglO31cblxuICAuYmlnLWNpciAge2xlZnQ6IDEwJTt9XG5cbiAgLnQtYm90dG9tLXJpZ2h0e3JpZ2h0OiA3JTt9XG5cbiAgLnQtdG9wLWxlZnQge2xlZnQ6IDclO31cblxuICAuYXV0aG9yLXNlYXJjaCB7bWFyZ2luLXRvcDogMTIlO31cblxuICAuYXV0aG9yLXNlYXJjaCAuaW5wdXQtZ3JvdXB7d2lkdGg6IDk1JTt9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmF1dGhvci1pbWFnZXtsZWZ0OiAyNSU7fVxuXG4gIC5iaWctY2lyICB7bGVmdDogMTglO31cblxuICAudC1ib3R0b20tcmlnaHR7cmlnaHQ6IDclO31cblxuICAudC10b3AtbGVmdCB7bGVmdDogNyU7fVxuXG4gIC5hdXRob3Itc2VhcmNoIHttYXJnaW4tdG9wOiAxOCU7fVxuXG4gIC5hdXRob3Itc2VhcmNoIC5pbnB1dC1ncm91cHt3aWR0aDogMTAwJTtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcn1cblxuICAuYXV0aG9yLXNlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tb3V0bGluZXtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmF1dGhvci1pbWFnZXtsZWZ0OiAyMCU7fVxuXG4gIC5iaWctY2lyICB7bGVmdDogMTIlO31cblxuICAudC1ib3R0b20tcmlnaHR7cmlnaHQ6IDclO31cblxuICAudC10b3AtbGVmdCB7bGVmdDogNyU7fVxufVxuXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/common */ "ofXK");




































































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
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
            _modules_admin_layout_route_admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_59__["AdminRoutingModule"],
            _modules_user_layout_user_routing_user_routing_module__WEBPACK_IMPORTED_MODULE_60__["UserRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
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
        _modules_user_layout_user_routing_user_routing_module__WEBPACK_IMPORTED_MODULE_60__["UserRoutingModule"]], exports: [_pipes_concate_name_pipe__WEBPACK_IMPORTED_MODULE_57__["ConcateNamePipe"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_65__["ɵɵsetComponentScope"](_modules_admin_layout_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_18__["BookStoreComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_66__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_66__["NgForOf"], _modules_admin_layout_book_index_book_index_component__WEBPACK_IMPORTED_MODULE_15__["BookIndexComponent"]], []);


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_6__["NavUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_7__["UserLoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _pipes_average_pipe__WEBPACK_IMPORTED_MODULE_8__["AveragePipe"]], styles: [".myCard[_ngcontent-%COMP%] {\n    width: 322px;\n    float: left;\n    margin-left: 120px;\n    margin-top: 100px;\n}\n\n.myBooks[_ngcontent-%COMP%] {\n    width: 60%;\n    float: left;\n    height: 70%;\n    margin-left: 40px;\n    margin-top: 70px;\n}\n\n.box-part[_ngcontent-%COMP%] {\n    position: relative;\n    height: 453px;\n    width: 322px;\n    background: #ddd;\n    width: 80%;\n    height: 40%;\n    border-radius: 10px;\n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.title[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    color: black;\n}\n\n.text[_ngcontent-%COMP%] {\n    margin: 20px 0px;\n    color: black;\n    padding-bottom: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n    position: relative;\n    margin-top: 30px;\n    width: 186px;\n    height: 186px;\n    border-radius: 50%;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 20px;\n    width: 750px;\n    height: 200px;\n    padding-top: 10px;\n    \n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n}\n\n.authorBook[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    float: left;\n    width: 20%;\n    height: 170px;\n    margin-top: 0;\n}\n\n.authorBook[_ngcontent-%COMP%]   .info1[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    float: left;\n    \n    width: 49%;\n    height: 170px;\n    padding-top: 20px;\n    padding-left: 10px;\n}\n\n.authorBook[_ngcontent-%COMP%]   .info2[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    float: right;\n    \n    width: 25%;\n    height: 170px;\n}\n\n.authorBook[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\n.authorBook[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYXV0aG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFGQUFxRjtBQUN6Rjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUdBLE9BQU87O0FBRVA7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCOzBCQUNzQjtJQUN0QixxRkFBcUY7SUFDckYsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNob3ctYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDYXJkIHtcbiAgICB3aWR0aDogMzIycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4ubXlCb29rcyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4uYm94LXBhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQ1M3B4O1xuICAgIHdpZHRoOiAzMjJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAycHggcmdiYSg5NSwgOTMsIDkzLCAwLjM5KSwgLTRweCAtNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4udGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRleHQge1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOiAxODZweDtcbiAgICBoZWlnaHQ6IDE4NnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG4vKmJvb2sqL1xuXG4ubWFpbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogNzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4IHJnYmEoOTUsIDkzLCA5MywgMC4zOSksIC00cHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYXV0aG9yQm9vayAuaW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYXV0aG9yQm9vayAuaW5mbzEge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8qIGJhY2tncm91bmQ6R3JlZW47ICovXG4gICAgd2lkdGg6IDQ5JTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmF1dGhvckJvb2sgLmluZm8yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC8qIGJhY2tncm91bmQ6Ymx1ZTsgKi9cbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMTcwcHg7XG59XG5cbi5hdXRob3JCb29rIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmF1dGhvckJvb2sgcCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmRyb3Bkb3duLW1lbnUgYXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserCategoryHeaderComponent {
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
UserCategoryHeaderComponent.ɵfac = function UserCategoryHeaderComponent_Factory(t) { return new (t || UserCategoryHeaderComponent)(); };
UserCategoryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCategoryHeaderComponent, selectors: [["app-user-category-header"]], outputs: { searchEmitter: "searchEmitter" }, decls: 19, vars: 0, consts: [[1, "header"], [1, "container"], [1, "row"], [1, "col-2"], [1, "book-search", "col-7"], [1, "input-group", "w-100", "m-auto"], [1, "form-outline", "w-75"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "keyup"], ["id", "search-button", "type", "button", 1, "btn", "search-btn"], [1, "fas", "fa-search"], [1, "filter", "col-3"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "w-75", "btn", "btn-dark", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"]], template: function UserCategoryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UserCategoryHeaderComponent_Template_input_keyup_7_listener($event) { return ctx.searchBook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sort By Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Top Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  margin-top: 8%;\n}\n\n.header[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.header[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\n  0 4px 5px 0 rgba(66, 66, 66, 0.2);\n}\n\n.header[_ngcontent-%COMP%]   .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2F0ZWdvcnktaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTttQ0FDaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InVzZXItY2F0ZWdvcnktaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cblxuLmhlYWRlciAuYm9vay1zZWFyY2ggLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGVhZGVyIC5ib29rLXNlYXJjaCBpbnB1dCxcbi5oZWFkZXIgLmJvb2stc2VhcmNoIGJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKSxcbiAgMCA0cHggNXB4IDAgcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xufVxuXG4uaGVhZGVyIC5ib29rLXNlYXJjaCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Mission Is To Find All Book Tybes");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".about-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #484848;\n  line-height: 1.714;\n  margin-bottom: 40px;\n}\n.Mission[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\n  color: #484848;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.5;\n  margin-bottom: 45px;\n}\n.Mission[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 40px;\n}\n.icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #de3242;\n  font-size: 40px;\n  line-height: 1.2;\n}\n.details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: \"Nunito\";\n  color: #484848;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Nunito\";\n  color: #484848;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCIiwiZmlsZSI6ImFib3V0LW1pc3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC11cyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNzE0O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLk1pc3Npb24gcDpmaXJzdC1vZi10eXBlIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4uTWlzc2lvbiBwOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5pY29ucyAuaWNvbiB7XG4gIGNvbG9yOiAjZGUzMjQyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uZGV0YWlscyBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5kZXRhaWxzIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cbiJdfQ== */"] });


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
    } }, styles: [".user[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n  background-color: #f5f5f5;\n  margin-top: -4%;\n  border-radius: 25px;\n  margin-left: 3%;\n  min-height: 50%;\n  position: fixed;\n}\n\n.user-image[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 15%;\n  z-index: 1;\n  margin-top: -40%;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n  left: 6.7%;\n  padding-top: 5px;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  border-radius: 25px;\n  color: #ffffff;\n}\n\n.mange[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 15%;\n}\n\n.mange[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #353b48;\n}\n\n.mange[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #de3242;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5%;\n  border-radius: 15px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #de3242;\n  cursor: pointer;\n  font-weight: 800;\n  color: #ffffff;\n}\n\n.mange[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n  transform: rotate(360deg);\n  transition: all 0.5s ease;\n}\n\n@media only screen and (max-width: 767px) {\n  .user[_ngcontent-%COMP%] {\n    position: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsK0dBQStHO0VBQy9HLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwrR0FBK0c7RUFDL0csVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoidXNlci1wcm9maWxlLXNpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnVzZXIge1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1hcmdpbi10b3A6IC00JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE1JTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXRvcDogLTQwJTtcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBsZWZ0OiA2LjclO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udXNlci1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tYW5nZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuLm1hbmdlIGEge1xuICBjb2xvcjogIzM1M2I0ODtcbn1cblxuLm1hbmdlIGE6aG92ZXIge1xuICBjb2xvcjogI2RlMzI0MjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1hbmdlOmhvdmVyPmEgc3Zne1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51c2VyIHtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgfVxufVxuIl19 */"] });


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
AboutWhyChooseUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutWhyChooseUsComponent, selectors: [["app-about-why-choose-us"]], decls: 8, vars: 1, consts: [[1, "why-choose-us", "py-5"], [1, "text-center"], [1, "text-center", "mb-5"], [1, "container-custom"], [1, "row"], ["class", "col-md-6 col-lg-4 col-xl-4 ", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "col-xl-4"], [1, "item", "mb-3"], [1, "icons", "d-flex", "align-items-center", "justify-content-center"], [1, "details", "text-center"], [1, "mt-4", "mb-2"]], template: function AboutWhyChooseUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Why Choose Us");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".why-choose-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Nunito\";\n  color: rgb(119, 119, 119);\n  line-height: 1.2;\n}\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  border-radius: 8px;\n  padding: 50px 41px 30px 41px;\n  transition: all 0.3s ease;\n}\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 50px 0px rgb(19 19 28 / 12%);\n  background-color: #ffffff;\n}\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .icons[_ngcontent-%COMP%] {\n  background-color: #ff5a5f;\n}\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.why-choose-us[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  border-radius: 50%;\n  height: 130px;\n  line-height: 130px;\n  margin: 0 auto;\n  width: 130px;\n}\n.why-choose-us[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ff5a5f;\n  font-size: 68px;\n  line-height: 130px;\n}\n.why-choose-us[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #484848;\n  font-weight: bold;\n}\n.why-choose-us[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Nunito\";\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdoeS1jaG9vc2UtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJmaWxlIjoiYWJvdXQtd2h5LWNob29zZS11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoeS1jaG9vc2UtdXMgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMTkpO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLndoeS1jaG9vc2UtdXMgLml0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDUwcHggNDFweCAzMHB4IDQxcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ud2h5LWNob29zZS11cyAuaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAwcHggcmdiKDE5IDE5IDI4IC8gMTIlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi53aHktY2hvb3NlLXVzIC5pdGVtOmhvdmVyIC5pY29ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVhNWY7XG59XG4ud2h5LWNob29zZS11cyAuaXRlbTpob3ZlciAuaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ud2h5LWNob29zZS11cyAuaWNvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMzBweDtcbn1cbi53aHktY2hvb3NlLXVzIC5pY29uIHtcbiAgY29sb3I6ICNmZjVhNWY7XG4gIGZvbnQtc2l6ZTogNjhweDtcbiAgbGluZS1oZWlnaHQ6IDEzMHB4O1xufVxuLndoeS1jaG9vc2UtdXMgaDQge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud2h5LWNob29zZS11cyAuaXRlbSAuZGV0YWlscyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4iXX0= */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__["NavUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_6__["HomeFooterComponent"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_7__["UserLoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".back[_ngcontent-%COMP%] {\n    position: fixed;\n    right: -5%;\n    bottom: 0;\n}\n\n.book-search[_ngcontent-%COMP%] {\n    margin-top: 7%;\n}\n\n.w-40[_ngcontent-%COMP%] {\n    width: 40%\n}\n\n.w-90[_ngcontent-%COMP%] {\n    width: 90%\n}\n\n.book-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2), 0 4px 5px 0 rgba(66, 66, 66, 0.2);\n}\n\n.book-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #de3242;\n    color: white;\n}\n\n.books[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 20px;\n}\n\n.book[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: #F5F5F5;\n    padding: 10px;\n    min-height: 440px;\n    border-radius: 5px;\n    box-sizing: border-box;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 3px 2px -2px rgba(0, 0, 0, 0.2);\n}\n\n.books[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.book[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.book-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    font-weight: bold;\n    margin: 10px auto;\n}\n\n.book-image[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 250px;\n    border-radius: 20px;\n}\n\n.book-image[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2);\n    transition: all 0.3s linear;\n}\n\n.book-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n}\n\n.book-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n    color: black;\n    border: 1px black solid;\n    transition: all 0.5s ease-in-out;\n}\n\n.category[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    position: absolute;\n    top: 12%;\n    background-color: rgba(222, 50, 66, 0.8);\n    left: -18%;\n    padding: 10px;\n    height: 40px;\n    width: 150px;\n    color: white;\n    border-radius: 0 20px 20px 5px;\n    overflow: hidden;\n}\n\n.category[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 3px 2px -2px rgba(0, 0, 0, 0.2);\n    background-color: rgba(222, 50, 66, 1);\n    transition: all 0.5s ease-in-out;\n}\n\n.category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\n@media only screen and (max-width: 600px) {\n    .category[_ngcontent-%COMP%] {\n        left: -12%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYm9vay1pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUksZ0ZBQWdGO0FBQ3BGOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNkdBQTZHO0FBQ2pIOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2R0FBNkc7SUFDN0csc0NBQXNDO0lBQ3RDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoidXNlci1ib29rLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAtNSU7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uYm9vay1zZWFyY2gge1xuICAgIG1hcmdpbi10b3A6IDclO1xufVxuXG4udy00MCB7XG4gICAgd2lkdGg6IDQwJVxufVxuXG4udy05MCB7XG4gICAgd2lkdGg6IDkwJVxufVxuXG4uYm9vay1zZWFyY2ggaW5wdXQsXG4uYm9vay1zZWFyY2ggYnV0dG9uIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDY2LCA2NiwgNjYsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcbn1cblxuLmJvb2stc2VhcmNoIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzI0MjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib29rcyB7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJvb2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWluLWhlaWdodDogNDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgM3B4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJvb2tzIC5jb2wtbGctMyB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmJvb2s6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvb2stdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmJvb2staW1hZ2Uge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYm9vay1pbWFnZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cblxuLmJvb2staW5mbyBwIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uYm9vay1pbmZvIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCA1MCwgNjYsIDAuOCk7XG4gICAgbGVmdDogLTE4JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2F0ZWdvcnk6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDNweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDUwLCA2NiwgMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXRlZ29yeSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNhdGVnb3J5IHtcbiAgICAgICAgbGVmdDogLTEyJTtcbiAgICB9XG59Il19 */"] });


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
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_4__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}\n.animate__animated[_ngcontent-%COMP%]{animation-duration:1s;animation-duration:var(--animate-duration);animation-fill-mode:both}\n.animate__animated.animate__infinite[_ngcontent-%COMP%]{animation-iteration-count:infinite}\n.animate__animated.animate__repeat-1[_ngcontent-%COMP%]{animation-iteration-count:1;animation-iteration-count:var(--animate-repeat)}\n.animate__animated.animate__repeat-2[_ngcontent-%COMP%]{animation-iteration-count:2;animation-iteration-count:calc(var(--animate-repeat)*2)}\n.animate__animated.animate__repeat-3[_ngcontent-%COMP%]{animation-iteration-count:3;animation-iteration-count:calc(var(--animate-repeat)*3)}\n.animate__animated.animate__delay-1s[_ngcontent-%COMP%]{animation-delay:1s;animation-delay:var(--animate-delay)}\n.animate__animated.animate__delay-2s[_ngcontent-%COMP%]{animation-delay:2s;animation-delay:calc(var(--animate-delay)*2)}\n.animate__animated.animate__delay-3s[_ngcontent-%COMP%]{animation-delay:3s;animation-delay:calc(var(--animate-delay)*3)}\n.animate__animated.animate__delay-4s[_ngcontent-%COMP%]{animation-delay:4s;animation-delay:calc(var(--animate-delay)*4)}\n.animate__animated.animate__delay-5s[_ngcontent-%COMP%]{animation-delay:5s;animation-delay:calc(var(--animate-delay)*5)}\n.animate__animated.animate__faster[_ngcontent-%COMP%]{animation-duration:.5s;animation-duration:calc(var(--animate-duration)/2)}\n.animate__animated.animate__fast[_ngcontent-%COMP%]{animation-duration:.8s;animation-duration:calc(var(--animate-duration)*0.8)}\n.animate__animated.animate__slow[_ngcontent-%COMP%]{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2)}\n.animate__animated.animate__slower[_ngcontent-%COMP%]{animation-duration:3s;animation-duration:calc(var(--animate-duration)*3)}\n@media (prefers-reduced-motion:reduce), print{.animate__animated[_ngcontent-%COMP%]{animation-duration:1ms!important;transition-duration:1ms!important;animation-iteration-count:1!important}.animate__animated[class*=Out][_ngcontent-%COMP%]{opacity:0}}\n@keyframes bounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0) scaleY(.95)}90%{transform:translate3d(0,-4px,0) scaleY(1.02)}}\n.animate__bounce[_ngcontent-%COMP%]{animation-name:bounce;transform-origin:center bottom}\n@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}\n.animate__flash[_ngcontent-%COMP%]{animation-name:flash}\n@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}\n.animate__pulse[_ngcontent-%COMP%]{animation-name:pulse;animation-timing-function:ease-in-out}\n@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}\n.animate__rubberBand[_ngcontent-%COMP%]{animation-name:rubberBand}\n@keyframes shakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}\n.animate__shakeX[_ngcontent-%COMP%]{animation-name:shakeX}\n@keyframes shakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}\n.animate__shakeY[_ngcontent-%COMP%]{animation-name:shakeY}\n@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}\n.animate__headShake[_ngcontent-%COMP%]{animation-timing-function:ease-in-out;animation-name:headShake}\n@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}\n.animate__swing[_ngcontent-%COMP%]{transform-origin:top center;animation-name:swing}\n@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}\n.animate__tada[_ngcontent-%COMP%]{animation-name:tada}\n@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}\n.animate__wobble[_ngcontent-%COMP%]{animation-name:wobble}\n@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}\n.animate__jello[_ngcontent-%COMP%]{animation-name:jello;transform-origin:center}\n@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}\n.animate__heartBeat[_ngcontent-%COMP%]{animation-name:heartBeat;animation-duration:1.3s;animation-duration:calc(var(--animate-duration)*1.3);animation-timing-function:ease-in-out}\n@keyframes backInDown{0%{transform:translateY(-1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInDown[_ngcontent-%COMP%]{animation-name:backInDown}\n@keyframes backInLeft{0%{transform:translateX(-2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInLeft[_ngcontent-%COMP%]{animation-name:backInLeft}\n@keyframes backInRight{0%{transform:translateX(2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInRight[_ngcontent-%COMP%]{animation-name:backInRight}\n@keyframes backInUp{0%{transform:translateY(1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInUp[_ngcontent-%COMP%]{animation-name:backInUp}\n@keyframes backOutDown{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(700px) scale(.7);opacity:.7}}\n.animate__backOutDown[_ngcontent-%COMP%]{animation-name:backOutDown}\n@keyframes backOutLeft{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(-2000px) scale(.7);opacity:.7}}\n.animate__backOutLeft[_ngcontent-%COMP%]{animation-name:backOutLeft}\n@keyframes backOutRight{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(2000px) scale(.7);opacity:.7}}\n.animate__backOutRight[_ngcontent-%COMP%]{animation-name:backOutRight}\n@keyframes backOutUp{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(-700px) scale(.7);opacity:.7}}\n.animate__backOutUp[_ngcontent-%COMP%]{animation-name:backOutUp}\n@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}\n.animate__bounceIn[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceIn}\n@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;transform:translate3d(0,25px,0) scaleY(.9)}75%{transform:translate3d(0,-10px,0) scaleY(.95)}90%{transform:translate3d(0,5px,0) scaleY(.985)}to{transform:translateZ(0)}}\n.animate__bounceInDown[_ngcontent-%COMP%]{animation-name:bounceInDown}\n@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(25px,0,0) scaleX(1)}75%{transform:translate3d(-10px,0,0) scaleX(.98)}90%{transform:translate3d(5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}\n.animate__bounceInLeft[_ngcontent-%COMP%]{animation-name:bounceInLeft}\n@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}\n.animate__bounceInRight[_ngcontent-%COMP%]{animation-name:bounceInRight}\n@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}75%{transform:translate3d(0,10px,0) scaleY(.95)}90%{transform:translate3d(0,-5px,0) scaleY(.985)}to{transform:translateZ(0)}}\n.animate__bounceInUp[_ngcontent-%COMP%]{animation-name:bounceInUp}\n@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}\n.animate__bounceOut[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceOut}\n@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,2000px,0) scaleY(3)}}\n.animate__bounceOutDown[_ngcontent-%COMP%]{animation-name:bounceOutDown}\n@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(-2000px,0,0) scaleX(2)}}\n.animate__bounceOutLeft[_ngcontent-%COMP%]{animation-name:bounceOutLeft}\n@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}\n.animate__bounceOutRight[_ngcontent-%COMP%]{animation-name:bounceOutRight}\n@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,-2000px,0) scaleY(3)}}\n.animate__bounceOutUp[_ngcontent-%COMP%]{animation-name:bounceOutUp}\n@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n.animate__fadeIn[_ngcontent-%COMP%]{animation-name:fadeIn}\n@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInDown[_ngcontent-%COMP%]{animation-name:fadeInDown}\n@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInDownBig[_ngcontent-%COMP%]{animation-name:fadeInDownBig}\n@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInLeft[_ngcontent-%COMP%]{animation-name:fadeInLeft}\n@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInLeftBig[_ngcontent-%COMP%]{animation-name:fadeInLeftBig}\n@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInRight[_ngcontent-%COMP%]{animation-name:fadeInRight}\n@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInRightBig[_ngcontent-%COMP%]{animation-name:fadeInRightBig}\n@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInUp[_ngcontent-%COMP%]{animation-name:fadeInUp}\n@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInUpBig[_ngcontent-%COMP%]{animation-name:fadeInUpBig}\n@keyframes fadeInTopLeft{0%{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInTopLeft[_ngcontent-%COMP%]{animation-name:fadeInTopLeft}\n@keyframes fadeInTopRight{0%{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInTopRight[_ngcontent-%COMP%]{animation-name:fadeInTopRight}\n@keyframes fadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInBottomLeft[_ngcontent-%COMP%]{animation-name:fadeInBottomLeft}\n@keyframes fadeInBottomRight{0%{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInBottomRight[_ngcontent-%COMP%]{animation-name:fadeInBottomRight}\n@keyframes fadeOut{0%{opacity:1}to{opacity:0}}\n.animate__fadeOut[_ngcontent-%COMP%]{animation-name:fadeOut}\n@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}\n.animate__fadeOutDown[_ngcontent-%COMP%]{animation-name:fadeOutDown}\n@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}\n.animate__fadeOutDownBig[_ngcontent-%COMP%]{animation-name:fadeOutDownBig}\n@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}\n.animate__fadeOutLeft[_ngcontent-%COMP%]{animation-name:fadeOutLeft}\n@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}\n.animate__fadeOutLeftBig[_ngcontent-%COMP%]{animation-name:fadeOutLeftBig}\n@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}\n.animate__fadeOutRight[_ngcontent-%COMP%]{animation-name:fadeOutRight}\n@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}\n.animate__fadeOutRightBig[_ngcontent-%COMP%]{animation-name:fadeOutRightBig}\n@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}\n.animate__fadeOutUp[_ngcontent-%COMP%]{animation-name:fadeOutUp}\n@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}\n.animate__fadeOutUpBig[_ngcontent-%COMP%]{animation-name:fadeOutUpBig}\n@keyframes fadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}\n.animate__fadeOutTopLeft[_ngcontent-%COMP%]{animation-name:fadeOutTopLeft}\n@keyframes fadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}\n.animate__fadeOutTopRight[_ngcontent-%COMP%]{animation-name:fadeOutTopRight}\n@keyframes fadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,100%,0)}}\n.animate__fadeOutBottomRight[_ngcontent-%COMP%]{animation-name:fadeOutBottomRight}\n@keyframes fadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}\n.animate__fadeOutBottomLeft[_ngcontent-%COMP%]{animation-name:fadeOutBottomLeft}\n@keyframes flip{0%{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}}\n.animate__animated.animate__flip[_ngcontent-%COMP%]{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}\n@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}\n.animate__flipInX[_ngcontent-%COMP%]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}\n@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}\n.animate__flipInY[_ngcontent-%COMP%]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}\n@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}\n.animate__flipOutX[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}\n@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}\n.animate__flipOutY[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}\n@keyframes lightSpeedInRight{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg)}to{transform:translateZ(0)}}\n.animate__lightSpeedInRight[_ngcontent-%COMP%]{animation-name:lightSpeedInRight;animation-timing-function:ease-out}\n@keyframes lightSpeedInLeft{0%{transform:translate3d(-100%,0,0) skewX(30deg);opacity:0}60%{transform:skewX(-20deg);opacity:1}80%{transform:skewX(5deg)}to{transform:translateZ(0)}}\n.animate__lightSpeedInLeft[_ngcontent-%COMP%]{animation-name:lightSpeedInLeft;animation-timing-function:ease-out}\n@keyframes lightSpeedOutRight{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}\n.animate__lightSpeedOutRight[_ngcontent-%COMP%]{animation-name:lightSpeedOutRight;animation-timing-function:ease-in}\n@keyframes lightSpeedOutLeft{0%{opacity:1}to{transform:translate3d(-100%,0,0) skewX(-30deg);opacity:0}}\n.animate__lightSpeedOutLeft[_ngcontent-%COMP%]{animation-name:lightSpeedOutLeft;animation-timing-function:ease-in}\n@keyframes rotateIn{0%{transform:rotate(-200deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateIn[_ngcontent-%COMP%]{animation-name:rotateIn;transform-origin:center}\n@keyframes rotateInDownLeft{0%{transform:rotate(-45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInDownLeft[_ngcontent-%COMP%]{animation-name:rotateInDownLeft;transform-origin:left bottom}\n@keyframes rotateInDownRight{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInDownRight[_ngcontent-%COMP%]{animation-name:rotateInDownRight;transform-origin:right bottom}\n@keyframes rotateInUpLeft{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInUpLeft[_ngcontent-%COMP%]{animation-name:rotateInUpLeft;transform-origin:left bottom}\n@keyframes rotateInUpRight{0%{transform:rotate(-90deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInUpRight[_ngcontent-%COMP%]{animation-name:rotateInUpRight;transform-origin:right bottom}\n@keyframes rotateOut{0%{opacity:1}to{transform:rotate(200deg);opacity:0}}\n.animate__rotateOut[_ngcontent-%COMP%]{animation-name:rotateOut;transform-origin:center}\n@keyframes rotateOutDownLeft{0%{opacity:1}to{transform:rotate(45deg);opacity:0}}\n.animate__rotateOutDownLeft[_ngcontent-%COMP%]{animation-name:rotateOutDownLeft;transform-origin:left bottom}\n@keyframes rotateOutDownRight{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}\n.animate__rotateOutDownRight[_ngcontent-%COMP%]{animation-name:rotateOutDownRight;transform-origin:right bottom}\n@keyframes rotateOutUpLeft{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}\n.animate__rotateOutUpLeft[_ngcontent-%COMP%]{animation-name:rotateOutUpLeft;transform-origin:left bottom}\n@keyframes rotateOutUpRight{0%{opacity:1}to{transform:rotate(90deg);opacity:0}}\n.animate__rotateOutUpRight[_ngcontent-%COMP%]{animation-name:rotateOutUpRight;transform-origin:right bottom}\n@keyframes hinge{0%{animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}\n.animate__hinge[_ngcontent-%COMP%]{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2);animation-name:hinge;transform-origin:top left}\n@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}\n.animate__jackInTheBox[_ngcontent-%COMP%]{animation-name:jackInTheBox}\n@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}\n.animate__rollIn[_ngcontent-%COMP%]{animation-name:rollIn}\n@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}\n.animate__rollOut[_ngcontent-%COMP%]{animation-name:rollOut}\n@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}\n.animate__zoomIn[_ngcontent-%COMP%]{animation-name:zoomIn}\n@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInDown[_ngcontent-%COMP%]{animation-name:zoomInDown}\n@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInLeft[_ngcontent-%COMP%]{animation-name:zoomInLeft}\n@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInRight[_ngcontent-%COMP%]{animation-name:zoomInRight}\n@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInUp[_ngcontent-%COMP%]{animation-name:zoomInUp}\n@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}\n.animate__zoomOut[_ngcontent-%COMP%]{animation-name:zoomOut}\n@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomOutDown[_ngcontent-%COMP%]{animation-name:zoomOutDown;transform-origin:center bottom}\n@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0)}}\n.animate__zoomOutLeft[_ngcontent-%COMP%]{animation-name:zoomOutLeft;transform-origin:left center}\n@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0)}}\n.animate__zoomOutRight[_ngcontent-%COMP%]{animation-name:zoomOutRight;transform-origin:right center}\n@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomOutUp[_ngcontent-%COMP%]{animation-name:zoomOutUp;transform-origin:center bottom}\n@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInDown[_ngcontent-%COMP%]{animation-name:slideInDown}\n@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInLeft[_ngcontent-%COMP%]{animation-name:slideInLeft}\n@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInRight[_ngcontent-%COMP%]{animation-name:slideInRight}\n@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInUp[_ngcontent-%COMP%]{animation-name:slideInUp}\n@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}\n.animate__slideOutDown[_ngcontent-%COMP%]{animation-name:slideOutDown}\n@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}\n.animate__slideOutLeft[_ngcontent-%COMP%]{animation-name:slideOutLeft}\n@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}\n.animate__slideOutRight[_ngcontent-%COMP%]{animation-name:slideOutRight}\n@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}\n.animate__slideOutUp[_ngcontent-%COMP%]{animation-name:slideOutUp}\n.page-content[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n  min-height: 90vh;\n}\n.dashboard[_ngcontent-%COMP%] {\n  margin-left: 19%;\n  margin-right: 2%;\n}\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Nunito\";\n  color: rgb(119, 119, 119);\n  line-height: 1.2;\n}\n.item[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  border-radius: 8px;\n  padding: 50px 41px 30px 41px;\n  transition: all 0.3s ease;\n}\n.item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 50px 0px rgb(19 19 28 / 12%);\n  background-color: #ffffff;\n}\n.item[_ngcontent-%COMP%]:hover   .icons[_ngcontent-%COMP%] {\n  background-color: #ff5a5f;\n}\n.item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.icons[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  border-radius: 50%;\n  height: 130px;\n  line-height: 130px;\n  margin: 0 auto;\n  width: 130px;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #ff5a5f;\n  font-size: 68px;\n  line-height: 130px;\n}\nh4[_ngcontent-%COMP%] {\n  color: #484848;\n  font-size: 40px;\n  font-weight: 900;\n}\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Nunito\";\n  line-height: 2;\n}\n@media screen and (max-width: 700px) {\n  .dashboard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiLCJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBQzs7Ozs7O0VBTWY7QUFBQyxNQUFNLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLGtCQUFrQjtBQUFDLG1CQUFpRCxxQkFBcUIsQ0FBb0QsMENBQTBDLENBQWtDLHdCQUF3QjtBQUFDLHFDQUFnRixrQ0FBa0M7QUFBQyxxQ0FBeUUsMkJBQTJCLENBQXlELCtDQUErQztBQUFDLHFDQUF5RSwyQkFBMkIsQ0FBaUUsdURBQXVEO0FBQUMscUNBQXlFLDJCQUEyQixDQUFpRSx1REFBdUQ7QUFBQyxxQ0FBZ0Usa0JBQWtCLENBQThDLG9DQUFvQztBQUFDLHFDQUFnRSxrQkFBa0IsQ0FBc0QsNENBQTRDO0FBQUMscUNBQWdFLGtCQUFrQixDQUFzRCw0Q0FBNEM7QUFBQyxxQ0FBZ0Usa0JBQWtCLENBQXNELDRDQUE0QztBQUFDLHFDQUFnRSxrQkFBa0IsQ0FBc0QsNENBQTRDO0FBQUMsbUNBQWtFLHNCQUFzQixDQUE0RCxrREFBa0Q7QUFBQyxpQ0FBZ0Usc0JBQXNCLENBQThELG9EQUFvRDtBQUFDLGlDQUErRCxxQkFBcUIsQ0FBNEQsa0RBQWtEO0FBQUMsbUNBQWlFLHFCQUFxQixDQUE0RCxrREFBa0Q7QUFBQyw4Q0FBNkMsbUJBQTRELGdDQUFnQyxDQUEyQyxpQ0FBaUMsQ0FBK0MscUNBQXFDLENBQUMsK0JBQStCLFNBQVMsQ0FBQztBQUF3OUIsa0JBQWtCLGNBQThFLHVEQUF1RCxDQUFpQyx1QkFBdUIsQ0FBQyxRQUEwRSx5REFBeUQsQ0FBc0QsNENBQTRDLENBQUMsSUFBc0UseURBQXlELENBQXVELDZDQUE2QyxDQUFDLElBQXFFLHdEQUF3RCxDQUE2QyxtQ0FBbUMsQ0FBQyxJQUF5RCw0Q0FBNEMsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUIsQ0FBd0MsOEJBQThCO0FBQWlFLGlCQUFpQixVQUFVLFNBQVMsQ0FBQyxRQUFRLFNBQVMsQ0FBQztBQUFDLGdCQUE2QyxvQkFBb0I7QUFBaU4saUJBQWlCLEdBQStCLG1CQUFtQixDQUFDLElBQThDLGlDQUFpQyxDQUFDLEdBQStCLG1CQUFtQixDQUFDO0FBQUMsZ0JBQTZDLG9CQUFvQixDQUErQyxxQ0FBcUM7QUFBOGUsc0JBQXNCLEdBQStCLG1CQUFtQixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLElBQTBDLDZCQUE2QixDQUFDLEdBQStCLG1CQUFtQixDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUFnUixrQkFBa0IsTUFBc0MsdUJBQXVCLENBQUMsb0JBQTZELGdDQUFnQyxDQUFDLGdCQUF3RCwrQkFBK0IsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBZ1Isa0JBQWtCLE1BQXNDLHVCQUF1QixDQUFDLG9CQUE2RCxnQ0FBZ0MsQ0FBQyxnQkFBd0QsK0JBQStCLENBQUM7QUFBQyxpQkFBK0MscUJBQXFCO0FBQXFoQixxQkFBcUIsR0FBbUMsdUJBQXVCLENBQUMsS0FBdUQseUNBQXlDLENBQUMsTUFBc0QsdUNBQXVDLENBQUMsTUFBd0QseUNBQXlDLENBQUMsTUFBc0QsdUNBQXVDLENBQUMsSUFBb0MsdUJBQXVCLENBQUM7QUFBQyxvQkFBa0UscUNBQXFDLENBQWtDLHdCQUF3QjtBQUFvVSxpQkFBaUIsSUFBb0MsdUJBQXVCLENBQUMsSUFBcUMsd0JBQXdCLENBQUMsSUFBbUMsc0JBQXNCLENBQUMsSUFBb0MsdUJBQXVCLENBQUMsR0FBa0Msc0JBQXNCLENBQUM7QUFBQyxnQkFBb0QsMkJBQTJCLENBQThCLG9CQUFvQjtBQUFrYyxnQkFBZ0IsR0FBK0IsbUJBQW1CLENBQUMsUUFBMEQseUNBQXlDLENBQUMsZ0JBQW9FLDJDQUEyQyxDQUFDLFlBQWlFLDRDQUE0QyxDQUFDLEdBQStCLG1CQUFtQixDQUFDO0FBQUMsZUFBMkMsbUJBQW1CO0FBQWdwQixrQkFBa0IsR0FBbUMsdUJBQXVCLENBQUMsSUFBMEQsNkNBQTZDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsSUFBMEQsNkNBQTZDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsSUFBeUQsNENBQTRDLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyxpQkFBK0MscUJBQXFCO0FBQWl6QixpQkFBaUIsWUFBNEMsdUJBQXVCLENBQUMsTUFBd0QseUNBQXlDLENBQUMsTUFBc0QsdUNBQXVDLENBQUMsTUFBMEQsMkNBQTJDLENBQUMsTUFBMEQsMkNBQTJDLENBQUMsTUFBNEQsNkNBQTZDLENBQUMsTUFBNEQsNkNBQTZDLENBQUMsTUFBZ0UsaURBQWlELENBQUM7QUFBQyxnQkFBNkMsb0JBQW9CLENBQWlDLHVCQUF1QjtBQUFnUyxxQkFBcUIsR0FBOEIsa0JBQWtCLENBQUMsSUFBaUMsb0JBQW9CLENBQUMsSUFBK0Isa0JBQWtCLENBQUMsSUFBaUMsb0JBQW9CLENBQUMsSUFBK0Isa0JBQWtCLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCLENBQWlDLHVCQUF1QixDQUE4RCxvREFBb0QsQ0FBK0MscUNBQXFDO0FBQTRSLHNCQUFzQixHQUFtRCx1Q0FBdUMsQ0FBQyxVQUFVLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztBQUFDLHFCQUF1RCx5QkFBeUI7QUFBNFIsc0JBQXNCLEdBQW1ELHVDQUF1QyxDQUFDLFVBQVUsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUEyUix1QkFBdUIsR0FBa0Qsc0NBQXNDLENBQUMsVUFBVSxDQUFDLElBQThDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxHQUE4QixrQkFBa0IsQ0FBQyxTQUFTLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQXdSLG9CQUFvQixHQUFrRCxzQ0FBc0MsQ0FBQyxVQUFVLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUI7QUFBeVIsdUJBQXVCLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBaUQscUNBQXFDLENBQUMsVUFBVSxDQUFDO0FBQUMsc0JBQXlELDBCQUEwQjtBQUE2Uix1QkFBdUIsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQThDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxHQUFtRCx1Q0FBdUMsQ0FBQyxVQUFVLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTRSLHdCQUF3QixHQUE4QixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQWtELHNDQUFzQyxDQUFDLFVBQVUsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBeVIscUJBQXFCLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBa0Qsc0NBQXNDLENBQUMsVUFBVSxDQUFDO0FBQUMsb0JBQXFELHdCQUF3QjtBQUF3bUIsb0JBQW9CLHNCQUFzRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBcUMsMkJBQTJCLENBQUMsSUFBMkMsOEJBQThCLENBQUMsSUFBd0MsMkJBQTJCLENBQUMsSUFBSSxTQUFTLENBQTJDLGlDQUFpQyxDQUFDLElBQTJDLDhCQUE4QixDQUFDLEdBQUcsU0FBUyxDQUE2QixtQkFBbUIsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUIsQ0FBK0QscURBQXFELENBQWlDLHVCQUF1QjtBQUE0b0Isd0JBQXdCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUMsSUFBSSxTQUFTLENBQW9ELDBDQUEwQyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUEwb0Isd0JBQXdCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUMsSUFBSSxTQUFTLENBQW1ELHlDQUF5QyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUEyb0IseUJBQXlCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsSUFBSSxTQUFTLENBQW9ELDBDQUEwQyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUEwb0Isc0JBQXNCLGtCQUFrRix1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsSUFBSSxTQUFTLENBQXFELDJDQUEyQyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLElBQXlELDRDQUE0QyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUF3USxxQkFBcUIsSUFBd0MsMkJBQTJCLENBQUMsUUFBUSxTQUFTLENBQXdDLDhCQUE4QixDQUFDLEdBQUcsU0FBUyxDQUFxQywyQkFBMkIsQ0FBQztBQUFDLG9CQUFvRCx1QkFBdUIsQ0FBK0QscURBQXFELENBQWtDLHdCQUF3QjtBQUF3Vyx5QkFBeUIsSUFBeUQsNENBQTRDLENBQUMsUUFBUSxTQUFTLENBQXFELDJDQUEyQyxDQUFDLEdBQUcsU0FBUyxDQUFxRCwyQ0FBMkMsQ0FBQztBQUFDLHdCQUE2RCw0QkFBNEI7QUFBOFAseUJBQXlCLElBQUksU0FBUyxDQUFvRCwwQ0FBMEMsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUM7QUFBQyx3QkFBNkQsNEJBQTRCO0FBQStQLDBCQUEwQixJQUFJLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsR0FBRyxTQUFTLENBQXFELDJDQUEyQyxDQUFDO0FBQUMseUJBQStELDZCQUE2QjtBQUF3Vyx1QkFBdUIsSUFBMEQsNkNBQTZDLENBQUMsUUFBUSxTQUFTLENBQW9ELDBDQUEwQyxDQUFDLEdBQUcsU0FBUyxDQUFzRCw0Q0FBNEMsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBc0Qsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQUMsaUJBQStDLHFCQUFxQjtBQUE0TCxzQkFBc0IsR0FBRyxTQUFTLENBQTBDLGdDQUFnQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHFCQUF1RCx5QkFBeUI7QUFBbU0seUJBQXlCLEdBQUcsU0FBUyxDQUE0QyxrQ0FBa0MsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyx3QkFBNkQsNEJBQTRCO0FBQTRMLHNCQUFzQixHQUFHLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUFtTSx5QkFBeUIsR0FBRyxTQUFTLENBQTRDLGtDQUFrQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHdCQUE2RCw0QkFBNEI7QUFBMkwsdUJBQXVCLEdBQUcsU0FBUyxDQUF5QywrQkFBK0IsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQWtNLDBCQUEwQixHQUFHLFNBQVMsQ0FBMkMsaUNBQWlDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMseUJBQStELDZCQUE2QjtBQUF3TCxvQkFBb0IsR0FBRyxTQUFTLENBQXlDLCtCQUErQixDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUI7QUFBK0wsdUJBQXVCLEdBQUcsU0FBUyxDQUEyQyxpQ0FBaUMsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQXVNLHlCQUF5QixHQUFHLFNBQVMsQ0FBOEMsb0NBQW9DLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUFzTSwwQkFBMEIsR0FBRyxTQUFTLENBQTZDLG1DQUFtQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHlCQUErRCw2QkFBNkI7QUFBd00sNEJBQTRCLEdBQUcsU0FBUyxDQUE2QyxtQ0FBbUMsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQywyQkFBbUUsK0JBQStCO0FBQXVNLDZCQUE2QixHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQztBQUF1RCxtQkFBbUIsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7QUFBQyxrQkFBaUQsc0JBQXNCO0FBQW1JLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBeUMsK0JBQStCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTBJLDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMkMsaUNBQWlDLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCO0FBQXFJLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTRJLDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCO0FBQW9JLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBeUMsK0JBQStCLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQTJJLDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMkMsaUNBQWlDLENBQUM7QUFBQywwQkFBaUUsOEJBQThCO0FBQW1JLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCO0FBQTBJLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQXdNLDBCQUEwQixHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUMsR0FBRyxTQUFTLENBQThDLG9DQUFvQyxDQUFDO0FBQUMseUJBQStELDZCQUE2QjtBQUF1TSwyQkFBMkIsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDLEdBQUcsU0FBUyxDQUE2QyxtQ0FBbUMsQ0FBQztBQUFDLDBCQUFpRSw4QkFBOEI7QUFBd00sOEJBQThCLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQyxHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUM7QUFBQyw2QkFBdUUsaUNBQWlDO0FBQXlNLDZCQUE2QixHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUMsR0FBRyxTQUFTLENBQTZDLG1DQUFtQyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQztBQUF3cUMsZ0JBQWdCLEdBQWdGLG9FQUFvRSxDQUE0QyxrQ0FBa0MsQ0FBQyxJQUFzRix5RUFBeUUsQ0FBNEMsa0NBQWtDLENBQUMsSUFBc0YseUVBQXlFLENBQTJDLGlDQUFpQyxDQUFDLElBQTBGLDZFQUE2RSxDQUEyQyxpQ0FBaUMsQ0FBQyxHQUE4RSxrRUFBa0UsQ0FBMkMsaUNBQWlDLENBQUM7QUFBQyxpQ0FBaUMsbUNBQW1DLENBQUMsMkJBQTJCLENBQTZCLG1CQUFtQjtBQUErcEIsbUJBQW1CLEdBQXVELDJDQUEyQyxDQUEyQyxpQ0FBaUMsQ0FBQyxTQUFTLENBQUMsSUFBeUQsNENBQTRDLENBQTJDLGlDQUFpQyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLFNBQVMsQ0FBQyxJQUF3RCwyQ0FBMkMsQ0FBQyxHQUF3Qyw0QkFBNEIsQ0FBQztBQUFDLGtCQUFrQiw2Q0FBNkMsQ0FBQyxxQ0FBcUMsQ0FBZ0Msc0JBQXNCO0FBQStwQixtQkFBbUIsR0FBdUQsMkNBQTJDLENBQTJDLGlDQUFpQyxDQUFDLFNBQVMsQ0FBQyxJQUF5RCw0Q0FBNEMsQ0FBMkMsaUNBQWlDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsU0FBUyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLEdBQXdDLDRCQUE0QixDQUFDO0FBQUMsa0JBQWtCLDZDQUE2QyxDQUFDLHFDQUFxQyxDQUFnQyxzQkFBc0I7QUFBZ1Usb0JBQW9CLEdBQXdDLDRCQUE0QixDQUFDLElBQXlELDRDQUE0QyxDQUFDLFNBQVMsQ0FBQyxHQUF1RCwyQ0FBMkMsQ0FBQyxTQUFTLENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCLENBQStELHFEQUFxRCxDQUFpQyx1QkFBdUIsQ0FBQyw2Q0FBNkMsQ0FBQyxxQ0FBcUM7QUFBZ1Usb0JBQW9CLEdBQXdDLDRCQUE0QixDQUFDLElBQXlELDRDQUE0QyxDQUFDLFNBQVMsQ0FBQyxHQUF1RCwyQ0FBMkMsQ0FBQyxTQUFTLENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCLENBQStELHFEQUFxRCxDQUFDLDZDQUE2QyxDQUFDLHFDQUFxQyxDQUFpQyx1QkFBdUI7QUFBaVYsNkJBQTZCLEdBQXlELDZDQUE2QyxDQUFDLFNBQVMsQ0FBQyxJQUFtQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsSUFBbUMsc0JBQXNCLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyw0QkFBcUUsZ0NBQWdDLENBQTRDLGtDQUFrQztBQUFnViw0QkFBNEIsR0FBeUQsNkNBQTZDLENBQUMsU0FBUyxDQUFDLElBQW9DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxJQUFrQyxxQkFBcUIsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQztBQUFDLDJCQUFtRSwrQkFBK0IsQ0FBNEMsa0NBQWtDO0FBQW9LLDhCQUE4QixHQUFHLFNBQVMsQ0FBQyxHQUF3RCw0Q0FBNEMsQ0FBQyxTQUFTLENBQUM7QUFBQyw2QkFBdUUsaUNBQWlDLENBQTJDLGlDQUFpQztBQUF1Syw2QkFBNkIsR0FBRyxTQUFTLENBQUMsR0FBMEQsOENBQThDLENBQUMsU0FBUyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQyxDQUEyQyxpQ0FBaUM7QUFBNEssb0JBQW9CLEdBQXFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCLENBQWlDLHVCQUF1QjtBQUFrTCw0QkFBNEIsR0FBb0Msd0JBQXdCLENBQUMsU0FBUyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztBQUFDLDJCQUFtRSwrQkFBK0IsQ0FBc0MsNEJBQTRCO0FBQWlMLDZCQUE2QixHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQyxDQUF1Qyw2QkFBNkI7QUFBOEssMEJBQTBCLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCLENBQXNDLDRCQUE0QjtBQUFpTCwyQkFBMkIsR0FBb0Msd0JBQXdCLENBQUMsU0FBUyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztBQUFDLDBCQUFpRSw4QkFBOEIsQ0FBdUMsNkJBQTZCO0FBQW1ILHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxHQUFvQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCLENBQWlDLHVCQUF1QjtBQUF5SCw2QkFBNkIsR0FBRyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsNEJBQXFFLGdDQUFnQyxDQUFzQyw0QkFBNEI7QUFBNEgsOEJBQThCLEdBQUcsU0FBUyxDQUFDLEdBQW9DLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUFDLDZCQUF1RSxpQ0FBaUMsQ0FBdUMsNkJBQTZCO0FBQXlILDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxHQUFvQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7QUFBQywwQkFBaUUsOEJBQThCLENBQXNDLDRCQUE0QjtBQUF3SCw0QkFBNEIsR0FBRyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsMkJBQW1FLCtCQUErQixDQUF1Qyw2QkFBNkI7QUFBMmYsaUJBQWlCLEdBQWlELHFDQUFxQyxDQUFDLFFBQXdDLHVCQUF1QixDQUErQyxxQ0FBcUMsQ0FBQyxRQUF3Qyx1QkFBdUIsQ0FBK0MscUNBQXFDLENBQUMsU0FBUyxDQUFDLEdBQTRDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQztBQUFDLGdCQUE4QyxxQkFBcUIsQ0FBNEQsa0RBQWtELENBQThCLG9CQUFvQixDQUFtQyx5QkFBeUI7QUFBb1gsd0JBQXdCLEdBQUcsU0FBUyxDQUEyQyxpQ0FBaUMsQ0FBd0MsOEJBQThCLENBQUMsSUFBcUMsd0JBQXdCLENBQUMsSUFBbUMsc0JBQXNCLENBQUMsR0FBRyxTQUFTLENBQTRCLGtCQUFrQixDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUF3TixrQkFBa0IsR0FBRyxTQUFTLENBQTBELGdEQUFnRCxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBNkosbUJBQW1CLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUF3RCw4Q0FBOEMsQ0FBQztBQUFDLGtCQUFpRCxzQkFBc0I7QUFBdUgsa0JBQWtCLEdBQUcsU0FBUyxDQUFxQywyQkFBMkIsQ0FBQyxJQUFJLFNBQVMsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBeWhCLHNCQUFzQixHQUFHLFNBQVMsQ0FBOEQsb0RBQW9ELENBQW1FLHlEQUF5RCxDQUFDLElBQUksU0FBUyxDQUFpRSx1REFBdUQsQ0FBaUUsdURBQXVELENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FBQXloQixzQkFBc0IsR0FBRyxTQUFTLENBQThELG9EQUFvRCxDQUFtRSx5REFBeUQsQ0FBQyxJQUFJLFNBQVMsQ0FBaUUsdURBQXVELENBQWlFLHVEQUF1RCxDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUEwaEIsdUJBQXVCLEdBQUcsU0FBUyxDQUE2RCxtREFBbUQsQ0FBbUUseURBQXlELENBQUMsSUFBSSxTQUFTLENBQWtFLHdEQUF3RCxDQUFpRSx1REFBdUQsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBdWhCLG9CQUFvQixHQUFHLFNBQVMsQ0FBNkQsbURBQW1ELENBQW1FLHlEQUF5RCxDQUFDLElBQUksU0FBUyxDQUFrRSx3REFBd0QsQ0FBaUUsdURBQXVELENBQUM7QUFBQyxtQkFBbUQsdUJBQXVCO0FBQXFJLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBcUMsMkJBQTJCLENBQUMsR0FBRyxTQUFTLENBQUM7QUFBQyxrQkFBaUQsc0JBQXNCO0FBQTBoQix1QkFBdUIsSUFBSSxTQUFTLENBQWtFLHdEQUF3RCxDQUFtRSx5REFBeUQsQ0FBQyxHQUFHLFNBQVMsQ0FBNkQsbURBQW1ELENBQWlFLHVEQUF1RCxDQUFDO0FBQUMsc0JBQXlELDBCQUEwQixDQUF3Qyw4QkFBOEI7QUFBc1IsdUJBQXVCLElBQUksU0FBUyxDQUFpRSx1REFBdUQsQ0FBQyxHQUFHLFNBQVMsQ0FBc0QsNENBQTRDLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCLENBQXNDLDRCQUE0QjtBQUF1Uix3QkFBd0IsSUFBSSxTQUFTLENBQWtFLHdEQUF3RCxDQUFDLEdBQUcsU0FBUyxDQUFxRCwyQ0FBMkMsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkIsQ0FBdUMsNkJBQTZCO0FBQXdoQixxQkFBcUIsSUFBSSxTQUFTLENBQWlFLHVEQUF1RCxDQUFtRSx5REFBeUQsQ0FBQyxHQUFHLFNBQVMsQ0FBOEQsb0RBQW9ELENBQWlFLHVEQUF1RCxDQUFDO0FBQUMsb0JBQXFELHdCQUF3QixDQUF3Qyw4QkFBOEI7QUFBNEwsdUJBQXVCLEdBQTRDLGdDQUFnQyxDQUFDLGtCQUFrQixDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsc0JBQXlELDBCQUEwQjtBQUE0TCx1QkFBdUIsR0FBNEMsZ0NBQWdDLENBQUMsa0JBQWtCLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTJMLHdCQUF3QixHQUEyQywrQkFBK0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBd0wscUJBQXFCLEdBQTJDLCtCQUErQixDQUFDLGtCQUFrQixDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsb0JBQXFELHdCQUF3QjtBQUEwTCx3QkFBd0IsR0FBbUMsdUJBQXVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBeUMsK0JBQStCLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQTRMLHdCQUF3QixHQUFtQyx1QkFBdUIsQ0FBQyxHQUFHLGlCQUFpQixDQUEwQyxnQ0FBZ0MsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBMkwseUJBQXlCLEdBQW1DLHVCQUF1QixDQUFDLEdBQUcsaUJBQWlCLENBQXlDLCtCQUErQixDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUEwTCxzQkFBc0IsR0FBbUMsdUJBQXVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBMEMsZ0NBQWdDLENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FDTHo0ckU7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Q0FZQztBQUNEOzs7Ozs7Ozs7O0NBVUM7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiOy8qIVxuICogYW5pbWF0ZS5jc3MgLSBodHRwczovL2FuaW1hdGUuc3R5bGUvXG4gKiBWZXJzaW9uIC0gNC4xLjFcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgQW5pbWF0ZS5jc3NcbiAqLzpyb290ey0tYW5pbWF0ZS1kdXJhdGlvbjoxczstLWFuaW1hdGUtZGVsYXk6MXM7LS1hbmltYXRlLXJlcGVhdDoxfS5hbmltYXRlX19hbmltYXRlZHstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxczthbmltYXRpb24tZHVyYXRpb246MXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tYW5pbWF0ZS1kdXJhdGlvbik7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWFuaW1hdGUtZHVyYXRpb24pOy13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9faW5maW5pdGV7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3JlcGVhdC0xey13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tYW5pbWF0ZS1yZXBlYXQpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tYW5pbWF0ZS1yZXBlYXQpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19yZXBlYXQtMnstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MjthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjI7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmNhbGModmFyKC0tYW5pbWF0ZS1yZXBlYXQpKjIpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Y2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkqMil9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3JlcGVhdC0zey13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDozO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Mzstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Y2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkqMyk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDpjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSozKX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktMXN7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MXM7YW5pbWF0aW9uLWRlbGF5OjFzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OnZhcigtLWFuaW1hdGUtZGVsYXkpO2FuaW1hdGlvbi1kZWxheTp2YXIoLS1hbmltYXRlLWRlbGF5KX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktMnN7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MnM7YW5pbWF0aW9uLWRlbGF5OjJzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqMik7YW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqMil9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTNzey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjNzO2FuaW1hdGlvbi1kZWxheTozczstd2Via2l0LWFuaW1hdGlvbi1kZWxheTpjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpKjMpO2FuaW1hdGlvbi1kZWxheTpjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpKjMpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19kZWxheS00c3std2Via2l0LWFuaW1hdGlvbi1kZWxheTo0czthbmltYXRpb24tZGVsYXk6NHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSo0KTthbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSo0KX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktNXN7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6NXM7YW5pbWF0aW9uLWRlbGF5OjVzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqNSk7YW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqNSl9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2Zhc3Rlcnstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNXM7YW5pbWF0aW9uLWR1cmF0aW9uOi41czstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pLzIpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pLzIpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYXN0ey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi44czthbmltYXRpb24tZHVyYXRpb246LjhzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC44KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjgpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19zbG93ey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjJzO2FuaW1hdGlvbi1kdXJhdGlvbjoyczstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjIpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjIpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19zbG93ZXJ7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246M3M7YW5pbWF0aW9uLWR1cmF0aW9uOjNzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMyk7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMyl9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSkscHJpbnR7LmFuaW1hdGVfX2FuaW1hdGVkey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFtcyFpbXBvcnRhbnQ7YW5pbWF0aW9uLWR1cmF0aW9uOjFtcyFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjFtcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kdXJhdGlvbjoxbXMhaW1wb3J0YW50Oy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxIWltcG9ydGFudDthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjEhaW1wb3J0YW50fS5hbmltYXRlX19hbmltYXRlZFtjbGFzcyo9T3V0XXtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2V7MCUsMjAlLDUzJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTQwJSw0MyV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSl9NzAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xNXB4LDApIHNjYWxlWSgxLjA1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTVweCwwKSBzY2FsZVkoMS4wNSl9ODAley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKX19QGtleWZyYW1lcyBib3VuY2V7MCUsMjAlLDUzJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTQwJSw0MyV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwcHgsMCkgc2NhbGVZKDEuMSl9NzAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xNXB4LDApIHNjYWxlWSgxLjA1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTVweCwwKSBzY2FsZVkoMS4wNSl9ODAley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZVkoLjk1KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNHB4LDApIHNjYWxlWSgxLjAyKX19LmFuaW1hdGVfX2JvdW5jZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZTthbmltYXRpb24tbmFtZTpib3VuY2U7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyBmbGFzaHswJSw1MCUsdG97b3BhY2l0eToxfTI1JSw3NSV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZsYXNoezAlLDUwJSx0b3tvcGFjaXR5OjF9MjUlLDc1JXtvcGFjaXR5OjB9fS5hbmltYXRlX19mbGFzaHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsYXNoO2FuaW1hdGlvbi1uYW1lOmZsYXNofUAtd2Via2l0LWtleWZyYW1lcyBwdWxzZXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjA1LDEuMDUsMS4wNSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwxLjA1LDEuMDUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHB1bHNlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDUsMS4wNSwxLjA1KTt0cmFuc2Zvcm06c2NhbGUzZCgxLjA1LDEuMDUsMS4wNSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fS5hbmltYXRlX19wdWxzZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnB1bHNlO2FuaW1hdGlvbi1uYW1lOnB1bHNlOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fUAtd2Via2l0LWtleWZyYW1lcyBydWJiZXJCYW5kezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMjUsLjc1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMjUsLjc1LDEpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC43NSwxLjI1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC43NSwxLjI1LDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMTUsLjg1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMTUsLjg1LDEpfTY1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NSwxLjA1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwxLjA1LDEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDUsLjk1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDUsLjk1LDEpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHJ1YmJlckJhbmR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xNSwuODUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xNSwuODUsMSl9NjUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fS5hbmltYXRlX19ydWJiZXJCYW5key13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cnViYmVyQmFuZDthbmltYXRpb24tbmFtZTpydWJiZXJCYW5kfUAtd2Via2l0LWtleWZyYW1lcyBzaGFrZVh7MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0xMCUsMzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCl9MjAlLDQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApfX1Aa2V5ZnJhbWVzIHNoYWtlWHswJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwJSwzMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX0yMCUsNDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCl9fS5hbmltYXRlX19zaGFrZVh7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzaGFrZVg7YW5pbWF0aW9uLW5hbWU6c2hha2VYfUAtd2Via2l0LWtleWZyYW1lcyBzaGFrZVl7MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0xMCUsMzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCl9MjAlLDQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApfX1Aa2V5ZnJhbWVzIHNoYWtlWXswJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwJSwzMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX0yMCUsNDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCl9fS5hbmltYXRlX19zaGFrZVl7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzaGFrZVk7YW5pbWF0aW9uLW5hbWU6c2hha2VZfUAtd2Via2l0LWtleWZyYW1lcyBoZWFkU2hha2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX02LjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyl9MTguNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpfTMxLjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyl9NDMuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfX1Aa2V5ZnJhbWVzIGhlYWRTaGFrZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTYuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKX0xOC41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyl9MzEuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKX00My41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9fS5hbmltYXRlX19oZWFkU2hha2V7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpoZWFkU2hha2U7YW5pbWF0aW9uLW5hbWU6aGVhZFNoYWtlfUAtd2Via2l0LWtleWZyYW1lcyBzd2luZ3syMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE1ZGVnKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpfTYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC01ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX19QGtleWZyYW1lcyBzd2luZ3syMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE1ZGVnKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpfTYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC01ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX19LmFuaW1hdGVfX3N3aW5ney13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcjstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnN3aW5nO2FuaW1hdGlvbi1uYW1lOnN3aW5nfUAtd2Via2l0LWtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKDNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoM2RlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19QGtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSkgcm90YXRlKC0zZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKDNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoM2RlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSkgcm90YXRlKC0zZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmFuaW1hdGVfX3RhZGF7LXdlYmtpdC1hbmltYXRpb24tbmFtZTp0YWRhO2FuaW1hdGlvbi1uYW1lOnRhZGF9QC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTE1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjUlLDAsMCkgcm90YXRlKC01ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1JSwwLDApIHJvdGF0ZSgtNWRlZyl9MzAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwJSwwLDApIHJvdGF0ZSgzZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAlLDAsMCkgcm90YXRlKDNkZWcpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTUlLDAsMCkgcm90YXRlKC0zZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTE1JSwwLDApIHJvdGF0ZSgtM2RlZyl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwJSwwLDApIHJvdGF0ZSgyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAlLDAsMCkgcm90YXRlKDJkZWcpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNSUsMCwwKSByb3RhdGUoLTFkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNSUsMCwwKSByb3RhdGUoLTFkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgd29iYmxlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MTUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNSUsMCwwKSByb3RhdGUoLTVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjUlLDAsMCkgcm90YXRlKC01ZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAlLDAsMCkgcm90YXRlKDNkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMCUsMCwwKSByb3RhdGUoM2RlZyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNSUsMCwwKSByb3RhdGUoLTNkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTUlLDAsMCkgcm90YXRlKC0zZGVnKX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAlLDAsMCkgcm90YXRlKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMCUsMCwwKSByb3RhdGUoMmRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01JSwwLDApIHJvdGF0ZSgtMWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01JSwwLDApIHJvdGF0ZSgtMWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3dvYmJsZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOndvYmJsZTthbmltYXRpb24tbmFtZTp3b2JibGV9QC13ZWJraXQta2V5ZnJhbWVzIGplbGxvezAlLDExLjElLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MjIuMiV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTt0cmFuc2Zvcm06c2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKX0zMy4zJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTt0cmFuc2Zvcm06c2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyl9NDQuNCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyl9NTUuNSV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpO3RyYW5zZm9ybTpza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyl9NjYuNiV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLS43ODEyNWRlZykgc2tld1koLS43ODEyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0uNzgxMjVkZWcpIHNrZXdZKC0uNzgxMjVkZWcpfTc3Ljcley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC4zOTA2MjVkZWcpIHNrZXdZKC4zOTA2MjVkZWcpO3RyYW5zZm9ybTpza2V3WCguMzkwNjI1ZGVnKSBza2V3WSguMzkwNjI1ZGVnKX04OC44JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtLjE5NTMxMjVkZWcpIHNrZXdZKC0uMTk1MzEyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0uMTk1MzEyNWRlZykgc2tld1koLS4xOTUzMTI1ZGVnKX19QGtleWZyYW1lcyBqZWxsb3swJSwxMS4xJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTIyLjIley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyl9MzMuMyV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7dHJhbnNmb3JtOnNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpfTQ0LjQley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTt0cmFuc2Zvcm06c2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpfTU1LjUley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTt0cmFuc2Zvcm06c2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpfTY2LjYley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC0uNzgxMjVkZWcpIHNrZXdZKC0uNzgxMjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtLjc4MTI1ZGVnKSBza2V3WSgtLjc4MTI1ZGVnKX03Ny43JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCguMzkwNjI1ZGVnKSBza2V3WSguMzkwNjI1ZGVnKTt0cmFuc2Zvcm06c2tld1goLjM5MDYyNWRlZykgc2tld1koLjM5MDYyNWRlZyl9ODguOCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLS4xOTUzMTI1ZGVnKSBza2V3WSgtLjE5NTMxMjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtLjE5NTMxMjVkZWcpIHNrZXdZKC0uMTk1MzEyNWRlZyl9fS5hbmltYXRlX19qZWxsb3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmplbGxvO2FuaW1hdGlvbi1uYW1lOmplbGxvOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXJ9QC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0QmVhdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MTQley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9Mjgley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX00MiV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGhlYXJ0QmVhdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MTQley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9Mjgley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX00MiV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX03MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0uYW5pbWF0ZV9faGVhcnRCZWF0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6aGVhcnRCZWF0O2FuaW1hdGlvbi1uYW1lOmhlYXJ0QmVhdDstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjNzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjNzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMS4zKTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSoxLjMpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fUAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5Eb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMjAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGJhY2tJbkRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fS5hbmltYXRlX19iYWNrSW5Eb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja0luRG93bjthbmltYXRpb24tbmFtZTpiYWNrSW5Eb3dufUAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5MZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGJhY2tJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fS5hbmltYXRlX19iYWNrSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja0luTGVmdDthbmltYXRpb24tbmFtZTpiYWNrSW5MZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYmFja0luUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fYmFja0luUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrSW5SaWdodDthbmltYXRpb24tbmFtZTpiYWNrSW5SaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja0luVXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGJhY2tJblVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN304MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19LmFuaW1hdGVfX2JhY2tJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja0luVXA7YW5pbWF0aW9uLW5hbWU6YmFja0luVXB9QC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXREb3duezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg3MDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9fUBrZXlmcmFtZXMgYmFja091dERvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg3MDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN319LmFuaW1hdGVfX2JhY2tPdXREb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja091dERvd247YW5pbWF0aW9uLW5hbWU6YmFja091dERvd259QC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXRMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX1Aa2V5ZnJhbWVzIGJhY2tPdXRMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX0uYW5pbWF0ZV9fYmFja091dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrT3V0TGVmdDthbmltYXRpb24tbmFtZTpiYWNrT3V0TGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN319QGtleWZyYW1lcyBiYWNrT3V0UmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX0uYW5pbWF0ZV9fYmFja091dFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja091dFJpZ2h0O2FuaW1hdGlvbi1uYW1lOmJhY2tPdXRSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dFVwezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTcwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTcwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN319QGtleWZyYW1lcyBiYWNrT3V0VXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX0uYW5pbWF0ZV9fYmFja091dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFja091dFVwO2FuaW1hdGlvbi1uYW1lOmJhY2tPdXRVcH1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW57MCUsMjAlLDQwJSw2MCUsODAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KTt0cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIGJvdW5jZUluezAlLDIwJSw0MCUsNjAlLDgwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmFuaW1hdGVfX2JvdW5jZUluey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZUluO2FuaW1hdGlvbi1uYW1lOmJvdW5jZUlufUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbkRvd257MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKSBzY2FsZVkoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDI1cHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApIHNjYWxlWSguOSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45NSl9OTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApIHNjYWxlWSguOTg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCkgc2NhbGVZKC45ODUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgYm91bmNlSW5Eb3duezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCkgc2NhbGVZKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCkgc2NhbGVZKDMpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApIHNjYWxlWSguOSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjVweCwwKSBzY2FsZVkoLjkpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTUpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKSBzY2FsZVkoLjk4NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApIHNjYWxlWSguOTg1KX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fYm91bmNlSW5Eb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5Eb3duO2FuaW1hdGlvbi1uYW1lOmJvdW5jZUluRG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5MZWZ0ezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCkgc2NhbGVYKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCkgc2NhbGVYKDMpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApIHNjYWxlWCgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApIHNjYWxlWCgxKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKSBzY2FsZVgoLjk4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKSBzY2FsZVgoLjk4KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXB4LDAsMCkgc2NhbGVYKC45OTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1cHgsMCwwKSBzY2FsZVgoLjk5NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBib3VuY2VJbkxlZnR7MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKSBzY2FsZVgoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKSBzY2FsZVgoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCkgc2NhbGVYKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCkgc2NhbGVYKDEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApIHNjYWxlWCguOTgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApIHNjYWxlWCguOTgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1cHgsMCwwKSBzY2FsZVgoLjk5NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApIHNjYWxlWCguOTk1KX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fYm91bmNlSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5MZWZ0O2FuaW1hdGlvbi1uYW1lOmJvdW5jZUluTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5SaWdodHswJSw2MCUsNzUlLDkwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzAwMHB4LDAsMCkgc2NhbGVYKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKSBzY2FsZVgoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApIHNjYWxlWCgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1cHgsMCwwKSBzY2FsZVgoMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKSBzY2FsZVgoLjk4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApIHNjYWxlWCguOTgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgYm91bmNlSW5SaWdodHswJSw2MCUsNzUlLDkwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzAwMHB4LDAsMCkgc2NhbGVYKDMpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKSBzY2FsZVgoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApIHNjYWxlWCgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1cHgsMCwwKSBzY2FsZVgoMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKSBzY2FsZVgoLjk4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApIHNjYWxlWCguOTgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCkgc2NhbGVYKC45OTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19ib3VuY2VJblJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5SaWdodDthbmltYXRpb24tbmFtZTpib3VuY2VJblJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDMwMDBweCwwKSBzY2FsZVkoNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMzAwMHB4LDApIHNjYWxlWSg1KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk1KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApIHNjYWxlWSguOTg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApIHNjYWxlWSguOTg1KX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGJvdW5jZUluVXB7MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMzAwMHB4LDApIHNjYWxlWSg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwzMDAwcHgsMCkgc2NhbGVZKDUpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApIHNjYWxlWSguOSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApIHNjYWxlWSguOTUpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCkgc2NhbGVZKC45ODUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19ib3VuY2VJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5VcDthbmltYXRpb24tbmFtZTpib3VuY2VJblVwfUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXR7MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX01MCUsNTUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX19QGtleWZyYW1lcyBib3VuY2VPdXR7MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX01MCUsNTUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX19LmFuaW1hdGVfX2JvdW5jZU91dHstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNzVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNzVzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXQ7YW5pbWF0aW9uLW5hbWU6Ym91bmNlT3V0fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXREb3duezIwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpfTQwJSw0NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApIHNjYWxlWSgzKX19QGtleWZyYW1lcyBib3VuY2VPdXREb3duezIwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45ODUpfTQwJSw0NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApIHNjYWxlWSgzKX19LmFuaW1hdGVfX2JvdW5jZU91dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXREb3duO2FuaW1hdGlvbi1uYW1lOmJvdW5jZU91dERvd259QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dExlZnR7MjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMHB4LDAsMCkgc2NhbGVYKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjBweCwwLDApIHNjYWxlWCguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKSBzY2FsZVgoMik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKSBzY2FsZVgoMil9fUBrZXlmcmFtZXMgYm91bmNlT3V0TGVmdHsyMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsMCwwKSBzY2FsZVgoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMHB4LDAsMCkgc2NhbGVYKC45KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApIHNjYWxlWCgyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApIHNjYWxlWCgyKX19LmFuaW1hdGVfX2JvdW5jZU91dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXRMZWZ0O2FuaW1hdGlvbi1uYW1lOmJvdW5jZU91dExlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0ezIwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwcHgsMCwwKSBzY2FsZVgoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCwwLDApIHNjYWxlWCguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApIHNjYWxlWCgyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCkgc2NhbGVYKDIpfX1Aa2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0ezIwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwcHgsMCwwKSBzY2FsZVgoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCwwLDApIHNjYWxlWCguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApIHNjYWxlWCgyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCkgc2NhbGVYKDIpfX0uYW5pbWF0ZV9fYm91bmNlT3V0UmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VPdXRSaWdodDthbmltYXRpb24tbmFtZTpib3VuY2VPdXRSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0VXB7MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTg1KX00MCUsNDUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMHB4LDApIHNjYWxlWSguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyl9fUBrZXlmcmFtZXMgYm91bmNlT3V0VXB7MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlWSguOTg1KX00MCUsNDUle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwcHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMHB4LDApIHNjYWxlWSguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKSBzY2FsZVkoMyl9fS5hbmltYXRlX19ib3VuY2VPdXRVcHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZU91dFVwO2FuaW1hdGlvbi1uYW1lOmJvdW5jZU91dFVwfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW57MCV7b3BhY2l0eTowfXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBmYWRlSW57MCV7b3BhY2l0eTowfXRve29wYWNpdHk6MX19LmFuaW1hdGVfX2ZhZGVJbnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbjthbmltYXRpb24tbmFtZTpmYWRlSW59QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd257MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluRG93bnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJbkRvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5Eb3duO2FuaW1hdGlvbi1uYW1lOmZhZGVJbkRvd259QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd25CaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJbkRvd25CaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluRG93bkJpZ3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkRvd25CaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZUluRG93bkJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5MZWZ0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkxlZnQ7YW5pbWF0aW9uLW5hbWU6ZmFkZUluTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluTGVmdEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5MZWZ0Qmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluTGVmdEJpZzthbmltYXRpb24tbmFtZTpmYWRlSW5MZWZ0QmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluUmlnaHR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodDthbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHRCaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5SaWdodEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluUmlnaHRCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodEJpZzthbmltYXRpb24tbmFtZTpmYWRlSW5SaWdodEJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXB7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJblVwezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVXA7YW5pbWF0aW9uLW5hbWU6ZmFkZUluVXB9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwQmlnezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluVXBCaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJblVwQmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVXBCaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZUluVXBCaWd9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblRvcExlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Ub3BMZWZ0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5Ub3BMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVG9wTGVmdDthbmltYXRpb24tbmFtZTpmYWRlSW5Ub3BMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Ub3BSaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Ub3BSaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJblRvcFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluVG9wUmlnaHQ7YW5pbWF0aW9uLW5hbWU6ZmFkZUluVG9wUmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkJvdHRvbUxlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluQm90dG9tTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJbkJvdHRvbUxlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5Cb3R0b21MZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVJbkJvdHRvbUxlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkJvdHRvbVJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Cb3R0b21SaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5Cb3R0b21SaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkJvdHRvbVJpZ2h0O2FuaW1hdGlvbi1uYW1lOmZhZGVJbkJvdHRvbVJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZU91dHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX0uYW5pbWF0ZV9fZmFkZU91dHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd257MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0RG93bnswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0RG93bjthbmltYXRpb24tbmFtZTpmYWRlT3V0RG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd25CaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fUBrZXlmcmFtZXMgZmFkZU91dERvd25CaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fS5hbmltYXRlX19mYWRlT3V0RG93bkJpZ3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXREb3duQmlnO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXREb3duQmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0TGVmdHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9fUBrZXlmcmFtZXMgZmFkZU91dExlZnR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfX0uYW5pbWF0ZV9fZmFkZU91dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdDthbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnRCaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKX19QGtleWZyYW1lcyBmYWRlT3V0TGVmdEJpZ3swJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApfX0uYW5pbWF0ZV9fZmFkZU91dExlZnRCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdEJpZzthbmltYXRpb24tbmFtZTpmYWRlT3V0TGVmdEJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9fS5hbmltYXRlX19mYWRlT3V0UmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0UmlnaHQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0QmlnezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApfX0uYW5pbWF0ZV9fZmFkZU91dFJpZ2h0Qmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dFJpZ2h0QmlnO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRSaWdodEJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0VXB7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dFVwO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRVcH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwQmlnezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFVwQmlnezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9fS5hbmltYXRlX19mYWRlT3V0VXBCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0VXBCaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFVwQmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VG9wTGVmdHswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApfX1Aa2V5ZnJhbWVzIGZhZGVPdXRUb3BMZWZ0ezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0VG9wTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRUb3BMZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRUb3BMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VG9wUmlnaHR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFRvcFJpZ2h0ezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dFRvcFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dFRvcFJpZ2h0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRUb3BSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJvdHRvbVJpZ2h0ezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0Qm90dG9tUmlnaHR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApfX0uYW5pbWF0ZV9fZmFkZU91dEJvdHRvbVJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dEJvdHRvbVJpZ2h0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRCb3R0b21SaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9fUBrZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0Qm90dG9tTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRCb3R0b21MZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRCb3R0b21MZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmbGlwezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0xdHVybik7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0xdHVybik7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9NDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xOTBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTUwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE3MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTcwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59ODAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwuOTUsLjk1KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwuOTUsLjk1KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59fUBrZXlmcmFtZXMgZmxpcHswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgtMXR1cm4pO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgtMXR1cm4pOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH01MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xNzBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE3MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCguOTUsLjk1LC45NSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCguOTUsLjk1LC45NSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmxpcHstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZTtiYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwO2FuaW1hdGlvbi1uYW1lOmZsaXB9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblh7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO29wYWNpdHk6MH00MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTVkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgZmxpcEluWHswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19LmFuaW1hdGVfX2ZsaXBJblh7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwSW5YO2FuaW1hdGlvbi1uYW1lOmZsaXBJblh9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJbll7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO29wYWNpdHk6MH00MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTIwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTIwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDEwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTVkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgZmxpcEluWXswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgxMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtNWRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19LmFuaW1hdGVfX2ZsaXBJbll7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwSW5ZO2FuaW1hdGlvbi1uYW1lOmZsaXBJbll9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmxpcE91dFh7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9MzAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX2ZsaXBPdXRYey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsaXBPdXRYO2FuaW1hdGlvbi1uYW1lOmZsaXBPdXRYOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDtiYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50fUAtd2Via2l0LWtleWZyYW1lcyBmbGlwT3V0WXswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTE1ZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTE1ZGVnKTtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZsaXBPdXRZezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTVkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTVkZWcpO29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19mbGlwT3V0WXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNzVzO2FuaW1hdGlvbi1kdXJhdGlvbjouNzVzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMC43NSk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmbGlwT3V0WTthbmltYXRpb24tbmFtZTpmbGlwT3V0WX1ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHNrZXdYKC0zMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO29wYWNpdHk6MH02MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goMjBkZWcpO3RyYW5zZm9ybTpza2V3WCgyMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJblJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgc2tld1goLTMwZGVnKTtvcGFjaXR5OjB9NjAley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDIwZGVnKTt0cmFuc2Zvcm06c2tld1goMjBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTVkZWcpO3RyYW5zZm9ybTpza2V3WCgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2xpZ2h0U3BlZWRJblJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZEluUmlnaHQ7YW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZEluUmlnaHQ7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9QC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgzMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goMzBkZWcpO29wYWNpdHk6MH02MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTIwZGVnKTt0cmFuc2Zvcm06c2tld1goLTIwZGVnKTtvcGFjaXR5OjF9ODAley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDVkZWcpO3RyYW5zZm9ybTpza2V3WCg1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgzMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goMzBkZWcpO29wYWNpdHk6MH02MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTIwZGVnKTt0cmFuc2Zvcm06c2tld1goLTIwZGVnKTtvcGFjaXR5OjF9ODAley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDVkZWcpO3RyYW5zZm9ybTpza2V3WCg1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fbGlnaHRTcGVlZEluTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmxpZ2h0U3BlZWRJbkxlZnQ7YW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZEluTGVmdDstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH1ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dFJpZ2h0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgc2tld1goMzBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgc2tld1goMzBkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBsaWdodFNwZWVkT3V0UmlnaHR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgzMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgzMGRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fbGlnaHRTcGVlZE91dFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZE91dFJpZ2h0O2FuaW1hdGlvbi1uYW1lOmxpZ2h0U3BlZWRPdXRSaWdodDstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59QC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXRMZWZ0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHNrZXdYKC0zMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goLTMwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goLTMwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX2xpZ2h0U3BlZWRPdXRMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZE91dExlZnQ7YW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZE91dExlZnQ7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTIwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMjAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0yMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTIwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fcm90YXRlSW57LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVJbjthbmltYXRpb24tbmFtZTpyb3RhdGVJbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fcm90YXRlSW5Eb3duTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZUluRG93bkxlZnQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlSW5Eb3duTGVmdDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fS5hbmltYXRlX19yb3RhdGVJbkRvd25SaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZUluRG93blJpZ2h0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZUluRG93blJpZ2h0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluVXBMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fcm90YXRlSW5VcExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVJblVwTGVmdDthbmltYXRpb24tbmFtZTpyb3RhdGVJblVwTGVmdDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fS5hbmltYXRlX19yb3RhdGVJblVwUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVJblVwUmlnaHQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlSW5VcFJpZ2h0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMDBkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyByb3RhdGVPdXR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjAwZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVPdXQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXJ9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXREb3duTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dERvd25MZWZ0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dERvd25MZWZ0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXREb3duUmlnaHR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fcm90YXRlT3V0RG93blJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0RG93blJpZ2h0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dERvd25SaWdodDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgYm90dG9tO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcExlZnR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgcm90YXRlT3V0VXBMZWZ0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fcm90YXRlT3V0VXBMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0VXBMZWZ0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dFVwTGVmdDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXRVcFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0VXBSaWdodDthbmltYXRpb24tbmFtZTpyb3RhdGVPdXRVcFJpZ2h0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIGhpbmdlezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fTIwJSw2MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dH00MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGhpbmdlezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fTIwJSw2MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dH00MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNzAwcHgsMCk7b3BhY2l0eTowfX0uYW5pbWF0ZV9faGluZ2V7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MnM7YW5pbWF0aW9uLWR1cmF0aW9uOjJzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMik7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMik7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpoaW5nZTthbmltYXRpb24tbmFtZTpoaW5nZTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIGxlZnQ7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgamFja0luVGhlQm94ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgcm90YXRlKDMwZGVnKTt0cmFuc2Zvcm06c2NhbGUoLjEpIHJvdGF0ZSgzMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9NzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzZGVnKTt0cmFuc2Zvcm06cm90YXRlKDNkZWcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgamFja0luVGhlQm94ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgcm90YXRlKDMwZGVnKTt0cmFuc2Zvcm06c2NhbGUoLjEpIHJvdGF0ZSgzMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9NzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzZGVnKTt0cmFuc2Zvcm06cm90YXRlKDNkZWcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fS5hbmltYXRlX19qYWNrSW5UaGVCb3h7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpqYWNrSW5UaGVCb3g7YW5pbWF0aW9uLW5hbWU6amFja0luVGhlQm94fUAtd2Via2l0LWtleWZyYW1lcyByb2xsSW57MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgcm90YXRlKC0xMjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHJvdGF0ZSgtMTIwZGVnKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyByb2xsSW57MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgcm90YXRlKC0xMjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHJvdGF0ZSgtMTIwZGVnKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3JvbGxJbnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvbGxJbjthbmltYXRpb24tbmFtZTpyb2xsSW59QC13ZWJraXQta2V5ZnJhbWVzIHJvbGxPdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgcm90YXRlKDEyMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSByb3RhdGUoMTIwZGVnKX19QGtleWZyYW1lcyByb2xsT3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHJvdGF0ZSgxMjBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgcm90YXRlKDEyMGRlZyl9fS5hbmltYXRlX19yb2xsT3V0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm9sbE91dDthbmltYXRpb24tbmFtZTpyb2xsT3V0fUAtd2Via2l0LWtleWZyYW1lcyB6b29tSW57MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX01MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHpvb21JbnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTUwJXtvcGFjaXR5OjF9fS5hbmltYXRlX196b29tSW57LXdlYmtpdC1hbmltYXRpb24tbmFtZTp6b29tSW47YW5pbWF0aW9uLW5hbWU6em9vbUlufUAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5Eb3duezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLC0xMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTEwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19QGtleWZyYW1lcyB6b29tSW5Eb3duezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLC0xMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTEwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19LmFuaW1hdGVfX3pvb21JbkRvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTp6b29tSW5Eb3duO2FuaW1hdGlvbi1uYW1lOnpvb21JbkRvd259QC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkxlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21JbkxlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX0uYW5pbWF0ZV9fem9vbUluTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21JbkxlZnQ7YW5pbWF0aW9uLW5hbWU6em9vbUluTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluUmlnaHR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsMCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21JblJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LDAsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsMCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19LmFuaW1hdGVfX3pvb21JblJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbUluUmlnaHQ7YW5pbWF0aW9uLW5hbWU6em9vbUluUmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIHpvb21JblVwezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDEwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwxMDAwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19QGtleWZyYW1lcyB6b29tSW5VcHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwxMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMTAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsLTYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsLTYwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSl9fS5hbmltYXRlX196b29tSW5VcHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21JblVwO2FuaW1hdGlvbi1uYW1lOnpvb21JblVwfUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0ezAle29wYWNpdHk6MX01MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgem9vbU91dHswJXtvcGFjaXR5OjF9NTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9dG97b3BhY2l0eTowfX0uYW5pbWF0ZV9fem9vbU91dHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21PdXQ7YW5pbWF0aW9uLW5hbWU6em9vbU91dH1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dERvd257NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwyMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21PdXREb3duezQwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19LmFuaW1hdGVfX3pvb21PdXREb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbU91dERvd247YW5pbWF0aW9uLW5hbWU6em9vbU91dERvd247LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0TGVmdHs0MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwwLDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwwLDApO3RyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwwLDApfX1Aa2V5ZnJhbWVzIHpvb21PdXRMZWZ0ezQwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LDAsMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9fS5hbmltYXRlX196b29tT3V0TGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21PdXRMZWZ0O2FuaW1hdGlvbi1uYW1lOnpvb21PdXRMZWZ0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgY2VudGVyfUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0UmlnaHR7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX19QGtleWZyYW1lcyB6b29tT3V0UmlnaHR7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwwLDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMSkgdHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX19LmFuaW1hdGVfX3pvb21PdXRSaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21PdXRSaWdodDthbmltYXRpb24tbmFtZTp6b29tT3V0UmlnaHQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGNlbnRlcn1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dFVwezQwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCw2MHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19QGtleWZyYW1lcyB6b29tT3V0VXB7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX0uYW5pbWF0ZV9fem9vbU91dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbU91dFVwO2FuaW1hdGlvbi1uYW1lOnpvb21PdXRVcDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5Eb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc2xpZGVJbkRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3NsaWRlSW5Eb3duey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVJbkRvd247YW5pbWF0aW9uLW5hbWU6c2xpZGVJbkRvd259QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5MZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc2xpZGVJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3NsaWRlSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVJbkxlZnQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVJbkxlZnR9QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzbGlkZUluUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19zbGlkZUluUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZUluUmlnaHQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVJblJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluVXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgc2xpZGVJblVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fc2xpZGVJblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVJblVwO2FuaW1hdGlvbi1uYW1lOnNsaWRlSW5VcH1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXREb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9fUBrZXlmcmFtZXMgc2xpZGVPdXREb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9fS5hbmltYXRlX19zbGlkZU91dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZU91dERvd247YW5pbWF0aW9uLW5hbWU6c2xpZGVPdXREb3dufUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dExlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfX1Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9fS5hbmltYXRlX19zbGlkZU91dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZU91dExlZnQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVPdXRMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9fUBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfX0uYW5pbWF0ZV9fc2xpZGVPdXRSaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnNsaWRlT3V0UmlnaHQ7YW5pbWF0aW9uLW5hbWU6c2xpZGVPdXRSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRVcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9fUBrZXlmcmFtZXMgc2xpZGVPdXRVcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9fS5hbmltYXRlX19zbGlkZU91dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVPdXRVcDthbmltYXRpb24tbmFtZTpzbGlkZU91dFVwfSIsIkBpbXBvcnQgXCJ+YW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW5cIjtcbi5wYWdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG59XG5cbi5kYXNoYm9hcmQge1xuICBtYXJnaW4tbGVmdDogMTklO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLypcbnAge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGUzMjQxO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4qL1xuLypcbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZGUzMjQxO1xufVxuLi1ib3gtc2QtZWZmZWN0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNnB4IDZweCA2cHggMnB4ICNkZDRiMzk7XG59XG4qL1xuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG4gIGNvbG9yOiByZ2IoMTE5LCAxMTksIDExOSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogNTBweCA0MXB4IDMwcHggNDFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCByZ2IoMTkgMTkgMjggLyAxMiUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLml0ZW06aG92ZXIgLmljb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWE1Zjtcbn1cbi5pdGVtOmhvdmVyIC5pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pY29ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbGluZS1oZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEzMHB4O1xufVxuLmljb24ge1xuICBjb2xvcjogI2ZmNWE1ZjtcbiAgZm9udC1zaXplOiA2OHB4O1xuICBsaW5lLWhlaWdodDogMTMwcHg7XG59XG5oNCB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5pdGVtIC5kZXRhaWxzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBsaW5lLWhlaWdodDogMjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRhc2hib2FyZCAuY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */", ".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"], data: { animation: [
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
    } }, directives: [_shared_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_4__["NavbarAdminComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".setting[_ngcontent-%COMP%] {\n  margin-left: 19%;\n}\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  color: #ffffff;\n  height: 50px;\n  text-align: center;\n  vertical-align: middle;\n  width: 100px;\n  border-radius: 20px;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  color: #484848;\n  font-weight: bold;\n  font-size: 30px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #484848;\n}\nform[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid rgb(235, 235, 235);\n  border-radius: 8px;\n  padding: 30px;\n  margin-bottom: 20px;\n}\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  color: #484848;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Nunito\";\n  color: rgb(72, 72, 72);\n  font-weight: 700;\n  line-height: 1.5;\n}\n.btn-header[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  font-weight: 800;\n}\n.btn-header[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  border: 1px solid rgb(255, 90, 95);\n  color: rgb(255, 90, 95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZyB7XG4gIG1hcmdpbi1sZWZ0OiAxOSU7XG59XG4uYnRuLWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNvbnRlbnQgaDIge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jb250ZW50IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNSwgMjM1LCAyMzUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5mb3JtIGg0IHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmZvcm0gbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBjb2xvcjogcmdiKDcyLCA3MiwgNzIpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmJ0bi1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uYnRuLWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDkwLCA5NSk7XG4gIGNvbG9yOiByZ2IoMjU1LCA5MCwgOTUpO1xufVxuIl19 */"] });


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
    } }, directives: [_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_1__["NavUserComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".page_content[_ngcontent-%COMP%]{\n    width: 20%;\n    height: 80vh;\n    padding: 50px 0;\n    font-size: 1vw;\n    margin: 90px 0 0 10%;\n    background: #DE3241;\n    box-sizing: border-box;\n    display: inline-block;\n    border-radius: 5px;\n}\n\n.terms[_ngcontent-%COMP%]{\n    width: 60%;\n    height: 80vh;\n    margin: 90px 0 0 30.5%;\n    background: rgba(255,255,255,0.9);\n    overflow: auto;\n    text-align:justify;\n    padding: 7px 20px;\n    border-top: 1vh solid rgba(255,255,255,0.9);\n    border-bottom: 1vh solid rgba(255,255,255,0.9);\n    display: inline-block;\n    border-radius: 5px;\n}\n\nh4[_ngcontent-%COMP%]{\n    font-family: 'Playfair Display';\n    color: #DE3241;\n    font-weight: 700;\n}\n\np[_ngcontent-%COMP%], .licence_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    font-size: 15px;\n    margin: 10px 15px;\n    font-weight: 500;\n    color: rgb(0,0,0);\n}\n\nsection[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    padding: 5px;\n}\n\nsection[_ngcontent-%COMP%]:target{\n    border: 1px solid #DE3241;\n}\n\n.btn[_ngcontent-%COMP%]{\n    font-size: 25px;\n    font-weight: 900;\n    width: 100%\n}\n\n.sidebar[_ngcontent-%COMP%]{\n    list-style: none;\n    padding-left: 0;\n}\n\n@media only screen and (max-width: 750px) {\n  .page_content[_ngcontent-%COMP%]{\n    display: none;\n  }\n  .terms[_ngcontent-%COMP%]{\n    width: 80%;\n    display: block;\n    margin: 90px 0 0 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5QyxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2Qsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoidGVybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhZ2VfY29udGVudHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgbWFyZ2luOiA5MHB4IDAgMCAxMCU7XG4gICAgYmFja2dyb3VuZDogI0RFMzI0MTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50ZXJtc3tcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBtYXJnaW46IDkwcHggMCAwIDMwLjUlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMXZoIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgICBib3JkZXItYm90dG9tOiAxdmggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5oNHtcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xuICAgIGNvbG9yOiAjREUzMjQxO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5wLCAubGljZW5jZV91bCBsaXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogcmdiKDAsMCwwKTtcbn1cbnNlY3Rpb257XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5zZWN0aW9uOnRhcmdldHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREUzMjQxO1xufVxuLmJ0bntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB3aWR0aDogMTAwJVxufVxuLnNpZGViYXJ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLnBhZ2VfY29udGVudHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC50ZXJtc3tcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogOTBweCAwIDAgMTAlO1xuICB9XG59XG4iXX0= */"] });


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
    } }, styles: [".box-part[_ngcontent-%COMP%]{\n    position: relative; \n    height: 453px;\n    width: 322px;\n    background: #ddd;\n    width: 80%;\n    height: 40%;\n    border-radius: 10px;\n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\n}\n.title[_ngcontent-%COMP%]\n{\n    padding-top: 20px;\n    color: black;\n}\n.text[_ngcontent-%COMP%]{\n    margin:20px 0px;\n    color: black;\n    padding-bottom: 10px  ;\n}\nimg[_ngcontent-%COMP%]\n{\n    position: relative;\n    margin-top: 30px;\n    width: 186px;\n    height: 186px;\n    \n    border-radius: 50%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUZBQXFGO0FBQ3pGO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTs7SUFFYixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6ImF1dGhvci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LXBhcnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBoZWlnaHQ6IDQ1M3B4O1xuICAgIHdpZHRoOiAzMjJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAycHggcmdiYSg5NSwgOTMsIDkzLCAwLjM5KSwgLTRweCAtNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnRpdGxlXG57XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnRleHR7XG4gICAgbWFyZ2luOjIwcHggMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAgO1xufVxuaW1nXG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDE4NnB4O1xuICAgIGhlaWdodDogMTg2cHg7XG4gICAgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG59Il19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".top-category[_ngcontent-%COMP%] {\n    font-family: 'PT Sans', sans-serif;\n}\n\n.italic[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-family: 'Playfair Display';\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 48px;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n.border[_ngcontent-%COMP%] {\n    background-color: #121212;\n    width: 100px;\n    height: 2px;\n}\n\n.top-category[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 230px;\n    width: 100%;\n}\n\n.top-category[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, .4);\n    position: absolute;\n    width: 100%;\n    height: 230px\n}\n\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    bottom: 148px;\n    left: 43%;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n}\n\n.top-category[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]::after {\n    border-bottom: 25px solid #DE3241;\n}\n\n.top-category[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]::after {\n    border-bottom: 25px solid #53877A\n}\n\n.card-body[_ngcontent-%COMP%] {\n    height: 150px;\n}\n\n.top-category[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]::after {\n    border-bottom: 25px solid #F5BF56\n}\n\n.bg-bink[_ngcontent-%COMP%] {\n    background-color: #DE3241;\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n    background-color: #53877A;\n}\n\n.bg-yellow[_ngcontent-%COMP%] {\n    background-color: #F5BF56;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdG9wLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiaG9tZS10b3AtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY2F0ZWdvcnkge1xuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5pdGFsaWMge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ib3JkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMnB4O1xufVxuXG4udG9wLWNhdGVnb3J5IGltZyB7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRvcC1jYXRlZ29yeSAub3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjMwcHhcbn1cblxuLnRvcC1jYXRlZ29yeSAuY2FyZC1ib2R5OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNDhweDtcbiAgICBsZWZ0OiA0MyU7XG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG9wLWNhdGVnb3J5IC5jYXJkLWJvZHk6OmFmdGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkICNERTMyNDE7XG59XG5cbi50b3AtY2F0ZWdvcnkgLnR3bzo6YWZ0ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgIzUzODc3QVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4udG9wLWNhdGVnb3J5IC50aHJlZTo6YWZ0ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgI0Y1QkY1NlxufVxuXG4uYmctYmluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFMzI0MTtcbn1cblxuLmJnLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Mzg3N0E7XG59XG5cbi5iZy15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUJGNTY7XG59XG4iXX0= */"] });


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
    } }, styles: [".modal-body[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  .modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n  \n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 15rem auto;\n  }\n  \n  .modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCIiwiZmlsZSI6ImJvb2stZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubW9kYWwtYm9keSBidXR0b24ge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgXG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIG1hcmdpbjogMTVyZW0gYXV0bztcbiAgfVxuICBcbiAgLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICB9XG4gICJdfQ== */"] });


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
AboutHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutHeaderComponent, selectors: [["app-about-header"]], decls: 7, vars: 0, consts: [[1, "about-us"], [1, "overlay", "d-flex", "justify-content-center", "align-items-center"], [1, "capation"], [1, "text-white"]], template: function AboutHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home/About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-us[_ngcontent-%COMP%] {\n  height: 75vh;\n  background-image: url(\"/assets/user/profile/header-photo.jpg\");\n  position: relative;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: \"Nunito\";\n  color: #ffffff;\n  font-weight: bold;\n  line-height: 1.2;\n}\nh2[_ngcontent-%COMP%] {\n  color: #484848;\n  font-family: \"Nunito\";\n  line-height: 1.2;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLDhEQUE4RDtFQUM5RCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFib3V0LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXVzIHtcbiAgaGVpZ2h0OiA3NXZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3VzZXIvcHJvZmlsZS9oZWFkZXItcGhvdG8uanBnXCIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5oMiB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbiJdfQ== */"] });


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
    } }, styles: [".main[_ngcontent-%COMP%] \n{\n    margin-top: 20px;\n    margin-left: 20px;\n    width: 750px;\n    height: 200px;\n    padding-top: 10px;\n    \n    box-shadow: 4px 4px 4px 2px rgba(95, 93, 93, 0.39), -4px -4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n}\n\n.image[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    float:left; \n    background:Red;\n    width:20%;\n    height:170px;\n}\n\n.info1[_ngcontent-%COMP%]{\n    margin-left: 10px;\n\n    float:left; \n    \n    width:49%;\n    height:170px;\n    padding-top: 20px;\n    padding-left: 10px;\n}\n\n.info2[_ngcontent-%COMP%]{\n    margin-right: 10px;\n    float:right;\n    \n    width:25%;\n    height:170px;\n}\n\nimg[_ngcontent-%COMP%]{\n    width:100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\np[_ngcontent-%COMP%]{\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQjswQkFDc0I7SUFDdEIscUZBQXFGO0lBQ3JGLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksaUJBQWlCOztJQUVqQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJhdXRob3ItYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4gXG57XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogNzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4IHJnYmEoOTUsIDkzLCA5MywgMC4zOSksIC00cHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZsb2F0OmxlZnQ7IFxuICAgIGJhY2tncm91bmQ6UmVkO1xuICAgIHdpZHRoOjIwJTtcbiAgICBoZWlnaHQ6MTcwcHg7XG59XG4uaW5mbzF7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICBmbG9hdDpsZWZ0OyBcbiAgICAvKiBiYWNrZ3JvdW5kOkdyZWVuOyAqL1xuICAgIHdpZHRoOjQ5JTtcbiAgICBoZWlnaHQ6MTcwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmluZm8ye1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmbG9hdDpyaWdodDtcbiAgICAvKiBiYWNrZ3JvdW5kOmJsdWU7ICovXG4gICAgd2lkdGg6MjUlO1xuICAgIGhlaWdodDoxNzBweDtcbn1cblxuaW1ne1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbnB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_access_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user-access-service.service */ "VDpO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/nav-user/nav-user.component */ "/aK8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["l_pass"];
const _c1 = ["s_pass"];
const _c2 = ["s_pass_confirm"];
const _c3 = ["login_toggle"];
const _c4 = ["signup_toggle"];
const _c5 = ["login_form"];
const _c6 = ["signup_form"];
function LoginRegisterComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wrong username or password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginRegisterComponent {
    constructor(userService, router) {
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
    }
    ngOnDestroy() {
        document.body.className = "";
    }
}
LoginRegisterComponent.ɵfac = function LoginRegisterComponent_Factory(t) { return new (t || LoginRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_access_service_service__WEBPACK_IMPORTED_MODULE_3__["UserAccessServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginRegisterComponent, selectors: [["app-login-register"]], viewQuery: function LoginRegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.password_login = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.password_signup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.confirm_password_signup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.login_toggle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.signup_toggle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.login_form = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.signup_form = _t.first);
    } }, decls: 60, vars: 5, consts: [[1, "content"], [1, "form-modal"], [1, "form-toggle"], ["id", "login-toggle", 3, "click"], ["login_toggle", ""], ["id", "signup-toggle", 3, "click"], ["signup_toggle", ""], ["id", "login-form"], ["login_form", ""], ["src", "assets/icon.ico"], ["method", "POST", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Username", "required", "", "formControlName", "userName", 1, "w-100"], ["type", "password", "id", "l_pass", "placeholder", "Password", "required", "", "minlength", "8", "formControlName", "password", 1, "w-100"], ["l_pass", ""], ["type", "checkbox", "id", "l_box", 1, "ml3", "mr-2", "mb-2", "mt-2", 3, "change"], ["l_box", ""], [1, "mb-4", "mt-3"], ["class", "ml3 mr-2 mb-2 mt-2", "style", "color: red;", 4, "ngIf"], ["type", "submit", 1, "btn", "login", 3, "disabled"], ["type", "button", 1, "btn2", "-box-sd-effect"], ["aria-hidden", "true", 1, "fab", "fa-google", "fa-lg"], [1, "d-inline-block", "w-45", "m-0"], ["type", "button", 1, "btn2", "-box-sd-effect", "mt-3"], [1, "fab", "fa-facebook-square", "fa-lg"], ["id", "signup-form"], ["signup_form", ""], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "First name", "required", "", "formControlName", "fName", 1, "w-45", "ml3"], ["type", "text", "placeholder", "Last name", "required", "", "formControlName", "lName", 1, "w-45", "ml5"], ["type", "text", "placeholder", "Username", "required", "", "formControlName", "userName", 1, "w-45", "ml3"], ["type", "email", "placeholder", "Email", "required", "", "formControlName", "email", 1, "w-45", "ml5"], ["type", "password", "name", "s_pass", "placeholder", "Password", "required", "", "formControlName", "password", 1, "w-45", "ml3"], ["s_pass", ""], ["type", "password", "name", "s_pass", "placeholder", "Confirm password", "required", "", "formControlName", "confirmPassword", 1, "w-45", "ml5"], ["s_pass_confirm", ""], ["type", "checkbox", "id", "s_box", 1, "ml5", "mr-2", "mb-2", "mt-2", 3, "change"], ["s_box", ""], [1, "mt-3", "ml-2"], ["type", "submit", 1, "btn", "signup", "mb-2", 3, "disabled"], [1, "ml3", "mr-2", "mb-2", "mt-2", 2, "color", "red"]], template: function LoginRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginRegisterComponent_Template_button_click_4_listener() { return ctx.toggleLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginRegisterComponent_Template_button_click_7_listener() { return ctx.toggleSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginRegisterComponent_Template_form_ngSubmit_13_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function LoginRegisterComponent_Template_input_change_17_listener($event) { return ctx.login_showPassword_changed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LoginRegisterComponent_p_21_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "sign in with google");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "sign in with facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginRegisterComponent_Template_form_ngSubmit_35_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function LoginRegisterComponent_Template_input_change_45_listener($event) { return ctx.signUp_showPassword_changed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "sign up with google");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "sign up with facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userPassStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
    } }, directives: [_shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_5__["NavUserComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\n  padding-top: 15vh;\n  background-image: url(\"/assets/user/login/back.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.form-modal[_ngcontent-%COMP%]{\n    position:relative;\n    width:50%;\n    height:580px;\n    font-size: 14px;\n    left:50%;\n    transform:translateX(-50%);\n    background:rgba(255, 255, 255, 0.85);\n    border-radius: 20px;\n    box-shadow:0 5px 15px 0px rgba(0, 0, 0,0.4)\n}\n\n.form-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    cursor: pointer;\n    position: relative;\n    text-transform: capitalize;\n    font-size:16px;\n    z-index: 2;\n    outline: none;\n    background:white;\n    border: 1px solid #DE3241;\n    transition:0.2s;\n}\n\n.form-modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n    border-radius: 20px;\n    border:none;\n    font-weight: bold;\n    padding:0.8em 1em 0.8em 1em!important;\n    transition:0.5s;\n    margin-bottom:7px;\n    margin-top:7px;\n}\n\n.form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .form-modal[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{\n    background:#DE3241;\n    color:#fff;\n}\n\n.form-modal[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover, .form-modal[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]:hover{\n    background:#222;\n}\n\n.form-toggle[_ngcontent-%COMP%]{\n    position: relative;\n    width:100%;\n    height:auto;\n}\n\n.form-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width:50%;\n    float:left;\n    padding:10px;\n    margin-bottom:20px;\n    border:none;\n    transition: 0.2s;\n    font-weight: bold;\n}\n\n.form-modal[_ngcontent-%COMP%]   #login-toggle[_ngcontent-%COMP%]{\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n}\n\n.form-modal[_ngcontent-%COMP%]   #signup-toggle[_ngcontent-%COMP%]{\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n}\n\n#login-toggle[_ngcontent-%COMP%]{\n    background:#DE3241;\n    color:#ffff;\n}\n\n.form-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\n    position: relative;\n    width:90%;\n    height:70vh;\n    left:50%;\n    transform:translateX(-50%);\n}\n\n#login-form[_ngcontent-%COMP%], #signup-form[_ngcontent-%COMP%]{\n    position:relative;\n    width:100%;\n    height:auto;\n    padding-bottom:1em;\n}\n\n#signup-form[_ngcontent-%COMP%]{\n    display: none;\n}\n\n#login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #signup-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width:100%;\n    margin-top:0.5em;\n    padding:0.6em;\n}\n\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    position: relative;\n    font-size: 16px;\n    padding:10px 20px;\n    margin-top:0.6em;\n    margin-bottom:0.6em;\n    border-radius: 20px;\n    border:none;\n    background:#fff;\n    outline:none;\n    font-weight: bold;\n    transition:0.4s;\n}\n\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active{\n    transform:scaleX(1.03);\n    border: 1px solid #de3240c9;\n}\n\n.form-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{\n    color:rgb(99, 98, 98);\n}\n\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color:#DE3241;\n    text-decoration: none;\n    transition:0.2s;\n}\n\n.form-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color:#222;\n}\n\n.form-modal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n    left:10%;\n    top:50%;\n    transform:translateX(-10%) translateY(-50%);\n    align-self: center;\n}\n\n.fa-google[_ngcontent-%COMP%]{\n    color:#dd4b39;\n}\n\n.fa-facebook-square[_ngcontent-%COMP%]{\n    color:#3b5998;\n}\n\n.-box-sd-effect[_ngcontent-%COMP%]:hover{\n    box-shadow: 2px 4px 4px #dd4b39\n}\n\n.w-45[_ngcontent-%COMP%]{\n    width:45%;\n}\n\n.w-100[_ngcontent-%COMP%]{\n    width:100%\n}\n\n.ml3[_ngcontent-%COMP%]{\n    margin-left: 3%;\n}\n\n.ml5[_ngcontent-%COMP%]{\n    margin-left: 5%;\n}\n\n@media only screen and (max-width:600px){\n    .form-modal[_ngcontent-%COMP%]{\n        width:100%;\n    }\n}\n\nimg[_ngcontent-%COMP%]{\n     width: 10%;\n     margin-left: 45%;\n     animation: hu__hu__ 1 2s ease-in-out\n}\n\n@keyframes hu__hu__ {\n    25% { transform: translateY(-10px) }\n    50% { transform: translateY(10px) }\n    75% { transform: translateY(-10px) }\n}\n\nimg[_ngcontent-%COMP%]:hover{\n    animation: rotation 5s 1 linear;\n}\n\n@keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n\n@media only screen and (max-width:600px){\n    i[_ngcontent-%COMP%]{\n        display: none!important;\n    }\n}\n\n@media only screen and (max-width:960px){\n  .content[_ngcontent-%COMP%]{\n    overflow: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQjs7O0tBR0MsQ0FBQztBQUNOOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxRQUFRO0lBQ1IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFHQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCwyQ0FBMkM7SUFDM0Msa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUNBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtLQUNLLFVBQVU7S0FDVixnQkFBZ0I7S0FDaEI7QUFDTDs7QUFDQTtJQUNJLE1BQU0sNkJBQTZCO0lBQ25DLE1BQU0sNEJBQTRCO0lBQ2xDLE1BQU0sNkJBQTZCO0FBQ3ZDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGOztBQUNGO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6ImxvZ2luLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxNXZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3VzZXIvbG9naW4vYmFjay5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvcm0tbW9kYWx7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgd2lkdGg6NTAlO1xuICAgIGhlaWdodDo1ODBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGVmdDo1MCU7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLypib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgICovYm94LXNoYWRvdzowIDVweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsMC40KVxufVxuXG4uZm9ybS1tb2RhbCBidXR0b257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREUzMjQxO1xuICAgIHRyYW5zaXRpb246MC4ycztcbn1cblxuLmZvcm0tbW9kYWwgLmJ0bntcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6MC44ZW0gMWVtIDAuOGVtIDFlbSFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIG1hcmdpbi1ib3R0b206N3B4O1xuICAgIG1hcmdpbi10b3A6N3B4O1xufVxuXG4uZm9ybS1tb2RhbCAubG9naW4gLCAuZm9ybS1tb2RhbCAuc2lnbnVwe1xuICAgIGJhY2tncm91bmQ6I0RFMzI0MTtcbiAgICBjb2xvcjojZmZmO1xufVxuXG4uZm9ybS1tb2RhbCAubG9naW46aG92ZXIgLCAuZm9ybS1tb2RhbCAuc2lnbnVwOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IzIyMjtcbn1cblxuLmZvcm0tdG9nZ2xle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDphdXRvO1xufVxuXG4uZm9ybS10b2dnbGUgYnV0dG9ue1xuICAgIHdpZHRoOjUwJTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb3JtLW1vZGFsICNsb2dpbi10b2dnbGV7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuLmZvcm0tbW9kYWwgI3NpZ251cC10b2dnbGV7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cblxuI2xvZ2luLXRvZ2dsZXtcbiAgICBiYWNrZ3JvdW5kOiNERTMyNDE7XG4gICAgY29sb3I6I2ZmZmY7XG59XG5cbi5mb3JtLW1vZGFsIGZvcm17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOjkwJTtcbiAgICBoZWlnaHQ6NzB2aDtcbiAgICBsZWZ0OjUwJTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuI2xvZ2luLWZvcm0gLCAjc2lnbnVwLWZvcm17XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbToxZW07XG59XG5cbiNzaWdudXAtZm9ybXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbiNsb2dpbi1mb3JtIGJ1dHRvbiAsICNzaWdudXAtZm9ybSBidXR0b257XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOjAuNWVtO1xuICAgIHBhZGRpbmc6MC42ZW07XG59XG5cbi5mb3JtLW1vZGFsIGlucHV0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDowLjZlbTtcbiAgICBtYXJnaW4tYm90dG9tOjAuNmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOjAuNHM7XG59XG5cbi5mb3JtLW1vZGFsIGlucHV0OmZvY3VzICwgLmZvcm0tbW9kYWwgaW5wdXQ6YWN0aXZle1xuICAgIHRyYW5zZm9ybTpzY2FsZVgoMS4wMyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlMzI0MGM5O1xufVxuXG4uZm9ybS1tb2RhbCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcbiAgICBjb2xvcjpyZ2IoOTksIDk4LCA5OCk7XG59XG5cblxuLmZvcm0tbW9kYWwgcHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLW1vZGFsIHAgYXtcbiAgICBjb2xvcjojREUzMjQxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOjAuMnM7XG59XG5cbi5mb3JtLW1vZGFsIHAgYTpob3ZlcntcbiAgICBjb2xvcjojMjIyO1xufVxuXG5cbi5mb3JtLW1vZGFsIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OjEwJTtcbiAgICB0b3A6NTAlO1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZmEtZ29vZ2xle1xuICAgIGNvbG9yOiNkZDRiMzk7XG59XG5cbi5mYS1mYWNlYm9vay1zcXVhcmV7XG4gICAgY29sb3I6IzNiNTk5ODtcbn1cblxuLi1ib3gtc2QtZWZmZWN0OmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNkZDRiMzlcbn1cblxuLnctNDV7XG4gICAgd2lkdGg6NDUlO1xufVxuLnctMTAwe1xuICAgIHdpZHRoOjEwMCVcbn1cblxuLm1sM3tcbiAgICBtYXJnaW4tbGVmdDogMyU7XG59XG4ubWw1e1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAuZm9ybS1tb2RhbHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG59XG5cbmltZ3tcbiAgICAgd2lkdGg6IDEwJTtcbiAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgICAgYW5pbWF0aW9uOiBodV9faHVfXyAxIDJzIGVhc2UtaW4tb3V0XG59XG5Aa2V5ZnJhbWVzIGh1X19odV9fIHtcbiAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgfVxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgfVxufVxuXG5pbWc6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiA1cyAxIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICB9XG4gIH1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XG4gICAgaXtcbiAgICAgICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KXtcbiAgLmNvbnRlbnR7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, styles: [".custom-background[_ngcontent-%COMP%]{\n    background-color:  rgba(0,0,0,0.8);\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0NBQ3JDIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsMCwwLDAuOCk7XG4gfVxuIl19 */"] });


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
    } }, styles: ["body[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n\n.content[_ngcontent-%COMP%]{\n  min-height: 100vh;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  background-color: rgba(00, 00, 00, 0.6);\n  z-index: 999;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.kinetic[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 44%;\n  top: 38%;\n}\n\n.kinetic[_ngcontent-%COMP%]::after, .kinetic[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 50px solid transparent;\n  border-bottom-color: #DE3241;\n  animation: rotateA 1.5s linear infinite 0.4s;\n}\n\n.kinetic[_ngcontent-%COMP%]::before {\n  transform: rotate(90deg);\n  animation: rotateB 1.5s linear infinite;\n}\n\n@keyframes rotateA {\n  0%,\n  25% {\n    transform: rotate(0deg);\n  }\n\n  50%,\n  75% {\n    transform: rotate(180deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotateB {\n  0%,\n  25% {\n    transform: rotate(90deg);\n  }\n\n  50%,\n  75% {\n    transform: rotate(270deg);\n  }\n\n  100% {\n    transform: rotate(450deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxRQUFRO0VBQ1IsU0FBUztFQUNULDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFOztJQUVFLHVCQUF1QjtFQUN6Qjs7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFOztJQUVFLHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJ1c2VyLWxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5jb250ZW50e1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAwLCAwMCwgMDAsIDAuNik7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5raW5ldGljIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBsZWZ0OiA0NCU7XG4gIHRvcDogMzglO1xufVxuXG4ua2luZXRpYzo6YWZ0ZXIsXG4ua2luZXRpYzo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjREUzMjQxO1xuICBhbmltYXRpb246IHJvdGF0ZUEgMS41cyBsaW5lYXIgaW5maW5pdGUgMC40cztcbn1cblxuLmtpbmV0aWM6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgYW5pbWF0aW9uOiByb3RhdGVCIDEuNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZUEge1xuICAwJSxcbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDUwJSxcbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZUIge1xuICAwJSxcbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cblxuICA1MCUsXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZyk7XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_nav_user_nav_user_component__WEBPACK_IMPORTED_MODULE_9__["NavUserComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRating"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _rating_det_rating_det_component__WEBPACK_IMPORTED_MODULE_12__["RatingDetComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_13__["HomeFooterComponent"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_14__["UserLoadingComponent"]], styles: ["@import url(http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n\n.book_show[_ngcontent-%COMP%]{\n    margin: 90px 0 0 5%;\n}\n\n.desc[_ngcontent-%COMP%]{\n    min-height: 28vh;\n}\n\n.book_cover[_ngcontent-%COMP%]{\n    width: 15%;\n    margin-top: 20px;\n    position: absolute;\n    text-align: center;\n}\n\n.book_cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n}\n\n.details[_ngcontent-%COMP%]{\n    margin-left: 17%;\n    padding: 15px 20px 0 10px;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-family: 'Playfair Display';\n    margin-bottom: 20px;\n    display: block;\n    text-align: center;\n}\n\n.font20[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n\n.font15[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: rgb(88, 88, 88);\n}\n\n.font17[_ngcontent-%COMP%]{\n    font-size: 17px;\n}\n\np[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, .colorBlack[_ngcontent-%COMP%]{\n    color: black;\n}\n\nngb-rating[_ngcontent-%COMP%]{\n    outline: none;\n}\n\n.reviews[_ngcontent-%COMP%]{\n    width: 90%;\n    margin-left: 65px;\n    margin-top: 9%;\n}\n\n.my_review_submit[_ngcontent-%COMP%]{\n    float: right;\n}\n\n.rev_img[_ngcontent-%COMP%]{\n    border-radius: 50%;\n    width: 8%;\n    position: absolute;\n}\n\n.review_body[_ngcontent-%COMP%]{\n    margin-left: 10%;\n    width: 90%;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style: none;\n    margin-top: 80px;\n    padding: 0;\n}\n\nli[_ngcontent-%COMP%]{\n\n    margin-left: 10%;\n    border: 1px solid rgb(182, 182, 182);\n    list-style: none;\n    margin-top: 10px;\n    padding: 5px;\n    display: flex;\n}\n\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 6%;\n    border-radius: 50%;\n    display: inline-block;\n}\n\nli[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    display: inline;\n    margin-left: 1%;\n    align-self: center;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]{\n  background-color: #DE3241;\n}\n\n.dropdown-item[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\nfieldset[_ngcontent-%COMP%], label[_ngcontent-%COMP%] { margin: 0; padding: 0; }\n\nbody[_ngcontent-%COMP%]{ margin: 20px; }\n\nh1[_ngcontent-%COMP%] { font-size: 1.5em; margin: 10px; }\n\n\n\n.rating[_ngcontent-%COMP%] {\n  border: none;\n  float: left;\n}\n\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] { display: none; }\n\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:before {\n  margin: 5px;\n  font-size: 1.2em;\n  font-family: FontAwesome;\n  display: inlEMine-block;\n  content: \"\\f005\";\n}\n\n.rating[_ngcontent-%COMP%] {\n  content: \"\\f089\";\n  position: absolute;\n}\n\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: #ddd;\n float: right;\n}\n\n.rating_field[_ngcontent-%COMP%]{\n    width: 84%;\n}\n\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] { color: #FFD700;  }\n\n\n\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] { color: #FFED85;  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GOztBQUVuRjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0IsU0FBUyxFQUFFLFVBQVUsRUFBRTs7QUFDekMsTUFBTSxZQUFZLEVBQUU7O0FBQ3BCLEtBQUssZ0JBQWdCLEVBQUUsWUFBWSxFQUFFOztBQUVyQyxzQ0FBc0M7O0FBRXRDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0IsYUFBYSxFQUFFOztBQUNqQztFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztDQUNaLFlBQVk7QUFDYjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTs7OENBRThDLGNBQWMsR0FBRzs7QUFBRSxpQ0FBaUM7O0FBRWxHOzs7Z0RBR2dELGNBQWMsR0FBRyIsImZpbGUiOiJib29rLWRldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cDovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XG5cbi5ib29rX3Nob3d7XG4gICAgbWFyZ2luOiA5MHB4IDAgMCA1JTtcbn1cbi5kZXNje1xuICAgIG1pbi1oZWlnaHQ6IDI4dmg7XG59XG4uYm9va19jb3ZlcntcbiAgICB3aWR0aDogMTUlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib29rX2NvdmVyIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRldGFpbHN7XG4gICAgbWFyZ2luLWxlZnQ6IDE3JTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMCAxMHB4O1xufVxuaDJ7XG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvbnQyMHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uZm9udDE1e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xufVxuLmZvbnQxN3tcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5wLGE6aG92ZXIsLmNvbG9yQmxhY2t7XG4gICAgY29sb3I6IGJsYWNrO1xufVxubmdiLXJhdGluZ3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnJldmlld3N7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgICBtYXJnaW4tdG9wOiA5JTtcbn1cbi5teV9yZXZpZXdfc3VibWl0e1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5yZXZfaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogOCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJldmlld19ib2R5e1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgd2lkdGg6IDkwJTtcbn1cbnVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxubGl7XG5cbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODIsIDE4MiwgMTgyKTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5saSBpbWd7XG4gICAgd2lkdGg6IDYlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5saSBwe1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmt7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERTMyNDE7XG59XG5cbi5kcm9wZG93bi1pdGVte1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZpZWxkc2V0LCBsYWJlbCB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuYm9keXsgbWFyZ2luOiAyMHB4OyB9XG5oMSB7IGZvbnQtc2l6ZTogMS41ZW07IG1hcmdpbjogMTBweDsgfVxuXG4vKioqKioqIFN0eWxlIFN0YXIgUmF0aW5nIFdpZGdldCAqKioqKi9cblxuLnJhdGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yYXRpbmcgPiBpbnB1dCB7IGRpc3BsYXk6IG5vbmU7IH1cbi5yYXRpbmcgPiBsYWJlbDpiZWZvcmUge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBkaXNwbGF5OiBpbmxFTWluZS1ibG9jaztcbiAgY29udGVudDogXCJcXGYwMDVcIjtcbn1cblxuLnJhdGluZyB7XG4gIGNvbnRlbnQ6IFwiXFxmMDg5XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJhdGluZyA+IGxhYmVsIHtcbiAgY29sb3I6ICNkZGQ7XG4gZmxvYXQ6IHJpZ2h0O1xufVxuLnJhdGluZ19maWVsZHtcbiAgICB3aWR0aDogODQlO1xufVxuXG5cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsIC8qIHNob3cgZ29sZCBzdGFyIHdoZW4gY2xpY2tlZCAqL1xuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsIC8qIGhvdmVyIGN1cnJlbnQgc3RhciAqL1xuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7IGNvbG9yOiAjRkZENzAwOyAgfSAvKiBob3ZlciBwcmV2aW91cyBzdGFycyBpbiBsaXN0ICovXG5cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsIC8qIGhvdmVyIGN1cnJlbnQgc3RhciB3aGVuIGNoYW5naW5nIHJhdGluZyAqL1xuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3Zlcixcbi5yYXRpbmcgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCwgLyogbGlnaHRlbiBjdXJyZW50IHNlbGVjdGlvbiAqL1xuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsIHsgY29sb3I6ICNGRkVEODU7ICB9XG4iXX0= */"], data: { animation: [
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_4__["DeleteComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"], _shared_empty_empty_component__WEBPACK_IMPORTED_MODULE_6__["EmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-left: 15%;\n}\n\nbutton[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n\n\n.top-part[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  height: 200px;\n}\n\n.top-part[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 2px 0 rgba(66, 66, 66, 0.2),\n    0 4px 5px 0 rgba(66, 66, 66, 0.2);\n}\n\n.top-part[_ngcontent-%COMP%]   .author-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  color: white;\n}\n\n.top-part[_ngcontent-%COMP%]   .add-author[_ngcontent-%COMP%] {\n  background-color: #de3242;\n  width: 50px;\n  height: 50px;\n  font-size: 20px;\n  float: right;\n  border-radius: 50%;\n  color: white;\n  border: none;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 4px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\n.search-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  transition: all 0.5s ease-in-out;\n}\n\n\n\n.author-imag[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n\n@media only screen and (max-width: 500px) {\n  .author[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 21%;\n  }\n\n  .author-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .orm-outline[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  transition: all 0.5s ease-in-out;\n}\n\n.table-dark[_ngcontent-%COMP%] {\n  background-color: #24324a;\n}\n\n\n\n.custom-bg[_ngcontent-%COMP%] {\n  background-color: #24324a;\n}\n\n.custom-txt[_ngcontent-%COMP%] {\n  color: #24324a;\n}\n\n.table-dark[_ngcontent-%COMP%] {\n  background-color: #24324a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcnMtbGlzdC1mb3ItYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQSxjQUFjOztBQUNkO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTtxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQSxZQUFZOztBQUNaO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJhdXRob3JzLWxpc3QtZm9yLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG59XG5cbmJ1dHRvbjpmb2N1cyxcbmlucHV0OmZvY3VzLFxuc3ZnOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLypUb3AgU2VjdGlvbiovXG4udG9wLXBhcnQge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi50b3AtcGFydCBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIC5pbnB1dC1ncm91cCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIGlucHV0LFxuLnRvcC1wYXJ0IC5hdXRob3Itc2VhcmNoIGJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoNjYsIDY2LCA2NiwgMC4yKSxcbiAgICAwIDRweCA1cHggMCByZ2JhKDY2LCA2NiwgNjYsIDAuMik7XG59XG5cbi50b3AtcGFydCAuYXV0aG9yLXNlYXJjaCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzMjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b3AtcGFydCAuYWRkLWF1dGhvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTMyNDI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnNlYXJjaC1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4vKlRhYmxlIFNlY3Rpb24qL1xuXG4uYXV0aG9yLWltYWcge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmF1dGhvciAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIxJTtcbiAgfVxuXG4gIC5hdXRob3Itc2VhcmNoIC5pbnB1dC1ncm91cCxcbiAgLm9ybS1vdXRsaW5lIHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxudGFibGUgdGQgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi50YWJsZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzI0YTtcbn1cbi8qT3VyIGNvbG9yKi9cbi5jdXN0b20tYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMjRhO1xufVxuLmN1c3RvbS10eHQge1xuICBjb2xvcjogIzI0MzI0YTtcbn1cbi50YWJsZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzI0YSAhaW1wb3J0YW50O1xufVxuIl19 */", ".content-page[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".book-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 40px;\n  }\n\n  .book-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 50%;\n    float: right;\n  }\n\n  .field[_ngcontent-%COMP%] {\n    margin: 10px 0 20px 2%;\n    width: 48%;\n    display: inline-block;\n  }\n\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  form[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    color: #de3242;\n    margin: 40px auto;\n  }\n\n  @media (min-width: 576px){\n    .modal-dialog[_ngcontent-%COMP%] {\n      max-width: 800px;\n      margin: 1.75rem auto;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTtNQUNFLGdCQUFnQjtNQUNoQixvQkFBb0I7SUFDdEI7RUFDRiIsImZpbGUiOiJib29rLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stZm9ybSBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cblxuICAuYm9vay1mb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAuZmllbGQge1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHggMiU7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIGZvcm0gc3ZnIHtcbiAgICBjb2xvcjogI2RlMzI0MjtcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XG4gICAgfVxuICB9XG4iXX0= */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_user_loading_user_loading_component__WEBPACK_IMPORTED_MODULE_4__["UserLoadingComponent"]], styles: [".container-home[_ngcontent-%COMP%] {\n    max-width: 90%;\n    margin: auto;\n    padding: 0 20px !important;\n}\n\n.popular-book[_ngcontent-%COMP%] {\n    font-family: 'PT Sans', sans-serif;\n}\n\n.popular-book[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 230px !important;\n}\n\n.popular-book[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #88807C;\n}\n\n.popular-book[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\n    color: #DE3241;\n    font-weight: bold;\n}\n\n.popular-book[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #DE3241;\n    font-size: 20px;\n}\n\n\n\n.subscribe[_ngcontent-%COMP%] {\n    background-color: #DE3242;\n}\n\n.border[_ngcontent-%COMP%] {\n    background-color: #121212;\n    width: 100px;\n    height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcG9wdWxhci1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCOztBQUV2QjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFHQSx3QkFBd0I7O0FBRXhCO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoiaG9tZS1wb3B1bGFyLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcG9wdWxhciBCb29rIFNlY3Rpb24qL1xuXG4uY29udGFpbmVyLWhvbWUge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcbn1cblxuLnBvcHVsYXItYm9vayB7XG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHVsYXItYm9vayBpbWcge1xuICAgIGhlaWdodDogMjMwcHggIWltcG9ydGFudDtcbn1cblxuLnBvcHVsYXItYm9vayBwIHtcbiAgICBjb2xvcjogIzg4ODA3Qztcbn1cblxuLnBvcHVsYXItYm9vayBwOmxhc3Qtb2YtdHlwZSB7XG4gICAgY29sb3I6ICNERTMyNDE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb3B1bGFyLWJvb2sgaSB7XG4gICAgY29sb3I6ICNERTMyNDE7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi8qc3RheSBpbiB0b3VjaCBzZWN0aW9uKi9cblxuLnN1YnNjcmliZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFMzI0Mjtcbn1cblxuLmJvcmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG59Il19 */"] });


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