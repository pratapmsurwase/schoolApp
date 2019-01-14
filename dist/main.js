(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _student_studentdata_studentdata_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/studentdata/studentdata.component */ "./src/app/student/studentdata/studentdata.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_10__["UserprofileComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
                _student_studentdata_studentdata_component__WEBPACK_IMPORTED_MODULE_14__["StudentdataComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                    multi: true },
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _shared_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userservice.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userservice.delteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonederq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonederq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _student_studentdata_studentdata_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student/studentdata/studentdata.component */ "./src/app/student/studentdata/studentdata.component.ts");






var appRoutes = [
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] }]
    },
    {
        path: 'userprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_2__["UserprofileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    { path: 'studentdata', component: _student_studentdata_studentdata_component__WEBPACK_IMPORTED_MODULE_5__["StudentdataComponent"] },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
];


/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            fullName: '',
            email: '',
            password: '',
            DOB: '',
            Address: '',
            ParentPhone1: '',
            ParentPhone2: '',
        };
        this.noAutheader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    //HTTP methods
    UserService.prototype.postUser = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/register', user, this.noAutheader);
    };
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/authenticate', authCredentials, this.noAutheader);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/userprofile');
    };
    //Helper Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.delteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
        }
        else {
            false;
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/student/studentdata/studentdata.component.css":
/*!***************************************************************!*\
  !*** ./src/app/student/studentdata/studentdata.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/studentdata/studentdata.component.html":
/*!****************************************************************!*\
  !*** ./src/app/student/studentdata/studentdata.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf = \"studentDetail\" class=\"table-fill\" >\n  <!-- <ul class=\"nav navbar-nav navbar-right\">\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/studentdata']\">Studnet Data</a></li>\n     </ul> -->\n<thead>\n<tr>\n  <th colspan=\"2\" class=\"text-center\" >User Profile</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td> Creation Date  </td>\n<td>{{studentDetail.CreationDateAt}}</td>\n</tr>\n<tr>\n<td>English</td>\n<td>{{studentDetail.studentData.English}}</td>\n</tr>\n<tr>\n<td>Mathamatics</td>\n<td>{{studentDetail.studentData.Matha}}</td>\n</tr>\n<tr>\n  <td>Hindi</td>\n  <td>{{studentDetail.studentData.Hindi}}</td>\n  </tr>\n<tr>\n<td colspan=\"2\" class=\"text-center\"  >\n<input type=\"button\" (click) =\"onLogout()\" value=\"Back\"/>\n</td>\n</tr>\n</tbody>\n\n</table>\n"

/***/ }),

