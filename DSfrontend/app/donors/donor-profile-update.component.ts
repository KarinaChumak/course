
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {IDonor} from "../donors/donor";
import {Router} from "@angular/router";
import {DonorService} from "./donor.service";
import {LocalStorage} from "ng2-webstorage";

@Component({
    templateUrl:'app/donors/donor-profile-update.component.html',
    styles:[`
  
    .absolute{position: absolute; left:30px;}
    .relative{position: absolute; right: 30px;}
    .mdl-dialog__actions{position: absolute; right: 50px;bottom: 10px}
  

`]

})
export class DonorProfileUpdateComponent implements OnInit{
    donorupdate:IDonor;


    errorMessage: string;

    constructor( private _donorService : DonorService, private _authService: AuthService,
                 private _router:Router){


    }

    onUpdate():void{
        console.log(this.donorupdate);
        this._donorService.updateProfile(this.donorupdate)
            .subscribe(()=>this._router.navigate(['/donorprofile']),
                error => this.errorMessage = <any>error);

    }

    ngOnInit() : void {

       this.donorupdate = Object.assign({},this._authService.donor);

      //  this.donorupdate = this._authService.donor ;
    }

}