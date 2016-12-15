import { Component,OnInit } from '@angular/core';
import {IDonor} from "./donors/donor";
import {AuthService} from "./auth/auth.service";
import {LocalStorage} from "ng2-webstorage";


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

    pageTitle: string = 'Donor search';

    constructor(private _authService : AuthService){

    }

    ngOnInit() : void {
        this.donor = this._authService.donor;
    }



}