/***/ "./src/app/student/studentdata/studentdata.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/student/studentdata/studentdata.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentdataComponent", function() { return StudentdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentdataComponent = /** @class */ (function () {
    function StudentdataComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    StudentdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getUserProfile().subscribe(function (res) {
            _this.studentDetail = res['user'];
        }, function (err) {
            console.log(err);
        });
    };
    StudentdataComponent.prototype.onLogout = function () {
        // this.user.delteToken();
        this.router.navigate(['/userprofile']);
    };
    StudentdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studentdata',
            template: __webpack_require__(/*! ./studentdata.component.html */ "./src/app/student/studentdata/studentdata.component.html"),
            styles: [__webpack_require__(/*! ./studentdata.component.css */ "./src/app/student/studentdata/studentdata.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentdataComponent);
    return StudentdataComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src={{imageadd}}  id=\"icon\" alt=\"User Icon\"/>\n</div>\n<form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n    <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n    <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n      <label class=\"validation-message\">Invalid email address.</label>\n    </div>\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required minlength=\"4\"\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n    <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n      <label class=\"validation-message\">Minimum 4 characters.</label>\n    </div>\n    <input type=\"submit\" value=\"Sign In\">\n</form>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n</div>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.imageadd = 'http://hyperxchange.com/Inventory/User_login.png';
        this.model = {
            email: '',
            passowrd: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']);
            _this.router.navigateByUrl('/userprofile');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <img src=\"/assets/image/user.JPG\" id=\"icon\" alt=\"User Icon\"/>\n</div> -->\n\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n<input type=\"text\" #fullName=\"ngModel\" [(ngModel)] = \"userService.selectedUser.fullName\" name=\"fullName\" placeholder=\"fulll Name\"\n required [ngClass] =\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid}\" >\n<div *ngIf=\"signUpForm.submitted && !fullName.valid\" >\n<label class=\"Validators.required\">This Field is Required</label>\n</div>\n<input type=\"text\"  #email=\"ngModel\" [(ngModel)] = \"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\" \nrequired [pattern]=\"emailRegemailRegexex\" [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid}\">\n<div  *ng If=\"signUpForm.submitted && email.errors\" >\n  <label *ngIf=\"email.errors.required\" class=\"validation-message\">This Field is Required</label>\n  <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n</div>\n<input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n  minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n  <div *ngIf=\"signUpForm.submitted && password.errors\">\n    <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n<label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n</div>\n<input type=\"text\" #DOB=\"ngModel\" [(ngModel)] = \"userService.selectedUser.DOB\" name=\"Date Of Birth\" placeholder=\"Date Of Birth\"\n required [ngClass] =\"{'invalid-textbox' :signUpForm.submitted && !DOB.valid}\">\n<div *ngIf=\"signUpForm.submitted && DOB.valid\">\n  \n  </div>\n<input type=\"text\" #Address=\"ngModel\" [(ngModel)]=\"userService.selectedUser.Address\" name=\"Address\" placeholder=\"Address\"\nrequired [ngClass] =\"{'invalid-textbox' :signUpForm.submitted && !Address.valid}\">\n  <div *ngIf=\"signUpForm.submitted && !Address.valid\">\n    \n</div>\n<input type=\"text\" #ParentPhone1=\"ngModel\" [(ngModel)]=\"userService.selectedUser.ParentPhone1\" name=\"ParentPhone1\" placeholder=\"ParentPhone1\"\n  required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !ParentPhone1.valid }\">\n  <div *ngIf=\"signUpForm.submitted && ParentPhone1.valid\">\n    \n</div>\n<input type=\"text\" #ParentPhone2=\"ngModel\" [(ngModel)]=\"userService.selectedUser.ParentPhone2\" name=\"ParentPhone2\" placeholder=\"ParentPhone2\"\n  required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !ParentPhone2.valid }\">\n  <div *ngIf=\"signUpForm.submitted && ParentPhone2.valid\">\n    \n</div>\n<input type=\"submit\" value=\"Sign-Up\" >\n</form>\n\n<!-- Success message -->\n\n<div class=\"success\" *ngIf=\"showSuccessMessage\">\n   \n  Saved successfully\n</div>\n  <!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n  </div>\n   \n\n  "

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 6000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = 'email or username already used';
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            //  else 
            // this.serverErrorMessages = 'Something went wrong'
        });
    };
    SignUpComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: '',
            DOB: '',
            Address: '',
            ParentPhone1: '',
            ParentPhone2: '',
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div id=\"formContent\">\n    <h2 class=\"underlineHover\"  routerLink=\"/login\"  routerLinkActive=\"active\"> Sign In </h2>\n    <h2 class=\"underlineHover\"  routerLink=\"/signup\"  routerLinkActive=\"active\">Sign Up </h2>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf = \"userDetails\" class=\"table-fill\" >\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/studentdata']\" type=\"button btn-primary\">Studnet Data</a></li>\n       </ul>\n<thead>\n  <tr>\n    <th colspan=\"2\" class=\"text-center\" >User Profile</th>\n  </tr>\n</thead>\n<tbody>\n<tr>\n  <td> First Name  </td>\n  <td>{{userDetails.fullName.split(' ')[0]}}</td>\n</tr>\n<tr>\n  <td>Last Name</td>\n  <td>{{userDetails.fullName.split(' ')[1]}}</td>\n</tr>\n<tr>\n<td>Email</td>\n<td>{{userDetails.email}}</td>\n</tr>\n<tr>\n  <td>Date Of Birth</td>\n  <td>{{userDetails.DOB}}</td>\n  </tr>\n  <tr>\n    <td>Address</td>\n    <td>{{userDetails.Address}}</td>\n    </tr>\n    <tr>\n      <td>Parent Phone Number</td>\n      <td>{{userDetails.ParentPhone1}}</td>\n      </tr>\n      <tr>\n        <td>Parent Phone Number2</td>\n        <td>{{userDetails.ParentPhone2}}</td>\n        </tr>\n<tr>\n<td colspan=\"2\" class=\"text-center\"  >\n  <input type=\"button\" (click) =\"onLogout()\" value=\"Logout\"/>\n</td>\n</tr>\n</tbody>\n\n</table>\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
        }, function (err) {
            console.log(err);
        });
    };
    UserprofileComponent.prototype.onLogout = function () {
        this.user.delteToken();
        this.router.navigate(['/login']);
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3000/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project-MEAN-App\Authentication-login\server\userlogin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map