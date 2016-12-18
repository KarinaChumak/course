import {Component} from "@angular/core";
import {INews} from "./news";
import {NewsService} from "./news.service";
import {LocalStorage} from "ng2-webstorage";
import {IAdmin} from "../admin/admin";
import {Router} from "@angular/router";


@Component({
        templateUrl:"app/news/news-list.component.html"
})
export class NewsListComponent{
       @LocalStorage()admin:IAdmin;
        newslist:INews[];
        errorMessage: string;

        constructor( private _newsService : NewsService,
            private _router: Router){
        }

        onClick():void{
            this._router.navigate(['/addnews']);
        }

        deleteNews(news:INews):void{
            this._newsService.deleteNews(news)
                .subscribe((data) => console.log(data),
                    error => this.errorMessage = <any>error);
        }

        ngOnInit():void{
                this._newsService.getNews()
                    .subscribe(news => this.newslist = news,
                        error => this.errorMessage = <any>error);
        }

}