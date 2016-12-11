import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class AuthorisationGuard implements CanActivate {

    constructor(private _router:Router, private _authService: AuthService){

    }
    canActivate(): boolean{
        if(this._authService.donor) return true;
        else {
            this._router.navigate(['/welcome']);
            return false;
        }
    }


}