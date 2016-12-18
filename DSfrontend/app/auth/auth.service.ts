import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {IDonor} from "../donors/donor";
import {LocalStorage} from 'ng2-webstorage';
import {IAdmin} from "../admin/admin";

@Injectable()
export class AuthService {
    @LocalStorage()
    public donor:IDonor ;
    @LocalStorage()
    public admin:IAdmin;




    constructor(private  _http : Http){

    }


    signUp(donor:IDonor):Observable<Response> {
        return this._http.post('/api/auth/signUp', donor)
            .map((response: Response)=>response.json())
            .do(data => console.log('Sign up: ' +  JSON.stringify(data)))
            .catch(this.handleError);

    }

    logIn(email:string, password:string):Observable<Response>{

        return this._http.post('/api/auth/logIn', {email :email, password: password})
            .map((response: Response)=>response.json())
            .do(data =>
                {if(data.role)
                     {this.admin = <IAdmin>data;
                         this.admin.password=null;
                      console.log(this.admin)}
                else
                    {this.donor= <IDonor>data;
                        this.donor.password=null;
                    console.log(this.donor)}})
            .catch(this.handleError);
    }

    logOut():Observable<Response>{
        this.donor=null;
        this.admin=null;
        return this._http.get('/api/auth/logOut')
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