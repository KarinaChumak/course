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
var platform_browser_1 = require('@angular/platform-browser');
var donor_list_component_1 = require('../app/donors/donor-list.component');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var router_1 = require("@angular/router");
var welcome_component_1 = require("./home/welcome.component");
var donorAuth_component_1 = require("./auth/donorAuth.component");
var donor_profile_component_1 = require("./donors/donor-profile.component");
var forms_1 = require('@angular/forms');
var recipients_list_component_1 = require("./recipients/recipients-list.component");
var logIn_component_1 = require("./auth/logIn.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'donors', component: donor_list_component_1.DonorListComponent },
                    { path: 'auth', component: donorAuth_component_1.DonorAuthComponent },
                    { path: 'recipients', component: recipients_list_component_1.RecipientListComponent },
                    { path: 'donorprofile', component: donor_profile_component_1.DonorProfileComponent }
                ]),],
            declarations: [app_component_1.AppComponent,
                donor_list_component_1.DonorListComponent,
                donor_profile_component_1.DonorProfileComponent,
                welcome_component_1.WelcomeComponent,
                donorAuth_component_1.DonorAuthComponent,
                recipients_list_component_1.RecipientListComponent,
                logIn_component_1.LoginComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map