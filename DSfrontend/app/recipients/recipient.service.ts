
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {IRecipient} from "./recipient";



@Injectable()
export class RecipientService{


    constructor(private _http : Http){

    }

    getRecipients():Observable<IRecipient[]>{
        return this._http.get('/api/recipients')
            .map((response: Response)=><IRecipient[]>response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    addRecipient(recipient:IRecipient):Observable<Response>{
        return this._http.post('/api/recipients/create', {recipient})
            .map((response: Response)=>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);

    }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
