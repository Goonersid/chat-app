webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 104;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title = 'G-Chat Dashboard!';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(197),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_users_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_users_chat_users_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_room_chat_room_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_af_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(78);
/* unused harmony export firebaseConfig */
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyA5WkUYT4oJKfcKeuaZ3xAc9EigwBBR2Fc",
    authDomain: "gchat-project-6a119.firebaseapp.com",
    databaseURL: "https://gchat-project-6a119.firebaseio.com",
    storageBucket: "gchat-project-6a119.appspot.com",
    messagingSenderId: "171697051876"
};
function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthConfig"]({}), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chat_users_chat_users_component__["a" /* ChatUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__chat_room_chat_room_component__["a" /* ChatRoomComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__app_routes__["b" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_7__chat_users_service__["a" /* ChatUsersService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            },
            __WEBPACK_IMPORTED_MODULE_12__providers_af_service__["a" /* AF */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var appRoutes = [];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_af_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatRoomComponent = (function () {
    function ChatRoomComponent(afService) {
        this.afService = afService;
        this.messages = this.afService.messages;
    }
    ChatRoomComponent.prototype.sendMessage = function () {
        this.afService.sendMessage(this.user.chatmessage, this.user.email);
        this.user.chatmessage = '';
    };
    ChatRoomComponent.prototype.isYou = function (email) {
        if (email == this.afService.email)
            return true;
        else
            return false;
    };
    ChatRoomComponent.prototype.isMe = function (email) {
        if (email == this.afService.email)
            return false;
        else
            return true;
    };
    return ChatRoomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatRoomComponent.prototype, "user", void 0);
ChatRoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'chat-room',
        template: __webpack_require__(198),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__providers_af_service__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_af_service__["a" /* AF */]) === "function" && _a || Object])
], ChatRoomComponent);

var _a;
//# sourceMappingURL=chat-room.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_users_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var selectedUserClass = "bg-info text-white";
var ChatUsersComponent = (function () {
    function ChatUsersComponent(afService, chatService) {
        this.afService = afService;
        this.chatService = chatService;
        this.users = this.afService.users;
    }
    ChatUsersComponent.prototype.processClasses = function (user) {
        // CSS classes: added/removed per current state of component properties
        return this.selectedUser && user.email == this.selectedUser.email ? selectedUserClass : "";
    };
    ChatUsersComponent.prototype.ngOnInit = function () {
        console.log("current user", this.currentUser);
        this.getAllUsers();
    };
    ChatUsersComponent.prototype.getAllUsers = function () {
        this.chatService.getAllUsers();
    };
    ChatUsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    return ChatUsersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatUsersComponent.prototype, "currentUser", void 0);
ChatUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'chat-users',
        template: __webpack_require__(199),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af_service__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af_service__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__chat_users_service__["a" /* ChatUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__chat_users_service__["a" /* ChatUsersService */]) === "function" && _b || Object])
], ChatUsersComponent);

