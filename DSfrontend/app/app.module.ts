import { NgModule } from '@angular/core';
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
import {AdminComponent} from "./admin/admin.component";
import {MdlModule} from 'angular2-mdl';
import {DonorPipe} from '../app/donors/donor.pipe'
import {CSSCarouselComponent} from "./home/carousel.component";

@NgModule({
  imports: [ BrowserModule,
            FormsModule,
             HttpModule,
            MdlModule,
             Ng2Webstorage,
            RouterModule.forRoot([
                { path: 'welcome', component: WelcomeComponent },
                { path: 'donors', component: DonorListComponent},
                { path :'auth', component: DonorAuthComponent},
                { path: 'recipients', component: RecipientListComponent},
                {path: 'admin', canActivate:[AdminGuard], component:AdminComponent},
                {path:'donorprofile', canActivate:[AuthorisationGuard], component:DonorProfileComponent},
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
              ]),],
  declarations: [ AppComponent,
          DonorListComponent,
          DonorProfileComponent,
          WelcomeComponent,
          DonorAuthComponent,
          RecipientListComponent,
          LoginComponent,
          AdminComponent,
      CSSCarouselComponent
          DonorPipe],
    providers : [DonorService, AuthService, RecipientService, AuthorisationGuard, AdminGuard],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
