import {Component} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
    selector:'login',
    templateUrl:'app/auth/login.component.html'
})
export class LoginComponent{
    password:string = "";
    email:string="";

    errorMessage: string;

    constructor( private _authService : AuthService){

    }

    onClick():void{
        this._authService.logIn(this.email, this.password)
            .subscribe(status => console.log(this.email),
                error => this.errorMessage = <any>error);
    }
}
