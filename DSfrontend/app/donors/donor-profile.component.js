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
var donor_service_1 = require("./donor.service");
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth/auth.service");
var DonorProfileComponent = (function () {
    function DonorProfileComponent(_donorService, _authService, _router) {
        this._donorService = _donorService;
        this._authService = _authService;
        this._router = _router;
        this.donor = {};
        this.donation = '';
        this.avatar = '';
    }
    DonorProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._donorService.getProfile()
            .subscribe(function (donor) { return _this.donor = donor; }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileComponent.prototype.OnDeleteProfile = function () {
        var _this = this;
        this._donorService.deleteProfile()
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileComponent.prototype.OnLogOut = function () {
        var _this = this;
        this._authService.logOut()
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileComponent.prototype.OnAddDonation = function () {
        var _this = this;
        this._donorService.addDonation(this.donation)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileComponent = __decorate([
        core_1.Component({
            selector: 'donor-profile',
            templateUrl: 'app/donors/donor-profile.component.html'
        }), 
        __metadata('design:paramtypes', [donor_service_1.DonorService, auth_service_1.AuthService, router_1.Router])
    ], DonorProfileComponent);
    return DonorProfileComponent;
}());
exports.DonorProfileComponent = DonorProfileComponent;
//# sourceMappingURL=donor-profile.component.js.map