
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import  {IDonor} from './donor';

@Injectable()
export class DonorService{

    constructor(private  _http : Http){

    }

    getDonors():Observable<IDonor[]>{
        return this._http.get('api/donors')
            .map((response: Response)=><IDonor[]>response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }


   getProfile():Observable<IDonor>{
       return this._http.get('api/profile')
           .map((response: Response)=><IDonor>response.json())
           .do(data => console.log( JSON.stringify(data)))
           .catch(this.handleError);

   }

   deleteProfile():Observable<JSON>{
       return this._http.delete("/api/profile/delete")
        .map((response: Response)=>response.json())
           .do(data => console.log( JSON.stringify(data)))
           .catch(this.handleError);
   }

   addDonation(donation:string):Observable<JSON>{
       return this._http.post("/api/profile/addDonation",{donation:donation})
           .map((response: Response)=>response.json())
           .do(data => console.log( JSON.stringify(data)))
           .catch(this.handleError);
   }

   addAvatar(avatar:string):Observable<JSON>{
       return this._http.post("/api/profile/upload_avatar",{avatar:avatar})
           .map((response: Response)=>response.json())
           .do(data => console.log( JSON.stringify(data)))
           .catch(this.handleError);
   }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
