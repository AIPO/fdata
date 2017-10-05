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
    title = 'App for reading API';
    private apiUrl = 'https://api.chucknorris.io/jokes/random';
    data: any = null;

    constructor(private  http: HttpClient) {
    }

    ngOnInit() {
        return this.http.get(this.apiUrl)
            .subscribe(data => {
            this.data = data;
            console.log(this.data);
        });
    }
}
