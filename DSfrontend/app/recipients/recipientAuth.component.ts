import {Component} from "@angular/core";
import {IRecipient} from "./recipient";
import {RecipientService} from "./recipient.service";

@Component({
        templateUrl:"app/recipients/recipientAuth.component.html"
})
export class RecipientAuthComponent{
    recipient:IRecipient ={};
    errorMessage: string;

    constructor(private _recipientService: RecipientService){}

    addRecipient():void{
        this._recipientService.addRecipient(this.recipient)
            .subscribe(status => console.log(status),
                error => this.errorMessage = <any>error);

    }



}
