import {Injectable} from "@angular/core";
import {INews} from "./news";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService{

    constructor(private _http : Http){

    }

    getNews():Observable<INews[]>{
        return this._http.get('/api/news')
            .map((response: Response)=><INews[]>response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    addNews(news:INews): Observable<Response>{
        return this._http.post('/api/news/create', news)
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