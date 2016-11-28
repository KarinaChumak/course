import { Component } from '@angular/core';
import {DonorService} from '../app/donors/donor.service'
import {AuthService} from "./auth/auth.service";
import {RecipientService} from "./recipients/recipient.service";

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    providers : [DonorService, AuthService, RecipientService]
})
export class AppComponent {

    pageTitle: string = 'Donor search';
}
