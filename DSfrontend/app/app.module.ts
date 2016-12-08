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

@NgModule({
  imports: [ BrowserModule,
            FormsModule,
             HttpModule,
            RouterModule.forRoot([
                { path: 'welcome', component: WelcomeComponent },
                { path: 'donors', component: DonorListComponent},
                { path :'auth', component: DonorAuthComponent},
                { path: 'recipients', component: RecipientListComponent},
                  {path:'donorprofile', component:DonorProfileComponent}
                  //,
                // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
              ]),],
  declarations: [ AppComponent,
          DonorListComponent,
          DonorProfileComponent,
          WelcomeComponent,
          DonorAuthComponent,
          RecipientListComponent,
          LoginComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
