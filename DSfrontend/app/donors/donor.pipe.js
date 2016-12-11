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
var DonorPipe = (function () {
    function DonorPipe() {
    }
    DonorPipe.prototype.transform = function (donors, filterBy) {
        filterBy.city = filterBy.city ? filterBy.city.toLocaleLowerCase() : null;
        return filterBy.city ? donors.filter(function (donor) {
            return donor.city.toLocaleLowerCase().indexOf(filterBy.city) !== -1;
        }) : donors;
    };
    DonorPipe = __decorate([
        core_1.Pipe({
            name: 'donorFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], DonorPipe);
    return DonorPipe;
}());
exports.DonorPipe = DonorPipe;
//# sourceMappingURL=donor.pipe.js.map