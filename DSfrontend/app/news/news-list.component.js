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
var ng2_webstorage_1 = require("ng2-webstorage");
var router_1 = require("@angular/router");
var NewsListComponent = (function () {
    function NewsListComponent(_newsService, _router) {
        this._newsService = _newsService;
        this._router = _router;
    }
    NewsListComponent.prototype.onClick = function () {
        this._router.navigate(['/addnews']);
    };
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getNews()
            .subscribe(function (news) { return _this.newslist = news; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        ng2_webstorage_1.LocalStorage(), 
        __metadata('design:type', Object)
    ], NewsListComponent.prototype, "admin", void 0);
    NewsListComponent = __decorate([
        core_1.Component({
            templateUrl: "app/news/news-list.component.html"
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.Router])
    ], NewsListComponent);
    return NewsListComponent;
}());
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map