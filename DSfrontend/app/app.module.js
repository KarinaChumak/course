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
var authorisation_guard_1 = require("./guards/authorisation-guard");
var admin_guard_1 = require("./guards/admin.guard");
var donor_service_1 = require('../app/donors/donor.service');
var auth_service_1 = require("./auth/auth.service");
var recipient_service_1 = require("./recipients/recipient.service");
var ng2_webstorage_1 = require('ng2-webstorage');
var admin_component_1 = require("./admin/admin.component");
var angular2_mdl_1 = require('angular2-mdl');
var donor_pipe_1 = require('../app/donors/donor.pipe');
var carousel_component_1 = require("./home/carousel.component");
var recipientAuth_component_1 = require("./recipients/recipientAuth.component");
var news_service_1 = require("./news/news.service");
var add_news_component_1 = require("./news/add-news.component");
var news_list_component_1 = require("./news/news-list.component");
var reverse_pipe_1 = require("./news/reverse.pipe");
var donor_profile_update_component_1 = require("./donors/donor-profile-update.component");
var new_recipients_component_1 = require("./recipients/new-recipients.component");
var admin_service_1 = require("./admin/admin.service");
var new_recipients_pipe_1 = require("./recipients/new-recipients.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_mdl_1.MdlModule,
                ng2_webstorage_1.Ng2Webstorage,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'donors', component: donor_list_component_1.DonorListComponent },
                    { path: 'auth', component: donorAuth_component_1.DonorAuthComponent },
                    { path: 'news', component: news_list_component_1.NewsListComponent },
                    { path: 'addnews', component: add_news_component_1.AddNewsComponent },
                    { path: 'recipients', component: recipients_list_component_1.RecipientListComponent },
                    { path: 'admin', canActivate: [admin_guard_1.AdminGuard], component: admin_component_1.AdminComponent },
                    { path: 'recipientauth', component: recipientAuth_component_1.RecipientAuthComponent },
                    { path: 'new_recipients', component: new_recipients_component_1.NewRecipientsComponent },
                    { path: 'donorprofile', canActivate: [authorisation_guard_1.AuthorisationGuard], component: donor_profile_component_1.DonorProfileComponent },
                    { path: 'updateprofile', component: donor_profile_update_component_1.DonorProfileUpdateComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]),],
            declarations: [app_component_1.AppComponent,
                donor_list_component_1.DonorListComponent,
                donor_profile_component_1.DonorProfileComponent,
                welcome_component_1.WelcomeComponent,
                donorAuth_component_1.DonorAuthComponent,
                recipients_list_component_1.RecipientListComponent,
                logIn_component_1.LoginComponent,
                admin_component_1.AdminComponent,
                add_news_component_1.AddNewsComponent,
                carousel_component_1.CSSCarouselComponent,
                recipientAuth_component_1.RecipientAuthComponent,
                donor_profile_update_component_1.DonorProfileUpdateComponent,
                new_recipients_component_1.NewRecipientsComponent,
                news_list_component_1.NewsListComponent,
                new_recipients_pipe_1.NewRecipientsPipe,
                donor_pipe_1.CityPipe,
                reverse_pipe_1.ReversePipe,
                donor_pipe_1.RhesusPipe,
                donor_pipe_1.GroupPipe],
            providers: [donor_service_1.DonorService, auth_service_1.AuthService, admin_service_1.AdminService, recipient_service_1.RecipientService, authorisation_guard_1.AuthorisationGuard, admin_guard_1.AdminGuard, news_service_1.NewsService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map