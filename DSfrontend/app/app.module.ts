import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DonorListComponent} from '../app/donors/donor-list.component'
import  {HttpModule} from '@angular/http'
import { AppComponent }  from './app.component';
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {DonorAuthComponent} from "./auth/donorAuth.component";
import {DonorProfileComponent} from "./donors/donor-profile.component";
import { FormsModule } from '@angular/forms';
import {RecipientListComponent} from "./recipients/recipients-list.component";
import {LoginComponent} from "./auth/logIn.component";
import {AuthorisationGuard} from "./guards/authorisation-guard";
import {AdminGuard} from "./guards/admin.guard";
import {DonorService} from '../app/donors/donor.service'
import {AuthService} from "./auth/auth.service";
import {RecipientService} from "./recipients/recipient.service";
import {Ng2Webstorage} from 'ng2-webstorage';
import {MdlModule} from 'angular2-mdl';
import {CityPipe, GroupPipe, RhesusPipe, RatingPipe} from '../app/donors/donor.pipe'
import {CSSCarouselComponent} from "./home/carousel.component";
import {RecipientAuthComponent} from "./recipients/recipientAuth.component";
import {NewsService} from "./news/news.service";
import {AddNewsComponent} from "./news/add-news.component";
import {NewsListComponent} from "./news/news-list.component";
import {ReversePipe} from "./news/reverse.pipe";
import {DonorProfileUpdateComponent} from "./donors/donor-profile-update.component";
import {NewRecipientsComponent} from "./recipients/new-recipients.component";
import {AdminService} from "./admin/admin.service";
import {NewRecipientsPipe} from "./recipients/new-recipients.pipe";
import {DonorRatingComponent} from "./donors/donor-rating.component";
import {InfoComponent} from "./info/info.component";
import { ImageUploadModule } from 'ng2-imageupload';
import {DatePickerComponent} from "./assets/date-picker.component";
import {PolymerElement} from "@vaadin/angular2-polymer";

@NgModule({
  imports: [ BrowserModule,
            FormsModule,
             HttpModule,
             MdlModule,
             Ng2Webstorage,
             ImageUploadModule,
             RouterModule.forRoot([
                { path: 'welcome', component: WelcomeComponent },
                { path: 'donors', component: DonorListComponent},
                { path :'auth', component: DonorAuthComponent},
                {path: 'news', component: NewsListComponent},
                {path:'addnews', component: AddNewsComponent},
                { path: 'recipients', component: RecipientListComponent},
                {path:'recipientauth', component: RecipientAuthComponent},
                {path:'rating', component:DonorRatingComponent},
                {path:'info', component:InfoComponent},
                {path: 'new_recipients', canActivate:[AdminGuard], component: NewRecipientsComponent},
                {path:'donorprofile', canActivate:[AuthorisationGuard], component:DonorProfileComponent},
                {path: 'updateprofile', component:DonorProfileUpdateComponent},
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
              ]),],
  declarations: [ AppComponent,
          DonorListComponent,
          DonorProfileComponent,
          WelcomeComponent,
          DatePickerComponent,
          DonorAuthComponent,
          RecipientListComponent,
          LoginComponent,
          AddNewsComponent,
          CSSCarouselComponent,
          RecipientAuthComponent,
          InfoComponent,
          DonorProfileUpdateComponent,
          DonorRatingComponent,
          NewRecipientsComponent,
          NewsListComponent,
          NewRecipientsPipe,
          CityPipe,
          ReversePipe,
          RatingPipe,
          RhesusPipe,
          PolymerElement('vaadin-date-picker'),
          GroupPipe],
    providers : [DonorService, AuthService,AdminService, RecipientService, AuthorisationGuard,AdminGuard,NewsService ],
    bootstrap: [ AppComponent ],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
