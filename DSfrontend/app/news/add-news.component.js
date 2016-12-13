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
var news_service_1 = require("./news.service");
var router_1 = require("@angular/router");
var AddNewsComponent = (function () {
    function AddNewsComponent(_newsService, _router) {
        this._newsService = _newsService;
        this._router = _router;
        this.news = {};
    }
    AddNewsComponent.prototype.addNews = function () {
        var _this = this;
        this._newsService.addNews(this.news)
            .subscribe(function () { return _this._router.navigate(['/news']); }, function (error) { return _this.errorMessage = error; });
    };
    AddNewsComponent = __decorate([
        core_1.Component({
            templateUrl: "app/news/add-news.component.html"
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.Router])
    ], AddNewsComponent);
    return AddNewsComponent;
}());
exports.AddNewsComponent = AddNewsComponent;
//# sourceMappingURL=add-news.component.js.map