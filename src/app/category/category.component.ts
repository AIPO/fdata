import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    private apiUrl = 'https://api.chucknorris.io/jokes/categories';
    categories: any;

    constructor(private  http: HttpClient) {
    }

    ngOnInit() {
        return this.http.get(this.apiUrl)
            .subscribe(data => {
                this.categories = data;
            });

    }

    public onChange(event): void {  // event will give you full breif of action
        //   const newVal = event.target.value;
        console.log(event.target.value);
    }
}
