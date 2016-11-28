
import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {IDonor} from "../donors/donor";

@Component({
    templateUrl:'app/auth/authForm.component.html'

})
export class AuthFormComponent{
    donor:IDonor={};

    errorMessage: string;

    constructor( private _authService : AuthService){

    }

    onClick():void{

        this._authService.signUp(this.donor)
            .subscribe(status => console.log(status),
                error => this.errorMessage = <any>error);
    }


}