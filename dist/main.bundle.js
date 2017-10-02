webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ngx-flash-messages></ngx-flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/modules/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_app_material_app_material_module__ = __webpack_require__("../../../../../src/app/modules/app-material/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_chat_chat_service__ = __webpack_require__("../../../../../src/app/services/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_room_room_service__ = __webpack_require__("../../../../../src/app/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_flash_messages_flash_messages_service__ = __webpack_require__("../../../../../src/app/services/flash-messages/flash-messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pick_room_pick_room_component__ = __webpack_require__("../../../../../src/app/components/pick-room/pick-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Angular Flash messages

// Modules


// Services




// Components




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_pick_room_pick_room_component__["a" /* PickRoomComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_chat_room_chat_room_component__["a" /* ChatRoomComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__modules_app_material_app_material_module__["a" /* AppMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["a" /* FlashMessagesModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_8__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__services_room_room_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_10__services_flash_messages_flash_messages_service__["a" /* FlashMsgService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.chat li {\r\n  margin-bottom: 10px;\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px dotted #b3a9a9;\r\n}\r\n\r\n.chat li.left .chat-body {\r\n  margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body {\r\n  margin-right: 60px;\r\n}\r\n\r\n.chat li .chat-body p {\r\n  margin: 0;\r\n  color: #777777;\r\n}\r\n\r\n.panel .slidedown .glyphicon,\r\n.chat .glyphicon {\r\n  margin-right: 5px;\r\n}\r\n\r\n.panel-body {\r\n  overflow-y: scroll;\r\n  height: 250px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: #555;\r\n}\r\n\r\n.topMarge {\r\n  margin-top: 20px;\r\n}\r\n\r\n.msg-space {\r\n  padding-left: 60px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.textArea-size {\r\n  width: 90%;\r\n  padding: 0, 0, 0, 0;\r\n}\r\n\r\n.button-position {\r\n  position: relative;\r\n  float: right;\r\n  margin-top: 17px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-room.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container topMarge\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <span class=\"glyphicon glyphicon-comment\"></span> Chat\n          <div class=\"btn-group pull-right\">\n            <button type=\"button\" (click)=\"onLogout()\" class=\"btn btn-default btn-xs\">Se déconnecter</button>\n          </div>\n        </div>\n        <div #scrollMe class=\"panel-body\">\n          <ul class=\"chat\">\n            <li *ngFor=\"let m of listMessages\">\n              <div class=\"left clearfix\" *ngIf=\"m.nickname===nickname; else rightchat\">\n                <span class=\"chat-img pull-left\">\n                      <img src=\"http://placehold.it/50/55C1E7/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\n                    </span>\n                <div class=\"chat-body clearfix\">\n                  <div class=\"header\">\n                    <strong class=\"primary-font\">{{ m.nickname }}</strong> <small class=\"pull-right text-muted\">\n                                          <span class=\"glyphicon glyphicon-time\"></span>{{ m.updated_at | date: 'medium' }}</small>\n                  </div>\n                  <p class=\"msg-space\">{{ m.message }}</p>\n                </div>\n              </div>\n              <ng-template #rightchat>\n                <div class=\"right clearfix\">\n                  <span class=\"chat-img pull-right\">\n                        <img src=\"http://placehold.it/50/FA6F57/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\n                      </span>\n                  <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                      <small class=\"text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{ m.updated_at | date: 'medium' }}</small>\n                      <strong class=\"pull-right primary-font\">{{ m.nickname }}</strong>\n                    </div>\n                    <p>{{ m.message }}</p>\n                  </div>\n                </div>\n              </ng-template>\n          </ul>\n        </div>\n\n        <div class=\"panel-footer\">\n          <form class=\"form-inline\" (submit)=\"sendMessage()\">\n            <div class=\"form-group full-width\">\n              <!-- <input id=\"btn-input\" type=\"text\" class=\"form-control \" name=\"message\" [(ngModel)]=\"message\" placeholder=\"message . . .\"\n              autofocus required/>\n            <span class=\"input-group-btn\">\n                          <button (click)=\"sendMessage()\" class=\"btn btn-warning \" id=\"btn-chat\">Send</button>\n            </span> -->\n              <span class=\"row\">\n                <span class=\"col-md-11 col-sm-11 col-lg-11 col-xs-12\">\n                    <md-form-field class=\"textArea-size\">\n                        <textarea id=\"btn-input\" mdInput mdTextareaAutosize mdAutosizeMinRows=\"2\"\n                         (keyup.enter)=\"sendMessage()\" name=\"message\" autocomplete=\"false\" \n                          [(ngModel)]=\"message\" required placeholder=\"message...\"></textarea>\n                      </md-form-field>\n                </span>\n              <span class=\"col-md-1 col-sm-1 col-lg-1 col-xs-6\">\n                  <button id=\"btn-chat\" md-raised-button color=\"primary\" type=\"submit\" class=\"button-position\">Send</button>                 \n              </span>\n              </span>\n            </div>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_chat_service__ = __webpack_require__("../../../../../src/app/services/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_room_room_service__ = __webpack_require__("../../../../../src/app/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_flash_messages_flash_messages_service__ = __webpack_require__("../../../../../src/app/services/flash-messages/flash-messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Chat__ = __webpack_require__("../../../../../src/app/models/Chat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_Room__ = __webpack_require__("../../../../../src/app/models/Room.ts");
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
    function ChatRoomComponent(_chatService, _roomService, _userService, _flashMsg, _router, activatedRoute) {
        this._chatService = _chatService;
        this._roomService = _roomService;
        this._userService = _userService;
        this._flashMsg = _flashMsg;
        this._router = _router;
        this.activatedRoute = activatedRoute;
        // socket = io('http://localhost:3000/');
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__('http://192.168.0.15:3000/');
        this.room = new __WEBPACK_IMPORTED_MODULE_9__models_Room__["a" /* Room */]();
        this.chat = new __WEBPACK_IMPORTED_MODULE_8__models_Chat__["a" /* Chat */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_7__models_User__["a" /* User */]();
        this.listMessages = [];
        this.message = '';
    }
    ChatRoomComponent.prototype.sendMessage = function () {
        if (this.message.trim().length > 0) {
            var now = new Date(Date.now());
            this.chat = {
                room: this.room,
                nickname: this.user.nickname,
                message: this.message,
                updated_at: now
            };
            this.saveChat(this.chat);
            this.socket.emit('send-message', this.chat);
            this.message = '';
        }
    };
    ChatRoomComponent.prototype.saveChat = function (chat) {
        this._chatService.saveMessage(chat)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    ChatRoomComponent.prototype.getRoomById = function (id) {
        var _this = this;
        this._roomService.getRoomById(id)
            .subscribe(function (data) {
            console.log(data);
            _this.room = data.obj;
            _this.getChatByRoom(data.obj);
        });
    };
    ChatRoomComponent.prototype.getChatByRoom = function (room) {
        var _this = this;
        this._chatService.getChatByRoom(room)
            .subscribe(function (data) {
            console.log(data);
            _this.listMessages = data.obj;
        });
    };
    ChatRoomComponent.prototype.onLogout = function () {
        var now = Date.now();
        // Envoi message user déconnecté à tous les autres utilisateurs
        this.socket.emit('send-message', {
            nickname: this.nickname,
            message: this.nickname + ' s\'est déconnecté',
            date: now
        });
        // Enleve user du localStorage
        // localStorage.removeItem('user');
        // Renvoi vers route /pick-roomq²
        this._router.navigate(['/pick-room']);
    };
    ChatRoomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatRoomComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Recupere nickname from localStorage
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.nickname = this.user.nickname;
        if (this.activatedRoute.snapshot.params['id'] !== undefined) {
            this.id_room = this.activatedRoute.snapshot.params['id'];
            this.getRoomById(this.id_room);
        }
        // Function appelee a chaque fois qu'un utilisateur
        // envoi un message au server via la methode emit('send-message')
        this.socket.on('new-message', function (data) {
            _this.listMessages.push(data);
            _this.scrollToBottom();
        });
        this.scrollToBottom();
    };
    return ChatRoomComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ChatRoomComponent.prototype, "myScrollContainer", void 0);
ChatRoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat-room',
        template: __webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_room_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_room_room_service__["a" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_flash_messages_flash_messages_service__["a" /* FlashMsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_flash_messages_flash_messages_service__["a" /* FlashMsgService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], ChatRoomComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=chat-room.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contentBulle:hover .contentBulleFleche, .contentBulle:hover .contentBulleDescription {\r\n  display:block;\r\n}\r\n\r\n.contentBulle { \r\ndisplay: inline-block;\r\nposition: relative; \r\nwidth:100%;\r\n}\r\n\r\n.contentBulleFleche { \r\nposition: absolute;\r\nwidth: 0; \r\nheight: 0; \r\nborder: 7px solid #C4C4C4; \r\nborder-top-color: transparent; \r\nborder-left-color: transparent; \r\nborder-bottom-color: transparent;\r\nmargin-top: 12px;\r\n}\r\n\r\n.contentBulleDescription { \r\n  background:#C4C4C4;\r\n  color:#000;\r\n  padding:10px;\r\n  position:absolute;\r\n  border-radius:4px; \r\n  -moz-border-radius:4px; \r\n  -webkit-border-radius:4px;\r\n  margin-left:13px;\r\n  border:1px solid #C4C4C4\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- <md-card *ngFor=\"let msg of listMessages\">\r\n    <md-card-header>\r\n      <md-card-title>{{msg.nickname}}</md-card-title>\r\n    </md-card-header>\r\n    <md-card-content>{{msg.message}}</md-card-content>\r\n  </md-card> -->\r\n\r\n\r\n  <md-list>\r\n    <md-list-item *ngFor=\"let msg of listMessages\">\r\n      <div class=\"contentBulle\">\r\n        <div class=\"contentBulleFleche\"></div>\r\n        <div class=\"contentBulleDescription\">\r\n          {{msg.nickname}} : {{msg.message}}\r\n        </div>\r\n      </div>\r\n    </md-list-item>\r\n  </md-list>\r\n\r\n\r\n  <!-- <md-chip-list>\r\n    <div class=\"col-sm-6\">\r\n      <md-chip *ngFor=\"let msg of listMessages\" class=\"mat-chip-list-stacked float clearfix\" color=\"primary\">\r\n\r\n        {{msg.nickname}} : {{msg.message}}\r\n\r\n      </md-chip>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <md-chip *ngFor=\"let msg of listMessages\" class=\"mat-chip-list-stacked float clearfix\" color=\"primary\">\r\n\r\n        {{msg.nickname}} : {{msg.message}}\r\n\r\n      </md-chip>\r\n    </div>\r\n  </md-chip-list> -->\r\n\r\n  <form>\r\n    <md-form-field>\r\n      <textarea mdInput mdTextareaAutosize type=\"text\" placeholder=\"message...\" name=\"message\" [(ngModel)]=\"message\" autocomplete=\"false\"></textarea>\r\n    </md-form-field>\r\n    <button md-raised-button color=\"primary\" (click)=\"sendMessage()\">Send</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://localhost:3000/");
        this.listMessages = [];
    }
    ChatComponent.prototype.sendMessage = function () {
        this.socket.emit("send-message", {
            nickname: this.nickname,
            message: this.message
        });
        this.message = "";
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nickname = localStorage.getItem("user");
        this.socket.on("new-message", function (data) {
            _this.listMessages.push({
                nickname: data.nickname,
                message: data.message
            });
        });
        console.log(localStorage);
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-chat",
        template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pick-room/pick-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\r\n  text-align: center;\r\n}\r\n\r\n.topMarge {\r\n  margin-top: 200px;\r\n}\r\n\r\n.button-position {\r\n  margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pick-room/pick-room.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid center\">\n\n  <div *ngIf=\"!userLoggedIn\" class=\"topMarge\">\n    <form (ngSubmit)=\"onLogin()\">\n      <md-form-field>\n        <input mdInput type=\"text\" name=\"user.nickname\" [(ngModel)]=\"user.nickname\" placeholder=\"Nickname\" autocomplete=\"false\" required>\n      </md-form-field>\n      <button type=\"submit\" md-raised-button color=\"primary\">Login</button>\n    </form>\n  </div>\n\n  <div *ngIf=\"userLoggedIn\">\n    <h3>Nickname : {{user.nickname}}</h3>\n    <hr/>\n    <h4>Utilisateurs connectés</h4>\n    <p>Sélectionnez les personnes avec qui discuter puis cliquer sur Rejoindre pour commencer à discuter</p>\n    <md-selection-list>\n      <md-list-option *ngFor=\"let u of listUser\" (click)=\"onUsersSelected(u)\">\n        <p>{{u.nickname}}</p>\n      </md-list-option>\n    </md-selection-list>\n    <button md-raised-button color=\"primary\" (click)=\"joinRoom()\" class=\"button-position\">Rejoindre</button>\n    <p>\n      Users selected: {{selectedUsers | json}}\n    </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pick-room/pick-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_chat_service__ = __webpack_require__("../../../../../src/app/services/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_room_room_service__ = __webpack_require__("../../../../../src/app/services/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_flash_messages_flash_messages_service__ = __webpack_require__("../../../../../src/app/services/flash-messages/flash-messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PickRoomComponent = (function () {
    function PickRoomComponent(_userService, _chatService, _roomService, _flashMsg, _router) {
        this._userService = _userService;
        this._chatService = _chatService;
        this._roomService = _roomService;
        this._flashMsg = _flashMsg;
        this._router = _router;
        // Change for test on several device or PROD
        // socket = io('http://localhost:3000/');
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__('http://192.168.0.15:3000/');
        this.user = new __WEBPACK_IMPORTED_MODULE_7__models_User__["a" /* User */]();
        this.selectedUsers = new Array();
        this.users = new Array();
        this.listUser = new Array();
    }
    /**
     * On login : called when user enter a nickname
     *
     * @memberof PickRoomComponent
     */
    PickRoomComponent.prototype.onLogin = function () {
        // Verif input
        if (this.user.nickname.trim().length > 0) {
            // save user to database and on sessionStorage
            this.user.connected = true;
            this.user.updated_at = new Date(Date.now());
            this.saveUser(this.user);
            // set select room view
            this.userLoggedIn = true;
        }
    };
    /**
     * Save user on Login and emit login => trigger add-use
     *
     * @param {User} user user body
     * @memberof PickRoomComponent
     */
    PickRoomComponent.prototype.saveUser = function (user) {
        var _this = this;
        this._userService.saveUser(user)
            .subscribe(function (data) {
            _this.user = data.obj;
            console.log('User saved to database');
            sessionStorage.setItem('user', JSON.stringify(data.obj));
        }, function (err) { return console.log(err); }, function () { return _this.socket.emit('login', _this.user); });
    };
    PickRoomComponent.prototype.updateStatusUser = function (id, user) {
        this.user.connected = false;
        this._userService.updateStatus(id, user)
            .subscribe(function (data) {
            // TODO: add flash messages logout/login
        }, function (err) { return console.log(err); });
    };
    PickRoomComponent.prototype.deleteUser = function (id) {
        this._userService.deleteUser(id)
            .subscribe(function (data) {
            console.log(data.message);
            // TODO: add flash messages logout/login
        }, function (err) { return console.log(err); });
    };
    PickRoomComponent.prototype.joinRoom = function () {
        var _this = this;
        // Check si room between the two users exists
        // Get User B information
        var userB = new __WEBPACK_IMPORTED_MODULE_7__models_User__["a" /* User */]();
        userB = this.selectedUsers[0];
        this.getRoomCommuneTwoUsers(this.user._id, userB._id);
        setTimeout(function () {
            if (_this.roomCommune.success) {
                setTimeout(function () {
                    _this._router.navigate(['/room', _this.roomCommune.obj._id]);
                }, 1000);
            }
            else {
                // Room doesn't exists => Create room
                // create roomName based on users nickname
                _this.selectedUsers.push(_this.user);
                var roomName = '';
                for (var user in _this.selectedUsers) {
                    if (_this.selectedUsers.hasOwnProperty(user)) {
                        roomName += _this.selectedUsers[user].nickname;
                    }
                }
                var room = {
                    name: roomName,
                    users: _this.selectedUsers
                };
                _this.saveRoom(room);
            }
            var now = new Date(Date.now());
            var joinMsg = {
                nickname: _this.user.nickname,
                message: _this.user.nickname + ' s\'est connecté',
                updated_at: now
            };
            _this.socket.emit('send-message', joinMsg);
        }, 2000);
    };
    PickRoomComponent.prototype.saveRoom = function (room) {
        var _this = this;
        this._roomService.createRoom(room)
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('room', JSON.stringify(data.obj._id));
        });
        setTimeout(function () {
            _this._router.navigate(['/room', JSON.parse(localStorage.getItem('room'))]);
        }, 1000);
    };
    PickRoomComponent.prototype.getRoomCommuneTwoUsers = function (idA, idB) {
        var _this = this;
        return this._roomService.getRoomCommune(idA, idB)
            .subscribe(function (data) {
            console.log(data);
            _this.roomCommune = data;
        }, function (err) { return console.log(err); });
    };
    PickRoomComponent.prototype.getOneUser = function (id) {
        var userB = new __WEBPACK_IMPORTED_MODULE_7__models_User__["a" /* User */]();
        this._userService.getOneUserById(id)
            .subscribe(function (data) {
            console.log(data);
            userB = data.obj;
        }, function (err) { return console.log(err); });
        return userB;
    };
    PickRoomComponent.prototype.getUserLoggedIn = function () {
        var _this = this;
        var userLogin = [];
        this._userService.getAllUser()
            .subscribe(function (data) {
            console.log(data);
            for (var u in data.obj) {
                if (data.obj.hasOwnProperty(u)) {
                    if (data.obj[u].connected && data.obj[u].nickname !== JSON.parse(sessionStorage.getItem('user')).nickname) {
                        userLogin.push(data.obj[u]);
                    }
                }
            }
            _this.listUser = userLogin;
        }, function (err) {
            console.log(err);
        });
        return this.listUser;
    };
    /* ngOnDestroy() {
      this.deleteUser(JSON.parse(sessionStorage.getItem('user'))._id);
      //this.updateStatusUser()
      sessionStorage.removeItem('user');
      this.socket.emit('disconnect');
    } */
    PickRoomComponent.prototype.onUsersSelected = function (user) {
        if (this.selectedUsers.indexOf(user) !== -1) {
            this.selectedUsers.splice(this.selectedUsers.indexOf(user), 1);
        }
        else {
            this.selectedUsers.push(user);
        }
        console.log(this.selectedUsers);
    };
    PickRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Test si sessionStorage contient user
        if (sessionStorage.length > 0) {
            this.userLoggedIn = true;
            this.user = JSON.parse(sessionStorage.getItem('user'));
            this.getUserLoggedIn();
        }
        // On user Logged In
        this.socket.on('add-user', function (user) {
            _this.getUserLoggedIn();
            console.log(user);
            if (user.nickname !== _this.user.nickname) {
                _this._flashMsg.successMsg(user.nickname + ' s\'est connecté');
            }
        });
        // TODO: Trouver un moyen pour set user to disconnect quand il n'est plus connecté
        // - Si appuie sur disconnect : OK
        // - Si ferme le navigateur brutalement: ??
        // On user Logged Out
        this.socket.on('remove-user', function () {
            // TODO: change delete pour update status user.connected quand Auth implementee
            // this.user.connected = false;
            // this.updateStatusUser(this.user._id, this.user);
            _this.getUserLoggedIn();
            // this.listUser.splice(this.listUser.indexOf(this.user), 1);
        });
    };
    return PickRoomComponent;
}());
PickRoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pick-room',
        template: __webpack_require__("../../../../../src/app/components/pick-room/pick-room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pick-room/pick-room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_chat_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_chat_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_room_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_room_room_service__["a" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_flash_messages_flash_messages_service__["a" /* FlashMsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_flash_messages_flash_messages_service__["a" /* FlashMsgService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PickRoomComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pick-room.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Chat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = (function () {
    function Chat(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
    }
    return Chat;
}());

