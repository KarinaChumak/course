import {Component, OnInit} from "@angular/core";
import {IDonor} from "./donor";
import {DonorService} from "./donor.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {LocalStorage} from "ng2-webstorage";
import {ImageResult, ResizeOptions} from "ng2-imageupload";

@Component({
    selector: 'donor-profile',
    templateUrl:'./app/donors/donor-profile.component.html',

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

export class DonorProfileComponent implements OnInit{
    @LocalStorage() donor:IDonor ;
    errorMessage: string;
    donation:string ='';

    src: string = "";
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 300,
        resizeMaxWidth: 300
    };

    constructor( private _donorService : DonorService,
    private _authService: AuthService,
    private _router: Router){
        }



    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

    ngOnInit():void{

        this.donor = this._authService.donor;
        console.log(this.donor.donations);
        console.log(this._authService.donor.donations);
   }

    OnDeleteProfile():void{
        this._donorService.deleteProfile()
            .subscribe(()=>this._router.navigate(['/welcome']),
                error => this.errorMessage = <any>error);
    }

    OnUpdateProfile():void{
        this._router.navigate(['/updateprofile']);
    }

    OnLogOut():void{
        this._authService.logOut()
            .subscribe(()=>this._router.navigate(['/welcome']),
                error => this.errorMessage = <any>error);
    }

    OnAddDonation() :void
    {
        let obj : any = {
            id : this.donor._id,
            donation : this.donation
        };

        this._donorService.addDonation(obj)
            .subscribe(()=> {
                    this._authService.donor.donations.push(this.donation);
                console.log(this.donor);
                console.log(this._authService.donor);
                },
                error => this.errorMessage = <any>error);
    }



    OnAddAvatar():void{

        let obj : any = {
            id : this.donor._id,
            avatar : this.src
        };


        this._donorService.addAvatar(obj)
            .subscribe(()=>this._authService.donor.avatar = obj.avatar,
                error => this.errorMessage = <any>error);
    }


}