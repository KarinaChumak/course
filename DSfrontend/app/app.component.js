"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require("./auth/auth.service");
var ng2_webstorage_1 = require("ng2-webstorage");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.pageTitle = 'Donor search';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.donor = this._authService.donor;
        this.admin = this._authService.admin;
    };
    AppComponent.prototype.OnLogOut = function () {
        var _this = this;
        this._authService.logOut()
            .subscribe(function () { return _this._router.navigate(['/welcome']); }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        ng2_webstorage_1.LocalStorage(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "donor", void 0);
    __decorate([
        ng2_webstorage_1.LocalStorage(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "admin", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            templateUrl: 'app/app.component.html',
            styles: ["\n    :host {\n      display: block;\n      margin: 10px;\n      \n      \n    }\n    .navbar-default{\n    background-color: rgb(255, 51, 51);\n    \n    \n      }\n      .navbar-right{\n     position: absolute;\n     right: 70px;\n      }\n      \n    .navbar-brand{\n    color: white;\n    }\n    li a {\n    color:white;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map