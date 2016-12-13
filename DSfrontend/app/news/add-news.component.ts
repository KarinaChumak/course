import {Component} from "@angular/core";
import {INews} from "./news";
import {NewsService} from "./news.service";
import {Router} from "@angular/router";


@Component({
    templateUrl :"app/news/add-news.component.html"

})
export class AddNewsComponent{
    news:INews  = {};

    constructor( private _newsService: NewsService,
     private _router: Router){}


     addNews():void{
         this._newsService.addNews(this.news)
             .subscribe(() => this._router.navigate(['/news']),
                 error => this.errorMessage = <any>error);
     }
}