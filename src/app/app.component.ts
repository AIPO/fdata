import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    newUrl: any;
    title = 'App for reading API';
    private _apiUrl = 'https://api.chucknorris.io/jokes/random';
    joke: any;

    constructor(private  http: HttpClient) {
    }

    ngOnInit() {
        return this.http.get(this._apiUrl)
            .subscribe(data => {
                this.joke = data;
                console.log(this.joke);
            });
    }
}
