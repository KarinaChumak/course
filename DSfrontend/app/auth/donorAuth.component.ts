
import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {IDonor} from "../donors/donor";
import {Router} from "@angular/router";

@Component({
    templateUrl:'app/auth/donorAuth.component.html',
    styles:[`
  
    .absolute{position: absolute; left:30px;}
    .relative{position: absolute; right: 30px;}
    .mdl-dialog__actions{position: absolute; right: 50px;bottom: 10px}
`]

})
export class DonorAuthComponent{
    donor:IDonor={};

    errorMessage: string;

    constructor( private _authService : AuthService,
    private _router:Router){

    }

    onClick():void{

        this._authService.signUp(this.donor)
            .subscribe(()=>this._router.navigate(['/donorprofile']),
                error => this.errorMessage = <any>error);

    }


}