import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector:'login',
    templateUrl:'app/auth/login.component.html'
})
export class LoginComponent{
    password:string = "";
    email:string="";

    errorMessage: string;

    constructor( private _authService : AuthService,
    private _router:Router ){

    }

    onClick():void{
        this._authService.logIn(this.email, this.password)
            .subscribe(()=>
            {
                if(this._authService.admin) this._router.navigate(['/admin']);
                else if(this._authService.donor) this._router.navigate(['/donorprofile']);
                else console.log("oops");},
                error => this.errorMessage = <any>error);
    }
}
