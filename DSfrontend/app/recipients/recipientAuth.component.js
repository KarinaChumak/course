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
var recipient_service_1 = require("./recipient.service");
var RecipientAuthComponent = (function () {
    function RecipientAuthComponent(_recipientService) {
        this._recipientService = _recipientService;
        this.recipient = {};
        this.resizeOptions = {
            resizeMaxHeight: 300,
            resizeMaxWidth: 300
        };
    }
    RecipientAuthComponent.prototype.selected = function (imageResult) {
        this.recipient.avatar = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    RecipientAuthComponent.prototype.addRecipient = function () {
        var _this = this;
        this._recipientService.addRecipient(this.recipient)
            .subscribe(function (status) { return console.log(status); }, function (error) { return _this.errorMessage = error; });
    };
    RecipientAuthComponent = __decorate([
        core_1.Component({
            templateUrl: "app/recipients/recipientAuth.component.html",
            styles: ["\n          .mdl-button--file input { \n        cursor: pointer; \n        height: 100%; \n        right: 0; \n        opacity: 0; \n        position: absolute; \n        top: 0; \n        width: 300px; \n        z-index: 4; \n    } \n    .mdl-textfield--file .mdl-textfield__input { \n        box-sizing: border-box; \n        width: calc(100% - 32px); \n    } \n    .mdl-textfield--file .mdl-button--file { \n        right: 0; }\n"]
        }), 
        __metadata('design:paramtypes', [recipient_service_1.RecipientService])
    ], RecipientAuthComponent);
    return RecipientAuthComponent;
}());
exports.RecipientAuthComponent = RecipientAuthComponent;
//# sourceMappingURL=recipientAuth.component.js.map