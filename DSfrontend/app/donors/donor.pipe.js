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
var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (donors, filterBy) {
        console.log(filterBy);
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? donors.filter(function (donor) {
            return donor.city.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : donors;
    };
    CityPipe = __decorate([
        core_1.Pipe({
            name: 'cityFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], CityPipe);
    return CityPipe;
}());
exports.CityPipe = CityPipe;
var GroupPipe = (function () {
    function GroupPipe() {
    }
    GroupPipe.prototype.transform = function (donors, filterBy) {
        console.log(filterBy);
        filterBy = filterBy ? filterBy : null;
        return filterBy ? donors.filter(function (donor) {
            return donor.group == filterBy ? true : false;
        }) : donors;
    };
    GroupPipe = __decorate([
        core_1.Pipe({
            name: 'groupFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], GroupPipe);
    return GroupPipe;
}());
exports.GroupPipe = GroupPipe;
var RhesusPipe = (function () {
    function RhesusPipe() {
    }
    RhesusPipe.prototype.transform = function (donors, filterBy) {
        filterBy = filterBy ? filterBy : null;
        return filterBy ? donors.filter(function (donor) {
            return donor.rhesus == filterBy ? true : false;
        }) : donors;
    };
    RhesusPipe = __decorate([
        core_1.Pipe({
            name: 'rhesusFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], RhesusPipe);
    return RhesusPipe;
}());
exports.RhesusPipe = RhesusPipe;
//# sourceMappingURL=donor.pipe.js.map