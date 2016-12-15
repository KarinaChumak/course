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
var auth_service_1 = require("../auth/auth.service");
var router_1 = require("@angular/router");
var donor_service_1 = require("./donor.service");
var DonorProfileUpdateComponent = (function () {
    function DonorProfileUpdateComponent(_donorService, _authService, _router) {
        this._donorService = _donorService;
        this._authService = _authService;
        this._router = _router;
    }
    DonorProfileUpdateComponent.prototype.onUpdate = function () {
        var _this = this;
        this._donorService.updateProfile(this.donorupdate)
            .subscribe(function () { return _this._router.navigate(['/donorprofile']); }, function (error) { return _this.errorMessage = error; });
    };
    DonorProfileUpdateComponent.prototype.ngOnInit = function () {
        this.donorupdate = Object.assign({}, this._authService.donor);
        //  this.donorupdate = this._authService.donor ;
    };
    DonorProfileUpdateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/donors/donor-profile-update.component.html',
            styles: ["\n  \n    .absolute{position: absolute; left:30px;}\n    .relative{position: absolute; right: 30px;}\n    .mdl-dialog__actions{position: absolute; right: 50px;bottom: 10px}\n"]
        }), 
        __metadata('design:paramtypes', [donor_service_1.DonorService, auth_service_1.AuthService, router_1.Router])
    ], DonorProfileUpdateComponent);
    return DonorProfileUpdateComponent;
}());
exports.DonorProfileUpdateComponent = DonorProfileUpdateComponent;
//# sourceMappingURL=donor-profile-update.component.js.map