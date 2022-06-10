"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 1483:
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 2154);



let DatabaseService = class DatabaseService {
    constructor(sqlite) {
        this.sqlite = sqlite;
    }
    init() {
        console.log('CALLED THIS TIME!!!!');
        this.sqlite
            .create({
            name: 'data.db',
            location: 'default',
        })
            .then((db) => {
            db.executeSql('create table users(name VARCHAR(32), email VARCHAR(32))', [])
                .then(() => console.log('Executed SQL'))
                .catch((e) => console.log(e));
        })
            .catch((e) => console.log(e));
    }
};
DatabaseService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], DatabaseService);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
        providers: []
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ 1483);





let HomePage = class HomePage {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.todo = {
            name: '',
            email: '',
        };
    }
    logForm() {
        this.databaseService.init();
        console.log(this.todo);
    }
};
HomePage.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2154:
/*!********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/sqlite/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLiteObject": () => (/* binding */ SQLiteObject),
/* harmony export */   "SQLite": () => (/* binding */ SQLite)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 4624);




var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "databaseFeatures"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "databaseFeatures", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "openDBs"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "openDBs", value); },
        enumerable: false,
        configurable: true
    });
    return SQLiteObject;
}());

var SQLite = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SQLite, _super);
    function SQLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLite.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLite.prototype.echoTest = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "echoTest", {}, arguments); };
    SQLite.prototype.selfTest = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "selfTest", {}, arguments); };
    SQLite.prototype.deleteDatabase = function (config) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "deleteDatabase", {}, arguments); };
    SQLite.pluginName = "SQLite";
    SQLite.pluginRef = "sqlitePlugin";
    SQLite.plugin = "cordova-sqlite-storage";
    SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];
SQLite.ɵfac = /*@__PURE__*/ function () { var ɵSQLite_BaseFactory; return function SQLite_Factory(t) { return (ɵSQLite_BaseFactory || (ɵSQLite_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SQLite)))(t || SQLite); }; }();
SQLite.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SQLite, factory: function (t) { return SQLite.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SQLite, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return SQLite;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));




/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vSU9OSUMlMjBXT1JLL29mZmxpbmUtc3RvcmUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <form (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"todo.name\" name=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-textarea [(ngModel)]=\"todo.email\" name=\"description\"></ion-textarea>\n      </ion-item>\n      <button ion-button type=\"submit\" block>Add Student</button>\n    </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map