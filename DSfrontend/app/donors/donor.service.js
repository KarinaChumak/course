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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var auth_service_1 = require("../auth/auth.service");
var DonorService = (function () {
    function DonorService(_http, _authService) {
        this._http = _http;
        this._authService = _authService;
    }
    DonorService.prototype.getDonors = function () {
        return this._http.get('api/donors')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DonorService.prototype.deleteProfile = function () {
        this._authService.donor = null;
        return this._http.delete("/api/profile/delete")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //todo
    DonorService.prototype.addDonation = function (object) {
        return this._http.post("/api/profile/addDonation", object)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DonorService.prototype.updateProfile = function (donor) {
        var _this = this;
        return this._http.post("/api/profile/update", donor)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            _this._authService.donor = donor;
            console.log(JSON.stringify(data));
        })
            .catch(this.handleError);
    };
    DonorService.prototype.addAvatar = function (object) {
        return this._http.post("/api/profile/upload_avatar", object)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DonorService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DonorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], DonorService);
    return DonorService;
}());
exports.DonorService = DonorService;
//# sourceMappingURL=donor.service.js.map