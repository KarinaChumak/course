import {Component} from "@angular/core";
import {IRecipient} from "./recipient";
import {RecipientService} from "./recipient.service";
import {AdminService} from "../admin/admin.service";


@Component({
    templateUrl:'app/recipients/new-recipients.component.html'

})
export  class NewRecipientsComponent{
    recipients: IRecipient[];
    errorMessage: string;
    cityFilter:string="";
    groupFilter:number;
    rhesusFilter:string="";




    constructor( private _recipientService : RecipientService,
                 private _adminService: AdminService){
    }

    ngOnInit():void{
        this._adminService.getNewRecipients()
            .subscribe(recipients => this.recipients = recipients,
                error => this.errorMessage = <any>error);
    }

    acceptRecipient(recipient: IRecipient):void {
        recipient.acceptedColor="palegreen";
        this._adminService.acceptRecipient(recipient)
            .subscribe(status => console.log(status),
                error => this.errorMessage = <any>error);
    }

    deleteRecipient(recipient: IRecipient):void{
        recipient.acceptedColor="coral";
        this._adminService.deleteRecipient(recipient)
            .subscribe(status => console.log(status),
                error => this.errorMessage = <any>error);

    }


}