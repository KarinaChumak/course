import {Component} from "@angular/core";
import {IRecipient} from "./recipient";
import {RecipientService} from "./recipient.service";
import {AdminService} from "../admin/admin.service";


@Component({
    templateUrl:'app/recipients/recipients-list.component.html'
})
export  class  RecipientListComponent{
    recipients: IRecipient[];
    errorMessage: string;
    cityFilter:string="";
    groupFilter:number;
    rhesusFilter:string="";




    constructor( private _recipientService : RecipientService,
            private _adminService: AdminService){
    }

    ngOnInit():void{

        this._recipientService.getRecipients()
            .subscribe(recipients => this.recipients = recipients,
                error => this.errorMessage = <any>error);
    }


}