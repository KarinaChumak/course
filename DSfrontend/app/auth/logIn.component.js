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
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.password = "";
        this.email = "";
    }
    LoginComponent.prototype.onClick = function () {
        var _this = this;
        this._authService.logIn(this.email, this.password)
            .subscribe(function () {
            if (_this._authService.admin)
                _this._router.navigate(['/new_recipients']);
            else if (_this._authService.donor)
                _this._router.navigate(['/donorprofile']);
            else
                console.log("oops");
        }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/auth/login.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=logIn.component.js.map