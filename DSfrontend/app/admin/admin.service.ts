import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {IRecipient} from "../recipients/recipient";


@Injectable()
export class  AdminService{

    constructor(private  _http : Http){

    }


    getNewRecipients():Observable<IRecipient[]>{
        return this._http.get('/api/admin/new_recipients')
            .map((response: Response)=><IRecipient[]>response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }


    acceptRecipient(recipient:IRecipient): Observable<Response>{
        return this._http.post('/api/admin/accept', recipient)
            .map((response: Response)=>response.json())
            .do(data => console.log( JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteRecipient(recipient:IRecipient): Observable<Response>{

        return this._http.delete('/api/admin/delete', new RequestOptions({body:recipient}))
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