var _a, _b;
//# sourceMappingURL=chat-users.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    return UserProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserProfileComponent.prototype, "user", void 0);
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-profile',
        template: __webpack_require__(200),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponent);

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".gchat-mask{\r\n\tposition :fixed;\r\n\ttop : 50%;\r\n\tfont-weight : bold;\r\n\tborder : 2px solid;\r\n} \r\n.gchat-login{\r\n\tpadding : 1px 5px 4px 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "#chat-room{\r\n\tdisplay:block;\r\n\toverflow:auto;\r\n\tmax-height:300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".online{\r\n\tcolor : #5fd85f;\r\n}\r\n.offline{\r\n\tcolor : #c5b9b9;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n\t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n   \t\t <span class=\"navbar-toggler-icon\"></span>\n  \t</button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\t<ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"navbar-brand\" href=\"#\">{{title}}</a> \n      </li>\n\t</ul>\n\t<ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngIf=\"!auth.authenticated()\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"auth.login()\" >\n        <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Log In</button>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.authenticated() && auth.loggedInUser\">\n      \t<span class=\"navbar-text\">\n\t      Welcome, {{auth.loggedInUser.given_name| uppercase}}!!\n\t    </span>\n        <button class=\"btn btn-info\" (click)=\"auth.logout()\">Log Out</button>\n      </li>\n    </ul>\n    </div> \n</nav>\n<div class =\"container\">\n\t<div class=\"row justify-content-center\" *ngIf=\"!auth.authenticated()\">\n\t\t<div class = \"col col-md-auto gchat-mask\" >\n\t\t<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> \n\t\tPlease <button type=\"button\" class=\"btn btn-link gchat-login\" (click)=\"auth.login()\">login</button>to connect !!</div>\n\t</div> \n\t<div class=\"row\" *ngIf=\"auth.authenticated() && auth.loggedInUser\"> \n\t\t<div class = \"col-3\" ><h2>Your profile</h2>\n\t\t\t<user-profile [user]=\"auth.loggedInUser\">Initializing user profile..Please wait</user-profile>\n\t\t</div>\n\t\t<div class=\"col\" *ngIf = \"auth.isLoggedIn\">\n\t\t\t<chat-users [currentUser]=\"auth.loggedInUser\">Initializing Contact List..Please wait</chat-users>\n\t\t</div>\n\t\t<div class=\"col\" *ngIf = \"!auth.isLoggedIn\">\n\t\t\tPlease wait while we initialize firebase..This may take a while\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf = \"user\">Your chat with {{user.displayName}}</h5>\r\n<div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"user.chatmessage\" (keyup.enter)=\"sendMessage()\"\r\n    \t\t\t\t\t\t\t\t\t\t aria-describedby=\"chatHelp\" placeholder=\"Click to start typing..\"/>\r\n    <small id=\"emailHelp\" class=\"form-text text-muted\">Press enter key to send your message</small>\r\n</div>\r\n<div id=\"chat-room\">\r\n   <div class=\"list-group\"  *ngFor=\"let message of messages | async\">\r\n   \t<a *ngIf=\"(message.to==afService.email && message.email==user.email)||\r\n   \t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(message.email==afService.email && message.to==user.email )\"\r\n   \t\t\tclass=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n   \t\t\t\t\t\t\t \r\n   \t\t<div class=\"d-flex w-100 justify-content-between\">\r\n\t      \t<h5 class=\"mb-1\" *ngIf= \"message.email==afService.email\">You:</h5>\r\n\t      \t<h5 class=\"mb-1\" *ngIf= \"message.to==afService.email\">{{user.displayName}}:</h5>\r\n\t      \t<small>{{message.timestamp | date:\"dd-MMM-yy hh:mm a\"}}</small>\r\n\t    </div>\r\n\t    <p class=\"mb-1\">{{message.message}}</p>\r\n   \t</a>\r\n</div>\r\n</div> "

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" *ngIf=\"afService.af.auth\">\n<div class=\"col-4\">\n<h2>List of users</h2>\n<div *ngFor=\"let user of users | async\">\n\n    </div>\n<div class=\"list-group\" *ngFor=\"let user of users | async\">\n  \t\t<a *ngIf=\"user.email != currentUser.email\"\n  \t\t\t\t[ngClass]=\"processClasses(user)\" class=\"list-group-item list-group-item-action\" (click)=\"onSelect(user)\">\n  \t\t\t\t<i class=\"fa fa-circle\" [ngClass]=\"user.status\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{user.displayName}}\n  \t\t\t\t<small class=\"text-muted\">&nbsp;-&nbsp;({{user.status}})</small>\n  \t\t\t\t</a>\n</div>\n</div>\n<div class =\"col\">\n\t<chat-room *ngIf=\"selectedUser\" [user]=\"selectedUser\"></chat-room>\t\n</div>\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img class=\"card-img-top\" src=\"{{user.picture}}\" style=\"height: 15rem;\">\r\n  <div class=\"card-block\">\r\n    <h6 class=\"card-title\">{{user.name | uppercase}}</h6>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AF = (function () {
    function AF(af) {
        this.af = af;
        console.log("trying now");
        this.messages = this.af.database.list('messages');
        this.users = this.af.database.list('users');
    }
    /**
     * Logs in the user
     * @returns {firebase.Promise<FirebaseAuthState>}
     * @param {delegate token from auth0}
     */
    AF.prototype.loginWithGoogle = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup
        }).catch(function (error) {
            console.log(error);
        });
    };
    AF.prototype.updateUserStatus = function (status) {
        var _this = this;
        var usersSubsc = this.users.subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.email == _this.email) {
                    _this.users.update(snapshot.$key, {
                        status: status
                    }).then(function (results) {
                        if (status == "offline") {
                            _this.logout();
                            localStorage.removeItem('id_token');
                            localStorage.removeItem("accessToken");
                        }
                    });
                }
            }, _this);
            if (usersSubsc)
                usersSubsc.unsubscribe();
        });
        return this.users;
    };
    AF.prototype.getUserKey = function () {
    };
    AF.prototype.checkIfUserExists = function (email) {
        return this.af.database.list('users', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        });
    };
    /**
     * Logs out the current user
     */
    AF.prototype.logout = function () {
        return this.af.auth.logout();
    };
    /**
     *
     */
    AF.prototype.addUserInfo = function () {
        var _this = this;
        this.subscriber = this.checkIfUserExists(this.email).subscribe(function (results) {
            if (results.length == 0) {
                _this.users.push({
                    email: _this.email,
                    displayName: _this.displayName,
                    status: "online"
                });
            }
            else {
                _this.updateUserStatus("online");
            }
            //un subscribing after login as this is desired 
            _this.subscriber.unsubscribe();
        });
        //We saved their auth info now save the rest to the db.
        console.log("users", this.users);
    };
    /**
     * Saves a message to the Firebase Realtime Database
     * @param text
     */
    AF.prototype.sendMessage = function (text, email) {
        var message = {
            message: text,
            displayName: this.displayName,
            email: this.email,
            to: email,
            timestamp: Date.now()
        };
        this.messages.push(message);
    };
    return AF;
}());
AF = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], AF);

