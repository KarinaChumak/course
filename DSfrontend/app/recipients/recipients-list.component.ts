import {Component} from "@angular/core";
import {IRecipient} from "./recipient";
import {RecipientService} from "./recipient.service";


@Component({
    templateUrl:'app/recipients/recipients-list.component.html'
})
export  class  RecipientListComponent{
    recipients: IRecipient[];
    errorMessage: string;


    constructor( private _recipientService : RecipientService){
    }

    ngOnInit():void{

        this._recipientService.getRecipients()
            .subscribe(recipients => this.recipients = recipients,
                error => this.errorMessage = <any>error);
    }
}