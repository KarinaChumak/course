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
var donor_rating_component_1 = require("./donors/donor-rating.component");
var info_component_1 = require("./info/info.component");
var ng2_imageupload_1 = require('ng2-imageupload');
var date_picker_component_1 = require("./assets/date-picker.component");
var angular2_polymer_1 = require("@vaadin/angular2-polymer");
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
                ng2_imageupload_1.ImageUploadModule,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'donors', component: donor_list_component_1.DonorListComponent },
                    { path: 'auth', component: donorAuth_component_1.DonorAuthComponent },
                    { path: 'news', component: news_list_component_1.NewsListComponent },
                    { path: 'addnews', component: add_news_component_1.AddNewsComponent },
                    { path: 'recipients', component: recipients_list_component_1.RecipientListComponent },
                    { path: 'recipientauth', component: recipientAuth_component_1.RecipientAuthComponent },
                    { path: 'rating', component: donor_rating_component_1.DonorRatingComponent },
                    { path: 'info', component: info_component_1.InfoComponent },
                    { path: 'new_recipients', canActivate: [admin_guard_1.AdminGuard], component: new_recipients_component_1.NewRecipientsComponent },
                    { path: 'donorprofile', canActivate: [authorisation_guard_1.AuthorisationGuard], component: donor_profile_component_1.DonorProfileComponent },
                    { path: 'updateprofile', component: donor_profile_update_component_1.DonorProfileUpdateComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]),],
            declarations: [app_component_1.AppComponent,
                donor_list_component_1.DonorListComponent,
                donor_profile_component_1.DonorProfileComponent,
                welcome_component_1.WelcomeComponent,
                date_picker_component_1.DatePickerComponent,
                donorAuth_component_1.DonorAuthComponent,
                recipients_list_component_1.RecipientListComponent,
                logIn_component_1.LoginComponent,
                add_news_component_1.AddNewsComponent,
                carousel_component_1.CSSCarouselComponent,
                recipientAuth_component_1.RecipientAuthComponent,
                info_component_1.InfoComponent,
                donor_profile_update_component_1.DonorProfileUpdateComponent,
                donor_rating_component_1.DonorRatingComponent,
                new_recipients_component_1.NewRecipientsComponent,
                news_list_component_1.NewsListComponent,
                new_recipients_pipe_1.NewRecipientsPipe,
                donor_pipe_1.CityPipe,
                reverse_pipe_1.ReversePipe,
                donor_pipe_1.RatingPipe,
                donor_pipe_1.RhesusPipe,
                angular2_polymer_1.PolymerElement('vaadin-date-picker'),
                donor_pipe_1.GroupPipe],
            providers: [donor_service_1.DonorService, auth_service_1.AuthService, admin_service_1.AdminService, recipient_service_1.RecipientService, authorisation_guard_1.AuthorisationGuard, admin_guard_1.AdminGuard, news_service_1.NewsService],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map