var _a;
//# sourceMappingURL=af.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_config__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Auth = (function () {
    function Auth(afService) {
        var _this = this;
        this.afService = afService;
        // Configure Auth0
        this.lock = new Auth0Lock(__WEBPACK_IMPORTED_MODULE_0__auth_config__["a" /* myConfig */].clientID, __WEBPACK_IMPORTED_MODULE_0__auth_config__["a" /* myConfig */].domain, {});
        this.auth0 = new Auth0({ domain: __WEBPACK_IMPORTED_MODULE_0__auth_config__["a" /* myConfig */].domain, clientID: __WEBPACK_IMPORTED_MODULE_0__auth_config__["a" /* myConfig */].clientID });
        this.loggedInUser = JSON.parse(localStorage.getItem('profile'));
        // Add callback for lock `authenticated` event
        var ctxt = this;
        this.afService.af.auth.subscribe(function (auth) {
            if (auth == null && !ctxt.authenticated()) {
                return;
            }
            else if (auth == null && _this.authenticated()) {
                console.log("Not Logged in.");
                _this.isLoggedIn = false;
                _this.afService.loginWithGoogle().then(function (data) {
                    console.log(data);
                    _this.afService.addUserInfo();
                });
            }
            else {
                console.log("Successfully Logged in.");
                // Set the Display Name and Email so we can attribute messages to them
                _this.afService.displayName = auth.google.displayName;
                _this.afService.email = auth.google.email;
                _this.isLoggedIn = true;
            }
        });
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    // Handle error
                    return;
                }
                if (!_this.isLoggedIn) {
                    _this.afService.loginWithGoogle().then(function (data) {
                        console.log(data);
                        _this.afService.addUserInfo();
                    });
                }
                localStorage.setItem("accessToken", authResult.accessToken);
                localStorage.setItem("profile", JSON.stringify(profile));
                localStorage.setItem('id_token', authResult.idToken);
                _this.loggedInUser = profile;
                // Set the options to retreive a firebase delegation token
                var options = {
                    company: _this.loggedInUser['firebase_data']['company'],
                    id_token: authResult.idToken,
                    api: 'firebase',
                    scope: "openid profile email"
                };
                // Make a call to the Auth0 '/delegate'
                _this.auth0.getDelegationToken(options, function (err, result) {
                    if (!err) {
                        //we could do this or pass this token delegate to firebase.
                        //https://github.com/angular/angularfire2/issues/286
                        // Exchange the delegate token for a Firebase auth token
                    }
                });
            });
        });
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    Auth.prototype.getUserProfile = function () {
        return this.loggedInUser;
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        this.afService.updateUserStatus('offline');
    };
    return Auth;
}());
Auth = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af_service__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af_service__["a" /* AF */]) === "function" && _a || Object])
], Auth);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myConfig; });
var myConfig = {
    clientID: 'k1KcHLpOsGRAH2UsGfHIiAOjd5W3eSOc',
    domain: 'gchat.au.auth0.com',
    fetchUsersUrl: "https://gchat.au.auth0.com/api/v2/users",
    oauthUrl: 'https://gchat.au.auth0.com/oauth/token'
};
//# sourceMappingURL=auth.config.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_config__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatUsersService = (function () {
    function ChatUsersService(auth, http, authHttp) {
        this.auth = auth;
        this.http = http;
        this.authHttp = authHttp;
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_0__auth_config__["a" /* myConfig */].fetchUsersUrl;
    }
    ChatUsersService.prototype.getAllUsers = function () {
        var _this = this;
        return this.create()
            .then((function (token) {
            console.log(token);
            localStorage.setItem('id_token', token.access_token);
            _this.authToken = token;
            _this.requestUsers(token);
        }));
    };
    ChatUsersService.prototype.requestUsers = function (token) {
        var _this = this;
        return this.authHttp.get(this.usersUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.allUsers = data; }, function (error) { return _this.allUsers = error._body || error; });
    };
    ChatUsersService.prototype.create = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_0__auth_config__["a" /* myConfig */].oauthUrl, '{"client_id":"vPaSA7LL0a932iSo5DMQn3B4kNJQKr1J","client_secret":"TUZyy3x0W80OlanWRdRMJWAJo4DmG1YB7RYoaDxynZx3GLDbcgqRzK_83cDdatKP","audience":"https://gchat.au.auth0.com/api/v2/","grant_type":"client_credentials"}', { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ChatUsersService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ChatUsersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ChatUsersService;
}());
ChatUsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"]) === "function" && _c || Object])
], ChatUsersService);

var _a, _b, _c;
//# sourceMappingURL=chat-users.service.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.bundle.js.map