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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var ng2_webstorage_1 = require('ng2-webstorage');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.signUp = function (donor) {
        return this._http.post('/api/auth/signUp', donor)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Sign up: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.logIn = function (email, password) {
        var _this = this;
        return this._http.post('/api/auth/logIn', { email: email, password: password })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            if (data.role) {
                _this.admin = data;
                console.log(_this.admin);
            }
            else {
                _this.donor = data;
                console.log(_this.donor);
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logOut = function () {
        this.donor = null;
        this.admin = null;
        return this._http.get('/api/auth/logOut')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    __decorate([
        ng2_webstorage_1.LocalStorage(), 
        __metadata('design:type', Object)
    ], AuthService.prototype, "donor", void 0);
    __decorate([
        ng2_webstorage_1.LocalStorage(), 
        __metadata('design:type', Object)
    ], AuthService.prototype, "admin", void 0);
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map