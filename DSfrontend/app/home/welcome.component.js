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
var auth_service_1 = require("../auth/auth.service");
var ng2_webstorage_1 = require("ng2-webstorage");
var router_1 = require("@angular/router");
var WelcomeComponent = (function () {
    function WelcomeComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent.prototype.onClick = function () {
        this._router.navigate(['/recipientauth']);
    };
    __decorate([
        ng2_webstorage_1.LocalStorage(), 
        __metadata('design:type', Object)
    ], WelcomeComponent.prototype, "donor", void 0);
    WelcomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/welcome.component.html',
            styles: ["\n    .h3{\n        position: absolute;\n        top:50px;\n        left:50px;\n    }\n   .wrapper{\n      width: 60%;\n      margin: 60px auto;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map