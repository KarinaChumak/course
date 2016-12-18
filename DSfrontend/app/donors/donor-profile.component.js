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
var ng2_webstorage_1 = require("ng2-webstorage");
var DonorProfileComponent = (function () {
    function DonorProfileComponent(_donorService, _authService, _router) {
        this._donorService = _donorService;
        this._authService = _authService;
        this._router = _router;
        this.donation = '';
        this.src = "";
        this.resizeOptions = {
            resizeMaxHeight: 300,
            resizeMaxWidth: 300
        };
    }
    DonorProfileComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    DonorProfileComponent.prototype.ngOnInit = function () {
        this.donor = this._authService.donor;
        console.log(this.donor.donations);
        console.log(this._authService.donor.donations);
    };
    DonorProfileComponent.prototype.OnDeleteProfile = function () {
        var _this = this;
        this._donorService.deleteProfile()
            .subscribe(function () { return _this._router.navigate(['/welcome']); }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileComponent.prototype.OnUpdateProfile = function () {
        this._router.navigate(['/updateprofile']);
    };
    DonorProfileComponent.prototype.OnLogOut = function () {
        var _this = this;
        this._authService.logOut()
            .subscribe(function () { return _this._router.navigate(['/welcome']); }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileComponent.prototype.OnAddDonation = function () {
        var _this = this;
        var obj = {
            id: this.donor._id,
            donation: this.donation
        };
        this._donorService.addDonation(obj)
            .subscribe(function () {
            _this._authService.donor.donations.push(_this.donation);
            console.log(_this.donor);
            console.log(_this._authService.donor);
        }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileComponent.prototype.OnAddAvatar = function () {
        var _this = this;
        var obj = {
            id: this.donor._id,
            avatar: this.src
        };
        this._donorService.addAvatar(obj)
            .subscribe(function () { return _this._authService.donor.avatar = obj.avatar; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        ng2_webstorage_1.LocalStorage(), 
        __metadata('design:type', Object)
    ], DonorProfileComponent.prototype, "donor", void 0);
    DonorProfileComponent = __decorate([
        core_1.Component({
            selector: 'donor-profile',
            templateUrl: './app/donors/donor-profile.component.html',
            styles: ["\n          .mdl-button--file input { \n        cursor: pointer; \n        height: 100%; \n        right: 0; \n        opacity: 0; \n        position: absolute; \n        top: 0; \n        width: 300px; \n        z-index: 4; \n    } \n    .mdl-textfield--file .mdl-textfield__input { \n        box-sizing: border-box; \n        width: calc(100% - 32px); \n    } \n    .mdl-textfield--file .mdl-button--file { \n        right: 0; }\n"]
        }), 
        __metadata('design:paramtypes', [donor_service_1.DonorService, auth_service_1.AuthService, router_1.Router])
    ], DonorProfileComponent);
    return DonorProfileComponent;
}());
exports.DonorProfileComponent = DonorProfileComponent;
//# sourceMappingURL=donor-profile.component.js.map