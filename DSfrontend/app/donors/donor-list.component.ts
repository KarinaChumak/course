import { Component, OnInit }  from '@angular/core';
import {IDonor} from './donor'
import {DonorService} from "./donor.service";
import {IFilter} from "./filter";

@Component({
    selector: 'pm-donors',
    templateUrl:'app/donors/donor-list.component.html',
    styleUrls: [`app/donors/donor-list.component.css`]

})
export class DonorListComponent implements  OnInit{
    donors: IDonor[];
    errorMessage: string;
    filterBy :IFilter ={};


    constructor( private _donorService : DonorService){
    }

    ngOnInit():void{
       this._donorService.getDonors()
           .subscribe(donors => this.donors = donors,
               error => this.errorMessage = <any>error);
    }
}