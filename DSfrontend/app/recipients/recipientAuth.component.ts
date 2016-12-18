import {Component} from "@angular/core";
import {IRecipient} from "./recipient";
import {RecipientService} from "./recipient.service";

import {ImageResult, ResizeOptions} from "ng2-imageupload";

@Component({
        templateUrl:"app/recipients/recipientAuth.component.html",
    styles:[`
          .mdl-button--file input { 
        cursor: pointer; 
        height: 100%; 
        right: 0; 
        opacity: 0; 
        position: absolute; 
        top: 0; 
        width: 300px; 
        z-index: 4; 
    } 
    .mdl-textfield--file .mdl-textfield__input { 
        box-sizing: border-box; 
        width: calc(100% - 32px); 
    } 
    .mdl-textfield--file .mdl-button--file { 
        right: 0; }
`]
})
export class RecipientAuthComponent{
    recipient:IRecipient ={};
    errorMessage: string;


    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 300,
        resizeMaxWidth: 300
    };

    constructor(private _recipientService: RecipientService){}

    selected(imageResult: ImageResult) {
        this.recipient.avatar = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

    addRecipient():void{
        this._recipientService.addRecipient(this.recipient)
            .subscribe(status => console.log(status),
                error => this.errorMessage = <any>error);

    }



}
