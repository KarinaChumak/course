import {Router} from "@angular/router";
import {DonorService} from "../donors/donor.service";
import {AuthService} from "../auth/auth.service";
import {Component} from "@angular/core";
import {IAdmin} from "./admin";


@Component({
    templateUrl:'./app/admin/admin.component.html'
})
export class AdminComponent{

    errorMessage: string;
    admin:IAdmin ={};

    constructor( private _donorService : DonorService,
                 private  _authService: AuthService,
                 private _router: Router){    }

    OnLogOut():void{
        this._authService.logOut()
            .subscribe(()=>this._router.navigate(['/welcome']),
                error => this.errorMessage = <any>error);
    }

    ngOnInit():void{
        this.admin = this._authService.admin;
    }
}