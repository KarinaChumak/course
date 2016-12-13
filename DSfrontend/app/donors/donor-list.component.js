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
var donor_service_1 = require("./donor.service");
var DonorListComponent = (function () {
    function DonorListComponent(_donorService) {
        this._donorService = _donorService;
        this.cityFilter = "";
        this.rhesusFilter = "";
    }
    DonorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._donorService.getDonors()
            .subscribe(function (donors) { return _this.donors = donors; }, function (error) { return _this.errorMessage = error; });
    };
    DonorListComponent = __decorate([
        core_1.Component({
            selector: 'pm-donors',
            templateUrl: 'app/donors/donor-list.component.html',
            styleUrls: ["app/donors/donor-list.component.css"]
        }), 
        __metadata('design:paramtypes', [donor_service_1.DonorService])
    ], DonorListComponent);
    return DonorListComponent;
}());
exports.DonorListComponent = DonorListComponent;
//# sourceMappingURL=donor-list.component.js.map