import { Component } from '@angular/core';
import {IDonor} from "../donors/donor";
import {AuthService} from "../auth/auth.service";
import {LocalStorage} from "ng2-webstorage";
import {CSSCarouselComponent} from "./carousel.component";
import {Router} from "@angular/router";
import {IAdmin} from "../admin/admin";

@Component({
    templateUrl: 'app/home/welcome.component.html',
    styles: [`
    .buttons{
        position: absolute;
        top:500px;
        left: 20px;
    }
    .h3{
        position: absolute;
        top:50px;
        left:50px;
    }
   .wrapper{
      width: 60%;
      margin: 60px auto;
    }
  `]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';

    @LocalStorage()
    public donor:IDonor ;
   @LocalStorage()
   public admin:IAdmin;

    constructor(private _authService : AuthService,private _router: Router){

    }

    onClick():void{
        this._router.navigate(['/recipientauth']);
    }

    onClickDonor():void{
        this._router.navigate(['/auth']);
    }



}
