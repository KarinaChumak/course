import {Component, OnInit} from "@angular/core";
import {IDonor} from "./donor";
import {DonorService} from "./donor.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'donor-profile',
    templateUrl:'./app/donors/donor-profile.component.html'
})

export class DonorProfileComponent{
    donor:IDonor = {};
    errorMessage: string;
    donation:string ='';
    avatar:string= '';

    constructor( private _donorService : DonorService,
    private  _authService: AuthService,
    private _router: Router){

    }

    ngOnInit():void{
        this.donor = this._authService.donor;
    }

    OnDeleteProfile():void{
        this._donorService.deleteProfile()
            .subscribe(()=>this._router.navigate(['/welcome']),
                error => this.errorMessage = <any>error);
    }

    OnLogOut():void{
        this._authService.logOut()
            .subscribe(()=>this._router.navigate(['/welcome']),
                error => this.errorMessage = <any>error);
    }

    OnAddDonation() :void
    {
        this._donorService.addDonation(this.donation)
            .subscribe(data=>console.log(data),
                error => this.errorMessage = <any>error);
    }
    // OnAddAvatar():void{
    //     this._donorService.addAvatar(this.avatar)
    //         .subscribe(data=>console.log(data),
    //             error => this.errorMessage = <any>error);
    // }


}