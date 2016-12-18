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
var angular2_polymer_1 = require('@vaadin/angular2-polymer');
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.birthday = "2000-01-01";
    }
    DatePickerComponent = __decorate([
        core_1.Component({
            selector: 'my-date-picker-simple-component',
            template: "\n      <vaadin-date-picker label=\"Pick a date\"></vaadin-date-picker>\n      <vaadin-date-picker label=\"Birthday\" [(value)]=\"birthday\"></vaadin-date-picker>\n    ",
            directives: [angular2_polymer_1.PolymerElement('vaadin-date-picker')]
        }), 
        __metadata('design:paramtypes', [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=date-picker.component.js.map