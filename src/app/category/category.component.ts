import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import set = Reflect.set;

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    private apiUrl = 'https://api.chucknorris.io/jokes/random?categories';
    categories: any;
    newUrl: any;

    constructor(private  http: HttpClient) {
    }

    ngOnInit() {
        return this.http.get(this.apiUrl)
            .subscribe(data => {
                this.categories = data;
            });

    }

    public onChange(event): void {
            this.newUrl = 'https://api.chucknorris.io/jokes/random?category=' + event.target.value;
    }
}
