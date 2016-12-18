import { Component,OnInit } from '@angular/core';
import {IDonor} from "./donors/donor";
import {AuthService} from "./auth/auth.service";
import {LocalStorage} from "ng2-webstorage";
import {IAdmin} from "./admin/admin";
import {Router} from "@angular/router";


@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    styles: [`
    :host {
      display: block;
      margin: 10px;
      
      
    }
    .navbar-default{
    background-color: rgb(255, 51, 51);
    
    
      }
      .navbar-right{
     position: absolute;
     right: 70px;
      }
      
    .navbar-brand{
    color: white;
    }
    li a {
    color:white;
    }
  `]
})
export class AppComponent implements OnInit{

      @LocalStorage() donor:IDonor ;
    @LocalStorage() admin:IAdmin;

    errorMessage: string;

    pageTitle: string = 'Donor search';

    constructor(private _authService : AuthService,
    private _router: Router){

    }

    ngOnInit() : void {
        this.donor = this._authService.donor;
        this.admin = this._authService.admin;
    }

    OnLogOut():void{
        this._authService.logOut()
            .subscribe(()=>this._router.navigate(['/welcome']),
                error => this.errorMessage = <any>error);
    }



}