//# sourceMappingURL=Chat.js.map

/***/ }),

/***/ "../../../../../src/app/models/Room.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
    }
    return Room;
}());

//# sourceMappingURL=Room.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/modules/app-material/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    return AppMaterialModule;
}());
AppMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdChipsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdChipsModule */]
        ]
    })
], AppMaterialModule);

//# sourceMappingURL=app-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pick_room_pick_room_component__ = __webpack_require__("../../../../../src/app/components/pick-room/pick-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'pick-room', component: __WEBPACK_IMPORTED_MODULE_2__components_pick_room_pick_room_component__["a" /* PickRoomComponent */] },
    { path: 'room', component: __WEBPACK_IMPORTED_MODULE_3__components_chat_room_chat_room_component__["a" /* ChatRoomComponent */] },
    { path: 'room/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_chat_room_chat_room_component__["a" /* ChatRoomComponent */] },
    { path: '', redirectTo: 'pick-room', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const devUrl = 'http://localhost:3000/api/chat';
var devUrl = '/api/chat';
var ChatService = (function () {
    function ChatService(_http) {
        this._http = _http;
    }
    ChatService.prototype.getAllUser = function () {
        return this._http.get("" + devUrl);
    };
    ChatService.prototype.getChatByRoom = function (room) {
        return this._http.get(devUrl + "/room/" + room._id);
    };
    ChatService.prototype.saveMessage = function (chat) {
        return this._http.post("" + devUrl, chat);
    };
    ChatService.prototype.getChatByNickname = function (nickname) {
        return this._http.get(devUrl + "/nickname/" + nickname);
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flash-messages/flash-messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashMsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlashMsgService = (function () {
    function FlashMsgService(_flashMessages) {
        this._flashMessages = _flashMessages;
    }
    FlashMsgService.prototype.successMsg = function (message) {
        this._flashMessages.show(message, {
            classes: ['alert', 'alert-success'],
            timeout: 3000
        });
    };
    FlashMsgService.prototype.errorMsg = function (message) {
        this._flashMessages.show(message, {
            classes: ['alert', 'alert-danger'],
            timeout: 3000
        });
    };
    return FlashMsgService;
}());
FlashMsgService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _a || Object])
], FlashMsgService);

var _a;
//# sourceMappingURL=flash-messages.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/room/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const devUrl = 'http://localhost:3000/api/room';
var devUrl = '/api/room';
var RoomService = (function () {
    function RoomService(_http) {
        this._http = _http;
    }
    RoomService.prototype.getAllRoom = function () {
        return this._http.get("" + devUrl);
    };
    RoomService.prototype.getRoomById = function (id) {
        return this._http.get(devUrl + "/" + id);
    };
    RoomService.prototype.getRoomByUser = function (user) {
        return this._http.get(devUrl + "/users/" + user);
    };
    RoomService.prototype.getRoomCommune = function (idA, idB) {
        return this._http.get(devUrl + "/userA/" + idA + "/userB/" + idB);
    };
    RoomService.prototype.createRoom = function (room) {
        return this._http.post("" + devUrl, room);
    };
    RoomService.prototype.updateRoom = function (room) {
        return this._http.put("" + devUrl, room);
    };
    return RoomService;
}());
RoomService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], RoomService);

var _a;
//# sourceMappingURL=room.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var devUrl = '/api/users';
// const devUrl = 'http://localhost:3000/api/users';
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getAllUser = function () {
        return this._http.get("" + devUrl);
    };
    UserService.prototype.getOneUserById = function (id) {
        return this._http.get(devUrl + "/" + id);
    };
    UserService.prototype.getOneUserByNickname = function (nickname) {
        return this._http.get(devUrl + "/nickname/" + nickname);
    };
    UserService.prototype.saveUser = function (user) {
        return this._http.post("" + devUrl, user);
    };
    UserService.prototype.updateStatus = function (id, user) {
        return this._http.put(devUrl + "/" + id, user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this._http.delete(devUrl + "/" + id);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    domain: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map